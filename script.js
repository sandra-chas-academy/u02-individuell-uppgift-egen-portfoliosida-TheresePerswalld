const aboutFile = "./information.json";

// MENU

$(document).ready(function() {
    $('#nav-icon3').click(function(){
        // Växla 'open'-klass på ikonen
        $(this).toggleClass('open');

        // Växla synlighet av navigationsmenyn och mediaikoner
        $('.nav-link-container, .media-icons').toggleClass('visible');
    });
});

// Markera aktiv länk i navigationsmenyn baserat på scrollposition
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let index = sections.length;
  
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  });

//     // PROJECT

async function fetchGithubRepos() {
    const url = `https://api.github.com/repos/thereseperswalld/Trafikljuset`;

    try {
        const response = await fetch(url);
        const repo = await response.json();
        displayRepos(repo);
    } catch (error) {
        console.error("Kunde inte hämta repositories", error);
    }
}

function displayRepos(repo) {
    const repoContainer = document.getElementById("repo-container");
    const repoElement = document.createElement("div");
    repoElement.classList.add("project-card");
    
    // Generera HTML för repository
    repoElement.innerHTML = `
        <figure class="project-image" style="background-image: url('https://raw.githubusercontent.com/TheresePerswalld/Trafikljuset/main/path/to/image.jpg');"></figure>
        <section class="project-details">
            <h2>${repo.name}</h2>
            <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
            <p><strong>HTML,CSS</strong></p>
            <div class="buttons">
                <a href="${repo.homepage || '#'}" class="button" target="_blank">Live Preview</a>
                <a href="${repo.html_url}" class="button" target="_blank">View Code</a>
            </div>
        </section>
    `;
    
    repoContainer.appendChild(repoElement);
}

fetchGithubRepos();

async function fetchGithubRepos() {
    const url = `https://api.github.com/repos/thereseperswalld/Trafikljuset`;

    try {
        const response = await fetch(url);
        const repo = await response.json();
        displayRepos(repo);
    } catch (error) {
        console.error("Kunde inte hämta repositories", error);
    }
}

function displayRepos(repo) {
    const repoContainer = document.getElementById("repo-container");
    const repoElement = document.createElement("div");
    repoElement.classList.add("project-card");
    
    // Generera HTML för repository
    repoElement.innerHTML = `
        <figure class="project-image" style="background-image: url('https://raw.githubusercontent.com/TheresePerswalld/Trafikljuset/main/path/to/image.jpg');"></figure>
        <section class="project-details">
            <h2>${repo.name}</h2>
            <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
            <p><strong>HTML,CSS</strong></p>
            <div class="buttons">
                <a href="${repo.homepage || '#'}" class="button" target="_blank">Live Preview</a>
                <a href="${repo.html_url}" class="button" target="_blank">View Code</a>
            </div>
        </section>
    `;
    
    repoContainer.appendChild(repoElement);
}

fetchGithubRepos();


    

  
    