document.addEventListener("DOMContentLoaded", function () {
  function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
      element.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function updateFullscreenButton(fullscreenButton, chartElement) {
    if (document.fullscreenElement === chartElement) {
      fullscreenButton.style.display = "none";
    } else {
      fullscreenButton.style.display = "block";
    }
  }

  function setupFullscreenButton(chartId, buttonId) {
    const fullscreenButton = document.getElementById(buttonId);
    const chartFullscreen = document.getElementById(chartId);

    fullscreenButton.addEventListener("click", function () {
      toggleFullscreen(chartFullscreen);
    });

    document.addEventListener("fullscreenchange", function () {
      updateFullscreenButton(fullscreenButton, chartFullscreen);
    });
  }

  // Configuration des boutons pour chaque graphique
  setupFullscreenButton("rent-chart-fullscreen", "fullscreenButtonRent");
  setupFullscreenButton(
    "rent-monthly-chart-fullscreen",
    "fullscreenButtonMonthlyRent"
  );
  setupFullscreenButton(
    "rent-trimester-chart-fullscreen",
    "fullscreenButtonTrimesterRent"
  );
  setupFullscreenButton(
    "rent-years-chart-fullscreen",
    "fullscreenButtonYearsRent"
  );
});
