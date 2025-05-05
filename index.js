var noAdmin = ['085255126940', '081348357052', '083838289671', '085867431271', '0887437246652', '089665333697']
function showForm() {
  document.getElementById("form-section").classList.remove("hidden");
  document.getElementById("member-list").classList.add("hidden");
}

function showMembers() {
  const listContainer = document.getElementById("list");
  listContainer.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("members")) || [];
  data.forEach(member => {
    const li = document.createElement("li");
    li.innerText = `${member.nama} (${member.role}) - ${member.whatsapp}`;
    listContainer.appendChild(li);
  });
  document.getElementById("form-section").classList.add("hidden");
  document.getElementById("member-list").classList.remove("hidden");
}

document.getElementById("memberForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const askot = document.getElementById("askot").value;
  const kelas = document.getElementById("kelas").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const role = whatsapp === "08123456789" ? "admin" : "anggota";

  const reader = new FileReader();
  reader.onload = function(event) {
    const photoData = event.target.result;

    const newMember = { nama, askot, kelas, whatsapp, role, photoData };
    let data = JSON.parse(localStorage.getItem("members")) || [];
    const exists = data.find(d => d.whatsapp === whatsapp);
    if (!exists) {
      data.push(newMember);
      localStorage.setItem("members", JSON.stringify(data));
    }

    createCardPDF(newMember);
    createSuratKeanggotaanPDF(newMember);
  };

  const photoFile = document.getElementById("photo").files[0];
  if (photoFile) {
    reader.readAsDataURL(photoFile);
  }
});
