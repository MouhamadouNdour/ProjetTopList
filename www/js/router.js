ROUTER = (() => {
  const divs = [$("#page1"), $("#page2"), $("#page3"), $("#page4")]
  const buttons = [$("#homeButton"), $("#mytopButton"), $("#optionsButton"), $("#addButton")]
  const init = () => {
    divs[0].removeClass("hidden")
    buttons.forEach((button, i) => {
      button.click(() => {
        if (button.attr('id') === "homeButton") {
          document.body.classList.remove("m-bg-theme")
          $("#page1").removeClass("hidden")
          $("#page2").addClass("hidden")
          $("#page3").addClass("hidden")
          $("#page4").addClass("hidden")
          $("#top-items").children().remove()
        } else if (button.attr('id') === "mytopButton") {
          document.body.classList.add("m-bg-theme")
          $("#page2").removeClass("hidden")
          $("#page1").addClass("hidden")
          $("#page3").addClass("hidden")
          $("#page4").addClass("hidden")
          if ($('.top').length === 0) {
            showTop(parseInt(localStorage.lastId))
          }
        } else if (button.attr('id') === "optionsButton") {
          document.body.classList.add("m-bg-theme")
          $("#page3").removeClass("hidden")
          $("#page1").addClass("hidden")
          $("#page2").addClass("hidden")
          $("#page4").addClass("hidden")
          $("#top-items").children().remove()
        } else if (button.attr('id') === "addButton") {
          document.body.classList.add("m-bg-theme")
          $("#page4").removeClass("hidden")
          $("#page1").addClass("hidden")
          $("#page2").addClass("hidden")
          $("#page3").addClass("hidden")
        }
      })
    })
  }

  return { init }
})();

ROUTER.init()