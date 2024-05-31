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

    const checkEvenOdd = (a) => {
        return a % 2 === 0 ? console.log("even") : console.log("odd");
    }
     checkEvenOdd(50);

    //  const properCase = (str) => {
    //     return str.split(" ")
    //     .map((word)=> word.charAt(0).toUpperCase)
    //  }
    // console.log(properCase());

    const nepalNumber = (number) => { 
        return number.length === 10 &&
            (number.slice(0, 2) === "98" || number.slice(0, 2) === "97")? true : false;
    }
    
    console.log(nepalNumber("9812345678")); // false

    // Default Function

    // Parametrized Function (parameters wrap in curly braces)
    const add = ({a = 2, b=3, c= 5}) => {
        return a + b + c;
    }
    //while calling should pass object as {}
    console.log(add({}));

    // Explicit Function
    const sayHello = (name) => {
        return `Hi $(name)`;
    }
    console.log(sayHello("Bishal"));

    // Implicit Function
    const Hello = (name) => 
         `Hi $(name)`;
    
    console.log(Hello("Bishal"));

    // IIFE (Immediately Invoked Function Expressions)
    // used in Project setup js
    // also Devops (script immediately run)

    (()=>{
        console.log("Immediately run")
    })();
    