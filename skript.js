document.addEventListener("DOMContentLoaded", function() {
    var malumotInput = document.getElementById("malumotInput");
    var saqlashBtn = document.getElementById("saqlashBtn");
    var malumotList = document.getElementById("malumotList");  
    var malumotlar = [];

    saqlashBtn.addEventListener("click", function() {
        var malumot = malumotInput.value;
        malumotlar.push(malumot);
        malumotInput.value = ""; 
        renderMalumotlar();
    });

    function renderMalumotlar() {
        malumotList.innerHTML = ""; 
        malumotlar.forEach(function(malumot) {
            var li = document.createElement("li");
            li.textContent = malumot;
            malumotList.appendChild(li);
        });
    }
});
