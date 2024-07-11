<script setup lang="ts">

</script>

<template>
    <main class="main">
      <slot></slot>
    </main>
  <mainFooter></mainFooter>
</template>

<style scoped>
  .main{
    height: 100%;
    margin-top: 128px;
    display: flex;
    flex-direction: column;
  }
</style>