import React, { Component } from 'react'
import {Cards,Chart,CountryPicker,Navbar} from './Components'
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
  country:''
}
  async componentDidMount (){
      const fetchedData = await fetchdata();
      this.setState({data:fetchedData})
    }
handleCountryChange=async (country)=> {
  const fetchedData = await fetchdata(country)
      this.setState({data:fetchedData,country:country })
  
}
  render() {
    const {data,country} = this.state;
    return (
      <div >
        <ThemeProvider theme={theme}>  
        <Paper className={Style.paper} style={{height:'100%'}}>
      <Navbar />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country} />
      </Paper>
   </ThemeProvider>
   </div>
    )
  }
}

export default App
