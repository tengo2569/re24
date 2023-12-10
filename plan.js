let one = document.querySelectorAll(".one1")
let onep = document.querySelectorAll(".eins")

let two = document.querySelectorAll(".two")
let twop = document.querySelectorAll(".zwei")

let three = document.querySelectorAll(".three")
let threep = document.querySelectorAll(".drei")

let four = document.querySelectorAll(".four")
let fourp = document.querySelectorAll(".vier")

let five = document.querySelectorAll(".five")
let fivep = document.querySelectorAll(".funf")

let pirveli = document.querySelector(".Pirveli")
let meore = document.querySelector(".Meore")
let mesame = document.querySelector(".Mesame")
let meotxe = document.querySelector(".Meotxe")
let mexute = document.querySelector(".Mexute")

let Arrow1 = document.querySelector(".Arrow1")
let Arrow2 = document.querySelector(".Arrow2")
let Arrow3 = document.querySelector(".Arrow3")
let Arrow4 = document.querySelector(".Arrow4")
let Arrow5 = document.querySelector(".Arrow5")

let Button = document.querySelector(".btn3")

let Decaf2 = document.querySelector(".Decaf2")
let Decaf = document.querySelector(".Decaf")
let Checkout = document.querySelector(".Checkout")

turn(Arrow1, one)
turn(Arrow2, two)
turn(Arrow3, three)
turn(Arrow4, four)
turn(Arrow5, five)

color1(one, pirveli, onep)
color1(two, meore, twop)
color1(three, mesame, threep)
color1(four, meotxe, fourp)
color1(five, mexute, fivep)


function turn(Arrow, number) {
    Arrow.addEventListener("click", function () {
        Arrow.classList.toggle("Rotate")
        for (let z = 0; z < number.length; z++) {
            number[z].classList.toggle("Display")
        }
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                Arrow.classList.remove("Rotate")
            }

        }
    })
}


function color1(number, number2, number3) {
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", function () {
            number[i].classList.toggle("Getcyan")
            for (let j = 0; j < number.length; j++) {
                if (j !== i) {
                    number[j].classList.remove("Getcyan")
                }
            }
            if (number[i].classList.contains("Getcyan")) {
                number2.textContent = number3[i].textContent
            } else {
                number2.textContent = "______"
            }

        })
    }
}

Button.addEventListener("click", function () {
    Checkout.classList.add("Display")
    Decaf2.innerHTML = Decaf.innerHTML
})

