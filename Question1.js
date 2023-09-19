// Write a function that takes an object with two properties (country, continent) as argument It should return the value of the property with key country

function continentCountry(input){
    if (input.hasOwnProperty('country')&& input.hasOwnProperty('continent')) {
        return input.country;
      } else
       {
        return console.log("No key value pair"); 
      }

}
  
  
  const obj1 = {
    country: 'Kenya',
    continent: 'Africa'
  };
  
  const obj2 = {
    
    country: 'India'
  };

  console.log("output with key value");
  const countryName = continentCountry(obj1);
  console.log(countryName); 

  console.log("\n");

  console.log("output without key value");
  const countryName2 = continentCountry(obj2);
  console.log(countryName2); 






 



