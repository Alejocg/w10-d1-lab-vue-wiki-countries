<template>
  <div id="box">
    <div id="side-nav">
      <!-- Navigation Country links in sidebar-->

      <div id="singleCard" class="card bg-light mb-3 p-3 rounded">
        <div id="imgStyling">
          <img
            class="card-header"
            src="https://flagpedia.net/data/flags/icon/72x54/es.png"
            alt="flag"
          />
        </div>

        <div id="textStyling">
          <p></p>
          <p></p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Name: <b>{{ common }} </b>
            </li>
            <li class="list-group-item">
              Capital: <b>{{ capital }}</b>
            </li>
          </ul>
        </div>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
import CountryDetails from "./CountryDetails.vue";

export default {
  name: "CountriesList",
  components: { CountryDetails },
  props: ["common", "capital", "details", "name"],

  data() {
    return {};
  },
};
</script>

<style scoped>
#singleCard {
  width: 190px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: radial-gradient(
    circle at 18.7% 37.8%,
    rgb(250, 250, 250) 0%,
    rgb(225, 234, 238) 90%
  );
}

#singleCard:hover {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
  background: rgb(70, 70, 70);
}

img {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

#imgStyling {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

#textStyling {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

#box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#side-nav {
  margin: 3px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  width: 200px;
  height: auto;
}
</style>
