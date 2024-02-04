 const errorMiddleware = (err, req, res, next) =>{
    if(err){
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = errorMiddleware;