const expect = require('chai').expect
const platzom = require('..').default
//.default permite que babel tanspile la funcion
//('..') va a requerir el modulo que esta arriba
//guiandose por el package.json, veificando cual es el main
//en este caso dist/src/platzoniano.js

describe('#platzom', function () {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
    const translation = platzom("Programar") //palabra a evaluar en la funcion
    expect(translation).to.equal("Program") //resultado que debemos obtener
    //expect es la propiedad que nos indica que valor esperamos
    //evaluamos la variable
    //y preguntamos si es igual ->.to.equal(valor esperado)
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayÃºsculas y minÃºsculas', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})

//mocha para correr los tests
//chai para orientar acerca de los reultados que debe arrojar la funcion
//npm test