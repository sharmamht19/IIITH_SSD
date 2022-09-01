DELIMITER //
CREATE PROCEDURE Cust_name( In City VARCHAR(30)
)
BEGIN
  select CUST_NAME from customer where WORKING_AREA=City;
END ; //
CALL Cust_name("Bangalore");