var dataSow;
var dataApi = "http://127.0.0.1:3000/api/v1/questions"
fetch(dataApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        // sowData(data)
        dataSow = sowData(data)
        dislike(dataSow, data)
        // console.log(dataSow);

    })
    .catch(function(err) {
        alert(err)
    })

// console.log(random);
function sowData(data) {
    let questionContent = document.getElementById("question-content")
    let random = Math.floor(Math.random() * data.length);
    let dataId = data.find((e)=> data.indexOf(e) == random )
    questionContent.innerText = dataId.content
    return random;
}

function dislike(dataSow, data) {
    let dislike = document.getElementById("dislike")
    dislike.onclick =() =>{
        console.log(dataSow);
        console.log(data);
    }
}
let like = document.getElementById("like")
// console.log(dataSow);