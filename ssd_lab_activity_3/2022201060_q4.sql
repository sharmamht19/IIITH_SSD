
select F1.Dnumber, F1.Dname , NO_OF_LOCATION from COMPANY.DEPARTMENT F1
JOIN
(select n.Dnumber, COUNT(Dlocation) AS NO_OF_LOCATION from COMPANY.DEPT_LOCATIONS
n JOIN
( select Dnumber from COMPANY.DEPARTMENT M
join
(SELECT Essn ,count(Dependent_name) as D FROM COMPANY.DEPENDENT
where Sex="F"
group by Essn) k
on M.Mgr_ssn=k.Essn) l
on l.Dnumber=n.Dnumber
group by n.Dnumber) F 
on F.Dnumber=F1.Dnumber;