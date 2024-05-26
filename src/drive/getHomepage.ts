import axios from "axios"

const home_api = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQl9Ob1b6Pp0il8rlVKwJSEkRLDilG0gWqwIfO6YMswFmgrWdtNpThqwh6oR_-hHvHe9y0IwkrRaSz/pub?output=csv"
})


export default home_api