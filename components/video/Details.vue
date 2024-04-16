<template>
  <h1>Componentes- Nuxt 3</h1>
  <p>Autor:pepas</p>
  <p>{{ diferencaEmDias }}dias Atras</p>
</template>

<script setup lang="ts">
import useFormat from "~/composables/useFormat";

const { diasPassados, diferencaEmDias } = useFormat();

const dataVideo = new Date(2023, 9, 2);

diasPassados(dataVideo);
</script>

<style lang="scss" scoped></style>
