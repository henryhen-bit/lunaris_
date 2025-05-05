async function createCardPDF(data) {
  const { jsPDF } = window.jspdf || await import('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Kartu Tanda Anggota", 60, 20);
  doc.addImage(data.photoData, "JPEG", 15, 30, 40, 40);
  doc.setFontSize(12);
  doc.text(`Nama: ${data.nama}`, 60, 35);
  doc.text(`Asal: ${data.askot}`, 60, 45);
  doc.text(`Kelas: ${data.kelas}`, 60, 55);
  doc.text(`No. WA: ${data.whatsapp}`, 60, 65);
  doc.text(`Role: ${data.role}`, 60, 75);

  doc.save("kartu_anggota.pdf");
}
