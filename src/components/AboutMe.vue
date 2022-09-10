<template>
  <div id="details" >
    <div id="interior" >
     
      <h5> Testing vue components, APIs and stuff </h5>
      
   
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  
};
</script>

<style scoped>
#interior {
  display: flex;
  flex-direction: column;
  align-content: center;
}


#details {
  margin: 10px;
  align-content: center;
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
  align-content: center;
}
</style>