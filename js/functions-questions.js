
//These first questions are all about calling (or using) functions that have already been written

// 1.Look at the following function showMsg().  
// Write a line of code that will call this function so that the message 'functions are great' is displayed in the console.


function showMsg()
{
	console.log("functions are great");
}


// 2. Look at the following function showMsgWithParam(). 
// a) Write a line of code that will call this function so that the message 'functions are great' is displayed in the console.
// b) Make several calls to the function, each time passing a different value to msg. 

function showMsgWithParam(msg)
{
	console.log(msg);
}


// 3. Look at the following function getWeather(), it returns a string.
// Write a line of code that will call this function and display the returned value in the console


function getWeather(){
	return "wet and cold";
}


// 4. The following function converts a measurement in miles to kilometres (1 mile = 1.60934km). 
// Write a program that will ask the user for a distance in miles, call this function, and then display the distance in kilometres in the console.


function convertMilesToKm(miles)
{
	return miles*1.60934
}


// 5. The following function, addTwoNumbers(), adds two numbers together and returns the result.
// Write a program that will ask the user for two numbers, call this function, and then display the total in the console.


function addTwoNumbers(num1,num2)
{
	return num1 + num2;
}



// 6. At the end of your degree course, the University needs to decide if it will award you a degree.
// In order to obtain a degree you need to have accumulated 360 credits.
// Write a program that will ask the user how many credits they have.
// The program should call awardDegree() and feedback to the user telling them if they can be awarded a degree.


function awardDegree(credits)
{
	if(credits < 360){
 		return false;
 	}
 	return true;
}


// 7. Look at the following getPositiveNumbers() function. It accepts an array of numbers and returns only those numbers that are greater than zero.
// a) Write some code that will call this function. Use a forEach loop output the elements of the returned array.


function getPositiveNumbers(arrOfNumbers)
{
	const posNumbers = arrOfNumbers.filter(function(num){
		if(num > 0){
			return true;
		}
		return false;
	})
	return posNumbers;
}

//These questions are about writing functions


// 8. Look at the following function printCountryDetails().
// a) Write a line of code that will call this function.


function printCountryDetails()
{
	console.log(`England is a country in Europe.`);
}


// b) Add a parameter to the function, call the parameter countryName. 
// Call the function passing a value into the countryName parameter.
// To test your function, uncomment the following lines.

//printCountryDetails("France"); //outputs 'England is a country in Europe.'
//printCountryDetails("England") //outputs 'France is a country in Europe.'

// c) Add additional parameters for the continent, capital city and population of the country. 
// To test your function, uncomment the following lines.

// printCountryDetails("England", "Europe", "London", 56000000); //outputs England is a country in Europe with a population of 56000000. London is the capital city. 
// printCountryDetails("France", "Europe", "Paris", 65000000); //outputs France is a country in Europe with a population of 65000000. Paris is the capital city. 


// 9. Modify your answer to Question 8 so that the function accepts a single argument. 
// This argument should be a country object with continent, capital city and population properties. 
// The function should print the country's details.
// To test your function, uncomment the following lines.

// const country = {name : "England", capital : "London", continent : "Europe", population: 53000000};
// printCountryDetails(country); //outputs 'England is a country in Europe with a population of 53000000. London is the capital city.' 


// 10. Modify your answer to Question 9 so that the function accepts an array of country objects as the argument. 
// To test your function, uncomment the following lines.

// const countries=[
//     {name : "England", capital : "London", continent : "Europe", population: 56000000},
//     {name : "France", capital : "Paris", continent : "Europe", population: 65000000},
//     {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
// ]

// printCountryDetails(countries); //displays the details for each country in the console.

// 11. Write a function called convertInchesToCms(). 
// The function needs to accept a single argument, a measurement in inches. 
// The function should convert the measurement in inches into centimetres (1 inch = 2.54 cms) and return the result. 
// To test your function, uncomment the following lines.

// const inches = prompt("Enter a number of inches");
// const cms = convertInchesToCms(inches);
// console.log(`${inches} is ${cms}.`)


// 12. Write a function called getAvgThreeNums(). 
// The function needs to accept a three arguments, all numbers. 
// The function should calculate the mean average of the numbers and return the result. 
// To test your function, uncomment the following lines.

// const num1 = parseInt(prompt("Enter a number"));
// const num2 = parseInt(prompt("Enter another number"));
// const num3 = parseInt(prompt("Enter a third number"));
// const avg = getAvgThreeNums(num1, num2, num3);
// console.log(`The average of ${num1}, ${num2} and ${num3} is ${avg}.`)


// 13. Write a function called filterImageFileNames(). 
// It should accept an array of filename and returns only those filenames that have a .png or .jpg extension. 
// To test your function, uncomment the following lines.


//const fileNames = ["report.doc", "kitten.png", "pen.jpg", "index.html", "mug.png"];
//const imageFileNames = filterImageFileNames(fileNames);

// imageFileNames.forEach(function(fileName){
// 	console.log(fileName);
// })


// 14. Uncomment the following code. Write some additional code that will:
// a) Call the functions addStudents(), getPassMark() and getPassingStudents(), and then print out the list of passing students in the console.
// b) Create an additional function called printStudents(). printStudents() will need to accept a single argument, an array of student objects. 
// The function will then print the name of each student in this array to the console. 
// The function doesn't need to return anything. Modify the answer to (a) so that you use the printStudents() function.
// c) Create an additional function called getHighestMarkStudent(). 
// getHighestMarkStudent() will need to accept a single argument, an array of student objects. 
// The function should then return the student with the highest mark. Test this works.

// function getNewStudent()
// {
//   const firstName = prompt("Enter a first name");
//   const lastName = prompt("Enter a last name");
//   const mark = parseInt(prompt(`What mark did ${firstName} ${lastName} get?`));
//   const newStudent = {firstName: firstName, lastName: lastName, mark: mark};
//   return newStudent;
// }

// function addStudents()
// {
//   const students=[];
//   const howMany=parseInt(prompt("How many students details would you like to enter?"));
//   for(let i=0;i<howMany;i++){
//       const student = getNewStudent();
//       students.push(student);
//   }
//   return students;
// }

// function getPassMark()
// {
// 	const passMark = parseInt(prompt("What is the pass mark?"));
// 	return passMark;
// }

// function getPassingStudents(arrOfStudents,passMark)
// {
// 	const passingStudents = arrOfStudents.filter(function(student){
// 		if(student.mark>passMark){
// 			return true;
// 		}
// 		return false;
// 	});
// 	return passingStudents;
// }



// 15. Previously we looked at a program that calculates an employee's wage based on the number of hours they have worked.
// Re-structure this code to use a number of functions - getUserHours(), validHours(), calcWages() and printWages().
// Here's some example code to show how these functions could be used.


// const hours = getUserHours();
// if(validHours(hours)){
// 	const wages = calcWages(hours);
// 	printWages(hours, wages);
// }else{
// 	console.log("You need to enter a number between 1 and 80");
// }


// 16.  Write a function called typeOfTriangle(). 
// It should accept three arguments that represent the length of the three sides of a triangle.
// The function should work out if the triangle is an equilateral triangle (all sides the same length), an isosceles triangle (two sides of the same length), or a scaline triangle (all sides different lengths. 
// The function should return a string, either 'equilateral', 'scalene' or 'isosceles'. 
// To test your function, uncomment the following lines.


// console.log(typeOfTriangle(2,4,2)); //should output isoceles
// console.log(typeOfTriangle(2,2,2)); //should output equilateral
// console.log(typeOfTriangle(1,2,3)); //should output scalene

