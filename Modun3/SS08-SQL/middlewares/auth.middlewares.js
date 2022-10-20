module.exports.requireAuth = (req, res, next) => {
  //   console.log(signedCookies);
  if (Object.keys(req.signedCookies).length === 0) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};
module.exports.notRequireAuth = (req, res, next) => {
  //   console.log(signedCookies);
  if (Object.keys(req.signedCookies).length !== 0) {
    res.redirect("/");
  } else {
    next();
  }
};
