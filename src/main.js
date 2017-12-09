
//Tempalte приначений для регдиренгу шаблоних данних на строрінку.Цей не немалюється на сторінці, а все що в ньому описано є docum_fragment і це все записується у спеціальну властивість content цього фрагменту.

function getElementFromTemplate(item){
    let template = document.querySelectorAll('section');
    console.log(item);
    if(item >= 0 && item <= template.length ){
        for (let i = 0; i < template.length; i++) {
            const element = template[item];
            console.log(element);
            return element;
        }
    }
    return false; 
}

export default getElementFromTemplate;