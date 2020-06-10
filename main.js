"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }


// Displays and sorts coffees from cofffe array
function renderCoffees(coffees) {
    var html = '';
    coffees.sort(function (a, b) {
        return (a.name - b.name);
    });
    coffees.forEach(function (coffee) {
        html += "<div class='col-6'>";
        html += "<h2>" + coffee.name + "</h2>";
        html += "<p>" + coffee.roast + "</p>";
        // html += '<img src="' + coffee.image + '" alt="" class="imageDude">';
        html += "</div>";
    });
    return html;
}


// add coffeeeeee
function updateCoffees() {
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(coffeeSelected.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
};

// create coffee
function createCoffee(inputName, roastType) {
    var newCoffee = {id: coffees.length + 1, name: inputName, roast: roastType}
    coffees.push(newCoffee);
}


var coffeeList = document.getElementById("coffeeList");

var coffeeSelected = '';
var coffeeType = document.getElementById('coffeeNameInput');
coffeeType.addEventListener('keyup', function () {
    coffeeSelected = coffeeType.value;
    updateCoffees();
});


var selectedRoast = 'all';
var roastSelection = document.querySelector('#inputGroupsSelect01');
roastSelection.addEventListener("change", function () {
    selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    updateCoffees();
});

var submitNewCoffee = document.getElementById('addCoffeeButton')
submitNewCoffee.addEventListener('click', function(){
    var newCoffeeRoast = document.getElementById("inputGroupSelect02");
    var newCoffeeName = document.getElementById("newCoffeeName");
    if(newCoffeeName !== '') {
        createCoffee(newCoffeeName.value, newCoffeeRoast.value);
        updateCoffees();
    }
});


coffeeList.innerHTML = renderCoffees(coffees);

var submitButton = document.querySelector('#submit');
