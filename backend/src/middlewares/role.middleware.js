function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      console.error(`Forbidden: User role ${req.user ? req.user.role : 'undefined'} is not allowed`);
      console.error(`Allowed roles: ${allowedRoles.join(', ')}`);
      return res.status(403).json({ message: 'Forbidden: insufficient role' });
    }
    next();
  };
}

module.exports = authorizeRoles;