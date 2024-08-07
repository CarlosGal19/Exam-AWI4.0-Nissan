import { model } from 'mongoose'

import { CarTruckSchema } from './car.model.js';

export default model('Truck', CarTruckSchema)
