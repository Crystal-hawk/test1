
let createbutton = document.querySelector('button');
let img_array = ['img/ффф.jpg', 'img/qqq.jpg', 'img/Собака Породы Акита.jpg', 'img/yyy.jpg']
function generateGallery(){
    let newDiv = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.style.fontSize = "56px";
    h1.textContent = 'Галерея';
    newDiv.style.display = 'flex';
    newDiv.style.flexDirection = 'column';
    newDiv.style.flexWrap = 'wrap';
    newDiv.style.justifyContent ='space-around';
    document.body.appendChild(newDiv);
    newDiv.insertAdjacentElement('beforebegin' , h1);
    for (let i = 0; i < img_array.length; i++) {
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        img.src = img_array[i];
        img.width = 250;
        img.height = 250;
        newDiv.appendChild(h2);
        h2.textContent = 'Картинка' + (i+1);
        newDiv.appendChild(img);

    }
    let p = document.createElement('p');
    p.textContent = 'ааааааааааааа';
    p.style.fontSize = "48px";
    newDiv.insertAdjacentElement('afterend', p);
    createbutton.removeEventListener('click', generateGallery);
}
createbutton.addEventListener('click', generateGallery);
