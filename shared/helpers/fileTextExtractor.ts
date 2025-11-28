/**
 * Initialize PDF.js library
 */
async function initPdfJs() {
  // Use legacy build for better Next.js compatibility
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

  // Set worker using CDN (more reliable for Next.js)
  if (!pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
  }

  return pdfjs;
}

/**
 * Extract text content from a PDF file
 */
async function extractTextFromPDF(file: File): Promise<string> {
  try {
    const pdfjs = await initPdfJs();

    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    const textParts: string[] = [];

    // Extract text from each page
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => ("str" in item ? item.str : ""))
        .join(" ");
      textParts.push(pageText);
    }

    return textParts.join("\n\n");
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    throw new Error(
      `Failed to extract text from PDF file: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
} /**
 * Extract text content from various file types
 */
export async function extractTextFromFile(file: File): Promise<string> {
  const fileExtension = file.name
    .toLowerCase()
    .substring(file.name.lastIndexOf("."));

  // Handle PDF files
  if (file.type === "application/pdf" || fileExtension === ".pdf") {
    return await extractTextFromPDF(file);
  }

  // Handle text-based files
  const isTextFile =
    file.type.startsWith("text/") ||
    file.type === "application/json" ||
    file.type === "application/xml" ||
    [".txt", ".md", ".csv", ".json", ".html", ".xml"].includes(fileExtension);

  if (isTextFile) {
    return await file.text();
  }

  // Handle DOC/DOCX (for future implementation)
  if (
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileExtension === ".doc" ||
    fileExtension === ".docx"
  ) {
    throw new Error(
      "DOC/DOCX files are not yet supported. Please use PDF or text files."
    );
  }

  throw new Error(
    `Unsupported file type: ${file.type || fileExtension}. Please use text files or PDFs.`
  );
}
