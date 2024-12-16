// script.js
function solveQuadratic() {
    // Get the values of a, b, and c from the input fields
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // Check if a, b, and c are valid numbers
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for a, b, and c.";
        return;
    }

    // Calculate the discriminant (b^2 - 4ac)
    let discriminant = (b * b) - (4 * a * c);

    // Check if the discriminant is positive, negative, or zero
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").innerHTML = `Roots are real and different. Root 1: ${root1}, Root 2: ${root2}`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        document.getElementById("result").innerHTML = `Roots are real and the same. Root: ${root}`;
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        document.getElementById("result").innerHTML = `Roots are complex. Root 1: ${realPart} + ${imaginaryPart}i, Root 2: ${realPart} - ${imaginaryPart}i`;
    }
}
