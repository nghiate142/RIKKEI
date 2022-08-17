let div = document.getElementById('exercise')
let abc = document.getElementById('btn');
let div2 = document.getElementById('exercise2')
// abc.onclick = function() 

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
// let btn = document.getElementById("btn");
// let div = document.getElementById("exercise");
// let color =['orange', 'yellow', 'blue','green','violet'];

// btn.onclick=function(){

//     div.style.backgroundColor= color [Math.floor(Math.random()*color.length) ];
 
// }

// abc.onclick =function () {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let color = `rgb(${r}, ${g}, ${b})`;
//     div.style.backgroundColor = color;
//     console.log(r, g, b);
// };

// abc.onclick = function () {
//     let color = generateColor();
//     div.style.backgroundColor = color;
// }
// function generateColor () {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let color = `rgb(${r}, ${g}, ${b})`;
//     return color
// }



// EX3:     
abc.onclick = function() {
    let tempContent = "";
    let bgColorTemp = "";

    let style = getComputedStyle(div);
    let style2 = getComputedStyle(div2);

    bgColorTemp = style.backgroundColor;
    div.style.backgroundColor = style2.backgroundColor;
    div2.style.backgroundColor = bgColorTemp;

    tempContent = div.innerHTML;
    div.innerHTML = div2.innerHTML;
    div2.innerHTML = tempContent
}