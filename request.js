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
      
    for(post of posts){
            // je mets response title dans un div //affichit 3andi 3onwan ta3 les post lif api 
        document.getElementById("content").innerHTML +=`<p>${post.title}</p>`
        console.log(post.title )
    }
    }
    