<template>
  <div>
    <h2 v-if="!isLoading">
      Breaking News
    </h2>
    <WelcomeItem v-for="item in welcomeItems.slice(0, 5)" :key="item.heading" :url="item.url" :source="item.source.id">
      <template #heading>
        {{ item.title }}
      </template>
      <template #description>
        {{ item.description }}
      </template>

      <!-- <template #source>
        {{ item.source.id }}
      </template> -->

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


const welcomeItems = ref([]);
const isLoading = ref(true);
axios.get('http://localhost:3000/home')
  .then(response => {
    console.log(response)
    welcomeItems.value = response.data
    welcomeItems.value = welcomeItems.value.map(function(item){
    item.description = item.description.replace(/<\/?[^>]+(>|$)/g, "");
    return item
  })
    isLoading.value = false;
    // console.log(welcomeItems.value);
  })
  .catch(error => {
    console.log(error);
  });


</script>

<style>
h2{
  color: rgb(232, 31, 13);
  font-weight:900;
}
</style>
