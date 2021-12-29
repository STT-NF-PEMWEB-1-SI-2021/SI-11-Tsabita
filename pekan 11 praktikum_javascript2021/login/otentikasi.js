function login_akun(){
    let frm = document.getElementById("kotak");
    let uname = frm.username.value;
    let pswd = frm.password.value;
    console.log(uname, pswd);
    if (uname == "ahmad2017", pswd == "integrity"){
        console.log("login berhasil");
        alert("login berhasil");
        window.open("login_berhasil.html");

    }else{
        console.log("login gagal");
        alert("login gagal");
    }
}