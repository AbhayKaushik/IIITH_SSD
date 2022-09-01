delimiter #
CREATE PROCEDURE Add2Numbers(IN num1 INT, IN num2 INT, OUT result INT) 
BEGIN 
  SELECT num1 + num2 INTO result FROM DUAL; 
END;#
delimiter ;
-- Add2Numbers(2,3,@output);#
-- SELECT @output as SUM;#
