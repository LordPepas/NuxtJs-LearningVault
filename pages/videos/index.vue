<template>
  <div>Videos</div>
  <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
  <h1>{{ $t("titulo") }}</h1>
  <div class="videos">
    <div v-for="video in videos" :key="video.id">
      <h2>{{ video.descrição }}</h2>
      <p>{{ converteDataBrasil(video.data_postagem) }}</p>
      <iframe
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />

      <div>
        <button @click="addFavorito(video)">Adicionar Favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritos } from "~/composables/states";
import type { Video } from "~/interfaces/videos";
import { useVideosStore } from "~/stores/videos";

const { $toast } = useNuxtApp();

onMounted(() => $toast.success("SSSSSSSSSSSSSSSSSSSSSSS"));

const { addFavorito } = useVideosStore();

const videos: Video[] = [
  {
    id: 1,
    descrição: "01 - Introdução e Instalação",
    url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
    data_postagem: "2023-10-15",
  },
  {
    id: 2,
    descrição: "02 - Configuração",
    url: "https://www.youtube.com/embed/JbbB84bnPog?si=mKtXqUkTKCuNHqjJ",
    data_postagem: "2023-10-20",
  },
  {
    id: 3,
    descrição: "03 - Pages",
    url: "https://www.youtube.com/embed/S99sVicr8NI?si=jR8Y0QLVVLoQA7mX",
    data_postagem: "2023-10-10",
  },
  {
    id: 4,
    descrição: "04 - Components",
    url: "https://www.youtube.com/embed/cCHWanw49l8?si=i7569DvWVVtto-Ja",
    data_postagem: "2023-10-05",
  },
];

const converteDataBrasil = (dataAtual: string) => {
  return new Date(dataAtual).toLocaleDateString("pt-BR");
};
</script>

<style scoped>
.videos {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.videos button {
  display: inline-block;
}
</style>
