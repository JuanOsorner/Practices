def calcularTarifas(horas,tipo):
    if tipo == '0':
        if horas < 1:
            return 0
        elif horas < 5:
            return 4000*horas
        elif horas < 24:
            return 20000
        else:
            valor = 20000
            if int(horas) % 24 != 0:
               valor = valor + 4000*(int(horas) % 24)
            return valor