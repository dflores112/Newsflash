<template>
  <div>
    <WelcomeItem v-for="item in welcomeItems" :key="item.heading" :url="item.url">
  <template #heading>
    {{ item.title }}
  </template>
  <template #description>
    {{ item.description }}
  </template>

  <!-- other content of WelcomeItem component -->
</WelcomeItem>
    <div v-if="isLoading">
      Loading...
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import WelcomeItem from './WelcomeItem.vue'

const baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=82c695a94ca047a6885f3234e33cd4ac';

const welcomeItems = ref([]);
const isLoading = ref(true);
axios.get(baseUrl)
    .then(response => {
      welcomeItems.value = response.data.articles;
      isLoading.value = false;
      console.log(welcomeItems.value);
    })
    .catch(error => {
      console.log(error);
    });

</script>
