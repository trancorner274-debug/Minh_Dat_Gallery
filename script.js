let currentFilter = "all";

// Hàm xóa dấu tiếng Việt để tìm kiếm thông minh hơn
function removeVietnameseTones(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

function filterCards(type) {
  currentFilter = type;
  updateCards();
}

function searchCards() {
  updateCards();
}

function updateCards() {
  // Lấy giá trị tìm kiếm, chuyển thành chữ thường và xóa dấu tiếng Việt
  const rawSearchValue = document.getElementById("searchInput").value;
  const searchValue = removeVietnameseTones(rawSearchValue.toLowerCase().trim());

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    // Lấy tiêu đề, chuyển thành chữ thường và xóa dấu tiếng Việt
    const rawTitle = card.querySelector(".title").textContent;
    const title = removeVietnameseTones(rawTitle.toLowerCase());

    const is2D = card.classList.contains("2d-card");
    const is3D = card.classList.contains("3d-card");

    let matchesFilter = false;

    if (currentFilter === "all") {
      matchesFilter = true;
    } else if (currentFilter === "2d" && is2D) {
      matchesFilter = true;
    } else if (currentFilter === "3d" && is3D) {
      matchesFilter = true;
    }

    // Kiểm tra từ khóa tìm kiếm
    const matchesSearch = title.includes(searchValue);

    // Thay vì dùng "block" làm vỡ layout Flex/Grid, dùng "" để trả về CSS mặc định
    if (matchesFilter && matchesSearch) {
      card.style.display = ""; 
    } else {
      card.style.display = "none";
    }
  });
}

// --- Phần xử lý Modal (Giữ nguyên từ code cũ của bạn) ---
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("imageModal");
  if (e.target === modal) {
    closeModal();
  }
});
