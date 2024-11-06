const { db } = require('../../index');


//dynamic table for gpus
exports.getGpuColumns = (req, res) => {
    const sql = `
      SELECT COLUMN_NAME, DATA_TYPE 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'gpus' 
      AND TABLE_SCHEMA = 'pc-builder'
      AND COLUMN_NAME != 'id_gpu';
    `;
    db.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(result);
      });
};

exports.getAllGpus = (req, res) => {
    const sql = 'SELECT * FROM gpus';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};