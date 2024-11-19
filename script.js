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

    const livePreviewLink = repo.homepage || `http://127.0.0.1:5501/trafikljus2.html`;
    
    // Generera HTML för repository
    repoElement.innerHTML = `
        <figure class="project-image" style="background-image: url('https://raw.githubusercontent.com/TheresePerswalld/Trafikljuset/main/path/to/images/traffic-light.png');"></figure>
        <section class="project-details">
            <h2>${repo.name}</h2>
            <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
            <p><strong>HTML,CSS</strong></p>
            <div class="buttons">
                <a href="${livePreviewLink}" class="button" target="_blank">Live Preview</a>
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

    const livePreviewLink = repo.homepage || `http://127.0.0.1:5501/trafikljus2.html`;
    
    // Generera HTML för repository
    repoElement.innerHTML = `
        <figure class="project-image" style="background-image: url('https://raw.githubusercontent.com/TheresePerswalld/Trafikljuset/main/path/to/image.jpg');"></figure>
        <section class="project-details">
            <h2>${repo.name}</h2>
            <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
            <p><strong>HTML,CSS </strong></p>
            <div class="buttons">
                <a href="${repo.homepage || '#'}" class="button" target="_blank">Live Preview</a>
                <a href="${repo.html_url}" class="button" target="_blank">View Code</a>
            </div>
        </section>
    `;
    
    repoContainer.appendChild(repoElement);
}

fetchGithubRepos();

//ABOUT 

// Fetch JSON data and generate HTML
async function fetchData() {
    try {
        const response = await fetch('information.json');  
        const data = await response.json();
        renderWorkExperience(data.workExperience);
        renderEducation(data.education);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Generate Work Experience HTML
function renderWorkExperience(workExperience) {
    const workContainer = document.getElementById('work-container');
    workExperience.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('card');
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location.address}, ${job.location.city}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Period:</strong> ${job.period.start} - ${job.period.end}</p>
        `;
        workContainer.appendChild(jobElement);
    });
}

// Generate Education HTML
function renderEducation(education) {
    const educationContainer = document.getElementById('education-container');
    education.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('card');
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Location:</strong> ${course.location.address}, ${course.location.city}</p>
            <p><strong>Type:</strong> ${course.type}</p>
        `;
        educationContainer.appendChild(courseElement);
    });
}

// Load data on page load
fetchData();



    

  
    