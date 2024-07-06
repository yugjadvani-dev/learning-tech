# num = 5 // 5*4*3*2*1 = 120 is factorial number
number = 5
factorial = 1

while number > 0:
    # factorial =  factorial * number
    # number = number - 1

    factorial *= number
    number -= 1

print("factorial is", factorial)