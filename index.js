const express = require("express")
const app = express()
app.listen(3000)
const users = [{
  name : 'John' ,
  kidneys: [{
    healthy: true
  }]
}];
 app.use(express.json());
app.get("/" , function (req,res){
  const johnkidneys = users[0].kidneys;
  const numberofkidneys = johnkidneys.length;
  let numberofhealthyKidneys = 0 ;
  for (let i=0; i<johnkidneys.length ; i++){
    if (johnkidneys[i].healthy){
      numberofhealthyKidneys += 1;
    }
  }
  const numberofUnhealthyKidneys = numberofkidneys - numberofhealthyKidneys;
  res.json({
    numberofkidneys,
    numberofhealthyKidneys,
    numberofUnhealthyKidneys
  })
})
app.post("/" , function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "done!"
  })
})
app.put ("/" , function(req, res){
  for ( let i=0 ; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;

  }
  res.json({})
})


app.delete ("/" , function(req, res){
  const newKidneys = [];
  for ( let i=0 ; i<users[0].kidneys.length; i++){
    if ( users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy: true
      })
    }
  }

  users[0].kidneys = newKidneys;
  res.json({msg: " double done"})
})
