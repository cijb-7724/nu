import euclidean

def lcm(a, b):
    return a*b/euclidean.gcd(a, b)

if __name__ == '__main__':
    print("LCM(a, b)")
    a = int(input("a = "))
    b = int(input("b = "))
    
    print(lcm(a, b))
    