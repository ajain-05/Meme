const yes = document.getElementById("yes")
const no = document.getElementById("no")

    yes.addEventListener("click",()=>{
        const element = document.createElement('h2');
        element.innerHTML = "You will pass the exam!"
        const parent = document.querySelector("h1")
        parent.insertAdjacentElement("afterend",element)
        setTimeout(()=>{
            element.remove();
        },1500)
    })

    no.addEventListener("mousemove",()=>{
        const x = Math.random() * (window.innerWidth - no.offsetWidth)
        const y = Math.random() * (window.innerHeight - no.offsetHeight)

        no.style.left = `${x}px`
        no.style.top = `${y}px`

    })
