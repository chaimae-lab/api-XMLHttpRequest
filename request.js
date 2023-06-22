

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



//create post
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
   search()
   deleteData()
   update()


/////////////////////////////////using fetch qui utilise les promises 

//get post
function getTodo(){

  fetch('https://jsonplaceholder.typicode.com/posts')
           //ktjib response 3la chkl object json 
      .then(response => response.json())
            //j'ai donne le nom (posts) au response 
      .then(posts=>  {  
                          //j'affiche tous les posts
                   console.log(posts)
                   for(post of posts){
   
                 document.getElementById("content").innerHTML +=`<p>${post.title}</p>`
                 console.log(post.title )
                                        }
                         } )
     
}




/////////////////////////////Axios on a pas besion de voir status code 


function getpost(){

  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    
   //contient tous les info de response :status ,data,,,
   console.log(response)
   //data contient tous les posts 
   console.log(response.data)
  //l'affichage des postes
   for(post of response.data ){
   
    document.getElementById("content").innerHTML +=`<p>${post.title}</p>`
    console.log(post.title )
                           }   

  })
  .catch(function (error) {
    // handle error
    alert(error);
  })
}

getpost()