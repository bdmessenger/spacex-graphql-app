const express = require('express')
const path = require('path')
const cors = require('cors')
const schema = require('./schema')
const { graphqlHTTP } = require('express-graphql')

const app = express()
app.use(cors())

const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.trim()

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: NODE_ENV !== 'production'
    })
)

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname , 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));