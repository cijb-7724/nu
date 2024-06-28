import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import dblquad

# 領域の境界を定義する関数
def upper_y(x):
    return np.sqrt(1 - x**2)

def lower_y(x):
    return np.maximum(x**2, x**3 + 0.5)

# 領域の面積を計算
area, error = dblquad(lambda y, x: 1, -1, 1, lower_y, upper_y)

# グラフの作成
x = np.linspace(-1, 1, 400)
y_upper = np.sqrt(1 - x**2)
y_lower = np.maximum(x**2, x**3 + 0.5)

plt.fill_between(x, y_lower, y_upper, where=(y_upper >= y_lower), color='lightblue', alpha=0.5)
plt.plot(x, y_upper, 'r', label='$y = \sqrt{1 - x^2}$')
plt.plot(x, x**2, 'g', label='$y = x^2$')
plt.plot(x, x**3 + 0.5, 'b', label='$y = x^3 + \frac{1}{2}$')
plt.xlabel('$x$')
plt.ylabel('$y$')
plt.title('Region defined by the inequalities')
plt.legend()
plt.grid(True)
plt.show()

# 面積の表示
print(f"Estimated area: {area}")
