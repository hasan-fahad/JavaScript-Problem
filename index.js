// Problem 01: let's play a mind game

function mindGame(digit) { /*The function mindGame takes one parameter, called digit. The function consists of if-else statement that says to return the summation of the function. The statement return specifies the value returned by the function. */
    if(digit >= 0){
        let summation = (((digit * 3 + 10) / 2) - 5);
        return summation;
    }
    else{
        let errorReading = 'Use valid digit, you are using wrong components!';
        return errorReading;
    }
}


// Problem 02: finding even or odd

function evenOdd(word){  /*The function evenOdd takes one parameter, called word. The function consists of if-elseif-else statement that says to return the even odd of the function and also find the error in if-elseif-else. The statement return specifies the value returned by the function. */
    const input = word.length;
    if(typeof word != 'string')
    {
      return 'Use valid string, you are using wrong components!';
    }
    else if(input % 2 == 0){
        return 'The word is even!';

     }
     else{
        return 'The word is odd!';
     }
}



// Problem 03: Is Less or Greater than seven

 function isLGSeven(digit) { /*The function isLGSeven takes one parameter, called digit. The function consists of if-elseif-else statement that says to return the less or greater of the function. The statement return specifies the value returned by the function. */
    if(digit < 7){
        return digit-7;
    }
    else if(digit > 7){
        return digit*2;
    }
    else{
        return 'Use valid digit, you are using wrong components!';
    }
  
  }


//   problem 04: Finding Bad data

  function findingBadData(arr){ /*The function findingBadData takes one parameter, called arr. The function consists of for statement that says to return the badData of the function. The statement return specifies the value returned by the function. */
    let badData = 0;
    for (let i = 0; i < arr.length; i++) {
        let component = arr[i];
        if (!Array.isArray(arr)) {
            return 'Use valid array, you are using wrong components!';
        }
        else if ( component < 0){
            badData ++;
        }
        else{
            continue;
        }
    }
    return badData;
} 
    

// problem 05: Convert your gems into diamond

function gemsToDiamond(friendOne, friendTwo, friendThree) { /*The function gemsToDiamond takes three parameter, called friendOne, friendTwo, friendThree. The function consists of if-elseif-else statement that says to return the total gems of the function. The statement return specifies the value returned by the function. */
    const oneFriendGems = 21;
    const twoFriendGems = 32;
    const threeFriendGems = 43;

    const one = oneFriendGems * friendOne;
    const two = twoFriendGems * friendTwo;
    const three = threeFriendGems * friendThree;

    const totalGems = one + two + three;
    if (totalGems >= 2000){
        return totalGems - 2000;

    }
    else if (totalGems < 2000){

    return totalGems;
    }
    else{
        return 'Use valid gems number, you are using wrong components!';
        
    }


}
