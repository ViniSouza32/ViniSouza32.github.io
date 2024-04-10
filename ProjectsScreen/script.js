/*
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 760) {
    //não é mobile
    const projectsSection = document.createElement("div");
    projectsSection.classList.add("projects_other");

    //-=-=-=-=-=-=-=-=-=-CrieFlix-=-=-=-=-=-=-=-=-=-=-=-

    const crieFlixLink = document.createElement("a");
    crieFlixLink.setAttribute("href", "https://github.com/ViniSouza32/crieFlix");
    crieFlixLink.setAttribute("target", "_blank");

    const crieFlixImage = document.createElement("img");
    crieFlixImage.classList.add("image-projects");
    crieFlixImage.setAttribute("src", "../assets/imgs/crieFlix.png");
    crieFlixImage.setAttribute("alt", "project crieFlix created in crieTI");

    crieFlixLink.appendChild(crieFlixImage);

    const crieFlixTitle = document.createElement("h3");
    crieFlixTitle.classList.add("desc-title");
    crieFlixTitle.textContent = "CrieFlix";

    const crieFlixText = document.createElement("p");
    crieFlixText.classList.add("desc-text");
    crieFlixText.innerHTML = `At CRIE_TI, I built a project mimicking Netflix using only HTML and CSS. This hands-on experience showcases my web development skills and creativity in a real-world context.`;

    projectsSection.appendChild(crieFlixLink);
    projectsSection.appendChild(crieFlixTitle);
    projectsSection.appendChild(crieFlixText);

    //-=-=-=-=-=-=-=-=-=-Memory Game-=-=-=-=-=-=-=-=-=-=-=-

    const memoryGameLink = document.createElement("a");
    memoryGameLink.setAttribute(
      "href",
      "https://github.com/ViniSouza32/jogoDaMemoria"
    );
    memoryGameLink.setAttribute("target", "_blank");

    const memoryGameImage = document.createElement("img");
    memoryGameImage.classList.add("image-projects");
    memoryGameImage.setAttribute("src", "../assets/imgs/jogoMemoria.png");
    memoryGameImage.setAttribute("alt", "memory game created in crieTI");

    memoryGameLink.appendChild(memoryGameImage);

    const memoryGameTitle = document.createElement("h3");
    memoryGameTitle.classList.add("desc-title");
    memoryGameTitle.textContent = "Memory Game";

    const memoryGameText = document.createElement("p");
    memoryGameText.classList.add("desc-text");
    memoryGameText.innerHTML = `At CRIE_TI, I created a Memory game project employing HTML, JavaScript, and CSS. This hands-on endeavor offers a glimpse into my front-end expertise, particularly with JavaScript.`;

    projectsSection.appendChild(memoryGameLink);
    projectsSection.appendChild(memoryGameTitle);
    projectsSection.appendChild(memoryGameText);

    //-=-=-=-=-=-=-=-=-=-Donation System-=-=-=-=-=-=-=-=-=-=-=-

    const donationSystemLink = document.createElement("a");
    donationSystemLink.setAttribute(
      "href",
      "https://github.com/fernandoCesarFreitas/sistemaDeDoacoes"
    );
    donationSystemLink.setAttribute("target", "_blank");

    const donationSystemImage = document.createElement("img");
    donationSystemImage.classList.add("image-projects");
    donationSystemImage.setAttribute("src", "../assets/imgs/sistemaDoacoes.png");
    donationSystemImage.setAttribute("alt", "donation system created in a group");

    donationSystemLink.appendChild(donationSystemImage);

    const donationSystemTitle = document.createElement("h3");
    donationSystemTitle.classList.add("desc-title");
    donationSystemTitle.textContent = "Donation System";

    const donationSystemText = document.createElement("p");
    donationSystemText.classList.add("desc-text");
    donationSystemText.innerHTML = `At CRIE_TI, I gained valuable experience working collaboratively in a group setting, as exemplified by a project I co-created with a friend. This particular endeavor not only demonstrates our teamwork but also showcases the full-stack capabilities mentioned earlier. Through effective collaboration, underscoring my proficiency in both front-end and back-end development.`;

    projectsSection.appendChild(donationSystemLink);
    projectsSection.appendChild(donationSystemTitle);
    projectsSection.appendChild(donationSystemText);

    //-=-=-=-=-=-=-=-=-=-Mine Sweeper-=-=-=-=-=-=-=-=-=-=-=-

    const mineSweeperLink = document.createElement("a");
    mineSweeperLink.setAttribute(
      "href",
      "https://vinisouza32.github.io/mindSweeper/index.html"
    );
    mineSweeperLink.setAttribute("target", "_blank");

    const mineSweeperImage = document.createElement("img");
    mineSweeperImage.classList.add("image-projects");
    mineSweeperImage.setAttribute("src", "../assets/imgs/mindSweeper.png");
    mineSweeperImage.setAttribute(
      "alt",
      "a game made of mineSweeper made by myself"
    );

    mineSweeperLink.appendChild(mineSweeperImage);

    const mineSweeperTitle = document.createElement("h3");
    mineSweeperTitle.classList.add("desc-title");
    mineSweeperTitle.textContent = "MineSweeper";

    const mineSweeperText = document.createElement("p");
    mineSweeperText.classList.add("desc-text");
    mineSweeperText.innerHTML = `I've taken on a project purely for the joy it brings. A project made in the languages of html css and javascipt is active in the GitHub pages, just click on the image of the game that it'll bring you right to it!`;

    projectsSection.appendChild(mineSweeperLink);
    projectsSection.appendChild(mineSweeperTitle);
    projectsSection.appendChild(mineSweeperText);

    document.querySelector(".projects_other").appendChild(projectsSection);
    document.body.appendChild(projectsSection);
  } else {
    //--------------------------------------------------------------------------------------------------

    //mobile
    document.addEventListener("DOMContentLoaded", function () {
      const projectsMobileContainer = document.createElement("div");
      projectsMobileContainer.classList.add("projects_mobile");
    
      const projects = [
        {
          title: "CrieFlix",
          imageSrc: "../assets/imgs/crieFlix.png",
          alt: "Project CrieFlix",
        },
        {
          title: "MineSweeper",
          imageSrc: "../assets/imgs/MindSweeper.png",
          alt: "A game of MineSweeper",
        },
        {
          title: "Memory Game",
          imageSrc: "../assets/imgs/jogoMemoria.png",
          alt: "A game of memory",
        },
        {
          title: "Donation System",
          imageSrc: "../assets/imgs/sistemaDoacoes.png",
          alt: "A system that helps people with donation, based on the floods in 'vale do taquari'.",
        },
      ];
    
      projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("cover", "cover--large");
    
        const projectImage = document.createElement("img");
        projectImage.classList.add("cover__image");
        projectImage.setAttribute("src", project.imageSrc);
        projectImage.setAttribute("alt", project.alt);
    
        const projectTitle = document.createElement("span");
        projectTitle.classList.add("cover__title");
        projectTitle.textContent = project.title;
    
        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);
    
        projectsMobileContainer.appendChild(projectDiv);
      });
    
      document
        .querySelector(".projects_mobile")
        .appendChild(projectsMobileContainer);
    });
    
  }
});
*/