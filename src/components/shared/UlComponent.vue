<template>
  <ul>
    <li v-for="(item, key) in itens" class="nav-item">
      <slot name="content"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ul-component",
    props: {
      itens: Array
    }
  }
</script>

<style lang="scss">
</style>
