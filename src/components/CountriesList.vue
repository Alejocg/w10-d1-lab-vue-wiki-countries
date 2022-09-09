<template>
  <div id="box">
    <div id="side-nav">
      <!-- Navigation Country links in sidebar-->

      <div 
      :class="{ active: active }"
 @click="active = !active"
 v-bind:disabled="active"
      type=button id="singleCard" class="card button rounded active">
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
    
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
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
  background: rgb(70, 70, 70)
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
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.button:active {
  top: 1px;
}

</style>
