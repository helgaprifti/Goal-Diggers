

create table users (
	id int not null auto_increment,
    name varchar(50) not null,
    surname varchar(50) not null,
    email varchar(50) not null,
    username varchar(50) not null,  
    password varchar(50) not null,
    roleId int not null,
    foreign key (roleId) references Roles (roleId),
    primary key (id) 
);

create table Roles (
	roleId int not null auto_increment,
    roleName varchar(50) not null,
    
    primary key (roleId)
);
ALTER TABLE Roles add permissionId int not null; 
ALTER TABLE Roles ADD FOREIGN KEY (permissionId) REFERENCES RolePermissions (id);
ALTER TABLE Roles add orderId int not null; 
ALTER TABLE Roles ADD FOREIGN KEY (orderId) REFERENCES orders (orderId);

create table RolePermissions(
	permision varchar(50) not null,
    id int not null, 
    primary key(id)
);

create table employee(
	id int not null auto_increment,
    ssn varchar(50) not null unique,
    wage varchar(50) not null,
    address varchar(50) not null,
    workHours varchar(50),
    birthday date not null,
    roles int not null,
    primary key (id),
    foreign key (roles) references Roles(roleId)
);

create table Orders(
	orderId int not null auto_increment,
    pId int not null,
    pName varchar(50) not null,
    price int, 
    primary key (orderId),
    foreign key (pId) references Products(pID)
);

create table Products(
	pId int not null auto_increment,
    
    pName varchar(50) not null,
    price int not null,
    primary key (pId)
    
);

create table Food(
	id int not null auto_increment,
    dishType varchar(50) not null,
    pId int not null,
    primary key (id),
    foreign key (pId) references Products(pId)
);

create table Drinks (
	id int not null auto_increment,
    expirationDate date,
    stock int,
    pId int not null,
    primary key (id),
    foreign key (pId) references Products(pId)
);

create table AlcoholiDrinks(
	id int not null auto_increment,
    typess int,
	primary key (id),
    foreign key (typess) references Drinks(id)
);

create table NonAlcoholiDrinks(
	id int not null auto_increment,
    typess int,
	primary key (id),
    foreign key (typess) references Drinks(id)
);

ALTER TABLE AlcoholiDrinks add name varchar(50); 
ALTER TABLE NonAlcoholiDrinks add name varchar(50); 


create table Tables (
	id int not null auto_increment,
    seating int not null,
    primary key (id),
    userId int not null,
    foreign key (userId) references users(id)
);
	

create table Bill (
	id int not null auto_increment,
    tableId int not null,
    amount int,
    primary key(id),
    foreign key(tableId) references Tables(id)
);