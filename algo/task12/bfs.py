from collections import defaultdict
from collections import deque
import networkx as nx

def bfs(graph, start, end):
    queue = deque([start])
    visited = {start: True}
    prev = defaultdict(type(None))
    route = list()
    while deque:
        vertex = queue.popleft()
        if vertex == end:
            i = vertex
            while i is not None:
                route.append(i)
                i = prev[i]
            return route[::-1]
        if not graph.has_node(vertex):
            continue
        for i in list(graph.adj[vertex]):
            if i not in visited:
                visited[i] = True
                queue.append(i)
                prev[i] = vertex
                print(vertex, '->', i)
    return route

def main():
    adj = dict()
    print('頂点と接続する頂点の番号をスペース区切りで入力してください')
    while True:
        s = input('[0で終了] : ')
        vertex = [int(i) for i in s.split()]
        if vertex[0] == 0:
            break
        adj[vertex[0]] = vertex[1:]
    graph = nx.Graph(adj)
    start = int(input('始点となる頂点の番号を入力 : '))
    end = int(input('終点となる頂点の番号を入力 : '))

    route = bfs(graph, start, end)
    if not route:
        print('経路 : Not found')
    else:
        print('経路 : ', end='')
        for i in route[:-1]:
            print(f'{i} -> ', end='')
        else:
            print(f'{route[-1]}')

if __name__ == '__main__':
    main()



'''
1 2 4
2 1
3 6 7 13
4 1 9 15
5 8
6 3
7 3 8 10
8 5 7 9
9 4 8 11
10 7
11 9
12 15
13 3
14 15
15 4 12 14

'''