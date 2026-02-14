// let gr1, gr2, gr3;

// function groceryAmount(){
//     gr1 = parseFloat(document.getElementById("grocery-1").value);
//     gr2 = parseFloat(document.getElementById("grocery-2").value);
//     gr3 = parseFloat(document.getElementById("grocery-3").value);

//     Total = gr1 + gr2 + gr3;

//     document.getElementById('result').innerText = `The total amount is: ${Total}`;
// }

// Generate input boxes
document.getElementById("generate-btn").addEventListener("click", function () {
    const n = document.getElementById("grocery-count").value;
    const container = document.getElementById("grocery-inputs");

    container.innerHTML = ""; // clear old inputs

    for (let i = 1; i <= n; i++) {
        container.innerHTML += `
            <label>Enter grocery-${i} Amount: </label>
            <input type="number" class="grocery"><br><br>
        `;
    }
});


// Calculate total
document.getElementById("calculate-btn").addEventListener("click", function () {

    const groceries = document.getElementsByClassName("grocery");
    let total = 0;

    for (let i = 0; i < groceries.length; i++) {
        total += parseFloat(groceries[i].value) || 0;
    }

    document.getElementById("result").innerText =
        `The total amount is: ${total}`;
});
