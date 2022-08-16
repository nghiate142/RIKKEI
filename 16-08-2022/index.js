// console.log(document)
// let div = document.getElementById("app");
// console.log(div);

// let divs = document.getElementsByClassName("app")
// console.log(divs)

// console.log(divs[0])
// console.log(divs[1])

// for (i = 0; i < divs.length; i++){
//     console.log(divs[i])
// }

// let div1 = document.getElementsByTagName('div');
// console.log(div1)

// let div = document.getElementById('app')
// console.log(div)
// console.dir(div)
// console.log(div.innerText);
// console.log(div.innerHTML);
// console.log(div.textContent);

// div.innerText = "Hello everybody";
// div.innerHTML = `<b style="color:blue;">Hello world</b>`;
// div.textContent

// console.log(div.style)
// div.style.backgroundColor = 'pink';
// div.style.color = 'blue';
// div.style.width = '300px';
// div.style.height = '300px';
// div.style.textAlign = 'center';
// div.style.lineHeight = '300px';
// div.style.fontSize = '30px';
// div.style.fontWeight = '80px'
// div.style.borderRadius = '50%'



// console.log(div.classList);
// // .classList.add (newClass)
// div.classList.add('demo');
// console.log(div.classList);

// //.classList.remove (removeClass)
// div.classList.remove('app');
// console.log(div.classList);

// div.classList.value = "";
// console.log(div.classList);
// div.classList.value += " demo";



// id
// console.log(div.id);


// getAttribute()
// console.log(div.getAttribute('class'));
// console.log(div.getAttribute('id'))

// setAttribute()
// div.setAttribute('id', 'app2')
// console.log(div.getAttribute('id'))
// console.log(div.id)


// document.

// .createElement();

// let a = document.createElement('a')
// a.setAttribute('href', 'https://www.google.com');
// a.innerText = 'click me!';
// console.log(a)

// .appenChild(): gắn thêm phần tử cho div
// div.appendChild(a)


// .remove()
// a.remove()


// .children, .parentElement
// console.log(div.children); // --> Mảng
// console.log(div.children[0]);
// let i = div.children[0];
// console.log(i.parentElement.parentElement.parentElement);


// Sự kiện (Event)
// let abc = document.getElementById('abc');
// abc.onclick = function() {
    // alert('Hello');
//     div.style.backgroundColor = 'red'
// }

// div.style.backgroundColor


    
    


// let div = document.getElementById('exercise')
// let abc = document.getElementById('btn');
// abc.onclick = function() 
// {
    // EX1
    // if(div.style.display != 'none'){
    //     div.style.display = 'none';
    // } else {
    //     div.style.display ='block';
    // }

    // if(div.style.opacity != '0'){
    //     div.style.opacity = '0';
    // } else {
    //     div.style.opacity ='1';
    // }

//     if(!div.classList.contains('hide')){
//         div.classList.add('hide');
//     } else {
//         div.classList.remove('hide');
//     }
// }


// EX2:
    // {
    //     if(div.style.backgroundColor === 'rgb(100, 145, 145)'){
    //         div.style.backgroundColor = 'red';
    //     } else {
    //         div.style.backgroundColor = 'rgb(100, 145, 145)';
    //     }
    // }


//EX3
    // {
    //     div.style.fontSize = 'xx-large'
    // }


//EX4
    // {
    //     div.style.fontSize = 'x-large'
    // }

//EX5
// let button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', () => {
//   div.style.backgroundColor = colors();
// });

// function colors() {
//   let colorArray = [];    

//   for(let i =0; i < 3 ; i++){
//     colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
//   }
//   // rgb -> hex
//   let color = colorArray
//     .map( x => x.toString(16))
//     .join('');

//   return `#${color}`;
// }
// https://codepen.io/Mdvlprr/pen/ygYKMj
let btn = document.getElementById("btn");
let divs = document.getElementById("hide-txt");
let color =['orange', 'yellow', 'blue','green','violet'];

btn.onclick=function(){

    divs.style.backgroundColor= color [Math.floor(Math.random()*color.length) ];
 
}



    