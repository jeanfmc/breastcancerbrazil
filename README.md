# Brazilian public data formatted to be used on Kibana

### Dataset:
All dataset are provided on the dataset folder and formatted to be used on the bulk method from Elasticsearch API.

---

#### Mortalidade de Câncer de Mama:
**Name:** mortalidade_cancer_mama \
**File:** /dataset/loaded/bulk_mortalidade_cancer_mama.txt \
**Source:** http://dados.gov.br/dataset/mspainelsage_59 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "grupo" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "ano" : Number,
  "mortes" : Number,
  "etnia" : String 
}
```

---

#### Mortalidade de Câncer de Colo de Útero:
**Name:** mortalidade_cancer_colo \
**File:** /dataset/loaded/bulk_mortalidade_cancer_colo.txt \
**Source:** http://dados.gov.br/dataset/mspainelsage_59 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "grupo" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "ano" : Number,
  "mortes" : Number,
  "etnia" : String 
}
```

---

#### UPAs em funcionamento
**Name:** upa_funcionamento \
**File:** /dataset/loaded/bulk_saude_upa_funcionamento.txt \
**Source:** http://dados.gov.br/dataset/upa_funcionamento_cnes \
**Structure:**
```javascript 
{
  "dataset" : String,
  "nome" : String,
  "endereco" : {
  	"logradouro" : String,
  	"numero" : String,
  	"bairro" : String,
  	"cidade" : String,
  	"uf" : String,
  	"cep" : String
  },
  "telefone" : String,
  "porte" : String,
  "data_funcionamento" : Date,
  "location" : {
    "lat" : Number,
    "lon" : Number
  } 
}
```

---

#### Razão entre exames de mamografia em mulheres de 50 a 69 anos e população feminina da mesma faixa etária e local de residência
**Name:** razao_50_69_mamografia_regiao \
**File:** /dataset/loaded/bulk_razao_50_69_mamografia_regiao.txt \
**Source:** http://dados.gov.br/dataset/wms_idsus_nt_rzmamogr \
**Structure:**
```javascript 
{
  "dataset" : String,
  "cidade" : String,
  "nota" : Float,
  "data" : Date,
  "regiao" : Geometry
}
```

---

#### Relação de mamografias em mulheres entre 50 e 69 anos por estado
**Name:** exame_50_69_mamografia_estado \
**File:** /dataset/loaded/bulk_exame_50_69_mamografia_estado.txt \
**Source:** http://dados.gov.br/dataset/mspainelsage_43 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "nome" : String,
  "ano" : Number,
  "idade" : {
    "lat" : Number,
    "lon" : Number
  },
  "estado" : String,
  "exame_total_" : Number,
  "exame_idade" : Number
}
```

---

#### Relação de exames citopatológicos em mulheres entre 50 e 69 anos por estado
**Name:** exame_50_69_citopatologico_estado \
**File:** /dataset/loaded/bulk_exame_50_69_citopatologico_estado.txt \
**Source:** http://dados.gov.br/dataset/mspainelsage_43 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "nome" : String,
  "ano" : Number,
  "idade" : {
    "lat" : Number,
    "lon" : Number
  },
  "estado" : String,
  "exame_total_" : Number,
  "exame_idade" : Number
}
```

