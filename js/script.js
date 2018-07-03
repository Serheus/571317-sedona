var btnOpenClose = document.querySelector(".form-btn");
var searchForm = document.querySelector(".search-form");
var dateArrival = searchForm.querySelector("[name=date-arrival]");
var dateDeparture = searchForm.querySelector("[name=date-departure]");
var quantityAdults = searchForm.querySelector("[name=quantity-adults]");

btnOpenClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-close");
});

searchForm.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !quantityAdults.value && !dateArrival.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  };
});
