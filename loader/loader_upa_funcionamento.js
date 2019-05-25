var request = require("request");
var fs = require("fs");

console.log("Saude - UPA em funcionamento");

var fileOutputName = "bulk_saude_upa_funcionamento.txt";
var id = 1020000;
var url = "";
var datasetname = "upa_funcionamento"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "http://i3geo.saude.gov.br/i3geo/ogc.php?service=WFS&version=1.0.0&request=GetFeature&typeName=upa_funcionamento_cnes&outputFormat=JSON";
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
					content.nome = resultSet[a].properties[4].no_fantasia;
					content.endereco = {}
					content.endereco.logradouro = resultSet[a].properties[7].no_logradouro;
					content.endereco.numero = resultSet[a].properties[6].nu_endereco;
					content.endereco.bairro = resultSet[a].properties[5].no_bairro;
					content.endereco.cidade = resultSet[a].properties[3].cidade;
					content.endereco.uf = resultSet[a].properties[2].uf;
					content.endereco.cep = resultSet[a].properties[1].co_cep;
					content.telefone = resultSet[a].properties[8].nu_telefone;
					content.porte = resultSet[a].properties[12].porte;
					content.data_funcionamento = new Date(resultSet[a].properties[9].ano_upa_func, resultSet[a].properties[10].mes_upa_func);
					content.location = {}
					content.location.lat = resultSet[a].geometry.coordinates[0];
					content.location.lon = resultSet[a].geometry.coordinates[1];
					
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
			}
	
	    }
	})
}
		

