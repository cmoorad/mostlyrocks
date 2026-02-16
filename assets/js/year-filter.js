// Year filter functionality for category pages
$(document).ready(function () {
  const $filterBtns = $(".year-filter-btn");
  const $filterItems = $(".year-filter-item");

  if ($filterBtns.length === 0) return; // Exit if filter not present

  $filterBtns.on("click", function () {
    const selectedYear = $(this).data("year");

    // Update active button state
    $filterBtns.removeClass("year-filter-btn--active");
    $(this).addClass("year-filter-btn--active");

    // Filter items
    if (selectedYear === "all") {
      $filterItems.fadeIn(200);
    } else {
      $filterItems.each(function () {
        if ($(this).data("year") == selectedYear) {
          $(this).fadeIn(200);
        } else {
          $(this).fadeOut(200);
        }
      });
    }
  });
});
