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
}
  async componentDidMount (){
      const fetchedData = await fetchdata();
      this.setState({data:fetchedData})
    }

  render() {
    const {data} = this.state;
    return (
      <div >
        <ThemeProvider theme={theme}>  
        <Paper className={Style.paper} style={{height:'100%'}}>
      <Navbar />
      <h1>App </h1>
      <Cards data={data}/>
      <Chart/>
      <CountryPicker/>
      </Paper>
   </ThemeProvider>
   </div>
    )
  }
}

export default App
