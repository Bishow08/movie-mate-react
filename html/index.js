const formSubmission = ()=>{
    const formData = document.getElementById("contactForm");
    console.log(formData);
    const formDatas = new FormData(formData);

    //Display the values
    for (const value of formDatas.values()) {
        console.log(value);
    }
}