# 機密を扱うために安全な乱数を生成するモジュール
import secrets

# 作成したMiller-Rabin法を読み込む
import millerrabin


def prime_checks_for_size(b):
    """ビット数からMiller-Rabinの試行回数を返す

    Args:
        b (int): ビット数

    Returns:
        int: 試行回数
    """
    if b > 2048:
        return 128
    else:
        return 64


def generate_prime(b=1024):
    """指定されたビット数の素数を生成

    Args:
        b (int): ビット数（未指定の場合は1024bit）

    Returns:
        int: 指定されたビット数の素数
    """
    # ビット数から試行回数を取得
    k = prime_checks_for_size(b)

    # 奇数となる指定ビット数の乱数を生成して
    # 素数が見つかるまで繰り返す
    while True:
        # 先頭ビットを1にセット
        i = 1

        # 先頭と末尾の間のビットをランダムに生成する。
        for j in range(b - 2):
            i <<= 1                     # i = i << 1
            i |= secrets.randbelow(2)   # i = i | 0または1の乱数

        # 末尾ビットを1にセット
        i <<= 1                         # i = i << 1
        i |= 1                          # i = i | 1

        # 直接呼び出されたときは生成過程の乱数を表示
        if __name__ == '__main__':
            print(i)

        # Miller-Rabin素数判定法で確認
        if millerrabin.miller_rabin(i, k):
            # 見つけたら停止して値を返す
            break

    return i


if __name__ == '__main__':
    # 素数を生成して表示する
    bit = int(input("生成する素数のビット数 : "))
    prime = generate_prime(bit)
    print("---- Prime ----")
    print(prime)
