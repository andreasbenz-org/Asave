// Import our custom CSS
import '../scss/styles.scss'

import AsaveLogo from '../assets/imgs/app-logo.png'
import Certificate from '../assets/imgs/certificate.png'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const navbarLogoImg = document.getElementById('navbar-logo');
navbarLogoImg.src = AsaveLogo;

const footerCertImg = document.getElementById('footer-certificate');
footerCertImg.src = Certificate;

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'