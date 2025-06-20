export const environment = {
  production: false,
  keycloak: {
    issuer: 'http://localhost:8080',
    realm: 'SicTest',
    clientId: 'SicTest'
  },
  checkLoginInterval: 300,
  hostName: 'http://localhost:4200',
  api_gateway: '/api/sic'
  
};
