// 1. Write an algorithm that read a sentence, which ends with a point, character by character, and to determine://
 
 let sentence= "Simi is a girl."  //Declaring variable//
length= sentence.length

 index=0
 for (let i = 0; i <sentence.length; i++) {
       console.log(sentence.length)
           
} 

// 2. The number of words in a sentence//
function Wordcount(sentence){  
  if (sentence.length==0) return 0;
  const words=sentence.split(" ")  //making use of split method
  return words.length;
}

console.log(Wordcount('Simi is a girl.'))

  
     
//3. The number of vowels in the sentence//
let sentence="Simi is a girl.";
 let count=0
 for( let i=0; i<=sentence.length; i++){
      if (sentence[i]=="a"){
         count++;
    }
      else if (sentence[i]=="e"){
           count++;
      }
      else if(sentence[i]=="i"){
        count++;
     }
    else if (sentence[i]=="o"){
          count++;
     }
     else if (sentence[i]=="u"){
         count++;
     }

 }
 console.log(count);

