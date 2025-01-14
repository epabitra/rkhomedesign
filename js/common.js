const mobileNo = "+91 7328088547";
const emailAddress = "rk3dhome@gmail.com";
const address = "Main road, Digapahandi";
const fullAddress = `Rk Home Design, <br>Main road ,Digapahandi<br> Beside the Lic office<br> Ganjam, Odisha<br> Pin-761012`;
const nameLogo = "RK Design";
const brandName = "RK Design";

var entities = document.querySelectorAll(".nameLogo");
entities.forEach((div) => {
  div.innerHTML = nameLogo;
});

var entities = document.querySelectorAll(".full-address");
entities.forEach((div) => {
  div.innerHTML = fullAddress;
});

var entities = document.querySelectorAll(".email-address");
entities.forEach((div) => {
  div.innerHTML = emailAddress;
});

var entities = document.querySelectorAll(".mobile-no");
entities.forEach((div) => {
  div.innerHTML = mobileNo;
});

const picTitle = "Featured Image";
var entities = document.querySelectorAll(".picTitle");
entities.forEach((div) => {
  div.innerHTML = picTitle;
});

const titleTitle = "";
var entities = document.querySelectorAll(".titleTitle");
entities.forEach((div) => {
  div.innerHTML = titleTitle;
});

const titleBanner =
  "<h1 class='text-white'>Expert 3D Home Design Services in Digapahandi</h1>";
var entities = document.querySelectorAll(".title-banner");
entities.forEach((div) => {
  div.innerHTML = titleBanner;
});
