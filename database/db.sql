-- creando bd

create database crudprueba;

use crudprueba;

create table tarticulos(id int auto_increment primary key, nombre varchar(40));
create table articulos(id int auto_increment primary key, nombre varchar(30) not null, precio int, peso int, tipo int);

show tables;

describe tarticulos;
describe articulos;