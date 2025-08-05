def calcularTarifas(horas,tipo):
    #Tipo == '0' va a ser para los vehiculos
    if tipo == '0':
        tarifa_hora = 4000
        tarifa_dia = 20000
    #Tipo == '1' va a ser para las motos
    elif tipo == '1':
        tarifa_hora = 2000
        tarifa_dia = 10000
    else:
        return f"Valor {tipo} invalido"
    if horas < 1:
        return 0
    elif horas < 5:
        return int(tarifa_dia * horas)
    else:
        diaCompleto = int(horas//24)
        horasRestantes = int(horas % 24)
        if diaCompleto < 1:
            return diaCompleto*tarifa_dia
        elif horasRestantes < 5:
            return diaCompleto*tarifa_dia + horasRestantes*tarifa_hora
        else:
            return (diaCompleto+1)*tarifa_dia

print(calcularTarifas(36,'0'))