"""
🔴Ejercicio difícil: Palíndromo más largo dentro de un texto
Ahora crea una función palindromo_mas_largo(texto: str) -> str que reciba
una cadena de texto y retorne la subcadena más larga que sea un palíndromo.
"""

"""
Ahora vamos a crear una función que detecte solo las vocales
"""

def detectarVocal(letra):
    lista = ["a", "e", "i", "o", "u"]
    valorBoleano = False
    for i in range(len(lista)):
        if letra == lista[i]:
            valorBoleano = True
            break
    return valorBoleano

#print(detectarVocal(letra = "s"))