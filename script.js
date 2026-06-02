function calculateAge(){

    let dob = document.getElementById("dob").value;

    if(dob === ""){
        alert("Please select your date of birth");
        return;
    }

    let birth = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birth.getFullYear();

    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

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

    // 👶 1 - 18 (PINK)
    if(years >= 1 && years <= 18){
        message = "🌸 Keep growing, learning and enjoying your childhood journey!";
        color = "#ffb6c1";
    }

    // 🧑 18 - 40 (YELLOW)
    else if(years > 18 && years <= 40){
        message = "✨ Adult life is about building dreams, stay focused and strong!";
        color = "#fff3a0";
    }

    // 👴 40 - 100 (BLUE)
    else{
        message = "💙 Your experience is your power. You are truly inspiring!";
        color = "#93c5fd";
    }

    let result = document.getElementById("result");

    result.style.background = color;

    result.innerHTML = `
        <p>Age: ${years} Years, ${months} Months, ${days} Days</p>
        <br>
        <p>${message}</p>
    `;
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  }
});