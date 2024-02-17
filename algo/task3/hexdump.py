def i2hex(i):
    """正の整数値をOpenSSLの16進表記の文字列に変換して返す

    64bit以下の場合は「数値 : (16進表記)」とする。
    64bitより大きい場合は1行目に改行を入れ、
    ダンプ表記（16進表記を15個ずつコロンで区切る）とする。

    Args:
        i (int): 16進表記に変換する正の整数

    Returns:
        str: 16進表記の文字列
    """
    str = ""

    if i.bit_length() >= 65:
        # 64itより大きい場合
        str = "\n"

        # 下位ビットから8bitずつの値を取得してスタックに入れる
        b = i
        stack = []
        for j in range(0, i.bit_length(), 8):
            stack.append(b & 255)
            b >>= 8

        # 先頭8ビットが0b10000000以上ならば0x00を追加
        if stack[-1] >= 128:
            stack.append(0)

        # 値を16進数文字のコロンで区切りの文字列とする
        # イテレータを取得して最初の値はコロンを省略する
        # 先頭列は4スペース空ける
        it = iter(enumerate(reversed(stack)))
        j, s = next(it)
        str += f"    {s:02x}"
        # 2個目以降はコロンを追加し、15個毎に改行を挿入
        for j, s in it:
            if j % 15 == 0:
                str += f":\n    {s:02x}"
            else:
                str += f":{s:02x}"
    else:
        # 64bit以下の場合
        str = f"{i} ({hex(i)})"

    return str


# 直接実行された場合のみ実行
if __name__ == '__main__':
    # 動作確認

    # 4937331169 (0x12649b1e1)
    print(i2hex(4937331169))

    # 02:a6:47:36:f1:23:82:db:e5
    print(i2hex(48875093890372393957))

    # 6b:bc:c1:6c:f3:18:db:8d:e6:e6:e3:58:81:6a:df:
    # 6b
    print(i2hex(143207470495320510729957872170433175403))

    # 00:d9:7b:4c:b0:27:a9:50:d3:cb:95:e8:ad:b6:dd:
    # c4:83
    print(i2hex(289082683018487613798709865913310364803))
