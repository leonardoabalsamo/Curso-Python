create table alumnos (
    id int NOT NULL auto_increment,
    nombre varchar(45) NOT NULL,
    apellido varchar(45) NOT NULL,
    primary key(id)
)

describe alumnos;

create table materias (
    id_materia int NOT NULL auto_increment,
    nombre_materia varchar(45) NOT NULL,
    primary key(id_materia)
)

describe materias;

insert into alumnos (nombre,apellido)
values('Alan' , 'Gomez');


insert into materias (nombre_materia)
values ('Php')

select * from materias