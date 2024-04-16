<template>
  <div>Videos Favoritos</div>
  <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descrição }}</h2>
      <iframe
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />

      <div>
        <button @click="removeFavorito(video.id)">Remover Favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFavoritos } from "~/composables/states";
import type { Video } from "~/interfaces/videos";
import { useVideosStore } from "~/stores/videos";

const { $toast } = useNuxtApp();

const videoStore = useVideosStore()
const {favoritos} = storeToRefs(videoStore)

const removeFavorito = (id:number) => {
  videoStore.removeFavorito(id);
  $toast.error('Video removido com sucesso')
}

</script>

<style lang="scss" scoped></style>
