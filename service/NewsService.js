import NewsAPI from 'newsapi'

import {mockedArticles} from '../test/MockedData'

const newsApi = new NewsAPI(process.env.PUBLIC_NEWS_API_KEY, {
  corsProxyUrl: 'https://cors-anywhere.herokuapp.com/'
})

const DEFAULT_PAGE_SIZE = 100

export const getTopNews = async ({
  country,
  category = null,
  term,
  pageSize = DEFAULT_PAGE_SIZE
}) => {
  try {
    const request = {country, pageSize}
    if (category) {
      request.category = category
    }
    if (term) {
      request.q = term
    }
    console.info(process.env.PUBLIC_USE_MOCK_DATA)
    if (process.env.PUBLIC_USE_MOCK_DATA === 'true') {
      console.info('usao')
      return mockedArticles
    } else {
      const response = await newsApi.v2.topHeadlines(request)
      return response.articles
    }
  } catch (e) {
    return []
  }
}
