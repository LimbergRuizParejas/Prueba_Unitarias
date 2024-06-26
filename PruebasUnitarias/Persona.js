class Persona {
    constructor(nombre = '', peso = 0.0, altura = 0.0, imc = 0.0) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.imc = imc;
    }

    formatearPeso() {
        return `${this.peso} kg`;
    }

    formatearAltura() {
        return `${this.altura} m`;
    }
}

module.exports = Persona;


