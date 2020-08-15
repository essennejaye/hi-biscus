const inquirer = require('inquirer');
const readDept = require('./lib/department');

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
            message: 'What do you wnat to do today?',
            choices: [
                'View all departments.',
                'View all roles.',
                'View all employees.',
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
                readDept();
                break;
            case 'View all roles.':
                readRole();
                break;
            case 'View all employees.':
                readEmp();
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
            name: 'deptName',
            message: 'What is the new department called? Required!',
            validate: deptNameInput => {
                if (!deptNameInput) {
                    console.log('Please enter the departments name!');
                    return false;
                }
                return true;
            }
        }]).then(response => {
            addDept();
        })
}
companyManager();