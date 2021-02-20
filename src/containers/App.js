import React,{ Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from '../containers/layout/layout'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <Layout></Layout>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App