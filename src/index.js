const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//console.log('project wired!')


const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

const codeImg = document.querySelector('#cta-img');
codeImg.src = siteContent.images['cta-img'];

const acctImg = document.querySelector('#middle-img');
acctImg.src = siteContent.images['accent-img'];

const navLinks = document.querySelectorAll('nav a');
const navLinkText = Object.values(siteContent.nav);
navLinks.forEach((link, idx) => {
  link.textContent = navLinkText[idx]
  link.classList.add('italic')
})

const bodyText = document.querySelector('.top-content');
bodyText.children[0].children[0].textContent = siteContent["main-content"]['features-h4'];
bodyText.children[0].children[1].textContent = siteContent["main-content"]['features-content'];
bodyText.children[1].children[0].textContent = siteContent["main-content"]['about-h4'];
bodyText.children[1].children[1].textContent = siteContent["main-content"]['about-content'];

const lowText = document.querySelector('.bottom-content');
lowText.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
lowText.children[0].children[1].textContent = siteContent['main-content']['services-content'];
lowText.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
lowText.children[1].children[1].textContent = siteContent['main-content']['product-content'];
lowText.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
lowText.children[2].children[1].textContent = siteContent['main-content']['vision-content'];

document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;

const contactLinks = document.querySelector('section.contact');
contactLinks.children[0].textContent = siteContent.contact['contact-h4'];
contactLinks.children[1].textContent = siteContent.contact['address'];
contactLinks.children[2].textContent = siteContent.contact['phone'];
contactLinks.children[3].textContent = siteContent.contact['email'];

const footText = document.querySelector('footer a');
footText.textContent = siteContent.footer.copyright;
footText.classList.add('bold');

