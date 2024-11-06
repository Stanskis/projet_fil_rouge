const { db } = require('../../index');


//dynamic table for gpus
exports.getMbColumns = (req, res) => {
    const sql = `
      SELECT COLUMN_NAME, DATA_TYPE 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'motherboards' 
      AND TABLE_SCHEMA = 'pc-builder'
      AND COLUMN_NAME != 'id_mb';
    `;
    db.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(result);
      });
};

exports.getAllMbs = (req, res) => {
    const sql = 'SELECT * FROM motherboards';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};