import random

"""
---------------------------------------------------------------------
Podemos empezar en un numero recorrer el for de la siguiente manera:

for(1,11,3): 

1 4 7 10 
-------------------------------------------------------------------
--------------------------------------------------------------------
Podemos definir variables en una sola linea: 

variable1, variable2 = 0, 0
--------------------------------------------------------------------
"""

V = []

for i in range(10):
    V.append(random.randint(-10, 10))

print(f"\nEl vector inicial es: {V}\n")


def subArreglo(vector, index):
    W = []
    for j in range(index):
        W.append(vector[j])
    return W


def arregloMulti(Vector):
    multi = 1
    for p in range(len(Vector)):
        multi = multi * int(Vector[p])
    return multi


U = []

for n in range(len(V)):
    print(f"{n} 👉 {subArreglo(V, (n + 1))} 👉 {arregloMulti(subArreglo(V, n + 1))}")
    U.append(arregloMulti(subArreglo(V, n+1)))

print(f"\nEl vector productos es: {U}")

def MaxArray(Vect):
    maximo = 0
    for q in range(len(Vect)):
        puntos = 0
        maximo = Vect[q]
        while maximo >= Vect[puntos]:
            puntos += 1
            if puntos == len(Vect):
                break
        if puntos == len(Vect):
            break
    return maximo

print(f"\nEl maximo producto es: {MaxArray(U)}")