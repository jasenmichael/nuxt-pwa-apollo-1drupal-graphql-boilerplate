import Vue from 'vue'

//const config = require('static/config.js').config
// import { config } from '../static/config.js'

Vue.prototype.$getMainMenu = (menu) => {
    const url = process.env.drp_rest_URL + menu
    console.log("get fetchin that " + menu + " menu already JOB!")
    let mainMenu = []
    return mainMenu = [
        {
            title: "home",
            path: "/",
            uid: "0001"
        },
        {
            title: "About",
            path: "/about",
            uid: "0002"
        }
    ]
}


