<template>
  <MainNavbar />

  <div class="app">
    <div id="container">
      <div
        id="countrylist"
        style="max-width: fit-content; max-height: 90vh; overflow: scroll"
        class="col-5 scrollbar scrollbar-primary"
      >
        {{ nombreCapital }}

        <CountriesList
          id="list"
          v-for="(item, index) in lista"
          :key="index"
          :common="lista[index].name.common"
          :capital="lista[index].capital[0]"
          :flag="
            'https://flagpedia.net/data/flags/icon/72x54/' +
            lista[index].alpha2Code.toLowerCase() +
            '.png'
          "
          @click="modal = false"
          :loaded="loaded"
          :code="lista[index].alpha3Code"
        >
        </CountriesList>
      </div>

      <div id="detailsWrap" v-if="modal">
        <EmptyDetails id="details" />
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const API_URL = "https://ih-countries-api.herokuapp.com/countries";

import CountriesList from "./components/CountriesList.vue";
import MainNavbar from "./components/MainNavbar.vue";
import CountryDetails from "./components/CountryDetails.vue";
import EmptyDetails from "./components/EmptyDetails.vue";

export default {
  name: "App",
  components: { CountriesList, MainNavbar, CountryDetails, EmptyDetails },
  data() {
    return {
      lista: "",
      lista2: "",
      capital: null,
      alpha2Code: null,
      name: "hola",
      currency: "",
      modal: true,
      loaded: false,
      flag: "es",
      code: "",
      nombreCapital: "",
    };
  },

  methods: {
    async getApi() {
      const response = await fetch(API_URL);
      const data = await response.json();
      this.lista = data;
      this.loaded = true;
      console.log(data);
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

#detailsWrap {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
#details {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
}

#container {
  display: flex;
  flex-wrap: nowrap;
  margin: 10px;
}

.scrollbar {
  background: #fff;
  overflow-y: scroll;
}

.scrollbar-primary::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #4285f4;
}
</style>
