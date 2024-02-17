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

# 重み付きグラフの設定（迷路のサンプル）
# add_weighted_edges_from はエッジで指定。
G.add_weighted_edges_from(
    [((0, 0), (2, 3), 5),
     ((0, 12), (2, 8), 6),
     ((2, 3), (2, 6), 3),
     ((2, 3), (7, 3), 5),
     ((2, 3), (12, 6), 19),
     ((2, 6), (2, 8), 2),
     ((2, 6), (4, 6), 2),
     ((2, 8), (2, 12), 4),
     ((4, 6), (4, 12), 6),
     ((4, 6), (7, 6), 3),
     ((7, 6), (12, 6), 5),
     ((7, 6), (12, 9), 14),
     ((12, 6), (12, 9), 3),
     ((12, 9), (12, 12), 3),
     ], weight='weight')

# Matplotlibへ描画
plt.figure(figsize=(8, 8))
pos = nx.spring_layout(G, k=0.5)
edge_labels = {(i, j): w['weight'] for i, j, w in G.edges(data=True)}
nx.draw_networkx_nodes(G, pos, node_color='red', node_size=600)
nx.draw_networkx_labels(G, pos, font_size=8)
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_size=8)
nx.draw_networkx_edges(G, pos, alpha=0.4, edge_color='blue')

# Matplotlibの表示
plt.axis('equal')   # 座標値の増分を同じ長さにする
plt.show()
