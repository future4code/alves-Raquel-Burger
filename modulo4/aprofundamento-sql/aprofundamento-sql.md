# Exercícios aprofundamento SQL

## 1
### a)
vai remover a coluna salary
### b)
muda o nome da coluna e a quantidade de caracteres da string
### c)
mantem o nome da coluna e só muda a quantidade de caracteres
### d)
alter table Actor change gender gender varchar(100);

## 2
### a)
update Actor set name = "Nandinha Montenegro" where id = "003";
update Actor set birth_date = "1939-10-19" where id = "003";

### b)
update Actor set name = upper(name) where id = "005";
update Actor set name = lower(name) where id = "005";

### c)
update Actor set name = "Ju Paes" where id = "005"; 

### d)
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
nada foi afetado, pois nenhum linha possui esse id

## 3
### a)
delete from Actor where name = "Nandinha Montenegro";
### b)
delete from Actor where salary > 1000000 and gender = "male";

## 4
### a)
select max(salary) from Actor;
### b)
select min(salary) from Actor;
### c)
select count(*), gender from Actor where gender = "female";
### d)
select sum(salary) from Actor;

## 5
### a)
ela traz o número de mulheres e homens agrupados
### b)
select id, name from Actor
where gender = "male"
order by name desc;
### c) 
select * from Actor
order by salary asc;
### d)
select * from Actor
order by salary desc
limit 3;
### e)
select avg(salary), gender from Actor
group by gender;

## 6
### a)
alter table Movies add playing_limit_date date;
### b)
alter table Movies change rating rating float;
### c)
update Movies set playing_limit_date = "2019-05-21"
where id = "002";

update Movies set playing_limit_date = "2023-05-21"
where id = "001";
### d)
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não da nenhum erro, porém nada é alterado