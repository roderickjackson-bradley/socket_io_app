

//Use querySelector() to select the first element with a class of cool and assign it to a variable named pEl.
            
//Verify that the <p> element was selected by logging out pEl.

let titleEL = document.querySelector('#title');

let pEl = document.querySelector('.cool');

pEl.innerHTML = 'Comments for <strong>Today</strong>';
titleEL.style.textAlign = 'center';

const commentEls = document.querySelectorAll('.comment');

console.dir(commentsIles);