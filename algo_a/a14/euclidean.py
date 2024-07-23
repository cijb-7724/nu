def gcd(a, b):
    if a < b:
        a, b = b, a
    while b != 0:
        r = a % b
        a, b = b, r
    return a

def rgcd(a, b):
    if a < b:
        a, b = b, a
    if b == 0:
        return a
    return rgcd(b, a % b)


if __name__ == '__main__':
    print("gcd(a, b)")
    a = int(input("a = "))
    b = int(input("b = "))
    
    print("ユークリッドの互除法")
    print(gcd(a, b))
    
    print("再帰版")
    print(rgcd(a, b))
    
    print("Python 数学関数モジュール版")
    import math
    print(math.gcd(a, b))
