// server.js (백엔드)
const express = require('express');
const app = express();
const oracledb = require('oracledb');

const dbConfig = {
  user: 'ACB',
  password: '0826',
  connectString: 'localhost:1521/xe',
};

app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const { newUserId, newPassword } = req.body;

    const connection = await oracledb.getConnection(dbConfig);
    const insertQuery = `INSERT INTO 회원테이블 (아이디, 비밀번호) VALUES (:1, :2)`;
    const insertParams = [newUserId, newPassword];

    const result = await connection.execute(insertQuery, insertParams);

    await connection.close();

    res.status(200).json({ message: '회원가입이 성공적으로 완료되었습니다.' });
  } catch (err) {
    console.error('오라클 DB 연결 오류:', err);
    res.status(500).json({ error: '회원가입 중 오류가 발생하였습니다.' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
