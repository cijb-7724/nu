from collections import defaultdict

def dfs(adj, start, end):
    stack = [start]
    visited = {start: True}
    prev = defaultdict(type(None))
    route = list()
    while stack:
        vertex = stack.pop()
        if vertex == end:
            i = vertex
            while i is not None:
                route.append(i)
                i = prev[i]
            return route[::-1]

        for i in adj.get(vertex, []):
            if i not in visited:
                visited[i] = True
                stack.append(i)
                prev[i] = vertex
                print(vertex, "->", i)
    return route

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

