function validateNumber(num) {
    if (num < 1 || num > 10) {
        throw new Error("Le nombre doit être entre 1 et 10.");
    }
    return true;
}

module.exports = validateNumber;