import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const App = () => {
  const data = {
    labels: ['14', '16','18','20','22','24','26','28','30','32','34','36','38','40'],
    datasets: [
      {
         data: [10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100], 
        color: () => 'red',
        strokeWidth: 0.001,
      },
      {
        data: [24, 27, 30, 33, 36, 39, 42, 45, 48, 52, 55, 58, 60, 63, 66, 68, 71, 73, 75, 77, 79, 80, 82, 84, 85, 87, 88],
        color: () => 'green',
        strokeWidth: 2,
      },
      {
        data: [27, 30, 33, 36, 40, 43, 47, 50, 53, 57, 60, 63, 66, 69, 72, 74, 77, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96],
        color: () => 'purple',
        strokeWidth: 2,
      },
      {
        data: [30, 33, 37, 40, 44, 47, 51, 54, 58, 61, 65, 68, 71, 74, 77, 80, 82, 85, 87, 89, 91, 93, 95, 96, 98, 100, 101],
        color: () => 'orange',
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color:()=>'black',
    labelColor: ()=>'black',
    propsForDots: {
      r: '0',
      strokeWidth: '0',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Fetal Measurements Over Gestational Weeks</Text>
      <LineChart
        data={data}
        width={400}
        height={250}
        yAxisSuffix=""
        yAxisInterval={1}
        fromNumber={1}        
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default App;