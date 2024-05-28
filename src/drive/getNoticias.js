import axios from "axios"

const text_api = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRFlQv0QXufes96KAUeyaW-MHn7K1ZdrjIUwbr46a19KGE_rC4gS81BiQZQ2YkuVbM0isq-09O0JEsb/pub?output=csv"
})


export default text_api