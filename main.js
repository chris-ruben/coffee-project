"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
var coffees = [
    {id: 1, name: 'Tent City', roast: 'light'},
    {id: 2, name: 'Carboard House', roast: 'light'},
    {id: 3, name: 'Pigeon Drop', roast: 'light'},
    {id: 4, name: "Where's My Wife?", roast: 'medium'},
    {id: 5, name: 'Hobo Joe', roast: 'medium'},
    {id: 6, name: 'Where Am I?', roast: 'medium'},
    {id: 7, name: 'Shoeless Select', roast: 'dark'},
    {id: 8, name: 'Tent Post', roast: 'dark'},
    {id: 9, name: 'Pennyfight Premier', roast: 'dark'},
    {id: 10, name: 'Mismatch Mix', roast: 'dark'},
    {id: 11, name: 'Barrelfire Roast', roast: 'dark'},
    {id: 12, name: 'Beenie Weenie Sour', roast: 'dark'},
    {id: 13, name: "It's Getting Really Really Dark", roast: 'dark'},
    {id: 14, name: "Busker's Brew", roast: 'dark'},
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
        return (a.id - b.id);
    });
    coffees.forEach(function (coffee) {
        html += "<a class='col-6 '><h2>" + coffee.name + "</h2>" + "<p>" + coffee.roast + "</p><img ></a>";
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

// create coffeee

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
