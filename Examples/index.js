 var users = [
     {email: "alper.yurtdas06@gmail.com", password : "12345"},
     {email: "alper-yurtdas@gmail.com", password : "1234567"}

 ]

 var tweets = [
     {email :"alper.yurtdas06@gmail.com ", tweet: "Bugün hava çok güzel"},
     {email :"alper.yurtdas06@gmail.com ", tweet: "Bugün hava çok güzel 2"},
     {email :"alper-yurtdas@gmail.com ", tweet: "Tam gezmelik hava"}
 ]

 var email = prompt("email?")
 var password = prompt("password")

 function enter() {
     if ((email == users[0].email && password == users[0].password) || (email == users[1].email && password == users[1].password)) {
         console.log(tweets)
     }
     else{
         console.log("Username or password is invalid")
     }
 }

 enter(email,password)