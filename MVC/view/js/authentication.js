function validateUserValue(value,error,errorMessage)
{
    const Uservalue=document.getElementById(value).value.trim();
    const Showerror=document.getElementById(error);
    if(Uservalue=="" || Uservalue==null)
    {
        Showerror.textContent=errorMessage;
        return false;
    } else
    {
        Showerror.textContent="";
        return true;
    }
}

document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("username").addEventListener("focusout",function(){
        validateUserValue("username","usernameError","Username must be filled out");
    });
    document.getElementById("password").addEventListener("focusout",function(){
        validateUserValue("password","passwordError","Password must be filled out");
    });
});

function validateLogin()
{
    const isUsernameValid=validateUserValue("username","usernameError","Username must be filled out");
    const isPasswordValid=validateUserValue("password","passwordError","Password must be filled out");
    return isUsernameValid && isPasswordValid;
}