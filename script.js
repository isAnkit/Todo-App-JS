const text = document.createElement("pretext");
text.innerHTML = "Nothing In The Task List";
document.body.appendChild(text);

function createPopup() {
  var popup = document.createElement("div");
  popup.classList.add("page-addtask");

  popup.innerHTML =
    '<div class="taskbox1"> \
                      <p class="taskp"> \
                        Add New Task \
                        <a class="fa-solid fa-xmark" id="closei" onclick="closePopup()"></a> \
                      </p> \
                      <hr /> \
                      <form id="form-sub"> \
                        <input type="text" id="input-sub" /> \
                        <button type="submit">Add Task</button> \
                      </form> \
                    </div>';

  document.body.appendChild(popup);

  var form = document.querySelector("#form-sub");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputValue = document.querySelector("#input-sub").value;

    var childContainer = document.createElement("div");
    childContainer.classList.add("childcontainer");

    childContainer.innerHTML =
      '<br /> \
                                <a class="boxtextmain" href="./index3.html">' +
      inputValue +
      '</a> \
                                <hr class="boxhr" /> \
                                <form> \
                                  <input type="checkbox" name="lb" id="lb" value="lb" checked /> \
                                  <label for="lb" class="labelfirst"></label> \
                                  <br /><br /> \
                                </form> \
                                <i class="fa-solid fa-plus" id="fa2" onclick="createPopupSec()"></i> \
                                <i class="fa-solid fa-trash-can" id="fa1"></i>';

    var mainContainer = document.querySelector(".containermain");
    mainContainer.appendChild(childContainer);

    closePopup();

    const pretext = document.querySelector("pretext");
    if (childContainer) {
      pretext.style.display = "none";
    }
  });
}

function closePopup() {
  var popup = document.querySelector(".page-addtask");
  document.body.removeChild(popup);
}

function createPopup() {
  var popup = document.createElement("div");
  popup.classList.add("page-addtask");

  popup.innerHTML =
    '<div class="taskbox1"> \
                      <p class="taskp"> \
                        Add New Task \
                        <a class="fa-solid fa-xmark" id="closei" onclick="closePopup()"></a> \
                      </p> \
                      <hr /> \
                      <form id="form-sub"> \
                        <input type="text" id="input-sub" placeholder="Add Your Task Here..." class="learn" /> \
                       </br> </br><button type="submit" id="btnsub">Add Task</button> \
                      </form> \
                    </div>';

  document.body.appendChild(popup);

  var form = document.querySelector("#form-sub");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var inputValue = document.querySelector("#input-sub").value;

    var childContainer = document.createElement("div");
    childContainer.classList.add("childcontainer");

    childContainer.innerHTML =
      '<br /> \
                                <a class="boxtextmain" href="./index3.html">' +
      inputValue +
      '</a> \
                                <hr class="boxhr" /> \
                                <i class="fa-solid fa-plus" id="fa2" onclick="createPopupSec()"></i> \
                                <i class="fa-solid fa-trash-can" id="fa1" onclick="removeChildContainer(event)"></i>';

    var mainContainer = document.querySelector(".containermain");
    mainContainer.appendChild(childContainer);

    closePopup();

    const pretext = document.querySelector("pretext");
    if (childContainer) {
      pretext.style.display = "none";
    }
  });
}

// PlusTask

const createPopupSec = () => {
  const parentElement = event.target.parentElement;

  const popup = document.createElement("div");
  popup.classList.add("taskbox1");

  popup.innerHTML = `<p class="taskp">
                      Add New Item
                      <a class="fa-solid fa-xmark" id="closei" onclick="closePopupSec()"></a>
                    </p>
                    <hr />
                    <form id="form-list">
                      <input type="text" id="input-list" placeholder="Add Task Details..." class="learn" />
                      <button type="submit" id="submit-in">Add Task</button>
                    </form>`;

  document.body.appendChild(popup);

  const form = document.querySelector("#form-list");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = document.querySelector("#input-list").value;

    const label = document.createElement("label");
    label.classList.add("labelfirst");
    label.innerHTML = `<input type="checkbox" name="lb" id="lb" value="lb" checked /> ${inputValue} </br>`;

    parentElement.appendChild(label);

    closePopup();
  });
};

const closePopupSec = () => {
  document.body.removeChild(document.querySelector(".taskbox1"));
};

function removeChildContainer(event) {
  var parentNode = event.target.parentNode;
  parentNode.remove();
}
