
use libreria

create table libros(
    titulo varchar(100),
    autor varchar(45),
    editorial varchar(45),
    precio float,
    cantidad integer,
);

create table libros(
    titulo varchar(100),
    autor varchar(45),
    editorial  varchar(45),
    precio float,
    cantidad integer
);


insert into libros (titulo,autor, editorial  , precio, cantidad)
values
     ('El aleph','Borges','Emece',45.4, 100),
     ('Alicia en el pais', 'Lewis Carrol', 'Planeta', 32.3, 150),
     ('Matematica estas ahi','Paenza','Planeta',15,300);

     
describe libros;