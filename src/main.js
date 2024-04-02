import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_CNX_STR } from './config/mongodb.config.js';
import { PORT } from './config/server.config.js';
import { apiInmobiliariaRouter } from './routers/api.inmobiliaria.router.js';
import { webInmobiliariaRouter } from './routers/web.inmobiliaria.router.js';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

await mongoose.connect(MONGODB_CNX_STR);
console.log(`base de datos conectada`);

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.engine('handlebars', engine());

const server = app.listen(PORT, () => { console.log(`servidor escuchando en puerto ${PORT}`) });

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/api', apiInmobiliariaRouter);
app.use('/', webInmobiliariaRouter);