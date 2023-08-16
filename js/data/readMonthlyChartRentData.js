// Ce script JavaScript récupère les données mensuelles du localStorage,
// utilise la bibliothèque Chart.js pour créer un graphique à barres à partir de ces données.

document.addEventListener("DOMContentLoaded", function () {
  try {
    const monthlyRentDataJSON = localStorage.getItem("monthlyRentData");

    if (monthlyRentDataJSON) {
      const monthlyRentData = JSON.parse(monthlyRentDataJSON);
      const labels = Object.keys(monthlyRentData);
      const values = Object.values(monthlyRentData).map((data) => data.sum);

      const ctx = document.getElementById("monthlyRentChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Somme des valeurs mensuelles de location",
              data: values,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
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
        "Aucune donnée de location mensuelle trouvée dans le localStorage."
      );
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération et du traitement des données de location mensuelle:",
      error
    );
  }
});
