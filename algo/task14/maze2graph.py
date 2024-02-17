# 「*」で作った迷路を読み込み重み付きの隣接リストに変換する。
# 迷路は単純グラフのみを対象としているため、
# 多重グラフのループを入れるとエラーになる。
# このプログラム単体で動かしたときはグラフを描画する。


# このプログラムは、次のライブラリが必要である。
#   NetworkX : グラフ・ネットワークを扱うライブラリ
#   Matplotlib : データをプロットする描画ライブラリ
import sys
import os
import networkx as nx
import matplotlib.pyplot as plt
from collections import deque


# 迷路の実体定数
MAZE_START = "S"    # スタート
MAZE_GOAL = "G"     # ゴール
MAZE_EDGE = "*"     # 迷路の頂点とエッジ
MAZE_CHECKED = "0"  # 探索済み迷路

# エッジの状態
STATE_WALL = 0
STATE_CHECKED = 1
STATE_EDGE = 2
STATE_GOAL = 3

# 四方の座標（行と列）定数
DIR_ALL = ((0, -1), (-1, 0), (0, 1), (1, 0))


def _state_maze(maze_ary, row, col):
    """指定した座標の迷路の状態を返す。

    Args:
        maze_ary (list(list(str))): 迷路の二次元配列リスト
        row (int): 対象の行の値
        col (int): 対象の列の値

    Returns:
        int: 0 は無(壁), 1 は探索済み, 2 はエッジ, 3 はゴール
    """
    # 迷路の位置が配列の範囲内か確認
    if row < 0 or col < 0 or \
       row > len(maze_ary) - 1 or \
       col > len(maze_ary[row]) - 1:
        return 0

    # 迷路の状態を確認
    if maze_ary[row][col] == MAZE_CHECKED:
        return STATE_CHECKED
    elif maze_ary[row][col] == MAZE_EDGE:
        return STATE_EDGE
    elif maze_ary[row][col] == MAZE_GOAL:
        return STATE_GOAL
    else:
        return STATE_WALL


def _get_vertex(maze_ary, row, col, weight):
    """頂点を探索する。

    Args:
        maze_ary (list(list(str))): 迷路の二次元配列リスト
        row (int): 対象の行の値
        col (int): 対象の列の値
        weight (int): 重み

    Returns:
        (int, int, int): 発見した頂点の行の値、列の値、重み
    """
    # ゴールの場合は頂点とする
    if _state_maze(maze_ary, row, col) == STATE_GOAL:
        return row, col, weight

    # 四方の隣接状態を確認
    dir_ = 0
    next_ = None
    for r, c in DIR_ALL:
        # エッジを確認
        next_r = row + r
        next_c = col + c
        state = _state_maze(maze_ary, next_r, next_c)

        # 隣接の数をカウント
        if state >= STATE_CHECKED:
            dir_ += 1

        # 未探索の隣接位置を取得
        if state >= STATE_EDGE:
            next_ = (next_r, next_c)

    # 一本道(2方向)で未探索の隣接位置がない場合はループである
    if dir_ == 2 and next_ is None:
        print("ループを発見したので停止します。")
        sys.exit()

    # 一本道(2方向)のときは探索済みにして次の隣接を探索。
    # それ以外の「行き止まり(1方向)」または
    # 「分岐(3方向以上)」があるときは頂点とする
    if dir_ == 2:
        maze_ary[row][col] = MAZE_CHECKED
        (vr, vc, w) = _get_vertex(maze_ary, next_[0], next_[1], weight + 1)
    else:
        return row, col, weight

    return vr, vc, w


def read_maze(filename):
    """迷路のテキストファイルを読み込み2次元配列のリストに格納する。

    Args:
        filename (str): 迷路のテキストファイル名

    Returns:
        list(list(str)): ファイルを1文字ずつ分割した2次元配列のリスト
    """
    # with構文を使うと自動的にclose処理を行ってくれる
    maze_ary = list()
    with open(filename, "r") as file:
        for line in file:
            # 1行ずつファイルを読み込み、改行を取り除いて
            # 1文字ずつ分割してリストにする。
            # そのリストをリストに入れて2次元配列のように格納する。
            maze_ary.append(list(line.rstrip(os.linesep)))

    return maze_ary


def conv_graph(maze_ary):
    """迷路の配列を重み付き隣接リストに変換する。

    Args:
        maze_ary (list(list(str))): 迷路の二次元配列リスト

    Returns:
        ((int, int), (int, int), list(list(int, (int, int), int))): スタートの行と列, ゴールの行と列, 重み付き隣接リスト
    """
    # デフォルトのスタートとゴール位置は配列の左上と右下とする
    start = (0, 0)
    goal = (len(maze_ary) - 1, len(maze_ary[len(maze_ary) - 1]) - 1)

    # スタートとゴールの位置を見つける
    for row_i, row_v in enumerate(maze_ary):
        # 行に S または G の文字が含まれていれば、
        # その位置をタプル型で保存
        if MAZE_START in row_v:
            col_i = row_v.index(MAZE_START)
            start = (row_i, col_i)
        elif MAZE_GOAL in row_v:
            col_i = row_v.index(MAZE_GOAL)
            goal = (row_i, col_i)

    # スタート位置からグラフを作成する
    graph = list()
    queue = deque([start])
    while queue:
        # キューから頂点を取得
        vertex = queue.popleft()

        # 頂点を探索済みにする
        maze_ary[vertex[0]][vertex[1]] = MAZE_CHECKED

        # 四方の隣接状態を確認
        for row, col in DIR_ALL:
            next_r = vertex[0] + row
            next_c = vertex[1] + col
            if _state_maze(maze_ary, next_r, next_c) >= STATE_EDGE:
                # エッジまたはゴールのとき、
                # 隣接したエッジを探索して頂点と重みを取得する
                (vr, vc, w) = _get_vertex(maze_ary, next_r, next_c, 1)
                graph.append([vertex, (vr, vc), w])

                # 見つけた頂点は次の探索対象とする
                queue.append((vr, vc))

    return start, goal, graph


def main():
    # 迷路図を読み込み二次元配列リストにする
    filename = input("迷路のファイル名 : ")
    maze = read_maze(filename)

    # スタート、ゴール、隣接リストを取得
    (start, goal, maze_graph) = conv_graph(maze)

    # 無向グラフ
    graph = nx.Graph()

    # 重み付きグラフの追加
    graph.add_weighted_edges_from(maze_graph, weight='weight')

    # Matplotlibへ描画
    plt.figure(figsize=(8, 8))
    pos = nx.spring_layout(graph, k=0.5)
    edge_labels = {(i, j): w['weight'] for i, j, w in graph.edges(data=True)}
    nx.draw_networkx_nodes(graph, pos, node_color='red', node_size=600)
    nx.draw_networkx_labels(graph, pos, font_size=8)
    nx.draw_networkx_edge_labels(graph, pos, edge_labels=edge_labels, font_size=8)
    nx.draw_networkx_edges(graph, pos, alpha=0.4, edge_color='blue')

    # Matplotlibの表示
    plt.axis('equal')   # 座標値の増分を同じ長さにする
    plt.show()


# このプログラム直接実行したときだけ以下の内容を実行する
if __name__ == '__main__':
    main()
