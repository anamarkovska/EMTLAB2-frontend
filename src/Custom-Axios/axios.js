import axios from "axios";

const instance = axios.create({
    baseURL: 'https://library-emt-lab2-193025.herokuapp.com/',
    headers: {
        "Access-Control-Allow-Headers" : "*"
    }
})

export default instance;