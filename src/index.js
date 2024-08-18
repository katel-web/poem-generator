function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-box", {
    strings: "Poem here la la la la",
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
