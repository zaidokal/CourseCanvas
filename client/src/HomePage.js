const NewButton = () => {
  var outlines = document.getElementById("Outlines");

  var newButton = document.createElement("button");
  newButton.innerHTML = "";
  newButton.classList.add("HomePage_NewCO__AB8Yg");
  newButton.style.margin = "10px";

  var inputField = document.createElement("input");
  inputField.value = "New Button";
  inputField.style.maxWidth = "100%";
  inputField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      newButton.innerHTML = inputField.value;
      outlines.removeChild(inputField);
    }
  });

  newButton.appendChild(inputField);
  outlines.appendChild(newButton);
};

export default NewButton;
