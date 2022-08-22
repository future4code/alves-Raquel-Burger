# Banco de Dados e Introdução SQL

## 1
### A) 
varchar: representa string, o numéro entre () é o número máximo de caracteres aceitos
date: exige que o dado inserido seja em formato de data

### B) 
show data bases: aparem as data bases que possuo
show tables:  aparecem as tabelas que possuo na minha data base

### C)
Mostra os dados da tabela Actor, com suas colunas, tipos e obrigatoriedade

## 2
### A)
insert into Actor(id, name, salary, birth_date, gender)
values(
	"002",
    "Glória Pires",
    "1200000",
    "1963-08-23",
    "female"
);

### B)
Error Code: 1062. Duplicate entry '2' for key 'PRIMARY'
Está dizendo que estou tentando duplicar uma chave

### C)
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

### D)
Error Code: 1364. Field 'nome' doesn't have a default value
Código de erro: 1364. O campo 'nome' não tem um valor padrão
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João Ninguem",
  400000,
  "1949-04-18", 
  "male"
);

### E)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### F)
Já foram adicionados nos exercicíos anteriores

## 3
### a)
select * from Actor
where gender = "female"

### b)
select salary from Actor
where name = "Tony Ramos"

### c)
select id, name, salary from Actor
where salary <= 500000

### e)
Error Code: 1054. Unknown column 'nome' in 'field list'
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

## 4
### a)
Está buscando nomes que comecem com A ou J e ganhem mais de 3000000

### b)
select * from Actor
where (name like "A%") and salary > 30000;

### c)
select * from Actor
where name like "%g%" or "%G%"

### d)

select * from Actor
where (name like "%a%" or "%A%" or "%g%" or "%G%") and (salary between 35000000 and 90000000);


