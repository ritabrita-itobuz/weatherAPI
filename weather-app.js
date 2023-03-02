function getWeatherData() {
    const weatherdata = [
        {
            location: 'kolkata',
            lat: '22',
            lng: '12',
            condition: {
                text:"Partly cloudy",
                icon:"//cdn.weatherapi.com/weather/64x64/day/116.png",
                code:"1003"
            },
        }
    ]
    // const result = [];
    // return result 
    var data = weatherdata.find(obj=> obj.location==='kolkata')
    console.log(data);
}
getWeatherData();

// getWeatherData('kolkata')