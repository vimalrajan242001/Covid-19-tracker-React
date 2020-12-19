import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api/index'
import style from './Chart.module.css'
import {Line,Bar} from 'react-chartjs-2'
function Chart({data:{confirmed,deaths,recovered},country}) {
  // eslint-disable-next-line
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
    // console.log(dailyData)
  },[]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Confirmed",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            // backgroundColor:'red',
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 15,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
        },
      }}
    />
  ) : null;
  console.log(confirmed,recovered,deaths);
  const barCart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
        },
      }}
    />
  ) : null;
  return <div className={style.chart}>
    {country?barCart:lineChart}
    </div>;
}

export default Chart
