import mongoose from 'mongoose'

import { app } from './app'
import { MONGODB_URI, PORT } from './config'

async function main() {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected');

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server online listen ${PORT}`)
    })
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})