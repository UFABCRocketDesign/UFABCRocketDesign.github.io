import axios from "axios"

const text_api = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSHAsl3K2vPJHFVcRNz7Dsm_1T2OpX639uaeOm6uytrWQ2D7dNx5sMNLBpQvDLUvb6sdMrGhRV6oJ91/pub?output=csv"
})


export default text_api