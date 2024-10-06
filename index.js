window.onload = function() {
    window.onscroll = function() {
        var button = document.getElementById("do-gory");
        if (window.scrollY > 550) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    function gora() {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    document.getElementById("do-gory").addEventListener("click", function(event) {
        event.preventDefault(); 
        gora();
    });
};
document.addEventListener("DOMContentLoaded", function() {
    var przyciskX = document.querySelector(".przycisk-x");
    var stopka = document.querySelector(".stopka");
    przyciskX.addEventListener("click", function() {
        stopka.style.display = "none";
    });
});

document.getElementById("przycisk-g").addEventListener("click", function() {
    document.getElementById("formularzRejestracyjny").classList.remove("hidden");
});

document.getElementById("formularz").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("formularzRejestracyjny").classList.add("hidden");
    alert("Formularz został pomyślnie wysłany!");
});


document.getElementById("przycisk-zal").addEventListener("click", function() {
    document.getElementById("formularz-logowania").classList.remove("hidden");
});
document.getElementById("formularz-logowania").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var nazwa = document.getElementById("nazwa").value;
    var haslo = document.getElementById("haslo").value;

    if (nazwa === "klient" && haslo === "klient1") {
        document.getElementById("formularz-logowania").classList.add("hidden");
        document.getElementById("przycisk-zal").classList.add("hidden");
        document.getElementById("przycisk-g").classList.add("hidden");
        document.getElementById("przycisk-wyloguj").classList.remove("hidden");
        document.getElementById("przycisk-zarzadzaj").classList.add("hidden");
        document.getElementById("prycisk-szukaj").classList.remove("hidden");
        document.getElementById("szukaj").classList.remove("hidden");
        document.getElementById("przycisk-admina").classList.add("hidden");
        document.getElementById("przycisk-konto").classList.remove("hidden");

        alert("Zalogowano jako Klient");
    } else if (nazwa === "pracownik" && haslo === "pracownik1") {
        document.getElementById("formularz-logowania").classList.add("hidden");
        document.getElementById("przycisk-zal").classList.add("hidden");
        document.getElementById("przycisk-g").classList.add("hidden");
        document.getElementById("przycisk-wyloguj").classList.remove("hidden");
        document.getElementById("przycisk-zarzadzaj").classList.remove("hidden");
        document.getElementById("prycisk-szukaj").classList.add("hidden");
        document.getElementById("szukaj").classList.add("hidden");
        document.getElementById("przycisk-admina").classList.add("hidden");
        document.getElementById("przycisk-konto").classList.add("hidden");
        alert("Zalogowano jako Pracownik");
    } 
    else if (nazwa === "admin" && haslo === "admin1") {
        document.getElementById("formularz-logowania").classList.add("hidden");
        document.getElementById("przycisk-zal").classList.add("hidden");
        document.getElementById("przycisk-g").classList.add("hidden");
        document.getElementById("przycisk-wyloguj").classList.remove("hidden");
        document.getElementById("przycisk-admina").classList.remove("hidden");
        document.getElementById("przycisk-konto").classList.add("hidden");
        
        alert("Zalogowano jako Administrator");
    }else {
        alert("Niepoprawne dane logowania. Spróbuj ponownie.");
    }
});


document.getElementById("przycisk-wyloguj").addEventListener("click", function() {
    
    document.getElementById("przycisk-wyloguj").classList.add("hidden");
    document.getElementById("przycisk-zarzadzaj").classList.add("hidden");
    document.getElementById("prycisk-szukaj").classList.add("hidden");
    document.getElementById("szukaj").classList.add("hidden");
    document.getElementById("przycisk-admina").classList.add("hidden");
    document.getElementById("przycisk-zal").classList.remove("hidden"); 
    document.getElementById("przycisk-g").classList.remove("hidden");
    document.getElementById("przycisk-konto").classList.add("hidden");
    document.getElementById("formularz-logowania").classList.remove("hidden");
});
document.getElementById("przycisk-g").addEventListener("click", function() {
    document.getElementById("formularzRejestracyjny").classList.remove("hidden");
});

