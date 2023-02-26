const mongoose = require('mongoose')

module.exports = async () => {
  const mongoUri =
    'mongodb+srv://pradip9641:K8MjSgHjzL7HfrBj@cluster0.iwtzasn.mongodb.net/?retryWrites=true&w=majority'

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB connected: ${connect.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
// K8MjSgHjzL7HfrBj
