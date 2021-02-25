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

function isThereaUser(email,password) {
    console.log(email);
    console.log(password);
    for(i=0; i< users.length; i++){
        if (users[i].email == email && users[i].password == password) {
            return true;
        }

    }
    return false;
}

function enter() {
    if (isThereaUser(email,password)) {
        console.log(tweets)
    }
    else{
        console.log("Username or password is invalid")
    }
}

enter(email,password)