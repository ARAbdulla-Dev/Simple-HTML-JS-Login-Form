/*

 !!!THANK YOU FOR USING THIS!!!
    NAME :- LOGIN FORM
    CREATED DATE :- 2024/06/08
    @ARAbdulla-Dev

*/

function submit(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email && !password){
        alert("Please enter your email and password!")
    } else if (email && !password){
        alert("Please enter your password!");
    } else if (password && !email){
        alert("Please enter your email!");
    } else if (password && email){
        if (email === "email@domain.com" && password === "12345"){
            window.location("index.html")   
        } else{
            alert("Incorrect Login Credinatels!")
        }
    }
}