
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
