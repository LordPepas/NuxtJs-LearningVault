const log = true;

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/login" && !log) {
    return navigateTo("/login");
  }
});
