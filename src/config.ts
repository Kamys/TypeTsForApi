export const Option = {
  baseURL: 'https://dev.tasker.cronix.ms/api/',
  authorisation: {
    httpMethod: 'post',
    dataBody: {
      email: "user@example.com",
      password: "string",
    },
    path: '/api/login',
  },
  apiMethods: [
    {
      httpMethod: 'get',
      dataInUrl: [
        {
          key: 'id',
          value: '1',
        }
      ],
      path: '/posts/{id}',
    }
  ]
};
