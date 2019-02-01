const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    document.querySelector('ul').appendChild(li);
    //console.log(inp.value);
    inp.value = '';
});

document.querySelector('ul')
    .addEventListener('click', handleCLick);

    function handleCLick(evt) {
        evt.target.style.color = 'red';
    }
    