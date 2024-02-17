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


def dijkstra(graph, start, end):
    """ダイクストラ法（二分ヒープを利用）

    Args:
        graph (NetworkX graph): NetworkX graph object
        start (int): 始点
        end (int): 終点

    Returns:
        list[float, list[int]]: 最短距離と最短経路(リスト)のリスト
    """

    #
    # 初期化
    #

    # 各頂点の距離に対して
    # start頂点は0、それ以外は無限大で初期化
    dist = defaultdict(lambda: float('inf'))
    dist[start] = 0

    # 全て未訪問（辞書型）とする
    visited = {}

    # 訪問した手前の頂点を記録して、
    # 見つけたときに辿ることで経路を求める
    # 不明な key に対しては None を返すよう初期化
    prev = defaultdict(lambda: None)

    # 訪問候補
    # 優先度付きキューにstart頂点の距離と頂点を追加
    q = []
    heapq.heappush(q, (dist[start], start))

    #
    # 計算処理
    #

    # キューが空になるまで繰り返す
    while q:
        # 訪問候補から最小の距離の(距離, 頂点)を取得
        dist_u, u = heapq.heappop(q)

        # 訪問済みの頂点は次の候補へ
        if u in visited:
            continue

        # 訪問候補の隣接リストから距離を比較
        for v, attr in graph.adj[u].items():
            weight = attr['weight']

            # 訪問済みの隣接リストは省略
            if v in visited:
                continue

            # 保持している距離よりも短い場合は、
            # その距離と頂点を訪問候補とする
            d = dist_u + weight
            if dist[v] > d:
                dist[v] = d
                prev[v] = u
                heapq.heappush(q, (d, v))

                # 探索中の訪問先を出力
                print(u, "→", v, ":", d)

        # 訪問した候補の頂点を訪問済みとする
        visited[u] = True

    # start頂点からend頂点までの最短経路を取得
    route = list()
    vertex = end
    while vertex is not None:
        route.append(vertex)
        vertex = prev[vertex]

    # start頂点からend頂点までの最短距離と最短経路
    return dist[end], route[::-1]


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

    # ダイクストラ法
    (dist, route) = dijkstra(graph, start, goal)

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
