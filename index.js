document.addEventListener('DOMContentLoaded', function(){
    let card = document.getElementsByClassName('card');
    let button = document.querySelector('button');
    let sliderDivs = document.getElementsByClassName('slider');
    let icon = document.querySelector('i');
    let body = document.body;
    let stars = document.createElement('div');
    let main = document.getElementsByClassName('main');
    stars.className = 'stars';
    let starImg = document.createElement('img');
    starImg.setAttribute('src', './img/star.png'); 
    
    stars.innerHTML+= starImg.outerHTML + starImg.outerHTML + starImg.outerHTML + starImg.outerHTML;

    let data = [
        {
            // index: 0,
            span1: 'Fantastic!',
            span2: 'lila_lane',
            stars: stars,
            p: 'I can say I am 💯 happy with this app. 15 pounds off in 30 days!',
        },
        {
            // index: 1,
            span1: 'Great app',
            span2: 'Therealtierra',
            stars: stars,
            p: 'Im only on my 9th week and my body has changed tremendously!&#127881&#127881',
        },
        {
            // index: 2,
            span1: 'It works!',
            span2: 'tenniagirl',
            stars: stars,
            p: 'Just finnished the programm... love it. Down 33lbs!!',
        },
        {
            // index: 3,
            span1: 'Worth a try',
            span2: '1QueenE',
            stars: stars,
            p: 'By far the best app out there to lose weight!&#128170&#128170&#128170',
        },
    ]
    console.log(data)

    for(i=0;i < card.length;i++){
        card[i].addEventListener('click', costSelection);
    }
    button.addEventListener('click', buttonClick);
    icon.addEventListener('click', theme);

    function costSelection(e){
        for(i=0;i < card.length;i++){
            if (this == card[i]){
                card[i].classList.add('selected');
            }
            else{
                card[i].classList.remove('selected');
                if(icon.className == 'fas fa-sun'){
                    card[i].style.backgroundColor = 'rgba(55, 54, 64, 1)'
                    card[i].style.color = 'white'
                }
                else{
                    card[i].style.backgroundColor = 'rgba(243, 242, 249, 1)'
                    card[i].style.color = 'black'
                }
            }
        }
        
    }
    function buttonClick(){
            if (card[0].classList.contains('selected')){
                window.open('https://www.google.com/search?q=1');
            }
            else if (card[1].classList.contains('selected')){
                window.open('https://www.google.com/search?q=2');
            }
            else{
                window.open('https://www.google.com/search?q=3');
            }
    }
    function theme(){
        if (icon.className == 'fas fa-moon'){
            body.style.backgroundColor = 'black';
            sliderDivs[0].classList.add('sliderDark');
            sliderDivs[0].lastElementChild.style.color = 'white';
            for(i=0;i < card.length;i++){
                if (!card[i].classList.contains('selected')){
                    card[i].style.backgroundColor = 'rgba(55, 54, 64, 1)'
                    card[i].style.color = 'white'
                }
            }
            icon.className = 'fas fa-sun'
        }
        else{
            body.style.backgroundColor = 'white';
            sliderDivs[0].classList.remove('sliderDark');
            sliderDivs[0].lastElementChild.style.color = 'black';
            for(i=0;i < card.length;i++){
                if (!card[i].classList.contains('selected')){
                    card[i].style.backgroundColor = 'rgba(243, 242, 249, 1)'
                    card[i].style.color = 'black'
                }
            }
            icon.className = 'fas fa-moon'
        }
    }
    function slider(data){
        for(i=0; i<4; i++){
            let div = document.createElement('div');
            div.classList.add('slider');
            
            div.insertAdjacentHTML('afterbegin', `<p>${data[i].p}</p>`);
            // div.insertAdjacentHTML('afterbegin', `${stars}`);
            div.insertAdjacentElement('afterbegin', data[i].stars);
            div.insertAdjacentHTML('afterbegin', `<span>${data[i].span2}</span>`);
            div.insertAdjacentHTML('afterbegin', `<span>${data[i].span1}</span>`);
            main[0].append(div)
            // console.log(div.insertAdjacentElement('afterbegin', stars))
        }
    }
    slider(data);
    let a=0;
    setInterval(function() {  
        // if(a==sliderDivs.length){
        //     a = 0;
        //     // sliderDivs[a].style.left = '-270px';
        //     // sliderDivs[a++].style.left = '20px';
            
        // }    
        // else{
        //     console.log(a);
        //     // sliderDivs[a].style.left = '-270px';
        //     // sliderDivs[a++].style.left = '20px';
        //     sliderDivs.push(sliderDivs[a])
        //     sliderDivs.shift()
        //     a=a++;
        // }  
        // console.log(sliderDivs[i])
        // let styleOne = getComputedStyle(sliderDivs[0]);
        // console.log(sliderDivs[1].style.left)
        // for(i=0;i < sliderDivs.length;i++){
        //     sliderDivs[i].style.left = parseInt(`${getComputedStyle(sliderDivs[i]).left}`)-280+'px';
        // }
    }, 5000);
   
})