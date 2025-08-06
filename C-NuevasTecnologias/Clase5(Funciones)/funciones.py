# pass hace que la función no haga nada
def saludar():
    pass
def validarPalin(text):
    #Vamos a recorrer un texto en python
    textl = text.lower()
    list1 = []
    list2 = []
    for letter in textl:
        list1.append(letter)
    for i in range(1, len(list1)+1):
        list2.append(list1[-i])
    if list1 == list2:
        return True
    else:
        return False

print(validarPalin(text = "Amor"))