def esta_registrado(parqueadero, placa):
    return placa in parqueadero

def hay_espacio(parqueadero, capacidad_maxima):
    return len(parqueadero) < capacidad_maxima

if __name__ == '__main__':


    parqueadero = ["ABC313", "XYT789", "JFK301"]
    capacidad_maxima = 3

    print(esta_registrado(parqueadero,"ABC313"))
    print(esta_registrado(parqueadero, "MXC456"))

    print(hay_espacio(parqueadero, capacidad_maxima))