
// menu mobile e chiusura automatica del menu al click di una sezione // mobile  
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

  //  gestore di eventi a ciascun elemento del menu per chiudere il menu al clic // mobile 
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
    });
  });
});

    // funzione cambio di proprietà css al menu con lo scorrimento // //desktop-tablet
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

    // over della sezione team // mobile 
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

  //script per il counter animato // all devices 
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let counterFinished = 0; 

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const steps = 150;
    const increment = target / steps;
    let count = 0;

    const updateCount = () => {
      count += increment;
      counter.innerText = Math.floor(count);
      if (count >= target) {
        counter.innerText = `${target}+`;
        counterFinished++; 
        if (counterFinished === counters.length) {
          counterFinished = 0; 
        }
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

  // funzione scorrimento slider attraverso la libreria Swiper.js  // all devices

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
   

    // funzione flip card - fronte e retro // all devices
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
    event.preventDefault(); 
    flipCard(card);
  });

  card.addEventListener("touchmove", function (event) {
    event.preventDefault();
    flipCard(card);
  });

  card.addEventListener("touchend", function (event) {
    event.preventDefault();
    flipCard(card);
  });
});
   

 // cookies and privacy  // all devices 
 // script per aprire il paragrafo 
   document.addEventListener('DOMContentLoaded', function() {
    var arrowButton = document.getElementById('arrowButton');

    arrowButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita eventuali azioni predefinite come il reindirizzamento su un'altra pagina
        var paragrafoId = this.getAttribute('data-target');
        mostraParagrafo(paragrafoId);
        toggleArrow(this);
    });

    arrowButton.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Evita eventuali azioni predefinite come lo zoom sulla pagina o la trascinatura della pagina
        var paragrafoId = this.getAttribute('data-target');
        mostraParagrafo(paragrafoId);
        toggleArrow(this);
    });
});

function mostraParagrafo(idParagrafo) {
    var paragrafoDaMostrare = document.getElementById(idParagrafo);

    if (paragrafoDaMostrare.classList.contains('active')) {
        paragrafoDaMostrare.classList.remove('active');
    } else {
        nascondiParagrafi();

        if (parseInt(window.getComputedStyle(paragrafoDaMostrare).maxHeight) === 0) {
            paragrafoDaMostrare.classList.add('active');
        }
    }
}

function nascondiParagrafi() {
    var paragrafi = document.querySelectorAll('.hidden');
    paragrafi.forEach(function(paragrafo) {
        if (paragrafo.classList.contains('active')) {
            paragrafo.classList.remove('active');
        }
    });
}

function toggleArrow(element) {
    element.classList.toggle("rotated");
}

  // script freccia che riporta a inizio pagina 
document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scroll-to-top");

  // Mostra o nascondi la freccia in base alla posizione dello scroll
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  scrollToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // Per Safari
    document.documentElement.scrollTop = 0; // Per altri browser
  });
});


