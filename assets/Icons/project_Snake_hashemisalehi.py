#libraries
import time
import random
import turtle

#screen init
screen= turtle.Screen()
screen.setup(900,700)

#s
direction="u"

p=screen.textinput("question1","enter your name:")

#create snake & sang & apple2 
snake=turtle.Turtle()
snake.penup()

sang=turtle.Turtle()
sang.penup()
xsang=random.randint(-370,370)
ysang=random.randint(-270,270)
sang.goto(xsang,ysang)
w=turtle.Turtle() # Bad apple
w.fillcolor("red")
w.penup()
w.speed(0)
sw=random.randint(-370,370)
pw=random.randint(-270,270)
w.goto(sw,pw)

# f
f=turtle.Turtle()
f.pu()
f.speed(1000)
f.pencolor("red")
f.goto(-400,-300)
f.pd()
f.pensize(20)
f.forward(800)
f.left(90)
f.forward(600)
f.left(90)
f.forward(800)
f.left(90)
f.forward(600)
p2=turtle.Turtle()
p2.pu()
p2.hideturtle()
p2.goto(-400,325)
p2.pd()
p2.write(p)
b=0
p1=turtle.Turtle()
p1.pu()
p1.goto(400,325)
p1.pencolor("blue")
p1.write(b , font=(15))


# create food 1
apple=turtle.Turtle()
apple.penup()
apple.speed(0)
#food1
xfood1=random.randint(-370,370)
yfood1=random.randint(-270,270)
apple.goto(xfood1,yfood1)
#score&name
g=turtle.Turtle()
g.pu()
g.hideturtle()
g.fd(200)
g.pd()



#...
def go_up():
    global direction
    direction = "u"
    
def go_down():
    global direction
    direction = "d"

def go_left():
    global direction
    direction = "l"

def go_right():
    global direction
    direction = "r"

screen.listen()
screen.onkeypress(go_up, "Up")
screen.onkeypress(go_down, "Down")
screen.onkeypress(go_left, "Left")
screen.onkeypress(go_right, "Right")

i=1
while i==1:
    

    #snake dirction 
    x = snake.xcor()
    y = snake.ycor()
    
    if direction == "u":
        snake.goto(x, y+10)
    elif direction == "d":
        snake.goto(x, y-10)
    elif direction == "r":
        snake.goto(x+10, y)
    elif direction == "l":
        snake.goto(x-10, y)

    

    #check if snake eat food
    if snake.distance(apple) < 30 :
        xfood1=random.randint(-370,370)
        yfood1=random.randint(-270,270)
        apple.goto(xfood1,yfood1)
        p1.clear()
        b=b+1
        p1.write(b, font=(15))
        


    if snake.distance (w) < 30 :
        h=random.randint(-370,370)
        v=random.randint(-270,270)
        w.goto(h,v)
        p1.clear()
        b=b-1
        p1.write(b, font=(15))


    # divar
    x = snake.xcor()
    y = snake.ycor()
    if y>290 :
        f.hideturtle()
        f.clear()
        apple.hideturtle()
        sang.hideturtle()
        snake.hideturtle()
        w.hideturtle()
        f.pu()
        f.goto(0,0)
        f.pendown()
        p1.reset()
        p1.hideturtle()
        
        
        f.write("game over!",font=(18))
        g.write(p,font=(18))
        g.pu()
        g.fd(100)
        g.pd()
        g.write(b,font=(18))
        i=2


    if y<=-290 :
        f.hideturtle()
        f.clear()
        apple.hideturtle()
        sang.hideturtle()
        snake.hideturtle()
        w.hideturtle()
        f.pu()
        f.goto(0,0)
        f.pendown()
        p1.reset()
        p1.hideturtle()
        
        f.write("game over!",font=(18))
        g.write(p,font=(18))
        g.pu()
        g.fd(100)
        g.pd()
        g.write(b,font=(18))
        
        i=2


    if x<=-390 :
        f.hideturtle()
        f.clear()
        apple.hideturtle()
        sang.hideturtle()
        snake.hideturtle()
        w.hideturtle()
        f.pu()
        f.goto(0,0)
        f.pendown()
        p1.reset()
        p1.hideturtle()
        
        f.write("game over!",font=(18))
        g.write(p,font=(18))
        g.pu()
        g.fd(100)
        g.pd()
        g.write(b,font=(18))
        i=2


    if x>390 :
        f.hideturtle()
        f.clear()
        apple.hideturtle()
        sang.hideturtle()
        snake.hideturtle()
        w.hideturtle()
        f.pu()
        f.goto(0,0)
        f.pendown()
        p1.reset()
        p1.hideturtle()
        
        f.write("game over!",font=(18))
        g.write(p,font=(18))
        g.pu()
        g.fd(100)
        g.pd()
        g.write(b,font=(18))
        
        i=2


    #sang!!!
    if snake.distance(sang) < 30 :
        f.hideturtle()
        f.clear()
        apple.hideturtle()
        sang.hideturtle()
        snake.hideturtle()
        w.hideturtle()
        f.pu()
        f.goto(0,0)
        f.pendown()
        p1.reset()
        p1.hideturtle()
        
        
        f.write("game over!",font=(18))
        g.write(p,font=(18))
        g.pu()
        g.fd(100)
        g.pd()
        g.write(b,font=(18))
        
        i=2


    if apple.distance(sang) < 50 :
        maj1=random.randint(-370,370)
        maj2=random.randint(-270,270)
        apple.goto(maj1,maj2)
    if w.distance(sang) <50 :
        maj3=random.randint(-370,370)
        maj4=random.randint(-270,270)
        w.goto(maj3,maj4)

    #speed!!!
    if b<4 :
        time.sleep(0.020)
    elif b<7:
        time.sleep(0.00005) 
    elif b>6 :
        time.sleep(0)

