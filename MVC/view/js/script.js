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

function validateEmail() 
{
    const email=document.getElementById("email").value.trim();
    const emailError=document.getElementById("emailError");
    if(!validateUserValue("email","emailError","Email must be filled out"))
    {
        return false;
    }
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if(!emailPattern.test(email))
    {
        emailError.textContent = "Invalid Email format";
        return false;
    }
    else 
    {
        emailError.textContent="";
        return true;
    }
}

function validateNumber() 
{
    const number=document.getElementById("number").value.trim();
    const numberError=document.getElementById("numberError");
    if(!validateUserValue("number","numberError","Phone Number must be filled out"))
    {
        return false;
    }
    if((number>='a' && number<='z') || (number>='A' && number<='Z'))
    {
        numberError.textContent="Phone Number does not contains letters";
        return false;
    }
    if((number.length)!=10)
    {
        numberError.textContent="Phone Number contains 10 digits";
        return false;
    }
    else 
    {
        numberError.textContent="";
        return true;
    }
}

function validateImage() 
{
    const image=document.getElementById("image").value.trim();
    const imageError=document.getElementById("imageError");
    if(!validateUserValue("image","imageError","Image must be upload"))
    {
        return false;
    }
    const extension=[".jpg",".jpeg",".png"];
    if(!extension.some(el => image.endsWith(el)))
    {
        imageError.textContent="Image only upload";
        return false;
    }
    else 
    {
        imageError.textContent="";
        return true;
    }
}

function validatePassword() 
{
    const password=document.getElementById("password").value.trim();
    const passwordError=document.getElementById("passwordError");
    if(!validateUserValue("password","passwordError","Password must be filled out"))
    {
        return false;
    }
    passwordPattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
    if(!passwordPattern.test(password))
    {
        passwordError.textContent="Atlease one uppercase and lowercase letter, one number, one special character and length 8-15";
        return false;
    }
    else 
    {
        passwordError.textContent="";
        return true;
    }
}

const current_date=new Date().toISOString().split('T')[0];
document.getElementById("dob").setAttribute("max",current_date);

document.addEventListener("DOMContentLoaded", function() 
{
    document.getElementById("fname").addEventListener("focusout",function(){
        validateUserValue("fname","fnameError","First name must be filled out");
    });
    document.getElementById("lname").addEventListener("focusout",function(){
        validateUserValue("lname","lnameError","Last name must be filled out");
    });
    document.getElementById("dob").addEventListener("focusout",function(){
        validateUserValue("dob","dobError","DOB must be filled out");
    });
    document.getElementById("department").addEventListener("focusout",function(){
        validateUserValue("department","departmentError","Department must be filled out");
    });
    document.getElementById("age").addEventListener("focusout",function(){
        validateUserValue("age","ageError","Age must be filled out");
    });
    document.getElementById("blood_group").addEventListener("focusout",function(){
        validateUserValue("blood_group","blood_group_Error","Blood Group must be filled out");
    });
    document.getElementById("gender").addEventListener("focusout",function(){
        validateUserValue("gender","genderError","Gender must be filled out");
    });
    document.getElementById("passedout_year").addEventListener("focusout",function(){
        validateUserValue("passedout_year","passedout_year_Error","Passedout Year must be filled out");
    });
    document.getElementById("location").addEventListener("focusout",function(){
        validateUserValue("location","locationError","Location must be filled out");
    });
    document.getElementById("email").addEventListener("focusout", validateEmail);
    document.getElementById("number").addEventListener("focusout", validateNumber);
    document.getElementById("image").addEventListener("focusout", validateImage);
    document.getElementById("password").addEventListener("focusout", validatePassword);
});

function validateForm() 
{
    const isFNameValid=validateUserValue("fname","fnameError","First name must be filled out");
    const isLNameValid=validateUserValue("lname","lnameError","Last name must be filled out");
    const isDOBValid=validateUserValue("dob","dobError","DOB must be filled out");
    const isDepartmentValid=validateUserValue("department","departmentError","Department must be filled out");
    const isAgeValid=validateUserValue("age","ageError","Age must be filled out");
    const isBloodGroupValid=validateUserValue("blood_group","blood_group_Error","Blood Group must be filled out");
    const isGenderValid=validateUserValue("gender","genderError","Gender must be filled out");
    const isPassedOutYearValid=validateUserValue("passedout_year","passedout_year_Error","Passedout Year must be filled out");
    const isLocationValid=validateUserValue("location","locationError","Location must be filled out");
    const isEmailValid=validateEmail();
    const isNumberValid=validateNumber();
    const isImageValid=validateImage();
    const isPasswordValid=validatePassword();

    if (isFNameValid && isLNameValid && isDOBValid && isEmailValid && isNumberValid && isImageValid && isDepartmentValid && isAgeValid && isBloodGroupValid && isGenderValid && isPassedOutYearValid && isLocationValid && isPasswordValid) 
    {
        alert("Successfully Created");
        return true;
    }
    else
    {
        return false;
    }
}