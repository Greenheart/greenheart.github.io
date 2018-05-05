$(function () {
  // Toggle dropdown menu on smaller screens
  var toggle = $('#toggle')
  var toggleMenu = $('#toggle-menu')
  var menuIsOpen
  var $window = $(window)

  function toggleMenuState (event) {
    menuIsOpen = !menuIsOpen
    toggleMenu.slideToggle(200)
    event.stopPropagation()
  }

  function hideIfClickOutside (id) {
    return function (event) {
      if (menuIsOpen && event.target.id !== id) {
        toggleMenuState(event)
      }
    }
  }

  $(document).click(hideIfClickOutside('#toggle-menu'))
  toggle.click(toggleMenuState)
  toggleMenu.click(toggleMenuState)

  $window.resize(function () {
    // Make sure menu is hidden when switching to bigger screen
    if ($window.width() > 690) {
      toggleMenu.hide()
      menuIsOpen = false
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
