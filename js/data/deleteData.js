document.addEventListener("DOMContentLoaded", function () {
  const deleteButton = document.getElementById("deleteButton");

  deleteButton.addEventListener("click", function () {
    try {
      localStorage.removeItem("csvData");
      localStorage.removeItem("filteredData");
      localStorage.removeItem("weeklyRentData");
      localStorage.removeItem("monthlyRentData");
      localStorage.removeItem("trimesterRentData");
      localStorage.removeItem("yearsRentData");
      console.log("Données supprimées du localStorage.");
      // Rafraîchir la page
      location.reload();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la suppression des données:",
        error
      );
    }
  });
});
