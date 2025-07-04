function calculateAge() {
    let dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText = `Your age is ${years} years, ${months} months, and ${days} days.`;
}