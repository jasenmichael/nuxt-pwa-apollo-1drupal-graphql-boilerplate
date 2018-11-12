<template>
<div>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }"

      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      v-bind:class="{ 'is-active' : showNav }"
    >
      <div class="navbar-start">
        <nuxt-link class="navbar-item" v-for="link in $store.state.menus" :to="link.path" v-html="link.title"/>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/about">
              About
            </nuxt-link>
            <a class="navbar-item" href="/contact-us">
              Contact Us
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  data() {
    return {
      showNav: false,
    }
  },
  created() {

  },
  mounted() {},
  methods: {
  }
}
</script>

<style>
</style>
