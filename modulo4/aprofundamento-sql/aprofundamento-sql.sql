SET SQL_SAFE_UPDATES = 0;

alter table Actor add favorite_ice_cream_flavor varchar(255);
alter table Actor add type varchar(255) default "NotDirector";
alter table Actor change gender gender varchar(100);

update Actor set name = "Nandinha Montenegro" where id = "003";
update Actor set birth_date = "1939-10-19" where id = "003";

update Actor set name = upper(name) where id = "005";
update Actor set name = lower(name) where id = "005";

update Actor set name = "Julis Paes",
salary = "500000",
birth_date = "1989-12-07",
gender = "male",
type = "Director"
where id = "005";

update Actor set name = "lalala" where id = "123";

delete from Actor where name = "Nandinha Montenegro";

delete from Actor where salary > 1000000 and gender = "male";

select max(salary) from Actor;

select min(salary) from Actor;

select count(*), gender from Actor where gender = "female";

select sum(salary) from Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

select id, name from Actor
where gender = "male"
order by name desc;

select * from Actor
order by salary asc;

select * from Actor
order by salary desc
limit 3;

select avg(salary), gender from Actor
group by gender;

alter table Movies add playing_limit_date date;
alter table Movies change rating rating float;

update Movies set playing_limit_date = "2019-05-21"
where id = "002";

update Movies set playing_limit_date = "2023-05-21"
where id = "001";

delete from Movies where id = "001";

