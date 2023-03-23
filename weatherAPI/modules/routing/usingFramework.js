const http = require('http');
const port = 200; 

const data = [
    {
        location: 'Kolkata',
        tempC: '33',
        tempF: '91.4',
        condition: {
            text:"Mist",
            feelsLikeC: "30.9",
            feelsLikeF:"87.5",
            humidity: "34s"
        },
    },
    {
        location: 'London',
        tempC: '4.0',
        tempF: '39.2',
        condition: {
            text:"Overcast",
            feelsLikeC: "1.2",
            feelsLikeF:"34.2",
            humidity: "75"
        },
    },
    {
        location: 'Paris',
        tempC: '1',
        tempF: '33.8',
        condition: {
            text:"Fog",
            feelsLikeC: "-2",
            feelsLikeF:"28.5",
            humidity: "93"
        },
    },
    {
        location: 'New York',
        tempC: '4.4',
        tempF: '39.9',
        condition: {
            text:"Clear",
            feelsLikeC: "0.6",
            feelsLikeF:"33.1",
            humidity: "57"
        },
    },
    {
        location: 'Mexico',
        tempC: '4.5',
        tempF: '34.9',
        condition: {
            text:"Clear",
            feelsLikeC: "0.6",
            feelsLikeF:"33.1",
            humidity: "57"
        },
    },
    {
        location: 'Tokyo',
        tempC: '13',
        tempF: '55.4',
        condition: {
            text:"Partly Cloudy",
            feelsLikeC: "12",
            feelsLikeF:"53.6",
            humidity: "30"
        },
    },
]
;

function getRoutesBasedData(route, data) {
    let status = 200;
    console.log('route', route);
    return JSON.stringify({
        apiData: data
    })
}

function getRequestData(req) {
    if (req.url === '/') {
       return getRoutesBasedData(req.url, data)
    } else if(req.url === '/name') {
        return  getRoutesBasedData(req.url, data)
    } else {
        return getRoutesBasedData('NOT FOUND', data)
    }
}

const ourServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/txt'});
    res.end(getRequestData(req));
});

ourServer.listen(port, () => {
    console.log('port ... ', port);
})



