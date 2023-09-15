// 1. Write an algorithm that read a sentence, which ends with a point, character by character, and to determine://
 
 let sentence= "Simi is a girl."  //Declaring variable//
length= sentence.length //Get the length of the sentence

 index=0
 for (let i = 0; i <sentence.length; i++) {
       console.log(sentence.length)
           
} 

//2. The number of words in a sentence//
 function Wordcount(sentence){  
  if (sentence.length==0) return 0; // If the sentence is empty, return 0
  const words=sentence.split(" ")  //// Split the sentence into words using space as the separator
   return words.length;  // Return the count of words
 }

 console.log(Wordcount('Simi is a girl.'))

  
     
3. The number of vowels in the sentence//
let sentence="Simi is a girl.";
 let count=0 // Initialize the vowel count
  for( let i=0; i<=sentence.length; i++){  // Loop through each character in the sentence
       if (sentence[i]=="a"){ // Check if the character is 'a'
          count++;
     }
       else if (sentence[i]=="e"){  // Check if the character is 'e'
           count++;
       }
       else if(sentence[i]=="i"){  // Check if the character is 'i'
         count++;
      }
     else if (sentence[i]=="o"){  // Check if the character is 'o'
           count++;
      }
     else if (sentence[i]=="u"){  // Check if the character is 'u'
          count++;  // Increment the vowel count if a vowel is found
      }

  }
  console.log(count);

