delimiter #
CREATE PROCEDURE getCustomerName(IN City varchar(100)) 
BEGIN 
  SELECT CUST_NAME FROM customer WHERE customer.CUST_CITY = City; 
END;#
delimiter ;
