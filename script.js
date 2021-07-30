function validate()
{
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  if(email=="coder@gmail.com" && password=="excited123")
  {
    alert("LOGIN SUCCESSFUL");
    return false;
  }
  else{
    alert("LOGIN FAILED");
  }
}