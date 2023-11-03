// user enters the website and finds a list of available freelancers.

// create element h1 for FREELANCER FORUM and append into the body of the html
// create the text content for the h1
// set attributes and style for the h1
const body = document.body;
const firstTitle = document.createElement("h1");

body.appendChild(firstTitle);

firstTitle.textContent = "Freelancer Forum"
// --------------------------------------------------------------------------------------------------------------------------------------------

const secondTitle = document.createElement("h4")

body.appendChild(secondTitle);


// ---------------------------------------------------------------------------------------------------------------------------------------------
// create element h3 for AVAILABLR FREELANCERS and append into the body of the html
// create the text content for the h3
// set attributes and style for the h3

const smallerTitle = document.createElement("h3");

body.appendChild(smallerTitle);

smallerTitle.textContent = "Available Freelancers";

body.setAttribute("style", "border: 1px solid black; width: 500px; text-align: center; ")

// ---------------------------------------------------------------------------------------------------------------------------------------------

const title = document.createElement("h4");

body.appendChild(title);

title.textContent = "Name, Occupation, Starting Price";

// given an array, need to put that as a list on the html document.

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 40, occupation: "teacher" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];
const orderedList = document.createElement("ul");

body.appendChild(orderedList);

freelancers.forEach((currentFreelancer) => {
    const freelancerName = currentFreelancer.name;
    const freelancerOccupation = currentFreelancer.occupation;
    const freelancerPrice = currentFreelancer.price;
    
    console.log(freelancerName, freelancerOccupation, freelancerPrice);
    
    const listItem = document.createElement("li");
    
    orderedList.appendChild(listItem);
    
    listItem.textContent = `${freelancerName}, ${freelancerOccupation} , $${freelancerPrice}`;
    listItem.setAttribute("style", "list-style-type: none;")
});


// -----------------------------------------------------------------------------------------------------------------------------------------
// create a function that calculates the average starting price of the freelancers array and have it displayed in the html.
const averageStartingPriceOfFreelancers = () => {
    const accumlatedPriceValue = freelancers.reduce((accumulator,singleFreeLancer) => {
        
        // console.log(accumulator);
        // console.log(singleFreeLancer.price);
        
        return accumulator + singleFreeLancer.price
    },0)
    return accumlatedPriceValue/freelancers.length
}
console.log(averageStartingPriceOfFreelancers());

secondTitle.textContent = `The average starting price is $${averageStartingPriceOfFreelancers()}` ;