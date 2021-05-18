import express from 'express'
import initMiddlewares  from './middlewares/index.js'

import initializeAppModules from './modules/index.js'

// Exports Express Application
export default () => {
    const app = express()

    initMiddlewares(app)

    // Bootstrap All Modules of the application Routes
    initializeAppModules(app)

    return app
}
