Delimiter //
CREATE PROCEDURE ANS()
BEGIN
DECLARE ok INT DEFAULT 0;

   DECLARE name_ VARCHAR(255) DEFAULT "";
   DECLARE city_ VARCHAR(255) DEFAULT "";
   DECLARE grade_ VARCHAR(255) DEFAULT "";
   DECLARE country_ VARCHAR(255) DEFAULT "";
   DECLARE ans CURSOR FOR
   SELECT CUST_NAME,CUST_CITY,CUST_COUNTRY,GRADE from customer where AGENT_CODE LIKE 'A00%';
   DECLARE CONTINUE HANDLER FOR NOT FOUND SET ok = 1;
   OPEN ans;
   label:LOOP
   FETCH ans INTO name_, city_, country_,grade_;
   IF ok= 1 THEN LEAVE label;
   END IF;
   SELECT CONCAT(name_,' ', city_,' ', grade_, ' ', country_) AS PlayerData;
   END LOOP label;
   CLOSE ans;
END//
CALL ANS();