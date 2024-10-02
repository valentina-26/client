class Encriptacion {
    constructor() {
        this.encriptacionMap = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        this.desencriptacionMap = Object.fromEntries(
            Object.entries(this.encriptacionMap).map(([key, value]) => [value, key])
        );
    }
  
    encriptar(texto) {
        if (typeof texto !== 'string') {
            throw new Error('La entrada debe ser una cadena de texto');
        }
        return texto.replace(/[eiaou]/g, letra => this.encriptacionMap[letra]);
    }
  
    desencriptar(textoEncriptado) {
        if (typeof textoEncriptado !== 'string') {
            throw new Error('La entrada debe ser una cadena de texto');
        }
        const patron = new RegExp(Object.keys(this.desencriptacionMap).join('|'), 'g');
        return textoEncriptado.replace(patron, match => this.desencriptacionMap[match]);
    }
  }
  
  module.exports = Encriptacion;