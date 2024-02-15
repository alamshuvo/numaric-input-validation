function inputValidation() {
    const press=document.getElementById("press");
    const input=document.getElementById("num").value;
    let text;
    if (isNaN(input)||input<1 || input>10) {
        text="please input valid number between 1 to 10";
    } else {
        text ="okey your input number is valid ";
    }
    const x=document.getElementById("display").innerText=text;
}
function phoneNumberValidation() {
    const hideElement=document.getElementById("input-validation");
    const hideElementphn=document.getElementById("phone");
    // const hideBtn=document.getElementById("anohter-btn");
    // const pressBdNumber=document.getElementById('num-phn').value;
    hideElement.classList.add("hidden");
    hideElementphn.classList.remove("hidden");
 
}
function phoneNumberValidation2(){
    const pressBdNumber=document.getElementById('num-phn').value;
        const f=phoneNumberValidationa(pressBdNumber);
   
       const x=document.getElementById("display-number");
    
       x.innerText=f;
}
function goBack() {
    const hideElement=document.getElementById("input-validation");
    const hideElementphn=document.getElementById("phone");
    const goBack=document.getElementById("go-back");
    hideElementphn.classList.add("hidden");
    hideElement.classList.remove("hidden");
    const x=document.getElementById("display-number");
    x.innerText='';

}