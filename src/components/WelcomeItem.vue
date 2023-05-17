<template>
  <div class="item" >
    <!-- <i>
      <slot name="image">
        
      
      </slot>
    </i> -->
    <slot name="source">
      <img :src="`/src/assets/${source}.png`" />
    </slot>
    
    <div class="details">
      <h3 v-on:click="myFunction(url)">
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
    },
    source:{
      type:String,
      required:true,
    }
  },
  methods: {
    myFunction() {
      window.open(this.url, '_blank')
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
  color: #ffffff;
}

h3:hover {
  font-size: 1.2rem;
  color: #ffffff;
}
img{
  
  width:50px;
}

.item{
  border-bottom: 1px solid lightgray;
  margin-bottom:1rem;
  padding-bottom:1rem;
}
.item:last-child{
  border-bottom: none;
  margin-bottom:0rem;
  padding-bottom:none;
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
