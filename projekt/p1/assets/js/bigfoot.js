function loadBigFoot(){
document.getElementById('bigFoot').src = "assets/images/bigfoot.png"
}

function moveBigFoot(){
    const width = innerWidth
    const height = innerHeight
    alert('Du hittade Bigfoot!');
    var picture = document.getElementById('bigFoot')
    var y = Math.random() * height
    var x = Math.random() * width

    picture.style.top = y +'px'
    picture.style.left = x +'px'

    console.log(width, height);
    
}