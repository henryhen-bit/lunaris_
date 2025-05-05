function createSuratKeanggotaanPDF(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  doc.setFontSize(16);
  doc.text("SURAT KETERANGAN KEANGGOTAAN", 45, 30);
  doc.setFontSize(12);
  doc.text(`Yang bertanda tangan di bawah ini menyatakan bahwa:`, 20, 50);
  doc.text(`Nama: ${data.nama}`, 20, 60);
  doc.text(`Asal Kota: ${data.askot}`, 20, 70);
  doc.text(`Kelas: ${data.kelas}`, 20, 80);
  doc.text(`No. WhatsApp: ${data.whatsapp}`, 20, 90);
  doc.text(`Merupakan anggota resmi komunitas XYZ dengan peran sebagai ${data.role}.`, 20, 110);
  doc.text(`Demikian surat ini dibuat sebagai bukti keanggotaan.`, 20, 130);
  doc.text("Komunitas XYZ", 140, 160);

  doc.save("surat_keanggotaan.pdf");
}