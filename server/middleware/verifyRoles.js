// Note: Using the rest (...) operator to pass as many parameters as we want
const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Note: We should always have a request since verifyJWT executes before this, but just in case...
    // It should always have roles, otherwise it is not valid
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
