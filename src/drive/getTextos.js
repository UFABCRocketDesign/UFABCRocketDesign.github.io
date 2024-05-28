import axios from "axios"

const textos_api = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7mmbykMNXKt4Vgvhd9Qd3gvi1rCcph37xQ_sd7Kq-8N6lIaAPSSyzqU7Ff-iuny0BEcEGvLlxIvRW/pub?output=csv"
})


export default textos_api