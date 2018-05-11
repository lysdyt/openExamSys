const router = require('koa-router')() //注意这里
const utils = require('../utils');
router.get('/getsalt', async (ctx,next)=>{
    let {querystring} = ctx;
    querystring = querystring.replace(/id=/,'');
    let thisUser = await utils.findOnePromise(ctx.models.loginTempData,{userName:querystring});
    if(!thisUser)throw new Error('do not have this id');
    

});

module.exports = function () {
    return router.routes()
}