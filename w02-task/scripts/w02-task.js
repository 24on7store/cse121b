/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Mackison Jean Pierre";

const currentYear = new Date().getFullYear();

const profilePicture = "images/mike2.jpg"



/* Step 3 - Element Variables */
const nameElement = document.getElementById("Mackison Jean Pierre")

const foodElement = document.getElementById("food")

const yearElement = document.querySelector("#year");

const imageElement = document.getElementById("profile-image");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullName}</strong>";

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", "Profile image of ${fullName}");


/* Step 5 - Array */
// Declare an array variable to hold your favorite foods
const favoriteFoods = ['Pizza', 'Ice Cream', 'Burger'];

// Modify the HTML element with the id of food to display your favorite foods array
foodElement.innerHTML = favoriteFoods.join('<br>');

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Sushi';

// Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Check Your Understanding
// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the array output showing the modified array
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;












