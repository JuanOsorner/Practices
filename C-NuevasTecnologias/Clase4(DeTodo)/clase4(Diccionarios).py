estudiantes = {
    #key-----------value
    'id': 1234567,
    'nombre': "johnier",
    'edad': 17,
    'asignaturas': ["hmtl","baseDatos","Logica"]
}
print(estudiantes)
print(f"\nAsignaturas cursadas: {estudiantes["asignaturas"]}")
#Se puede agregar una key nueva
estudiantes["Barrio:"]="Antioquia"
estudiantes["nombre"]="Valentina"
print(estudiantes)
"""for llave in estudiantes.keys():
    #Imprimimos el diccionario
    print(f"{}")"""

for llave, valor in estudiantes.items():
    print(f"{llave}: {valor}")