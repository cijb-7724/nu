import turtle

def sierpinski_triangle(order, size):
    if order == 0:
        for _ in range(3):
            turtle.forward(size)
            turtle.left(120)
    else:
        sierpinski_triangle(order-1, size/2)
        turtle.forward(size/2)
        sierpinski_triangle(order-1, size/2)
        turtle.backward(size/2)
        turtle.left(60)
        turtle.forward(size/2)
        turtle.right(60)
        sierpinski_triangle(order-1, size/2)
        turtle.left(60)
        turtle.backward(size/2)
        turtle.right(60)

order = int(input('再帰回数 : '))

turtle.penup()
turtle.setpos(-300, -300)
turtle.pendown()
turtle.speed(0)

sierpinski_triangle(order, 600)
turtle.hideturtle()
turtle.mainloop()
