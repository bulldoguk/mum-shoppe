module.exports = {
    apps: [
      {
        name: 'mum-shoppe',
        exec_mode: 'fork',
        instances: '1', // Or a number of instances
        script: 'npm run serve',
        args: 'start'
      }
    ]
  }