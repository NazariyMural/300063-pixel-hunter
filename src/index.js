import _ from 'lodash';
import App from './App';
import getElementFromTemplate from './main';
import EventF from './ev'

class Article {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
    print(place, what){
      let out = '';
      let placeId = document.getElementById(place);
      placeId.innerHTML = what
      for (const key in what) {
        out+=`${key}: ${what[key]}<br>`;
      }
      placeId.innerHTML = out
    }
}

let article_1 = new Article('News', 'Кусі дуже багато сплять');


article_1.print('article', article_1)
