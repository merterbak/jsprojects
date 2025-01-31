function pairElement(str) {
    const pairsDNA = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    return str.split("").map(character => [character, pairsDNA[character]]);
}