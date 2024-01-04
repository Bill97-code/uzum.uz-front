function locYoz(){
    var phoneInp = document.getElementById('phoneInp').value;

    window.localStorage.setItem('phoneInp', phoneInp);  
}
function tekshir(){
     var inp2 = document.getElementById('inp2').value;
     var inp3 = document.getElementById('inp3').value;
     var inp4 = document.getElementById('inp4').value;
     var modalh1 = document.getElementById('modalh1');
     var inp5 = document.getElementById('inp5').value;

     if(inp2 == "1" && inp3 == "1" && inp4 == "1" && inp5 == "1")
     {
        window.open("profile.html", "_self");
     }
     else{
        modalh1.innerText = "OTP xato!";
        modalh1.style.color = "crimson";
     }


}