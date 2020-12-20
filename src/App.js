import React, { Component } from 'react'
import {Cards,Chart,CountryPicker,Navbar,Footer} from './Components'
import {Paper,ThemeProvider,createMuiTheme} from '@material-ui/core';
import Style from './App.module.css'
import {fetchdata} from './api'
const theme = createMuiTheme({
    palette:{
      type:'dark'
    }
  })
class App extends Component {
  
state={
  data:{},
  country:'',
  global:"Global",
}

  async componentDidMount (){
      const fetchedData = await fetchdata();
      this.setState({data:fetchedData})
    }
handleCountryChange=async (country)=> {
  // console.log(country);
  const fetchedData = await fetchdata(country)
      this.setState({data:fetchedData,country:country })  

    }
render() {
    const {data,country,global} = this.state;
    return (
      <div >
        <ThemeProvider theme={theme}>  
        <Paper className={Style.paper} >
      <Navbar />
      <h3 > <span className={Style.title}>
      {country?country:global}</span> Covid-19 statistics
      </h3>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <br/>
      <Chart data={data} country={country} />
      <Footer />
      </Paper>
   </ThemeProvider>
   </div>
    )
  }
}

export default App
