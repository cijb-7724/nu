def is_float_str(num_str):
    try:
        float(num_str)
        return True
    except ValueError:
        return False

rpn = input('逆ポーランド記法電卓 : ')

stack = []
for word in rpn.split():
    if is_float_str(word):
        stack.append(float(word))
    elif word == '+':
        b = stack.pop()
        a = stack.pop()
        stack.append(a + b)
    elif word == '-':
        b = stack.pop()
        a = stack.pop()
        stack.append(a - b)
    elif word == '*':
        b = stack.pop()
        a = stack.pop()
        stack.append(a * b)
    elif word == '/':
        b = stack.pop()
        a = stack.pop()
        stack.append(a / b)
    else:
        print('Input error![{0}]'.format(word))
        break
else:
    print(stack.pop())