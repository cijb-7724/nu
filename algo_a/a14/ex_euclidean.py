def ex_gcd(a, b):
    # 初期値を代入
    # y1 = 0; x1 = 1
    # y2 = 1; x2 = 0
    y1 = 1; x1 = 0
    y2 = 0; x2 = 1

    # b が 0 になるまで繰り返す
    while b != 0:
        (q, r) = divmod(a, b)
        y3 = y2 - q * y1
        x3 = x2 - q * x1
        a, b = b, r
        y2, x2 = y1, x1
        y1, x1 = y3, x3

    return (x2, y2, a)

# 直接実行された場合のみ実行
if __name__ == '__main__':
    print("xa + yb = gcd(a, b)")
    a = int(input("a = "))
    b = int(input("b = "))

    (x, y, g) = ex_gcd(a, b)
    
    print("x={0}, y={1}, GCD={2}".format(x, y, g))
