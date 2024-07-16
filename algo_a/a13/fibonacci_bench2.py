from benchmarker import Benchmarker
import fibonacci2
import fibonacci3

# 第n項の値
n = int(input("n = "))

# フィボナッチ数列のベンチマーク
with Benchmarker(n, width=25) as bench:
    # 数え上げ
    @bench("Loop")
    def _(bm):
        fibonacci2.fibonacci(n)

    # 行列
    @bench("Matrix")
    def _(bm):
        fibonacci3.fibonacci(n)
