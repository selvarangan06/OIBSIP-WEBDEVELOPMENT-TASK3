function convertTemperature() {

    const value = parseFloat(
        document.getElementById("temp").value
    );

    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    const result = document.getElementById("result");

    if (isNaN(value)) {
        result.textContent = "Enter a valid number";
        return;
    }

    let celsius;

    switch(from){
        case "C":
            celsius = value;
            break;

        case "F":
            celsius = (value - 32) * 5/9;
            break;

        case "K":
            celsius = value - 273.15;
            break;
    }

    let converted;

    switch(to){
        case "C":
            converted = celsius;
            break;

        case "F":
            converted = (celsius * 9/5) + 32;
            break;

        case "K":
            converted = celsius + 273.15;
            break;
    }

    result.innerHTML =
        `${value} °${from} = <br>
        <strong>${converted.toFixed(2)} °${to}</strong>`;
}