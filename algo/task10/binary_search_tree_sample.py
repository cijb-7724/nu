import binary_search_tree

# 二分探索木の生成
bst = binary_search_tree.BinarySearchTree()

# 命令文の説明
# 要素の値は数値に変換しているので、今回は数値で入力すること
print("命令 I 4 6 2 1 3 : 4 6 2 1 3 を挿入")
print("     D 1 2       : 1 2 を削除")
print("     S 1 4       : 1 4 を探索")
print("     Q           : 終了")

# 命令を繰り返し読み取る
while True:
    s = input("命令 : ")
    lst = s.split()

    if lst[0].upper() == "I":
        # 挿入
        for i in range(1, len(lst)):
            bst.add(int(lst[i]))
            print("Add binary seach tree :", lst[i])

        # ツリーの表示
        bst.print_tree()
    elif lst[0].upper() == "D":
        # 削除
        for i in range(1, len(lst)):
            if bst.delete(int(lst[i])):
                print("Delete binary seach tree :", lst[i])
            else:
                print("Not found :", lst[i])

        # ツリーの表示
        bst.print_tree()
    elif lst[0].upper() == "S":
        # 探索
        for i in range(1, len(lst)):
            if bst.search(int(lst[i])):
                print("Contain value :", lst[i])
            else:
                print("Not found :", lst[i])
    elif lst[0].upper() == "Q":
        # 終了
        print("bye")
        break
