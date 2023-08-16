// Ce script JavaScript récupère les données filtrées du localStorage,
// groupe les données par trimestre et calcule la somme des valeurs par trimestre.

document.addEventListener("DOMContentLoaded", function () {
  try {
    const filteredDataJSON = localStorage.getItem("filteredData");

    if (filteredDataJSON) {
      const filteredData = JSON.parse(filteredDataJSON);
      const trimesterRentData = {};

      for (const row of filteredData) {
        const dateParts = row[3].substring(1, row[3].length - 9).split("-");
        const year = dateParts[0];
        const month = dateParts[1];

        const rentValue = parseFloat(row[7].replace("$", "").replace(/"/g, ""));

        const trimester = getTrimester(month);

        if (!trimesterRentData[year]) {
          trimesterRentData[year] = {};
        }

        if (!trimesterRentData[year][trimester]) {
          trimesterRentData[year][trimester] = 0;
        }

        trimesterRentData[year][trimester] += rentValue;
      }

      console.log("Données trimestrielles de location calculées :");
      console.log(trimesterRentData);

      localStorage.setItem(
        "trimesterRentData",
        JSON.stringify(trimesterRentData)
      );
      console.log("Données trimestrielles ajoutées au localStorage.");
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

// Fonction pour obtenir le trimestre en fonction du mois (1 à 12)
function getTrimester(month) {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
}
