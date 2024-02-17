from benchmarker import Benchmarker
import random
import python_search
import sequential_search
import binary_search
# import binary_search_tree

# 二分探索木の生成
# bst = binary_search_tree.BinarySearchTree()

# 探索する数値の範囲を指定
n = int(input("探索するデータの範囲(0以上n未満)のnを指定 = "))

# 探索する数値を指定
key = int(input("探索する値を指定(0以上{0}未満) = ".format(n)))

# 探索するデータのリストを生成して、リストをランダムに入れ替える
lst = list(range(0, n))
random.shuffle(lst)

# 二分探索木のデータを生成
# この生成に時間がかかる。
# for i in range(0, n):
#     bst.add(lst[i])

# 探索のベンチマーク
with Benchmarker(n, width=32) as bench:
    @bench("python_search")
    def _(bm):
        python_search.python_search(lst, key)

    @bench("sequential_search")
    def _(bm):
        sequential_search.sequential_search(lst, key)

    @bench("binary_search")
    def _(bm):
        binary_search.binary_search(lst, key)

# 二分探索木の探索は速すぎて結果が0秒となるため、
# ベンチマークの比較対象としない。
#    @bench("binary_search_tree")
#    def _(bm):
#        bst.search(key)
