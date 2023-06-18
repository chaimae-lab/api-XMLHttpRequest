

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
        alert("the post has been created successfully")
        }
}


//update 
function update(){
    let request = new XMLHttpRequest()
    request.open("PUT","https://jsonplaceholder.typicode.com/posts/1")
    request.responseType = "json"
    request.setRequestHeader("Accept" ,"application/json")
    request.setRequestHeader("Content-type" , "application/json")
       //modification de l'objet
    let bodyPara =`{
           "title":"hello word" ,
           "body":"new film",
           "userId" :1
    }`
    request.send(bodyPara)

    request.onload= function(){
        let responce = request.response
        console.log(responce)
        document.getElementById("newObject").innerHTML =`${responce.body}`
        console.log("status code is" + request.status)
        alert("the post has been updated successfully")
        }
}




//delete
function deleteData(){
    let request = new XMLHttpRequest()
    request.open("PUT","https://jsonplaceholder.typicode.com/posts/1")
    request.responseType = "json"
    request.setRequestHeader("Accept" ,"application/json")
    request.setRequestHeader("Content-type" , "application/json")
    request.send()

    request.onload= function(){
        let responce = request.response
        console.log(responce)
        console.log("status code is" + request.status)
        alert("the post has been deleted successfully")
        }
}


 ///get by userId 
      //feltring, get by userId ,get all userId=1, url = url?userId=1,search
      function search(){

        let request = new XMLHttpRequest()
        request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=2")
        request.responseType = "json"
        request.send()
        request.onload= function(){
        let posts = request.response
        console.log(posts )
          if(request.status >=200 && request.status <300){
                for(post of posts){
                console.log(post.title )
               
                }
                alert("search success")
          }
          else{
            alert("error")
          }
     
        }
    }
    



create()
update()
deleteData()
search()