show databases;
create database MehulDB;
use mehuldb;
show tables;

-- Cities Table 
create table CITIES (CITY char(20) primary key, STATE char(20));

insert into CITIES(CITY, STATE) VALUES
('Mumbai', 'Maharashtra'),
('Delhi', 'Delhi'),
('Bangalore', 'Karnataka'),
('Chennai', 'Tamil Nadu'),
('Pune', 'Maharashtra');

select * from CITIES;

-- Warehouses Table 
create table WAREHOUSES (
WID int auto_increment primary key,
WNAME char(30) not null,
LOCATION char(20), 
EXTRA_CONTEXT json,
CITY char(20),
foreign key(CITY) references CITIES(CITY)
);

insert into WAREHOUSES (WNAME, LOCATION, EXTRA_CONTEXT, CITY) VALUES
('Warehouse A', 'Pune', '{"capacity": 1000}', 'Pune'),
('Warehouse B', 'Mumbai', '{"capacity": 800}', 'Mumbai'),
('Warehouse C', 'Delhi', '{"capacity": 1200}', 'Delhi'),
('Warehouse D', 'Bangalore', '{"capacity": 950}', 'Bangalore'),
('Warehouse E', 'Chennai', '{"capacity": 700}', 'Chennai');

select * from WAREHOUSES;

-- Store table
create table STORES (
SID int auto_increment primary key, 
STORE_NAME CHAR(20), 
LOCATION_CITY CHAR(20),
WID int,
foreign key(WID) references WAREHOUSES(WID)
);

insert into STORES (STORE_NAME, LOCATION_CITY, WID) values
('Store 1', 'Pune', 1),
('Store 2', 'Mumbai', 2),
('Store 3', 'Delhi', 3),
('Store 4', 'Bangalore', 4),
('Store 5', 'Chennai', 5);

insert into STORES (STORE_NAME, LOCATION_CITY, WID) values
('Store 6', 'Pune', 1);

select * from STORES;

-- Customer Table 
create table CUSTOMER (
C_NO int auto_increment primary key, 
CNAME char(50), 
ADDR varchar(50), 
CU_CITY char(20)
);

insert into CUSTOMER (CNAME, ADDR, CU_CITY) values
('John Doe', '123 Main Street', 'Mumbai'),
('Jane Smith', '456 Elm Avenue', 'Delhi'),
('Bob Johnson', '789 Oak Road', 'Bangalore'),
('Alice Brown', '101 Pine Lane', 'Chennai'),
('David Wilson', '222 Maple Drive', 'Pune');

select * from CUSTOMER;

-- Orders Table 
create table ORDERS (
O_NO int auto_increment primary key, 
C_NO int,
ODATE date,
foreign key(C_NO) references CUSTOMER(C_NO)
);

drop table ORDERS;

INSERT INTO ORDERS (C_NO, ODATE) VALUES
(1, '2023-10-17'),
(2, '2023-10-18'),
(3, '2023-10-19'),
(4, '2023-10-20'),
(5, '2023-10-21');

select * from ORDERS;

-- Items Table
create table ITEMS (
ITEMNO int auto_increment primary key, 
DESCRIPTION text, 
WEIGHT decimal(5,2),
COST decimal(5,2)
);

insert into ITEMS (DESCRIPTION, WEIGHT, COST) values
('Widget', 2.50, 10.99),
('Gadget', 1.75, 7.49),
('Doodad', 3.25, 15.25),
('Thingamajig', 4.00, 18.99),
('Whatchamacallit', 2.10, 9.50);

select * from ITEMS;

-- Junction table for the many-to-many relationship between customer and orders
create table CUSTOMER_ORDERS(
C_NO int,
O_NO int,
foreign key(C_NO) references CUSTOMER(C_NO),
foreign key(O_NO) references ORDERS(O_NO)
);

insert into CUSTOMER_ORDERS (C_NO, O_NO) value
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

select * from CUSTOMER_ORDERS;

-- Junction table for the many-to-many relationship between items and orders
create table ITEMS_ORDERS (
    ITEMNO int,
    O_NO int,
    ORDERED_QUT int,
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO),
    FOREIGN KEY (O_NO) REFERENCES ORDERS(O_NO)
);

INSERT INTO ITEMS_ORDERS (ITEMNO, O_NO, ORDERED_QUT) VALUES
(1, 1, 5),
(2, 2, 3),
(3, 3, 4),
(4, 4, 6),
(5, 5, 2);

select * from ITEMS_ORDERS;




