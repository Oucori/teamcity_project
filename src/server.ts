import express from 'express';

const app = express();

export const add = (a: number, b: number): number => a + b;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export const server = app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});