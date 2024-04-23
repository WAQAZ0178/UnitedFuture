import axios, { AxiosResponse, AxiosError } from "axios";
import { URL } from "../../global/constants";
import { Toast } from "../toast";
import { useSelector } from "react-redux";
import { getKey, getObject, storeObject } from "../storageServices";
import { refreshAccessToken } from "../../store/actions/user";

const getUrl = (rel: string) => `${URL.baseURL}${rel}`;

const axiosInstance = axios.create({
  baseURL: URL.baseURL, // Set your base URL
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify headers or do other stuff here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError | any) => {
    const originalRequest = error.config;
    if (error.response) {
      if (error.response.status === 401) {
        originalRequest._retry = true;
        let tokens: any = await getObject("tokens");
        console.log("====================================");
        console.log("token from asynstorage ", tokens);
        console.log("refresh token from asynstorage ", tokens?.refresh);
        console.log("====================================");
        const response: any = await postData(
          "auth/refresh-tokens",
          {
            refresh_token: tokens?.refresh,
          },
          tokens?.access
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response?.access}`;

        console.log("response from refresh token ", response?.access);

        if (response?.access) {
          refreshAccessToken(response);
          await storeObject("tokens", response);
        }
        return axios(error.config);
      }
      if (error.response.status === 400) {
        Toast.showToast(
          "Error",
          error.response.data.message.toString(),
          "error"
        );

        if (error.response.status === 422) {
          Toast.showToast(
            "Error",
            error.response.data.message.toString(),
            "error"
          );
        }
      } else {
        console.log("Error response:", error.response.data);
      }
    } else if (error.request) {
      console.log("Error request:", error.request);
    } else {
      console.log("Error message:", error.message);
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  let tokens: any = await getObject("tokens");
  let newAccessToken = refreshAccessToken(tokens?.refresh);
  return newAccessToken;
};

const postData = async (
  relativeUrl: string,
  data: object,
  token: string = ""
) => {
  const url = getUrl(relativeUrl);
  try {
    const response = await axiosInstance.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    console.log("error " + error?.response?.data?.message);
    return error;
  }
};

const getData = async (relativeUrl: string) => {
  const url = getUrl(relativeUrl);
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    console.log("error " + error);
    return error;
  }
};

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getDataWithRefreshToken = async (relativeUrl: string, token?: string) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "get",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      // 'cateringApp-customer-auth-refresh-token': `${token}`,
    },
  };

  const response = await axios(config)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
  return response;
};

const getDataWithAccessToken = async (relativeUrl: string, token: string) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "get",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "cateringApp-customer-auth-access-token": `${token}`,
    },
  };

  const response = await axios(config)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
  return response;
};

const postDataWithoutID = async (relativeUrl: string, data: object) => {
  const url = getUrl(relativeUrl);

  const config = {
    method: "POST",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    data: data,
  };
  let response;
  await axios(config)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      console.log("error " + error);

      response = error;
    });
  return response;
};

const updateDataWithoutID = async (relativeUrl: string, data: object) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "PUT",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    data: data,
  };
  let response;
  await axios(config)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      response = error;
    });
  return response;
};

const updateData = async (relativeUrl: string, data: object, token: string) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "PUT",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "cateringApp-customer-auth-token": token,
    },
    data: data,
  };
  let response = await axios(config)
    .then((res) => res)
    .catch((error) => {
      response = error;
    });
  return response;
};

const postDataWithParams = async (relativeUrl: string, token: string) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "POST",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response;
  await axios(config)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      response = error;
    });
  return response;
};

const postDataWitID = async (
  relativeUrl: string,
  token: string,
  data: object
) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "POST",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  let response;
  await axios(config)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      response = error;
    });
  return response;
};

const getDataWithBody = async (
  relativeUrl: string,
  token: string,
  data: object
) => {
  const url = getUrl(relativeUrl);
  const config = {
    method: "get",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "cateringApp-customer-auth-refresh-token": `${token}`,
    },
    data: data,
  };

  const response = await axios(config)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
  return response;
};

export const API = {
  fetchData,
  postDataWithoutID,
  postDataWitID,
  postDataWithParams,
  updateData,
  getDataWithRefreshToken,
  getDataWithAccessToken,
  updateDataWithoutID,
  getDataWithBody,
  postData,
  getData,
};
