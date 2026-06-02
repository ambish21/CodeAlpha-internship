function calculateAge(){

    let dob = document.getElementById("dob").value;

    if(dob === ""){
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if(days < 0){
        months--;
        days += 30;
    }

    if(months < 0){
        years--;
        months += 12;
    }

    let message = "";
    let color = "";

    if(years <= 15){

        message =
        "👶 Hey little superstar! Keep learning and growing.";

        color = "#bde0fe";

    }

    else if(years <= 40){

        message =
        "🚀 Keep chasing your dreams. Your best years are here.";

        color = "#caffbf";

    }

    else{

        message =
        "👴 Wisdom comes with experience. Your journey is inspiring.";

        color = "#ffd6a5";

    }

    let result = document.getElementById("result");

    result.style.background = color;

    result.innerHTML = `
        <p><strong>Age:</strong> ${years} Years,
        ${months} Months,
        ${days} Days</p>

        <br>

        <p>${message}</p>
    `;
}