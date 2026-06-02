console.log("JS file loaded");
function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let message = "";

    if (years <= 15) {
        message = "👶 Childhood time — enjoy learning and fun!";
    }
    else if (years <= 40) {
        message = "🚀 Prime time — build your future!";
    }
    else {
        message = "👴 Wisdom stage — your experience inspires others!";
    }

    let result = document.getElementById("result");

    result.innerHTML = `
        <h3>Your Age</h3>
        <p><b>${years}</b> Years, <b>${months}</b> Months, <b>${days}</b> Days</p>
        <p>${message}</p>
    `;
}