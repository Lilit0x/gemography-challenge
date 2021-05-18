import dotenv from 'dotenv'
import chalk from 'chalk'
import config from 'config'
import createApp from './app/index.js'

dotenv.config()

// Bootstrap the application
const app = createApp()

const PORT = config.get("port") || process.env.PORT
const APP_NAME = config.get("appName")

// listen for requests
app.listen(PORT, async () => {

    //========================== Console Visuals ===============================//
    const appName = chalk.magenta(APP_NAME)
    const mark = chalk.green("✓")
    const url = chalk.blue(`http://localhost:${PORT}`)
    const env = chalk.yellow(process.env.NODE_ENV)
    process.env.API_ADDRESS = `http://localhost:${PORT}`

    if (process.env.NODE_ENV != "test") {
        console.log(chalk.bold(`${mark} ${appName} is running at ${url} in ${env} mode`))
        console.log(chalk.blue.bold("✗ Press CTRL-C to stop\n"))
    }
})
