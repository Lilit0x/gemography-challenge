import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

const initMiddlewares = app => {
    const middlewares = [
        express.json(),
        helmet(),
        morgan('dev')
    ]

    // Initialize the middlewares
    for (let i = 0; i < middlewares.length; i++) {
        const middleware = middlewares[i]
        if (typeof middleware === "function") {
            app.use(middleware)
        }
    }
}

export default initMiddlewares