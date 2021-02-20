import axios from 'axios'

const axiosIns = axios.create({
    baseURL:'https://bing-news-search1.p.rapidapi.com/news',
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-key': 'd9df164fd7msh056130385103015p106ed5jsn988c0b750246',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
    }
})

export default axiosIns