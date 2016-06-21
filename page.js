// Dynamically calculate age
$('#age').text(Math.floor((new Date() - new Date(1997, 3, 2)) / 31536000000))

// Project Showcase
var curProject = 0
var fadeTime = 600
var projects

// Toggle dropdown menu on smaller screens
var toggle
var toggleMenu
var $window = $(window)

$(document).ready(function () {
  toggle = $('#toggle')
  toggleMenu = $('#toggle-menu')
  toggle.click(function () {
    toggleMenu.slideToggle(200)
  })

  toggleMenu.click(function () {
    toggleMenu.slideToggle(200)
  })

  $window.resize(function () {
    // Make sure menu is hidden when switching to bigger screen
    if ($window.width() > 690) {
      toggleMenu.hide()
    }
  })

  projects = $('.showcase .project')
  $(projects[curProject]).fadeIn(fadeTime)

  // set up the click-event handlers
  $('.arrow-prev').click(function () {
    $(projects[curProject]).fadeOut(fadeTime, function () {
      // callback-function that enables crossfading between project-views

      curProject--
      if (curProject < 0) {
        // Only loop over actual projects
        curProject = projects.length - 1 // go to last
      }
      $(projects[curProject]).fadeIn(fadeTime)
    })
  })

  $('.arrow-next').click(function () {
    $(projects[curProject]).fadeOut(fadeTime, function () {
      // callback-function that enables crossfading between project-views

      curProject++
      if (curProject >= projects.length) {
        // only loop over actual projects
        curProject = 0 // go to first
      }
      $(projects[curProject]).fadeIn(fadeTime)
    })
  })
})
