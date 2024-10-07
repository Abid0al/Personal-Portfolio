// JavaScript code for the typing effect
const h3 = document.querySelector(".skillName");
const typingContainer = document.getElementById("typing-container");
const skills = ["Creative Developer", "Video Editor", "Digital Marketer", "Content Marketer"];

function changeNames(gotnames, delay) {
  return new Promise((resolve) => {
    let charIndex = 0;
    const intervalId = setInterval(() => {
      typingContainer.textContent += gotnames[charIndex];
      charIndex++;

      // Check if all characters have been typed
      if (charIndex === gotnames.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          resolve("changed");
        }, delay);
      }
    }, 100);
  });
}

async function getname() {
  for (let i = 0; i < skills.length; i++) {
    let getname = skills[i];
    typingContainer.textContent = ""; // Reset the typing container
    await changeNames(getname, 1000);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Pause between skills
    if (i == skills.length - 1) {
      i = 0;
    }
  }
}

// window.onload = getname;








window.addEventListener("load", getname())