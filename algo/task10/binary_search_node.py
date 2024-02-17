import functools as fn


class BinaryNode:
    """二分探索木のノードと基本機能をまとめたクラス

    Attributes:
        value (obj): データ
        parent (BinaryNode): 親のノード
        left (BinaryNode): 左のノード
        right (BinaryNode): 右のノード
    """

    """ノードの初期化
    
    データ、親、左右の木を初期化
    
        Args:
            value (obj): ノードのデータ
            parent (BinaryNode): 親のノード
    """
    def __init__(self, value=None, parent=None):
        self.value = value
        self.parent = parent
        self.left = None
        self.right = None

    def min(self):
        """最小値

        Returns:
            BinaryNode: 最小値のノードを返す
        """
        ret = self
        while ret.left:
            ret = ret.left

        return ret

    def max(self):
        """最大値

        Returns:
            BinaryNode: 最大値のノードを返す
        """
        ret = self
        while ret.right:
            ret = ret.right

        return ret

    def root(self):
        """根(root)

        Returns:
            BinaryNode: 根のノードを返す
        """
        ret = self
        while ret.parent:
            ret = ret.parent

        return ret

    def search(self, value):
        """探索

        Args:
            value (obj): 探索するデータ

        Returns:
            obj: 探索結果、見つからない場合はNoneを返す
        """
        if value == self.value:
            # 該当した場合
            return self
        elif value < self.value:
            # 自分自身より値が小さい場合
            if self.left is None:
                # それ以上ノードがない場合
                return None
            else:
                # 左を探索
                return self.left.search(value)
        else:
            # 自分自身より値が大きい場合
            if self.right is None:
                # それ以上ノードがない場合
                return None
            else:
                # 右を探索
                return self.right.search(value)

    def add(self, value):
        """ノードの追加

        自分自身を呼び出すことで再帰となってノードを追加する

        Args:
            value (obj): 追加する値

        Returns:
            None:
        """
        if value <= self.value:
            # 自分自身より値が小さいか等しい場合
            if self.left is None:
                # 左のノードが空のときは挿入
                self.left = BinaryNode(value, self)
            else:
                # 左のノードが空ではないとき
                # 左のノードを呼び出して追加
                self.left.add(value)
        else:
            # 自分自身より値が大きい場合
            if self.right is None:
                # 右のノードが空のときは挿入
                self.right = BinaryNode(value, self)
            else:
                # 右のノードが空ではないとき
                # 右のノードを呼び出して追加
                self.right.add(value)

    def replace_parent(self, node):
        """親ノードの入れ替え

        自分の親のノードに対して、
        その子のノードを指定したノードに差し替えることによって、
        自分のノードを削除して子のノードに差し替える(deleteメソッドで利用)

        Args:
            node (BinaryNode): 差し替えるノード

        Returns:
            None:
        """
        if self.parent is None:
            # 自分の親が根の場合
            pass
        elif self == self.parent.left:
            # 自分が左側の木の場合
            self.parent.left = node
        elif self == self.parent.right:
            # 自分が右側の木の場合
            self.parent.right = node

        # 指定したノードの親を自分の親にする
        if node:
            node.parent = self.parent

    def delete(self, value):
        """ノードの削除

        Args:
            value (obj): 削除する値

        Returns:
            BinaryNode: 新しく構成した二分木

        Raises:
            ValueError: 該当する値が見つからない場合
        """
        # 削除対象のノードを探す
        target = self.search(value)

        # 該当する値が見つからない場合
        if target is None:
            raise ValueError("Not found")

        # ノードを削除
        if target.left is None and target.right is None:
            # 子を持たない葉の場合
            if target.parent is None:
                # 根の場合は削除
                return None
            node = target
            target.replace_parent(None)
        elif target.left is None:
            # 右の子のみを持つ場合
            node = target.right
            target.replace_parent(node)
        elif target.right is None:
            # 左の子のみを持つ場合
            node = target.left
            target.replace_parent(node)
        else:
            # 左右2つの子を持つ場合

            # 該当ノードから右側の最小の要素を見つける
            node = target.right.min()

            # 最小の要素に対して、
            # 葉の場合 または 右の子のみを持つ場合の処理
            # 最小のノードが該当ノードの直近の子のときは、
            # 処理が重複するのと、右の子が葉のときに
            # 子がないためにエラーとなるのを防ぐため省略する
            if node.parent is not target:
                node.replace_parent(node.right)
                # 差し替えるノードの右の子を
                # 該当の右のノードに上書き
                node.right = target.right
                node.right.parent = node

            # 自分自身を削除して最小のノードに差し替える
            target.replace_parent(node)

            # 差し替えたノードの左の子を
            # 該当の左のノードに上書き
            node.left = target.left
            node.left.parent = node

        return node.root()

    def height(self):
        """ツリーの高さを取得

        Returns:
            int: ツリーの高さ（根のみのときを1とする）
        """
        if self.value is None:
            # 自分自身のデータが存在しない
            return 0
        else:
            # 左右の一番深いところまで再帰して深さを数える
            if type(self.left) is BinaryNode and type(self.right) is BinaryNode:
                # 子が左右どちらもある場合は、どちらか大きい値を選択
                return max(self.left.height(), self.right.height()) + 1
            elif type(self.left) is BinaryNode:
                # 子が左のみある場合
                return self.left.height() + 1
            elif type(self.right) is BinaryNode:
                # 子が右のみある場合
                return self.right.height() + 1

            # 子がない（自分自身）
            return 1

    def print_tree(self):
        """ツリーの表示

        Returns:
            None:
        """
        printBTree(self, lambda node: (str(node.value), node.left, node.right))


