
let FirstName = document.querySelector(".nameinput");
let Number = document.querySelector(".numberinput");
let Year = document.querySelector(".monthinput");
let Month = document.querySelector(".yearinput");
let Cvc = document.querySelector(".cvcinput");
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    let name = formControl.dataset.class
    input.dataset.valid = "false";
    const small = formControl.querySelector("small");
    formControl.className = "standard_input form-control error " + name;
    console.log(formControl.className)
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    let name = formControl.dataset.class
    input.dataset.valid = "true";
    formControl.className = "standard_input form-control success " + name;
}
function setErrorForDate(input, message) {
    const formControl = input.parentElement.parentElement;
    let name = formControl.dataset.class
    input.dataset.valid = "false";
    const small = formControl.querySelector("small");
    formControl.className = "standard_input form-control error " + name;
    small.innerText = message;
}
function setSuccessForDate(input) {
    const formControl = input.parentElement;
    let name = formControl.dataset.class
    console.log(formControl)
    input.dataset.valid = "true";
    formControl.className = "standard_input form-control success " + name;

}
function checkInputs() {
    // trim to remove the whitespaces
    const FirstNameValue = FirstName.value.trim();
    const NumberValue = Number.value.trim();
    const YearValue = Year.value.trim();
    const MonthValue = Month.value.trim();
    const CvcValue = Cvc.value.trim();

    if (FirstNameValue === "") {
        setErrorFor(FirstName, "CARDHOLDER NAME cannot be blank");
    } else {
        setSuccessFor(FirstName);
    }
    if (NumberValue === "") {
        setErrorFor(Number, "CARDHOLDER NUMBER cannot be blank");
    } else {
        setSuccessFor(Number);
    }
    if (YearValue === "" && MonthValue === "") {
        setErrorForDate(Year, "Date Can't be blank");
    } else if (YearValue === "") {
        setErrorForDate(Year, "Year Can't be blank");
    } else if (MonthValue === "") {
        setErrorForDate(Year, "Month Can't be blank");
    } else {
        setSuccessForDate(Year);
    }
    if (CvcValue === "") {
        setErrorFor(Cvc, "Cannot be blank");
    } else {
        setSuccessFor(Cvc);
    }

}

function Validated() {
    console.log(FirstName.dataset.valid === "true")
    console.log(Number.dataset.valid === "true")
    console.log(Year.dataset.valid === "true")
    console.log(Cvc.dataset.valid === "true")
    return (
        FirstName.dataset.valid === "true" &&
        Number.dataset.valid === "true" &&
        Year.dataset.valid === "true" &&
        Cvc.dataset.valid === "true"
    );
}
document.querySelector(".button").addEventListener("click", (e) => {
    e.preventDefault()
    checkInputs()
    if (Validated()) {

        console.log("ds")
        document.querySelector(".card-front-number").innerHTML = Number.value
        document.querySelector(".card-front-name").innerHTML = FirstName.value
        document.querySelector(".card-front-number2").innerHTML = Year.value + "/" + Month.value
        document.querySelector(".card-back-number").innerHTML = Cvc.value
        document.querySelector(".form").innerHTML = `
        <div class="completeimage">
                <img src="./images/icon-complete.svg" alt="" srcset="">
            </div>
            <div class="thankyou">thank you!</div>
            <div class="thankyoudetail">We've added your card details</div>
            <div class="buttoncontainer">
                <button class="button continue">Continue</button>
            </div>
        `
    }
})