function gO() {
    let a = document.getElementById("flower")
    let number = parseInt(a.value)
    if (number <10 || number >20) {
        alert("Errol !!!")
    }
    else if (number>10 && number <20) {
        alert("success")
    } 
    let count = 0;
    let pic_container = document.getElementById('pic_content')
    pic_container.innerHTML = ""
    
    let showFlower = setInterval(function () {
        image = document.createElement('img')

        if (count>=number) {
            clearInterval(showFlower)
            return
        }
        image.src="/flower.jpg"
        image.className = "img"
        pic_container.appendChild(image)

        count++
    },1000)
} 