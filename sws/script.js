

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
          540: {
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
  card.classList.toggle("flipped");
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
    event.preventDefault(); // Evita comportamenti predefiniti
  });

  card.addEventListener("touchend", function (event) {
    event.preventDefault(); // Evita comportamenti predefiniti
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
  
  // script per cambiare il placeholder dell'input telefono su mobile 
 document.addEventListener("DOMContentLoaded", function () {
    var telefonoInput = document.getElementById("telefono");

    if (window.innerWidth <= 599) {
      telefonoInput.placeholder = "Telefono";
    }
  });
