const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navMenuItems = document.querySelectorAll('nav a');
// navMenuItems.style.color = 'green';


const navMenuItem0 = navMenuItems[0].textContent = siteContent['nav']['nav-item-1'];
const navMenuItem1 = navMenuItems[1].textContent = siteContent['nav']['nav-item-2'];
const navMenuItem2 = navMenuItems[2].textContent = siteContent['nav']['nav-item-3'];
const navMenuItem3 = navMenuItems[3].textContent = siteContent['nav']['nav-item-4'];
const navMenuItem4 = navMenuItems[4].textContent = siteContent['nav']['nav-item-5'];
const navMenuItem5 = navMenuItems[5].textContent = siteContent['nav']['nav-item-6'];

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => link.style.color = 'green');


const ctaH1Text = document.querySelector('.cta-text h1');
ctaH1Text.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const mainH4Content = document.querySelectorAll('.text-content h4');
const mainH4Content0 = mainH4Content[0].textContent = siteContent['main-content']['features-h4'];
const mainH4Content1 = mainH4Content[1].textContent = siteContent['main-content']['about-h4'];
const mainH4Content2 = mainH4Content[2].textContent = siteContent['main-content']['services-h4'];
const mainH4Content3 = mainH4Content[3].textContent = siteContent['main-content']['product-h4'];
const mainH4Content4 = mainH4Content[4].textContent = siteContent['main-content']['vision-h4'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const mainPContent = document.querySelectorAll('.text-content p');
const mainPContent0 = mainPContent[0].textContent = siteContent['main-content']['features-content'];
const mainPContent1 = mainPContent[1].textContent = siteContent['main-content']['about-content'];
const mainPContent2 = mainPContent[2].textContent = siteContent['main-content']['services-content'];
const mainPContent3 = mainPContent[3].textContent = siteContent['main-content']['product-content'];
const mainPContent4 = mainPContent[4].textContent = siteContent['main-content']['vision-content'];

const contactH4Text = document.querySelector('.contact h4');
contactH4Text.textContent = siteContent['contact']['contact-h4'];

const contactPText = document.querySelectorAll('.contact p');
const contactPText0 = contactPText[0].textContent = siteContent['contact']['address'];
const contactPText1 = contactPText[1].textContent = siteContent['contact']['phone'];
const contactPText2 = contactPText[2].textContent = siteContent['contact']['email'];

const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];