var output = [],final = [];
var fs = require('fs');
var readline = require('readline').createInterface({
    input: fs.createReadStream('../Indicators.csv')
});
readline.on('line', function(line) {           
    line.split("\n");
    var arr = line.split(",");
    var asiaarray=['ARM','AZE','BHR','BGD','BTN','BRN','KHM','CHN','CXR','CCK','IOT','GEO','HKG',
'IND','IDN','IRN','IRQ','ISR','JPN','JOR','KAZ','KWT','KGZ','LAO','LBN','MAC','MYS','MDV',
'MNG','MMR','NPL','PRK','OMN','PAK','PSE','PHL','QAT','SAU','SGP','KOR','LKA','SYR','TWN',
'TJK','THA','TUR','TKM','ARE','UZB','VNM','YEM']
        for(i in asiaarray){
            if(arr[1]===asiaarray[i] && arr[2]==='\"Life expectancy at birth' && arr[3]===' female (years)\"')
            {
                output.push({
                countrycode : arr[1],
                year : arr[5],
                female : arr[6]
            });
             
        }
        if(arr[1]===asiaarray[i] && arr[2]==='\"Life expectancy at birth'  && arr[3] ===' male (years)\"')
        { 
        output.push({
                countrycode : arr[1],
                year : arr[5],
                male : arr[6]
        });     
    }  }
});
readline.on('close', function(line) {
for(let i=0;i<output.length;i+=2)
{
    obj = {
        countrycode: output[i].countrycode,
        year: output[i].year,
        female: output[i].female,
        male: output[i+1].male
    }
    final.push(obj)
}
    fs.createWriteStream('../json/asialife_expectancy.json').write(JSON.stringify(final,null,2),'utf-8')
});
