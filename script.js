console.log("Testing, testing, 1 2 3 ...")

const countryList = document.getElementById("countriesList");
// assign API to a variable for cleanliness of code
const countryURL = "https://restcountries.com/v3.1/all";
let allCountriesArr;

//set up function to return array of filtered country data objects from API
const getCountries = async() => {
    // Fetch API data
    const countryResponse = await fetch(countryURL);
    //Convert API data to JSON
    allCountriesArr = await countryResponse.json();
    console.log(allCountriesArr);
    // Push into iterable array, newCountriesArr, all countries that have flags
    // let newCountriesArr = [];
    // for (let i = 0; i < allCountriesArr.length; i++){
    //     if (allCountriesArr(i).flags.common.length > 0 && allCountriesArr(i).coatOfArms.common.length > 0){
    //         newCountriesArr.push(allCountriesArr[i]);
    //     };
    // };

    mapCountries(allCountriesArr);
};
getCountries();
// document.getElementById("button").addEventListener("click", getCountries);
const mapCountries = (allCountriesArr) => {
    document.getElementById("countriesList").innerHTML = "";
    allCountriesArr.forEach((country) => {
        const countryInfoLi = document.createElement("li");
        countryInfoLi.innerHTML = "<b>Name:</b> " + country.name.common
         + "<br>" + "<b>Official Name:</b> " + country.name.official
         + "<br>" + "<b>Capital:</b> " + country.capital
         + "<br>" + "<b>Independent:</b> " + country.independent
         + "<br>" + "<b>Member of UN:</b> " + country.unMember
         + "<br>" + "<b>Region:</b> " + country.region
         + "<br>" + "<b>Sub-Region:</b> " + country.subregion
         + "<br>" + "<b>Language(s) Spoken:</b> " + Object.values(country.languages)
         + "<br>" + "<b>Countries Bordered:</b> " + country.borders
         + "<br>" + "<b>Population:</b> " + country.population
         + "<br>" + "<b>Land Area:</b> " + country.area
         + "<br>" + "<b>Official Flag:</b> " + country.flag;
        //country.name.common + "\n" + country.name.official + "\n";
        countryList.appendChild(countryInfoLi);
    });
    console.log("Hello from xcountry");
};
const formSubmission = (event)=>{
    event.preventDefault();
    const newSearch = document.getElementById("CountryList").value;
    console.log(newSearch);

    const FilteredCountryInfoLi = allCountriesArr.filter((country) => {
       let singleCountry = country.name.common.toLowerCase();
       let search = newSearch.toLowerCase();
       return singleCountry.includes(search);
    });
    console.log(FilteredCountryInfoLi);
    mapCountries(FilteredCountryInfoLi);
};
const form = document.getElementById("filtered_form");
form.addEventListener("submit", formSubmission);