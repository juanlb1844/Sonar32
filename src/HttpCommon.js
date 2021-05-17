import axios from 'axios';

const httpHelper =  axios.create({
    baseUrl: "https://react.at-cabo.com/",
    headers: {
        "Content-Type": "application/json"
    }
});

export default httpHelper;  