<template>
  <div id="details" >
    <div id="interior" >
      <img
        src="https://flagpedia.net/data/flags/icon/72x54/es.png"
        alt="country flag"
        
      />
      <h1>France</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>551695 km <sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li><a href="/AND">Andorra</a></li>
                <li><a href="/BEL">Belgium</a></li>
                <li><a href="/DEU">Germany</a></li>
                <li><a href="/ITA">Italy</a></li>
                <li><a href="/MCO">Monaco</a></li>
                <li><a href="/ESP">Spain</a></li>
                <li><a href="/CHE">Switzerland</a></li>
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
};
</script>

<style scoped>
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
}
</style>
