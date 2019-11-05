const isAlphabet = x =>{
    const letters = (new Array(26))
        .fill(null)
        .map((_,i) => String.fromCodePoint(i+97))
        .join("")
    const capLetters = letters.split("").map(s => s.toUpperCase()).join("")
    return (letters+capLetters).indexOf(x) !== -1
}

console.log(["a", "B", "*", "-", "yy", "t.", "o", "Nn"].map(isAlphabet))