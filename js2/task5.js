const checkForSpam = function(message) {
     message = message.toLowerCase();
    const forSpam = ["spam", "sale"];

    for (let spam of forSpam) {
        if (message.includes(spam)) {
        return true;
        }
    }
        return false;
  };
  
 
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true