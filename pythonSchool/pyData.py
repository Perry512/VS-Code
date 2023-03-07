import pandas as pd
import matplotlib as plt
import numpy as np

plt.rcParams["figure.figsize"] = [7.00,3.50]
plt.rcParams["figure.autolayout"] = True

columns = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 6", "Button 7", "Button 8"]

df = pd.read_csv('/home/perry/Documents/VSCode/pythonSchool/GGSTButtonConfig.csv', encoding= 'unicode_escape', usecols=columns)

#arr = np.genfromtxt("/home/perry/Documents/VSCode/pythonSchool/GGSTButtonConfig.csv", delimiter=",", dtype=str, invalid_raise=False, columns=(0,1))

#newarr = arr.astype('str')
print(df)

#for x in df.index:
#  if df.loc[x, "Duration"] > 120:
#    df.loc[x, "Duration"] = 120


        
#print(df[['Button 1']].to_string(index=False))

#display(dataFrame[dataFrame.eval("Salary <=100000 & (Age <40) & JOB.str.startswith('A').values")])