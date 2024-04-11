<template>
  <div>Vc esta no videos de numero {{ $route.params.id }}</div>
  <VideoDetails />
  <VideoControlePlay />
</template>

<script setup>
definePageMeta({
    layout:'exibicao'
})
</script>

<style lang="scss" scoped></style>
