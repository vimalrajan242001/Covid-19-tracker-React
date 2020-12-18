import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async () => {
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url)
        return {confirmed,recovered,deaths,lastUpdate}
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData=data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate
    }) );
    return modifiedData
    // console.log(data)
    // return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};