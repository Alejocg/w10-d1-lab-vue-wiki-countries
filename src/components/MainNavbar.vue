

<template>
  <nav>
    <section class="top-nav">
      <div>WikiCountries: La wikipedia, pero con countries.</div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li><router-link to="/"> Home </router-link></li>
        <li><router-link :to="'/details/'+ code "> Random Country</router-link></li>
        <li><router-link to="/aboutMe"> About Me </router-link></li>
      </ul>
    </section>
  </nav>
</template>

<script>
  const API_URL = "https://ih-countries-api.herokuapp.com/countries";
  
  
  export default {
   
     
    data() {
      return {
        code: "",
        random: 1,
 
      };
    },
  
    methods: {
      async getApi() {
        const response = await fetch(API_URL);
        const data = await response.json();
        this.lista = data;
        this.random = Math.ceil(Math.random()*10);
        console.log(this.random)
        this.code = data[this.random].alpha3Code;
        console.log(data[this.random].alpha3Code);
      },

    },
    mounted() {
      this.getApi();
    },
  };
  </script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);
h2 {
  vertical-align: center;
  text-align: center;
}

html,
body {
  margin: 0;
  height: 100%;
}

* {
  font-family: "Raleway";
  box-sizing: border-box;
}

a {
  color: white;
}

a:hover {
  color: #eea849;
  font-weight: bold;
  transition: all 0.5s;
}

a:active {
  color: #eea849;
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00baf0;
  background: linear-gradient(to left, #f46b45, #eea849);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  height: 50px;
  padding: 1em;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
    z-index: 9;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>
