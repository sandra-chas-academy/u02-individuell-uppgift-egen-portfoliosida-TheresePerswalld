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


// // ABOUT

// // Function to render work experience
// function renderWorkExperience(workExperience) {
//     const container = document.getElementById('work-experience');
  
//     workExperience.forEach(item => {
//       const div = document.createElement('div');
//       div.innerHTML = `
//         <h2>${item.title}</h2>
//         <p><strong>Location:</strong> ${item.location.address}, ${item.location.city}</p>
//         <p><strong>Type:</strong> ${item.type}</p>
//         <p><strong>Period:</strong> ${item.period.start} - ${item.period.end}</p>
//       `;
//       container.appendChild(div);
//     });
//   }
  
//   // Function to render education
//   function renderEducation(education) {
//     const container = document.getElementById('education');
  
//     education.forEach(item => {
//       const div = document.createElement('div');
//       div.innerHTML = `
//         <h2>${item.title}</h2>
//         <p><strong>Location:</strong> ${item.location.address}, ${item.location.city}</p>
//         <p><strong>Type:</strong> ${item.type}</p>
//       `;
//       container.appendChild(div);
//     });
//   }
  
// //   Call the functions to render data
//   renderWorkExperience(data.workExperience);
//   renderEducation(data.education);

//     // PROJECT

//     async function fetchGithubRepos() {
//         const username = "ditt-användarnamn"; // Sätt ditt GitHub-användarnamn här
//         const url = `https://api.github.com/users/${username}/repos`;
    
//         try {
//             const response = await fetch(url);
//             const repos = await response.json();
//             displayRepos(repos);
//         } catch (error) {
//             console.error("Kunde inte hämta repositories", error);
//         }
//     }

    
//     function displayRepos(repos) {
//         const repoContainer = document.getElementById("repo-container");
//         repos.forEach(repo => {
//             const repoElement = document.createElement("div");
//             repoElement.classList.add("project-card");
            
//             // Generera HTML för varje repository
//             repoElement.innerHTML = `
//                 <figure class="project-image" style="background-image: url(https://github.com/TheresePerswalld/Trafikljuset.git);"></figure>
//                 <section class="project-details">
//                     <h2>${Trafikljuset}</h2>
//                     <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
//                     <p><strong>Tech Stack:</strong> HTML, CSS</p>
//                     <div class="buttons">
//                         <a href="${repo.homepage || '#'}" class="button" target="_blank">Live Preview</a>
//                         <a href="${repo.html_url}" class="button" target="_blank">View Code</a>
//                     </div>
//                 </section>
//             `;
            
//             repoContainer.appendChild(repoElement);
//         });
//     }
    
//     fetchGithubRepos();
    

  
    