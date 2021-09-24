module.exports.profile = (req, res) => {
    // res.end('<h1>User Profile</h1>')
    res.render('user',{
        name: 'Rajat',
        contact: 9501345915
    })
}
module.exports.salaryDetails = (req, res) => {
    res.end('<h1>Salary Details</h1>')
}