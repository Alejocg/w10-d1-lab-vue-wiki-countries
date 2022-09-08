<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            WikiCountries: La wikipedia pero con countries
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">Home</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Languages</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Contact Us</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a {
  color: white;
}

nav {
  padding-left: 10px;
  position: sticky;
  top: 0;
  width: 100%;
  color: white;
  font-weight: bold;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(226, 175, 222, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
