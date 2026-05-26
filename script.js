let currentFilter = "all";

function filterCards(type){

  currentFilter = type;

  updateCards();

}

function searchCards(){

  updateCards();

}

function updateCards(){

  const searchValue = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const title = card
      .querySelector(".title")
      .textContent
      .toLowerCase();

    const is2D = card.classList.contains("2d-card");
    const is3D = card.classList.contains("3d-card");

    let matchesFilter = false;

    if(currentFilter === "all"){
      matchesFilter = true;
    }

    else if(currentFilter === "2d" && is2D){
      matchesFilter = true;
    }

    else if(currentFilter === "3d" && is3D){
      matchesFilter = true;
    }

    const matchesSearch = title.includes(searchValue);

    if(matchesFilter && matchesSearch){
      card.style.display = "block";
    }

    else{
      card.style.display = "none";
    }

  });

}
function openModal(src){

  const modal = document.getElementById("imageModal");

  const modalImage = document.getElementById("modalImage");

  modal.style.display = "flex";

  modalImage.src = src;

}

function closeModal(){

  document.getElementById("imageModal")
    .style.display = "none";

}

window.addEventListener("click", function(e){

  const modal = document.getElementById("imageModal");

  if(e.target === modal){
    closeModal();
  }

});