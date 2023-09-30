const output = document.querySelector(".output");
const submit = document.querySelector(".Submit");

submit.addEventListener("click", () => {
    output.innerHTML = ""
    const number = document.getElementById("number").value
    let fahrenheit = number * (9 / 5) + 32
    output.innerHTML = `fahrenheit = ${fahrenheit}`
})


