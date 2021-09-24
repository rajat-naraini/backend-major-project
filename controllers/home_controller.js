module.exports.home = (req, res) => {
    // return res.end('<h1>Express is up for Codeial</h1>')
    return res.render('home',{
        title: "Home"
    })
}
module.exports.anotherhome = (req, res) => {
    // return res.end('<h1>Another Home Reached</h1>')
    return res.render('home',{
        title: "Another Home"
    })
}

// module.exports.actionname = (req, res) {}