const { db } = require('../../index');


//dynamic table for cpus
exports.getCpuColumns = (req, res) => {
    const sql = `
      SELECT COLUMN_NAME, DATA_TYPE 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'cpus' 
      AND TABLE_SCHEMA = 'pc-builder'
      AND COLUMN_NAME != 'id_cpu';
    `;
    db.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(result);
      });
};

exports.getAllCpus = (req, res) => {
    const sql = 'SELECT * FROM cpus';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};