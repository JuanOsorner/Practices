from datetime import datetime

# Lista para mantener el historial de actividades
historial = []

# Función para agregar un registro al historial
def agregar_a_historial(historial, placa, tipo, hora_entrada, hora_salida, tarifa):
    registro = {
        "placa": placa,
        "tipo": tipo,
        "hora_entrada": hora_entrada,
        "hora_salida": hora_salida,
        "tarifa": tarifa
    }
    historial.append(registro)

# Función para generar un informe en pantalla
def generar_informe(historial):
    print("=== INFORME DE ACTIVIDADES ===")
    if not historial:
        print("No hay registros en el historial.")
    for registro in historial:
        print(f"Placa: {registro['placa']}")
        print(f"Tipo: {registro['tipo']}")
        print(f"Hora Entrada: {registro['hora_entrada']}")
        print(f"Hora Salida: {registro['hora_salida']}")
        print(f"Tarifa: ${registro['tarifa']:.2f}")
        print("-" * 30)

# Función para exportar el informe a un archivo de texto
def exportar_informe(historial, nombre_archivo="informe.txt"):
    with open(nombre_archivo, "w") as archivo:
        archivo.write("=== INFORME DE ACTIVIDADES ===\n")
        if not historial:
            archivo.write("No hay registros en el historial.\n")
        for registro in historial:
            archivo.write(f"Placa: {registro['placa']}\n")
            archivo.write(f"Tipo: {registro['tipo']}\n")
            archivo.write(f"Hora Entrada: {registro['hora_entrada']}\n")
            archivo.write(f"Hora Salida: {registro['hora_salida']}\n")
            archivo.write(f"Tarifa: ${registro['tarifa']:.2f}\n")
            archivo.write("-" * 30 + "\n")
    print(f"Informe exportado correctamente como '{nombre_archivo}'")

# ================================
# Simulación de uso del sistema
# ================================

# Puedes usar datetime.now().strftime("%H:%M") para hora actual
agregar_a_historial(historial, "ABC123", "Carro", "08:00", "10:00", 5000)
agregar_a_historial(historial, "XYZ789", "Moto", "09:30", "11:15", 3000)
agregar_a_historial(historial, "LMN456", "Camioneta", "07:45", "12:30", 7000)

# Mostrar informe en consola
generar_informe(historial)

# Exportar informe a archivo de texto
exportar_informe(historial)
