import rp from 'request-promise'

export default async function () {
  const topIds = JSON.parse(await rp('https://hacker-news.firebaseio.com/v0/topstories.json')).slice(0, 10)
  return await Promise.all(topIds.map(async topId => {
    const { id, title, time, type, url } = JSON.parse(await rp({
      uri: `https://hacker-news.firebaseio.com/v0/item/${topId}.json`,
      family: 4,
    }))
    return { id, title, time, type, url }
  }))
}

