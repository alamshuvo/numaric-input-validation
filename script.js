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