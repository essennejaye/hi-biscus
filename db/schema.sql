-- DROP DATABASE IF EXISTS company_db;
-- CREATE DATABASE company_db;
USE company_db;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    dept_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY (dept_id)
);

CREATE TABLE roles (
    role_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(30)  NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    dept_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (role_id),
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(dept_id) 
);

CREATE TABLE employees (
    emp_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_id INT UNSIGNED,
    PRIMARY KEY (emp_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(role_id) 
);
