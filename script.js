const aboutFile = "./information.json";

// MENU
$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
        $('.nav-link-container').toggleClass('visible');
    });
});

// Frontide, picture and text
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    // navLinks[index].classList.add('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const heroFigure = document.querySelector(".hero-figure");
    const heroContent = document.querySelector(".hero-content");

    // Lägg till klassen "animate" efter en kort fördröjning
    setTimeout(() => {
        heroFigure.classList.add("animate");
        heroContent.classList.add("animate");
    }, 200); // 200 ms fördröjning
});

// PROJECT
async function fetchRepoData(url) {
    try {
        const response = await fetch(url);
        const repo = await response.json();
        renderRepo(repo);
    } catch (error) {
        console.error("Kunde inte hämta repository", error);
    }
}

function renderRepo(repo) {
    const repoContainer = document.getElementById("repo-container");
    const repoElement = document.createElement("div");
    repoElement.classList.add("project-card");

    // Dynamiska beskrivningar och teknologier
    const descriptions = {
        "Training-schedule": "Ett träningsschema som hjälper användare att hålla koll på sina träningspass och framsteg.",
        "U03-Techtitans-Quiz": "En quiz-applikation där användare kan testa sina kunskaper i olika ämnen.",
        "Trafikljuset": "En enkel applikation som simulerar trafikljus för att hjälpa användare att förstå deras funktion."
    };
    
    const technologies = {
        "Training-schedule": "HTML, CSS, JavaScript",
        "U03-Techtitans-Quiz": "HTML, CSS, JavaScript",
        "Trafikljuset": "HTML, CSS"
    };

    const images = {
        "Training-schedule": "images/Traning.png",  // Ange den faktiska sökvägen till din bild
        "U03-Techtitans-Quiz": "images/QuizMix.png",   // Ange den faktiska sökvägen till din bild
        "Trafikljuset": "images/traffic-light.png"  // Ange den faktiska sökvägen till din bild
    };

    const description = descriptions[repo.name] || "#";
    const tech = technologies[repo.name] || "Okända teknologier";
    const imageUrl = images[repo.name] || "images/default-image.png";  // Fallback om ingen bild finns
    const livePreviewLink = repo.homepage || `https://thereseperswalld.github.io/${repo.name}/`;

    repoElement.innerHTML = `
        <figure class="project-image" style="background-image: url('${imageUrl}');"></figure>
        <section class="project-details">
            <h2>${repo.name}</h2>
            <p>${description}</p>
            <p><strong>${tech}</strong></p>
            <div class="buttons">
                <a href="${livePreviewLink}" class="button" target="_blank">Live Preview</a>
                <a href="${repo.html_url}" class="button" target="_blank">View Code</a>
            </div>
        </section>
    `;
    
    repoContainer.appendChild(repoElement);
}

// Hämta och visa data för alla repos
fetchRepoData('https://api.github.com/repos/thereseperswalld/Trafikljuset');
fetchRepoData('https://api.github.com/repos/TheresePerswalld/Training-schedule');
fetchRepoData('https://api.github.com/repos/thereseperswalld/U03-Techtitans-Quiz');


// ABOUT
async function fetchData() {
    try {
        const response = await fetch(aboutFile);
        const data = await response.json();
        renderExperience(data.workExperience, 'work-container');
        renderExperience(data.education, 'education-container');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderExperience(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('card');
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Location:</strong> ${item.location.address}, ${item.location.city}</p>
            <p><strong>Type:</strong> ${item.type}</p>
            ${item.period ? `<p><strong>Period:</strong> ${item.period.start} - ${item.period.end}</p>` : ''}
        `;
        container.appendChild(itemElement);
    });
}

// Load data on page load
fetchData();


    

  
    