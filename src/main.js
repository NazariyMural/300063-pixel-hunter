
//Tempalte приначений для регдиренгу шаблоних данних на строрінку.Цей не немалюється на сторінці, а все що в ньому описано є docum_fragment і це все записується у спеціальну властивість content цього фрагменту.




let main_central = document.querySelector('main');

function getElementFromTemplate(item){
    let template = document.querySelectorAll('template');

    if(item <= template.length){
        for (let i = 0; i < template.length; i++) {
            const element = template[item];
            return element.content;
        }
    } 
}


main_central.appendChild(getElementFromTemplate(3))


export default getElementFromTemplate;