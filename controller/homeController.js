const path=require('path')


exports.homeController=(req, res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
}

exports.searchController=(req,res) => {
    res.sendFile(path.join(__dirname,'../views/search.html'))
    }