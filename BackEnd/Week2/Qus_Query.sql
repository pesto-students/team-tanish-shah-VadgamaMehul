show databases;
use mehuldb;
show tables;

-- 1. Find the item that has the minimum weight. 
select * from ITEMS where WEIGHT = (select min(WEIGHT) from ITEMS);

-- 2. Find the different warehouses in "Pune".
select * from warehouses where city = 'Pune';

-- 3. Find the details of items ordered by a customer named "John Doe".
select i.ITEMNO, i.DESCRIPTION, io.ORDERED_QUT, c.CNAME from customer c 
join orders o on  o.C_NO = c.C_NO
join items_orders io on io.O_NO = o.O_NO 
join items i on i.ITEMNO = io.ITEMNO
where c.CNAME = 'John Doe';

-- 4. Find a Warehouse that has the maximum number of stores.
select  w.WID, w.WNAME, w.LOCATION, COUNT(s.SID) AS storeCount from stores s 
join warehouses w on w.WID = s.WID
GROUP BY w.wid, w.wName, w.location
ORDER BY storeCount > 1 DESC
LIMIT 1;

-- 5. Find an item that is ordered for a minimum number of times.
select * from items_orders where ORDERED_QUT = (select min(ORDERED_QUT) from items_orders);

-- 6. Find the detailed orders given by each customer.
select c.C_NO, c.CNAME, c.ADDR, c.CU_CITY, o.ODATE, io.ORDERED_QUT, i.DESCRIPTION, i.WEIGHT, i.COST from customer c
join orders o on o.C_NO = c.C_NO
join items_orders io on io.O_NO = o.O_NO
join items i on  i.ITEMNO = io.ITEMNO;
