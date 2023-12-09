
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeColor() {
     

    let color13=document.body;
    color13.style.backgroundColor=getRandomColor();
}

// Set interval to change color every 1000 milliseconds (1 second)
setInterval(changeColor, 2000);