// Get the text element
const text = document.getElementById('text');

// Split the text into individual characters
const characters = text.innerText.split('');

// Create a span for each character and apply the animation
const modifiedText = characters
  .map(
    (char, index) =>
      `<span style="display: inline-block; animation: jump 1s infinite ${
        0.1 * index
      }s;">${char}</span>`
  )
  .join('');

// Replace the text with the modified version
text.innerHTML = modifiedText;
