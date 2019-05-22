# Brazilian public data formatted to be used on Kibana

### Dataset:
All dataset are provided on the dataset folder and formatted to be used on the bulk method from Elasticsearch API.

---

#### Mortalidade - Câncer de Mama:
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

#### Mortalidade - Câncer de Colo de Útero:
**Name: mortalidade_cancer_colo \
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

#### Saúde -UPAs em funcionamento
**Name: upa_funcionamento \
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
