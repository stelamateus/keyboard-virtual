let keys    = document.querySelectorAll('.keyboard_wrapper .key .row span'),
    keyPad  = document.querySelector('.keyboard_wrapper .key'),
    display = document.querySelector('.keyboard_wrapper .display');

    let letters = document.querySelectorAll('.letter')

if(keys && keyPad && display)
{
    let capsLockMode = false;
    keys.forEach(key=>
    {
        key.addEventListener('click', function()
        {
            // console.log(this.innerText);
            if (this.classList.contains('caps')) {
                this.classList.toggle('active');
                keyPad.classList.toggle('uppercase');

                capsLockMode ? capsLockMode = false : capsLockMode = true;
                toggleLetterTo(capsLockMode, letters)
            } else if (this.classList.contains('backspace')) {
                let str = display.innerText;
                display.innerText = str.substring(0, (str.length-1));
            } else {
                if (capsLockMode) {
                    display.innerText += this.dataset.key.toUpperCase();
                } else {
                    display.innerText += this.dataset.key.toLowerCase();
                }
            }
        });
    });


}

function toggleLetterTo(isUpercase, letters) {
    letters.forEach(element => {
        console.log(element.innerHTML.toUpperCase())
        if (isUpercase) {
            element.classList.add("uppercased")
        } else {
            element.classList.remove("uppercased")
        }
    });
}