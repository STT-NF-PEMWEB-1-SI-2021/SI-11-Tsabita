    let success = () => {
        console.log("Username Benar");
        location.href = "home.html";
    };
function Login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "rahm21227si" && password == "12345678"){ 
        alert("Success Login");
        window.open("home.html");
    }
    else{
        alert("Gagal login, Periksa kembali username dan password anda!");
    }
}

function formsubmit(){
    let namalengkap = document.getElementById("namalengkap").value;
    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    
    if (namalengkap == "" || namalengkap == null){
        alert("Data harus terisi lengkap!")
    }
    else if (email == "" || email == null){
        alert("Data harus terisi lengkap!")
    }
    else if (user == "" || user == null){
        alert("Data harus terisi lengkap!")
    }
    else if (pass == "" || pass == null){
        alert("Data harus terisi lengkap!")
    }
    else{
        alert("Berhasil Daftar")
        window.open("FormLogin.html")
    }
}
