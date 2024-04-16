import { defineStore } from "pinia";
import type { Video } from "~/interfaces/videos";

export const useVideosStore = defineStore(
  "videos",
  () => {
    const favoritos = ref<Video[]>([]);

    const addFavorito = (video: Video) => {
      const newfavoritos = favoritos.value.some((v) => v.id === video.id);
      if (!newfavoritos) {
        favoritos.value.push(video);
      }
    };

    const removeFavorito = (id: Number) => {
      const newfavoritos = favoritos.value.filter((x) => x.id !== id);
      favoritos.value = newfavoritos;
    };

    return { addFavorito, removeFavorito, favoritos };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
