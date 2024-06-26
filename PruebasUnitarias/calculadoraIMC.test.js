const CalculadoraIMC = require("./CalculadoraIMC.JS");


describe('Clase CalculadoraIMC', () => {
    const calculadora = new CalculadoraIMC();

    test('debería calcular el IMC correctamente', () => {
        const imc = calculadora.calcularIMC(68, 1.65);
        expect(imc).toBeCloseTo(24.98, 2); 
    });

    test('debería lanzar un error si la altura es menor o igual a 0', () => {
        expect(() => calculadora.calcularIMC(68, 0)).toThrow("La altura debe ser mayor que cero"); 
    });

    test('debería retornar "Bajo peso" para IMC < 18.5', () => {
        expect(calculadora.obtenerRangoIMC(17)).toBe("Bajo peso"); 
    });

    test('debería retornar "Saludable" para IMC entre 18.5 y 24.9', () => {
        expect(calculadora.obtenerRangoIMC(22)).toBe("Saludable"); 
    });

    test('debería retornar "Sobrepeso" para IMC entre 25 y 29.9', () => {
        expect(calculadora.obtenerRangoIMC(27)).toBe("Sobrepeso"); 
    });

    test('debería retornar "Obesidad" para IMC >= 30', () => {
        expect(calculadora.obtenerRangoIMC(32)).toBe("Obesidad"); 
    });

    test('debería retornar "Obesidad" para IMC exactamente igual a 30', () => {
        expect(calculadora.obtenerRangoIMC(30)).toBe("Obesidad"); 
    });

    test('debería verificar que el IMC es truthy cuando se calcula correctamente', () => {
        const imc = calculadora.calcularIMC(68, 1.65);
        expect(imc).toBeTruthy(); 
    });

    test('debería verificar que un valor undefined es falsy', () => {
        let undefinedValue;
        expect(undefinedValue).toBeFalsy(); 
    });

    test('debería lanzar un error si el peso es negativo', () => {
        expect(() => calculadora.calcularIMC(-68, 1.65)).toThrow("El peso no puede ser negativo"); 
    });

    test('debería contener "peso" en la lista de palabras', () => {
        const palabras = ["peso", "altura", "imc"];
        expect(palabras).toContain("peso"); 
    });

    test('debería tener una longitud de 3 en la lista de palabras', () => {
        const palabras = ["peso", "altura", "imc"];
        expect(palabras).toHaveLength(3); 
    });

    test('debería coincidir con la expresión regular', () => {
        const mensaje = "El IMC es correcto";
        expect(mensaje).toMatch(/IMC/); 
    });
});
