console.log("I'm loaded");

//the form
const addItems = document.querySelector('.addItems');

//the unorder list
const itemsList = document.querySelector('.recipes');

//get local storage using key items, or an empty array if that is not available
let items = JSON.parse(localStorage.getItem('items')) || [];

let recipeID = 0;

function fetchRecipes() {

  return fetch('https://api.myjson.com/bins/gg3eh')
    .then(function(response) {
      //turn response into a JSON object
      return response.json();
    })
    .then(function(myJson) {
      //push each json object to local storage array
      for (var i = 0; i < myJson.recipes.length; i++) {
        items.push(myJson.recipes[i]);
      }

      //update localStorage
      localStorage.setItem('items', JSON.stringify(items));

      //call function to update the DOM
      getList(itemsList);
    })
    .catch(error => console.error(error));
}

//display list items in DOM
function getList(myList) {
  //set and empty string and then concatanate it with values from the array
  let output = '';
  for (var i = 0; i < items.length; i++) {
    output +=`
      <li recipeID="${items[i].recipeID}">
        <h3>${items[i].title}</h3>
        <p>${items[i].description}</p>
        <div class="star-ratings-sprite"><span style="width:${items[i].starRating*20}%" class="star-ratings-sprite-rating"></span></div>
        <button type="submit" onclick="deleteItem(this)">Delete</button>
      </li>
    `;
    //set the recipeID for future additions to be one more than the last item in the array
    recipeID = items[i].recipeID + 1;
  }
  //update the DOM
  myList.innerHTML = output;
}
//if there's nothing in local storage load the JSON first
if (items.length == 0){
  fetchRecipes();
//otherwise load just from local storage
} else {
  getList(itemsList);
}



//add new list items
function addItem(e) {
  e.preventDefault();
  //get the values from the DOM
  const title = (this.querySelector('[name=title]')).value;
  const description = (this.querySelector('[name=description]')).value;
  const starRating = (this.querySelector('[name=rating]')).value;
  //object blueprint
  const item = {
    recipeID,
    title,
    description,
    starRating,
  };
  //validate fields
  if(document.myForm.title.value === "" || document.myForm.description.value === ""){
    alert("Please fill out all fields before submitting!");
    return false;
  } else {
    //push item to local storage
    items.push(item);
    //stringify items and push it to localstorage
    localStorage.setItem('items', JSON.stringify(items));
    //call the getList function to update DOM
    getList(itemsList);
    //reset the form
    this.reset();
  }
}

//event listener for add item button
addItems.addEventListener('submit', addItem);

//delete item
function deleteItem(deleteMe) {
  //get the recipeID from the li's tag value for recipeID
  var targetID = $(deleteMe).parents("li").attr("recipeID");
  //remove parent of the button from the dom
  $(deleteMe).parents("li").remove();
  //filter out values that don't have a recipeID matching our targetID
  //and save them to a new instance of the array
  items = items.filter(item => item.recipeID != targetID);
  //update local storage
  localStorage.setItem('items', JSON.stringify(items));
}
