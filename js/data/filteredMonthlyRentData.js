// Ce script JavaScript récupère les données filtrées du localStorage,
// groupe les données par mois, inclut les années et les mois et calcule la somme des valeurs par mois.

document.addEventListener("DOMContentLoaded", function () {
  try {
    const filteredDataJSON = localStorage.getItem("filteredData");

    if (filteredDataJSON) {
      const filteredData = JSON.parse(filteredDataJSON);
      const monthlyRentData = {};

      for (const row of filteredData) {
        const dateParts = row[3].substring(1, row[3].length - 9).split("-");
        const year = dateParts[0];
        const month = dateParts[1];

        const rentValue = parseFloat(row[7].replace("$", "").replace(/"/g, ""));

        const yearMonth = year + "-" + month;
        if (!monthlyRentData[yearMonth]) {
          monthlyRentData[yearMonth] = {
            dates: [],
            sum: 0,
          };
        }

        monthlyRentData[yearMonth].dates.push(row[3]);
        monthlyRentData[yearMonth].sum += rentValue;
      }

      console.log("Données mensuelles de location calculées :");
      console.log(monthlyRentData);

      localStorage.setItem("monthlyRentData", JSON.stringify(monthlyRentData));
      console.log("Données mensuelles ajoutées au localStorage.");
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
