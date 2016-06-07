let curProject = 3
const fadeTime = 600

$(document).ready(() => {
  const projects = $('.showcase .project')
  $(projects[curProject]).fadeIn(fadeTime)

  // set up the click-event handlers
  $('.arrow-prev').click(() => {
    $(projects[curProject]).fadeOut(fadeTime, () => {
      // callback-function that enables crossfading between project-views

      curProject--
      if (curProject < 0) {
        // Only loop over actual projects
        curProject = projects.length - 1 // go to last
      }
      $(projects[curProject]).fadeIn(fadeTime)
    })
  })

  $('.arrow-next').click(() => {
    $(projects[curProject]).fadeOut(fadeTime, () => {
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
