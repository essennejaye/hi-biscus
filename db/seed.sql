INSERT INTO departments (dept_name)
 VALUES
    ('Accounting'),
    ('Human Resources'),
    ('R & D'),
    ('Marketing'),
    ('Logistics'),
    ('Sales');

INSERT INTO roles (title, salary, dept_id)
VALUES 
    ('Manager', 100000.00, 1),
    ('Manager', 103000.00, 2),
    ('Manager', 102000.00, 4),
    ('Manager', 100500.00, 5),
    ('Developer', 95000, 3),
    ('Supply Clerk', 30000, 5),
    ('Benefits Specialist', 65000, 2),
    ('Staffing Coordinator', 50000, 2),
    ('Inventory Clerk', 40000, 5),
    ('Researcher', 90000, 3),
    ('Accountant', 85000, 1),
    ('Payroll Specialist', 70000, 1),
    ('Marketing Analyst', 87000, 4),
    ('Content Creator', 65000, 4),
    ('Sales Representative', 62000, 6),
    ('Account Manager', 55000, 6);

INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES 
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 2, NULL),
    ('Piers', 'Gaveston', 3, NULL),
    ('Charles', 'LeRoi', 4, NULL),
    ('Katherine', 'Mansfield', 5, NULL),
    ('Dora', 'Carrington', 10, NULL),
    ('Edward', 'Bellamy', 7, 2),
    ('Montague', 'Summers', 8, 2),
    ('Octavia', 'Butler', 11, 1),
    ('Unica', 'Zurn', 12, 1),
    ('James', 'Fraser', 6, 5),
    ('Jack', 'London', 9, 5),
    ('Robert', 'Bruce', 13, 4),
    ('Peter', 'Greenaway', 14, 4),
    ('Derek', 'Jarman', 15, NULL),
    ('Paolo', 'Pasolini', 16, NULL),
    ('Heathcote', 'Williams', 5, NULL),
    ('Sandy', 'Powell', 10, NULL),
    ('Emil', 'Zola', 6, 5),
    ('Sissy', 'Coalpits',11, 1),
    ('Antoinette', 'Capet', 14, 4),
    ('Samuel', 'Delany', 16, NULL),
    ('Tony', 'Duvert', 7, 2),
    ('Dennis', 'Cooper', 9, 5),
    ('Monica', 'Bellucci', 16, NULL);