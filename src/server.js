const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const app = express();
const port = 3000;

oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_19_11' });

const dbConfig = {
  user: 'ACB',
  password: '0826',
  connectString: 'localhost:1521/xe',
};

app.use(bodyParser.json());

app.post('/api/save-expense', async (req, res) => {
  try {
    const { date, amount, category, asset, note } = req.body;

    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`
      INSERT INTO expenses (date, amount, category, asset, note)
      VALUES (:date, :amount, :category, :asset, :note)`,
      [date, amount, category, asset, note]);

    await connection.commit();
    await connection.close();

    res.status(201).json({ message: 'Expense saved successfully' });
  } catch (error) {
    console.error('Error saving expense:', error);
    res.status(500).json({ error: 'An error occurred while saving the expense' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
