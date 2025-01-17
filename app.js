 document.write(` <h1><strong>Javascript_Strings_Assignment:</strong></h1>`);

 // Question 1 Write a program that takes two inputs for first and last name.
  document.write(`<h3>Question no 1: Combine First and Last Name.</h3>`);
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let fullName = firstName + " " + lastName;

  // Display greeting
   document.write("Hello " + fullName);

  // hr line
   document.write(`<hr>`);


 // Question 2 Write a program to take input about user favorite mobile phone model.
  document.write(`<h3>Question no 2:Favorite Mobile Model and Length of String.</h3>`);
  
  let favoritePhone = prompt("Enter your favorite mobile phone model:");
  document.write("My favorite phone is: " + favoritePhone + "<br>");

  // Display the message and length of the string
  document.write("Length of string: " + favoritePhone.length);

  // hr line
   document.write(`<hr>`);


 // Question 3 wrie a program to find the index of n in the word pakistani.
  document.write(`<h3>Question no 3:Index of Letter 'n' in the Word "Pakistani":.</h3>`);
  
  let word = "Pakistani";
  let indexOfN = word.indexOf('n');

  document.write("String: " + word + "<br>");
  document.write("Index of 'n': " + indexOfN);

  // hr line
  document.write(`<hr>`);


  //Question 4 wrie a program to find the last index of letter "I" in the word "Hello world".
  document.write(`<h3>Question no 4: Last Index of Letter 'l' in "Hello World":.</h3>`);

  let phrase = "Hello World";
  let lastIndexOfL = phrase.lastIndexOf('l');

  document.write("String: " + phrase + "<br>");
  document.write("Last index of 'l': " + lastIndexOfL);

  // hr line
  document.write(`<hr>`);


  //Question 5 wrie a program to replace "Hyder" to "Islam" in the word "Islamabad".
  document.write(`<h3>Question no 5:Replacement in the word Hyderabad to Islamabad :.</h3>`);

  let city = "Hyderabad";
  let updatedCity = city.replace("Hyder", "Islam");

  document.write("City: " + city + "<br>");
  document.write("After replacement: " + updatedCity); 

  // hr line
  document.write(`<hr>`);


  //Question 6  wrie a program to convet string in numbers.
  document.write(`<h3>Question no 6:Conversion of strings in to Numbers:.</h3>`);
  
  //Initializa the string and number.
  let str = "472";
  let num = Number(str);

  //Display the results of stings.
   document.write("Value: " + str + "<br>");
   document.write("Type: " + typeof str + "<br>");

     //Display the results of stings.
  document.write("Converted Value:" + num + "<br>" );
  document.write("Type after conversion:" + typeof num);

  
  document.write("<h4>--THE END--</H4>");







  