
const Main = async (app, express) => {
  try {
    const RoleService = require('../../../Services/V1/roles.js');

    const RouterInterfaces = require('../RouterInterfaces.js');
    const Role = new RouterInterfaces(new RoleService());
    
    return Role.SetRouter();
  } catch ($err) {
    console.error(`Server router error! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;