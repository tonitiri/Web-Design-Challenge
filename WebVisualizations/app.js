// from data.js
var tableData = weather;
console.log(weather);

// YOUR CODE HERE!
var table = d3.select("#weather");
var tableBody = table.select("tbody");

// var tableRows = tableBody.selectAll("tr");

// tableRows.nodes().forEach(element => {
//     console.log(element);
//     // weather.append(row)
// });

// POPULATING TABLE
function buildTable(city_data) {
    tableBody.html("")

    city_data.forEach(city => {
        var row = tableBody.append("tr");

        row.append("td").text(city.id);
        row.append("td").text(city.city);
        row.append("td").text(city.lat);
        row.append("td").text(city.lng);
        row.append("td").text(city.Cloudiness);
        row.append("td").text(city.Country);
        row.append("td").text(city.Date);
        row.append("td").text(city.Humidity);
        row.append("td").text(city.Windspeed);
        row.append("td").text(city.MaxTemp);


    })
}

// FILTERING TABLE BY CITY AND RESETTING
buildTable(weather);

var characterCityField = d3.select("#city");
var characterSearchButton = d3.select("#citysearch");
// var shapeSearchField = d3.select("#shapeSearch");
var resetButton = d3.select("#resetAllButton");

resetButton.on("click", () => {
    d3.event.preventDefault()
    tableBody.remove();
    tableBody = table.append("tbody");
    buildTable(weather);

});

characterSearchButton.on("click", () => {
    d3.event.preventDefault()
    var characterCityvalue = characterCityField.property("value");
    console.log(characterCityvalue);

    var filterData = weather.filter(city => city.city.toLowerCase().trim() == characterCityvalue.toLowerCase().trim())


    buildTable(filterData)

});

