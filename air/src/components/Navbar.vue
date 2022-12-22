<template>
  <b-row>
    <b-col cols="12" class="p-0">
      <b-navbar toggleable="lg" type="dark" id="navbar" class="px-3">
        <b-navbar-toggle target="nav-collapse" right class="mx-2">
          <img src="../assets/menu.png" width="24">
        </b-navbar-toggle>

        <b-navbar-brand href="#" id="navbar-header" class="text-sm-center mx-2">
          <img src="../assets/plane.png" alt="Plane">
          Travel Agency
        </b-navbar-brand>

        <div></div>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav right>
            <b-nav-item class="navbar-items" href="#/">Home</b-nav-item>
            <b-nav-item class="navbar-items" href="#">Destination</b-nav-item>
            <b-nav-item class="navbar-items" href="#">Deals</b-nav-item>
            <b-nav-item class="navbar-items" href="#/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-col>
  </b-row>
</template>
