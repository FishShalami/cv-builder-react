import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function DownloadButton() {
  const downloadPDF = () => {
    const outputDiv = document.querySelector(".outputs");

    html2canvas(outputDiv, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // Add the image to the PDF
      pdf.save("cv-download.pdf"); // Save the PDF with a filename
    });
  };

  return (
    <div className="download">
      <button type="button" onClick={downloadPDF}>
        Download as PDF
      </button>
    </div>
  );
}
export default DownloadButton;
