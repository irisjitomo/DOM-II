// Your code goes here

//Nav Items://
const header = document.querySelector('.main-navigation')
const nav = document.querySelector('.nav')

const h1 = document.querySelector('.main-navigation h1')

const homeAnchor = document.querySelectorAll('a')[0]
const aboutUsAnchor = document.querySelectorAll('a')[1]
const blogAnchor = document.querySelectorAll('a')[2]
const contactUsAnchor = document.querySelectorAll('a')[3]

//Container//

const introText = document.querySelector('.intro')
const introTextTitle = document.querySelector('.intro h2')
const introTextPTag = document.querySelector('.intro p')
const introTextImg = document.querySelector('.intro img')

const textContentDiv = document.querySelector('.text-content')
const textContentDivTitle = document.querySelector('.text-content h2')
const textContentDivPTag = document.querySelector('.text-content p')

const contentImg = document.querySelector('.img-content img')



// * [ ] `mouseover`
 
h1.addEventListener('mouseover', (e) => {
    h1.style.color = 'red';
})

homeAnchor.addEventListener('mouseover', e => {
    homeAnchor.style.fontSize = '2rem';
    nav.style.alignItems = 'center';
})

aboutUsAnchor.addEventListener('mouseover', e => {
    aboutUsAnchor.style.fontSize = '1rem';
    nav.style.alignItems = 'center';
})

blogAnchor.addEventListener('mouseover', e => {
    blogAnchor.style.fontSize = '2rem';  
    nav.style.alignItems = 'center';  
    
})

contactUsAnchor.addEventListener('mouseover', e => {
    contactUsAnchor.style.fontSize = '1rem';
    nav.style.alignItems = 'center';
})

contentImg.addEventListener('mouseover', e => {
    contentImg.style.borderRadius = "50%"
})

// * [ ] `keydown`



// * [ ] `wheel`

window.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        homeAnchor.style.color = 'blue'
    }
    if (e.deltaY < 0) {
        homeAnchor.style.color = 'red'
     }
})

window.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        aboutUsAnchor.style.color = 'red'
    }
    if (e.deltaY < 0) {
        aboutUsAnchor.style.color = 'blue'
     }
})


window.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        blogAnchor.style.color = 'blue';
     }
    if (e.deltaY < 0) {
        blogAnchor.style.color = 'red';
     }   
});

window.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        contactUsAnchor.style.color = 'red'
    }
    if (e.deltaY < 0) {
        contactUsAnchor.style.color = 'blue'
     }
})

window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        console.log("scrolling up");
     }
    if (e.deltaY > 0) {
        console.log("scrolling down");
     }
});

window.addEventListener('wheel' , e => {
    if (e.deltaY > 0) {
        introTextImg.style.borderRadius = "0 50% 0 50%";
    }
    if (e.deltaY < 0) {
        introTextImg.style.borderRadius = "50% 0 50% 0";
    }
})


// * [ ] `drag / drop`//


// * [ ] `load`//


// * [ ] `focus`//


// * [ ] `resize`//


// * [ ] `scroll`//

window.addEventListener('scroll', () => {
    console.log('scrolls');
})

window.addEventListener('scroll', () => {
    introText.style.color = 'white'
    introText.style.background = 'red'
    introText.style.borderRadius = '5%'
    introTextTitle.style.padding = '20px'
    introTextPTag.style.padding = '20px'
    introText.style.margin = '5%'
})



// window.addEventListener('scroll', () => {
//     introTextImg.style.borderRadius = "0 50% 0 50%"
// })


// * [ ] `select`


// * [ ] `dblclick` _________________________________________________________

homeAnchor.addEventListener('dblclick', e => {
    const anchorAdd = document.createElement('a')
    anchorAdd.textContent = '<------'
    nav.append(anchorAdd);
})

contactUsAnchor.addEventListener('dblclick', e => {
    const anchorAdd = document.createElement('a')
    anchorAdd.textContent = '------>'
    nav.prepend(anchorAdd);
})

textContentDiv.addEventListener('dblclick', () => {
    textContentDiv.style.color = 'white'
    textContentDiv.style.background = 'red'
    textContentDiv.style.borderRadius = '5%'
    textContentDiv.style.padding = '20px'
})

textContentDiv.addEventListener('click', () => {
    textContentDiv.style.color = 'black'
    textContentDiv.style.background = 'white'
    textContentDiv.style.borderRadius = '5%'
    textContentDiv.style.padding = '20px'
})

// _________________________________________________________________________

// const funBusLogo = document.querySelector('.main-navigation h1');
// document.addEventListener('mousemove', e => {
//     let x = event.clientX * 4 / window.innerWidth + '%';
//     let y = event.clientY * 3 / window.innerHeight + '%';

// for(let i=0;i<2;i++){
//     funBusLogo[i].style.left = x;
//     funBusLogo[i].style.top = y;
//     funBusLogo[i].style.transform ="translate(-"+x+", -"+y+")";
//   }
// });

