import random


def miller_rabin(n, k=64):
    """Miller-Rabin素数判定法

    Args:
        n (int): 判定する素数の値
        k (int): Miller-Rabinの試行回数（未指定の場合は64回）

    Returns:
        bool: 素数であれば True、それ以外は False
    """
    # 奇素数を判定するので2は素数として判定
    # nが2未満の場合、nが偶数の場合は False
    if n == 2:
        return True
    elif n < 2 or n & 1 == 0:
        return False

    # 奇数 t と s を求める
    s = 1
    t = (n - 1) >> 1
    while t & 1 == 0:
        t >>= 1        # t = t >> 1
        s += 1         # s = s + 1

    # k回試行する
    for i in range(k):
        # 2 <= a < n なる整数aを乱数から得る
        a = random.randint(2, n - 1)

        # a^t mod n を計算
        f = pow(a, t, n)

        if f == 1 or f == n - 1:
            # 条件1の判定条件(すべて1の場合)と
            # 条件2の判定条件の r = 0 を一緒に判定する
            continue
        else:
            # 条件2の判定条件の r = 0 は判定済みなので、
            # 残りの 0 < r < s についての判定条件を確認するため
            # 1 から s - 1 まで繰り返す
            for _ in range(1, s):
                # べき剰余 f^2 mod n を計算
                f = pow(f, 2, n)
                if f == n - 1:
                    # 条件が満たされた場合
                    break
                elif f == 1:
                    # -1 が見つかる前に 1 が見つかるときは
                    # 全て 1 のとき以外有り得ないので素数ではない
                    return False
            else:
                # -1 が見つからない場合は素数ではない
                return False

    # nは確率的素数
    return True


if __name__ == '__main__':
    # 素数を判定
    target = int(input("確率的素数を判定する値(>=2) : "))
    print(miller_rabin(target))
