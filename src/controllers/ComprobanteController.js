function index(req, res) {
    req.getConnection((err, conn) => {
        conn.query('call MostrarRegistros()', (err, comprobantes) => {
            if(err) {
                res.json(err);
            }
            console.log(comprobantes);
            res.render('comprobantes/index', { comprobantes });
        });
    });
}

function create(req, res) {
    res.render('comprobantes/create')
}

function insertar(req, res) {
    console.log(req.body);
}

module.exports = {
    index: index,
    create: create,
    insertar: insertar
}