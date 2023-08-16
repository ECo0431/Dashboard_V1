/*
Ce script JavaScript récupère les données filtrées du localStorage,
extrait les index 3 et 7 pour créer une variable de type tableau nommée weeklyRentData
et les ajoute dans le localStorage.
*/

document.addEventListener("DOMContentLoaded", function () {
  try {
    const filteredDataJSON = localStorage.getItem("filteredData");

    if (filteredDataJSON) {
      const filteredData = JSON.parse(filteredDataJSON);
      const weeklyRentData = [];

      for (const row of filteredData) {
        const formattedDate = row[3].substring(1, row[3].length - 9);
        const rentValue = parseFloat(row[7].replace("$", "").replace(/"/g, ""));
        const rowData = [formattedDate, rentValue];
        weeklyRentData.push(rowData);
      }

      console.log("Données extraites de l'index 3 et 7 des données filtrées :");
      console.table(weeklyRentData);

      localStorage.setItem("weeklyRentData", JSON.stringify(weeklyRentData));
      console.log("Données extraites ajoutées au localStorage.");
    } else {
      console.log("Aucune donnée filtrée trouvée dans le localStorage.");
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération et du traitement des données filtrées:",
      error
    );
  }
});
