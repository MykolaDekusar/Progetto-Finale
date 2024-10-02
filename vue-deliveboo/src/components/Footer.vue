<template>
  <footer>
    <!-- logo -->
    <div class="container d-flex flex-wrap justify-content-center">
      <a
        href="/"
        class="d-flex flex-wrap justify-content-center"
        draggable="false"
      >
        <img
          src="@/assets/img/logo_boo.png"
          alt="DeliveBoo Logo"
          class="logo"
          draggable="false"
        />
      </a>
    </div>
    <div class="text-center mb-3 fw-semibold">Seguici</div>
    <!-- icon -->
    <div class="container d-flex flex-wrap justify-content-center mb-5">
      <div class="social-icons d-flex gap-3">
        <a href="#"> <font-awesome-icon :icon="['fab', 'square-twitter']" /></a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'square-facebook']"
        /></a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'square-instagram']"
        /></a>
      </div>
    </div>

    <div class="container">
      <div class="d-flex flex-wrap w-100 gap-5 justify-content-center">
        <!-- Prima sezione del footer: Informazioni aziendali -->
        <div class="footer-section col-lg-3 col-md-5 col-sm-10">
          <h3 class="mb-3">Deliveboo</h3>
          <ul>
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">Termini e condizioni</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Seconda sezione del footer: Link ai social media -->
        <div class="footer-section col-lg-3 col-md-5 col-sm-10">
          <h3 class="mb-3">Contatti</h3>
          <ul>
            <li><a href="#">Supporto</a></li>
            <li><a href="#">Domande frequenti</a></li>
            <li><a href="#">Lavora con noi</a></li>
            <li><a href="#">Contattaci</a></li>
          </ul>
        </div>

        <!-- terza colonna -->
        <div class="footer-section col-lg-3 col-md-5 col-sm-10">
          <h3 class="mb-3">Scarica l'app</h3>
          <img
            src="@/assets/img/download.png"
            alt="Download_button"
            class="w-50 apps-button"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-end">
      <p>&copy; 2024 DeliveBoo. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped lang="scss">
@use "@/assets/scss/partials/variables.scss" as *;

footer {
  background-color: #333;
  color: white;
  padding: 40px 0 0 0;
}

iframe {
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
}

.footer-section {
  background-color: #696969bb;
  padding: 20px;
}

.footer-section h5 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #f89616;
}

.social-icons a {
  margin-right: 15px;
  font-size: 36px;
  color: white;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #f89616;
}

footer p {
  margin-top: 20px;
  font-size: 14px;
  color: #ccc;
}

.logo {
  width: 300px;
  margin-bottom: 20px;
}

/* Stile per la sezione mappa */
// .map-section {
//   flex: 1;
// }

// .map-container {
//   width: 300px;
//   height: 200px;
//   margin-top: 10px;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
// }

@media screen and (max-width: 992px) {
  .map-section {
    height: 250px;
    max-width: 83%;
    min-width: 280px;
  }

  .col-md-5 {
    min-width: 280px;
  }
}
</style>
