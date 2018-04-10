var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {



    var url="https://developer.goibibo.com/api/bus/search/?app_id=07bc95a3&app_key=9771b768734c9e0656a00a196b8710bc&format=json&source=bangalore&destination=hyderabad&dateofdeparture=20180428";
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            var data1 = JSON.parse(body);
            var array=[];
            for(var i=0;i<10;i++)
            {
                for(var j=0;j<data1.data.onwardflights[i].BPPrims.list.length;j++){
                    var msg2 =
                        {
                            BusType:data1.data.onwardflights[i].BusType,
                            origin:data1.data.onwardflights[i].origin,
                            destination:data1.data.onwardflights[i].destination,
                            BPName: data1.data.onwardflights[i].BPPrims.list[j].BPName ,
                           BPContactNumber:data1.data.onwardflights[i].BPPrims.list[j].BPContactNumber ,
                            BPTime: data1.data.onwardflights[i].BPPrims.list[j].BPTime ,
                            BPLandmark: data1.data.onwardflights[i].BPPrims.list[j].BPLandmark ,
                            totalbasefare:data1.data.onwardflights[i].fare.totalbasefare ,
                            DepartureTime:data1.data.onwardflights[i].DepartureTime ,
                            TravelsName: data1.data.onwardflights[i].TravelsName ,
                            ugcid:data1.data.onwardflights[i].ugcid

                        }
                    array.push(msg2);


                }
            }
            res.render('new',{array1:array});

        }


        console.log(array);


    });





});



module.exports = router;



































