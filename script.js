const button = document.querySelector(".button");
const input = document.querySelector(".input");
const toDoUl = document.querySelector(".todoul");
const clearBtn = document.querySelector(".clearBtn");
//const result = document.querySelector('.result')

button.addEventListener("click", addItem);


function addItem(e) {
  e.preventDefault();
  //result.innerText = input.value;
  const newDiv = document.createElement("div");
  toDoUl.classList.add("newDiv");

  const newLi = document.createElement("li");
  toDoUl.classList.add("newLi");

  const removeBtn = document.createElement("button");
  toDoUl.classList.add("removeBtn");
  

  const doneBtn = document.createElement("button");
  toDoUl.classList.add("doneBtn");
  

  newLi.innerText = input.value;
  input.value = "";


  toDoUl.appendChild(newDiv);
  newDiv.appendChild(newLi);
  newDiv.appendChild(removeBtn);
  newDiv.appendChild(doneBtn);

  removeBtn.style.marginRight = '15px'
  removeBtn.style.marginBottom = '15px'
  doneBtn.style.marginBottom = '15px'
  removeBtn.style.marginTop = '15px'
  doneBtn.style.marginTop = '15px'
  newDiv.style.borderBottom = '2px solid black'
  doneBtn.innerHTML = `${'<i class="fas fa-check"></i>'} ${'Done'}`
  removeBtn.innerHTML = `${'<i class="fas fa-trash-alt"></i>'} ${'Remove'}`

  removeBtn.addEventListener("click", () => {
    newDiv.style.borderBottom = 'none'
    newLi.remove();
    removeBtn.remove();
    doneBtn.remove();
    
  });
  doneBtn.addEventListener("click", () => {
    newDiv.style.backgroundColor = "green";
    newLi.style.color = "white";
    
  });
  
  if ( newLi.innerText === "") {
    alert ('Write something')
    newDiv.style.borderBottom = 'none'
    newLi.remove();
    removeBtn.remove();
    doneBtn.remove();
  }
  clearBtn.addEventListener('click', () => {
    newDiv.remove()
  })
}




