import React, { Component } from 'react'
import {Cards,Chart,CountryPicker,Navbar} from './Components'
import Style from './App.module.css'
import {fetchdata} from './api'

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
      <div className={Style.container}>
        <Navbar />
      <h1>App </h1>
      <Cards data={data}/>
      <Chart/>
      <CountryPicker/>
      </div>
    )
  }
}

export default App
