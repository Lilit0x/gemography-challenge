import config from 'config'
import { success } from '../../utils/response.js'

export const getBase = async (req, res, next) => {
    return res.status(200).json(
        success(
            {
                status: "online",
                version: config.get("projectVersion"),
                name: config.get("appName")
            },
            200
        )
    )
}