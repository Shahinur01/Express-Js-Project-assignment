const path=require('path')


const homeController=(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
}

const searchController=(req,res) => {
    res.sendFile(path.join(__dirname,'../public/search.html'))
    }

    module.exports={
        homeController, searchController
    }