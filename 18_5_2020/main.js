const h1 = document.querySelector('h1:nth-child(2)')

h1.style.color = 'green'

function tonggColor() {
    const color = h1.style.color 
        if (color ==='red')
            h1.style.color='green'
        else 
            h1.style.color='red'
}