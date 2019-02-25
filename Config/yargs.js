const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task.'
};

const complete = {
    alias: 'c',
    default: true,
    desc: 'Check as complete or pending the task'
}

const argv = require('yargs').command('crear', 'Create a To Do Element', { description })
    .command('actualizar', 'Update a To Do element', {
        description,
        complete
    }).command('borrar', 'Delete a created task', { description }).help()
    .argv;

module.exports = {
    argv
}