const Holidays = require("date-holidays");
const weather = require("weather-js");

class travellingRecommender {
  isItRecommended(countries, numberOfDays) {
    
    const holidaysList = new Holidays("");
    const allHolidays = holidaysList.getHolidays(2018);
    const isHoliday = holidaysList.isHoliday(new Date("2018-12-25 00:00:00"));
    console.log(isHoliday);

    return false;
  }

  checkSingleCountry(country, numberOfDays) {

  }

  howIsTheWeather(country, numberOfDays){
    //please promisify this using util.promisify (so the function returns a promise and you don't have to make new Promise youself)
    weather.find({ search: country, degreeType: "C" }, function(
      err,
      result
    ) {
      let youNeedCoat = false;
      result.forEach(location => {
        location.forecast.forEach(specificDay => {
          if (specificDay.low < 15) {
            youNeedCoat = true;
          }
        });
      });
      console.log(youNeedCoat ? "You need a coat" : "Leave your coat");
    });
    
  }
}

new travellingRecommender().isItRecommended("Haifa", [new Date()]);