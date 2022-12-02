const { generatePassword } = require("./app")

describe('Validacion del generador de password', () => {
    let password = generatePassword(false, true, true, true, 8);
    let mayusculas = /[A-Z]*/;

    test('Validar que password no sea vacio', () => {
        expect(password).not.toBe("");
    })

    test('Validar que password no sea menor a 8 caracteres', () => {
        expect(password.length).not.toBeLessThan(8);
    })

    test('Validar que password contenga mayusculas', () => {
        expect(mayusculas.test(password)).toBeTruthy();
    })

})