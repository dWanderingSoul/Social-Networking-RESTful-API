//importing packages 
const express = require('express');
const { name } = require('tar/lib/types');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Post = require('./models/post');

const app = express();
app.use(bodyParser.json());

// ... Routes ...


//adding routes 
app.get('/book',(req,res) => {
    res.send([
        {
            name:'Harry Potter',
            id: 1,
        },
    ]);
});
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const express = require('express');
  const routes = require('./routes/api');  // Import the routes
  
  
  // ... other app configuration ...
  
  // Mount the router on the '/api' path
  app.use('/api', routes);
  
  // ... start server logic ...
  
//port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port:${port}'));