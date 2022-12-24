### Tyler Nicholas 30 days of python module 2


# Exercise 1.3: Declare a first name variable and assign a value to it

firstName = "Tyler"

# Exercise 1.4: Declare a last name variable and assign a value to it

lastName = "Nicholas"

# Exercise 1.5: Declare a full name variable and assign a value to it

fullName = firstName + " " + lastName

# Exercise 1.6: Declare a Country variable and assign a value to it

country = "U.S.A"

# Exercise 1.7: Declare a City variable and assign a value to it

city = "Rochester"

# Exercise 1.8: Declare an Age variable and assign a value to it

age = 23

# Exercise 1.9: Declare a year variable and assign a value to it

year = 2023

# Exercise 1.10: Declare a variable is_Married and assign a value to it

is_Married = False

# Exercise 1.11: Declare a variable is_True and assign a value to it

is_True = False

# Exercise 1.12: Declare a variable is_light_on and assign a value to it

is_light_on = True

# Exercise 1.13: Declare multiple variable on one line

isTouchingWall, isCommittingCrimes, is2013HondaCivic = False, True, True


# Exercise 2.1: Check the data type of all your variables using the type() function -- SKIPPED

# Exercise 2.2: Using the len() function, find the length of your first name

print(len(firstName))

# Exercise 2.3: Compare the length of your first name and your last name

print(abs(len(firstName) - len(lastName))) 

# Exercise 2.4: Declare 5 as num_one and 4 as num_two

num_one = 5
num_two = 4

# Exercise 2.4.i: Add num_one and num_two and assign the value to a variable named total

total = num_one + num_two

# Exercise 2.4.ii: Subract num_two from num_one

diff = num_two - num_one

# Exercise 2.4.iii: Multiply num_two and num_one and assign the value to a variable "product"

product = num_two * num_one

# Exercise 2.4.iv: Divide num_one by num_two and assign the value to a variable "division"

division = num_one / num_two

# Exercise 2.4.v: Use modulus division to fins num_two mod num_one and assign the value to a variable "remainder"

remainder = num_two % num_one

# Exercise 2.4.vi: Calculate num_one to the power of num_two and assign the value to a variable "exp"

exp = num_one ** num_two

# Exercise 2.4.vii: Find floor division of num_one by num_two and assign the value to a variable "floor_division"

floor_division = num_two // num_one


# Exercise 2.5: The radius of a circle is 30 meters

radius = 30

# Exercise 2.5.i: Calculate the area of a circle of and assign the value to a variable "area_of_cirlce"

import math
area_of_circle = math.pi * (radius ** 2)

# Exercise 2.5.ii: Calculate teh circumference of a circle and assign the value to a variable "circumference_of_circle"

circumference_of_circle = 2 * math.pi * radius

# Exercise 2.5.iii: Take radius as user input and calculate area

userIn = input("Please input circles radius to get its area ")
userArea = math.pi * (int(userIn) ** 2)

print(userArea)

# Exercise 2.6 Use the built-in input function to get a first name, last name, country and age from a user and store the value to their corresponding variable names

userFirstName = input("Please input your first name: ")
userLastName = input("Please input your last name: ")
userCountry = input("Please input your Country: ")
userAge = input("Please input your age: ")

# Exercise 2.7: Run help ("keywords") in Python Shell or in your file to check for the Python reserved words or keywords

help("keywords")

# Finished 12/23/2022
# Learning notes: where I took "userIn" and converted that to userArea, needed to typecast userIn to 'Int', learned how to use int()