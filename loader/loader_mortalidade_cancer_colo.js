var request = require("request");
var fs = require("fs");

console.log("Mortalidade - Câncer de Colo");

var fileOutputName = "bulk_mortalidade_cancer_colo.txt";
var id = 101000;
var url = "";
var datasetname = "mortalidade_cancer_colo"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerColo1524.php?output=json";
result = {"dataset":datasetname, "grupo":"15_24","idade":{min:15,max:24}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerColo2534.php?output=json";
result = {"dataset":datasetname, "grupo":"25_34","idade":{min:25,max:34}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerColo3544.php?output=json";
result = {"dataset":datasetname, "grupo":"35_44","idade":{min:35,max:44}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerColo4554.php?output=json";
result = {"dataset":datasetname, "grupo":"45_54","idade":{min:45,max:54}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerColo5564.php?output=json";
result = {"dataset":datasetname, "grupo":"55_64","idade":{min:55,max:64}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerColo65mais.php?output=json";
result = {"dataset":datasetname, "grupo":"55_64","idade":{min:65,max:99}}
mortalidadeCancer(id, url, result);

function mortalidadeCancer(id, url, result){
	request({
		url: url,
    	json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			var resultSet = body.resultset;
			for (var a = 0; a < resultSet.length; a++) {
				for (var i = 1; i <= 6; i++) {
					var content = JSON.parse(JSON.stringify(result));
					content.ano = parseInt(resultSet[a][0],0);
					content.mortes = parseInt(resultSet[a][i],0);
					content.etnia = body.metadata[i].colName;
					
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
				}
			}
	
	    }
	})
}
		

