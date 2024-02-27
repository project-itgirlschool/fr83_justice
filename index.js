$(document).ready(function () {
  let currentIndex = 0;
  const cardContainer = $(".card-container");

  $(".next-btn").on("click", function () {
    if (currentIndex < cardContainer.children().length - 1) {
      currentIndex++;
      updateCardVisibility();
    }
  });

  $(".prev-btn").on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCardVisibility();
    }
  });

  function updateCardVisibility() {
    const windowWidth = document.documentElement.clientWidth;
    let cardWidth = $(".card-3").outerWidth();

    if (currentIndex === 4 && windowWidth >= 600) cardWidth = 650;
    const newPosition = -currentIndex * cardWidth;
    cardContainer.css("transform", "translateX(" + newPosition + "px)");

    $(".prev-btn, .next-btn").show();

    if (currentIndex === 0) {
      $(".prev-btn").hide();
    }

    if (currentIndex === cardContainer.children().length - 1) {
      $(".next-btn").hide();
    }

  }
});