const Persona = require('./Persona');

describe('Clase Persona', () => {
    test('debería inicializar con valores por defecto', () => {
        const persona = new Persona();
        expect(persona.nombre).toBe(''); 
        expect(persona.peso).toBe(0.0); 
        expect(persona.altura).toBe(0.0); 
        expect(persona.imc).toBe(0.0); 
    });

    test('debería formatear el peso correctamente', () => {
        const persona = new Persona('Juan', 70, 1.75);
        expect(persona.formatearPeso()).toBe('70 kg'); 
    });

    test('debería formatear la altura correctamente', () => {
        const persona = new Persona('Juan', 70, 1.75);
        expect(persona.formatearAltura()).toBe('1.75 m'); 
    });

    test('debería aceptar valores de nombre, peso y altura', () => {
        const persona = new Persona('Ana', 60, 1.6);
        expect(persona.nombre).toBe('Ana'); 
        expect(persona.peso).toBe(60); 
        expect(persona.altura).toBe(1.6); 
    });

    test('debería permitir valores null para nombre', () => {
        const persona = new Persona(null, 60, 1.6);
        expect(persona.nombre).toBeNull(); 
    });

    test('debería tener una propiedad imc', () => {
        const persona = new Persona();
        expect(persona.imc).toBeDefined(); 
    });

    test('debería ser una instancia de la clase Persona', () => {
        const persona = new Persona();
        expect(persona).toBeInstanceOf(Persona); 
    });

    test('debería tener un nombre truthy', () => {
        const persona = new Persona('Juan', 70, 1.75);
        expect(persona.nombre).toBeTruthy();
    });

    test('debería tener un nombre falsy cuando es una cadena vacía', () => {
        const persona = new Persona('', 70, 1.75);
        expect(persona.nombre).toBeFalsy(); 
    });
});
