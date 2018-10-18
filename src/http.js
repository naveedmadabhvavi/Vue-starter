import axios from 'axios'
import Vue from 'vue'

const instance = axios.create({
    baseURL: process.env.API_ROOT

})

export default instance
