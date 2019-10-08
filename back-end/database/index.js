const { Pool } = require('pg');
const pool = new Pool();

const query = (text, values) => (async () => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, values);
        return result;
    } finally { // Release client before error handling
        client.release();
    }
})().catch(err => console.log(err));

module.exports = query;