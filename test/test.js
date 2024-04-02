import mongoose from 'mongoose'
import { MONGODB_CNX_STR } from '../src/config/mongodb.config.js'

import { propietariosManager } from '../src/services/propietarios.manager.js'
import { propiedadesManager } from '../src/services/propiedades.manager.js'

await mongoose.connect(MONGODB_CNX_STR)

await propietariosManager.registrar({
  nombre: 'Luis',
  telefono: '94568374',
  email: 'luis@mail.com',
})

console.log(await propietariosManager.consultar())

await propiedadesManager.registrar({
  direccion: 'micasa 1234',
  cantAmbientes: 5,
})

console.log(await propiedadesManager.consultar())