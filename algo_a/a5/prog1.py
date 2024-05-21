n = int(input('アンペア(A)'))
m = int(input('電力利用料(kWh)'))
anp = [10, 20, 40, 60]
money = [280, 561, 1123, 1648]
unit = 19
if not n in anp:
    print('契約のアンペアが不正な値です')
for i, a in enumerate(anp):
    if n == a:
        print(f'1kWhにつき{money[i] + m*unit}円')