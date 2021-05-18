import axios from 'axios'
import { success, error } from '../../utils/response.js'

const calcAtrributesForLang = items => {
    // Filters the languages by removing the duplicates
    const languages = []
    items.forEach( item => !languages.includes(item.language) && item.language !== null ? languages.push(item.language) : null)

    const response = []
    languages.forEach( lang => {
        let count = 0
        const repo_lists = []
        let obj = {}
        items.forEach( item => {
            if(lang === item.language) {
                count++
                repo_lists.push(item.name)
            }
            return obj = { no_of_repos: count, repo_lists }
        })
        response.push({[`${lang}`]: obj})
    })
    return response
}

export const listTrendingLanguages = async (req, res, next) => {
    try {
        const today = new Date()
        const priorDate = new Date(new Date().setDate(today.getDate() - 30)).toISOString()

        const { data } = await axios.get(
            `https://api.github.com/search/repositories?q=created:>${priorDate}&sort=stars&order=desc&per_page=100`
        )
        
        const response = calcAtrributesForLang(data.items)

        return res.status(200).json(
            success(response, "200")
        )
    } catch (err) {
        // axios error
        if(err.response) {
            const { data, status } = err.response
            return res.status(status).json(
                error(data, "002", status)
            )
        } else {
            // generic error
            next(err)
        }
    }
}