const inquirer = require('inquirer');
require('./queries/view_queries');
require('./queries/add_queries');

const companyManager = () => {
    console.log(`
    ====================================
    Welcome to your Company Manager App
    ====================================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'toDo',
            message: 'What do you want to do today?',
            choices: [
                'View all departments.',
                'View all roles.',
                'View all employees.',
                'View all managers.',
                new inquirer.Separator(),
                'Add a department.',
                'Add a role.',
                'Add an employee.',
                new inquirer.Separator(),
                'Update an employee.'
            ]
        }
    ]).then(response => {
        switch (response.toDo) {
            case 'View all departments.':
                runQueryJson('queries/demo_queries.json', 'department');
                break;
            case 'View all roles.':
                runQueryJson('queries/demo_queries.json', 'role');
                break;
            case 'View all employees.':
                runQueryJson('queries/demo_queries.json', 'employee');
                break;
            case 'View all managers.':
                //TODO - move runQuery to a common js file and require it where needed
                runQuery('queries/managers.sql');
                break;
            case 'Add a department.':
                newDeptPrompt();
                break;
            case 'Add a role.':
                newRolePrompt();
                break;
            case 'Add an employee.':
                newEmpPrompt();
                break;
            case 'Update an employee.':
                updateEmpPrompt();
        }
    });
};
const newDeptPrompt = () => {
    console.log(`
    =====================
    Add a New Department
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'dept_name',
            message: 'What is the new department called? Required!',
            validate: deptNameInput => {
                if (!deptNameInput) {
                    console.log('Please enter the departments name!');
                    return false;
                }
                return true;
            }
        }]).then(response => {
            addNewDept(response);
        });
};

const newRolePrompt = () => {
    console.log(`
    =====================
    Add a New Role
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the new role title? Required!',
            validate: titleInput => {
                if (!titleInput) {
                    console.log('Please enter the new role title!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'number',
            name: 'salary',
            message: 'What is the salary for this role? Required!',
            validate: salaryInput => {
                if (!salaryInput || typeof salaryInput !== 'number'
                    || salaryInput < 0) {
                    console.log('New role salary must be a number greater than zero!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'number',
            name: 'dept_id',
            message: 'What is the id number of the department the new role belongs to? Required',
            validate: dept_idInput => {
                if (!Number.isInteger(dept_idInput) || dept_idInput < 0) {
                    console.log('New role department id must be a number greater than zero!');
                    return false;
                }
                return true;
            }
        }
    ]).then(response => {
        addNewRole(response);
    });
};

const newEmpPrompt = () => {
    console.log(`
    =====================
    Add a New Employee
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name? Required!",
            validate: first_nameInput => {
                if (!first_nameInput) {
                    console.log('Please enter the employee\'s first name!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name? Required!",
            validate: last_nameInput => {
                if (!last_nameInput) {
                    console.log('Please enter the employee\'s last name!');
                    return false;
                }
                return true;
            }
        },

        {
            type: 'number',
            name: 'role_id',
            message: 'What is the id number for this employee\'s job role? Required!',
            validate: role_idInput => {
                if (!Number.isInteger(role_idInput) || role_idInput < 0) {
                    console.log('New role id must be a number greater than zero!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'confirmManager',
            message: 'Does this employee have a manager?',
            default: true
        },
        {
            when: (answers) => answers.confirmManager === true,
            type: 'number',
            name: 'manager_id',
            message: 'What is the employee\'s manager\'s id number?',
            validate: manager_idInput => {
                if (!Number.isInteger(manager_idInput) || manager_idInput < 0) {
                    console.log('Manager id must be a number greater than zero!');
                    return false;
                }
                return true;
            }
        },
    ]).then(response => {
        if (!response.manager_id) {
            response.manager_id = NULL
        }
        addNewEmp(response);
    });
};

const updateEmpPrompt = () => {
    console.log(`
    ===================
    Update an Employee
    ===================
    `);
    runQueryJson('queries/demo_queries.json', 'employeeList')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'emp_list',
            message: 'Please select an employee to update',
            choices: [queryResults]
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Please enter employee\'s new role id number?',
            validate: role_idInput => {
                if (!Number.isInteger(role_idInput) || role_idInput < 0) {
                    console.log('New role id must be a number greater than zero!');
                    return false;
                }
                return true;
            }
        }
    ]).then(response => {
        updateEmp(response);
    });
}

companyManager();