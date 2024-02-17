from collections import defaultdict

def dfs(adj, start, end, visited=None, prev=None):
    if visited is None:
        visited = dict()
        visited[start] = True
    if prev is None:
        prev = defaultdict(type(None))
    if start == end:
        route = list()
        vertex = end
        while vertex is not None:
            route.append(vertex)
            vertex = prev[vertex]
        return route[::-1]
    for i in adj.get(start, []):
        if i not in visited:
            visited[i] = True
            prev[i] = start
            print(start, '->', i)
            route = dfs(adj, i, end, visited, prev)
            if route:
                return route
    return list()

def main():
    adj = {
        1:[2, 3, 4],
        2:[1, 5],
        3:[1, 6, 7],
        4:[1, 8],
        5:[2, 6, 10],
        6:[3, 5],
        7:[3, 11],
        8:[4, 9, 12],
        9:[8],
        10:[5],
        11:[7],
        12:[8, 13],
        13:[12]
    }
    start = int(input("始点となる頂点の番号を入力：" ))
    end = int(input("終点となる頂点の番号を入力： "))
    route = dfs(adj, start, end)
    if not route:
        print("経路： Not found")
    else:
        print("経路： ", end="")
        for i in route[:-1]:
            print(f"{i} -> ", end="")
        else:
            print(f"{route[-1]}")

if __name__ == '__main__':
    main()
