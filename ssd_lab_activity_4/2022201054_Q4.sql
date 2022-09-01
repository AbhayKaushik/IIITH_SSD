delimiter #
CREATE PROCEDURE CustomerDetailsbyAgent()
BEGIN
DECLARE customer_name varchar(100);
DECLARE customer_city varchar(100);
DECLARE customer_country varchar(100);
DECLARE customer_grade varchar(10);

DECLARE END_LOOP INT DEFAULT 0;

DECLARE c_iter CURSOR FOR SELECT CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE FROM customer WHERE AGENT_CODE like "A00%"; 

DECLARE continue handler FOR NOT FOUND SET END_LOOP=1;

OPEN c_iter;
get_details: LOOP

  FETCH c_iter INTO customer_name, customer_city, customer_country, customer_grade;

  IF END_LOOP=1 THEN
    LEAVE get_details;
  END IF;

  SELECT customer_name, customer_city, customer_country, customer_grade;

END LOOP get_details;
CLOSE c_iter;

END;#

-- CALL CustomerDetailsbyAgent();

