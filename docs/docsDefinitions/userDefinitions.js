const user = {
  fullName: 'Teste do Teste',
  mail: 'test@test.com.br',
  accessProfile: 'ADMIN',
  password: '1234@Test',
};

// const { secret, ...allowedProperties } = mock
const { ...userResponse } = user;

const userAudit = {
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
};

module.exports = {
  ListUserResponse: {
    users: 'Retorna uma lista de usuários.',
  },

  IndexUserResponse: {
    _id: '65384b692bff0787faabce88',
    ...user,
    status: true,
    ...userAudit,
  },

  CountUserResponse: {
    count: 20,
  },

  //################################### // ##############################################################################

  RegisterUserRequest: {
    ...user,
    confirmPassword: '1234@Test',
  },
  RegisterUserResponse: {
    msg: 'Olá Teste do Teste, cadastro realizado com sucesso.',
    user: {
      _id: '64c83ab4ff1812cf46e4b7c9',
      ...userResponse,
      status: true,
      ...userAudit,
      __v: 0,
    },
  },
  // ################################### // ##############################################################################

  UpdateUserRequest: {
    fullName: 'Test Test',
    mail: 'test@test.com',
  },
  UpdateUserResponse: {
    'msg': 'Dados atualizados com sucesso.',
    getUser: {
      ...user,
      status: true,
      ...userAudit,
      __v: 0,
    },
  },

  // ################################### // ##############################################################################

  UpdatePasswordUserRequest: {
    password: '1234@Test',
    confirmPassword: '1234@Test',
  },
  UpdatePasswordUserResponse: {
    msg: 'Senha atualizada com sucesso.',
  },

  // ################################### // ##############################################################################

  UpdateStatusUserRequest: {
    status: true,
  },
  UpdateStatusUserResponse: {
    msg: 'Status do usuário atualizado com sucesso.',
  },

  // ################################### // ##############################################################################

  DeleteAdminResponse: {
    msg: 'Admin deletado com sucesso.',
  },
  DeleteResponse: {
    msg: 'Usuário deletado com sucesso.',
  },
}; 