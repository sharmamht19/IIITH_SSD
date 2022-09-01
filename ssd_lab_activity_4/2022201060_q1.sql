DELIMITER $$
CREATE PROCEDURE SUM_nok(
	IN n1 INT,
	IN n2 INT,
	OUT result INT
)
BEGIN
	Set result=n1+n2;
END $$
DELIMITER ;
Call SUM_nok(2,3,@result);
SELECT @result;