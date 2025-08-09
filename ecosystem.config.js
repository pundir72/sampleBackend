module.exports = {
  apps: [
    {
      name: 'service-5010',
      cwd: '/home/deepak/Desktop/365/sample/service-5010',
      script: 'index.js',
      instances: 1,
      exec_mode: 'fork',
      env: { PORT: 5010 },
      autorestart: true,
      watch: false
    },
    {
      name: 'service-5011',
      cwd: '/home/deepak/Desktop/365/sample/service-5011',
      script: 'index.js',
      instances: 1,
      exec_mode: 'fork',
      env: { PORT: 5011 },
      autorestart: true,
      watch: false
    },
    {
      name: 'service-5012',
      cwd: '/home/deepak/Desktop/365/sample/service-5012',
      script: 'index.js',
      instances: 1,
      exec_mode: 'fork',
      env: { PORT: 5012 },
      autorestart: true,
      watch: false
    },
    {
      name: 'service-5013',
      cwd: '/home/deepak/Desktop/365/sample/service-5013',
      script: 'index.js',
      instances: 1,
      exec_mode: 'fork',
      env: { PORT: 5013 },
      autorestart: true,
      watch: false
    },
    {
      name: 'service-5014',
      cwd: '/home/deepak/Desktop/365/sample/service-5014',
      script: 'index.js',
      instances: 1,
      exec_mode: 'fork',
      env: { PORT: 5014 },
      autorestart: true,
      watch: false
    }
  ]
};
