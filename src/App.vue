<template>
  <MainNavbar />
  <div class="app">
    <div id="container">
      <div id="countrylist" class="col-5">
        <div
          class="scrollbar scrollbar-primary"
          style="max-width: fit-content; max-height: 90vh; overflow: scroll"
        >
          {{ nombreCapital }}
          <CountriesList
            v-for="(item, index) in lista"
            :key="index"
            :common="item.name.common"
            :capital="item.capital[0]"
            :flag="`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`"
            @click="modal = false"
            :loaded="loaded"
            :code="item.alpha3Code"
          >
          </CountriesList>
        </div>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CountriesList from "./components/CountriesList.vue";
import MainNavbar from "./components/MainNavbar.vue";

const API_URL = "https://ih-countries-api.herokuapp.com/countries";

export default {
  name: "App",
  components: { CountriesList, MainNavbar },
  data() {
    return {
      lista: [],
      loaded: false,
      modal: true,
      nombreCapital: "",
    };
  },
  async created() {
    await this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        this.lista = data;
        this.loaded = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    CountryDetails_inactive() {
      return this.$route.name !== "CountryDetails";
    },
  },
  watch: {
    $route() {
      this.modal = true;
    },
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
