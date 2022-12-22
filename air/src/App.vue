<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

/* Destination Components*/
.destination:hover {
  cursor            : pointer;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow   : 0px 0px 20px 0px rgba(168, 168, 168, 1);
  box-shadow        : 0px 0px 20px 0px rgba(168, 168, 168, 1);
}
.destination:hover div.row div.col-6:first-child small {
  font-weight: bolder;
  color      : orangered;
}
.destination {
  height            : 300px;
  background-repeat : round;
  -webkit-box-shadow: inset 0px 0px 169px 19px rgba(207, 207, 207, 1);
  -moz-box-shadow   : inset 0px 0px 169px 19px rgba(207, 207, 207, 1);
  box-shadow        : inset 0px 0px 169px 19px rgba(207, 207, 207, 1);
}
.destination > h3 {
  font-size: 2em;
  color    : orangered;
}
.destination > * {
  font-family: roboto;
  color      : rgb(50, 50, 50);
}
.destination > div.row > div.col-6:first-child > small {
  font-weight: 600;
  font-size  : 1em;
}

/* Navbar */
#navbar {
  box-shadow        : 0px 4px 12px -3px rgba(171, 171, 171, 1);
  -moz-box-shadow   : 0px 4px 12px -3px rgba(171, 171, 171, 1);
  -webkit-box-shadow: 0px 4px 12px -3px rgba(171, 171, 171, 1);
}
#navbar-header {
  font-weight: 600;
  font-size  : 2rem;
  color      : rgb(0, 102, 133);
}
#nav-collapse {
  justify-content: right;
}
.navbar-items > a {
  text-decoration: none;
  font-size      : 1.5rem;
  color          : rgb(0, 102, 133);
}
.navbar-items:hover > a {
  transition: color 100ms;
  color     : rgb(255, 55, 0);
}

/* Shared class */
.orange-border {
  border: 2px solid orangered;
}
.no-rounded {
  border-radius: 0 !important;
}
.btn-search {
  border          : none;
  background-color: orangered;
}
.btn-search:hover {
  background-color: rgb(201, 57, 4);
}
.text-right {
  text-align: right;
}
span.price {
  font-weight     : 600;
  padding         : 10px;
  right           : -17px;
  font-size       : 1.1rem;
  position        : relative;
  font-family     : 'roboto';
  background-color: rgb(255, 204, 0);
}
.card-bottom {
  bottom  : -150px;
  position: relative;
}

/* Deal of the day */
#amsterdam {
  height: 322px;
}
#amsterdam > div {
  bottom  : -115px;
  position: relative;
  color   : rgb(50, 50, 50);
}
#amsterdam > h3 {
  color: rgb(50, 50, 50);
}
#amsterdam {
  background-repeat : round;
  background-clip   : content-box;
  background-image  : url('./assets/amsterdam.jpg');
  -webkit-box-shadow: inset 0px 0px 300px 5px rgba(250, 250, 250, 1);
  -moz-box-shadow   : inset 0px 0px 300px 5px rgba(250, 250, 250, 1);
  box-shadow        : inset 0px 0px 300px 5px rgba(250, 250, 250, 1);
}
#amsterdam > h3 {
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}
h1#top {
  color: rgb(73, 73, 73);
}

/* Find you holiday bloc */
div#find-your-holiday {
  color           : white;
  background-color: rgb(0, 102, 133);
}
.bloc {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
button#find {
  font-weight: 600;
}

/* Other */
button#more {
  width: 33%;
}

/* Responsive */
@media only screen and (max-width : 991.5px) {
  #navbar {
    justify-content: space-between;
  }

  button#find, button#more {
    width: 100%;
  }
}

/* Footer */
.footer {
  background-color  : #b3c6c6;
  -webkit-box-shadow: 0px -7px 19px 0px rgba(189, 189, 189, 1);
  -moz-box-shadow   : 0px -7px 19px 0px rgba(189, 189, 189, 1);
  box-shadow        : 0px -7px 19px 0px rgba(189, 189, 189, 1);
}
.footer-header {
  font-weight: bolder;
  color      : rgb(50, 50, 50);
}

/* Contact */
div#support_banner {
  z-index              : 0;
  height               : 300px;
  background-size      : cover;
  background-position-y: bottom;
  background-image     : url(/static/img/support_banner.f8167f5.jpg);
}
div#support_banner > h1 {
  margin-top : 9vh;
  font-weight: 100;
  font-size  : 5rem;
  text-align : center;
  font-family: roboto;
  color      : white;
}
#contact-info > h2 {
  margin-bottom: 5px;
  padding      : 10px;
  border-left  : 5px solid orangered;
}
#contact-info > * {
  color: rgb(50, 50, 50);
}
#contact-info > a {
  text-decoration: none;
  color          : rgb(0, 102, 133);
}

/* Images */
#sydney {
  background-image: url('./assets/sydney.jpg');
}
#rio {
  background-image: url('./assets/rio.jpeg');
}
#cusco {
  background-image: url('./assets/cusco.jpeg');
}
#newdehli {
  background-image: url('./assets/newdehli.jpg');
}
#hongkong {
  background-image: url('./assets/hongkong.jpg');
}
#katmandou {
  background-image: url('./assets/katmandou.jpg');
}
#tokyo {
  background-image: url('./assets/tokyo.jpg');
}
#lisbonne {
  background-image: url('./assets/lisbonne.jpg');
}
</style>