document.getElementById("close-register1").addEventListener("click", function() {
    document.getElementById("formularzRejestracyjny").classList.add("hidden");
});

document.getElementById("close-register2").addEventListener("click", function() {
    document.getElementById("formularz-logowania").classList.add("hidden");
});



document.getElementById("przycisk-napisz").addEventListener("click", function() {
    document.getElementById("formularz-wysylania").classList.remove("hidden");
});
document.getElementById("close-register3").addEventListener("click", function() {
    document.getElementById("formularz-wysylania").classList.add("hidden");
}); 
document.getElementById("wysylaj").addEventListener("click", function()
{
    alert("Wiadomość Wysłana!!!")
    document.getElementById("formularz-wysylania").classList.add("hidden"); 
});


document.getElementById("przycisk-reklamacja").addEventListener("click", function() {
    document.getElementById("formularz-reklamacji").classList.remove("hidden");
});
document.getElementById("close-register4").addEventListener("click", function() {
    document.getElementById("formularz-reklamacji").classList.add("hidden");
}); 
document.getElementById("wysylaj2").addEventListener("click", function()
{
    alert("Formularz wysłany!!!")
    document.getElementById("formularz-reklamacji").classList.add("hidden"); 
});



function search() {
   
    const searchTerm = document.getElementById('szukaj').value.toLowerCase();
    
    const ids = ['usluga-wy1', 'usluga-wy2', 'usluga-wy3', 'usluga-wy4', 'u1', 'u2', 'u3', 'u4' ];

    let found = false;

    ids.forEach(id => {
        const contentElement = document.getElementById(id);
        const content = contentElement.innerHTML;
        const regex = /<span class="highlight">(.*?)<\/span>/gi;
        const cleanContent = content.replace(regex, '$1');
        const searchRegex = new RegExp(searchTerm, 'gi');
        const highlightedContent = cleanContent.replace(searchRegex, match => `<span class="highlight">${match}</span>`);
        contentElement.innerHTML = highlightedContent;

        if (highlightedContent.includes('<span class="highlight">')) {
            if (!found) {
                contentElement.scrollIntoView({ behavior: 'smooth' });
                found = true;
            }
        }
    });

    if (!found) {
        alert('Nie znaleziono żadnych wyników.');
    }
}
document.getElementById("przycisk-admina").addEventListener("click", function() {
    document.getElementById("formularz-admina").classList.remove("hidden");
});
document.getElementById("close-register5").addEventListener("click", function() {
    document.getElementById("formularz-admina").classList.add("hidden");
}); 



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('service-form');
    const addServiceButton = document.getElementById('add-service');
    const servicesContainer = document.getElementById('services');
    const totalCostElement = document.getElementById('total-cost');

    form.addEventListener('change', updateTotalCost);
    addServiceButton.addEventListener('click', addService);

    function addService() {
        const serviceTemplate = document.querySelector('.service');
        const newService = serviceTemplate.cloneNode(true);
        servicesContainer.appendChild(newService);
        updateTotalCost();
    }

    function updateTotalCost() {
        let totalCost = 0;
        document.querySelectorAll('.service-select').forEach(select => {
            const price = parseInt(select.options[select.selectedIndex].dataset.price);
            totalCost += price;
            select.nextElementSibling.textContent = `${price} zł`;
        });
        totalCostElement.textContent = `${totalCost} zł`;
    }
});
document.getElementById("przycisk-konto").addEventListener("click", function() {
    
    document.getElementById("zamowienie-pokaz").classList.remove("hidden");
});

document.getElementById("close-register7").addEventListener("click", function() {
    document.getElementById("zamowienie-pokaz").classList.add("hidden");
}); 














