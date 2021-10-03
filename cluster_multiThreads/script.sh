curl --silent https://next.json-generator.com/api/json/get/NJafGjxXq | 
    jq '[.[] | {nome: .name, categoria: .category}]' | tee myfile.json
