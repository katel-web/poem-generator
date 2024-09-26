function displayPoem(response) {
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "8ff30efd06o4d12f7ftb8b44c4ad300b";
  let prompt = `Generate a poem about ${userInput.value}`;
  let context =
    "Provide a four line poem in basic HTML output. Separate each line with a <br />. Do not alter the font details. Do not include a title for the poem. Sign the poem with 'SheCodes AI' at the bottom of the poem with a <strong> element. Do NOT make include any of the lines of poem in a <strong> element.Do not return quotation marks or html within the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemContainer = document.querySelector("#poem-box");
  poemContainer.classList.remove("hidden");
  poemContainer.innerHTML = `<div class="blink">⏳ Generating a poem about ${userInput.value}...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
