const Product = require('./model/product')

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/img01.jpg",
        name: '森戸神社',
        price: 799,
        description: '潮が引いた海から見上げる冬の森戸神社',
        heading1: '森戸神社サンプルヘッダ1',
        heading2: '森戸神社サンプルヘッダ2',
        heading3: '森戸神社サンプルヘッダ3',
        headingtext1: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample',
        headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        headingtext3: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text '
      },
      {
        coverImage: "./assets/img/img02.jpg",
        name: '夕暮れ江ノ島',
        price: 699,
        description: '日が落ちるまで海で遊ぶ兄弟。',
        heading1: '江ノ島サンプルヘッダ1',
        heading2: '江ノ島サンプルヘッダ2',
        heading3: '江ノ島サンプルヘッダ3',
        headingtext1: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample',
        headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        headingtext3: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text '

      },
      {
        coverImage: "./assets/img/img03.jpg",
        name: '辻堂海岸の朝焼け',
        price: 299,
        description: 'description for Phone Standard',
        heading1: '辻堂海岸サンプルヘッダ1',
        heading2: '辻堂海岸サンプルヘッダ2',
        heading3: '辻堂海岸サンプルヘッダ3',
        headingtext1: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample',
        headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        headingtext3: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text '
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: 'Phone Special',
        price: 999,
        description: 'long description for Phone Special aaaaaaaaaaaaaabbbbbbbbbbb'
      }
    ];
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDB()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDB() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save();
      }
    )
  }

  seeDb() {
    this.pushProductsToDB()
  }

}

module.exports = FakeDb
