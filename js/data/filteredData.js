document.addEventListener("DOMContentLoaded", function () {
  try {
    const csvData = localStorage.getItem("csvData");

    if (csvData) {
      const csvLines = csvData.split("\n");
      const filteredTableData = [];

      let found = false;

      for (const line of csvLines) {
        const row = line.split(",");
        if (
          row[4] === `"0xf215af7efd2d90f7492a13c3147defd7f1b41a8e"` ||
          row[4] === `"0xd152f549545093347a162dce210e7293f1452150"`
        ) {
          filteredTableData.push(row);
          found = true;
        }
      }

      if (!found) {
        for (const line of csvLines) {
          const row = line.split(",");
          if (row[4] === `"0xdd1d5ea167082a8ec02042991886781acbca35f7"`) {
            row[7] = row[6]; // Place la valeur de l'index 6 dans l'index 7
            row[6] = ""; // Réinitialise la valeur de l'index 6
            filteredTableData.push(row);
          }
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
          'Aucune donnée trouvée avec l\'index 4 "0xf215af7efd2d90f7492a13c3147defd7f1b41a8e", "0xd152f549545093347a162dce210e7293f1452150" ou "0xdd1d5ea167082a8ec02042991886781acbca35f7".'
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
