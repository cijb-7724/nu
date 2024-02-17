# defaultdict は辞書のサブクラスで、
# 生成するときの初期化の関数が指定できる。
from collections import defaultdict

# ヒープキュー（優先度付きキュー）アルゴリズムのライブラリ
# ヒープを利用して最小値の取得と削除を O(log n) で行う。
import heapq

# NetworkX
import networkx as nx

# 迷路をグラフに変換
import maze2graph as m2g


# A*法
# 第1引数 : Graph クラス（重み付き無向グラフ）
# 第2引数 : スタート
# 第3引数 : ゴール
# 戻り値 : 最短距離と最短経路(リスト)のリスト
def a_star(graph, start, goal):
    #
    # startの距離とコストを0で初期化
    #
    dist = dict()
    cost = dict()
    dist[start] = 0
    cost[start] = 0

    # 全て未訪問（辞書型）とする
    visited = {}

    # 訪問した手前の頂点を記録して、
    # 見つけたときに辿ることで経路を求める
    # 不明な key に対しては None を返すよう初期化
    prev = defaultdict(lambda: None)

    # 訪問候補
    # 優先度付きキューにstart頂点の距離と頂点を追加
    q = []
    heapq.heappush(q, (cost[start], dist[start], start))

    #
    # 計算処理
    #

    # キューが空になるまで繰り返す
    while q:
        # 訪問候補から最小評価の(評価, 距離, 頂点)を取得
        ev, dist_u, u = heapq.heappop(q)

        # 訪問済みの頂点は次の候補へ
        if u in visited:
            continue

        # 訪問候補の隣接リストから
        # 隣接する頂点の推定コストを求めて
        # 次の訪問候補とする
        for v, attr in graph.adj[u].items():
            weight = attr['weight']

            # 訪問済みの隣接リストは省略
            if v in visited:
                continue

            # 推定コストを算出(L1距離)
            h = abs(goal[0] - v[0]) + abs(goal[1] - v[1])

            # スタートからの最小コスト（距離）
            g = dist_u + weight

            # 評価
            f = g + h

            # 隣接の評価、距離、直前の頂点を保存
            cost[v] = f
            dist[v] = g
            prev[v] = u

            # 隣接の頂点を訪問候補とする
            heapq.heappush(q, (f, g, v))

            # 探索中の訪問先を出力
            print(u, "→", v, ":", f)

            # ゴールへの経路が判明した時点で終了
            if v == goal:
                # キューをクリアしてループを抜ける
                q.clear()
                break

        # 訪問した候補の頂点を訪問済みとする
        visited[u] = True

    # start頂点からgoal頂点までの最短経路を取得
    route = list()
    vertex = goal
    while vertex is not None:
        route.append(vertex)
        vertex = prev[vertex]

    # start頂点からgoal頂点までの最短距離と最短経路
    return dist[goal], route[::-1]


def main():
    # 迷路図を読み込み二次元配列リストにする
    filename = input("迷路のファイル名 : ")
    maze = m2g.read_maze(filename)

    # スタート、ゴール、隣接リストを取得
    (start, goal, maze_graph) = m2g.conv_graph(maze)

    # 無向グラフ
    graph = nx.Graph()

    # 重み付きグラフの追加
    graph.add_weighted_edges_from(maze_graph, weight='weight')

    # A*法
    (dist, route) = a_star(graph, start, goal)

    # 結果の表示
    print("最短距離 : {0}".format(dist))
    print("最短経路 : ", end="")
    for i in route[:-1]:
        print("{0} → ".format(i), end="")
    else:
        print("{0}".format(route[-1]))


# このプログラム直接実行したときだけ以下の内容を実行する
if __name__ == '__main__':
    main()
