$(".link").each(function () {
  $(this)
    .on("mouseover", function () {
      $(".container").addClass("hover");
      $(".container-item").removeClass("active");
      $(this).parent().addClass("active");
    })
    .on("mouseleave", function () {
      $(".container").removeClass("hover");
      $(".container").addClass("hover");
    });
});
