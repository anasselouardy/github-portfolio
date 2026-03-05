const words = [

"IT Infrastructure Engineer",
"Network Specialist",
"System Administrator",
"VoIP Engineer"

]

let i = 0
let j = 0
let current = ""
let deleting = false

function type(){

current = words[i]

document.querySelector(".typing").textContent =
current.substring(0,j)

if(!deleting && j++ === current.length){

deleting = true
setTimeout(type,1000)
return

}

if(deleting && j-- === 0){

deleting = false
i = (i+1)%words.length

}

setTimeout(type,deleting?50:100)

}

type()
