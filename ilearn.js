// set the wallpaper's URL
const wallpaperUrl = 'https://images.pexels.com/photos/2815799/pexels-photo-2815799.jpeg';
const welcomeGradientA = '#ec4899';
const welcomeGradientB = '#ffbf00';
const textColorPrimary = '#aee2ff';
const textColorSecondary = '#8cc0eb';


// extract username and set for welcome
document.addEventListener('DOMContentLoaded', () => {
    let loginFooter = Array.from(document.querySelectorAll('div.footer-section'))
        .find(el => el.querySelector('div')?.classList.contains('logininfo') ?? false);

    let loginInfo = loginFooter.firstElementChild.firstElementChild;
    let name = loginInfo.querySelector('a').textContent.trim().split(' ').at(-1);

    let welcome = document.getElementById('custom-welcome');
    welcome.textContent = getGreeting(name);
});

function getGreeting(username) {
  const hour = new Date().getHours();

  let timeGreeting;

  if (hour <= 2) timeGreeting = "Good evening";
  else if (hour <= 5) timeGreeting = "Go to bed";
  else if (hour <= 11) timeGreeting = "Good morning";
  else if (hour <= 16) timeGreeting = "Good afternoon";
  else if (hour <= 20) timeGreeting = "Good evening";
  else timeGreeting = "Welcome back";

  const rareMessage = `beep boop bap bap?`;
  const normalMessage = `${timeGreeting}, ${username}!`;

  return Math.random() < 0.05 ? rareMessage : normalMessage;
}

console.log(getGreeting("Alex"));


// set styles
const style = document.createElement('style');
style.textContent = `
  .card-body h3 {
    color:                      ${textColorPrimary} !important;
  }
  .card-body span:not(.course-card *) {
    color:                      ${textColorSecondary} !important;
  }
  .card-body li.page-item a {
    color:                      #eeeeee !important;
    background-color:           color-mix(in srgb, ${textColorSecondary} 90%, white) !important;
    border:                     none !important;  
  }
  .card-body li.page-item i {
    color:                      #eeeeee !important;
  }
  .drawer-right .card,
  .course-card {
    background:                 rgba(255,255,255,0.2) !important;
    border:                     none !important;
    box-shadow:                 none !important;
    -webkit-box-shadow:         none !important;
    backdrop-filter:            blur(24px) !important;
    -webkit-backdrop-filter:    blur(24px) !important;
  }
  .course-card span:not(a span) {
    color:                      ${textColorSecondary} !important;
  }
  .course-card div:not(span) {
    color:                      ${textColorSecondary} !important;
  }
  .course-card a {
    color:                      ${textColorPrimary} !important;
    font-weight:                700 !important;
  }
  .course-card:hover div.card-img-top {
    filter:                     brightness(1);
  }
  .coursename i {
    color:                      ${textColorPrimary} !important;
  }
  .card-footer {
     background:                transparent !important
  }  
  .custom-welcome-text {
    font-family:                'Trebuchet MS', serif;
    font-size:                  4rem;
    font-weight:                bold;
    background:                 linear-gradient(75deg, ${welcomeGradientA}, ${welcomeGradientB});
    background-clip:            text;
    -webkit-background-clip:    text;
    -webkit-text-fill-color:    transparent;
    -webkit-text-stroke:        2px transparent;

    position:                   absolute;
    top:                        15vh;
    left:                       50%;
    transform:                  translateX(-50%);
    text-align:                 center;
  }
  .card-img-top {
    filter:                     brightness(0.8);
    transition:                 filter 0.2s ease;
  }
`;
document.head.appendChild(style);


// add welcome text div
const section = document.getElementById('block-region-content');
const newDiv = document.createElement('div');

newDiv.className = 'custom-welcome-text';
newDiv.id = 'custom-welcome';
newDiv.textContent = '...';

section.insertBefore(newDiv, section.children[2]);


// set background
const el = document.body; // or any element

el.style.backgroundImage = `url("${wallpaperUrl}")`;
el.style.backgroundSize = 'cover';
el.style.backgroundPosition = 'center';
el.style.backgroundRepeat = 'no-repeat';


// style widgets
const body_div = document.getElementById('topofscroll');
body_div.style.backgroundColor = 'transparent';


// remove top info
document.getElementById('themeboostunioninfobanner1').remove();
const title_div = Array.from(document.querySelectorAll('h1'))
    .find(el => el.textContent.trim() === 'Dashboard');

if (title_div) {
    title_div.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}


// modify card style
document.querySelectorAll('section.block').forEach(el => {
    Object.assign(el.style, {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        webkitBackdropFilter: 'blur(10px)',
    });
    el.style.setProperty('border', 'none', 'important');
    el.style.setProperty('border-radius', '12px', 'important');
    el.style.setProperty('box-shadow', '0 8px 32px rgba(0, 0, 0, 0.3)', 'important');
});


// add space to top
const fav_course = Array.from(document.querySelectorAll('h3'))
    .find(el => el.textContent.trim() === 'Favorisierte Kurse');

if (fav_course) {
    let wrap = fav_course.parentElement.parentElement;
    wrap.style.setProperty('margin-top', 'calc(100vh - 28em)', 'important');
    wrap.style.setProperty('margin-bottom', '5em', 'important');
}


// modify navbar style
const navbar = document.querySelector("nav");
Object.assign(navbar.style, {
    backdropFilter: 'blur(10px)',
    webkitBackdropFilter: 'blur(10px)',
});
navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.1)', 'important');
navbar.style.setProperty('border', 'none', 'important');
navbar.style.setProperty('border-radius', '12px', 'important');
navbar.style.setProperty('margin', '12px', 'important');

// navbar layout
const container = document.getElementById('usernavigation');
if (container.lastElementChild) {
    container.insertBefore(container.lastElementChild, container.firstElementChild);
}
container.querySelectorAll('.divider').forEach(el => el.remove());

const editWidget = container.querySelector('.editmode-switch-form');
editWidget.querySelector('label')?.remove();

// style shelf
const drawerButton = document.querySelector('.drawer-toggler');
drawerButton.style.setProperty('top', 'calc(96px + 0.7rem)', 'important');

const drawer = document.getElementById('theme_boost-drawers-blocks');
drawer.style.setProperty('top', '96px', 'important');
drawer.style.setProperty('height', 'calc(100vh - 112px)', 'important');
drawer.style.setProperty('border-radius', '12px 0 0 12px', 'important');
Object.assign(drawer.style, {
    backdropFilter: 'blur(10px)',
    webkitBackdropFilter: 'blur(10px)',
});
drawer.style.setProperty('background', 'rgba(255, 255, 255, 0.1)', 'important');

const drawerContent = drawer.querySelector('.drawercontent');
drawerContent.style.setProperty('padding-left', '12px', 'important');
