/*
Name: Linuka Ekanayake
Student_ID: 31474276
Start Date: 18/08/22
Last Modified: 25/08/22
Description: This program will allow users to print the first 'x' amount of words into a file. These can be specified by the user or defaulted at 10 words and file sample.txt. The user can also choose to append selected words into a file of their choice. 
*/

#include <sys/types.h>
#include <sys/stat.h>
#include <sys/file.h>		/* change to <sys/fcntl.h> for System V */
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>      /* needed for perror function */
#include <string.h>

/*
Function_Name:appendFile
Inputs:
	outfile: File that is being written into (1 for std output)
	maxWords: Number of words specified by user or default(10)
	buf[]: String which will contain text that is being written
	
Description: This file appends or prints to terminal a specified string of specified length.
*/
void appendFile(int outfile, int maxWords, char buf[]){
	int words = 0; //Counter for how many words have been read
	int k; //Counter
	
	for(k=0;k<(int)strlen(buf) && words < maxWords;k++){
			if(outfile != 1){
				lseek(outfile,0,SEEK_END);
			}
    		write(outfile,&buf[k],sizeof(buf[k]));
    		/*Need to check if there are 10 or less words in the file
			if there are spaces,tabs,/n then it is a new word. */
    		if(buf[k] == 32 || buf[k] == 9 || buf[k] == 10) {
    				words +=1;
    		}
    }
}
int main (int argc, char *argv[]){
	char buf[999999]; 	//char buffer arbitrarily large to create space 
	int infile,outfile; 	//Files that will be either read or written to
	int i,j,a; 	//Counters
	int maxWords = 10;	//Indicates how many words will be printed from a file
	
	//TASK 1
	//If argc is just 1 then use sample.txt as the source file 
	if (argc == 1) {
		//Default file open sample.txt
		if ((infile = open("sample.txt", O_RDONLY, 0777)) < 0) {
    		exit(1);
    	}
	}
	//TASK 2
	//If argc == 2 then the only possibility is that the user has specified a file to read from 
	else if (argc == 2) { 
      if ((infile = open(argv[1], O_RDONLY, 0777)) < 0) {
		perror(argv[1]);
    	exit(1);
  		}
	
    }
    //TASK 3 & 4
    //If there are 3 to max 6 command line arguements then that mean -a or -n have been used
    else if(argc >= 3 && argc <= 6) {

    	/*Position of source file is fixed and -a needs to have an arguements after it
    	therefore argv[0] and argv[6] can be ignored*/
    	for(j = 1;j<= argc-2;j++){

    		if(strcmp(argv[j],"-a") == 0) {

    			//If j is one there infile is sample.txt
    			if(j == 1){
    				//Check if there is an -n in command line
					for(a=1;a<=argc-1;a++){
						if(strcmp(argv[a],"-n") == 0) {
							//Checking if the next arg is valid 
							if(atoi(argv[a+1]) ==0){
								write(2,"Incorrect input: -n must be followed by int\n",44);
								exit(1);
							} 
							
							//If there is then change argv[a+1] into max words
							maxWords = atoi(argv[a+1]);
							
						}
					}
    				//Open sample.txt 
    				if ((infile = open("sample.txt", O_RDONLY, 0777)) < 0) {
    					exit(1);
    				}
    			
    				//Open destination file 
    				if((outfile = open(argv[j+1],O_WRONLY | O_CREAT,0777))<0) {
    					perror(argv[j+1]);
    					exit(1);
    				}
    			
    				//Read sample.txt 
    				read(infile,buf,sizeof(buf));
    				//Append into destination file 
    				appendFile(outfile,maxWords,buf);
    				
    				close(infile);
    				close(outfile);
    				
    				return 0;
    			
    			}
    			/*If -a is at an index >= 2 that means a file must have been 
    			specified to read out of*/
    			else if(j >= 2){
    				for(a=1;a<=argc-1;a++){
						if(strcmp(argv[a],"-n") == 0) {
							//Checking if the next arg is valid 
							if(atoi(argv[a+1]) ==0){
								write(2,"Incorrect input: -n must be followed by int\n",44);
								exit(1);
							}
							
							//If there is then change argv[a+1] into max words
							maxWords = atoi(argv[a+1]);
							
						}
					}

    				//Open file that is in argv[1] 
    				if ((infile = open(argv[1], O_RDONLY, 0777)) < 0) {
    					perror(argv[1]);
    					exit(1);
    				}
    			
    				//Open destination file 
    				if((outfile = open(argv[j+1],O_WRONLY | O_CREAT,0777))<0) {
    					perror(argv[j+1]);
    					exit(1);
    				}
    			
    				//Read sample.txt 
    				read(infile,buf,sizeof(buf));
    				//Append into destination file 
    				appendFile(outfile,maxWords,buf);
    				
    				close(infile);
    				close(outfile);
    				
    				return 0;
    			
    			}
    		}
    	}
    	//Cases for if there is a "-n" but no "-a"
    	for(j =1;j<=argc-2;j++){
    		//If j ==1 means that sample.txt is infile
    		if(strcmp(argv[j],"-n") == 0 && j == 1){
    		
    				if(atoi(argv[j+1]) ==0){
								write(2,"Incorrect input: -n must be followed by int\n",44);
								exit(1);
					}
					
					//If there is then change argv[a+1] into max words
					maxWords = atoi(argv[j+1]);
					
    				//Open sample.txt 
    				if ((infile = open("sample.txt", O_RDONLY, 0777)) < 0) {
    					exit(1);
    				}
    			
    				
    			
    				//Read sample.txt 
    				read(infile,buf,sizeof(buf));
    				//Append into destination file 
    				appendFile(1,maxWords,buf);
    				
    				return 0;
    		
    			
    		}
    		//If j ==2 that means there is an infile 
    		else if(strcmp(argv[j],"-n") == 0 && j == 2){
    		    	if(atoi(argv[j+1]) ==0){
						write(2,"Incorrect input: -n must be followed by int\n",44);
						exit(1);
					} 
					
					
					//If there is then change argv[a+1] into max words
					maxWords = atoi(argv[j+1]);
					
    				//Open file at argv[1]
    				if ((infile = open(argv[1], O_RDONLY, 0777)) < 0) {
    					exit(1);
    				}
    			
    				//Read sample.txt 
    				read(infile,buf,sizeof(buf));
    				//Append into destination file 
    				appendFile(1,maxWords,buf);
    				
    				close(infile);
    				
    				return 0;
    			
    		}
    	}
    	
    	//If either -a or -n is the last arguement in a command line then it will print this error
    	write(2,"Incorrect input: -a and/or -n need to followed by appropriate specifier\n",74);
    	exit(1);
    	
    }
	read(infile,buf,sizeof(buf));
	
	appendFile(1,maxWords,buf);
	
	close(infile);
	return 0;
}
