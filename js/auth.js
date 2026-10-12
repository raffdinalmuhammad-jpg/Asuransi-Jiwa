
function login(){
let u=username.value,p=password.value;
if(u=="admin"&&p=="admin"){location.href="admin/dashboard-admin.html";}
else if(u=="budi"&&p=="12345"){location.href="nasabah/dashboard-nasabah.html";}
else alert("Login salah");
}
function register(){alert("Registrasi berhasil. Silakan login.");}
