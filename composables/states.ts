import type { Video } from "~/interfaces/videos";

export const useFavoritos = () => useState<Video[]>('favoritos',() => [])