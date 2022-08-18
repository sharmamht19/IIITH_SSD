select Essn ,count(Pno) as No_of_Projects from COMPANY.WORKS_ON M
join
(select Mgr_ssn from COMPANY.DEPARTMENT
k1
JOIN
(SELECT Dnum from COMPANY.PROJECT
where Pname="ProductY") k2 ON k2.Dnum=k1.Dnumber) l
on l.Mgr_ssn=M.Essn 
group by Essn;