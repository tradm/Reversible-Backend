import { logError } from './logger';
import app from './app';

const PORT = process.env.PORT || 7000;

process.on('uncaughtException', async (err) => {
  await logError(err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
});
