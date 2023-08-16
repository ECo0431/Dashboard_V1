document.addEventListener("DOMContentLoaded", function () {
  try {
    const csvData = localStorage.getItem("csvData");

    if (csvData) {
      const csvLines = csvData.split("\n");
      const filteredTableData = [];

      for (const line of csvLines) {
        const row = line.split(",");
        if (
          row[4] === `"0xf215af7efd2d90f7492a13c3147defd7f1b41a8e"` ||
          row[4] === `"0xd152f549545093347a162dce210e7293f1452150"`
        ) {
          filteredTableData.push(row);
        }
      }

      if (filteredTableData.length > 0) {
        console.log(
          'Données CSV avec l\'index 4 "0xf215af7efd2d90f7492a13c3147defd7f1b41a8e" ou "0xd152f549545093347a162dce210e7293f1452150":'
        );
        console.table(filteredTableData);

        // Stocke les données filtrées dans le localStorage
        localStorage.setItem("filteredData", JSON.stringify(filteredTableData));
        console.log("Données filtrées ajoutées au localStorage.");
      } else {
        console.log(
          'Aucune donnée trouvée avec l\'index 4 "0xf215af7efd2d90f7492a13c3147defd7f1b41a8e" ou "0xd152f549545093347a162dce210e7293f1452150".'
        );
      }
    } else {
      console.log("Aucune donnée CSV trouvée dans le localStorage.");
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la lecture et du traitement des données CSV:",
      error
    );
  }
});
