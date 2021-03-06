// mu
// function (mongoose){

// }
module.exports = function (mongoose) {
    var schema = mongoose.Schema({
        email: {
            type: String,
            match:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/,
            required:true
        },
        userName: {
            type: String,
            minlength:6,
            maxlength:20,
            required:true,
            unique:true
        },
        tempCode:String,
    });
    return mongoose.model('tempUser', schema);
}