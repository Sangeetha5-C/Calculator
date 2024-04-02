let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btns"));
display.innerText = "";
buttons.map((ABCD) => {
  ABCD.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      case "BS":
       display.innerText= display.innerText.slice(0, -1);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
