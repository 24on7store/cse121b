/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Mackison Jean Pierre";
const currentYear = new Date().getFullYear();
const profilePicture = "images/mike2.jpg"



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name")
const yearElement = document.querySelector("#year");
const foodElement = document.getElementById("food")
// const imageElement = document.getElementById("profile-image");
const imageElement = document.querySelector('img')



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

// imageElement.setAttribute("src", profilePicture);
if (imageElement) {
    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute("alt", `Profile image of ${fullName}`);
}



/* Step 5 - Array */
// 1- Declare an array variable to hold your favorite foods
const favoriteFoods = ['Pizza', 'Rice', 'Chicken sauce', 'Beans', 'Salad'];

// 2- Modify the HTML element with the id of food to display your favorite foods array
// foodElement.innerHTML = favoriteFoods.join('<br>');
foodElement.innerHTML = favoriteFoods.join();

//3- Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Plantain and Fish';

// 4- Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFavoriteFood);

// 5- Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += `<br>${favoriteFoods}`;

// 6- Remove the first element using the shift() method
favoriteFoods.shift();

// 7- Again, Append the array output showing the modified array
// foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
foodElement.innerHTML += `<br>${favoriteFoods}`;

// 8- Remove the last element in the favorite food array
favoriteFoods.pop();

// 9- Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods}`;


