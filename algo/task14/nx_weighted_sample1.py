# このプログラムを実行するには、次のライブラリを導入しておく必要がある。
#   NetworkX : グラフ・ネットワークを扱うライブラリ
#   Matplotlib : データをプロットする描画ライブラリ
#
# それぞれのライブラリの導入方法は以下の通り。
#   pip install networkx
#   pip install matplotlib
#
import networkx as nx
import matplotlib.pyplot as plt

# 無向グラフ
G = nx.Graph()

# 重み付きグラフの設定（資料「ダイクストラ法の隣接リスト」より）
# add_weighted_edges_from はエッジで指定。
# NetworkX には、他にも頂点の追加・削除、エッジの追加・削除、
# パス上の頂点と辺を追加など、色々な指定方法が用意されている。
G.add_weighted_edges_from(
    [(1, 2, 3),
     (1, 3, 2),
     (2, 4, 4),
     (2, 5, 8),
     (3, 4, 7),
     (3, 6, 9),
     (4, 5, 3),
     (4, 6, 6),
     (5, 7, 2),
     (6, 7, 5)
     ], weight='weight')

# Matplotlibへ描画
pos = nx.spring_layout(G, k=1.0)
edge_labels = {(i, j): w['weight'] for i, j, w in G.edges(data=True)}
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
nx.draw_networkx(G, pos, with_labels=True)

# Matplotlibの表示
plt.axis('equal')   # 座標値の増分を同じ長さにする
plt.show()
