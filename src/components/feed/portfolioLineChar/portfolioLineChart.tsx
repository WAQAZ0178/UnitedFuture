//import liraries
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LineChart} from 'react-native-gifted-charts';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';

type props = NativeStackNavigationProp<RootStackParamList, 'Notification'>;
const PortfolioLineChart: React.FC<{}> = () => {
  //   const navigation = useNavigation<props>();
  //   const data = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //     datasets: [
  //       {
  //         data: [
  //           Math.random() * 100,
  //           Math.random() * 100,
  //           Math.random() * 100,
  //           Math.random() * 100,
  //           Math.random() * 100,
  //           Math.random() * 100,
  //         ],
  //       },
  //     ],
  //   };

  const customDataPoint = () => {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: 'red',
          borderWidth: 4,
          borderRadius: 10,
          borderColor: 'red',
        }}
      />
    );
  };

  const data = [
    {
      value: 100,
      labelComponent: () => customLabel('22 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 140,
      hideDataPoint: true,
    },
    {
      value: 250,
      customDataPoint: customDataPoint,
    },
    {
      value: 290,
      hideDataPoint: true,
    },
    {
      value: 410,
      labelComponent: () => customLabel('24 Nov'),
      customDataPoint: customDataPoint,
      showStrip: true,
      stripHeight: 190,
      stripColor: 'black',
      dataPointLabelComponent: () => {
        return (
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>410</Text>
          </View>
        );
      },
      dataPointLabelShiftY: -70,
      dataPointLabelShiftX: -4,
    },
    {
      value: 440,
      hideDataPoint: true,
    },
    {
      value: 300,
      customDataPoint: customDataPoint,
    },
    {
      value: 280,
      hideDataPoint: true,
    },
    {
      value: 180,
      labelComponent: () => customLabel('26 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 150,
      hideDataPoint: true,
    },
    {
      value: 150,
      customDataPoint: customDataPoint,
    },
  ];

  const customLabel = (val: string) => {
    return (
      <View style={{width: 70, marginLeft: 7}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{val}</Text>
      </View>
    );
  };
  const chartConfig = {
    backgroundGradientFrom: '#FFFF',
    backgroundGradientTo: '#FFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    color: (opacity = 1) => colors.PrimaryGreen400,
    backgroundColor: 'blue',
    // strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    propsForDots: {
      r: '6',
      strokeWidth: '3',
      stroke: colors.white,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      color: 'red',
    },

    useShadowColorFromDataset: true, // optional
  };
  return (
    <View
      style={{
        // paddingVertical: 100,
        paddingLeft: 20,
        backgroundColor: '#1C1C1C',
      }}>
      <LineChart
        areaChart
        data={data}
        rotateLabel
        width={responsiveWidth(95)}
        hideDataPoints
        spacing={10}
        color="#00ff83"
        thickness={2}
        startFillColor="rgba(20,105,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        maxValue={600}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{color: 'gray'}}
        // customDataPoint={customDataPoint}
        xAxisColor="lightgray"
        animateOnDataChange={true}
        backgroundColor={colors.white}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0]?.date}
                </Text>

                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: 'white',
                  }}>
                  <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                    {'$' + items[0]?.value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default PortfolioLineChart;
