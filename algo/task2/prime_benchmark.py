# Benchmarker を使うときは Windows PowerShell から
# 「pip install Benchmarker」を実行してパッケージを導入しておく
# 注）1度導入しておけば良い！

from benchmarker import Benchmarker
import trialdivision
import eratosthenes

# 繰り返しの数を文字列から整数に直して取得
n = int(input("素数を判定する範囲 = "))

# 先頭への挿入のベンチマーク
with Benchmarker(n, width=25) as bench:
    @bench("trialdivision")
    def _(bm):
        trialdivision.trial_division(n)

    @bench("eratosthenes")
    def _(bm):
        eratosthenes.sieve_eratosthenes(n)
