import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube-v2.p.rapidapi.com/" ,
    headers: {
        'X-RapidAPI-Key': 'b8d6da9acdmshefee1c15900ce8ap1e780fjsn0002518d7e16',
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
      } ,
    timeout:10000
})

export default request;