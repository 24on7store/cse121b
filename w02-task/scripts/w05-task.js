/* W05: Programming Tasks */

/* Declare and initialize global variables */


/* async displayTemples Function */




/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



// getTemples();

/* Event Listener */




/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');
    
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    article.appendChild(h3);
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(img);
    
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    templeList.push(...data); 
    displayTemples(templeList);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};
/* sortBy Function */
const sortBy = (temples) => {
  reset();
  const filter = document.getElementById('sortBy').value;
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    case 'all':
    default:
      displayTemples(temples);
  }
};
/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });


getTemples();
