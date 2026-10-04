Digital Clock

A live digital clock that displays the current hours, minutes and seconds (HH:MM:SS) and updates automatically every second. It also shows today's date underneath.

Built as Day 4 of the Web Development track during my Veda Technology internship.

Objective

Practise JavaScript Date objects, timers, DOM selection and DOM updates.

Features
Live time in HH:MM:SS format
Automatic update every second
Leading zeros for single-digit values (e.g. 09:05:03)
Current date shown below the time
Responsive layout that adapts to phones, tablets and desktops
Tools Used
HTML5
CSS3
JavaScript
Project Structure
digital-clock/
├── index.html   # Page structure
├── style.css    # Styling and responsive layout
└── script.js    # Clock logic
How It Works
new Date() returns the current date and time.
getHours(), getMinutes() and getSeconds() extract each part.
A pad() function adds a leading zero to values below 10.
document.getElementById() selects the clock element and textContent updates it.
setInterval(updateClock, 1000) repeats the update every second.
How to Run
Download or clone this repository.
Keep index.html, style.css and script.js in the same folder.
Open index.html in any web browser.
What I Learned
What setInterval does and how it repeats a function at a set delay
How the JavaScript Date object works
How to add a leading zero to a number
How to select and update elements in the DOM
How to use media queries for simple responsive styling
Author

Anna Makgabo Thantsha Web Development Intern, Veda Technology# digital-clock
