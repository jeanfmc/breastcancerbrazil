var request = require("request");
var fs = require("fs");

console.log("Saude - Ocorrências de mamografia por região de mulheres 50-69");

var fileOutputName = "bulk_mamografia_50_69_regiao.txt";
var id = 103000;
var url = "";
var datasetname = "mamografia_regiao_50_69"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "http://i3geo.saude.gov.br/i3geo/ogc.php?service=WFS&version=1.0.0&request=GetFeature&typeName=wms_idsus_nt_rzmamogr&outputFormat=JSON";
result = {"dataset":datasetname}
loadData(id, url, result);


function loadData(id, url, result){
	request({
		url: url,
    	json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			var resultSet = body.features;
			for (var a = 0; a < resultSet.length; a++) {
					var content = JSON.parse(JSON.stringify(result));
					
					content.cidade = resultSet[a].properties[0].no_cidade;
					content.nota = parseFloat(resultSet[a].properties[1].nota);
					content.data = new Date(resultSet[a].properties[2].data_ref);
					content.regiao = resultSet[a].geometry.coordinates[0];
					
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
			}
	
	    }
	})
}
