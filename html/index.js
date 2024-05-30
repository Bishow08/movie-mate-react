const formSubmission = ()=>{
    const formData = document.getElementById("contactForm");
    console.log(formData);
    const formDatas = new FormData(formData);

    //Display the values
    for (const value of formDatas.values()) {
        console.log(value);
    }
    document.getElementById("contactForm").reset();
    document.getElementsByClassName("systemMsg")[0].innerHTML = "Thank you for contacting us";

    setTimeout(()=>{
        document.getElementsByClassName("systemMsg")[0].innerHTML = "";
    }, 3000);

}

const str = "1234567890"
 str.length === 10 ? console.log(str.slice(-2).padStart(str.length, "*")) : console.log("invalid number");


    //ternary operator
    //condition ? true : false;