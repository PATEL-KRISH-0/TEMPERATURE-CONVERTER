const output = document.querySelector(".output");
const submit = document.querySelector(".Submit");

submit.addEventListener("click", () => {
    output.innerHTML = ""
    const number = document.getElementById("number").value
    let celsius = (5 / 9)*(number - 32)
    output.innerHTML = `Celsius = ${celsius}`
})


