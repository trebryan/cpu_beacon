var request = require('request');
var os = require('os-utils');


var requestLoop = setInterval(function(){
  os.cpuUsage(function(v){
    request.post(
       'http://159.89.133.27:3000/api/beacons',
       { json: { cust_id: 'Trebs-Mac', beacon_name: 'Test - CPU', value: v } },
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               console.log(body)
           }
       }
    );
  });
}, 1000);
