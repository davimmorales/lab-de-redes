noo 0 0 0 0
loadi 0 0 0 0
loadi 2 0 0 0
loadi 6 0 0 64
setlt 2 6 7 0
pbranch 7 0 0 0
branchz 0 0 0 5
loadi 12 0 0 360
add 2 12 12 0
storer 0 0 12 0
addi 2 0 2 1
jump 0 0 0 4
store 0 0 0 6
loadi 9 0 0 9
load 6 0 0 6
setlt 0 6 1 0
not 1 0 1 0
pbranch 1 0 0 0
branchz 0 0 0 12
loadi 1 0 0 1
preio 0 0 0 0
output 1 0 0 0
preio 0 0 0 0
input 4 0 0 0
store 4 0 0 4
setlt 0 4 7 0
setlt 4 9 8 0
and 7 8 8 0
pbranch 8 0 0 0
branchz 0 0 0 1
store 1 0 0 6
loadi 1 0 0 1
load 6 0 0 6
setlt 1 6 7 0
not 7 0 7 0
pbranch 7 0 0 0
branchz 0 0 0 12
loadi 2 0 0 2
preio 0 0 0 0
output 2 0 0 0
preio 0 0 0 0
input 5 0 0 0
store 5 0 0 5
setlt 0 5 7 0
setlt 5 9 8 0
and 7 8 8 0
pbranch 8 0 0 0
branchz 0 0 0 1
store 2 0 0 6
loadi 2 0 0 2
load 6 0 0 6
setlt 2 6 7 0
not 7 0 7 0
pbranch 7 0 0 0
branchz 0 0 0 25
load 4 0 0 4
subi 4 0 4 1
loadi 8 0 0 8
times 4 8 8 0
load 5 0 0 5
add 5 8 3 0
store 3 0 0 3
load 3 0 0 3
subi 3 0 3 1
loadi 12 0 0 360
add 12 3 12 0
loadr 10 0 12 0
setlt 0 10 13 0
setlt 10 0 14 0
or 13 14 14 0
not 14 0 14 0
pbranch 14 0 0 0
branchz 0 0 0 4
loadi 1 0 0 1
storer 1 0 12 0
loadi 3 0 0 3
store 3 0 0 6
preio 0 0 0 0
output 9 0 0 0
store 0 0 0 6
loadi 3 0 0 3
load 6 0 0 6
setlt 3 6 7 0
not 7 0 7 0
pbranch 7 0 0 0
branchz 0 0 0 8
load 3 0 0 3
preio 0 0 0 0
output 3 0 0 0
store_ino 3 0 3 0
store 0 0 0 6
loadi 10 0 0 10
preio 0 0 0 0
output 10 0 0 0
noo 0 0 0 0
jump 0 0 0 14
noo 0 0 0 0
halt 0 0 0 0
add 0 0 0 0
