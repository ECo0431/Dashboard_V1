// Ce script JavaScript récupère les données annuelles du localStorage,
// utilise la bibliothèque Chart.js pour créer un graphique à barres à partir de ces données.

document.addEventListener("DOMContentLoaded", function () {
  try {
    const yearsRentDataJSON = localStorage.getItem("yearsRentData");

    if (yearsRentDataJSON) {
      const yearsRentData = JSON.parse(yearsRentDataJSON);
      const labels = Object.keys(yearsRentData);
      const values = Object.values(yearsRentData);

      const ctx = document.getElementById("yearsRentChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Somme des valeurs annuelles de location",
              data: values,
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
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
        "Aucune donnée de location annuelle trouvée dans le localStorage."
      );
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération et du traitement des données de location annuelle:",
      error
    );
  }
});
