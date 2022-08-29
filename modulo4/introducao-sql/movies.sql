create table Movies (
	id int primary key,
    name varchar(255) not null unique,
    synopsis text not null,
    release_date date not null,
    rating int not null    
);

insert into Movies (id, name, synopsis, release_date, rating)
values (
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
insert into Movies (id, name, synopsis, release_date, rating)
values (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
insert into Movies (id, name, synopsis, release_date, rating)
values (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

insert into Movies (id, name, synopsis, release_date, rating)
values (
	"004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região",
    "2000-09-10",
    10
);

select * from Movies;

select id, name, rating from Movies
where id = 2;

select * from Movies
where name = "Se eu fosse você";

select id, name, synopsis from Movies
where rating >= 7;

select * from Movies
where name like "%vida%";

select * from Movies
where name like "%povo%" or synopsis like "%povo%";

select * from Movies
where release_date < "2022-08-22";

select * from Movies
where name like "%marido%" or synopsis > 7;