use sales;
show tables;

select * from transactions where sales_amount < 0;

select distinct(currency) from transactions;