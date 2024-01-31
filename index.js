const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
  attachComplete();
  attachDelete();
};

const addTask = function () {
  let attività = document.querySelector("#attività");
  let inputField = document.querySelector("#addNew input");
  let addNew = `<div class="attività">
    <input type="checkbox" id="tsk"/>
    <label for="tsk">
     ${inputField.value}
    </label>

  <button class="delete">
    <i class="far fa-trash-alt"></i>
</button>
</div>`;
  attività.innerHTML += addNew;
  inputField.value = "";
};

const attachComplete = function () {
  let allTasks = document.querySelectorAll(".attività");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};

const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
