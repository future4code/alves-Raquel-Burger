create table Actor (
	id varchar(255) primary key,
    name varchar(255) not null,
    salary float not null,
    birth_date date not null,
    gender varchar(6) not null
);

drop table Actor;

insert into Actor (id, name, salary, birth_date, gender)
values (
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"    
);

insert into Actor(id, name, salary, birth_date, gender)
values(
	"002",
    "Glória Pires",
    "1200000",
    "1963-08-23",
    "female"
);

show tables;
show databases;
describe Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João Ninguem",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

select * from Actor;

select * from Actor
where gender = "female";

select salary from Actor
where name = "Tony Ramos";

select id, name, salary from Actor
where salary <= 500000;

SELECT id, nome from Actor WHERE id = "002";

select * from Actor
where (name like "A%") and salary > 30000;

select * from Actor
where name like "%g%" or "%G%";

select * from Actor
where (name like "%a%" or name like "%A%" or  name like "%g%" or name like "%G%") and (salary between 35000000 and 90000000);
