const numbers="1234567890";
let gotp=document.querySelector("#G-otp");
let otpBox=document.querySelector("#otp-box");
let btn=document.querySelector("#btn");
let verify=document.querySelector("#verify");
let checked=document.querySelector(".accept-container");
let checkedDone=document.querySelector(".done");
let rejected=document.querySelector(".reject-container")
let retry=document.querySelector(".try");
const otpLength="4";

btn.addEventListener("click",()=>{
   var  para=Math.floor(Math.random() * (1001 - 9999) +9999);
    gotp.innerText=para;
    otpBox.value="";
   
});

verify.addEventListener("click",()=>{
         let enteredOtp=otpBox.value;
         let genertedOtp=gotp.innerText;
         if(!enteredOtp){
            alert("Please enter OTP")
         }
         if(enteredOtp===genertedOtp){
         console.log("validate done");
         checked.classList.add("accepted-container");
         } 
         else if(enteredOtp!==genertedOtp && enteredOtp ){
         console.warn("validate not done");
         rejected.classList.add("rejected-container");
         }
         else (
            console.log("byeee...")
         )

                
});

checkedDone.addEventListener("click",()=>{
   checked.classList.remove("accepted-container") ;
});

retry.addEventListener("click",()=>{
    rejected.classList.remove("rejected-container") ;
})
 




