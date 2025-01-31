function spinalCase(str) {
    const words = str.split(/(?=[A-Z])|\s+|_+/);

    return words.join('-').toLowerCase();
}