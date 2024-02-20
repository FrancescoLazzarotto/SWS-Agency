  
      document.addEventListener('DOMContentLoaded', function() {
      const icon = document.querySelector('.icon');

      function checkVisibility() {
        const rect = icon.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isVisible) {
          icon.style.opacity = 1; // Mostra l'immagine se è nella schermata
        } else {
          icon.style.opacity = 0; // Nascondi l'immagine se non è nella schermata
        }
      }

      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', checkVisibility);

      setTimeout(function() {
        icon.style.display = 'block';
        checkVisibility(); // Controlla la visibilità subito dopo l'apparizione
      }, 4000);
    });

// menu mobile e chiusura automatica del menu al click di una sezione //
document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  var menuItems = document.querySelectorAll('.menu-list a');

  menuToggle.addEventListener('click', function () {
    if (mobileMenu.style.display === 'block') {
      // Se il menu è aperto, chiudi
      mobileMenu.style.display = 'none';
    } else {
      // Se il menu è chiuso, apri
      mobileMenu.style.display = 'block';
    }
  });

  //  gestore di eventi a ciascun elemento del menu per chiudere il menu al clic
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
    });
  });
});



    // funzione cambio di proprietà css al menu con lo scorrimento // 
   window.addEventListener("scroll", function () {
      var menu = document.getElementById("menu");
      var scrollPosition = window.scrollY;

      // Usa l'API di Match Media per determinare le dimensioni della viewport
      var isLargeViewport = window.matchMedia("(min-width: 1200px)").matches;

      if (scrollPosition > (isLargeViewport ? 680 : 480)) { 
        menu.classList.add("menu-scrolled");
      } else {
        menu.classList.remove("menu-scrolled");
      }
    });
  // funzione scorrimento slider attraverso la libreria Swiper.js 

   document.addEventListener("DOMContentLoaded", function () {
      var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        flipEffect: {
          slideShadows: true,
        },
        navigation: { // bottoni per lo scorrimento 
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {   // funzione flip delle card - fronte e retro 
          slideChangeTransitionStart: function () {
            // Rimuovi la classe flipped da tutte le carte prima di aggiungerla alla corrente
            document
              .querySelectorAll(".swiper-slide")
              .forEach(function (slide) {
                slide.classList.remove("swiper-slide-flipped");
              });

            // Aggiungi la classe flipped alla carta corrente
            this.slides[this.activeIndex].classList.add(
              "swiper-slide-flipped"
            );
          },
        },
        breakpoints: { // breakpoint per modificare il numero di slide per schermata in base alla larghezza dello schermo
          1024: { 
            slidesPerView: 4,
          },
          481: {
            slidesPerView: 2,
          },
          768: { 
            slidesPerView: 3,
          },
        },
      });
    });
   

    // funzione flip card - fronte e retro
    function flipCard(card) {
  var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (isTouchDevice) {
    // Se si tratta di un dispositivo touch, aggiungi o rimuovi la classe "flipped" solo al clic
    card.classList.toggle("flipped");
  } else {
    // Se non è un dispositivo touch, esegui il normale comportamento
    card.classList.toggle("flipped");
  }
}

document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    flipCard(card);
  });

  card.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Evita comportamenti predefiniti
    flipCard(card);
  });

  card.addEventListener("touchmove", function (event) {
    event.preventDefault();
    flipCard(card) // Evita comportamenti predefiniti
  });

  card.addEventListener("touchend", function (event) {
    event.preventDefault();
    flipCard(card) // Evita comportamenti predefiniti
  });
});
   


    
    function mostraParagrafo(idParagrafo) {
        // Trova il paragrafo cliccato
        var paragrafoDaMostrare = document.getElementById(idParagrafo);

        // Se il paragrafo è già attivo, nascondilo e rimuovi la classe 'active'
        if (paragrafoDaMostrare.classList.contains('active')) {
            paragrafoDaMostrare.classList.remove('active');
        } else {
            // Nascondi tutti i paragrafi e mostra il paragrafo cliccato
            nascondiParagrafi();

            // Verifica se l'altezza massima è diversa da 0
            if (parseInt(window.getComputedStyle(paragrafoDaMostrare).maxHeight) === 0) {
                paragrafoDaMostrare.classList.add('active');
            }
        }
    }


    // cookies and privacy 
    // Funzione per nascondere tutti i paragrafi
    function nascondiParagrafi() {
        var paragrafi = document.querySelectorAll('.hidden');
        paragrafi.forEach(function (paragrafo) {
            if (paragrafo.classList.contains('active')) {
                paragrafo.classList.remove('active');
            }
        });
    }

    function nascondiParagrafiEccetto(idParagrafoAttivo) {
        var paragrafi = document.querySelectorAll('.hidden');
        paragrafi.forEach(function (paragrafo) {
            if (paragrafo.id !== idParagrafoAttivo) {
                paragrafo.classList.remove('active');
            }
        });
    }

      function toggleArrow(element) {
            element.classList.toggle("rotated");
        }

// over della sezione team per mobile 
 document.addEventListener("DOMContentLoaded", function () {
    const imageOverlays = document.querySelectorAll(".image-overlay-mobile");

    window.addEventListener("scroll", function () {
      imageOverlays.forEach((overlay, index) => {
        const rect = overlay.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

        if (isVisible) {
          overlay.classList.add("active");
        } 
       
      });
    });
  });
  // script freccia che riporta a inizio pagina  per pagine cookie e privacy
document.addEventListener("DOMContentLoaded", function() {
  // Ottieni il riferimento all'elemento della freccia
  var scrollToTopButton = document.getElementById("scroll-to-top");

  // Mostra o nascondi la freccia in base alla posizione dello scroll
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Aggiungi un gestore di eventi al clic sulla freccia 
  scrollToTopButton.addEventListener("click", function() {
    // Scorri verso l'inizio della pagina
    document.body.scrollTop = 0; // Per Safari
    document.documentElement.scrollTop = 0; // Per altri browser
  });
});
// freccia tornare su home page 
document.addEventListener("DOMContentLoaded", function () {
      var scrollToTopButton = document.getElementById("scroll-to-top-home");

      // Aggiungi un gestore di eventi al clic sulla freccia
      scrollToTopButton.addEventListener("click", function () {
        // Scorri verso l'inizio della pagina
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  // script per cambiare il placeholder dell'input telefono su mobile 
 document.addEventListener("DOMContentLoaded", function () {
    var telefonoInput = document.getElementById("telefono");

    if (window.innerWidth <= 599) {
      telefonoInput.placeholder = "Telefono";
    }
  });
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 15000; // Durata dell'animazione in millisecondi
    const steps = 150; // Numero di passi per raggiungere il target

    const increment = target / steps;
    let count = 0;

    const updateCount = () => {
      count += increment;
      counter.innerText = Math.floor(count);

      // Verifica se si è raggiunto o superato il numero finale
      if (count >= target) {
        counter.innerText = `${target}+`;
      } else {
        requestAnimationFrame(updateCount);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(updateCount);
      }
    });

    observer.observe(counter);
  });
});





