// TODO: load the dataset
let attractions;

let filteredAttractions;

let topFiveAttractions;

let selectElement;

fetch("attractions.json")
  .then((response) => response.json())
  .then((data) => {
    attractions = data;
    console.log(attractions);
    filterData("all");
  });

function filterData(category) {
  //TODO: filter attractions by the selected category
  //TODO: filter top 5 attractions
  console.log(category);
  filteredAttractions = attractions;

  if (category != "all") {
    filteredAttractions = attractions.filter(
      (test) => test.Category == category
    );
    console.log(filteredAttractions);
  }

  filteredAttractions.sort(function (a, b) {
    return b.Visitors - a.Visitors;
  });
  console.log(filteredAttractions);

  topFiveAttractions = filteredAttractions.slice(0, 5);
  console.log(topFiveAttractions);
  renderBarChart(topFiveAttractions);
}

/*
  CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
  // renderBarChart(data)


 TODO: Define an event listener for the dropdown menu
 Call filterData with the selected category 
 */

selectElement = document.querySelector("#attraction-category");

selectElement.addEventListener("change", () => {
  filterData(selectElement.value);
});
