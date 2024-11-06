const { db } = require('../../index');


//dynamic table for gpus
exports.getCoolerColumns = (req, res) => {
    const sql = `
      SELECT COLUMN_NAME, DATA_TYPE 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'cpu_coolers' 
      AND TABLE_SCHEMA = 'pc-builder'
      AND COLUMN_NAME != 'id_cpucooler';
    `;
    db.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(result);
      });
};

exports.getAllCoolers = (req, res) => {
    const sql = 'SELECT * FROM cpu_coolers';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};