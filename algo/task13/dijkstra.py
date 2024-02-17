from collections import defaultdict
import heapq

def add_edge(adj, src, dst, weight=1.0):
    adj[src].append((dst, weight))
    adj[dst].append((src, weight))
    return adj

def dijkstra(adj, start, end):
    dist = defaultdict(lambda: float('inf'))
    dist[start] = 0.0
    visited = {}
    prev = defaultdict(lambda: None)
    q = []
    heapq.heappush(q, (dist[start], start))
    while q:
        dist_u, u = heapq.heappop(q)
        if u in visited:
            continue
        for v, weight in adj[u]:
            if v in visited:
                continue
            d = dist_u + weight
            if dist[v] > d:
                dist[v] = d
                prev[v] = u
                heapq.heappush(q, (d, v))
                print(u, '->', v, ':', d)
        visited[u] = True
    route = list()
    vertex = end
    while vertex is not None:
        route.append(vertex)
        vertex = prev[vertex]
    return dist[end], route[::-1]

def main():
    adj = defaultdict(list)
    while True:
        s = input('エッジの両端頂点と重みを'
                  + 'スペース区切りで入力[0で終了] : ')
        edge = [int(i) for i in s.split()]
        if edge[0] == 0:
            break
        adj = add_edge(adj, edge[0], edge[1], edge[2])
    start = int(input('始点となる頂点の番号を入力 : '))
    end = int(input('終点となる頂点の番号を入力 : '))

    (dist, route) = dijkstra(adj, start, end)
    print(f'最短距離 : {dist}')
    print('最短経路 : ', end = '')
    for i in route[:-1]:
        print(f'{i} -> ', end = '')
    else:
        print(f'{route[-1]}')

if __name__ == '__main__':
    main()
'''
1 2 6
1 3 2
2 4 2
2 5 2
3 4 1
3 6 8
4 6 7
5 6 2
5 7 5
6 8 2
7 9 3
7 10 3
8 10 2
8 11 6
9 12 9
10 12 6
11 12 3
0
'''