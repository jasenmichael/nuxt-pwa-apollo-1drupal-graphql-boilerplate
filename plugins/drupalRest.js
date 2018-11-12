import Vue from 'vue'
import axios from 'axios'

//const config = require('static/config.js').config
// import { config } from '../static/config.js'

Vue.prototype.$getMainMenu = (menu) => {
    const url = process.env.drp_rest_URL + "entity/menu/" + menu + "/tree?_format=json"

    let mainMenu = []
    axios.get(url)
      .then((response) => {
        // console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
          let menuObj = {}
          menuObj.title = response.data[i].link.title
          menuObj.path = response.data[i].link.url
          mainMenu.push(menuObj)
        }
      })
      console.log(mainMenu)

    /// replace with a axios.get(url)
    /// replace with a axios.get(url)
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
        },
    ]
    /// replace with a axios.get(url)
    /// replace with a axios.get(url)
}
