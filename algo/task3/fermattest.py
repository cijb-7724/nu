import math
import random

# フェルマーテストの試行回数
FERMAT_COUNT = 100


def fermat_test(n, count=FERMAT_COUNT):
    """フェルマーテストによる素数判定

    Args:
        n (int): 判定する素数の値
        count (int): フェルマーテストの試行回数(デフォルト100）

    Returns:
        bool: 確率的素数の場合はTrue、それ以外はFalse
    """
    # nが2未満の場合はFalse
    if n < 2:
        return False

    # 指定された回数だけ繰り返す
    for i in range(count):
        # 2以上n未満の整数aを1つ決める
        a = random.randint(2, n - 1)

        # aとnが互いに素ではないときは次の数を確認する
        while math.gcd(a, n) != 1:
            a = random.randint(2, n - 1)

        # a**(n - 1) mod n の答えが1以外ならnは合成数である
        if pow(a, n - 1, n) != 1:
            return False

    # nは確率的素数
    return True


if __name__ == '__main__':
    # 素数を判定
    target = int(input("確率的素数を判定する値(>=2) : "))
    print(fermat_test(target))
