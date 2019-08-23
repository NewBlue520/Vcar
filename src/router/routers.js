module.exports = [
  {
    path: '/', // root page redirect landSource
    name: 'login',
    component: 'login',
  },
  {
    path: '/scan',
    name: 'scan',
    component: 'scan',
    children: [
      {
        path: 'customScan',
        name: 'customScan',
        component: 'customScan'
      }
    ]
  }
];
