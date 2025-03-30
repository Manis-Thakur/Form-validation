document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('nameOfUser');
    let Dob = document.getElementById('dateOfUser');
    let email = document.getElementById('emailUser');

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('DobError').innerHTML = "";
    document.getElementById('EmailError').innerHTML = "";

    let isValid = true;

    if (name.value.trim() === '') {
        document.getElementById('nameError').innerHTML = "Name is required";
        isValid = false;
    }

    if (Dob.value.trim() === '') {
        document.getElementById('DobError').innerHTML = "Enter your DOB";
        isValid = false;
    }

    if (email.value.trim() === '') {
        document.getElementById('EmailError').innerHTML = "Enter your email";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully");
    }
});
