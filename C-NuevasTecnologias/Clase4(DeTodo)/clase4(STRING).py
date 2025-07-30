#Importamos la libreria
import re
#Hoy vamos a trabajar con strings
mensaje = "Jonier es gay"
print(f"El tamaño del mensaje es: {len(mensaje)}")
#len --> toma el tamaño del string incluyendo los espacios
print(f"\nTomamos el texto en mayuscula: {mensaje.upper()}")
print(f"\nTomamos el texto en minuscula: {mensaje.lower()}")
print(f"\nPonemos la primera letra de cada palabra en mayuscula {mensaje.title()}")
espacios = "Jonier   es    gay"
print(f"\n{len(espacios)}")
#Investigar sobre el strip