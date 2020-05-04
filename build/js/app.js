
var list = document.getElementById('list');

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => json.data)
.then(data => {
    let users = data;
    console.log(users);
    return users.map(function(user){
        var li =  document.createElement('li');
        li.innerHTML = user.first_name + '  ' + user.last_name;
        list.appendChild(li);

    })
}).catch(err => {
        var li  =  document.createElement('li');
        li.innerHTML = " ❌ Error while fetching data from API ❌ ";
        list.appendChild(li);
})


    var data = null;
    
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("GET", "https://reqres.in/api/users");
    xhr.setRequestHeader("passthrough", "YXBpdGVzdDEyMzM1MzQxMjU0NTQ");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.16.3");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "8c359fd7-2668-401c-abed-88e5c232b46c,ce65e28b-719f-4272-a644-e3aeed7e89b9");
    xhr.setRequestHeader("Host", "www.knowyourgst.com");
    xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Access-Control-Request-Headers", "passthrough");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "passthrough");
          
    xhr.send(data);
