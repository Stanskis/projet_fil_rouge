const { db } = require('../../index');


//dynamic table for gpus
exports.getCaseColumns = (req, res) => {
    const sql = `
      SELECT COLUMN_NAME, DATA_TYPE 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'pc_cases' 
      AND TABLE_SCHEMA = 'pc-builder'
      AND COLUMN_NAME != 'id_case';
    `;
    db.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(result);
      });
};

exports.getAllCases = (req, res) => {
    const sql = 'SELECT * FROM pc_cases';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};