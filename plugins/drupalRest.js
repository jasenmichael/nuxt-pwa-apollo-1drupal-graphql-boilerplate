import Vue from 'vue'

//const config = require('static/config.js').config
// import { config } from '../static/config.js'

Vue.prototype.$getMenu = (menu) => {
    const url = process.env.drp_rest_URL + "entity/menu/" + menu + "/tree?_format=json"
    console.log("get fetchin that " + menu + " menu already JOB!")
    console.log(url)

    /// replace with a axios.get(url)
    /// replace with a axios.get(url)
    let mainMenu = []
    return mainMenu = [
        {
            title: "Home",
            path: "/",
            uid: "0001"
        },
        {
            title: "About",
            path: "/about",
            uid: "0002"
        }
    ]
    /// replace with a axios.get(url)
    /// replace with a axios.get(url)
}


