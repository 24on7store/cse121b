/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


// Define myProfile object
let myProfile = {
    name: "Mackison Jean Pierre",
    photo: "images/mike2.jpg", // Replace with your actual image path
    favoriteFoods: [
      'Rice',
      'Sweet potatoes',
      'Fried potatoes',
      'Lobster',
      'Banana and Fish'
    ],
    hobbies: ['Playing the guitar', 'Writing poems', 'Listening to music'], // Replace with your hobbies
    placesLived: []
  };
  
  // Adding items to placesLived array
  myProfile.placesLived.push(
    {
      place: 'Istanbul, TR',
      length: '4 years'
    },
    // Add more places in the same format
    {
      place: 'Port-au-Prince, HT',
      length: '22 years'
    }
    // Add more places if needed
  );
  
  // Manipulating the DOM
  document.querySelector('#name').textContent = myProfile.name;
  
  // Photo attribute assignment
  let photoElement = document.querySelector('#photo');
  photoElement.setAttribute('src', myProfile.photo);
  photoElement.setAttribute('alt', myProfile.name);
  
  // Adding favorite foods to list
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Adding hobbies to list
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Adding places lived to definition list
  let dl = document.querySelector('#places-lived');
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  