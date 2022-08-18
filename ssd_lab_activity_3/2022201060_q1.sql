select concat(Fname,' ',Lname) as Fullname  , Mgr_ssn  , Dnumber as Dept_Id, Dname as Dept_name from COMPANY.EMPLOYEE
P join
(select Dname ,Mgr_ssn, Dnumber from COMPANY.DEPARTMENT l
join
(SELECT DISTINCT Dnum from COMPANY.PROJECT  k
join 
(select Essn ,Pno from COMPANY.WORKS_ON
where Hours<40) n 
on n.Pno=k.Pnumber ) m
on m.Dnum=l.Dnumber) F on P.ssn=F.Mgr_ssn;