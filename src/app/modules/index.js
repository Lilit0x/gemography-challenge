import config from "config"
import base from './base/index.js'
import languages from './languages/index.js'

const initializeAppModules = app => {
  // Register all the modules in here
  const modules = [ base, languages ]

  for (let i = 0; i < modules.length; i++) {
    const { BASE_PATH, router } = modules[i];
    app.use(`/${config.get("basePath")}${BASE_PATH}`, router)
  }
}

export default initializeAppModules
