<template>
  <section class="hero is-primary">
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
  </section>
</template>

<script>
const pkg = require('~/package')
import Logo from '~/components/Logo.vue'

export default {
  components: {Logo},
  data() {
    return {
      pkg
    }
  }
}
</script>

<style>


</style>
