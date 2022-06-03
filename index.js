window.addEventListener("DOMContentLoaded", (e) => {
  var buttonAction = document.getElementById("enviarForm");

  buttonAction.addEventListener("click", (e) => {
    e.preventDefault(); //use for no reload the page
    var inputValue = document.getElementById("nombreE");
    alert(inputValue.value);

    var auxInput = parseInt(inputValue.value);
    if (!isNaN(auxInput)) {
      generateForms(inputValue.value);

      //seccion de repeticion del form
      for (let index = 0; index < inputValue.value; index++) {
        var buttonActionRepeat = document.getElementById(
          "enviarFormRepeat" + index
        );

        buttonActionRepeat.addEventListener("click", (e) => {
          e.preventDefault(); //use for no reload the page
          var inputValue = document.getElementById("nombreERepeat" + index);
          alert(inputValue.value);
        });
      }
    } else {
      var divContainer = document.getElementById("formRepeat");
      divContainer.innerHTML = "";
    }
  });
});

function generateForms(indesRepeat) {
  var divContainer = document.getElementById("formRepeat");
  divContainer.innerHTML = "";
  divContainer.innerHTML =
    divContainer.innerHTML +
    `<br><h3 style="text-align:center;">Seccion de repeticion For</h3>`;
  for (let index = 0; index < indesRepeat; index++) {
    divContainer.innerHTML =
      divContainer.innerHTML +
      `
        <div class="content-form">
            <div class="content-center">
                <input class="input" type="text" placeholder="Un campo de texto" id="nombreERepeat${index}" name="nombreERepeat">
                <button class="button" type="submit" id="enviarFormRepeat${index}">Enviar</button>
            </div>
        </div>
        `;
  }
}
