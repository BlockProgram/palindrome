module.exports = Phrase; 

// Adds `reverse` to Strings (modifying the string object)
String.prototype.reverse =  function reverse() {  
    return Array.from(this).reverse().join(""); 
}
// Adds `blank' method to Strings (return true even if string empty or only whitespace)
String.prototype.blank= function() {  
    return !!(this.match(/^\s*$/g));
} 

// Adds `last` method to Arrays (return last element of the array)
Array.prototype.last = function() { 
    return this.slice(-1);   
 } 
 
// Returns true for a palindrome, false otherwise 
// function palindrome(string) { 
//     let processedContent = string.toLowerCase(); 
//     return processedContent === reverse(processedContent);
//  }

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

// Returns a lowerCase value for phrases 
this.processor = function() {
    return this.letters().toLowerCase(); 
    }; 

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns only the letters in the content
  this.letters = function letters() { 
    return (this.content.match(/[a-z]/gi) || []).join("");
    } 

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {  
      return this.processedContent() === this.processedContent().reverse();
    } else {  
      return false; 
    } 
  }

  // Makes the phrase LOUDER.
this.louder = function() {
    return this.content.toUpperCase(); 
    };
}

//Defines a TranslatedPhrase object 
function TranslatedPhrase(content, translation) {  
    this.content = content; 
    this.translation = translation; 

// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
} 

TranslatedPhrase.prototype = new Phrase(); 