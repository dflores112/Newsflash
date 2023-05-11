<template>
  <div class="item" v-on:click="myFunction(url)">
    <!-- <i>
      <slot name="image">
        
      
      </slot>
    </i> -->
    <div class="details">
      <h3>
<a>
  <slot name="heading"></slot>
</a>       
      </h3>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    myFunction() {
      console.log(this.url)
    }
  }
}
</script>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  
}

h3 {
  font-size: 1.2rem;
  color:#ffffff;
}

h3:hover {
  font-size: 1.2rem;
  color:#ffffff;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
