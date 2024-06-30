// plugins/flowbite.client.js
import { initFlowbite } from 'flowbite';

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    initFlowbite();
  }
});
