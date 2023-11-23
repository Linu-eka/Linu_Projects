This file will explain the operation of the fileutil.c file. To compile the file,
use the gcc -o fileutil fileutil.c. This will create a executable file. To run 
this file use ./fileutil (command line arguements). 

Using just ./fileutil will print 10 words from the default sample.txt file. It is
assumed to be a precondition that there is a file called sample.txt in the folder.

To specify a file to read from add a file name directly after the ./fileutil (argv[1]).
E.g. ./fileutil a.txt will read from the txt file. 

To specify the number of lines that should be read use the -n command. The arguement
directly after the -n command will be taken as the number of lines. Only integers 
will be accepted. This -n command can be placed at any arguement number as long as 
there is a integer after it(can't be last arguement).
E.g. ./fileutil a.txt -n 20 will print the first 20 words from a.txt.

To specify a file to append to use the -a command. The arguement directly after 
the -a command will be taken as the file that is being appended. If no file of 
that name exists a new file will be created. 
E.g. ./fileutil a.txt -a b.txt; The first 10 words from a.txt will be appended 
into b.txt. If b.txt does not exist it will be created.

The -a and -n commands can be used in any order as long as the related specifier 
comes after it. Therefore neither of these commands to be the last arguement in 
a command line.
