import React,{ Component } from 'react'
import Header from '../../components/header/header'
import SearchBar from '../../components/searchBar/searchBar'
import axios from '../../components/axiosIns/axiosIns'
import NewsContent from '../../components/newsContent/newsContent'
import { Route } from 'react-router-dom'
class layout extends Component{
    state = {
        data:null,
        input:1,
    }
    searchNewsHandler = (tag) => {
        axios.get('/search',{
            params: {q: tag, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
        }).then(
            (response) => {
                // console.log(response.data.value);
                this.setState({
                    data:response.data.value,
                    input:0,
                })
                document.getElementsByClassName('newscontent')[0].scrollIntoView()
            }
        ).catch(
            (error) => console.log(error)
        )
    }
    showSearchBar = () => {
        this.setState({input:1})
    }
    render(){
        // console.log(this.state);
        return(
            <div>
                <Header />
                <SearchBar search={this.searchNewsHandler} show={this.state.input} showBar={this.showSearchBar} ></SearchBar>
                <NewsContent data={this.state.data} />
            </div>
        )
    }
}

export default layout