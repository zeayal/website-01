const authMiddleWare = (req, res, next) => {
    console.log('req.session', req.session.user)
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({
      code: -1,
      message: "请先登录",
      data: null,
    });
  }
};

module.exports = authMiddleWare;
