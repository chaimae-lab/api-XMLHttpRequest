

function get(){

    let request = new XMLHttpRequest()
    //les information de request url , get 
    request.open("GET","https://jsonplaceholder.typicode.com/posts")
     //bach response tjinaa 3la chkl objet json //kiji 3la chkl array
    request.responseType = "json"
    //l'envoi de request 
    request.send()
     //lajat response ob4ina nchofoha f console
    request.onload= function(){
    let posts = request.response
    console.log(posts )
           //je verifie le status de request
      if(request.status >=200 && request.status <300){
            for(post of posts){
            // je mets response title dans un div //affichit 3andi 3onwan ta3 les post lif api 
            document.getElementById("content").innerHTML +=`<p>${post.title}</p>`
            console.log(post.title )
            }
      }
      else{
        alert("error")
      }



   
    }
    

}

get()


//create
function create(){
    let request = new XMLHttpRequest()
    request.open("POST","https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    request.setRequestHeader("Accept" ,"application/json")
    request.setRequestHeader("Content-type" , "application/json")
    //'ajout d'un nouveau objet json ,et ajouter `` pour e transferer au string
    let bodyPara =`{
           "title":"film" ,
           "body":"new film",
           "userId" :1
    }`
    request.send(bodyPara)

    request.onload= function(){
        let responce = request.response
        console.log(responce)
        //j'affiche un element de responce "body"
        document.getElementById("newObject").innerHTML =`${responce.body}`
        console.log("status code is" + request.status)
        }
}

create()