
function validateForm(){
    var Email= document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password=document.getElementById("confirm_password").value;
    var phonenumber=document.getElementById("phno").value;
    var phoneNumberRegex = /^\d{10}$/;
    var mailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var username=document.getElementById("username").value.trim();
if(username){
    if(username.length>2){
      document.getElementById("username").style= "border:3px solid green";
      document.getElementById("errorname").style= "display:none";
      document.getElementById("errorname_format").style= "display:none";
    }
    else{
      document.getElementById("username").style= "border:3px solid red";
  document.getElementById("errorname").style= "display:none";
      document.getElementById("errorname_format").style= "display:block";
    }
}
else{
  document.getElementById("username").style= "border:3px solid red";
  document.getElementById("errorname").style= "display:block";
  document.getElementById("errorname_format").style= "display:none";

}
    if(password){
      document.getElementById("password").style= "border:3px solid green";
    }
    else{
      document.getElementById("password").style= "border:3px solid red";
    }

    if(confirm_password){
        if(password==confirm_password){
               document.getElementById("confirm_password").style= "border:3px solid green";
       document.getElementById("pass2").style= "display:none";
               
   }
     else{
       document.getElementById("confirm_password").style= "border:3px solid red";
       document.getElementById("pass2").style= "display:block";
     }}

    
    
  
  
    

  if(phonenumber){
        if(phoneNumberRegex.test(phonenumber)==true){
          document.getElementById("errorph_format").style= "display:none";
          document.getElementById("errorph").style= "display:none";
         document.getElementById("phno").style= "border: 3px solid green";
        }
        else{
          document.getElementById("errorph_format").style= "display:block";
          document.getElementById("errorph").style= "display:none";
         document.getElementById("phno").style= "border: 3px solid red";
        }
     }
  else{
      document.getElementById("phno").style= "border: 3px solid red";
      document.getElementById("errorph").style= "display:block";
      document.getElementById("errorph_format").style= "display:none";
     }  

     if(Email){
        if(mailreg.test(Email)==true){
          document.getElementById("errormail_format").style= "display:none";
          document.getElementById("errormail").style= "display:none";
         document.getElementById("email").style= "border: 3px solid green";
        }
        else{
          document.getElementById("errormail_format").style= "display:block";
          document.getElementById("errormail").style= "display:none";
         document.getElementById("email").style= "border: 3px solid red";
        }
     }
     else{
      document.getElementById("email").style= "border: 3px solid red";
      document.getElementById("errormail").style= "display:block";
      document.getElementById("errormail_format").style= "display:none";
     } 
    }