def lpower(base, exponent):
    abs_ex = abs(exponent)
    power = 1
    while abs_ex != 0:
        if abs_ex & 1:
            power *= base
        base *= base
        abs_ex = abs_ex >> 1
    
    if exponent < 0:
        power = 1/power
    return power

print('3**7 = ', lpower(3, 7), pow(3, 7))
print('4**5 = ', lpower(4, 5), pow(4, 5))
print('3**(-7) = ', lpower(3, -7), pow(3, -7))
print('4**(-5) = ', lpower(4, -5), pow(4, -5))
