import axios from "axios"

const text_api = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIEAfgFmzRwXdtCv0I56Fl_aiMpf4b_t6IzNq6pp1o8G-DI3PhoBpads9Hol7RzytW480--NCXyd7D/pub?output=csv"
})


export default text_api