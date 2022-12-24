### Tyler Nicholas 30 days of python

# Exercise 1: Declare your age as an integer variable

userAge = 23

# Exercise 2: Declare your height as a float

userHeight = 173.5

# Exercise 3: Declare a variable that stores a complex number

complexNo = 4j

# Exercise 4: Write a script that prompts the user to enter base and height of a triangle and calculate the area

userBase = input("Please enter the base of a triangle: ")
userHeight = input("Please enter the height of a triangle: ")

print("Your triangle area is ")
print((int(userBase) * int(userHeight) * 0.5))

# Exercise 5: Write a script that prompts the user to enter side a, side b and side c of a triangle, then calculate the perimeter  of the triangle

userSideA = input("Enter side A: ")
userSideB = input("Enter side B: ")
userSideC = input("Enter side C: ")

print("Your triangles perimeter is: ")
print(int(userSideA) + int(userSideB) + int(userSideC))

# Exercise 6: Get length and width of a rectangle using prompt, calculate its area and perimeter

userRectHeight = input("Enter a rectangle height: ")
userRectWidth = input("Enter a rectanle width: ")

rectangleArea = int(userRectHeight) * int(userRectWidth)
rectanglePerimeter = 2 * (int(userRectWidth) + int(userRectHeight))

print("Your rectangle area is: ")
print(rectangleArea)

print("Your rectangle perimeter is: ")
print(rectanglePerimeter)

# Exercise 7: Get radius of a circle using prompt. Calculate the area and circumference where pi = 3.14

userRadius = input("Enter a circle radius: ")

userCircleArea = int(userRadius) * int(userRadius) * 3.14
userCircleCircumference = int(userRadius) * 2 * 3.14

print("Your area is " + str(userCircleArea) + " and your circumference is " + str(userCircleCircumference))

# Exercise 8: calculate the slope, x-intercept, and y-intercept of y=2x-2

slope = 2

###skip###

# Exercise 12: Find the length of 'python' and 'dragon' and make a falsy comparison statement

pyVar = "Python"
drVar = "Dragon"

print(len(pyVar))
print(len(drVar))
print((drVar == pyVar))

# Exercise 13: Use the AND operator to check if 'on' is found in both 'python' and 'dragon'

print(("Python" and "on") and ("Dragon" and "on"))

# Exercise 14: "I hope this course is not full of jargon." Use the 'in' operator to check if jargon is in the sentence

jargonString = "I hope this course is not full on jargon"
if "jargon" in jargonString:
    print("yes")
#my first if statement :)

# Exercise 15: Use the in operator to check is on exists in dragon and python

if "on" in pyVar and drVar:
    print("yes")

# Exercise 16: Find the length of the text python and convert the output first to float, then to string

pyWordLen = len(pyVar)
pyWordLenFl = float(pyWordLen)
pyWordLenStr = str(pyWordLenFl)

# Exercise 17: Even numbers are divisible by 2 and the remainder is zero, how do you check if a number is even or not using python

import random
randomNum = random.randint(0, 10) 
if randomNum % 2 == 0: 
    print("even")
else:
    print("odd")

# Exercise 18: Check if the floor division of 7 by 3 is equal to the int converted value of 2.7

floorDiv = 3//7
if floorDiv == 2.7:
    print("equal to 2.7")
else:
    print("not equal to 2.7")

# Exercise 19: Check if type of '10' is equal to type if 10

if type('10') == type(10):
    print("'10' is equal to 10")
else:
    print("'10' is not equal to 10")

# Exercise 20: Check if int('9.8') is equal to 10

if int(9.8) == 10:
    print("'9.8' is equal to 10")
else:
    print("'9.8' is not equal to 10")

# Exercise 21: Write a script that prompts the user to enter hours and rate per hour, calculate a weeks salary

userHours = input("Enter how many hours you worked: ")
userRateofPay = input("Enter your hourly rate: ")

userWeekWage = int(userHours) * int(userRateofPay)

print(userWeekWage)

# Exercise 22: Write a script that prompts the user to enter a number of years, Calculate the number of seconds is in that many years

userYears = input("Enter a number of years to convert to seconds: ")

userSeconds = int(userYears) * 365 * 24 * 60 * 60

print(userSeconds)

# Exercise 23: Write a pyton script that displays a table

for i in range (1,6,1):
    print(i, end= " ")
    print(1, end= " ")
    print(i, end= " ")
    print(i**2, end= " ")
    print(i**3)

# Finished 12/24/2022

# New used functions: 
# Random package
# If-Else statements
# For loops
# print -> end= statement for formatting