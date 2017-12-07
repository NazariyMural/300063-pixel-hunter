import _ from 'lodash';
import App from './App';
import '../sass/central.scss';
import '../sass/colors.scss';
import '../sass/fonts.scss';
// import '../sass/footer.scss';
// import '../sass/game.scss';
// import '../sass/greeting.scss';
// import '../sass/header.scss';
// import '../sass/intro.scss';
// import '../sass/result.scss';
// import '../sass/social.scss';
// import '../sass/stats.scss';
// import '../sass/style.scss';
// import './main.scss';

App();

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
