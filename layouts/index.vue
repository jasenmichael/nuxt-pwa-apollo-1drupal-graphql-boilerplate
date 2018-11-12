<template>
  <div>
    <!-- <nav-bar/> -->
    <!-- <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-centered">
              <Logo/>
            </div>
            <div class="column">
              <font-awesome-icon
                :icon="['fas', 'plus']"
                size="3x"
              />
            </div>
            <div class="column">
              <font-awesome-icon
                :icon="['fab', 'drupal']"
                size="10x"
              />
            </div>
          </div>
          <h1
            class="title is-2"
            v-html="pkg.name"/>
          <h2
            class="subtitle"
            v-html="pkg.description"/>
        </div>
      </div>
    </section> -->
    <div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
const pkg = require('~/package')
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  components: {Logo, NavBar},
  data() {
    return {
      pkg
    }
  }
}
</script>

<style>
img {
  /* width: 40vw; */
  max-width: 400px;
  float: left;
  margin: 0.4rem 0.4rem -0.6rem;
  padding: 3px 6px 1px 0;
}
.icon {
  text-align: center;
}

.hero {
  padding-top: 2rem;
}
</style>
