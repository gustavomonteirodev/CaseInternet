import axios from "axios"
import { BASE_URL } from "../constants/urls"



   export const getCep = (clear) => {
        const cep = e.target.value.replace(/\D/g, '');
        axios.get(`${BASE_URL}/${cep}/json/`)
        .then((res) =>{
            alert(res.data.message)
            clear()
        })
            .catch((err) => console.log(err.response.message))
    }
