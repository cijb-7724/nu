def bits_list(i):
    """下位ビットからビットの値をリスト型のスタックとして保存

    Args:
        i (int): ビットを取り出す整数

    Returns:
        list[int]: ビット列のリスト
    """
    # リストの初期化
    bits = []

    # 引数の値を右端のビットから
    # 繰り返し取得してスタックに入れる
    while i != 0:
        # 1ビット目の値をpush
        bits.append(i & 1)

        # 左にビットシフト
        i = i >> 1

    return bits


def upower(base, exponent, modulo=None):
    """上位ビット(Left-to-right)からべき乗余を求める

    Args:
        base (int): 底
        exponent (int): 指数(整数)
        modulo (int): 正の整数（法）

    Returns:
        int or float: 累乗・べき乗、moduloが指定されているときはべき乗余
    """
    # 第3引数が指定されている場合は、
    # 指数が負のときはエラーとする
    if modulo is not None and exponent < 0:
        raise ValueError("upower() 2nd argument cannot be negative "
                         + "when 3rd argument specified")

    # 指数の正の値を取る
    abs_ex = abs(exponent)

    # 解を1に初期化(0に何を掛けても0になるのを避ける)
    power = 1

    # ビットのスタックを取得
    bits = bits_list(abs_ex)

    # 余りを求める指定が無ければべき乗を求める
    if modulo is None:
        # 先頭ビットから計算する
        while len(bits) > 0:
            power *= power      # power = power * power
            if bits.pop() == 1:
                power *= base   # power = power * base

        # 指数が負の場合
        if exponent < 0:
            power = 1/power
    else:
        # 底に剰余を求めておく
        base_modulo = base % modulo

        # 先頭ビットから計算する
        while len(bits) > 0:
            power = (power * power) % modulo
            if bits.pop() == 1:
                power = (power * base_modulo) % modulo

    return power


def lpower(base, exponent, modulo=None):
    """下位ビット(Right-to-left)から累乗を求める

    Args:
        base (int): 底
        exponent (int): 指数(整数)
        modulo (int): 正の整数（法）

    Returns:
        int or float: 累乗・べき乗、moduloが指定されているときはべき乗余
    """
    # 第3引数が指定されている場合は、
    # 指数が負のときはエラーとする
    if modulo is not None and exponent < 0:
        raise ValueError("upower() 2nd argument cannot be negative "
                         + "when 3rd argument specified")

    # 指数の正の値を取る
    abs_ex = abs(exponent)

    # 解を1に初期化(0に何を掛けても0になるのを避ける)
    power = 1

    # 余りを求める指定が無ければべき乗を求める
    if modulo is None:
        # 指数が0になるまで繰り返す
        while abs_ex != 0:
            # 指数の1bit目が1か確認
            if abs_ex & 1:
                # 指数の1bit目が1の場合、
                # 解に底の1乗, 2乗, 4乗,・・・の値を掛ける
                power *= base   # power = power * base

            # 底の2乗, 4乗, 8乗, 16乗,・・・の値を計算
            base *= base        # base = base * base

            # 指数の値を1bit右にシフト
            abs_ex >>= 1        # abs_ex = abs_ex >> 1

        # 指数が負の場合
        if exponent < 0:
            power = 1/power
    else:
        # 指数が0になるまで繰り返す
        while abs_ex != 0:
            # 指数の1bit目が1か確認
            if abs_ex & 1:
                # 指数の1bit目が1の場合、
                # 解に底の1乗, 2乗, 4乗,・・・の値を掛ける
                power = (power * base) % modulo

            # 底の2乗, 4乗, 8乗, 16乗,・・・の値を計算
            base = (base * base) % modulo

            # 指数の値を1bit右にシフト
            abs_ex >>= 1        # abs_ex = abs_ex >> 1

    return power


# 直接実行された場合のみ実行
if __name__ == '__main__':
    # 動作テスト
    print("3**7 = ", upower(3, 7), lpower(3, 7), pow(3, 7))
    print("4**5 = ", upower(4, 5), lpower(4, 5), pow(4, 5))
    print("3**-7 = ", upower(3, -7), lpower(3, -7), pow(3, -7))
    print("4**-5 = ", upower(4, -5), lpower(4, -5), pow(4, -5))
    print("3**7 % 5 = ", upower(3, 7, 5), lpower(3, 7, 5), pow(3, 7, 5))
    print("4**5 % 6 = ", upower(4, 5, 6), lpower(4, 5, 6), pow(4, 5, 6))
