const dbConn = require('../db/configDb');
const conTab = require('console.table');

addNewDept = (data) => {
    dbConn.query(
        'INSERT INTO departments SET ?',
        {
            dept_name: data.dept_name
        },
        (err, res) => {
            if (err) throw err;
            console.log(res.affectedRows + ' ' + data.dept_name + ' department inserted!')
        }
    )
};

addNewRole = (data) => {
    dbConn.query(
        'INSERT INTO roles SET ?',
        {
            title: data.title,
            salary: data.salary,
            dept_id: data.dept_id
        },
        (err, res) => {
            if (err) throw err;
            console.log(res.affectedRows + ' ' + data.title + ' role inserted!')
        }
    )
};

addNewEmp = (data) => {
    dbConn.query(
        'INSERT INTO employees SET ?',
        {
            first_name: data.first_name,
            last_name: data.last_name,
            role_id: data.role_id,
            manager_id: data.manager_id
        },
        (err, res) => {
            if (err) throw err;
            console.log(res.affectedRows + ' ' + data.first_name + ' ' + data.last_name + ' employee inserted!')
        }
    )
};

updateEmp = (data) => {
    dbConn.query(
        'UPDATE employees SET ? WHERE ?',
        [
            {
                role_id: data.role_id
            },
            {
                emp_id: data.emp_id
            }
        ], 
        (err, res) => {
            if (err) throw err;
            // console.log(res);
            console.log(res.affectedRows + ' ' + data.name + ' employee updated!')
        }

    )
}
