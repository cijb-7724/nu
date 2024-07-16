from benchmarker import Benchmarker
import fibonacci1

# 第n項の値
n = int(input("n = "))

# フィボナッチ数列のベンチマーク
with Benchmarker(n, width=25) as bench:
    # 再帰
    @bench("Recursive")
    def _(bm):
        fibonacci1.fibonacci(n)

