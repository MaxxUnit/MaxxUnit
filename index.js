function Block(letter, rate, used, father, code) {
this. letter = letter;
this. rate = rate;
this. used = used;
this. father = father;
this.code = code;
8
function Find Code(block) {
10
11
if (tree[block.father].code !=
block.code = tree[block.father].code + '1';
13
14
else {
15
16
17
18
if (block.letter == tree[minIndex].letter) {
{
block.code = '0';
else if (block.letter ==
= tree[preminIndex].letter) {
19
block.code = '1';
20
21
else {
22
Find Code(tree[block.father]);
23
block.code = tree[block.father].code + '0';
24
25
26
