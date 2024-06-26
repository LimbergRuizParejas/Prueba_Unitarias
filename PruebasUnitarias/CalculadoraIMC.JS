class CalculadoraIMC {
    calcularIMC(peso, altura) {
        if (altura <= 0) {
            throw new Error("La altura debe ser mayor que cero");
        }
        if (peso < 0) {
            throw new Error("El peso no puede ser negativo");
        }
        return peso / (altura * altura);
    }

    obtenerRangoIMC(imc) {
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc < 25) {
            return "Saludable";
        } else if (imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }
}

module.exports = CalculadoraIMC;
