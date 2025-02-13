const login = {
  msg: 'Olá SYSADMIN, autenticação autorizada com sucesso!',
  user: {
    _id: '65384b692bff0787faabce88',
    fullName: 'SYSADMIN',
    mail: 'sysadmin@email.com',
    password: '$2b$10$kEeXDRXLdbLu8.3RJ8zkMu.8O4q4BW4Yn742SipJFcjE8/0ZH8Wfy',
    accessProfile: 'SYSADMIN',
    cpf: '11111111111',
    status: true,
    audit: [
      {
        registeredBy: {
          userId: '111111111111111111',
          userLogin: 'sysadmin@email.com',
        },
        registrationDate: 'terça-feira, 24/10/2023, 19:55:37 BRT',
        registrationNumber: '01',
        _id: '65384b692bff0787faabce89',
      },
    ],
    __v: 0,
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NGI2OTJiZmYwNzg3ZmFhYmNlODgiLCJmdWxsTmFtZSI6IlFhLUNvZGVycy1TWVNBRE1JTiIsIm1haWwiOiJzeXNhZG1pbkBxYWNvZGVycy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRrRWVYRFJYTGRiTHU4LjNSSjh6a011LjhPNHE0Qlc0WW43NDJTaXBKRmNqRTgvMFpIOFdmeSIsImFjY2Vzc1Byb2ZpbGUiOiJTWVNBRE1JTiIsImNwZiI6IjExMTExMTExMTExIiwic3RhdHVzIjp0cnVlLCJhdWRpdCI6W3sicmVnaXN0ZXJlZEJ5Ijp7InVzZXJJZCI6IjExMTExMTExMTExMTExMTExMSIsInVzZXJMb2dpbiI6InN5c2FkbWluQHFhY29kZXJzLmNvbSJ9LCJyZWdpc3RyYXRpb25EYXRlIjoidGVyw6dhLWZlaXJhLCAyNC8xMC8yMDIzLCAxOTo1NTozNyBCUlQiLCJyZWdpc3RyYXRpb25OdW1iZXIiOiIwMSIsImNvbXBhbnlJZCI6IlFhLkNvZGVycyIsIl9pZCI6IjY1Mzg0YjY5MmJmZjA3ODdmYWFiY2U4OSJ9XSwiX192IjowLCJpYXQiOjE3MDA2OTM0NTUsImV4cCI6MTcwMDc3OTg1NX0.VtaA30s4kw5ft51ldSryHsoDJG3ZoBDW6drZOwT-Jh0',
};

module.exports = {
  ValidateToken: {
    checkToken: true,
  },

  LoginResponse: {
    ...login,
  },

  LoginRequest: {
    mail: 'sysadmin@email.com',
    password: '1234@Test',
  },
}; 