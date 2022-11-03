import csv
import os
os.umask(0)
Listdoc=[]
def csvUpld():
	rows = []
	path = input("Enter the path of csv file : ")
	isExist = os.path.exists(path)
	if isExist:
		with open(path, 'r') as file:
			rdr = csv.reader(file)
			header = next(rdr)
			rows.append(header[:-6])
			for row in rdr:
				rows.append(row[:-6])
				Listdoc.append(row[:-6])
	else:
		print("No such file")
csvUpld()
for TL in filter(lambda y: float(y[6]) <= -3, Listdoc[0:]):
  Listdoc.remove(TL)

lowavg = list(map(lambda y: float(y[3].replace(',',''))  , Listdoc[0:]))
avg3 = sum(lowavg)/len(lowavg)
highavg = list(map(lambda y: float(y[2].replace(',',''))  , Listdoc[0:]))
avg2 = sum(highavg)/len(highavg)
openavg = list(map(lambda y: float(y[1].replace(',',''))  , Listdoc[0:]))
avg1 = sum(openavg)/len(openavg)
inpt=input("Enter the character : ")
outpt=[]
for lst in Listdoc[0:]:
	if(lst[0][0] == inpt):
		outpt.append(lst)

#print(outpt)
dtr1 = os.open(
	path='stock_output.txt',
	flags=(
		os.O_WRONLY  
		| os.O_CREAT 
		| os.O_TRUNC 
	),
	mode=0o777
)
dtr2 = os.open(
	path='avg_output.txt',
	flags=(
		os.O_WRONLY  
		| os.O_CREAT 
		| os.O_TRUNC 
	),
	mode=0o777
)
with open(dtr1, 'w',newline='') as file :
	write = csv.writer(file , delimiter=' ')
	write.writerows(outpt)
with open(dtr2, 'w',newline='') as file :
	write = csv.writer(file)
	write.writerows([[avg1],[avg2],[avg3]])

