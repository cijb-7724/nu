from binary_search_node import BinaryNode

# 再帰の深さを指定
import sys
sys.setrecursionlimit(10000)


class BinarySearchTree:
    """二分探索木(binary seach tree)クラス

    二分探索木の機能（追加・削除・探索）を提供する。

    """

    def __init__(self):
        """二分探索木の初期化"""
        # 根を初期化
        self.root = None

    def add(self, value):
        """ノードを追加

        Args:
            value (obj): 追加する値

        Returns:
            None:
        """
        # 新しいノードを適切な位置に挿入
        if self.root is None:
            # 根がない場合（初めてのデータ）は根とする
            self.root = BinaryNode(value)
        else:
            # 根配下のBinaryNodeを呼び出して追加
            self.root.add(value)

    def delete(self, value):
        """ノードの削除

        Args:
            value (obj): 削除する値

        Returns:
            bool: 削除したとき True、該当しないとき False
        """
        if self.root is None:
            # 根のデータがない場合
            return False

        # 根の配下のBinaryNodeを呼び出して削除
        try:
            self.root = self.root.delete(value)
        except ValueError:
            return False

        return True

    #
    # 第1引数 : 検索する値
    # 戻り値 : 該当するとき True、該当しないとき False
    def search(self, value):
        """ノードの検索

        Args:
            value:

        Returns:

        """
        node = self.root.search(value)
        if node:
            # ノードが見つかったとき
            return True
        else:
            # ノードが見つからなかったとき
            return False

    def print_tree(self):
        """二分木の表示

        Returns:
            None:
        """
        if self.root is None:
            # 根のデータがない場合
            print("[empty]")
        else:
            # 根配下のBinaryNodeを呼び出して表示
            self.root.print_tree()
