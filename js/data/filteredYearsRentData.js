// Ce script JavaScript récupère les données filtrées du localStorage,
// groupe les données par année et calcule la somme des valeurs par année.

document.addEventListener("DOMContentLoaded", function () {
  try {
    const filteredDataJSON = localStorage.getItem("filteredData");

    if (filteredDataJSON) {
      const filteredData = JSON.parse(filteredDataJSON);
      const yearsRentData = {};

      for (const row of filteredData) {
        const dateParts = row[3].substring(1, row[3].length - 9).split("-");
        const year = dateParts[0];

        const rentValue = parseFloat(row[7].replace("$", "").replace(/"/g, ""));

        if (!yearsRentData[year]) {
          yearsRentData[year] = 0;
        }

        yearsRentData[year] += rentValue;
      }

      console.log("Données annuelles de location calculées :");
      console.log(yearsRentData);

      localStorage.setItem("yearsRentData", JSON.stringify(yearsRentData));
      console.log("Données annuelles ajoutées au localStorage.");
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
