import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api/index'
import {Line} from 'react-chartjs-2'
function Chart() {
  // eslint-disable-next-line
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
    // console.log(dailyData)
  });
  const lineChart =(
      dailyData.length
      ?(
      <Line
      data={{
          labels:dailyData.map(({date})=>date),
          datasets:[{
             data: dailyData.map(({confirmed})=>confirmed),
              label:'Confirmed',
              borderColor:'$3333ff',
              fill:true,
          },{
              data:dailyData.map(({deaths})=>deaths),
              label:'Deaths',
              borderColor:'red',
              backgroundColor:'red',
              fill:true,
          }]

      }}
      /> ) : null);
console.log(dailyData.length)
  return <div>
      {lineChart}
  </div>;
}

export default Chart
