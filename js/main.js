// Slideshow
$('.carousel').carousel({
  interval: 2500
})
$('.carousel').carousel('cycle')

// Link Hover Effect
var emailLink = document.getElementById('link-email');
emailLink.onmouseenter = function() { document.getElementById('link-email-img').src = 'img/link_email_hover.png'; };
emailLink.onmouseleave = function() { document.getElementById('link-email-img').src = 'img/link_email.png'; };
var linkedinLink = document.getElementById('link-linkedin');
linkedinLink.onmouseenter = function() { document.getElementById('link-linkedin-img').src = 'img/link_linkedin_hover.png'; };
linkedinLink.onmouseleave = function() { document.getElementById('link-linkedin-img').src = 'img/link_linkedin.png'; };
var resumeLink = document.getElementById('link-resume');
resumeLink.onmouseenter = function() { document.getElementById('link-resume-img').src = 'img/link_resume_hover.png'; };
resumeLink.onmouseleave = function() { document.getElementById('link-resume-img').src = 'img/link_resume.png'; };

// Scroll Effect
document.getElementById('github').onclick = function() { document.getElementById('github-container').scrollIntoView({ behavior: 'smooth' }); };
document.getElementById('about').onclick = function() { document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' }); };