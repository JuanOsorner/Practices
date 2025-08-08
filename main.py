# main.py

def registrar_entrada(parqueadero, capacidad_carros, capacidad_motos):
    # Solicitar placa
    placa = input("Ingrese la placa del vehículo: ").strip().upper()
    if not placa:
        print("Placa vacía. Cancelando registro.")
        return

    # Solicitar tipo
    tipo = input("Ingrese el tipo de vehículo (Carro/Moto): ").strip().capitalize()
    if tipo not in ("Carro", "Moto"):
        print("Tipo inválido. Debe ser 'Carro' o 'Moto'.")
        return

    # Validar formato de placa según tipo
    if tipo == "Carro" and placa[-1].isalpha():
        print("❌ Error: la placa ingresada corresponde al formato de una moto (termina en letra).")
        return
    elif tipo == "Moto" and placa[-1].isdigit():
        print("❌ Error: la placa ingresada corresponde al formato de un carro (termina en número).")
        return

    # Contar cuántos carros y motos hay actualmente
    total_carros = sum(1 for v in parqueadero if v["datos"][1] == "Carro")
    total_motos = sum(1 for v in parqueadero if v["datos"][1] == "Moto")

    # Verificar capacidad según el tipo
    if tipo == "Carro" and total_carros >= capacidad_carros:
        print("🚫 No hay espacio disponible para más carros.")
        return
    elif tipo == "Moto" and total_motos >= capacidad_motos:
        print("🚫 No hay espacio disponible para más motos.")
        return

    # Solicitar hora de entrada
    hora_entrada = input("Ingrese la hora de entrada (HH:MM): ").strip()
    if not hora_entrada:
        hora_entrada = "00:00"

    # Validar si el vehículo ya está registrado
    for vehiculo in parqueadero:
        if vehiculo["datos"][0] == placa:
            print("⚠️ El vehículo ya está registrado en el parqueadero.")
            return

    # Crear tupla con los datos inmutables (placa, tipo)
    datos_vehiculo = (placa, tipo)

    # Crear diccionario con la información y agregar a la lista
    vehiculo_dict = {
        "datos": datos_vehiculo,
        "hora_entrada": hora_entrada
    }

    parqueadero.append(vehiculo_dict)
    print(f"✅ Vehículo {placa} ({tipo}) registrado exitosamente a las {hora_entrada}.")


def mostrar_vehiculos(parqueadero):
    if not parqueadero:
        print("📭 No hay vehículos registrados.")
        return
    print("\n🚗 Vehículos en el parqueadero:")
    for i, vehiculo in enumerate(parqueadero, 1):
        placa, tipo = vehiculo["datos"]
        hora = vehiculo["hora_entrada"]
        print(f"{i}. {placa} - {tipo} - Hora de entrada: {hora}")


def main():
    # 🔹 Capacidades editables
    capacidad_carros = 20
    capacidad_motos = 80

    parqueadero = []

    while True:
        print("\n===== MENÚ PARQUEADERO =====")
        print("1. Registrar entrada")
        print("2. Mostrar vehículos")
        print("3. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            registrar_entrada(parqueadero, capacidad_carros, capacidad_motos)
        elif opcion == "2":
            mostrar_vehiculos(parqueadero)
        elif opcion == "3":
            print("👋 Saliendo del sistema...")
            break
        else:
            print("❌ Opción inválida, intente nuevamente.")


if __name__ == "__main__":
    main()
