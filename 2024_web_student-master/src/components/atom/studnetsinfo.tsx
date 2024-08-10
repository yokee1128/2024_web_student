const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'attendance',
    password: 'qwer1234',
    port: 5432,
});

app.use(express.json());

// 학생 목록 가져오기
app.get('/api/students', async (req: any, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
    try {
        const result = await pool.query('SELECT * FROM Students');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// 학생 검색하기
app.get('/api/students/search', async (req: { query: { name: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
    const { name } = req.query;
    try {
        const result = await pool.query('SELECT * FROM Students WHERE name ILIKE $1', [`%${name}%`]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
