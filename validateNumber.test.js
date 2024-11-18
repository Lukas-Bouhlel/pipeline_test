const validateNumber = require('./index');

describe("Test de validation de nombre entre 1 et 10", () => {
    test("Renvoie true pour un chiffre valide", () => {
        expect(validateNumber(5)).toBe(true);
    });

    test("Lève une erreur pour un chiffre inférieur à 1", () => {
        expect(() => validateNumber(0)).toThrow("Le nombre doit être entre 1 et 10.");
    });

    test("Lève une erreur pour un chiffre supérieur à 10", () => {
        expect(() => validateNumber(11)).toThrow("Le nombre doit être entre 1 et 10.");
    });

    test("Renvoie true pour les bornes incluses (1 et 10)", () => {
        expect(validateNumber(1)).toBe(true); 
        expect(validateNumber(10)).toBe(true);
    });
});
