const todoList = [
  { name: "tarak", dateDue: "21-07-2024" },
  { name: "amar", dateDue: "21-07-2024" }];

displayTodo();

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  /*Here, the value property represents the inner text of input element.*/
  const name = inputElement.value;
  const dateDueElement = document.querySelector(".js-dateDue-input")
  const dateDue = dateDueElement.value;
  todoList.push({ name: name, dateDue: dateDue }/*{name, dateDueInput  --->If both the propertyname & value are same.}*/);

  /*This will reset the text box after clicking on the add button.*/
  inputElement.value = '';

  /*The below line works as when we add a new todo to the array and it will directly display it on the webpage.*/
  displayTodo();
}

/*The below function is created to update the HTML everytime a new todo is added. */
function displayTodo() {
  let todolistHtml = '';

  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    /*This technique is called GENERATING the HTML.Insatead of writing html code, we ran it inside the loop with JS.*/
    const { name, dateDue } = todoObject;
    /*In the below part we created div element for each of the input as div element doesn't have any default styling, so it will style acc. to our requirements or follow grid proprerly.*/
    const html = `
    <div>${name}</div>
    <div>${dateDue}</div>
    <button 
        onclick="todoList.splice(${i},1);
        displayTodo();
      " class="delete-css">DELETE
    </button>
    `;
    todolistHtml += html;
  }

  document.querySelector('.js-todoRecords').innerHTML = todolistHtml;
}
