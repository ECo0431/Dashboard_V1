// Ce script JavaScript récupère les données trimestrielles du localStorage,
// utilise la bibliothèque Chart.js pour créer un graphique à barres à partir de ces données.

document.addEventListener("DOMContentLoaded", function () {
  try {
    const trimesterRentDataJSON = localStorage.getItem("trimesterRentData");

    if (trimesterRentDataJSON) {
      const trimesterRentData = JSON.parse(trimesterRentDataJSON);
      const labels = [];
      const values = [];

      for (const year in trimesterRentData) {
        for (const trimester in trimesterRentData[year]) {
          labels.push(year + " T" + trimester);
          values.push(trimesterRentData[year][trimester]);
        }
      }

      const ctx = document
        .getElementById("trimesterRentChart")
        .getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Somme des valeurs trimestrielles de location",
              data: values,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.log(
        "Aucune donnée de location trimestrielle trouvée dans le localStorage."
      );
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération et du traitement des données de location trimestrielle:",
      error
    );
  }
});
