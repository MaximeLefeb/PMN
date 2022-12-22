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

.navbar-items > a{
  text-decoration: none;
  font-size: 1.5rem;
  color: rgb(0, 102, 133);
}
.navbar-items:hover > a {
  transition: color 100ms;
  color: rgb(255, 55, 0);
}

div#find-your-holiday {
  background-color: rgb(0, 102, 133);
  color: white;
}

@media only screen and (max-width : 991.5px) {
  #navbar {
    justify-content: center;
  }
}
</style>
