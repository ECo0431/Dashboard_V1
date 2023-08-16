/*
Ce script JavaScript récupère les données extraites du localStorage,
utilise la bibliothèque Chart.js pour créer un graphique à partir de ces données.

Auteur : [Votre nom]
Date : [Date de création]
*/

document.addEventListener("DOMContentLoaded", function () {
  try {
    const weeklyRentDataJSON = localStorage.getItem("weeklyRentData");

    if (weeklyRentDataJSON) {
      const weeklyRentData = JSON.parse(weeklyRentDataJSON);

      // Sépare les données en mois et valeurs
      const months = weeklyRentData.map((data) => data[0]);
      const values = weeklyRentData.map((data) => parseFloat(data[1]));

      // Crée le graphique avec Chart.js
      const ctx = document.getElementById("rentChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: months,
          datasets: [
            {
              label: "Valeurs de location hebdomadaires",
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
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
        "Aucune donnée de location hebdomadaire trouvée dans le localStorage."
      );
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération et du traitement des données de location hebdomadaire:",
      error
    );
  }
});
