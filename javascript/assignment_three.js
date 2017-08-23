var output = [];
var fs = require('fs');
var readline = require('readline').createInterface({
    input: fs.createReadStream('../Indicators.csv')
});
var c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var asiaarray = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei Darussalam",
   "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan",
   "Kuwait", "Kyrgyz Republic", "Lao PDR", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "Oman",
   "Pakistan", "Philippines", "Qatar", "Russian Federation", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic",
   "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam"]

readline.on('line', function(line) {           
    line.split("\n");
    var arr = line.split(",");
   

	var countarray=[]

        for(i in asiaarray){

                if(arr[0]===asiaarray[i] && arr[2]==='\"Life expectancy at birth' && arr[3]===' total (years)\"')
                {
                    c[i]+=parseFloat(arr[6])
                }
                }
                   
             })
readline.on('close', function(line) {
for(let i=0;i<asiaarray.length;i++)
{
    obj= {
        country: asiaarray[i],
        value: c[i]
    }
    output.push(obj)
}
  output.sort(function(a,b){return b.value-a.value})

//console.log(output)
   console.log(output.slice(0,5));
   fs.createWriteStream('../json/top5.json').write(JSON.stringify(output.slice(0,5),null,2),'utf-8');
});
