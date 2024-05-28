import axios from "axios"

const apoio_api = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZkuvG8FMNzzMWKbkJy3oG_Fz467J_Jwu1ixjDoo4h8B5u0X9R_o9rsPG9nj8eJoGBxZbTad0QXWHs/pub?output=csv"
})


export default apoio_api