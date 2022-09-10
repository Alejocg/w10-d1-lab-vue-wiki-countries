<template>
  <div id="details" >
    <div id="interior" >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${codigo}.png`"
        alt="country flag"
        
      />
      <div> Name: <h1>{{nombre}} </h1></div>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td>{{capital}}</td>
          </tr>
         
          <tr>
            <td>Area</td>
            <td>{{area}} <sup>km2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              
                
                <li><a href={{iso}}>{{borders}} </a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  

export default {
  name: "CountryDetails",
  props: ["common", "capital", "borders", "iso","area"],
  data() {
    return {
      codigo: "",
      Country: "",
      nombre: "",
      capital: "",
      borders: [],
      flag: "",
      area: "",
      UN: "",
      member: false,
      currency: "",

    };
  },
  methods: {
    async obtenerCountry() {
      this.Country = this.$route.params.id;
      const data = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${this.Country}`
      );
      const response = await data.json();
      this.nombre = response.name.common;
      this.area = response.area;
      this.borders = response.borders;
      this.capital = response.capital[0];
      this.codigo = response.alpha2Code.toLowerCase();
      
    },

},

mounted() {
    this.obtenerCountry();
  },
  
};



</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Raleway);


* {
  font-family: "Raleway";
}

#interior {
  display: flex;
  flex-direction: column;
}

img {
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 50px;
  height: auto;
}

#details {
  margin: 10px;
  background-image: linear-gradient(
    45deg,
    hsl(240deg 15% 87%) 0%,
    hsl(270deg 14% 88%) 11%,
    hsl(308deg 13% 88%) 22%,
    hsl(333deg 19% 90%) 33%,
    hsl(350deg 23% 91%) 44%,
    hsl(4deg 26% 92%) 56%,
    hsl(14deg 29% 93%) 67%,
    hsl(23deg 29% 94%) 78%,
    hsl(34deg 27% 95%) 89%,
    hsl(48deg 22% 95%) 100%
  );

  padding: 15px;
  border-radius: 25px;
  width: 100%;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
