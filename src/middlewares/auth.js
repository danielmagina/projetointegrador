module.exports = (req,res,next) => {

    if (req.session.usuario) return next ()

    return res.redirect ('login')
}