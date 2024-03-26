// Функция для фильтрации карточек с напарниками (поиск по людям)
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.cards');
  
    function filterIcons(searchQuery) {
      const nothingfound = document.getElementById("nothing-alert");
      let number = 0;
      cards.forEach(function (card) {
        const name = card.querySelector("h2").textContent.toLowerCase();
      
        if (name.includes(searchQuery.toLowerCase())) {
       nothingfound.style.display = "none";
          card.style.display = "flex";
      number++;
        } else {
          card.style.display = "none";
        }
      });
    if(number == 0){
      nothingfound.style.display = "block";
    }
    }
  
    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.trim();
      filterIcons(searchQuery);
    });
  });
// Функция для фильтрации карточек с напарниками (поиск по играм)
  function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}