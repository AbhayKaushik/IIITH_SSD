SELECT Dnum, D.Dname, count(distinct Plocation) FROM PROJECT P INNER JOIN DEPARTMENT D ON P.Dnum = D.Dnumber WHERE Dnum IN (SELECT Dnumber FROM DEPARTMENT WHERE Mgr_ssn IN (SELECT Essn FROM DEPENDENT WHERE Sex="F" GROUP BY Essn HAVING count(*) > 1));
