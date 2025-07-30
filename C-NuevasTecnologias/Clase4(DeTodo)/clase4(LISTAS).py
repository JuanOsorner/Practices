estudiantes = [
    "Yeison",
    "Denis",
    "Luis",
    "Anderson"
]
print(estudiantes)
print(f"El tamaño de la lista es: {len(estudiantes)}")
print(f"Posicion del estudiante 2: {estudiantes[2]}")
estudiantes[2] = "1"
print(estudiantes)
#Primero se ordena y luego se imprime
estudiantes.sort()
print(estudiantes)