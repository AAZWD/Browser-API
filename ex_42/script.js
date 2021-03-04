window.onload = function(){
    let wb = ['batmanwb.png','flashwb.png','supermanwb.png', 'wonder_womanwb.png'];
    for(let x =0; x<wb.length; x++){
        let img = document.createElement('img');  
        img.setAttribute('src', `img/${wb[x]}`);
        document.body.appendChild(img);
        img.addEventListener('mouseover',()=>{
            let imgC = wb[x].slice(0,-6) + '.png';
            img.setAttribute('src', `img/${imgC}`);
        });
        img.addEventListener('mouseout',()=>{
            img.setAttribute('src', `img/${wb[x]}`);
        });

        img.addEventListener('click',()=>{
            let name = wb[x].slice(0,-6).replace('_', ' ').toLocaleUpperCase();
            alert(name);
        });
    }


}
