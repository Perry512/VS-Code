### Tyler Nicholas: 30 Days of python

# Exercise 1: Concatenate the string 'Thirty', 'Days', 'Of', 'Python' to a single string, 'Thirty Days Of Python'

str1 = "Thirty"
str2 = "Days"
str3 = "Of"
str4 = "Python"

print('{} {} {} {}'.format(str1, str2, str3, str4))

# Exercise 2: Concatenate the string 'Coding', 'For' , 'All' to a single string, 'Coding For All'

strCoding = "Coding"
strFor = "For"
strAll = "All"

strCFA = ('{} {} {}'.format(strCoding, strFor, strAll))

print(strCFA)

# Exercise 3: Declare a variable named company and assign it to an initial value "Coding For All"

company = "Coding For All"

# Exercise 4: Print the variable company using print().

print(company)

# Exercise 5: Print the length of the company string using len() method and print()

print(len(company))

# Exercise 6: Change all the characters to uppercase letters using upper() method.

company = company.upper()

print(company)

# Exercise 7: Change all the characters to lowercase letters using lower() method.

company = company.lower()

# Exercise 8: Use capitalize(), title(), swapcase() methods to format the value of the string Coding For All.

company = company.capitalize()
print(company)

company = company.title()
print(company)

company = company.swapcase()
print(company)

# Exercise 9: Cut(slice) out the first word of Coding For All string.

company = company[:-7].title()

print(company)

# Exercise 10: Check if Coding For All string contains a word Coding using the method index, find or other methods.

if "Coding" in company:

    print("\"Coding\" in string")
else: 

    print("\"Coding\" not in string")

# Exercise 11: Replace the word coding in the string 'Coding For All' to Python.

company = "Coding For All"

print(company.replace("Coding" , "Python"))

# Exercise 12: Change Python for Everyone to Python for All using the replace method or other methods.

print(company.replace("All" , "Everyone"))

# Exercise 13: Split the string 'Coding For All' using space as the separator (split())

print(company.split(" "))

# Exercise 14: "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split the string at the comma.

companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

print(companies.split(", "))
# Exercise 15: What is the character at index 0 in the string Coding For All.

# = 'C'

# Exercise 16: What is the last index of the string Coding For All.

# 13
# Exercise 17: What character is at index 10 in "Coding For All" string.

# a space

# Exercise 18: Create an acronym or an abbreviation for the name 'Python For Everyone'.

# PyForEvery

# Exercise 19: Create an acronym or an abbreviation for the name 'Coding For All'.

# CoFoAll

# Exercise 20: Use index to determine the position of the first occurrence of C in Coding For All.

print(company.find("C"))

# Exercise 21: Use index to determine the position of the first occurrence of F in Coding For All.

print(company.find("F"))

# Exercise 22: Use rfind to determine the position of the last occurrence of l in Coding For All People.

company = "Coding For All People"
print(company.rfind("l"))

# Exercise 23: Use index or find to find the position of the first occurrence of the word 'because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction'

testSentence = "You cannot end a sentence with because because because is a conjunction"
print(testSentence.find("because "))

# Exercise 24: Use rindex to find the position of the last occurrence of the word because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'

print(testSentence.rfind("because"))

# Exercise 25: Slice out the phrase 'because because because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction'
# Exercise 26: Find the position of the first occurrence of the word 'because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction'
# Exercise 27: Slice out the phrase 'because because because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction'
# Exercise 28: Does ''Coding For All' start with a substring Coding?
# Exercise 29: Does 'Coding For All' end with a substring coding?