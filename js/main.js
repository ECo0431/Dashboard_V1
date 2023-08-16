// js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const csvFileInput = document.getElementById("csvFileInput");
  const selectedFileName = document.getElementById("selectedFileName");
  const importButton = document.getElementById("importButton");

  csvFileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      selectedFileName.textContent = file.name;
    } else {
      selectedFileName.textContent = "Aucun fichier sélectionné";
    }
  });

  importButton.addEventListener("click", async function () {
    const file = csvFileInput.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = function (event) {
          const csvData = event.target.result;
          localStorage.setItem("csvData", csvData);
          console.log(
            "Données CSV importées et stockées dans le localStorage."
          );
        };
        reader.onerror = function (event) {
          console.error(
            "Une erreur s'est produite lors de la lecture du fichier CSV:",
            event.error
          );
        };
        reader.readAsText(file);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'importation et du traitement du fichier CSV:",
          error
        );
      }
    }
  });
});
