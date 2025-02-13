const bcrypt = require('bcrypt');
const User = require('../api/userRegister/userModel');
const roles = require('./rolesPermissions');
const GetCurrentDateHelper = require('../api/common/getCurrentDateHelper');

const { SYSADMIN } = roles.ROLES_PERMISSIONS;

const password = '1234@Test';
const saltPassword = bcrypt.genSaltSync();
const passwordHash = bcrypt.hashSync(password, saltPassword);

const userSchema = {
  userId: '111111111111111111',
  userLogin: 'sysadmin@email.com',
};

const createNewAdmin = async () => {
  const countSysAdmin = await User.countDocuments({ accessProfile: SYSADMIN });
  const date = GetCurrentDateHelper();
  if (!countSysAdmin) {
    const newSYSAdmin = new User
    ({
      fullName: 'SYSADMIN',
      mail: 'sysadmin@email.com',
      password: passwordHash,
      accessProfile: 'SYSADMIN',
      status: true,
      audit: [{
        registrationDate: date,
        registeredBy: userSchema,
        registrationNumber: '01',
      }],
    });
    await newSYSAdmin.save();
    console.log(`SYSADMIN ${newSYSAdmin.fullName} created successfully.`);
  } console.log('SYSADMIN existing.');
};

module.exports = createNewAdmin;
