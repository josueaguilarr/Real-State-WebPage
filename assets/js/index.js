const imgPlaces = document.getElementsByClassName(".img-places");
imgPlaces.addEventListener("click", trigger, false);

function trigger(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
}
