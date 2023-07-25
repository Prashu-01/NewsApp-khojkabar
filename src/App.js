import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import {
  Routes,
  Route
} from "react-router-dom";
// import BackToTop from 'react-back-to-top';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  state = {
    progress: 0
  }
  pageSize = 21
  apik = process.env.REACT_APP_API
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <LoadingBar color='#f11946' progress={this.state.progress} />
        <Navbar />
        <Routes>
          
          <Route exact path='/' element={<HomePage setProgress={this.setProgress} apiKEY={this.apik} key="general" pageSize={this.pageSize} country={'in'} category={'general'} />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKEY={this.apik} key="science" pageSize={this.pageSize} country={'in'} category={'science'} />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKEY={this.apik} key="sports" pageSize={this.pageSize} country={'in'} category={'sports'} />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKEY={this.apik} key="business" pageSize={this.pageSize} country={'in'} category={'business'} />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKEY={this.apik} key="technology" pageSize={this.pageSize} country={'in'} category={'technology'} />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKEY={this.apik} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'} />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKEY={this.apik} key="health" pageSize={this.pageSize} country={'in'} category={'health'} />} />
          {/* <Route path='/' element={<News setProgress={this.setProgress} apiKEY={this.apik}  key="health" pageSize={this.pageSize} country={'in'} category={'health'} />}/> */}
          {/* </Routes> */}
        </Routes>
      </>
    )
  }
}
export default App
