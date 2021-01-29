const projects = [
  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
];

//Print to Dom function

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

//Create Project Cards function

const createProjectCards = (taco) => {
  let domString = "";
  for (let i = 0; i < taco.length; i++) {
    if (taco[i].available === true) {
      domString += `<div class="card text-center" style="width: 18rem;" id= ${i}>
    <img src="${taco[i].screenshot}" class="card-img-top" alt="project screenshot">
    <div class="card-body">
      <h5 class="card-title">${taco[i].title}</h5>
      <p class="card-text"> ${taco[i].description}</p>
      <p class="card-text"> ${taco[i].technologiesUsed}</p>
      <a href="${taco[i].url}" class="btn btn-primary">Project</a>
      <a href="${taco[i].githubUrl}" class="btn btn-primary">GitHub</a>
    </div>
  </div>`;
    }
  }
  printToDom("#projectsPage", domString);
};


const init = () => {
  createProjectCards(projects);
};

init();
