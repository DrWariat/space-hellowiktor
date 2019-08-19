<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label> 
      <input 
      id="search" 
      name="search"
      v-model="searchValue"
      @input="handleInput" />
      <ul>
        <li v-for="item in result" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].description }} </p>
        </li>
      </ul>
      </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import debounce  from 'lodash.debounce';
import HelloWorld from '@/components/HelloWorld.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Seatch',
  data(){
    return{
      searchValue: '',
      result: [],

    };
  },
  methods:{
    // eslint-disable-next-line
    handleInput: debounce(function() {
            console.log(this.searchValue);
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
      .then((response) =>{
        this.result = response.data.collection.items;
      })
      .catch((error) => {
        console.log(error);
      });   
    }, 500),
  },
};
</script>

<style lang="scss" scoped>

.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}
.search{
  display: flex;
  flex-direction: column;
  width: 250px;

  label{
    font-family: Montserrat, sans-serif;

  }

  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
  }
}

</style>