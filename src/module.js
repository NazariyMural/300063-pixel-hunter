/*
    Слідуючи за правилом dont repeat yourself
        Ми винесомо ті частини шаблону які повторяються в інші шаблони
*/


//header.js
export const headerTemplate = `
        <header class="header">
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
        </header>`;

export const footerTemplate = `
    <footer class="footer">
        <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
        <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
        <div class="footer__social-links">
          <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
          <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
          <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
          <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
        </div>
      </footer>`;

//Далі ми розділемо шаблон на частину 
//  Одна частина яка буде статична 
//  Наступна яка буде мінятися 

//Для данних в хедері будемо вик. обєкти 
const initialState = {
    level: 0,
    lives: 3,
    time: 0
}