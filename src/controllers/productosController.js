const controller = {};

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM articulos', (err, productos) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM tarticulos', (err, categorias) => {
                if (err) {
                    res.json(err);
                }
                res.render('productos', {
                    data: {'productos': productos, 'categoria': categorias}
                });
            });
        });
    });
};

controller.categorias = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tarticulos', (err, categorias) => {
            if (err) {
                res.json(err);
            }
            res.render('productos', {
                data: {'categorias': categorias}
            });
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('Insert into articulos set ?', [data], (err, productos) => {
            console.log(productos);
            res.redirect('/');
        });
    })
}

controller.savecategoria = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('Insert into tarticulos set ?', [data], (err, categorias) => {
            console.log(categorias);
            res.redirect('/');
        });
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM articulos WHERE id = ?", [id], (err, productos) => {
                if (err) {
                    res.json(err);
                }
                conn.query('SELECT * FROM tarticulos', (err, categorias) => {
                    if (err) {
                        res.json(err);
                    }
                    res.render('editaproductos', {
                        data: {'productos': productos[0], 'categoria': categorias}
                    });
                });
            });
    });
};

controller.editcategoria = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM tarticulos WHERE id = ?", [id], (err, categorias) => {
            console.log(categorias);
            res.render('editacategorias', {
                data: categorias[0]    
            })
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const productonuevo = req.body;
    console.log(productonuevo);
    req.getConnection((err, conn) => {
        conn.query('UPDATE articulos set ? where id = ?', [productonuevo, id], (err, productos) => {
            console.log(err);
            res.redirect('/');
        });
    });
};
controller.updatecategoria = (req, res) => {
    const { id } = req.params;
    const categorianueva = req.body;
    console.log(categorianueva);
    req.getConnection((err, conn) => {
        conn.query('UPDATE tarticulos set ? where id = ?', [categorianueva, id], (err, categorias) => {
            console.log(err);
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM articulos WHERE id = ?', [id], (err, productos) => {
            res.redirect('/');
        });
    });
};

controller.deletecategoria = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM tarticulos WHERE id = ?', [id], (err, categorias) => {
            console.log(categorias);
            res.redirect('/');
        });
    });
}




module.exports = controller;