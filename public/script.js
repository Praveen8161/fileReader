const fileInp = document.querySelector("#file");

fileInp.addEventListener("change", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);

  const { data } = await axios.post("http://localhost:5000", formData, {
    // Important or download a blank file
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([data]));

  const link = document.createElement("a");

  link.href = url;

  // Setting File Name
  link.setAttribute("download", "file.pdf");

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
});
