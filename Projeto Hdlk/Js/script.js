import Menu from './modules/menu.js';
import MenuMobile from './modules/menu-mobile.js';
import SlideNav from './modules/slide.js';

const menu = new Menu('[data-menu="list"] a');
menu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');