// MENU

$(document).ready(function() {
    $('#nav-icon3').click(function(){
        // Växla 'open'-klass på ikonen
        $(this).toggleClass('open');

        // Växla synlighet av navigationsmenyn och mediaikoner
        $('.nav-link-container, .media-icons').toggleClass('visible');
    });
});


// ABOUT

// Ladda JSON-data
fetch('information.json')
    .then(response => response.json())
    .then(data => {
        // Visa "About Me"
        document.getElementById('about').textContent = data.about.description;

        // Visa arbetslivserfarenhet
        const workExperienceContainer = document.getElementById('workExperience');
        data.workExperience.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.innerHTML = `
                <h3>${job.title}</h3>
                <p>Plats: ${job.location.address}, ${job.location.city}</p>
                <p>Anställningstyp: ${job.employmentType}</p>
                <p>Period: ${job.dates.start} - ${job.dates.end}</p>
            `;
            workExperienceContainer.appendChild(jobDiv);
        });

        // Visa utbildning
        const educationContainer = document.getElementById('education');
        data.education.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.innerHTML = `
                <h3>${edu.program}</h3>
                <p>Plats: ${edu.location.address}, ${edu.location.city}</p>
            `;
            educationContainer.appendChild(eduDiv);
        });
    })

    // PROJECT

    async function fetchGithubRepos() {
        const username = "ditt-användarnamn"; // Sätt ditt GitHub-användarnamn här
        const url = `https://api.github.com/users/${username}/repos`;
    
        try {
            const response = await fetch(url);
            const repos = await response.json();
            displayRepos(repos);
        } catch (error) {
            console.error("Kunde inte hämta repositories", error);
        }
    }
    
    function displayRepos(repos) {
        const repoContainer = document.getElementById("repo-container");
        repos.forEach(repo => {
            const repoElement = document.createElement("div");
            repoElement.classList.add("project-card");
            
            // Generera HTML för varje repository
            repoElement.innerHTML = `
                <figure class="project-image" style="background-image: url(https://github.com/TheresePerswalld/Trafikljuset.git);"></figure>
                <section class="project-details">
                    <h2>${Trafikljuset}</h2>
                    <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
                    <p><strong>Tech Stack:</strong> HTML, CSS</p>
                    <div class="buttons">
                        <a href="${repo.homepage || '#'}" class="button" target="_blank">Live Preview</a>
                        <a href="${repo.html_url}" class="button" target="_blank">View Code</a>
                    </div>
                </section>
            `;
            
            repoContainer.appendChild(repoElement);
        });
    }
    
    fetchGithubRepos();
    

  
    