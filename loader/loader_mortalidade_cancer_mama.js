var request = require("request");
var fs = require("fs");

console.log("Mortalidade - Câncer de Mama e Colo de Útero");

var fileOutputName = "ds-mortalidadeCancerMama.txt";
var id = 100000;
var url = "";
var datasetname = "mortalidade_cancer_mama"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerMama1019.php?output=json";
result = {"dataset":datasetname, "grupo":"10_19","idade":{min:10,max:19}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerMama2029.php?output=json";
result = {"dataset":datasetname, "grupo":"20_29","idade":{min:20,max:29}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerMama3039.php?output=json";
result = {"dataset":datasetname, "grupo":"30_39","idade":{min:30,max:39}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerMama4049.php?output=json";
result = {"dataset":datasetname, "grupo":"40_49","idade":{min:40,max:49}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerMama5069.php?output=json";
result = {"dataset":datasetname, "grupo":"50_69","idade":{min:50,max:69}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/cancerMamaColo/cancerMama70mais.php?output=json";
result = {"dataset":datasetname, "grupo":"70_99","idade":{min:70,max:99}}
mortalidadeCancer(id, url, result);

/*
*/
/*

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
*/


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
		
