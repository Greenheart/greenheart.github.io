$(function () {
  // Toggle dropdown menu on smaller screens
  var toggle = $('#toggle')
  var toggleMenu = $('#toggle-menu')
  var $window = $(window)

  function toggleMenuState () {
    toggleMenu.slideToggle(200)
  }

  toggle.click(toggleMenuState)
  toggleMenu.click(toggleMenuState)

  $window.resize(function () {
    // Make sure menu is hidden when switching to bigger screen
    if ($window.width() > 690) {
      toggleMenu.hide()
    }
  })

  // Project Showcase
  var i = 0
  var fadeTime = 500
  var projects = $('.showcase .project')
  var isFading = false
  $(projects[i]).fadeIn(fadeTime)

  $('.arrow-prev').click(function () {
    if (!isFading) {
      isFading = true
      $(projects[i]).fadeOut(fadeTime, function () {
        if (--i < 0) {
          i = projects.length - 1
        }
        $(projects[i]).fadeIn(fadeTime)
        isFading = false
      })
    }
  })

  $('.arrow-next').click(function () {
    if (!isFading) {
      isFading = true
      $(projects[i]).fadeOut(fadeTime, function () {
        if (++i >= projects.length) {
          i = 0
        }
        $(projects[i]).fadeIn(fadeTime)
        isFading = false
      })
    }
  })
})
