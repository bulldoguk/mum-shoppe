module.exports = {
    apps: [
      {
        name: 'mum-shoppe',
        exec_mode: 'fork',
        instances: '1', // Or a number of instances
        script: 'npm run build && npm run start',
        args: 'start'
      }
    ]
  }