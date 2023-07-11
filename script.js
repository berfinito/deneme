var button = document.getElementById("btn");
button.addEventListener("click", function() {
    var firstName = prompt("Adınızı girin:");
    var lastName = prompt("Soyadınızı girin:");

    var fullName = firstName + " " + lastName;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Merhaba, " + fullName + "!";
});
