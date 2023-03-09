function sumtable() {
    let number = document.getElementById("txtnumber")
    let table = document.getElementById("selectsumtable")

    if (number.value.length == 0) {
        alert("Please, enter a number!")
    } else {
        let num = Number(number.value)
        let i = 1
        table.innerHTML = ""
        while (i <= 10) {
            let item = document.createElement("option")
            item.text = `${num} + ${i} = ${num + i}`
            table.appendChild(item)
            i++
        }
    }
}

function subtractiontable() {
    let number = document.getElementById("txtnumber")
    let table = document.getElementById("selectsubtractiontable")

    if (number.value.length == 0) {
        alert("Please, enter a number!")
    } else {
        let num = Number(number.value)
        let i = 1
        table.innerHTML = ""
        while (i <= 10) {
            let item = document.createElement("option")
            item.text = `${num} - ${i} = ${num - i}`
            table.appendChild(item)
            i++
        }
    }
}

function multiplicationtable() {
    let number = document.getElementById("txtnumber")
    let table = document.getElementById("selectmultiplicationtable")

    if (number.value.length == 0) {
        alert("Please, enter a number!")
    } else {
        let num = Number(number.value)
        let i = 1
        table.innerHTML = ""
        while (i <= 10) {
            let item = document.createElement("option")
            item.text = `${num} * ${i} = ${num * i}`
            table.appendChild(item)
            i++
        }
    }
}

function divisiontable() {
    let number = document.getElementById("txtnumber")
    let table = document.getElementById("selectdivisiontable")

    if (number.value.length == 0) {
        alert("Please, enter a number!")
    } else {
        let num = Number(number.value)
        let i = 1
        table.innerHTML = ""
        while (i <= 10) {
            let item = document.createElement("option")
            item.text = (`(${num} / ${i} = ${(num / i).toFixed(2)}`)
            table.appendChild(item)
            i++
        }
    }
}