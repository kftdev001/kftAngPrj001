const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
// 省略しているが ./config/index.js を参照している
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    if (process.env.NODE_ENV !== 'production') {
      const fakeDb = new FakeDb()
      // fakeDb.initDb()
      // ★★ mongoDBの初期データ登録が必要なときだけコメントをはずす ★★
    }
  }
)

const app = express()

app.use('/api/v1/products', productRoutes)

if (process.env.NODE_ENV === 'production') {
  // 上記リクエスト ('/api/v1/products')以外のリクエストは以下で受ける (--prod用)
  const appPath = path.join(__dirname, '..', 'dist', 'kftAngPrj001')
  app.use(express.static(appPath))
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}

// app.get('/products', function (req, res) {
//   res.json({ 'success': true })
// })



const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
  console.log('I am running!')
})

