const Router = require('koa-router');
const memoCtrl = require('./memo.ctrl');

const memos = new Router();

memos.post('/', memoCtrl.checkLogged, memoCtrl.create);
memos.get('/', memoCtrl.checkLogged, memoCtrl.list);
memos.patch('/:id', memoCtrl.checkLogged, memoCtrl.checkAuth, memoCtrl.checkObjectId, memoCtrl.update);
memos.delete('/:id', memoCtrl.checkLogged, memoCtrl.checkObjectId, memoCtrl.remove);


module.exports = memos;