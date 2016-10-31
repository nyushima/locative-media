__author__ = 'Suhan'


file_new = open("out_file.txt", "w")
file = open('in_file.txt', 'r')
prefix = '{"geometry": {"type": "Point","coordinates": ['
postfix = ']},},'
f_line = file.readlines()
print(f_line[0])
str1 = "longitude"
str2 = "latitude"
A=[]
for i in f_line:
    if i[0] == "{" :
        #print(i)
        start1 = (i.find(str1))
        end1 = i[start1:].find(",")
        start2 = (i.find(str2))
        end2 = i[start2:].find(",")
        #print(end1)
        long = i[(i.find(str1))+12:(i.find(str1))+end1]
        la = i[(i.find(str2))+11:(i.find(str2))+end2]
        print(prefix,long,',',la,postfix)

