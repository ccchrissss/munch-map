module.exports = {
  
  getIndex: (req,res) => {
    
    if (req.user) {
      // console.log(req.user)
      res.render('index.ejs',
        {
          user: req.user
        }
      )
    } else {
      // console.log('no user logged in')
      res.render('index.ejs',
        {
          user: ''
        }
      )
    }
      
  }

}