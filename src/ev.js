import getElementFromTemplate from './main';
import {headerTemplate} from './module'
import {footerTemplate} from './module'

// console.log(footerTemplate);

    var point = 0;

    document.addEventListener('keydown', (ev) => {
        function checkpoint(){
            var value = point
            if(point == 0) {
                value = `<div id="main" class="central__content">
                            <div id="intro" class="intro">
                                <h1 class="intro__asterisk">*</h1>
                                <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p> 
                            </div>
                        </div>`
            }
            if(point == 1) {
                value = `<div class="greeting central--blur">
                <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
                <h1 class="greeting__asterisk">*</h1>
                <div class="greeting__challenge">
                  <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
                  <p>Правила игры просты.<br>
                    Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
                    Задача кажется тривиальной, но не думай, что все так просто.<br>
                    Фотореализм обманчив и коварен.<br>
                    Помни, главное — смотреть очень внимательно.</p>
                </div>
                <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
              </div>`
            // value = getElementFromTemplate(1)
            // console.log(getElementFromTemplate(1));
            }
            if(point == 2) {
                value = `<header class="header">
                <div class="header__back">
                  <button class="back">
                    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                    <img src="img/logo_small.svg" width="101" height="44">
                  </button>
                </div>
              </header>
              <div class="rules">
                <h1 class="rules__title">Правила</h1>
                <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
                  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
                  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
                  Фотографиями или рисунками могут быть оба изображения.<br>
                  На каждую попытку отводится 30 секунд.<br>
                  Ошибиться можно не более 3 раз.<br>
                  <br>
                  Готовы?
                </p>
                <form class="rules__form">
                  <input class="rules__input" type="text" placeholder="Ваше Имя">
                  <button class="rules__button  continue" type="submit" disabled>Go!</button>
                </form>
              </div>`
            }
            if(point == 3) {
                value = `<header class="header">
                <div class="header__back">
                  <button class="back">
                    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                    <img src="img/logo_small.svg" width="101" height="44">
                  </button>
                </div>
                <h1 class="game__timer">NN</h1>
                <div class="game__lives">
                  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
                  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                </div>
              </header>
              <div class="game">
                <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
                <form class="game__content">
                  <div class="game__option">
                    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
                    <label class="game__answer game__answer--photo">
                      <input name="question1" type="radio" value="photo">
                      <span>Фото</span>
                    </label>
                    <label class="game__answer game__answer--paint">
                      <input name="question1" type="radio" value="paint">
                      <span>Рисунок</span>
                    </label>
                  </div>
                  <div class="game__option">
                    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
                    <label class="game__answer  game__answer--photo">
                      <input name="question2" type="radio" value="photo">
                      <span>Фото</span>
                    </label>
                    <label class="game__answer  game__answer--paint">
                      <input name="question2" type="radio" value="paint">
                      <span>Рисунок</span>
                    </label>
                  </div>
                </form>
                <div class="stats">
                  <ul class="stats">
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--correct"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--unknown"></li>
                  </ul>
                </div>
              </div>`
            }
            if(point == 4) {
                value = `<header class="header">
                <div class="header__back">
                  <button class="back">
                    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                    <img src="img/logo_small.svg" width="101" height="44">
                  </button>
                </div>
                <h1 class="game__timer">NN</h1>
                <div class="game__lives">
                  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
                  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                </div>
              </header>
              <div class="game">
                <p class="game__task">Угадай, фото или рисунок?</p>
                <form class="game__content  game__content--wide">
                  <div class="game__option">
                    <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
                    <label class="game__answer  game__answer--photo">
                      <input name="question1" type="radio" value="photo">
                      <span>Фото</span>
                    </label>
                    <label class="game__answer  game__answer--wide  game__answer--paint">
                      <input name="question1" type="radio" value="paint">
                      <span>Рисунок</span>
                    </label>
                  </div>
                </form>
                <div class="stats">
                  <ul class="stats">
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--correct"></li>
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--unknown"></li>
                  </ul>
                </div>
              </div>`
            }
            if(point == 5) {
                value = `<header class="header">
                <div class="header__back">
                  <button class="back">
                    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                    <img src="img/logo_small.svg" width="101" height="44">
                  </button>
                </div>
                <h1 class="game__timer">NN</h1>
                <div class="game__lives">
                  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
                  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                </div>
              </header>
              <div class="game">
                <p class="game__task">Найдите рисунок среди изображений</p>
                <form class="game__content  game__content--triple">
                  <div class="game__option">
                    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                  </div>
                  <div class="game__option  game__option--selected">
                    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                  </div>
                  <div class="game__option">
                    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                  </div>
                </form>
                <div class="stats">
                  <ul class="stats">
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--correct"></li>
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--unknown"></li>
                  </ul>
                </div>
              </div>`
            }
            if(point > 5) {
                value = `<header class="header">
                <div class="header__back">
                  <button class="back">
                    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                    <img src="img/logo_small.svg" width="101" height="44">
                  </button>
                </div>
              </header>
              <div class="result">
                <h1>Победа!</h1>
                <table class="result__table">
                  <tr>
                    <td class="result__number">1.</td>
                    <td colspan="2">
                      <ul class="stats">
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--slow"></li>
                        <li class="stats__result stats__result--fast"></li>
                        <li class="stats__result stats__result--correct"></li>
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--slow"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--fast"></li>
                        <li class="stats__result stats__result--unknown"></li>
                      </ul>
                    </td>
                    <td class="result__points">×&nbsp;100</td>
                    <td class="result__total">900</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="result__extra">Бонус за скорость:</td>
                    <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
                    <td class="result__points">×&nbsp;50</td>
                    <td class="result__total">50</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="result__extra">Бонус за жизни:</td>
                    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
                    <td class="result__points">×&nbsp;50</td>
                    <td class="result__total">100</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="result__extra">Штраф за медлительность:</td>
                    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
                    <td class="result__points">×&nbsp;50</td>
                    <td class="result__total">-100</td>
                  </tr>
                  <tr>
                    <td colspan="5" class="result__total  result__total--final">950</td>
                  </tr>
                </table>
                <table class="result__table">
                  <tr>
                    <td class="result__number">2.</td>
                    <td>
                      <ul class="stats">
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--slow"></li>
                        <li class="stats__result stats__result--fast"></li>
                        <li class="stats__result stats__result--correct"></li>
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--slow"></li>
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--fast"></li>
                        <li class="stats__result stats__result--wrong"></li>
                      </ul>
                    </td>
                    <td class="result__total"></td>
                    <td class="result__total  result__total--final">fail</td>
                  </tr>
                </table>
                <table class="result__table">
                  <tr>
                    <td class="result__number">3.</td>
                    <td colspan="2">
                      <ul class="stats">
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--slow"></li>
                        <li class="stats__result stats__result--fast"></li>
                        <li class="stats__result stats__result--correct"></li>
                        <li class="stats__result stats__result--wrong"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--slow"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--fast"></li>
                        <li class="stats__result stats__result--unknown"></li>
                      </ul>
                    </td>
                    <td class="result__points">×&nbsp;100</td>
                    <td class="result__total">900</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="result__extra">Бонус за жизни:</td>
                    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
                    <td class="result__points">×&nbsp;50</td>
                    <td class="result__total">100</td>
                  </tr>
                  <tr>
                    <td colspan="5" class="result__total  result__total--final">950</td>
                  </tr>
                </table>
              </div>`
              point = 6
            }
            // var main_central = document.querySelector('main');
            // let tmpl = document.createElement('div');
            // tmpl.appendChild(getElementFromTemplate(point));
            // return main_central.appendChild(tmpl);
            var main_central = document.querySelector('main');
            let out = '';
            out+=`<div>${value}</div>`;
            out+=`${footerTemplate}`;
            main_central.innerHTML = out;
        }
        var x = event.which || event.keyCode;
        if (x == 37 && point > 0) {
            console.log("You pressed the left arrow");
            point--;
            checkpoint(point);
        }
        else if (x == 39) {
            console.log("You pressed the rigth arrow");
            point++;
            checkpoint(point);
        }
        return false;
    })
    

function EventF(){
}
EventF()

function clearBody(){
    var main_central = document.querySelector('main');
    var last = main_central.lastElementChild;
    console.log(last);
    main_central.removeChild(last);
}

function appendToBody(data){
    var main_central = document.querySelector('main');
    var container = document.createElement('div');
    container.appendChild(getElementFromTemplate(data));
    return main_central.appendChild(container)
}


export default EventF;