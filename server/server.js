import express from 'express'
import devBundle from './devBundle' //comment out before building for production
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

const app = express()
devBundle.compile(app) //comment out before building for production

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

const url = process.env.MONGODB_URL ||
    'mongodb://localhost:27017/mernSimpleSetUp'
MongoClient.connect(url, (err, db) => {
    console.log("Connected succesfully to mondodb server")
  db.close()
})