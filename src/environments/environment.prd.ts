export const environment = {
  production: true,
  keycloak: {
    issuer: 'http://localhost:8080',
    realm: 'SicTest',
    clientId: 'SicTest'
  },
  checkLoginInterval: 300,
  hostName: 'http://localhost',
  api_gateway: '/api/sic'
  
};