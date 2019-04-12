# Buffer.js
Buffer.js allows you to put a timer on when an input field is used. All in 1 line.

# Basic usage
A basic usage example of using Buffer.js is:

`<input type="text" name="username" buffer-js buffer-js-delay="1" buffer-js-callback="callbackFunc">`

This will: tell Buffer.js to execute **callbackFunc()** after 1 second.

# Breakdown

`buffer-js` this initiates Buffer.js on the input.

`buffer-js-delay="1"` this tells Buffer.js to wait 1 second before executing the callback function.

`buffer-js-callback="callbackFunc"` this tells Buffer.js what function to execute when the delay hits 0.
