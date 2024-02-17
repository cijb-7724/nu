def ex_gcd(a, b):
    """拡張ユークリッドの互除法

    a > 0 , b > 0 に対して xa + yb = gcd(a, b) となる x, y, gcd(a, b) を求める。

    Args:
        a (int): 正の整数x
        b (int): 正の整数y

    Returns:
        (int, int, int): x, y, gcd(a, b) のタプル型
    """
    # a が b より小さいとき a と b を入れ替える作業は、
    # while文で1度ループすることで入れ替わる

    # 初期値として単位行列を代入
    y1 = 1; x1 = 0
    y2 = 0; x2 = 1

    # b が 0 になるまで繰り返す
    while b != 0:
        # q は商、rは余りである
        # divmod(a, b) は (a // b, a % b) と同じ結果である
        (q, r) = divmod(a, b)

        # 行列の計算
        y3 = y2 - q*y1
        x3 = x2 - q*x1
        a, b = b, r         # a = b; b = r
        y2, x2 = y1, x1     # y2 = y1; x2 = x1
        y1, x1 = y3, x3     # y1 = y3; x1 = x3

    # a が最大公約数
    return (x2, y2, a)


# 直接実行された場合のみ実行
if __name__ == '__main__':
    # 値の入力
    print("xa + yb = gcd(a, b)")
    a = int(input("a = "))
    b = int(input("b = "))

    # 拡張ユークリッドの互除法を計算
    (x, y, g) = ex_gcd(a, b)

    # 拡張ユークリッドの互除法の出力
    print("x={0},y={1},GCD={2}".format(x, y, g))
