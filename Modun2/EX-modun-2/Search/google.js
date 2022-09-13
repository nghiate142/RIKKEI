/** @format */

let search = document.querySelector(".query");
let resultSearch = document.querySelector(".result_search");
let img = document.querySelector(".img_show");

search.addEventListener("keyup", (e) => {
  function getData(url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          fn(undefined, JSON.parse(xhr.responseText));
        } else {
          fn(new Error(xhr.statusText), undefined);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  getData(
    `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${search.value}`,
    (searchStates = (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }

      let filterArr;
      if (search.value) {
        filterArr = res[1].filter((data) => {
          return data.toLowerCase().startsWith(search.value);
          // .toLocaleLowerCase()
          // .startsWith(search.value.toLocaleLowerCase());
        });
        filterArr.forEach((filterArr) => {
          // let div = document.createElement("div");
          // div.innerHTML = filterArray;

          getData(
            `https://en.wikipedia.org/w/api.php?
          origin=*&action=query&prop=pageprops|pageimages&format=json&titles=${search.value}`,
            (err, res2) => {
              if (err) {
                console.log(err);
              } else {
                let values = Object.keys(res2.query.pages);
                let show = res2.query.pages[values].thumbnail.source;
                let description =
                  res2.query.pages[values].pageprops["wikibase-shortdesc"];
                resultSearch.innerHTML += `
               <div class ="style">    
               <li><img src="${show}" alt=""></li>
               <li>
               <a href="${res}"><h3>${filterArr}</h3></a>
                   <p>${description}</p>
               </li>
              
               </div>  
            `;
              }
            }
          );
          resultSearch.innerHTML = "";
        });
      }
    })
  );
});

// let searchBtn = document.querySelector('input[type="text"]');

// search.onkeydown = (e) => {
//   if (e.which === 13) {
//     // let url = "https://www.google.com/search?q=" + query.value;
//     // window.open(url);

//     let searchStates = async (searchText) => {
//       let res = await fetch(
//         `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=` +
//           search.value
//       );
//       let states = await res.json();

//       let result = await fetch(
//         `https://en.wikipedia.org/w/api.php?
//    origin=*&action=query&prop=pageprops|pageimages&format=json&titles=` +
//           search.value
//       );
//       let getResult = await result.json();
//       console.log(states);

//       if (searchText.length === 0) {
//         states = [];
//       }
//     };

//     //Show results

//     //    let outputHtml = getResult=>{
//     //            if(getResult.length>0){
//     //                let html = getResult.map(getResult=>{
//     //                    `<div class="search_list_wrapper">
//     //                    <div class="search_list">
//     //                        <div class="img"></div>
//     //                        <div class="title">
//     //                            <h3>Lion</h3>
//     //                       <p>dsahjdklsajks</p>

//     //                        </div>
//     //                    </div>
//     //                </div>`
//     //                });
//     //                console.log(html);
//     //             }}

//   }
// };
