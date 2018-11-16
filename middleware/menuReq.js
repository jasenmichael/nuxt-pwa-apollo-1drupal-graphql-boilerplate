//this is 100% implemented and works like a charm and could be used for later axois call refrences.
import axios from 'axios'

export default function({store}) {
  const url = process.env.drp_rest_URL + "entity/menu/main/tree?_format=json"
  let mainMenu = []
  return axios.get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        let menuObj = {}
        menuObj.title = response.data[i].link.title
        menuObj.path = response.data[i].link.url
        mainMenu.push(menuObj)
      }
      store.dispatch('add', mainMenu)
    })
}