#
# この関数は stackoverflow.com にて Alain T. 氏が投稿したソースコードである。
# https://stackoverflow.com/posts/49844237/revisions
#
# Windows PoserShell 上で小文字の円マーク「￥」をバックスラッシュ「＼」で表示するには、
# フォントを NSimSun などに変更する。
#
def printBTree(node, nodeInfo=None, inverted=False, isTop=True):
   # node value string and sub nodes
   stringValue, leftNode, rightNode = nodeInfo(node)

   stringValueWidth  = len(stringValue)

   # recurse to sub nodes to obtain line blocks on left and right
   leftTextBlock     = [] if not leftNode else printBTree(leftNode,nodeInfo,inverted,False)
   rightTextBlock    = [] if not rightNode else printBTree(rightNode,nodeInfo,inverted,False)

   # count common and maximum number of sub node lines
   commonLines       = min(len(leftTextBlock),len(rightTextBlock))
   subLevelLines     = max(len(rightTextBlock),len(leftTextBlock))

   # extend lines on shallower side to get same number of lines on both sides
   leftSubLines      = leftTextBlock  + [""] *  (subLevelLines - len(leftTextBlock))
   rightSubLines     = rightTextBlock + [""] *  (subLevelLines - len(rightTextBlock))

   # compute location of value or link bar for all left and right sub nodes
   #   * left node's value ends at line's width
   #   * right node's value starts after initial spaces
   leftLineWidths    = [ len(line) for line in leftSubLines  ]
   rightLineIndents  = [ len(line)-len(line.lstrip(" ")) for line in rightSubLines ]

   # top line value locations, will be used to determine position of current node & link bars
   firstLeftWidth    = (leftLineWidths   + [0])[0]
   firstRightIndent  = (rightLineIndents + [0])[0]

   # width of sub node link under node value (i.e. with slashes if any)
   # aims to center link bars under the value if value is wide enough
   #
   # ValueLine:    v     vv    vvvvvv   vvvvv
   # LinkLine:    / \   /  \    /  \     / \
   #
   linkSpacing       = min(stringValueWidth, 2 - stringValueWidth % 2)
   leftLinkBar       = 1 if leftNode  else 0
   rightLinkBar      = 1 if rightNode else 0
   minLinkWidth      = leftLinkBar + linkSpacing + rightLinkBar
   valueOffset       = (stringValueWidth - linkSpacing) // 2

   # find optimal position for right side top node
   #   * must allow room for link bars above and between left and right top nodes
   #   * must not overlap lower level nodes on any given line (allow gap of minSpacing)
   #   * can be offset to the left if lower subNodes of right node
   #     have no overlap with subNodes of left node
   minSpacing        = 2
   rightNodePosition = fn.reduce(lambda r,i: max(r,i[0] + minSpacing + firstRightIndent - i[1]), \
                                 zip(leftLineWidths,rightLineIndents[0:commonLines]), \
                                 firstLeftWidth + minLinkWidth)

   # extend basic link bars (slashes) with underlines to reach left and right
   # top nodes.
   #
   #        vvvvv
   #       __/ \__
   #      L       R
   #
   linkExtraWidth    = max(0, rightNodePosition - firstLeftWidth - minLinkWidth )
   rightLinkExtra    = linkExtraWidth // 2
   leftLinkExtra     = linkExtraWidth - rightLinkExtra

   # build value line taking into account left indent and link bar extension (on left side)
   valueIndent       = max(0, firstLeftWidth + leftLinkExtra + leftLinkBar - valueOffset)
   valueLine         = " " * max(0,valueIndent) + stringValue
   slash             = "\\" if inverted else  "/"
   backslash         = "/" if inverted else  "\\"
   uLine             = "¯" if inverted else  "_"

   # build left side of link line
   leftLink          = "" if not leftNode else ( " " * firstLeftWidth + uLine * leftLinkExtra + slash)

   # build right side of link line (includes blank spaces under top node value)
   rightLinkOffset   = linkSpacing + valueOffset * (1 - leftLinkBar)
   rightLink         = "" if not rightNode else ( " " * rightLinkOffset + backslash + uLine * rightLinkExtra )

   # full link line (will be empty if there are no sub nodes)
   linkLine          = leftLink + rightLink

   # will need to offset left side lines if right side sub nodes extend beyond left margin
   # can happen if left subtree is shorter (in height) than right side subtree
   leftIndentWidth   = max(0,firstRightIndent - rightNodePosition)
   leftIndent        = " " * leftIndentWidth
   indentedLeftLines = [ (leftIndent if line else "") + line for line in leftSubLines ]

   # compute distance between left and right sublines based on their value position
   # can be negative if leading spaces need to be removed from right side
   mergeOffsets      = [ len(line) for line in indentedLeftLines ]
   mergeOffsets      = [ leftIndentWidth + rightNodePosition - firstRightIndent - w for w in mergeOffsets ]
   mergeOffsets      = [ p if rightSubLines[i] else 0 for i,p in enumerate(mergeOffsets) ]

   # combine left and right lines using computed offsets
   #   * indented left sub lines
   #   * spaces between left and right lines
   #   * right sub line with extra leading blanks removed.
   mergedSubLines    = zip(range(len(mergeOffsets)), mergeOffsets, indentedLeftLines)
   mergedSubLines    = [ (i,p,line + (" " * max(0,p)) )       for i,p,line in mergedSubLines ]
   mergedSubLines    = [ line + rightSubLines[i][max(0,-p):]  for i,p,line in mergedSubLines ]

   # Assemble final result combining
   #  * node value string
   #  * link line (if any)
   #  * merged lines from left and right sub trees (if any)
   treeLines = [leftIndent + valueLine] + ( [] if not linkLine else [leftIndent + linkLine] ) + mergedSubLines

   # invert final result if requested
   treeLines = reversed(treeLines) if inverted and isTop else treeLines

   # return intermediate tree lines or print final result
   if isTop : print("\n".join(treeLines))
   else     : return treeLines