import React from "react"
import $ from "jquery"

import "../styles/eyes.scss"

$("body").mousemove(function (event) {
  var eye = $(".eye")
  var x = eye.offset().left + eye.width() / 2
  var y = eye.offset().top + eye.height() / 2
  var rad = Math.atan2(event.pageX - x, event.pageY - y)
  var rot = rad * (180 / Math.PI) * -1 + 90
  eye.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)",
  })
})

const Eyes = () => (
  <main>
    <div id="projectbox">
      <div class="face">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
    </div>
  </main>
)

export default Eyes
