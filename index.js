import express from 'express'
import cors from 'cors'
import customerData from './data/customers.json' with { type: 'json' };

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
});

app.get('/api/customers', (req, res) => {
  res.json(customerData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});