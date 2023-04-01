<template>
  <router-link class="list-group-item" :to="`/details/${code}`">
    <div id="box">
      <div id="side-nav">
        <!-- Navigation Country links in sidebar-->

        <div
          :class="{ active: active }"
          @click="active = !active"
          v-bind:disabled="active"
          type="button"
          id="singleCard"
          class="card button rounded active"
        >
          <div id="imgStyling">
            <img v-if="loaded" class="card-header" :src="flag" alt="flag" />
            <div v-else>Loading</div>
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
              <li class="list-group-item">
                Code: <b>{{ code }}</b>
              </li>
            </ul>
          </div>

          <br />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import CountryDetails from "./CountryDetails.vue";

export default {
  name: "CountriesList",
  components: { CountryDetails },
  props: ["common", "capital", "details", "name", "flag", "loaded", "code"],

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  font-family: "Raleway";
}

#side-nav {
  margin: 3px 0px 3px 5px;
  /* rest of your CSS */
}

#singleCard {
  width: 190px;
  cursor: pointer;

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

#singleCard:active {
  background: rgb(70, 70, 70);
}

#active {
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

.button:hover {
  transition-duration: 0.5s;
  background-color: #3a3a3a;
}

.button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 10px 10px 10px 40px white;
}

.button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.button:active {
  top: 1px;
}
</style>
