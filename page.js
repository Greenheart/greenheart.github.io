// Dynamically calculate age
document.getElementById('age').innerText = Math.floor((new Date() - new Date(1997, 3, 2)) / 31536000000)

/* ------------------------ Project Showcase ------------------------ */

var curProject = 0
var fadeTime = 600
var projects
var toggle
var toggleMenu

$(document).ready(function () {
  toggle = $('#toggle')
  toggleMenu = $('#toggle-menu')
  toggle.click(function () {
    toggleMenu.slideToggle()
  })

  toggleMenu.click(function () {
    toggleMenu.slideToggle()
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
