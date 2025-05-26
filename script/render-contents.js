import { personalData } from "../data/personal-data.js";
import { aboutData } from "../data/about-data.js";
import { projectsData } from "../data/projects-data.js";
import { skillsToolsData } from "../data/skills-tools-data.js";

// background profile picture
const renderProfilePicture = () => {
  document.querySelector('.background-profile-pic').setAttribute('src', `images-and-icons/images/${personalData.profilePicture}`)
}

// header
const headerContents = () => {
  const headerHTML = `
        <div class="header__work-status">
          <div class="header__work-status-dot"></div>
          <div class="header__work-status-label">${personalData.workAvailabilityStatus}</div>
        </div>
        <a download="${personalData.resume}" href="${personalData.resume}" class="header__download-resume-btn">Download Resume</a>
  `;

  document.querySelector('header').innerHTML = headerHTML;
}

// home section
const homeSectionContents = () => {
  const homeHTML = `
       <h2 class="home-section__main-skill">${personalData.mainSkill}</h2>
        <h1 class="home-section__name">${personalData.name}</h1>
        <div class="home-section__other-details-list d-grid">
          <div class="detail-item gmail">
            <i class="ph ph-envelope detail-item__icon"></i>
            <p class="detail-item__label">${personalData.email}</p>
          </div>
          <div class="detail-item number">
            <i class="ph ph-phone detail-item__icon"></i>
            <p class="detail-item__label">${personalData.contactNumber}</p>
          </div>
          <div class="detail-item school">
            <i class="ph ph-graduation-cap detail-item__icon"></i>
            <p class="detail-item__label">${personalData.school}</p>
          </div>
          <div class="detail-item adress">
            <i class="ph ph-map-pin detail-item__icon"></i>
            <p class="detail-item__label">${personalData.address}</p>
          </div>
        </div>
    `;

  document.getElementById('home-section').innerHTML = homeHTML;
}

//about section
const aboutSectionContents = () => {
  const certificatesHTML = aboutData.certificates.map(certificate => 
    `<li class="education-and-certificates-item">
        <p class="education-and-certificates-item__label">${certificate.name}</p>
        <p class="education-and-certificates-item__date">${certificate.year}</p>
      </li>`
  ).join('');

  const aboutHTML = `
     <h1 class="about-section__heading heading">About</h1>
      <p class="about-section__paragraph">${aboutData.aboutMe}</p>
      <h3 class="about-section__education-and-certificates-heading">Education & Certificates</h3>
      <ul class="about-section__education-and-certificates-list">${certificatesHTML}</ul>
  `;

  document.getElementById('about-section').innerHTML = aboutHTML;
}

// project section
const projectSectionContents = () => {
  let projectCardHTML = '';

  projectsData.forEach(data => {
    projectCardHTML += `
        <a href="${data.link}" class="project-card">
          <img class="project-card__arrow-icon" src="images-and-icons/icons/up-right-arrow.png" loading="lazy" alt="arrow-icon">
          <img class="project-card__img" src="images-and-icons/images/${data.image}" loading="lazy" alt="project-img">
          <div class="project-card__info">
            <h4 class="project-card__info-title">${data.title}</h4>
            <p class="project-card__info-detail">${data.detail}</p>
          </div>        
        </a>
    `;
  });

  document.querySelector('.project-section__project-card-list').innerHTML = projectCardHTML
}

//skill and tools section
const skillToolsSectionContents = () => {
  const skillsHTML = skillsToolsData.skills.map(skill => `<li class="skills-list__skill">${skill.name}</li>`).join('');
  const toolsHTML = skillsToolsData.tools.map(tool => `
    <div class="tools-list__tool">
      <img class="tools-list__tool-icon" src="images-and-icons/icons/${tool.icon}" loading="lazy" alt="tools-icon">
      <p class="tools-list__tool-label">${tool.name}</p>
    </div>`
  ).join('');

  const skillToolsHTML = `
    <h1 class="skills-tools-section__heading heading">Skills & Tools</h1>
    <ul class="skills-list">${skillsHTML}</ul>
    <div class="tools-list d-grid">${toolsHTML}</div>
  `;

  document.getElementById('skills-tools-section').innerHTML = skillToolsHTML;
}

const footerContents = () => {
  const currentYear = new Date().getFullYear();

  const footerHTML = `
    <ul class="socmed-list">
      <li>
        <a href="${personalData.facebookLink}" class="socmed-list__social">
          <img  class="socmed-list__social-icon" src="images-and-icons/icons/yellow-fb-icon.png" loading="lazy" alt="facebook-icon">
        </a>
      </li>
      <li>
        <a href="${personalData.instagramLink}" class="socmed-list__social">
          <img  class="socmed-list__social-icon" src="images-and-icons/icons/yellow-ig-icon.png" loading="lazy" alt="instagram-icon">
        </a>
      </li>
      <li>
        <a href="${personalData.tiktokLink}" class="socmed-list__social">
          <img class="socmed-list__social-icon" src="images-and-icons/icons/yellow-tiktok-icon.png" loading="lazy" alt="tiktok-icon">
        </a>
      </li>
    </ul>
    <p class="footer__copy-right-txt">&copy; ${currentYear} Meowish. All rights reserved.</p>
  `;

  document.querySelector('footer').innerHTML = footerHTML;
}

// main function where can render all contents
function renderAllContents(){
  renderProfilePicture();
  headerContents();
  homeSectionContents();
  aboutSectionContents();
  projectSectionContents();
  skillToolsSectionContents();
  footerContents();
}

export default renderAllContents;