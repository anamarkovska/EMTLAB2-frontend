import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emt-library-193025.herokuapp.com/',
    headers: {
        "Access-Control-Allow-Headers" : "*"
    }
})

export default instance;