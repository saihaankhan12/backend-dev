require('dotenv').config()  // to use .env

const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "saihaankhan12",
  "id": 138798531,
  "node_id": "U_kgDOCEXlww",
  "avatar_url": "https://avatars.githubusercontent.com/u/138798531?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/saihaankhan12",
  "html_url": "https://github.com/saihaankhan12",
  "followers_url": "https://api.github.com/users/saihaankhan12/followers",
  "following_url": "https://api.github.com/users/saihaankhan12/following{/other_user}",
  "gists_url": "https://api.github.com/users/saihaankhan12/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/saihaankhan12/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/saihaankhan12/subscriptions",
  "organizations_url": "https://api.github.com/users/saihaankhan12/orgs",
  "repos_url": "https://api.github.com/users/saihaankhan12/repos",
  "events_url": "https://api.github.com/users/saihaankhan12/events{/privacy}",
  "received_events_url": "https://api.github.com/users/saihaankhan12/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 2,
  "following": 8,
  "created_at": "2023-07-06T14:50:01Z",
  "updated_at": "2025-04-20T17:56:56Z"
}

app.get('/', (req, res) => {  
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('SaihaanisDev')
})

app.get('/login' ,(req,res) => {
    res.send('<h1> Hello Saihaan </h1>')
})

app.get('/youtube' , (req,res) => {
    res.send('HEY!!')
})

app.get('/github' , (req,res) => {
  res.json(githubData)
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})