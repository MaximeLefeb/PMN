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

.destination {
  height: 300px;
  border: 1px solid red;
}

#navbar {
  -webkit-box-shadow: 0px 4px 12px -3px rgba(171, 171, 171, 1);
  -moz-box-shadow: 0px 4px 12px -3px rgba(171, 171, 171, 1);
  box-shadow: 0px 4px 12px -3px rgba(171, 171, 171, 1);
}
#navbar-header {
  color: rgb(0, 102, 133);
  font-size: 2rem;
  font-weight: 600;
}
#nav-collapse {
  justify-content: right;
}

.no-rounded {
  border-radius: 0 !important;
}

.navbar-items > a{
  text-decoration: none;
  font-size: 1.5rem;
  color: rgb(0, 102, 133);
}
.navbar-items:hover > a {
  transition: color 100ms;
  color: rgb(255, 55, 0);
}

.btn-search {
  background-color: orangered;
  border: none;
}

.text-right {
  text-align: right;
}

#amsterdam {
  height: 322px;
}
#amsterdam > div {
  color: rgb(50, 50, 50);
  position: relative;
  bottom: -115px;
}
#amsterdam > h3 {
  color: rgb(50, 50, 50);
}

h1#top {
  color: rgb(73, 73, 73);
}

span.price {
  background-color: rgb(255, 221, 0);
  padding: 10px;
  border-radius: 10px 0 0 10px;
  position: relative;
  right: -17px;
}

div#find-your-holiday {
  background-color: rgb(0, 102, 133);
  color: white;
}

.bloc {
  border: 1px solid rgba(0, 0, 0, 0.3);
}

button#find {
  font-weight: 600;
}

#amsterdam {
  background-image: url('./assets/amsterdam.jpg');
  background-clip: content-box;
  background-repeat: round;
  -webkit-box-shadow: inset 0px 0px 300px 5px rgba(250, 250, 250, 1);
  -moz-box-shadow: inset 0px 0px 300px 5px rgba(250, 250, 250, 1);
  box-shadow: inset 0px 0px 300px 5px rgba(250, 250, 250, 1)
}
#amsterdam > h3 {
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width : 991.5px) {
  #navbar {
    justify-content: center;
  }

  button#find {
    width: 100%;
  }
}
</style>
