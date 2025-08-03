import random

k = random.randint(1,10)

print(f"El numero aleatorio es {k}")

V = []
for i in range(k):
    V.append(random.randint(-100,100))

print(f"\nEl vector aleatorio es {V}")

#--------------------------------------

def subArreglo(A,n):
    Vcontiguo=[]
    for j in range(n+1):
        Vcontiguo.append(A[j])
    return Vcontiguo

def Sumar(B):
    suma = 0
    for p in range(len(B)):
        suma = suma + int(B[p])
    return suma

#Sacar la maxima componente de un vector

def maxSuma(D):
    numero2 = 0
    salida = 0
    for u in range(len(D)):
        valor = 0
        v = 0
        numero1 = int(D[u])
        while numero1 >= numero2:
            numero2 = int(D[v])
            v = v + 1
            valor = valor + 1
            if valor == len(D):
                salida = numero1
                break
    return salida

W =[]
for l in range(k):
    Vector1 = subArreglo(V,l)
    print(f"\nContiguo a: {l} el vector es: {Vector1}")
    W.append((Sumar(Vector1)))

# Saquemos el maximo
print(f"\nEl vector suma es: {W}")
print(f"\nLa suma maxima es: {maxSuma(W)}")