from tkinter import *
import random
from typing import Any
import time
GAME_WIDTH = 400
GAME_HEIGHT = 400
SPEED = 100 #Lower the number faster the game
SPACE_SIZE = 15
BODY_PARTS = 3
FOOD_COLOUR = "#FFFF00"
BACKGROUND_COLOUR = "#000000"
class Snake:
    def __init__(self,colour,init_coord,snake_store) -> None:
        self.body_size = BODY_PARTS
        self.coord = []
        self.squares = []
        self.colour = colour
        for i in range(0,BODY_PARTS):
            self.coord.append(init_coord)
        
        for x, y in self.coord:
            square = canvas.create_rectangle(x,y, x+SPACE_SIZE, y+SPACE_SIZE,fill=colour,tag="snake")
            self.squares.append(square)

        snake_store.addSnake(self)
class Snake_Storage:
    def __init__(self) -> None:
        self.storage = []
    
    def addSnake(self,snake:Snake):
        self.storage.append(snake)
class Food:
    def __init__(self) -> None:
        x = random.randint(0,int((GAME_WIDTH/SPACE_SIZE) -1)) * SPACE_SIZE
        y = random.randint(0,int((GAME_HEIGHT/SPACE_SIZE) -1)) * SPACE_SIZE

        self.coord = [x,y]

        canvas.create_rectangle(x,y, x + SPACE_SIZE, y + SPACE_SIZE, fill = FOOD_COLOUR, tag="food")

    def generateNewFood(self):
        canvas.delete("food")

        x = random.randint(0,int((GAME_WIDTH/SPACE_SIZE) -1)) * SPACE_SIZE
        y = random.randint(0,int((GAME_HEIGHT/SPACE_SIZE) -1)) * SPACE_SIZE

        self.coord = [x,y]

        canvas.create_rectangle(x,y, x + SPACE_SIZE, y + SPACE_SIZE, fill = FOOD_COLOUR, tag="food")
    
    def getX(self):
        return self.coord[0]
    
    def getY(self):
        return self.coord[1]

def next_turn(snake, food, direction, player):
    
    x, y = snake.coord[0]
    if direction == "up":
        y -= SPACE_SIZE
    elif direction == "down":
        y += SPACE_SIZE
    elif direction == "left":
        x -= SPACE_SIZE
    elif direction == "right":
        x += SPACE_SIZE
    
    snake.coord.insert(0, (x,y))
    
    square = canvas.create_rectangle(x, y, x + SPACE_SIZE, y+SPACE_SIZE, fill=snake.colour)

    snake.squares.insert(0,square)

    #Change score_p1 if snake is eating food
    if x == food.getX() and y == food.getY():
        if player == 1:
            global score_p1
            score_p1 += 1
        elif player == 2:
            global score_p2
            score_p2 += 1
        label.config(text="P1 Score:{} | P2 Score:{}".format(score_p1,score_p2))
        food.generateNewFood()
    #Only delete last part of snake if food was not eaten(snake gains length)
    else:
        del snake.coord[len(snake.coord)-1]

        canvas.delete(snake.squares[len(snake.squares)-1])

        del snake.squares[len(snake.squares)-1]

    #Check for collisions
    collision,self_inflicted = check_collisions(snake,snakeStore)
    if collision and not self_inflicted:
        game_over()
        window.update()
        time.sleep(5)
        exit()
    elif collision and self_inflicted:
        player_game_over(player)
        window.update()
        time.sleep(5)
        exit()
        
    else:
        if player == 1:
            window.after(SPEED,next_turn, snake, food, direction_p1, player)
        if player == 2:
            window.after(SPEED,next_turn, snake, food, direction_p2, player)
    

def change_direction(new_direction,direction,player):
    
    global direction_p1
    global direction_p2
    if new_direction == 'left':
        if direction !='right':
            direction = new_direction
    elif new_direction == 'right':
        if direction != 'left':
            direction = new_direction
    elif new_direction == 'up':
        if direction != 'down':
            direction = new_direction
    elif new_direction == 'down':
        if direction != 'up':
            direction = new_direction

    if player == 1:
        direction_p1 = direction
    if player == 2:
        direction_p2 = direction
    

def check_collisions(snake,snake_store):
    x,y = snake.coord[0]
    list = snake_store.storage

    if x < 0 or x >= GAME_WIDTH:
        
        return (True,True)
    elif y < 0 or y >= GAME_HEIGHT:
        
        return (True,True)

    for body_part in snake.coord[1:]:
        if x == body_part[0] and y == body_part[1]:
             return (True,True)
    for i in list:
        if i.colour != snake.colour:
            for body_part in i.coord[1:]:
                if x == body_part[0] and y == body_part[1]:
                    return (True,False)
    return (False,False)

def game_over():
    canvas.delete(ALL)
    if score_p1 > score_p2:
          canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2, font = ('impact', 40), text="P1 WINNER!!", fill='pink', tags='gameover')
    elif score_p2 > score_p1:
            canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2, font = ('impact', 40), text="P2 WINNER!!", fill='pink', tags='gameover')
    else:
        canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2, font = ('impact', 40), text="GAME OVER", fill='pink', tags='gameover')

def player_game_over(player):
    canvas.delete(ALL)
    if player == 1:
        canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2, font = ('impact', 40), text="P2 WINNER!!", fill='pink', tags='gameover')
    if player == 2:
        canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2, font = ('impact', 40), text="P1 WINNER!!", fill='pink', tags='gameover')
    

    
if __name__ == "__main__":
    window = Tk()
    window.title("Feed my Python")
    window.resizable(False,False)

    score_p1 = 0
    score_p2 = 0

    direction_p1 = 'right'
    direction_p2 = 'left'

    label = Label(window, text= "P1 Score:{} | P2 Score:{}".format(score_p1,score_p2), font=('comic sans ms',20))
    label.pack()

    canvas = Canvas(window, bg = BACKGROUND_COLOUR, height=GAME_HEIGHT,width=GAME_WIDTH)
    canvas.pack()

    window.update()
    window_width = window.winfo_width()
    window_height = window.winfo_height()
    screen_width = window.winfo_screenwidth() 
    screen_height = window.winfo_screenheight()

    x = int((screen_width/2) - (window_width/2))
    y = int((screen_height/2) - (window_height/2))

    window.geometry('%dx%d+%d+%d' % (window_width, window_height, x, y))

    #Attach directions to events
    window.bind('<Left>', lambda event: change_direction('left',direction_p1,1))
    window.bind('<Right>', lambda event: change_direction('right',direction_p1,1))
    window.bind('<Up>', lambda event: change_direction('up',direction_p1,1))
    window.bind('<Down>', lambda event: change_direction('down',direction_p1,1))

    window.bind('w', lambda event: change_direction('up',direction_p2,2))
    window.bind('a', lambda event: change_direction('left',direction_p2,2))
    window.bind('s', lambda event: change_direction('down',direction_p2,2))
    window.bind('d', lambda event: change_direction('right',direction_p2,2))



    snakeStore = Snake_Storage()
    snake_p1 = Snake("#00FFFF",[0,0],snakeStore)
    snake_p2 = Snake("#ff6600",[int(GAME_WIDTH/SPACE_SIZE)*SPACE_SIZE - SPACE_SIZE,int(GAME_HEIGHT/SPACE_SIZE)*SPACE_SIZE - SPACE_SIZE],snakeStore)

    food = Food()

    next_turn(snake_p1,food, direction_p1, 1)
    next_turn(snake_p2,food,direction_p2, 2)
    
    window.mainloop()
    