// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35585 = arguments.length;
switch (G__35585) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35586 = (function (f,blockable,meta35587){
this.f = f;
this.blockable = blockable;
this.meta35587 = meta35587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35588,meta35587__$1){
var self__ = this;
var _35588__$1 = this;
return (new cljs.core.async.t_cljs$core$async35586(self__.f,self__.blockable,meta35587__$1));
});

cljs.core.async.t_cljs$core$async35586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35588){
var self__ = this;
var _35588__$1 = this;
return self__.meta35587;
});

cljs.core.async.t_cljs$core$async35586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35587","meta35587",88639562,null)], null);
});

cljs.core.async.t_cljs$core$async35586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35586";

cljs.core.async.t_cljs$core$async35586.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35586");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35586.
 */
cljs.core.async.__GT_t_cljs$core$async35586 = (function cljs$core$async$__GT_t_cljs$core$async35586(f__$1,blockable__$1,meta35587){
return (new cljs.core.async.t_cljs$core$async35586(f__$1,blockable__$1,meta35587));
});

}

return (new cljs.core.async.t_cljs$core$async35586(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35592 = arguments.length;
switch (G__35592) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35595 = arguments.length;
switch (G__35595) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35598 = arguments.length;
switch (G__35598) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35600 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35600);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35600,ret){
return (function (){
return fn1.call(null,val_35600);
});})(val_35600,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35602 = arguments.length;
switch (G__35602) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___35604 = n;
var x_35605 = (0);
while(true){
if((x_35605 < n__4408__auto___35604)){
(a[x_35605] = (0));

var G__35606 = (x_35605 + (1));
x_35605 = G__35606;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35607 = (i + (1));
i = G__35607;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35608 = (function (flag,meta35609){
this.flag = flag;
this.meta35609 = meta35609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35610,meta35609__$1){
var self__ = this;
var _35610__$1 = this;
return (new cljs.core.async.t_cljs$core$async35608(self__.flag,meta35609__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35610){
var self__ = this;
var _35610__$1 = this;
return self__.meta35609;
});})(flag))
;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35608.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35609","meta35609",461725756,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35608";

cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35608");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35608.
 */
cljs.core.async.__GT_t_cljs$core$async35608 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35608(flag__$1,meta35609){
return (new cljs.core.async.t_cljs$core$async35608(flag__$1,meta35609));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35608(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35611 = (function (flag,cb,meta35612){
this.flag = flag;
this.cb = cb;
this.meta35612 = meta35612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35613,meta35612__$1){
var self__ = this;
var _35613__$1 = this;
return (new cljs.core.async.t_cljs$core$async35611(self__.flag,self__.cb,meta35612__$1));
});

cljs.core.async.t_cljs$core$async35611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35613){
var self__ = this;
var _35613__$1 = this;
return self__.meta35612;
});

cljs.core.async.t_cljs$core$async35611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35612","meta35612",-1746374261,null)], null);
});

cljs.core.async.t_cljs$core$async35611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35611";

cljs.core.async.t_cljs$core$async35611.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35611.
 */
cljs.core.async.__GT_t_cljs$core$async35611 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35611(flag__$1,cb__$1,meta35612){
return (new cljs.core.async.t_cljs$core$async35611(flag__$1,cb__$1,meta35612));
});

}

return (new cljs.core.async.t_cljs$core$async35611(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35614_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35614_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35615_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35616 = (i + (1));
i = G__35616;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35622 = arguments.length;
var i__4532__auto___35623 = (0);
while(true){
if((i__4532__auto___35623 < len__4531__auto___35622)){
args__4534__auto__.push((arguments[i__4532__auto___35623]));

var G__35624 = (i__4532__auto___35623 + (1));
i__4532__auto___35623 = G__35624;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35619){
var map__35620 = p__35619;
var map__35620__$1 = ((((!((map__35620 == null)))?(((((map__35620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var opts = map__35620__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35617){
var G__35618 = cljs.core.first.call(null,seq35617);
var seq35617__$1 = cljs.core.next.call(null,seq35617);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35618,seq35617__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35626 = arguments.length;
switch (G__35626) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28677__auto___35672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___35672){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___35672){
return (function (state_35650){
var state_val_35651 = (state_35650[(1)]);
if((state_val_35651 === (7))){
var inst_35646 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
var statearr_35652_35673 = state_35650__$1;
(statearr_35652_35673[(2)] = inst_35646);

(statearr_35652_35673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (1))){
var state_35650__$1 = state_35650;
var statearr_35653_35674 = state_35650__$1;
(statearr_35653_35674[(2)] = null);

(statearr_35653_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (4))){
var inst_35629 = (state_35650[(7)]);
var inst_35629__$1 = (state_35650[(2)]);
var inst_35630 = (inst_35629__$1 == null);
var state_35650__$1 = (function (){var statearr_35654 = state_35650;
(statearr_35654[(7)] = inst_35629__$1);

return statearr_35654;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35655_35675 = state_35650__$1;
(statearr_35655_35675[(1)] = (5));

} else {
var statearr_35656_35676 = state_35650__$1;
(statearr_35656_35676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (13))){
var state_35650__$1 = state_35650;
var statearr_35657_35677 = state_35650__$1;
(statearr_35657_35677[(2)] = null);

(statearr_35657_35677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (6))){
var inst_35629 = (state_35650[(7)]);
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35650__$1,(11),to,inst_35629);
} else {
if((state_val_35651 === (3))){
var inst_35648 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35650__$1,inst_35648);
} else {
if((state_val_35651 === (12))){
var state_35650__$1 = state_35650;
var statearr_35658_35678 = state_35650__$1;
(statearr_35658_35678[(2)] = null);

(statearr_35658_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (2))){
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35650__$1,(4),from);
} else {
if((state_val_35651 === (11))){
var inst_35639 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
if(cljs.core.truth_(inst_35639)){
var statearr_35659_35679 = state_35650__$1;
(statearr_35659_35679[(1)] = (12));

} else {
var statearr_35660_35680 = state_35650__$1;
(statearr_35660_35680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (9))){
var state_35650__$1 = state_35650;
var statearr_35661_35681 = state_35650__$1;
(statearr_35661_35681[(2)] = null);

(statearr_35661_35681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (5))){
var state_35650__$1 = state_35650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35662_35682 = state_35650__$1;
(statearr_35662_35682[(1)] = (8));

} else {
var statearr_35663_35683 = state_35650__$1;
(statearr_35663_35683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (14))){
var inst_35644 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
var statearr_35664_35684 = state_35650__$1;
(statearr_35664_35684[(2)] = inst_35644);

(statearr_35664_35684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (10))){
var inst_35636 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
var statearr_35665_35685 = state_35650__$1;
(statearr_35665_35685[(2)] = inst_35636);

(statearr_35665_35685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (8))){
var inst_35633 = cljs.core.async.close_BANG_.call(null,to);
var state_35650__$1 = state_35650;
var statearr_35666_35686 = state_35650__$1;
(statearr_35666_35686[(2)] = inst_35633);

(statearr_35666_35686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___35672))
;
return ((function (switch__28518__auto__,c__28677__auto___35672){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_35667 = [null,null,null,null,null,null,null,null];
(statearr_35667[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_35667[(1)] = (1));

return statearr_35667;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_35650){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35668){if((e35668 instanceof Object)){
var ex__28522__auto__ = e35668;
var statearr_35669_35687 = state_35650;
(statearr_35669_35687[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35688 = state_35650;
state_35650 = G__35688;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_35650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_35650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___35672))
})();
var state__28679__auto__ = (function (){var statearr_35670 = f__28678__auto__.call(null);
(statearr_35670[(6)] = c__28677__auto___35672);

return statearr_35670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___35672))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35689){
var vec__35690 = p__35689;
var v = cljs.core.nth.call(null,vec__35690,(0),null);
var p = cljs.core.nth.call(null,vec__35690,(1),null);
var job = vec__35690;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28677__auto___35861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___35861,res,vec__35690,v,p,job,jobs,results){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___35861,res,vec__35690,v,p,job,jobs,results){
return (function (state_35697){
var state_val_35698 = (state_35697[(1)]);
if((state_val_35698 === (1))){
var state_35697__$1 = state_35697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35697__$1,(2),res,v);
} else {
if((state_val_35698 === (2))){
var inst_35694 = (state_35697[(2)]);
var inst_35695 = cljs.core.async.close_BANG_.call(null,res);
var state_35697__$1 = (function (){var statearr_35699 = state_35697;
(statearr_35699[(7)] = inst_35694);

return statearr_35699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35697__$1,inst_35695);
} else {
return null;
}
}
});})(c__28677__auto___35861,res,vec__35690,v,p,job,jobs,results))
;
return ((function (switch__28518__auto__,c__28677__auto___35861,res,vec__35690,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0 = (function (){
var statearr_35700 = [null,null,null,null,null,null,null,null];
(statearr_35700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__);

(statearr_35700[(1)] = (1));

return statearr_35700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1 = (function (state_35697){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35701){if((e35701 instanceof Object)){
var ex__28522__auto__ = e35701;
var statearr_35702_35862 = state_35697;
(statearr_35702_35862[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35863 = state_35697;
state_35697 = G__35863;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = function(state_35697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1.call(this,state_35697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___35861,res,vec__35690,v,p,job,jobs,results))
})();
var state__28679__auto__ = (function (){var statearr_35703 = f__28678__auto__.call(null);
(statearr_35703[(6)] = c__28677__auto___35861);

return statearr_35703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___35861,res,vec__35690,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35704){
var vec__35705 = p__35704;
var v = cljs.core.nth.call(null,vec__35705,(0),null);
var p = cljs.core.nth.call(null,vec__35705,(1),null);
var job = vec__35705;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___35864 = n;
var __35865 = (0);
while(true){
if((__35865 < n__4408__auto___35864)){
var G__35708_35866 = type;
var G__35708_35867__$1 = (((G__35708_35866 instanceof cljs.core.Keyword))?G__35708_35866.fqn:null);
switch (G__35708_35867__$1) {
case "compute":
var c__28677__auto___35869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35865,c__28677__auto___35869,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (__35865,c__28677__auto___35869,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async){
return (function (state_35721){
var state_val_35722 = (state_35721[(1)]);
if((state_val_35722 === (1))){
var state_35721__$1 = state_35721;
var statearr_35723_35870 = state_35721__$1;
(statearr_35723_35870[(2)] = null);

(statearr_35723_35870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (2))){
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35721__$1,(4),jobs);
} else {
if((state_val_35722 === (3))){
var inst_35719 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35721__$1,inst_35719);
} else {
if((state_val_35722 === (4))){
var inst_35711 = (state_35721[(2)]);
var inst_35712 = process.call(null,inst_35711);
var state_35721__$1 = state_35721;
if(cljs.core.truth_(inst_35712)){
var statearr_35724_35871 = state_35721__$1;
(statearr_35724_35871[(1)] = (5));

} else {
var statearr_35725_35872 = state_35721__$1;
(statearr_35725_35872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (5))){
var state_35721__$1 = state_35721;
var statearr_35726_35873 = state_35721__$1;
(statearr_35726_35873[(2)] = null);

(statearr_35726_35873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (6))){
var state_35721__$1 = state_35721;
var statearr_35727_35874 = state_35721__$1;
(statearr_35727_35874[(2)] = null);

(statearr_35727_35874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (7))){
var inst_35717 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
var statearr_35728_35875 = state_35721__$1;
(statearr_35728_35875[(2)] = inst_35717);

(statearr_35728_35875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35865,c__28677__auto___35869,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async))
;
return ((function (__35865,switch__28518__auto__,c__28677__auto___35869,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0 = (function (){
var statearr_35729 = [null,null,null,null,null,null,null];
(statearr_35729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__);

(statearr_35729[(1)] = (1));

return statearr_35729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1 = (function (state_35721){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35730){if((e35730 instanceof Object)){
var ex__28522__auto__ = e35730;
var statearr_35731_35876 = state_35721;
(statearr_35731_35876[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35877 = state_35721;
state_35721 = G__35877;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = function(state_35721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1.call(this,state_35721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__;
})()
;})(__35865,switch__28518__auto__,c__28677__auto___35869,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async))
})();
var state__28679__auto__ = (function (){var statearr_35732 = f__28678__auto__.call(null);
(statearr_35732[(6)] = c__28677__auto___35869);

return statearr_35732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(__35865,c__28677__auto___35869,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async))
);


break;
case "async":
var c__28677__auto___35878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35865,c__28677__auto___35878,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (__35865,c__28677__auto___35878,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async){
return (function (state_35745){
var state_val_35746 = (state_35745[(1)]);
if((state_val_35746 === (1))){
var state_35745__$1 = state_35745;
var statearr_35747_35879 = state_35745__$1;
(statearr_35747_35879[(2)] = null);

(statearr_35747_35879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (2))){
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35745__$1,(4),jobs);
} else {
if((state_val_35746 === (3))){
var inst_35743 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35745__$1,inst_35743);
} else {
if((state_val_35746 === (4))){
var inst_35735 = (state_35745[(2)]);
var inst_35736 = async.call(null,inst_35735);
var state_35745__$1 = state_35745;
if(cljs.core.truth_(inst_35736)){
var statearr_35748_35880 = state_35745__$1;
(statearr_35748_35880[(1)] = (5));

} else {
var statearr_35749_35881 = state_35745__$1;
(statearr_35749_35881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (5))){
var state_35745__$1 = state_35745;
var statearr_35750_35882 = state_35745__$1;
(statearr_35750_35882[(2)] = null);

(statearr_35750_35882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (6))){
var state_35745__$1 = state_35745;
var statearr_35751_35883 = state_35745__$1;
(statearr_35751_35883[(2)] = null);

(statearr_35751_35883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (7))){
var inst_35741 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35752_35884 = state_35745__$1;
(statearr_35752_35884[(2)] = inst_35741);

(statearr_35752_35884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35865,c__28677__auto___35878,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async))
;
return ((function (__35865,switch__28518__auto__,c__28677__auto___35878,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0 = (function (){
var statearr_35753 = [null,null,null,null,null,null,null];
(statearr_35753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__);

(statearr_35753[(1)] = (1));

return statearr_35753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1 = (function (state_35745){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35754){if((e35754 instanceof Object)){
var ex__28522__auto__ = e35754;
var statearr_35755_35885 = state_35745;
(statearr_35755_35885[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35886 = state_35745;
state_35745 = G__35886;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = function(state_35745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1.call(this,state_35745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__;
})()
;})(__35865,switch__28518__auto__,c__28677__auto___35878,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async))
})();
var state__28679__auto__ = (function (){var statearr_35756 = f__28678__auto__.call(null);
(statearr_35756[(6)] = c__28677__auto___35878);

return statearr_35756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(__35865,c__28677__auto___35878,G__35708_35866,G__35708_35867__$1,n__4408__auto___35864,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35708_35867__$1)].join('')));

}

var G__35887 = (__35865 + (1));
__35865 = G__35887;
continue;
} else {
}
break;
}

var c__28677__auto___35888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___35888,jobs,results,process,async){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___35888,jobs,results,process,async){
return (function (state_35778){
var state_val_35779 = (state_35778[(1)]);
if((state_val_35779 === (1))){
var state_35778__$1 = state_35778;
var statearr_35780_35889 = state_35778__$1;
(statearr_35780_35889[(2)] = null);

(statearr_35780_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35779 === (2))){
var state_35778__$1 = state_35778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35778__$1,(4),from);
} else {
if((state_val_35779 === (3))){
var inst_35776 = (state_35778[(2)]);
var state_35778__$1 = state_35778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35778__$1,inst_35776);
} else {
if((state_val_35779 === (4))){
var inst_35759 = (state_35778[(7)]);
var inst_35759__$1 = (state_35778[(2)]);
var inst_35760 = (inst_35759__$1 == null);
var state_35778__$1 = (function (){var statearr_35781 = state_35778;
(statearr_35781[(7)] = inst_35759__$1);

return statearr_35781;
})();
if(cljs.core.truth_(inst_35760)){
var statearr_35782_35890 = state_35778__$1;
(statearr_35782_35890[(1)] = (5));

} else {
var statearr_35783_35891 = state_35778__$1;
(statearr_35783_35891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35779 === (5))){
var inst_35762 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35778__$1 = state_35778;
var statearr_35784_35892 = state_35778__$1;
(statearr_35784_35892[(2)] = inst_35762);

(statearr_35784_35892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35779 === (6))){
var inst_35764 = (state_35778[(8)]);
var inst_35759 = (state_35778[(7)]);
var inst_35764__$1 = cljs.core.async.chan.call(null,(1));
var inst_35765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35766 = [inst_35759,inst_35764__$1];
var inst_35767 = (new cljs.core.PersistentVector(null,2,(5),inst_35765,inst_35766,null));
var state_35778__$1 = (function (){var statearr_35785 = state_35778;
(statearr_35785[(8)] = inst_35764__$1);

return statearr_35785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35778__$1,(8),jobs,inst_35767);
} else {
if((state_val_35779 === (7))){
var inst_35774 = (state_35778[(2)]);
var state_35778__$1 = state_35778;
var statearr_35786_35893 = state_35778__$1;
(statearr_35786_35893[(2)] = inst_35774);

(statearr_35786_35893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35779 === (8))){
var inst_35764 = (state_35778[(8)]);
var inst_35769 = (state_35778[(2)]);
var state_35778__$1 = (function (){var statearr_35787 = state_35778;
(statearr_35787[(9)] = inst_35769);

return statearr_35787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35778__$1,(9),results,inst_35764);
} else {
if((state_val_35779 === (9))){
var inst_35771 = (state_35778[(2)]);
var state_35778__$1 = (function (){var statearr_35788 = state_35778;
(statearr_35788[(10)] = inst_35771);

return statearr_35788;
})();
var statearr_35789_35894 = state_35778__$1;
(statearr_35789_35894[(2)] = null);

(statearr_35789_35894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___35888,jobs,results,process,async))
;
return ((function (switch__28518__auto__,c__28677__auto___35888,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0 = (function (){
var statearr_35790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__);

(statearr_35790[(1)] = (1));

return statearr_35790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1 = (function (state_35778){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35791){if((e35791 instanceof Object)){
var ex__28522__auto__ = e35791;
var statearr_35792_35895 = state_35778;
(statearr_35792_35895[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35896 = state_35778;
state_35778 = G__35896;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = function(state_35778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1.call(this,state_35778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___35888,jobs,results,process,async))
})();
var state__28679__auto__ = (function (){var statearr_35793 = f__28678__auto__.call(null);
(statearr_35793[(6)] = c__28677__auto___35888);

return statearr_35793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___35888,jobs,results,process,async))
);


var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__,jobs,results,process,async){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__,jobs,results,process,async){
return (function (state_35831){
var state_val_35832 = (state_35831[(1)]);
if((state_val_35832 === (7))){
var inst_35827 = (state_35831[(2)]);
var state_35831__$1 = state_35831;
var statearr_35833_35897 = state_35831__$1;
(statearr_35833_35897[(2)] = inst_35827);

(statearr_35833_35897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (20))){
var state_35831__$1 = state_35831;
var statearr_35834_35898 = state_35831__$1;
(statearr_35834_35898[(2)] = null);

(statearr_35834_35898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (1))){
var state_35831__$1 = state_35831;
var statearr_35835_35899 = state_35831__$1;
(statearr_35835_35899[(2)] = null);

(statearr_35835_35899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (4))){
var inst_35796 = (state_35831[(7)]);
var inst_35796__$1 = (state_35831[(2)]);
var inst_35797 = (inst_35796__$1 == null);
var state_35831__$1 = (function (){var statearr_35836 = state_35831;
(statearr_35836[(7)] = inst_35796__$1);

return statearr_35836;
})();
if(cljs.core.truth_(inst_35797)){
var statearr_35837_35900 = state_35831__$1;
(statearr_35837_35900[(1)] = (5));

} else {
var statearr_35838_35901 = state_35831__$1;
(statearr_35838_35901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (15))){
var inst_35809 = (state_35831[(8)]);
var state_35831__$1 = state_35831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35831__$1,(18),to,inst_35809);
} else {
if((state_val_35832 === (21))){
var inst_35822 = (state_35831[(2)]);
var state_35831__$1 = state_35831;
var statearr_35839_35902 = state_35831__$1;
(statearr_35839_35902[(2)] = inst_35822);

(statearr_35839_35902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (13))){
var inst_35824 = (state_35831[(2)]);
var state_35831__$1 = (function (){var statearr_35840 = state_35831;
(statearr_35840[(9)] = inst_35824);

return statearr_35840;
})();
var statearr_35841_35903 = state_35831__$1;
(statearr_35841_35903[(2)] = null);

(statearr_35841_35903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (6))){
var inst_35796 = (state_35831[(7)]);
var state_35831__$1 = state_35831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35831__$1,(11),inst_35796);
} else {
if((state_val_35832 === (17))){
var inst_35817 = (state_35831[(2)]);
var state_35831__$1 = state_35831;
if(cljs.core.truth_(inst_35817)){
var statearr_35842_35904 = state_35831__$1;
(statearr_35842_35904[(1)] = (19));

} else {
var statearr_35843_35905 = state_35831__$1;
(statearr_35843_35905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (3))){
var inst_35829 = (state_35831[(2)]);
var state_35831__$1 = state_35831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35831__$1,inst_35829);
} else {
if((state_val_35832 === (12))){
var inst_35806 = (state_35831[(10)]);
var state_35831__$1 = state_35831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35831__$1,(14),inst_35806);
} else {
if((state_val_35832 === (2))){
var state_35831__$1 = state_35831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35831__$1,(4),results);
} else {
if((state_val_35832 === (19))){
var state_35831__$1 = state_35831;
var statearr_35844_35906 = state_35831__$1;
(statearr_35844_35906[(2)] = null);

(statearr_35844_35906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (11))){
var inst_35806 = (state_35831[(2)]);
var state_35831__$1 = (function (){var statearr_35845 = state_35831;
(statearr_35845[(10)] = inst_35806);

return statearr_35845;
})();
var statearr_35846_35907 = state_35831__$1;
(statearr_35846_35907[(2)] = null);

(statearr_35846_35907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (9))){
var state_35831__$1 = state_35831;
var statearr_35847_35908 = state_35831__$1;
(statearr_35847_35908[(2)] = null);

(statearr_35847_35908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (5))){
var state_35831__$1 = state_35831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35848_35909 = state_35831__$1;
(statearr_35848_35909[(1)] = (8));

} else {
var statearr_35849_35910 = state_35831__$1;
(statearr_35849_35910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (14))){
var inst_35809 = (state_35831[(8)]);
var inst_35811 = (state_35831[(11)]);
var inst_35809__$1 = (state_35831[(2)]);
var inst_35810 = (inst_35809__$1 == null);
var inst_35811__$1 = cljs.core.not.call(null,inst_35810);
var state_35831__$1 = (function (){var statearr_35850 = state_35831;
(statearr_35850[(8)] = inst_35809__$1);

(statearr_35850[(11)] = inst_35811__$1);

return statearr_35850;
})();
if(inst_35811__$1){
var statearr_35851_35911 = state_35831__$1;
(statearr_35851_35911[(1)] = (15));

} else {
var statearr_35852_35912 = state_35831__$1;
(statearr_35852_35912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (16))){
var inst_35811 = (state_35831[(11)]);
var state_35831__$1 = state_35831;
var statearr_35853_35913 = state_35831__$1;
(statearr_35853_35913[(2)] = inst_35811);

(statearr_35853_35913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (10))){
var inst_35803 = (state_35831[(2)]);
var state_35831__$1 = state_35831;
var statearr_35854_35914 = state_35831__$1;
(statearr_35854_35914[(2)] = inst_35803);

(statearr_35854_35914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (18))){
var inst_35814 = (state_35831[(2)]);
var state_35831__$1 = state_35831;
var statearr_35855_35915 = state_35831__$1;
(statearr_35855_35915[(2)] = inst_35814);

(statearr_35855_35915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35832 === (8))){
var inst_35800 = cljs.core.async.close_BANG_.call(null,to);
var state_35831__$1 = state_35831;
var statearr_35856_35916 = state_35831__$1;
(statearr_35856_35916[(2)] = inst_35800);

(statearr_35856_35916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto__,jobs,results,process,async))
;
return ((function (switch__28518__auto__,c__28677__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0 = (function (){
var statearr_35857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__);

(statearr_35857[(1)] = (1));

return statearr_35857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1 = (function (state_35831){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35858){if((e35858 instanceof Object)){
var ex__28522__auto__ = e35858;
var statearr_35859_35917 = state_35831;
(statearr_35859_35917[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35918 = state_35831;
state_35831 = G__35918;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__ = function(state_35831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1.call(this,state_35831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__,jobs,results,process,async))
})();
var state__28679__auto__ = (function (){var statearr_35860 = f__28678__auto__.call(null);
(statearr_35860[(6)] = c__28677__auto__);

return statearr_35860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__,jobs,results,process,async))
);

return c__28677__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35920 = arguments.length;
switch (G__35920) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35923 = arguments.length;
switch (G__35923) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35926 = arguments.length;
switch (G__35926) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28677__auto___35975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___35975,tc,fc){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___35975,tc,fc){
return (function (state_35952){
var state_val_35953 = (state_35952[(1)]);
if((state_val_35953 === (7))){
var inst_35948 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35954_35976 = state_35952__$1;
(statearr_35954_35976[(2)] = inst_35948);

(statearr_35954_35976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (1))){
var state_35952__$1 = state_35952;
var statearr_35955_35977 = state_35952__$1;
(statearr_35955_35977[(2)] = null);

(statearr_35955_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (4))){
var inst_35929 = (state_35952[(7)]);
var inst_35929__$1 = (state_35952[(2)]);
var inst_35930 = (inst_35929__$1 == null);
var state_35952__$1 = (function (){var statearr_35956 = state_35952;
(statearr_35956[(7)] = inst_35929__$1);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35930)){
var statearr_35957_35978 = state_35952__$1;
(statearr_35957_35978[(1)] = (5));

} else {
var statearr_35958_35979 = state_35952__$1;
(statearr_35958_35979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (13))){
var state_35952__$1 = state_35952;
var statearr_35959_35980 = state_35952__$1;
(statearr_35959_35980[(2)] = null);

(statearr_35959_35980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (6))){
var inst_35929 = (state_35952[(7)]);
var inst_35935 = p.call(null,inst_35929);
var state_35952__$1 = state_35952;
if(cljs.core.truth_(inst_35935)){
var statearr_35960_35981 = state_35952__$1;
(statearr_35960_35981[(1)] = (9));

} else {
var statearr_35961_35982 = state_35952__$1;
(statearr_35961_35982[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (3))){
var inst_35950 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35952__$1,inst_35950);
} else {
if((state_val_35953 === (12))){
var state_35952__$1 = state_35952;
var statearr_35962_35983 = state_35952__$1;
(statearr_35962_35983[(2)] = null);

(statearr_35962_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (2))){
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35952__$1,(4),ch);
} else {
if((state_val_35953 === (11))){
var inst_35929 = (state_35952[(7)]);
var inst_35939 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35952__$1,(8),inst_35939,inst_35929);
} else {
if((state_val_35953 === (9))){
var state_35952__$1 = state_35952;
var statearr_35963_35984 = state_35952__$1;
(statearr_35963_35984[(2)] = tc);

(statearr_35963_35984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (5))){
var inst_35932 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35933 = cljs.core.async.close_BANG_.call(null,fc);
var state_35952__$1 = (function (){var statearr_35964 = state_35952;
(statearr_35964[(8)] = inst_35932);

return statearr_35964;
})();
var statearr_35965_35985 = state_35952__$1;
(statearr_35965_35985[(2)] = inst_35933);

(statearr_35965_35985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (14))){
var inst_35946 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35966_35986 = state_35952__$1;
(statearr_35966_35986[(2)] = inst_35946);

(statearr_35966_35986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (10))){
var state_35952__$1 = state_35952;
var statearr_35967_35987 = state_35952__$1;
(statearr_35967_35987[(2)] = fc);

(statearr_35967_35987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (8))){
var inst_35941 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
if(cljs.core.truth_(inst_35941)){
var statearr_35968_35988 = state_35952__$1;
(statearr_35968_35988[(1)] = (12));

} else {
var statearr_35969_35989 = state_35952__$1;
(statearr_35969_35989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___35975,tc,fc))
;
return ((function (switch__28518__auto__,c__28677__auto___35975,tc,fc){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_35970 = [null,null,null,null,null,null,null,null,null];
(statearr_35970[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_35970[(1)] = (1));

return statearr_35970;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_35952){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_35952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e35971){if((e35971 instanceof Object)){
var ex__28522__auto__ = e35971;
var statearr_35972_35990 = state_35952;
(statearr_35972_35990[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35991 = state_35952;
state_35952 = G__35991;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_35952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_35952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___35975,tc,fc))
})();
var state__28679__auto__ = (function (){var statearr_35973 = f__28678__auto__.call(null);
(statearr_35973[(6)] = c__28677__auto___35975);

return statearr_35973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___35975,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__){
return (function (state_36012){
var state_val_36013 = (state_36012[(1)]);
if((state_val_36013 === (7))){
var inst_36008 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36014_36032 = state_36012__$1;
(statearr_36014_36032[(2)] = inst_36008);

(statearr_36014_36032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (1))){
var inst_35992 = init;
var state_36012__$1 = (function (){var statearr_36015 = state_36012;
(statearr_36015[(7)] = inst_35992);

return statearr_36015;
})();
var statearr_36016_36033 = state_36012__$1;
(statearr_36016_36033[(2)] = null);

(statearr_36016_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (4))){
var inst_35995 = (state_36012[(8)]);
var inst_35995__$1 = (state_36012[(2)]);
var inst_35996 = (inst_35995__$1 == null);
var state_36012__$1 = (function (){var statearr_36017 = state_36012;
(statearr_36017[(8)] = inst_35995__$1);

return statearr_36017;
})();
if(cljs.core.truth_(inst_35996)){
var statearr_36018_36034 = state_36012__$1;
(statearr_36018_36034[(1)] = (5));

} else {
var statearr_36019_36035 = state_36012__$1;
(statearr_36019_36035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (6))){
var inst_35992 = (state_36012[(7)]);
var inst_35999 = (state_36012[(9)]);
var inst_35995 = (state_36012[(8)]);
var inst_35999__$1 = f.call(null,inst_35992,inst_35995);
var inst_36000 = cljs.core.reduced_QMARK_.call(null,inst_35999__$1);
var state_36012__$1 = (function (){var statearr_36020 = state_36012;
(statearr_36020[(9)] = inst_35999__$1);

return statearr_36020;
})();
if(inst_36000){
var statearr_36021_36036 = state_36012__$1;
(statearr_36021_36036[(1)] = (8));

} else {
var statearr_36022_36037 = state_36012__$1;
(statearr_36022_36037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (3))){
var inst_36010 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36012__$1,inst_36010);
} else {
if((state_val_36013 === (2))){
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36012__$1,(4),ch);
} else {
if((state_val_36013 === (9))){
var inst_35999 = (state_36012[(9)]);
var inst_35992 = inst_35999;
var state_36012__$1 = (function (){var statearr_36023 = state_36012;
(statearr_36023[(7)] = inst_35992);

return statearr_36023;
})();
var statearr_36024_36038 = state_36012__$1;
(statearr_36024_36038[(2)] = null);

(statearr_36024_36038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (5))){
var inst_35992 = (state_36012[(7)]);
var state_36012__$1 = state_36012;
var statearr_36025_36039 = state_36012__$1;
(statearr_36025_36039[(2)] = inst_35992);

(statearr_36025_36039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (10))){
var inst_36006 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36026_36040 = state_36012__$1;
(statearr_36026_36040[(2)] = inst_36006);

(statearr_36026_36040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (8))){
var inst_35999 = (state_36012[(9)]);
var inst_36002 = cljs.core.deref.call(null,inst_35999);
var state_36012__$1 = state_36012;
var statearr_36027_36041 = state_36012__$1;
(statearr_36027_36041[(2)] = inst_36002);

(statearr_36027_36041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto__))
;
return ((function (switch__28518__auto__,c__28677__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28519__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28519__auto____0 = (function (){
var statearr_36028 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36028[(0)] = cljs$core$async$reduce_$_state_machine__28519__auto__);

(statearr_36028[(1)] = (1));

return statearr_36028;
});
var cljs$core$async$reduce_$_state_machine__28519__auto____1 = (function (state_36012){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36029){if((e36029 instanceof Object)){
var ex__28522__auto__ = e36029;
var statearr_36030_36042 = state_36012;
(statearr_36030_36042[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36043 = state_36012;
state_36012 = G__36043;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28519__auto__ = function(state_36012){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28519__auto____1.call(this,state_36012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28519__auto____0;
cljs$core$async$reduce_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28519__auto____1;
return cljs$core$async$reduce_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__))
})();
var state__28679__auto__ = (function (){var statearr_36031 = f__28678__auto__.call(null);
(statearr_36031[(6)] = c__28677__auto__);

return statearr_36031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__))
);

return c__28677__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__,f__$1){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__,f__$1){
return (function (state_36049){
var state_val_36050 = (state_36049[(1)]);
if((state_val_36050 === (1))){
var inst_36044 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36049__$1,(2),inst_36044);
} else {
if((state_val_36050 === (2))){
var inst_36046 = (state_36049[(2)]);
var inst_36047 = f__$1.call(null,inst_36046);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36049__$1,inst_36047);
} else {
return null;
}
}
});})(c__28677__auto__,f__$1))
;
return ((function (switch__28518__auto__,c__28677__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28519__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28519__auto____0 = (function (){
var statearr_36051 = [null,null,null,null,null,null,null];
(statearr_36051[(0)] = cljs$core$async$transduce_$_state_machine__28519__auto__);

(statearr_36051[(1)] = (1));

return statearr_36051;
});
var cljs$core$async$transduce_$_state_machine__28519__auto____1 = (function (state_36049){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36052){if((e36052 instanceof Object)){
var ex__28522__auto__ = e36052;
var statearr_36053_36055 = state_36049;
(statearr_36053_36055[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36056 = state_36049;
state_36049 = G__36056;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28519__auto__ = function(state_36049){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28519__auto____1.call(this,state_36049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28519__auto____0;
cljs$core$async$transduce_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28519__auto____1;
return cljs$core$async$transduce_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__,f__$1))
})();
var state__28679__auto__ = (function (){var statearr_36054 = f__28678__auto__.call(null);
(statearr_36054[(6)] = c__28677__auto__);

return statearr_36054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__,f__$1))
);

return c__28677__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36058 = arguments.length;
switch (G__36058) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__){
return (function (state_36083){
var state_val_36084 = (state_36083[(1)]);
if((state_val_36084 === (7))){
var inst_36065 = (state_36083[(2)]);
var state_36083__$1 = state_36083;
var statearr_36085_36106 = state_36083__$1;
(statearr_36085_36106[(2)] = inst_36065);

(statearr_36085_36106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (1))){
var inst_36059 = cljs.core.seq.call(null,coll);
var inst_36060 = inst_36059;
var state_36083__$1 = (function (){var statearr_36086 = state_36083;
(statearr_36086[(7)] = inst_36060);

return statearr_36086;
})();
var statearr_36087_36107 = state_36083__$1;
(statearr_36087_36107[(2)] = null);

(statearr_36087_36107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (4))){
var inst_36060 = (state_36083[(7)]);
var inst_36063 = cljs.core.first.call(null,inst_36060);
var state_36083__$1 = state_36083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36083__$1,(7),ch,inst_36063);
} else {
if((state_val_36084 === (13))){
var inst_36077 = (state_36083[(2)]);
var state_36083__$1 = state_36083;
var statearr_36088_36108 = state_36083__$1;
(statearr_36088_36108[(2)] = inst_36077);

(statearr_36088_36108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (6))){
var inst_36068 = (state_36083[(2)]);
var state_36083__$1 = state_36083;
if(cljs.core.truth_(inst_36068)){
var statearr_36089_36109 = state_36083__$1;
(statearr_36089_36109[(1)] = (8));

} else {
var statearr_36090_36110 = state_36083__$1;
(statearr_36090_36110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (3))){
var inst_36081 = (state_36083[(2)]);
var state_36083__$1 = state_36083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36083__$1,inst_36081);
} else {
if((state_val_36084 === (12))){
var state_36083__$1 = state_36083;
var statearr_36091_36111 = state_36083__$1;
(statearr_36091_36111[(2)] = null);

(statearr_36091_36111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (2))){
var inst_36060 = (state_36083[(7)]);
var state_36083__$1 = state_36083;
if(cljs.core.truth_(inst_36060)){
var statearr_36092_36112 = state_36083__$1;
(statearr_36092_36112[(1)] = (4));

} else {
var statearr_36093_36113 = state_36083__$1;
(statearr_36093_36113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (11))){
var inst_36074 = cljs.core.async.close_BANG_.call(null,ch);
var state_36083__$1 = state_36083;
var statearr_36094_36114 = state_36083__$1;
(statearr_36094_36114[(2)] = inst_36074);

(statearr_36094_36114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (9))){
var state_36083__$1 = state_36083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36095_36115 = state_36083__$1;
(statearr_36095_36115[(1)] = (11));

} else {
var statearr_36096_36116 = state_36083__$1;
(statearr_36096_36116[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (5))){
var inst_36060 = (state_36083[(7)]);
var state_36083__$1 = state_36083;
var statearr_36097_36117 = state_36083__$1;
(statearr_36097_36117[(2)] = inst_36060);

(statearr_36097_36117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (10))){
var inst_36079 = (state_36083[(2)]);
var state_36083__$1 = state_36083;
var statearr_36098_36118 = state_36083__$1;
(statearr_36098_36118[(2)] = inst_36079);

(statearr_36098_36118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36084 === (8))){
var inst_36060 = (state_36083[(7)]);
var inst_36070 = cljs.core.next.call(null,inst_36060);
var inst_36060__$1 = inst_36070;
var state_36083__$1 = (function (){var statearr_36099 = state_36083;
(statearr_36099[(7)] = inst_36060__$1);

return statearr_36099;
})();
var statearr_36100_36119 = state_36083__$1;
(statearr_36100_36119[(2)] = null);

(statearr_36100_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto__))
;
return ((function (switch__28518__auto__,c__28677__auto__){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_36101 = [null,null,null,null,null,null,null,null];
(statearr_36101[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_36101[(1)] = (1));

return statearr_36101;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_36083){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36102){if((e36102 instanceof Object)){
var ex__28522__auto__ = e36102;
var statearr_36103_36120 = state_36083;
(statearr_36103_36120[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36121 = state_36083;
state_36083 = G__36121;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_36083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_36083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__))
})();
var state__28679__auto__ = (function (){var statearr_36104 = f__28678__auto__.call(null);
(statearr_36104[(6)] = c__28677__auto__);

return statearr_36104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__))
);

return c__28677__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36122 = (function (ch,cs,meta36123){
this.ch = ch;
this.cs = cs;
this.meta36123 = meta36123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36124,meta36123__$1){
var self__ = this;
var _36124__$1 = this;
return (new cljs.core.async.t_cljs$core$async36122(self__.ch,self__.cs,meta36123__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36124){
var self__ = this;
var _36124__$1 = this;
return self__.meta36123;
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36123","meta36123",-1526402551,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36122";

cljs.core.async.t_cljs$core$async36122.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async36122");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36122.
 */
cljs.core.async.__GT_t_cljs$core$async36122 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36122(ch__$1,cs__$1,meta36123){
return (new cljs.core.async.t_cljs$core$async36122(ch__$1,cs__$1,meta36123));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36122(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28677__auto___36344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___36344,cs,m,dchan,dctr,done){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___36344,cs,m,dchan,dctr,done){
return (function (state_36259){
var state_val_36260 = (state_36259[(1)]);
if((state_val_36260 === (7))){
var inst_36255 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36261_36345 = state_36259__$1;
(statearr_36261_36345[(2)] = inst_36255);

(statearr_36261_36345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (20))){
var inst_36158 = (state_36259[(7)]);
var inst_36170 = cljs.core.first.call(null,inst_36158);
var inst_36171 = cljs.core.nth.call(null,inst_36170,(0),null);
var inst_36172 = cljs.core.nth.call(null,inst_36170,(1),null);
var state_36259__$1 = (function (){var statearr_36262 = state_36259;
(statearr_36262[(8)] = inst_36171);

return statearr_36262;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36263_36346 = state_36259__$1;
(statearr_36263_36346[(1)] = (22));

} else {
var statearr_36264_36347 = state_36259__$1;
(statearr_36264_36347[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (27))){
var inst_36207 = (state_36259[(9)]);
var inst_36202 = (state_36259[(10)]);
var inst_36200 = (state_36259[(11)]);
var inst_36127 = (state_36259[(12)]);
var inst_36207__$1 = cljs.core._nth.call(null,inst_36200,inst_36202);
var inst_36208 = cljs.core.async.put_BANG_.call(null,inst_36207__$1,inst_36127,done);
var state_36259__$1 = (function (){var statearr_36265 = state_36259;
(statearr_36265[(9)] = inst_36207__$1);

return statearr_36265;
})();
if(cljs.core.truth_(inst_36208)){
var statearr_36266_36348 = state_36259__$1;
(statearr_36266_36348[(1)] = (30));

} else {
var statearr_36267_36349 = state_36259__$1;
(statearr_36267_36349[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (1))){
var state_36259__$1 = state_36259;
var statearr_36268_36350 = state_36259__$1;
(statearr_36268_36350[(2)] = null);

(statearr_36268_36350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (24))){
var inst_36158 = (state_36259[(7)]);
var inst_36177 = (state_36259[(2)]);
var inst_36178 = cljs.core.next.call(null,inst_36158);
var inst_36136 = inst_36178;
var inst_36137 = null;
var inst_36138 = (0);
var inst_36139 = (0);
var state_36259__$1 = (function (){var statearr_36269 = state_36259;
(statearr_36269[(13)] = inst_36138);

(statearr_36269[(14)] = inst_36137);

(statearr_36269[(15)] = inst_36139);

(statearr_36269[(16)] = inst_36136);

(statearr_36269[(17)] = inst_36177);

return statearr_36269;
})();
var statearr_36270_36351 = state_36259__$1;
(statearr_36270_36351[(2)] = null);

(statearr_36270_36351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (39))){
var state_36259__$1 = state_36259;
var statearr_36274_36352 = state_36259__$1;
(statearr_36274_36352[(2)] = null);

(statearr_36274_36352[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (4))){
var inst_36127 = (state_36259[(12)]);
var inst_36127__$1 = (state_36259[(2)]);
var inst_36128 = (inst_36127__$1 == null);
var state_36259__$1 = (function (){var statearr_36275 = state_36259;
(statearr_36275[(12)] = inst_36127__$1);

return statearr_36275;
})();
if(cljs.core.truth_(inst_36128)){
var statearr_36276_36353 = state_36259__$1;
(statearr_36276_36353[(1)] = (5));

} else {
var statearr_36277_36354 = state_36259__$1;
(statearr_36277_36354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (15))){
var inst_36138 = (state_36259[(13)]);
var inst_36137 = (state_36259[(14)]);
var inst_36139 = (state_36259[(15)]);
var inst_36136 = (state_36259[(16)]);
var inst_36154 = (state_36259[(2)]);
var inst_36155 = (inst_36139 + (1));
var tmp36271 = inst_36138;
var tmp36272 = inst_36137;
var tmp36273 = inst_36136;
var inst_36136__$1 = tmp36273;
var inst_36137__$1 = tmp36272;
var inst_36138__$1 = tmp36271;
var inst_36139__$1 = inst_36155;
var state_36259__$1 = (function (){var statearr_36278 = state_36259;
(statearr_36278[(13)] = inst_36138__$1);

(statearr_36278[(14)] = inst_36137__$1);

(statearr_36278[(15)] = inst_36139__$1);

(statearr_36278[(16)] = inst_36136__$1);

(statearr_36278[(18)] = inst_36154);

return statearr_36278;
})();
var statearr_36279_36355 = state_36259__$1;
(statearr_36279_36355[(2)] = null);

(statearr_36279_36355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (21))){
var inst_36181 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36283_36356 = state_36259__$1;
(statearr_36283_36356[(2)] = inst_36181);

(statearr_36283_36356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (31))){
var inst_36207 = (state_36259[(9)]);
var inst_36211 = done.call(null,null);
var inst_36212 = cljs.core.async.untap_STAR_.call(null,m,inst_36207);
var state_36259__$1 = (function (){var statearr_36284 = state_36259;
(statearr_36284[(19)] = inst_36211);

return statearr_36284;
})();
var statearr_36285_36357 = state_36259__$1;
(statearr_36285_36357[(2)] = inst_36212);

(statearr_36285_36357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (32))){
var inst_36199 = (state_36259[(20)]);
var inst_36202 = (state_36259[(10)]);
var inst_36200 = (state_36259[(11)]);
var inst_36201 = (state_36259[(21)]);
var inst_36214 = (state_36259[(2)]);
var inst_36215 = (inst_36202 + (1));
var tmp36280 = inst_36199;
var tmp36281 = inst_36200;
var tmp36282 = inst_36201;
var inst_36199__$1 = tmp36280;
var inst_36200__$1 = tmp36281;
var inst_36201__$1 = tmp36282;
var inst_36202__$1 = inst_36215;
var state_36259__$1 = (function (){var statearr_36286 = state_36259;
(statearr_36286[(20)] = inst_36199__$1);

(statearr_36286[(10)] = inst_36202__$1);

(statearr_36286[(11)] = inst_36200__$1);

(statearr_36286[(21)] = inst_36201__$1);

(statearr_36286[(22)] = inst_36214);

return statearr_36286;
})();
var statearr_36287_36358 = state_36259__$1;
(statearr_36287_36358[(2)] = null);

(statearr_36287_36358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (40))){
var inst_36227 = (state_36259[(23)]);
var inst_36231 = done.call(null,null);
var inst_36232 = cljs.core.async.untap_STAR_.call(null,m,inst_36227);
var state_36259__$1 = (function (){var statearr_36288 = state_36259;
(statearr_36288[(24)] = inst_36231);

return statearr_36288;
})();
var statearr_36289_36359 = state_36259__$1;
(statearr_36289_36359[(2)] = inst_36232);

(statearr_36289_36359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (33))){
var inst_36218 = (state_36259[(25)]);
var inst_36220 = cljs.core.chunked_seq_QMARK_.call(null,inst_36218);
var state_36259__$1 = state_36259;
if(inst_36220){
var statearr_36290_36360 = state_36259__$1;
(statearr_36290_36360[(1)] = (36));

} else {
var statearr_36291_36361 = state_36259__$1;
(statearr_36291_36361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (13))){
var inst_36148 = (state_36259[(26)]);
var inst_36151 = cljs.core.async.close_BANG_.call(null,inst_36148);
var state_36259__$1 = state_36259;
var statearr_36292_36362 = state_36259__$1;
(statearr_36292_36362[(2)] = inst_36151);

(statearr_36292_36362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (22))){
var inst_36171 = (state_36259[(8)]);
var inst_36174 = cljs.core.async.close_BANG_.call(null,inst_36171);
var state_36259__$1 = state_36259;
var statearr_36293_36363 = state_36259__$1;
(statearr_36293_36363[(2)] = inst_36174);

(statearr_36293_36363[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (36))){
var inst_36218 = (state_36259[(25)]);
var inst_36222 = cljs.core.chunk_first.call(null,inst_36218);
var inst_36223 = cljs.core.chunk_rest.call(null,inst_36218);
var inst_36224 = cljs.core.count.call(null,inst_36222);
var inst_36199 = inst_36223;
var inst_36200 = inst_36222;
var inst_36201 = inst_36224;
var inst_36202 = (0);
var state_36259__$1 = (function (){var statearr_36294 = state_36259;
(statearr_36294[(20)] = inst_36199);

(statearr_36294[(10)] = inst_36202);

(statearr_36294[(11)] = inst_36200);

(statearr_36294[(21)] = inst_36201);

return statearr_36294;
})();
var statearr_36295_36364 = state_36259__$1;
(statearr_36295_36364[(2)] = null);

(statearr_36295_36364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (41))){
var inst_36218 = (state_36259[(25)]);
var inst_36234 = (state_36259[(2)]);
var inst_36235 = cljs.core.next.call(null,inst_36218);
var inst_36199 = inst_36235;
var inst_36200 = null;
var inst_36201 = (0);
var inst_36202 = (0);
var state_36259__$1 = (function (){var statearr_36296 = state_36259;
(statearr_36296[(20)] = inst_36199);

(statearr_36296[(27)] = inst_36234);

(statearr_36296[(10)] = inst_36202);

(statearr_36296[(11)] = inst_36200);

(statearr_36296[(21)] = inst_36201);

return statearr_36296;
})();
var statearr_36297_36365 = state_36259__$1;
(statearr_36297_36365[(2)] = null);

(statearr_36297_36365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (43))){
var state_36259__$1 = state_36259;
var statearr_36298_36366 = state_36259__$1;
(statearr_36298_36366[(2)] = null);

(statearr_36298_36366[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (29))){
var inst_36243 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36299_36367 = state_36259__$1;
(statearr_36299_36367[(2)] = inst_36243);

(statearr_36299_36367[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (44))){
var inst_36252 = (state_36259[(2)]);
var state_36259__$1 = (function (){var statearr_36300 = state_36259;
(statearr_36300[(28)] = inst_36252);

return statearr_36300;
})();
var statearr_36301_36368 = state_36259__$1;
(statearr_36301_36368[(2)] = null);

(statearr_36301_36368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (6))){
var inst_36191 = (state_36259[(29)]);
var inst_36190 = cljs.core.deref.call(null,cs);
var inst_36191__$1 = cljs.core.keys.call(null,inst_36190);
var inst_36192 = cljs.core.count.call(null,inst_36191__$1);
var inst_36193 = cljs.core.reset_BANG_.call(null,dctr,inst_36192);
var inst_36198 = cljs.core.seq.call(null,inst_36191__$1);
var inst_36199 = inst_36198;
var inst_36200 = null;
var inst_36201 = (0);
var inst_36202 = (0);
var state_36259__$1 = (function (){var statearr_36302 = state_36259;
(statearr_36302[(20)] = inst_36199);

(statearr_36302[(29)] = inst_36191__$1);

(statearr_36302[(10)] = inst_36202);

(statearr_36302[(11)] = inst_36200);

(statearr_36302[(21)] = inst_36201);

(statearr_36302[(30)] = inst_36193);

return statearr_36302;
})();
var statearr_36303_36369 = state_36259__$1;
(statearr_36303_36369[(2)] = null);

(statearr_36303_36369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (28))){
var inst_36218 = (state_36259[(25)]);
var inst_36199 = (state_36259[(20)]);
var inst_36218__$1 = cljs.core.seq.call(null,inst_36199);
var state_36259__$1 = (function (){var statearr_36304 = state_36259;
(statearr_36304[(25)] = inst_36218__$1);

return statearr_36304;
})();
if(inst_36218__$1){
var statearr_36305_36370 = state_36259__$1;
(statearr_36305_36370[(1)] = (33));

} else {
var statearr_36306_36371 = state_36259__$1;
(statearr_36306_36371[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (25))){
var inst_36202 = (state_36259[(10)]);
var inst_36201 = (state_36259[(21)]);
var inst_36204 = (inst_36202 < inst_36201);
var inst_36205 = inst_36204;
var state_36259__$1 = state_36259;
if(cljs.core.truth_(inst_36205)){
var statearr_36307_36372 = state_36259__$1;
(statearr_36307_36372[(1)] = (27));

} else {
var statearr_36308_36373 = state_36259__$1;
(statearr_36308_36373[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (34))){
var state_36259__$1 = state_36259;
var statearr_36309_36374 = state_36259__$1;
(statearr_36309_36374[(2)] = null);

(statearr_36309_36374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (17))){
var state_36259__$1 = state_36259;
var statearr_36310_36375 = state_36259__$1;
(statearr_36310_36375[(2)] = null);

(statearr_36310_36375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (3))){
var inst_36257 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36259__$1,inst_36257);
} else {
if((state_val_36260 === (12))){
var inst_36186 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36311_36376 = state_36259__$1;
(statearr_36311_36376[(2)] = inst_36186);

(statearr_36311_36376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (2))){
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36259__$1,(4),ch);
} else {
if((state_val_36260 === (23))){
var state_36259__$1 = state_36259;
var statearr_36312_36377 = state_36259__$1;
(statearr_36312_36377[(2)] = null);

(statearr_36312_36377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (35))){
var inst_36241 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36313_36378 = state_36259__$1;
(statearr_36313_36378[(2)] = inst_36241);

(statearr_36313_36378[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (19))){
var inst_36158 = (state_36259[(7)]);
var inst_36162 = cljs.core.chunk_first.call(null,inst_36158);
var inst_36163 = cljs.core.chunk_rest.call(null,inst_36158);
var inst_36164 = cljs.core.count.call(null,inst_36162);
var inst_36136 = inst_36163;
var inst_36137 = inst_36162;
var inst_36138 = inst_36164;
var inst_36139 = (0);
var state_36259__$1 = (function (){var statearr_36314 = state_36259;
(statearr_36314[(13)] = inst_36138);

(statearr_36314[(14)] = inst_36137);

(statearr_36314[(15)] = inst_36139);

(statearr_36314[(16)] = inst_36136);

return statearr_36314;
})();
var statearr_36315_36379 = state_36259__$1;
(statearr_36315_36379[(2)] = null);

(statearr_36315_36379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (11))){
var inst_36158 = (state_36259[(7)]);
var inst_36136 = (state_36259[(16)]);
var inst_36158__$1 = cljs.core.seq.call(null,inst_36136);
var state_36259__$1 = (function (){var statearr_36316 = state_36259;
(statearr_36316[(7)] = inst_36158__$1);

return statearr_36316;
})();
if(inst_36158__$1){
var statearr_36317_36380 = state_36259__$1;
(statearr_36317_36380[(1)] = (16));

} else {
var statearr_36318_36381 = state_36259__$1;
(statearr_36318_36381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (9))){
var inst_36188 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36319_36382 = state_36259__$1;
(statearr_36319_36382[(2)] = inst_36188);

(statearr_36319_36382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (5))){
var inst_36134 = cljs.core.deref.call(null,cs);
var inst_36135 = cljs.core.seq.call(null,inst_36134);
var inst_36136 = inst_36135;
var inst_36137 = null;
var inst_36138 = (0);
var inst_36139 = (0);
var state_36259__$1 = (function (){var statearr_36320 = state_36259;
(statearr_36320[(13)] = inst_36138);

(statearr_36320[(14)] = inst_36137);

(statearr_36320[(15)] = inst_36139);

(statearr_36320[(16)] = inst_36136);

return statearr_36320;
})();
var statearr_36321_36383 = state_36259__$1;
(statearr_36321_36383[(2)] = null);

(statearr_36321_36383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (14))){
var state_36259__$1 = state_36259;
var statearr_36322_36384 = state_36259__$1;
(statearr_36322_36384[(2)] = null);

(statearr_36322_36384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (45))){
var inst_36249 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36323_36385 = state_36259__$1;
(statearr_36323_36385[(2)] = inst_36249);

(statearr_36323_36385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (26))){
var inst_36191 = (state_36259[(29)]);
var inst_36245 = (state_36259[(2)]);
var inst_36246 = cljs.core.seq.call(null,inst_36191);
var state_36259__$1 = (function (){var statearr_36324 = state_36259;
(statearr_36324[(31)] = inst_36245);

return statearr_36324;
})();
if(inst_36246){
var statearr_36325_36386 = state_36259__$1;
(statearr_36325_36386[(1)] = (42));

} else {
var statearr_36326_36387 = state_36259__$1;
(statearr_36326_36387[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (16))){
var inst_36158 = (state_36259[(7)]);
var inst_36160 = cljs.core.chunked_seq_QMARK_.call(null,inst_36158);
var state_36259__$1 = state_36259;
if(inst_36160){
var statearr_36327_36388 = state_36259__$1;
(statearr_36327_36388[(1)] = (19));

} else {
var statearr_36328_36389 = state_36259__$1;
(statearr_36328_36389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (38))){
var inst_36238 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36329_36390 = state_36259__$1;
(statearr_36329_36390[(2)] = inst_36238);

(statearr_36329_36390[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (30))){
var state_36259__$1 = state_36259;
var statearr_36330_36391 = state_36259__$1;
(statearr_36330_36391[(2)] = null);

(statearr_36330_36391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (10))){
var inst_36137 = (state_36259[(14)]);
var inst_36139 = (state_36259[(15)]);
var inst_36147 = cljs.core._nth.call(null,inst_36137,inst_36139);
var inst_36148 = cljs.core.nth.call(null,inst_36147,(0),null);
var inst_36149 = cljs.core.nth.call(null,inst_36147,(1),null);
var state_36259__$1 = (function (){var statearr_36331 = state_36259;
(statearr_36331[(26)] = inst_36148);

return statearr_36331;
})();
if(cljs.core.truth_(inst_36149)){
var statearr_36332_36392 = state_36259__$1;
(statearr_36332_36392[(1)] = (13));

} else {
var statearr_36333_36393 = state_36259__$1;
(statearr_36333_36393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (18))){
var inst_36184 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36334_36394 = state_36259__$1;
(statearr_36334_36394[(2)] = inst_36184);

(statearr_36334_36394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (42))){
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36259__$1,(45),dchan);
} else {
if((state_val_36260 === (37))){
var inst_36218 = (state_36259[(25)]);
var inst_36227 = (state_36259[(23)]);
var inst_36127 = (state_36259[(12)]);
var inst_36227__$1 = cljs.core.first.call(null,inst_36218);
var inst_36228 = cljs.core.async.put_BANG_.call(null,inst_36227__$1,inst_36127,done);
var state_36259__$1 = (function (){var statearr_36335 = state_36259;
(statearr_36335[(23)] = inst_36227__$1);

return statearr_36335;
})();
if(cljs.core.truth_(inst_36228)){
var statearr_36336_36395 = state_36259__$1;
(statearr_36336_36395[(1)] = (39));

} else {
var statearr_36337_36396 = state_36259__$1;
(statearr_36337_36396[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (8))){
var inst_36138 = (state_36259[(13)]);
var inst_36139 = (state_36259[(15)]);
var inst_36141 = (inst_36139 < inst_36138);
var inst_36142 = inst_36141;
var state_36259__$1 = state_36259;
if(cljs.core.truth_(inst_36142)){
var statearr_36338_36397 = state_36259__$1;
(statearr_36338_36397[(1)] = (10));

} else {
var statearr_36339_36398 = state_36259__$1;
(statearr_36339_36398[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___36344,cs,m,dchan,dctr,done))
;
return ((function (switch__28518__auto__,c__28677__auto___36344,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28519__auto__ = null;
var cljs$core$async$mult_$_state_machine__28519__auto____0 = (function (){
var statearr_36340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36340[(0)] = cljs$core$async$mult_$_state_machine__28519__auto__);

(statearr_36340[(1)] = (1));

return statearr_36340;
});
var cljs$core$async$mult_$_state_machine__28519__auto____1 = (function (state_36259){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36341){if((e36341 instanceof Object)){
var ex__28522__auto__ = e36341;
var statearr_36342_36399 = state_36259;
(statearr_36342_36399[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36400 = state_36259;
state_36259 = G__36400;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28519__auto__ = function(state_36259){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28519__auto____1.call(this,state_36259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28519__auto____0;
cljs$core$async$mult_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28519__auto____1;
return cljs$core$async$mult_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___36344,cs,m,dchan,dctr,done))
})();
var state__28679__auto__ = (function (){var statearr_36343 = f__28678__auto__.call(null);
(statearr_36343[(6)] = c__28677__auto___36344);

return statearr_36343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___36344,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36402 = arguments.length;
switch (G__36402) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36414 = arguments.length;
var i__4532__auto___36415 = (0);
while(true){
if((i__4532__auto___36415 < len__4531__auto___36414)){
args__4534__auto__.push((arguments[i__4532__auto___36415]));

var G__36416 = (i__4532__auto___36415 + (1));
i__4532__auto___36415 = G__36416;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36408){
var map__36409 = p__36408;
var map__36409__$1 = ((((!((map__36409 == null)))?(((((map__36409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36409):map__36409);
var opts = map__36409__$1;
var statearr_36411_36417 = state;
(statearr_36411_36417[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__36409,map__36409__$1,opts){
return (function (val){
var statearr_36412_36418 = state;
(statearr_36412_36418[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36409,map__36409__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_36413_36419 = state;
(statearr_36413_36419[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36404){
var G__36405 = cljs.core.first.call(null,seq36404);
var seq36404__$1 = cljs.core.next.call(null,seq36404);
var G__36406 = cljs.core.first.call(null,seq36404__$1);
var seq36404__$2 = cljs.core.next.call(null,seq36404__$1);
var G__36407 = cljs.core.first.call(null,seq36404__$2);
var seq36404__$3 = cljs.core.next.call(null,seq36404__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36405,G__36406,G__36407,seq36404__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36420 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36421){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36421 = meta36421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36422,meta36421__$1){
var self__ = this;
var _36422__$1 = this;
return (new cljs.core.async.t_cljs$core$async36420(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36421__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36422){
var self__ = this;
var _36422__$1 = this;
return self__.meta36421;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36421","meta36421",-689858959,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36420";

cljs.core.async.t_cljs$core$async36420.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async36420");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36420.
 */
cljs.core.async.__GT_t_cljs$core$async36420 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36420(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36421){
return (new cljs.core.async.t_cljs$core$async36420(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36421));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36420(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28677__auto___36584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___36584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___36584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36524){
var state_val_36525 = (state_36524[(1)]);
if((state_val_36525 === (7))){
var inst_36439 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36526_36585 = state_36524__$1;
(statearr_36526_36585[(2)] = inst_36439);

(statearr_36526_36585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (20))){
var inst_36451 = (state_36524[(7)]);
var state_36524__$1 = state_36524;
var statearr_36527_36586 = state_36524__$1;
(statearr_36527_36586[(2)] = inst_36451);

(statearr_36527_36586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (27))){
var state_36524__$1 = state_36524;
var statearr_36528_36587 = state_36524__$1;
(statearr_36528_36587[(2)] = null);

(statearr_36528_36587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (1))){
var inst_36426 = (state_36524[(8)]);
var inst_36426__$1 = calc_state.call(null);
var inst_36428 = (inst_36426__$1 == null);
var inst_36429 = cljs.core.not.call(null,inst_36428);
var state_36524__$1 = (function (){var statearr_36529 = state_36524;
(statearr_36529[(8)] = inst_36426__$1);

return statearr_36529;
})();
if(inst_36429){
var statearr_36530_36588 = state_36524__$1;
(statearr_36530_36588[(1)] = (2));

} else {
var statearr_36531_36589 = state_36524__$1;
(statearr_36531_36589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (24))){
var inst_36484 = (state_36524[(9)]);
var inst_36475 = (state_36524[(10)]);
var inst_36498 = (state_36524[(11)]);
var inst_36498__$1 = inst_36475.call(null,inst_36484);
var state_36524__$1 = (function (){var statearr_36532 = state_36524;
(statearr_36532[(11)] = inst_36498__$1);

return statearr_36532;
})();
if(cljs.core.truth_(inst_36498__$1)){
var statearr_36533_36590 = state_36524__$1;
(statearr_36533_36590[(1)] = (29));

} else {
var statearr_36534_36591 = state_36524__$1;
(statearr_36534_36591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (4))){
var inst_36442 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36442)){
var statearr_36535_36592 = state_36524__$1;
(statearr_36535_36592[(1)] = (8));

} else {
var statearr_36536_36593 = state_36524__$1;
(statearr_36536_36593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (15))){
var inst_36469 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36469)){
var statearr_36537_36594 = state_36524__$1;
(statearr_36537_36594[(1)] = (19));

} else {
var statearr_36538_36595 = state_36524__$1;
(statearr_36538_36595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (21))){
var inst_36474 = (state_36524[(12)]);
var inst_36474__$1 = (state_36524[(2)]);
var inst_36475 = cljs.core.get.call(null,inst_36474__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36476 = cljs.core.get.call(null,inst_36474__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36477 = cljs.core.get.call(null,inst_36474__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36524__$1 = (function (){var statearr_36539 = state_36524;
(statearr_36539[(13)] = inst_36476);

(statearr_36539[(10)] = inst_36475);

(statearr_36539[(12)] = inst_36474__$1);

return statearr_36539;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36524__$1,(22),inst_36477);
} else {
if((state_val_36525 === (31))){
var inst_36506 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36506)){
var statearr_36540_36596 = state_36524__$1;
(statearr_36540_36596[(1)] = (32));

} else {
var statearr_36541_36597 = state_36524__$1;
(statearr_36541_36597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (32))){
var inst_36483 = (state_36524[(14)]);
var state_36524__$1 = state_36524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36524__$1,(35),out,inst_36483);
} else {
if((state_val_36525 === (33))){
var inst_36474 = (state_36524[(12)]);
var inst_36451 = inst_36474;
var state_36524__$1 = (function (){var statearr_36542 = state_36524;
(statearr_36542[(7)] = inst_36451);

return statearr_36542;
})();
var statearr_36543_36598 = state_36524__$1;
(statearr_36543_36598[(2)] = null);

(statearr_36543_36598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (13))){
var inst_36451 = (state_36524[(7)]);
var inst_36458 = inst_36451.cljs$lang$protocol_mask$partition0$;
var inst_36459 = (inst_36458 & (64));
var inst_36460 = inst_36451.cljs$core$ISeq$;
var inst_36461 = (cljs.core.PROTOCOL_SENTINEL === inst_36460);
var inst_36462 = ((inst_36459) || (inst_36461));
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36462)){
var statearr_36544_36599 = state_36524__$1;
(statearr_36544_36599[(1)] = (16));

} else {
var statearr_36545_36600 = state_36524__$1;
(statearr_36545_36600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (22))){
var inst_36484 = (state_36524[(9)]);
var inst_36483 = (state_36524[(14)]);
var inst_36482 = (state_36524[(2)]);
var inst_36483__$1 = cljs.core.nth.call(null,inst_36482,(0),null);
var inst_36484__$1 = cljs.core.nth.call(null,inst_36482,(1),null);
var inst_36485 = (inst_36483__$1 == null);
var inst_36486 = cljs.core._EQ_.call(null,inst_36484__$1,change);
var inst_36487 = ((inst_36485) || (inst_36486));
var state_36524__$1 = (function (){var statearr_36546 = state_36524;
(statearr_36546[(9)] = inst_36484__$1);

(statearr_36546[(14)] = inst_36483__$1);

return statearr_36546;
})();
if(cljs.core.truth_(inst_36487)){
var statearr_36547_36601 = state_36524__$1;
(statearr_36547_36601[(1)] = (23));

} else {
var statearr_36548_36602 = state_36524__$1;
(statearr_36548_36602[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (36))){
var inst_36474 = (state_36524[(12)]);
var inst_36451 = inst_36474;
var state_36524__$1 = (function (){var statearr_36549 = state_36524;
(statearr_36549[(7)] = inst_36451);

return statearr_36549;
})();
var statearr_36550_36603 = state_36524__$1;
(statearr_36550_36603[(2)] = null);

(statearr_36550_36603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (29))){
var inst_36498 = (state_36524[(11)]);
var state_36524__$1 = state_36524;
var statearr_36551_36604 = state_36524__$1;
(statearr_36551_36604[(2)] = inst_36498);

(statearr_36551_36604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (6))){
var state_36524__$1 = state_36524;
var statearr_36552_36605 = state_36524__$1;
(statearr_36552_36605[(2)] = false);

(statearr_36552_36605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (28))){
var inst_36494 = (state_36524[(2)]);
var inst_36495 = calc_state.call(null);
var inst_36451 = inst_36495;
var state_36524__$1 = (function (){var statearr_36553 = state_36524;
(statearr_36553[(15)] = inst_36494);

(statearr_36553[(7)] = inst_36451);

return statearr_36553;
})();
var statearr_36554_36606 = state_36524__$1;
(statearr_36554_36606[(2)] = null);

(statearr_36554_36606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (25))){
var inst_36520 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36555_36607 = state_36524__$1;
(statearr_36555_36607[(2)] = inst_36520);

(statearr_36555_36607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (34))){
var inst_36518 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36556_36608 = state_36524__$1;
(statearr_36556_36608[(2)] = inst_36518);

(statearr_36556_36608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (17))){
var state_36524__$1 = state_36524;
var statearr_36557_36609 = state_36524__$1;
(statearr_36557_36609[(2)] = false);

(statearr_36557_36609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (3))){
var state_36524__$1 = state_36524;
var statearr_36558_36610 = state_36524__$1;
(statearr_36558_36610[(2)] = false);

(statearr_36558_36610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (12))){
var inst_36522 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36524__$1,inst_36522);
} else {
if((state_val_36525 === (2))){
var inst_36426 = (state_36524[(8)]);
var inst_36431 = inst_36426.cljs$lang$protocol_mask$partition0$;
var inst_36432 = (inst_36431 & (64));
var inst_36433 = inst_36426.cljs$core$ISeq$;
var inst_36434 = (cljs.core.PROTOCOL_SENTINEL === inst_36433);
var inst_36435 = ((inst_36432) || (inst_36434));
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36435)){
var statearr_36559_36611 = state_36524__$1;
(statearr_36559_36611[(1)] = (5));

} else {
var statearr_36560_36612 = state_36524__$1;
(statearr_36560_36612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (23))){
var inst_36483 = (state_36524[(14)]);
var inst_36489 = (inst_36483 == null);
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36489)){
var statearr_36561_36613 = state_36524__$1;
(statearr_36561_36613[(1)] = (26));

} else {
var statearr_36562_36614 = state_36524__$1;
(statearr_36562_36614[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (35))){
var inst_36509 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36509)){
var statearr_36563_36615 = state_36524__$1;
(statearr_36563_36615[(1)] = (36));

} else {
var statearr_36564_36616 = state_36524__$1;
(statearr_36564_36616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (19))){
var inst_36451 = (state_36524[(7)]);
var inst_36471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36451);
var state_36524__$1 = state_36524;
var statearr_36565_36617 = state_36524__$1;
(statearr_36565_36617[(2)] = inst_36471);

(statearr_36565_36617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (11))){
var inst_36451 = (state_36524[(7)]);
var inst_36455 = (inst_36451 == null);
var inst_36456 = cljs.core.not.call(null,inst_36455);
var state_36524__$1 = state_36524;
if(inst_36456){
var statearr_36566_36618 = state_36524__$1;
(statearr_36566_36618[(1)] = (13));

} else {
var statearr_36567_36619 = state_36524__$1;
(statearr_36567_36619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (9))){
var inst_36426 = (state_36524[(8)]);
var state_36524__$1 = state_36524;
var statearr_36568_36620 = state_36524__$1;
(statearr_36568_36620[(2)] = inst_36426);

(statearr_36568_36620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (5))){
var state_36524__$1 = state_36524;
var statearr_36569_36621 = state_36524__$1;
(statearr_36569_36621[(2)] = true);

(statearr_36569_36621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (14))){
var state_36524__$1 = state_36524;
var statearr_36570_36622 = state_36524__$1;
(statearr_36570_36622[(2)] = false);

(statearr_36570_36622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (26))){
var inst_36484 = (state_36524[(9)]);
var inst_36491 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36484);
var state_36524__$1 = state_36524;
var statearr_36571_36623 = state_36524__$1;
(statearr_36571_36623[(2)] = inst_36491);

(statearr_36571_36623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (16))){
var state_36524__$1 = state_36524;
var statearr_36572_36624 = state_36524__$1;
(statearr_36572_36624[(2)] = true);

(statearr_36572_36624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (38))){
var inst_36514 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36573_36625 = state_36524__$1;
(statearr_36573_36625[(2)] = inst_36514);

(statearr_36573_36625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (30))){
var inst_36484 = (state_36524[(9)]);
var inst_36476 = (state_36524[(13)]);
var inst_36475 = (state_36524[(10)]);
var inst_36501 = cljs.core.empty_QMARK_.call(null,inst_36475);
var inst_36502 = inst_36476.call(null,inst_36484);
var inst_36503 = cljs.core.not.call(null,inst_36502);
var inst_36504 = ((inst_36501) && (inst_36503));
var state_36524__$1 = state_36524;
var statearr_36574_36626 = state_36524__$1;
(statearr_36574_36626[(2)] = inst_36504);

(statearr_36574_36626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (10))){
var inst_36426 = (state_36524[(8)]);
var inst_36447 = (state_36524[(2)]);
var inst_36448 = cljs.core.get.call(null,inst_36447,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36449 = cljs.core.get.call(null,inst_36447,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36450 = cljs.core.get.call(null,inst_36447,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36451 = inst_36426;
var state_36524__$1 = (function (){var statearr_36575 = state_36524;
(statearr_36575[(7)] = inst_36451);

(statearr_36575[(16)] = inst_36448);

(statearr_36575[(17)] = inst_36449);

(statearr_36575[(18)] = inst_36450);

return statearr_36575;
})();
var statearr_36576_36627 = state_36524__$1;
(statearr_36576_36627[(2)] = null);

(statearr_36576_36627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (18))){
var inst_36466 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36577_36628 = state_36524__$1;
(statearr_36577_36628[(2)] = inst_36466);

(statearr_36577_36628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (37))){
var state_36524__$1 = state_36524;
var statearr_36578_36629 = state_36524__$1;
(statearr_36578_36629[(2)] = null);

(statearr_36578_36629[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (8))){
var inst_36426 = (state_36524[(8)]);
var inst_36444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36426);
var state_36524__$1 = state_36524;
var statearr_36579_36630 = state_36524__$1;
(statearr_36579_36630[(2)] = inst_36444);

(statearr_36579_36630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___36584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28518__auto__,c__28677__auto___36584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28519__auto__ = null;
var cljs$core$async$mix_$_state_machine__28519__auto____0 = (function (){
var statearr_36580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36580[(0)] = cljs$core$async$mix_$_state_machine__28519__auto__);

(statearr_36580[(1)] = (1));

return statearr_36580;
});
var cljs$core$async$mix_$_state_machine__28519__auto____1 = (function (state_36524){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36581){if((e36581 instanceof Object)){
var ex__28522__auto__ = e36581;
var statearr_36582_36631 = state_36524;
(statearr_36582_36631[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36632 = state_36524;
state_36524 = G__36632;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28519__auto__ = function(state_36524){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28519__auto____1.call(this,state_36524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28519__auto____0;
cljs$core$async$mix_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28519__auto____1;
return cljs$core$async$mix_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___36584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28679__auto__ = (function (){var statearr_36583 = f__28678__auto__.call(null);
(statearr_36583[(6)] = c__28677__auto___36584);

return statearr_36583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___36584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36634 = arguments.length;
switch (G__36634) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36638 = arguments.length;
switch (G__36638) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__36636_SHARP_){
if(cljs.core.truth_(p1__36636_SHARP_.call(null,topic))){
return p1__36636_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36636_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36639 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36640){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36640 = meta36640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36641,meta36640__$1){
var self__ = this;
var _36641__$1 = this;
return (new cljs.core.async.t_cljs$core$async36639(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36640__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36641){
var self__ = this;
var _36641__$1 = this;
return self__.meta36640;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36640","meta36640",117844789,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36639";

cljs.core.async.t_cljs$core$async36639.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async36639");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36639.
 */
cljs.core.async.__GT_t_cljs$core$async36639 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36640){
return (new cljs.core.async.t_cljs$core$async36639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36640));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36639(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28677__auto___36759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___36759,mults,ensure_mult,p){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___36759,mults,ensure_mult,p){
return (function (state_36713){
var state_val_36714 = (state_36713[(1)]);
if((state_val_36714 === (7))){
var inst_36709 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36715_36760 = state_36713__$1;
(statearr_36715_36760[(2)] = inst_36709);

(statearr_36715_36760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (20))){
var state_36713__$1 = state_36713;
var statearr_36716_36761 = state_36713__$1;
(statearr_36716_36761[(2)] = null);

(statearr_36716_36761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (1))){
var state_36713__$1 = state_36713;
var statearr_36717_36762 = state_36713__$1;
(statearr_36717_36762[(2)] = null);

(statearr_36717_36762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (24))){
var inst_36692 = (state_36713[(7)]);
var inst_36701 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36692);
var state_36713__$1 = state_36713;
var statearr_36718_36763 = state_36713__$1;
(statearr_36718_36763[(2)] = inst_36701);

(statearr_36718_36763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (4))){
var inst_36644 = (state_36713[(8)]);
var inst_36644__$1 = (state_36713[(2)]);
var inst_36645 = (inst_36644__$1 == null);
var state_36713__$1 = (function (){var statearr_36719 = state_36713;
(statearr_36719[(8)] = inst_36644__$1);

return statearr_36719;
})();
if(cljs.core.truth_(inst_36645)){
var statearr_36720_36764 = state_36713__$1;
(statearr_36720_36764[(1)] = (5));

} else {
var statearr_36721_36765 = state_36713__$1;
(statearr_36721_36765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (15))){
var inst_36686 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36722_36766 = state_36713__$1;
(statearr_36722_36766[(2)] = inst_36686);

(statearr_36722_36766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (21))){
var inst_36706 = (state_36713[(2)]);
var state_36713__$1 = (function (){var statearr_36723 = state_36713;
(statearr_36723[(9)] = inst_36706);

return statearr_36723;
})();
var statearr_36724_36767 = state_36713__$1;
(statearr_36724_36767[(2)] = null);

(statearr_36724_36767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (13))){
var inst_36668 = (state_36713[(10)]);
var inst_36670 = cljs.core.chunked_seq_QMARK_.call(null,inst_36668);
var state_36713__$1 = state_36713;
if(inst_36670){
var statearr_36725_36768 = state_36713__$1;
(statearr_36725_36768[(1)] = (16));

} else {
var statearr_36726_36769 = state_36713__$1;
(statearr_36726_36769[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (22))){
var inst_36698 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36698)){
var statearr_36727_36770 = state_36713__$1;
(statearr_36727_36770[(1)] = (23));

} else {
var statearr_36728_36771 = state_36713__$1;
(statearr_36728_36771[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (6))){
var inst_36644 = (state_36713[(8)]);
var inst_36694 = (state_36713[(11)]);
var inst_36692 = (state_36713[(7)]);
var inst_36692__$1 = topic_fn.call(null,inst_36644);
var inst_36693 = cljs.core.deref.call(null,mults);
var inst_36694__$1 = cljs.core.get.call(null,inst_36693,inst_36692__$1);
var state_36713__$1 = (function (){var statearr_36729 = state_36713;
(statearr_36729[(11)] = inst_36694__$1);

(statearr_36729[(7)] = inst_36692__$1);

return statearr_36729;
})();
if(cljs.core.truth_(inst_36694__$1)){
var statearr_36730_36772 = state_36713__$1;
(statearr_36730_36772[(1)] = (19));

} else {
var statearr_36731_36773 = state_36713__$1;
(statearr_36731_36773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (25))){
var inst_36703 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36732_36774 = state_36713__$1;
(statearr_36732_36774[(2)] = inst_36703);

(statearr_36732_36774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (17))){
var inst_36668 = (state_36713[(10)]);
var inst_36677 = cljs.core.first.call(null,inst_36668);
var inst_36678 = cljs.core.async.muxch_STAR_.call(null,inst_36677);
var inst_36679 = cljs.core.async.close_BANG_.call(null,inst_36678);
var inst_36680 = cljs.core.next.call(null,inst_36668);
var inst_36654 = inst_36680;
var inst_36655 = null;
var inst_36656 = (0);
var inst_36657 = (0);
var state_36713__$1 = (function (){var statearr_36733 = state_36713;
(statearr_36733[(12)] = inst_36656);

(statearr_36733[(13)] = inst_36657);

(statearr_36733[(14)] = inst_36679);

(statearr_36733[(15)] = inst_36655);

(statearr_36733[(16)] = inst_36654);

return statearr_36733;
})();
var statearr_36734_36775 = state_36713__$1;
(statearr_36734_36775[(2)] = null);

(statearr_36734_36775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (3))){
var inst_36711 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36713__$1,inst_36711);
} else {
if((state_val_36714 === (12))){
var inst_36688 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36735_36776 = state_36713__$1;
(statearr_36735_36776[(2)] = inst_36688);

(statearr_36735_36776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (2))){
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36713__$1,(4),ch);
} else {
if((state_val_36714 === (23))){
var state_36713__$1 = state_36713;
var statearr_36736_36777 = state_36713__$1;
(statearr_36736_36777[(2)] = null);

(statearr_36736_36777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (19))){
var inst_36644 = (state_36713[(8)]);
var inst_36694 = (state_36713[(11)]);
var inst_36696 = cljs.core.async.muxch_STAR_.call(null,inst_36694);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36713__$1,(22),inst_36696,inst_36644);
} else {
if((state_val_36714 === (11))){
var inst_36668 = (state_36713[(10)]);
var inst_36654 = (state_36713[(16)]);
var inst_36668__$1 = cljs.core.seq.call(null,inst_36654);
var state_36713__$1 = (function (){var statearr_36737 = state_36713;
(statearr_36737[(10)] = inst_36668__$1);

return statearr_36737;
})();
if(inst_36668__$1){
var statearr_36738_36778 = state_36713__$1;
(statearr_36738_36778[(1)] = (13));

} else {
var statearr_36739_36779 = state_36713__$1;
(statearr_36739_36779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (9))){
var inst_36690 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36740_36780 = state_36713__$1;
(statearr_36740_36780[(2)] = inst_36690);

(statearr_36740_36780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (5))){
var inst_36651 = cljs.core.deref.call(null,mults);
var inst_36652 = cljs.core.vals.call(null,inst_36651);
var inst_36653 = cljs.core.seq.call(null,inst_36652);
var inst_36654 = inst_36653;
var inst_36655 = null;
var inst_36656 = (0);
var inst_36657 = (0);
var state_36713__$1 = (function (){var statearr_36741 = state_36713;
(statearr_36741[(12)] = inst_36656);

(statearr_36741[(13)] = inst_36657);

(statearr_36741[(15)] = inst_36655);

(statearr_36741[(16)] = inst_36654);

return statearr_36741;
})();
var statearr_36742_36781 = state_36713__$1;
(statearr_36742_36781[(2)] = null);

(statearr_36742_36781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (14))){
var state_36713__$1 = state_36713;
var statearr_36746_36782 = state_36713__$1;
(statearr_36746_36782[(2)] = null);

(statearr_36746_36782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (16))){
var inst_36668 = (state_36713[(10)]);
var inst_36672 = cljs.core.chunk_first.call(null,inst_36668);
var inst_36673 = cljs.core.chunk_rest.call(null,inst_36668);
var inst_36674 = cljs.core.count.call(null,inst_36672);
var inst_36654 = inst_36673;
var inst_36655 = inst_36672;
var inst_36656 = inst_36674;
var inst_36657 = (0);
var state_36713__$1 = (function (){var statearr_36747 = state_36713;
(statearr_36747[(12)] = inst_36656);

(statearr_36747[(13)] = inst_36657);

(statearr_36747[(15)] = inst_36655);

(statearr_36747[(16)] = inst_36654);

return statearr_36747;
})();
var statearr_36748_36783 = state_36713__$1;
(statearr_36748_36783[(2)] = null);

(statearr_36748_36783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (10))){
var inst_36656 = (state_36713[(12)]);
var inst_36657 = (state_36713[(13)]);
var inst_36655 = (state_36713[(15)]);
var inst_36654 = (state_36713[(16)]);
var inst_36662 = cljs.core._nth.call(null,inst_36655,inst_36657);
var inst_36663 = cljs.core.async.muxch_STAR_.call(null,inst_36662);
var inst_36664 = cljs.core.async.close_BANG_.call(null,inst_36663);
var inst_36665 = (inst_36657 + (1));
var tmp36743 = inst_36656;
var tmp36744 = inst_36655;
var tmp36745 = inst_36654;
var inst_36654__$1 = tmp36745;
var inst_36655__$1 = tmp36744;
var inst_36656__$1 = tmp36743;
var inst_36657__$1 = inst_36665;
var state_36713__$1 = (function (){var statearr_36749 = state_36713;
(statearr_36749[(12)] = inst_36656__$1);

(statearr_36749[(13)] = inst_36657__$1);

(statearr_36749[(15)] = inst_36655__$1);

(statearr_36749[(17)] = inst_36664);

(statearr_36749[(16)] = inst_36654__$1);

return statearr_36749;
})();
var statearr_36750_36784 = state_36713__$1;
(statearr_36750_36784[(2)] = null);

(statearr_36750_36784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (18))){
var inst_36683 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36751_36785 = state_36713__$1;
(statearr_36751_36785[(2)] = inst_36683);

(statearr_36751_36785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (8))){
var inst_36656 = (state_36713[(12)]);
var inst_36657 = (state_36713[(13)]);
var inst_36659 = (inst_36657 < inst_36656);
var inst_36660 = inst_36659;
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36660)){
var statearr_36752_36786 = state_36713__$1;
(statearr_36752_36786[(1)] = (10));

} else {
var statearr_36753_36787 = state_36713__$1;
(statearr_36753_36787[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___36759,mults,ensure_mult,p))
;
return ((function (switch__28518__auto__,c__28677__auto___36759,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_36754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36754[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_36754[(1)] = (1));

return statearr_36754;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_36713){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36755){if((e36755 instanceof Object)){
var ex__28522__auto__ = e36755;
var statearr_36756_36788 = state_36713;
(statearr_36756_36788[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36789 = state_36713;
state_36713 = G__36789;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_36713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_36713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___36759,mults,ensure_mult,p))
})();
var state__28679__auto__ = (function (){var statearr_36757 = f__28678__auto__.call(null);
(statearr_36757[(6)] = c__28677__auto___36759);

return statearr_36757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___36759,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36791 = arguments.length;
switch (G__36791) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36794 = arguments.length;
switch (G__36794) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36797 = arguments.length;
switch (G__36797) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28677__auto___36864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___36864,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___36864,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36836){
var state_val_36837 = (state_36836[(1)]);
if((state_val_36837 === (7))){
var state_36836__$1 = state_36836;
var statearr_36838_36865 = state_36836__$1;
(statearr_36838_36865[(2)] = null);

(statearr_36838_36865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (1))){
var state_36836__$1 = state_36836;
var statearr_36839_36866 = state_36836__$1;
(statearr_36839_36866[(2)] = null);

(statearr_36839_36866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (4))){
var inst_36800 = (state_36836[(7)]);
var inst_36802 = (inst_36800 < cnt);
var state_36836__$1 = state_36836;
if(cljs.core.truth_(inst_36802)){
var statearr_36840_36867 = state_36836__$1;
(statearr_36840_36867[(1)] = (6));

} else {
var statearr_36841_36868 = state_36836__$1;
(statearr_36841_36868[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (15))){
var inst_36832 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36842_36869 = state_36836__$1;
(statearr_36842_36869[(2)] = inst_36832);

(statearr_36842_36869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (13))){
var inst_36825 = cljs.core.async.close_BANG_.call(null,out);
var state_36836__$1 = state_36836;
var statearr_36843_36870 = state_36836__$1;
(statearr_36843_36870[(2)] = inst_36825);

(statearr_36843_36870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (6))){
var state_36836__$1 = state_36836;
var statearr_36844_36871 = state_36836__$1;
(statearr_36844_36871[(2)] = null);

(statearr_36844_36871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (3))){
var inst_36834 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36836__$1,inst_36834);
} else {
if((state_val_36837 === (12))){
var inst_36822 = (state_36836[(8)]);
var inst_36822__$1 = (state_36836[(2)]);
var inst_36823 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36822__$1);
var state_36836__$1 = (function (){var statearr_36845 = state_36836;
(statearr_36845[(8)] = inst_36822__$1);

return statearr_36845;
})();
if(cljs.core.truth_(inst_36823)){
var statearr_36846_36872 = state_36836__$1;
(statearr_36846_36872[(1)] = (13));

} else {
var statearr_36847_36873 = state_36836__$1;
(statearr_36847_36873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (2))){
var inst_36799 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36800 = (0);
var state_36836__$1 = (function (){var statearr_36848 = state_36836;
(statearr_36848[(9)] = inst_36799);

(statearr_36848[(7)] = inst_36800);

return statearr_36848;
})();
var statearr_36849_36874 = state_36836__$1;
(statearr_36849_36874[(2)] = null);

(statearr_36849_36874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (11))){
var inst_36800 = (state_36836[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36836,(10),Object,null,(9));
var inst_36809 = chs__$1.call(null,inst_36800);
var inst_36810 = done.call(null,inst_36800);
var inst_36811 = cljs.core.async.take_BANG_.call(null,inst_36809,inst_36810);
var state_36836__$1 = state_36836;
var statearr_36850_36875 = state_36836__$1;
(statearr_36850_36875[(2)] = inst_36811);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36836__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (9))){
var inst_36800 = (state_36836[(7)]);
var inst_36813 = (state_36836[(2)]);
var inst_36814 = (inst_36800 + (1));
var inst_36800__$1 = inst_36814;
var state_36836__$1 = (function (){var statearr_36851 = state_36836;
(statearr_36851[(7)] = inst_36800__$1);

(statearr_36851[(10)] = inst_36813);

return statearr_36851;
})();
var statearr_36852_36876 = state_36836__$1;
(statearr_36852_36876[(2)] = null);

(statearr_36852_36876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (5))){
var inst_36820 = (state_36836[(2)]);
var state_36836__$1 = (function (){var statearr_36853 = state_36836;
(statearr_36853[(11)] = inst_36820);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36836__$1,(12),dchan);
} else {
if((state_val_36837 === (14))){
var inst_36822 = (state_36836[(8)]);
var inst_36827 = cljs.core.apply.call(null,f,inst_36822);
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36836__$1,(16),out,inst_36827);
} else {
if((state_val_36837 === (16))){
var inst_36829 = (state_36836[(2)]);
var state_36836__$1 = (function (){var statearr_36854 = state_36836;
(statearr_36854[(12)] = inst_36829);

return statearr_36854;
})();
var statearr_36855_36877 = state_36836__$1;
(statearr_36855_36877[(2)] = null);

(statearr_36855_36877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (10))){
var inst_36804 = (state_36836[(2)]);
var inst_36805 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36836__$1 = (function (){var statearr_36856 = state_36836;
(statearr_36856[(13)] = inst_36804);

return statearr_36856;
})();
var statearr_36857_36878 = state_36836__$1;
(statearr_36857_36878[(2)] = inst_36805);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36836__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (8))){
var inst_36818 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36858_36879 = state_36836__$1;
(statearr_36858_36879[(2)] = inst_36818);

(statearr_36858_36879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___36864,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28518__auto__,c__28677__auto___36864,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_36859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36859[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_36859[(1)] = (1));

return statearr_36859;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_36836){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36860){if((e36860 instanceof Object)){
var ex__28522__auto__ = e36860;
var statearr_36861_36880 = state_36836;
(statearr_36861_36880[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36881 = state_36836;
state_36836 = G__36881;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_36836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_36836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___36864,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28679__auto__ = (function (){var statearr_36862 = f__28678__auto__.call(null);
(statearr_36862[(6)] = c__28677__auto___36864);

return statearr_36862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___36864,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36884 = arguments.length;
switch (G__36884) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28677__auto___36938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___36938,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___36938,out){
return (function (state_36916){
var state_val_36917 = (state_36916[(1)]);
if((state_val_36917 === (7))){
var inst_36895 = (state_36916[(7)]);
var inst_36896 = (state_36916[(8)]);
var inst_36895__$1 = (state_36916[(2)]);
var inst_36896__$1 = cljs.core.nth.call(null,inst_36895__$1,(0),null);
var inst_36897 = cljs.core.nth.call(null,inst_36895__$1,(1),null);
var inst_36898 = (inst_36896__$1 == null);
var state_36916__$1 = (function (){var statearr_36918 = state_36916;
(statearr_36918[(9)] = inst_36897);

(statearr_36918[(7)] = inst_36895__$1);

(statearr_36918[(8)] = inst_36896__$1);

return statearr_36918;
})();
if(cljs.core.truth_(inst_36898)){
var statearr_36919_36939 = state_36916__$1;
(statearr_36919_36939[(1)] = (8));

} else {
var statearr_36920_36940 = state_36916__$1;
(statearr_36920_36940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (1))){
var inst_36885 = cljs.core.vec.call(null,chs);
var inst_36886 = inst_36885;
var state_36916__$1 = (function (){var statearr_36921 = state_36916;
(statearr_36921[(10)] = inst_36886);

return statearr_36921;
})();
var statearr_36922_36941 = state_36916__$1;
(statearr_36922_36941[(2)] = null);

(statearr_36922_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (4))){
var inst_36886 = (state_36916[(10)]);
var state_36916__$1 = state_36916;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36916__$1,(7),inst_36886);
} else {
if((state_val_36917 === (6))){
var inst_36912 = (state_36916[(2)]);
var state_36916__$1 = state_36916;
var statearr_36923_36942 = state_36916__$1;
(statearr_36923_36942[(2)] = inst_36912);

(statearr_36923_36942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (3))){
var inst_36914 = (state_36916[(2)]);
var state_36916__$1 = state_36916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36916__$1,inst_36914);
} else {
if((state_val_36917 === (2))){
var inst_36886 = (state_36916[(10)]);
var inst_36888 = cljs.core.count.call(null,inst_36886);
var inst_36889 = (inst_36888 > (0));
var state_36916__$1 = state_36916;
if(cljs.core.truth_(inst_36889)){
var statearr_36925_36943 = state_36916__$1;
(statearr_36925_36943[(1)] = (4));

} else {
var statearr_36926_36944 = state_36916__$1;
(statearr_36926_36944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (11))){
var inst_36886 = (state_36916[(10)]);
var inst_36905 = (state_36916[(2)]);
var tmp36924 = inst_36886;
var inst_36886__$1 = tmp36924;
var state_36916__$1 = (function (){var statearr_36927 = state_36916;
(statearr_36927[(11)] = inst_36905);

(statearr_36927[(10)] = inst_36886__$1);

return statearr_36927;
})();
var statearr_36928_36945 = state_36916__$1;
(statearr_36928_36945[(2)] = null);

(statearr_36928_36945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (9))){
var inst_36896 = (state_36916[(8)]);
var state_36916__$1 = state_36916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36916__$1,(11),out,inst_36896);
} else {
if((state_val_36917 === (5))){
var inst_36910 = cljs.core.async.close_BANG_.call(null,out);
var state_36916__$1 = state_36916;
var statearr_36929_36946 = state_36916__$1;
(statearr_36929_36946[(2)] = inst_36910);

(statearr_36929_36946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (10))){
var inst_36908 = (state_36916[(2)]);
var state_36916__$1 = state_36916;
var statearr_36930_36947 = state_36916__$1;
(statearr_36930_36947[(2)] = inst_36908);

(statearr_36930_36947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (8))){
var inst_36897 = (state_36916[(9)]);
var inst_36895 = (state_36916[(7)]);
var inst_36886 = (state_36916[(10)]);
var inst_36896 = (state_36916[(8)]);
var inst_36900 = (function (){var cs = inst_36886;
var vec__36891 = inst_36895;
var v = inst_36896;
var c = inst_36897;
return ((function (cs,vec__36891,v,c,inst_36897,inst_36895,inst_36886,inst_36896,state_val_36917,c__28677__auto___36938,out){
return (function (p1__36882_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36882_SHARP_);
});
;})(cs,vec__36891,v,c,inst_36897,inst_36895,inst_36886,inst_36896,state_val_36917,c__28677__auto___36938,out))
})();
var inst_36901 = cljs.core.filterv.call(null,inst_36900,inst_36886);
var inst_36886__$1 = inst_36901;
var state_36916__$1 = (function (){var statearr_36931 = state_36916;
(statearr_36931[(10)] = inst_36886__$1);

return statearr_36931;
})();
var statearr_36932_36948 = state_36916__$1;
(statearr_36932_36948[(2)] = null);

(statearr_36932_36948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___36938,out))
;
return ((function (switch__28518__auto__,c__28677__auto___36938,out){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_36933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36933[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_36933[(1)] = (1));

return statearr_36933;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_36916){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36934){if((e36934 instanceof Object)){
var ex__28522__auto__ = e36934;
var statearr_36935_36949 = state_36916;
(statearr_36935_36949[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_36916;
state_36916 = G__36950;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_36916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_36916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___36938,out))
})();
var state__28679__auto__ = (function (){var statearr_36936 = f__28678__auto__.call(null);
(statearr_36936[(6)] = c__28677__auto___36938);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___36938,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36952 = arguments.length;
switch (G__36952) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28677__auto___36997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___36997,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___36997,out){
return (function (state_36976){
var state_val_36977 = (state_36976[(1)]);
if((state_val_36977 === (7))){
var inst_36958 = (state_36976[(7)]);
var inst_36958__$1 = (state_36976[(2)]);
var inst_36959 = (inst_36958__$1 == null);
var inst_36960 = cljs.core.not.call(null,inst_36959);
var state_36976__$1 = (function (){var statearr_36978 = state_36976;
(statearr_36978[(7)] = inst_36958__$1);

return statearr_36978;
})();
if(inst_36960){
var statearr_36979_36998 = state_36976__$1;
(statearr_36979_36998[(1)] = (8));

} else {
var statearr_36980_36999 = state_36976__$1;
(statearr_36980_36999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (1))){
var inst_36953 = (0);
var state_36976__$1 = (function (){var statearr_36981 = state_36976;
(statearr_36981[(8)] = inst_36953);

return statearr_36981;
})();
var statearr_36982_37000 = state_36976__$1;
(statearr_36982_37000[(2)] = null);

(statearr_36982_37000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (4))){
var state_36976__$1 = state_36976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36976__$1,(7),ch);
} else {
if((state_val_36977 === (6))){
var inst_36971 = (state_36976[(2)]);
var state_36976__$1 = state_36976;
var statearr_36983_37001 = state_36976__$1;
(statearr_36983_37001[(2)] = inst_36971);

(statearr_36983_37001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (3))){
var inst_36973 = (state_36976[(2)]);
var inst_36974 = cljs.core.async.close_BANG_.call(null,out);
var state_36976__$1 = (function (){var statearr_36984 = state_36976;
(statearr_36984[(9)] = inst_36973);

return statearr_36984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36976__$1,inst_36974);
} else {
if((state_val_36977 === (2))){
var inst_36953 = (state_36976[(8)]);
var inst_36955 = (inst_36953 < n);
var state_36976__$1 = state_36976;
if(cljs.core.truth_(inst_36955)){
var statearr_36985_37002 = state_36976__$1;
(statearr_36985_37002[(1)] = (4));

} else {
var statearr_36986_37003 = state_36976__$1;
(statearr_36986_37003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (11))){
var inst_36953 = (state_36976[(8)]);
var inst_36963 = (state_36976[(2)]);
var inst_36964 = (inst_36953 + (1));
var inst_36953__$1 = inst_36964;
var state_36976__$1 = (function (){var statearr_36987 = state_36976;
(statearr_36987[(8)] = inst_36953__$1);

(statearr_36987[(10)] = inst_36963);

return statearr_36987;
})();
var statearr_36988_37004 = state_36976__$1;
(statearr_36988_37004[(2)] = null);

(statearr_36988_37004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (9))){
var state_36976__$1 = state_36976;
var statearr_36989_37005 = state_36976__$1;
(statearr_36989_37005[(2)] = null);

(statearr_36989_37005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (5))){
var state_36976__$1 = state_36976;
var statearr_36990_37006 = state_36976__$1;
(statearr_36990_37006[(2)] = null);

(statearr_36990_37006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (10))){
var inst_36968 = (state_36976[(2)]);
var state_36976__$1 = state_36976;
var statearr_36991_37007 = state_36976__$1;
(statearr_36991_37007[(2)] = inst_36968);

(statearr_36991_37007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36977 === (8))){
var inst_36958 = (state_36976[(7)]);
var state_36976__$1 = state_36976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36976__$1,(11),out,inst_36958);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___36997,out))
;
return ((function (switch__28518__auto__,c__28677__auto___36997,out){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_36992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36992[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_36992[(1)] = (1));

return statearr_36992;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_36976){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_36976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e36993){if((e36993 instanceof Object)){
var ex__28522__auto__ = e36993;
var statearr_36994_37008 = state_36976;
(statearr_36994_37008[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37009 = state_36976;
state_36976 = G__37009;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_36976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_36976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___36997,out))
})();
var state__28679__auto__ = (function (){var statearr_36995 = f__28678__auto__.call(null);
(statearr_36995[(6)] = c__28677__auto___36997);

return statearr_36995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___36997,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37011 = (function (f,ch,meta37012){
this.f = f;
this.ch = ch;
this.meta37012 = meta37012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37013,meta37012__$1){
var self__ = this;
var _37013__$1 = this;
return (new cljs.core.async.t_cljs$core$async37011(self__.f,self__.ch,meta37012__$1));
});

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37013){
var self__ = this;
var _37013__$1 = this;
return self__.meta37012;
});

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37014 = (function (f,ch,meta37012,_,fn1,meta37015){
this.f = f;
this.ch = ch;
this.meta37012 = meta37012;
this._ = _;
this.fn1 = fn1;
this.meta37015 = meta37015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37016,meta37015__$1){
var self__ = this;
var _37016__$1 = this;
return (new cljs.core.async.t_cljs$core$async37014(self__.f,self__.ch,self__.meta37012,self__._,self__.fn1,meta37015__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37016){
var self__ = this;
var _37016__$1 = this;
return self__.meta37015;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37010_SHARP_){
return f1.call(null,(((p1__37010_SHARP_ == null))?null:self__.f.call(null,p1__37010_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37014.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37012","meta37012",643973973,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37011","cljs.core.async/t_cljs$core$async37011",526033441,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37015","meta37015",564994972,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37014";

cljs.core.async.t_cljs$core$async37014.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async37014");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37014.
 */
cljs.core.async.__GT_t_cljs$core$async37014 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37014(f__$1,ch__$1,meta37012__$1,___$2,fn1__$1,meta37015){
return (new cljs.core.async.t_cljs$core$async37014(f__$1,ch__$1,meta37012__$1,___$2,fn1__$1,meta37015));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37014(self__.f,self__.ch,self__.meta37012,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37012","meta37012",643973973,null)], null);
});

cljs.core.async.t_cljs$core$async37011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37011";

cljs.core.async.t_cljs$core$async37011.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async37011");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37011.
 */
cljs.core.async.__GT_t_cljs$core$async37011 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37011(f__$1,ch__$1,meta37012){
return (new cljs.core.async.t_cljs$core$async37011(f__$1,ch__$1,meta37012));
});

}

return (new cljs.core.async.t_cljs$core$async37011(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37017 = (function (f,ch,meta37018){
this.f = f;
this.ch = ch;
this.meta37018 = meta37018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37019,meta37018__$1){
var self__ = this;
var _37019__$1 = this;
return (new cljs.core.async.t_cljs$core$async37017(self__.f,self__.ch,meta37018__$1));
});

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37019){
var self__ = this;
var _37019__$1 = this;
return self__.meta37018;
});

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37018","meta37018",1721755814,null)], null);
});

cljs.core.async.t_cljs$core$async37017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37017";

cljs.core.async.t_cljs$core$async37017.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async37017");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37017.
 */
cljs.core.async.__GT_t_cljs$core$async37017 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37017(f__$1,ch__$1,meta37018){
return (new cljs.core.async.t_cljs$core$async37017(f__$1,ch__$1,meta37018));
});

}

return (new cljs.core.async.t_cljs$core$async37017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37020 = (function (p,ch,meta37021){
this.p = p;
this.ch = ch;
this.meta37021 = meta37021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37022,meta37021__$1){
var self__ = this;
var _37022__$1 = this;
return (new cljs.core.async.t_cljs$core$async37020(self__.p,self__.ch,meta37021__$1));
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37022){
var self__ = this;
var _37022__$1 = this;
return self__.meta37021;
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37021","meta37021",-1653192599,null)], null);
});

cljs.core.async.t_cljs$core$async37020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37020";

cljs.core.async.t_cljs$core$async37020.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async37020");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37020.
 */
cljs.core.async.__GT_t_cljs$core$async37020 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37020(p__$1,ch__$1,meta37021){
return (new cljs.core.async.t_cljs$core$async37020(p__$1,ch__$1,meta37021));
});

}

return (new cljs.core.async.t_cljs$core$async37020(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37024 = arguments.length;
switch (G__37024) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28677__auto___37064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___37064,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___37064,out){
return (function (state_37045){
var state_val_37046 = (state_37045[(1)]);
if((state_val_37046 === (7))){
var inst_37041 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37047_37065 = state_37045__$1;
(statearr_37047_37065[(2)] = inst_37041);

(statearr_37047_37065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (1))){
var state_37045__$1 = state_37045;
var statearr_37048_37066 = state_37045__$1;
(statearr_37048_37066[(2)] = null);

(statearr_37048_37066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (4))){
var inst_37027 = (state_37045[(7)]);
var inst_37027__$1 = (state_37045[(2)]);
var inst_37028 = (inst_37027__$1 == null);
var state_37045__$1 = (function (){var statearr_37049 = state_37045;
(statearr_37049[(7)] = inst_37027__$1);

return statearr_37049;
})();
if(cljs.core.truth_(inst_37028)){
var statearr_37050_37067 = state_37045__$1;
(statearr_37050_37067[(1)] = (5));

} else {
var statearr_37051_37068 = state_37045__$1;
(statearr_37051_37068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (6))){
var inst_37027 = (state_37045[(7)]);
var inst_37032 = p.call(null,inst_37027);
var state_37045__$1 = state_37045;
if(cljs.core.truth_(inst_37032)){
var statearr_37052_37069 = state_37045__$1;
(statearr_37052_37069[(1)] = (8));

} else {
var statearr_37053_37070 = state_37045__$1;
(statearr_37053_37070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (3))){
var inst_37043 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37045__$1,inst_37043);
} else {
if((state_val_37046 === (2))){
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37045__$1,(4),ch);
} else {
if((state_val_37046 === (11))){
var inst_37035 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37054_37071 = state_37045__$1;
(statearr_37054_37071[(2)] = inst_37035);

(statearr_37054_37071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (9))){
var state_37045__$1 = state_37045;
var statearr_37055_37072 = state_37045__$1;
(statearr_37055_37072[(2)] = null);

(statearr_37055_37072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (5))){
var inst_37030 = cljs.core.async.close_BANG_.call(null,out);
var state_37045__$1 = state_37045;
var statearr_37056_37073 = state_37045__$1;
(statearr_37056_37073[(2)] = inst_37030);

(statearr_37056_37073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (10))){
var inst_37038 = (state_37045[(2)]);
var state_37045__$1 = (function (){var statearr_37057 = state_37045;
(statearr_37057[(8)] = inst_37038);

return statearr_37057;
})();
var statearr_37058_37074 = state_37045__$1;
(statearr_37058_37074[(2)] = null);

(statearr_37058_37074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (8))){
var inst_37027 = (state_37045[(7)]);
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37045__$1,(11),out,inst_37027);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___37064,out))
;
return ((function (switch__28518__auto__,c__28677__auto___37064,out){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_37059 = [null,null,null,null,null,null,null,null,null];
(statearr_37059[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_37059[(1)] = (1));

return statearr_37059;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_37045){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_37045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e37060){if((e37060 instanceof Object)){
var ex__28522__auto__ = e37060;
var statearr_37061_37075 = state_37045;
(statearr_37061_37075[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37076 = state_37045;
state_37045 = G__37076;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_37045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_37045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___37064,out))
})();
var state__28679__auto__ = (function (){var statearr_37062 = f__28678__auto__.call(null);
(statearr_37062[(6)] = c__28677__auto___37064);

return statearr_37062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___37064,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37078 = arguments.length;
switch (G__37078) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__){
return (function (state_37141){
var state_val_37142 = (state_37141[(1)]);
if((state_val_37142 === (7))){
var inst_37137 = (state_37141[(2)]);
var state_37141__$1 = state_37141;
var statearr_37143_37181 = state_37141__$1;
(statearr_37143_37181[(2)] = inst_37137);

(statearr_37143_37181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (20))){
var inst_37107 = (state_37141[(7)]);
var inst_37118 = (state_37141[(2)]);
var inst_37119 = cljs.core.next.call(null,inst_37107);
var inst_37093 = inst_37119;
var inst_37094 = null;
var inst_37095 = (0);
var inst_37096 = (0);
var state_37141__$1 = (function (){var statearr_37144 = state_37141;
(statearr_37144[(8)] = inst_37095);

(statearr_37144[(9)] = inst_37096);

(statearr_37144[(10)] = inst_37118);

(statearr_37144[(11)] = inst_37094);

(statearr_37144[(12)] = inst_37093);

return statearr_37144;
})();
var statearr_37145_37182 = state_37141__$1;
(statearr_37145_37182[(2)] = null);

(statearr_37145_37182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (1))){
var state_37141__$1 = state_37141;
var statearr_37146_37183 = state_37141__$1;
(statearr_37146_37183[(2)] = null);

(statearr_37146_37183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (4))){
var inst_37082 = (state_37141[(13)]);
var inst_37082__$1 = (state_37141[(2)]);
var inst_37083 = (inst_37082__$1 == null);
var state_37141__$1 = (function (){var statearr_37147 = state_37141;
(statearr_37147[(13)] = inst_37082__$1);

return statearr_37147;
})();
if(cljs.core.truth_(inst_37083)){
var statearr_37148_37184 = state_37141__$1;
(statearr_37148_37184[(1)] = (5));

} else {
var statearr_37149_37185 = state_37141__$1;
(statearr_37149_37185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (15))){
var state_37141__$1 = state_37141;
var statearr_37153_37186 = state_37141__$1;
(statearr_37153_37186[(2)] = null);

(statearr_37153_37186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (21))){
var state_37141__$1 = state_37141;
var statearr_37154_37187 = state_37141__$1;
(statearr_37154_37187[(2)] = null);

(statearr_37154_37187[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (13))){
var inst_37095 = (state_37141[(8)]);
var inst_37096 = (state_37141[(9)]);
var inst_37094 = (state_37141[(11)]);
var inst_37093 = (state_37141[(12)]);
var inst_37103 = (state_37141[(2)]);
var inst_37104 = (inst_37096 + (1));
var tmp37150 = inst_37095;
var tmp37151 = inst_37094;
var tmp37152 = inst_37093;
var inst_37093__$1 = tmp37152;
var inst_37094__$1 = tmp37151;
var inst_37095__$1 = tmp37150;
var inst_37096__$1 = inst_37104;
var state_37141__$1 = (function (){var statearr_37155 = state_37141;
(statearr_37155[(8)] = inst_37095__$1);

(statearr_37155[(9)] = inst_37096__$1);

(statearr_37155[(11)] = inst_37094__$1);

(statearr_37155[(12)] = inst_37093__$1);

(statearr_37155[(14)] = inst_37103);

return statearr_37155;
})();
var statearr_37156_37188 = state_37141__$1;
(statearr_37156_37188[(2)] = null);

(statearr_37156_37188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (22))){
var state_37141__$1 = state_37141;
var statearr_37157_37189 = state_37141__$1;
(statearr_37157_37189[(2)] = null);

(statearr_37157_37189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (6))){
var inst_37082 = (state_37141[(13)]);
var inst_37091 = f.call(null,inst_37082);
var inst_37092 = cljs.core.seq.call(null,inst_37091);
var inst_37093 = inst_37092;
var inst_37094 = null;
var inst_37095 = (0);
var inst_37096 = (0);
var state_37141__$1 = (function (){var statearr_37158 = state_37141;
(statearr_37158[(8)] = inst_37095);

(statearr_37158[(9)] = inst_37096);

(statearr_37158[(11)] = inst_37094);

(statearr_37158[(12)] = inst_37093);

return statearr_37158;
})();
var statearr_37159_37190 = state_37141__$1;
(statearr_37159_37190[(2)] = null);

(statearr_37159_37190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (17))){
var inst_37107 = (state_37141[(7)]);
var inst_37111 = cljs.core.chunk_first.call(null,inst_37107);
var inst_37112 = cljs.core.chunk_rest.call(null,inst_37107);
var inst_37113 = cljs.core.count.call(null,inst_37111);
var inst_37093 = inst_37112;
var inst_37094 = inst_37111;
var inst_37095 = inst_37113;
var inst_37096 = (0);
var state_37141__$1 = (function (){var statearr_37160 = state_37141;
(statearr_37160[(8)] = inst_37095);

(statearr_37160[(9)] = inst_37096);

(statearr_37160[(11)] = inst_37094);

(statearr_37160[(12)] = inst_37093);

return statearr_37160;
})();
var statearr_37161_37191 = state_37141__$1;
(statearr_37161_37191[(2)] = null);

(statearr_37161_37191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (3))){
var inst_37139 = (state_37141[(2)]);
var state_37141__$1 = state_37141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37141__$1,inst_37139);
} else {
if((state_val_37142 === (12))){
var inst_37127 = (state_37141[(2)]);
var state_37141__$1 = state_37141;
var statearr_37162_37192 = state_37141__$1;
(statearr_37162_37192[(2)] = inst_37127);

(statearr_37162_37192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (2))){
var state_37141__$1 = state_37141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37141__$1,(4),in$);
} else {
if((state_val_37142 === (23))){
var inst_37135 = (state_37141[(2)]);
var state_37141__$1 = state_37141;
var statearr_37163_37193 = state_37141__$1;
(statearr_37163_37193[(2)] = inst_37135);

(statearr_37163_37193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (19))){
var inst_37122 = (state_37141[(2)]);
var state_37141__$1 = state_37141;
var statearr_37164_37194 = state_37141__$1;
(statearr_37164_37194[(2)] = inst_37122);

(statearr_37164_37194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (11))){
var inst_37093 = (state_37141[(12)]);
var inst_37107 = (state_37141[(7)]);
var inst_37107__$1 = cljs.core.seq.call(null,inst_37093);
var state_37141__$1 = (function (){var statearr_37165 = state_37141;
(statearr_37165[(7)] = inst_37107__$1);

return statearr_37165;
})();
if(inst_37107__$1){
var statearr_37166_37195 = state_37141__$1;
(statearr_37166_37195[(1)] = (14));

} else {
var statearr_37167_37196 = state_37141__$1;
(statearr_37167_37196[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (9))){
var inst_37129 = (state_37141[(2)]);
var inst_37130 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37141__$1 = (function (){var statearr_37168 = state_37141;
(statearr_37168[(15)] = inst_37129);

return statearr_37168;
})();
if(cljs.core.truth_(inst_37130)){
var statearr_37169_37197 = state_37141__$1;
(statearr_37169_37197[(1)] = (21));

} else {
var statearr_37170_37198 = state_37141__$1;
(statearr_37170_37198[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (5))){
var inst_37085 = cljs.core.async.close_BANG_.call(null,out);
var state_37141__$1 = state_37141;
var statearr_37171_37199 = state_37141__$1;
(statearr_37171_37199[(2)] = inst_37085);

(statearr_37171_37199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (14))){
var inst_37107 = (state_37141[(7)]);
var inst_37109 = cljs.core.chunked_seq_QMARK_.call(null,inst_37107);
var state_37141__$1 = state_37141;
if(inst_37109){
var statearr_37172_37200 = state_37141__$1;
(statearr_37172_37200[(1)] = (17));

} else {
var statearr_37173_37201 = state_37141__$1;
(statearr_37173_37201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (16))){
var inst_37125 = (state_37141[(2)]);
var state_37141__$1 = state_37141;
var statearr_37174_37202 = state_37141__$1;
(statearr_37174_37202[(2)] = inst_37125);

(statearr_37174_37202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37142 === (10))){
var inst_37096 = (state_37141[(9)]);
var inst_37094 = (state_37141[(11)]);
var inst_37101 = cljs.core._nth.call(null,inst_37094,inst_37096);
var state_37141__$1 = state_37141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37141__$1,(13),out,inst_37101);
} else {
if((state_val_37142 === (18))){
var inst_37107 = (state_37141[(7)]);
var inst_37116 = cljs.core.first.call(null,inst_37107);
var state_37141__$1 = state_37141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37141__$1,(20),out,inst_37116);
} else {
if((state_val_37142 === (8))){
var inst_37095 = (state_37141[(8)]);
var inst_37096 = (state_37141[(9)]);
var inst_37098 = (inst_37096 < inst_37095);
var inst_37099 = inst_37098;
var state_37141__$1 = state_37141;
if(cljs.core.truth_(inst_37099)){
var statearr_37175_37203 = state_37141__$1;
(statearr_37175_37203[(1)] = (10));

} else {
var statearr_37176_37204 = state_37141__$1;
(statearr_37176_37204[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto__))
;
return ((function (switch__28518__auto__,c__28677__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28519__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28519__auto____0 = (function (){
var statearr_37177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37177[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28519__auto__);

(statearr_37177[(1)] = (1));

return statearr_37177;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28519__auto____1 = (function (state_37141){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_37141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e37178){if((e37178 instanceof Object)){
var ex__28522__auto__ = e37178;
var statearr_37179_37205 = state_37141;
(statearr_37179_37205[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37206 = state_37141;
state_37141 = G__37206;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28519__auto__ = function(state_37141){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28519__auto____1.call(this,state_37141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28519__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28519__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__))
})();
var state__28679__auto__ = (function (){var statearr_37180 = f__28678__auto__.call(null);
(statearr_37180[(6)] = c__28677__auto__);

return statearr_37180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__))
);

return c__28677__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37208 = arguments.length;
switch (G__37208) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37211 = arguments.length;
switch (G__37211) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37214 = arguments.length;
switch (G__37214) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28677__auto___37261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___37261,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___37261,out){
return (function (state_37238){
var state_val_37239 = (state_37238[(1)]);
if((state_val_37239 === (7))){
var inst_37233 = (state_37238[(2)]);
var state_37238__$1 = state_37238;
var statearr_37240_37262 = state_37238__$1;
(statearr_37240_37262[(2)] = inst_37233);

(statearr_37240_37262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (1))){
var inst_37215 = null;
var state_37238__$1 = (function (){var statearr_37241 = state_37238;
(statearr_37241[(7)] = inst_37215);

return statearr_37241;
})();
var statearr_37242_37263 = state_37238__$1;
(statearr_37242_37263[(2)] = null);

(statearr_37242_37263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (4))){
var inst_37218 = (state_37238[(8)]);
var inst_37218__$1 = (state_37238[(2)]);
var inst_37219 = (inst_37218__$1 == null);
var inst_37220 = cljs.core.not.call(null,inst_37219);
var state_37238__$1 = (function (){var statearr_37243 = state_37238;
(statearr_37243[(8)] = inst_37218__$1);

return statearr_37243;
})();
if(inst_37220){
var statearr_37244_37264 = state_37238__$1;
(statearr_37244_37264[(1)] = (5));

} else {
var statearr_37245_37265 = state_37238__$1;
(statearr_37245_37265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (6))){
var state_37238__$1 = state_37238;
var statearr_37246_37266 = state_37238__$1;
(statearr_37246_37266[(2)] = null);

(statearr_37246_37266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (3))){
var inst_37235 = (state_37238[(2)]);
var inst_37236 = cljs.core.async.close_BANG_.call(null,out);
var state_37238__$1 = (function (){var statearr_37247 = state_37238;
(statearr_37247[(9)] = inst_37235);

return statearr_37247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37238__$1,inst_37236);
} else {
if((state_val_37239 === (2))){
var state_37238__$1 = state_37238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37238__$1,(4),ch);
} else {
if((state_val_37239 === (11))){
var inst_37218 = (state_37238[(8)]);
var inst_37227 = (state_37238[(2)]);
var inst_37215 = inst_37218;
var state_37238__$1 = (function (){var statearr_37248 = state_37238;
(statearr_37248[(10)] = inst_37227);

(statearr_37248[(7)] = inst_37215);

return statearr_37248;
})();
var statearr_37249_37267 = state_37238__$1;
(statearr_37249_37267[(2)] = null);

(statearr_37249_37267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (9))){
var inst_37218 = (state_37238[(8)]);
var state_37238__$1 = state_37238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37238__$1,(11),out,inst_37218);
} else {
if((state_val_37239 === (5))){
var inst_37218 = (state_37238[(8)]);
var inst_37215 = (state_37238[(7)]);
var inst_37222 = cljs.core._EQ_.call(null,inst_37218,inst_37215);
var state_37238__$1 = state_37238;
if(inst_37222){
var statearr_37251_37268 = state_37238__$1;
(statearr_37251_37268[(1)] = (8));

} else {
var statearr_37252_37269 = state_37238__$1;
(statearr_37252_37269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (10))){
var inst_37230 = (state_37238[(2)]);
var state_37238__$1 = state_37238;
var statearr_37253_37270 = state_37238__$1;
(statearr_37253_37270[(2)] = inst_37230);

(statearr_37253_37270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (8))){
var inst_37215 = (state_37238[(7)]);
var tmp37250 = inst_37215;
var inst_37215__$1 = tmp37250;
var state_37238__$1 = (function (){var statearr_37254 = state_37238;
(statearr_37254[(7)] = inst_37215__$1);

return statearr_37254;
})();
var statearr_37255_37271 = state_37238__$1;
(statearr_37255_37271[(2)] = null);

(statearr_37255_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___37261,out))
;
return ((function (switch__28518__auto__,c__28677__auto___37261,out){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_37256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37256[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_37256[(1)] = (1));

return statearr_37256;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_37238){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_37238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e37257){if((e37257 instanceof Object)){
var ex__28522__auto__ = e37257;
var statearr_37258_37272 = state_37238;
(statearr_37258_37272[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37273 = state_37238;
state_37238 = G__37273;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_37238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_37238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___37261,out))
})();
var state__28679__auto__ = (function (){var statearr_37259 = f__28678__auto__.call(null);
(statearr_37259[(6)] = c__28677__auto___37261);

return statearr_37259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___37261,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37275 = arguments.length;
switch (G__37275) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28677__auto___37341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___37341,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___37341,out){
return (function (state_37313){
var state_val_37314 = (state_37313[(1)]);
if((state_val_37314 === (7))){
var inst_37309 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37315_37342 = state_37313__$1;
(statearr_37315_37342[(2)] = inst_37309);

(statearr_37315_37342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (1))){
var inst_37276 = (new Array(n));
var inst_37277 = inst_37276;
var inst_37278 = (0);
var state_37313__$1 = (function (){var statearr_37316 = state_37313;
(statearr_37316[(7)] = inst_37278);

(statearr_37316[(8)] = inst_37277);

return statearr_37316;
})();
var statearr_37317_37343 = state_37313__$1;
(statearr_37317_37343[(2)] = null);

(statearr_37317_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (4))){
var inst_37281 = (state_37313[(9)]);
var inst_37281__$1 = (state_37313[(2)]);
var inst_37282 = (inst_37281__$1 == null);
var inst_37283 = cljs.core.not.call(null,inst_37282);
var state_37313__$1 = (function (){var statearr_37318 = state_37313;
(statearr_37318[(9)] = inst_37281__$1);

return statearr_37318;
})();
if(inst_37283){
var statearr_37319_37344 = state_37313__$1;
(statearr_37319_37344[(1)] = (5));

} else {
var statearr_37320_37345 = state_37313__$1;
(statearr_37320_37345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (15))){
var inst_37303 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37321_37346 = state_37313__$1;
(statearr_37321_37346[(2)] = inst_37303);

(statearr_37321_37346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (13))){
var state_37313__$1 = state_37313;
var statearr_37322_37347 = state_37313__$1;
(statearr_37322_37347[(2)] = null);

(statearr_37322_37347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (6))){
var inst_37278 = (state_37313[(7)]);
var inst_37299 = (inst_37278 > (0));
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37299)){
var statearr_37323_37348 = state_37313__$1;
(statearr_37323_37348[(1)] = (12));

} else {
var statearr_37324_37349 = state_37313__$1;
(statearr_37324_37349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (3))){
var inst_37311 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37313__$1,inst_37311);
} else {
if((state_val_37314 === (12))){
var inst_37277 = (state_37313[(8)]);
var inst_37301 = cljs.core.vec.call(null,inst_37277);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37313__$1,(15),out,inst_37301);
} else {
if((state_val_37314 === (2))){
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(4),ch);
} else {
if((state_val_37314 === (11))){
var inst_37293 = (state_37313[(2)]);
var inst_37294 = (new Array(n));
var inst_37277 = inst_37294;
var inst_37278 = (0);
var state_37313__$1 = (function (){var statearr_37325 = state_37313;
(statearr_37325[(10)] = inst_37293);

(statearr_37325[(7)] = inst_37278);

(statearr_37325[(8)] = inst_37277);

return statearr_37325;
})();
var statearr_37326_37350 = state_37313__$1;
(statearr_37326_37350[(2)] = null);

(statearr_37326_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (9))){
var inst_37277 = (state_37313[(8)]);
var inst_37291 = cljs.core.vec.call(null,inst_37277);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37313__$1,(11),out,inst_37291);
} else {
if((state_val_37314 === (5))){
var inst_37278 = (state_37313[(7)]);
var inst_37281 = (state_37313[(9)]);
var inst_37286 = (state_37313[(11)]);
var inst_37277 = (state_37313[(8)]);
var inst_37285 = (inst_37277[inst_37278] = inst_37281);
var inst_37286__$1 = (inst_37278 + (1));
var inst_37287 = (inst_37286__$1 < n);
var state_37313__$1 = (function (){var statearr_37327 = state_37313;
(statearr_37327[(12)] = inst_37285);

(statearr_37327[(11)] = inst_37286__$1);

return statearr_37327;
})();
if(cljs.core.truth_(inst_37287)){
var statearr_37328_37351 = state_37313__$1;
(statearr_37328_37351[(1)] = (8));

} else {
var statearr_37329_37352 = state_37313__$1;
(statearr_37329_37352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (14))){
var inst_37306 = (state_37313[(2)]);
var inst_37307 = cljs.core.async.close_BANG_.call(null,out);
var state_37313__$1 = (function (){var statearr_37331 = state_37313;
(statearr_37331[(13)] = inst_37306);

return statearr_37331;
})();
var statearr_37332_37353 = state_37313__$1;
(statearr_37332_37353[(2)] = inst_37307);

(statearr_37332_37353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (10))){
var inst_37297 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37333_37354 = state_37313__$1;
(statearr_37333_37354[(2)] = inst_37297);

(statearr_37333_37354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (8))){
var inst_37286 = (state_37313[(11)]);
var inst_37277 = (state_37313[(8)]);
var tmp37330 = inst_37277;
var inst_37277__$1 = tmp37330;
var inst_37278 = inst_37286;
var state_37313__$1 = (function (){var statearr_37334 = state_37313;
(statearr_37334[(7)] = inst_37278);

(statearr_37334[(8)] = inst_37277__$1);

return statearr_37334;
})();
var statearr_37335_37355 = state_37313__$1;
(statearr_37335_37355[(2)] = null);

(statearr_37335_37355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___37341,out))
;
return ((function (switch__28518__auto__,c__28677__auto___37341,out){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_37336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37336[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_37336[(1)] = (1));

return statearr_37336;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_37313){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_37313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e37337){if((e37337 instanceof Object)){
var ex__28522__auto__ = e37337;
var statearr_37338_37356 = state_37313;
(statearr_37338_37356[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37357 = state_37313;
state_37313 = G__37357;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_37313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_37313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___37341,out))
})();
var state__28679__auto__ = (function (){var statearr_37339 = f__28678__auto__.call(null);
(statearr_37339[(6)] = c__28677__auto___37341);

return statearr_37339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___37341,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37359 = arguments.length;
switch (G__37359) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28677__auto___37429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___37429,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___37429,out){
return (function (state_37401){
var state_val_37402 = (state_37401[(1)]);
if((state_val_37402 === (7))){
var inst_37397 = (state_37401[(2)]);
var state_37401__$1 = state_37401;
var statearr_37403_37430 = state_37401__$1;
(statearr_37403_37430[(2)] = inst_37397);

(statearr_37403_37430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (1))){
var inst_37360 = [];
var inst_37361 = inst_37360;
var inst_37362 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37401__$1 = (function (){var statearr_37404 = state_37401;
(statearr_37404[(7)] = inst_37362);

(statearr_37404[(8)] = inst_37361);

return statearr_37404;
})();
var statearr_37405_37431 = state_37401__$1;
(statearr_37405_37431[(2)] = null);

(statearr_37405_37431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (4))){
var inst_37365 = (state_37401[(9)]);
var inst_37365__$1 = (state_37401[(2)]);
var inst_37366 = (inst_37365__$1 == null);
var inst_37367 = cljs.core.not.call(null,inst_37366);
var state_37401__$1 = (function (){var statearr_37406 = state_37401;
(statearr_37406[(9)] = inst_37365__$1);

return statearr_37406;
})();
if(inst_37367){
var statearr_37407_37432 = state_37401__$1;
(statearr_37407_37432[(1)] = (5));

} else {
var statearr_37408_37433 = state_37401__$1;
(statearr_37408_37433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (15))){
var inst_37391 = (state_37401[(2)]);
var state_37401__$1 = state_37401;
var statearr_37409_37434 = state_37401__$1;
(statearr_37409_37434[(2)] = inst_37391);

(statearr_37409_37434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (13))){
var state_37401__$1 = state_37401;
var statearr_37410_37435 = state_37401__$1;
(statearr_37410_37435[(2)] = null);

(statearr_37410_37435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (6))){
var inst_37361 = (state_37401[(8)]);
var inst_37386 = inst_37361.length;
var inst_37387 = (inst_37386 > (0));
var state_37401__$1 = state_37401;
if(cljs.core.truth_(inst_37387)){
var statearr_37411_37436 = state_37401__$1;
(statearr_37411_37436[(1)] = (12));

} else {
var statearr_37412_37437 = state_37401__$1;
(statearr_37412_37437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (3))){
var inst_37399 = (state_37401[(2)]);
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37401__$1,inst_37399);
} else {
if((state_val_37402 === (12))){
var inst_37361 = (state_37401[(8)]);
var inst_37389 = cljs.core.vec.call(null,inst_37361);
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37401__$1,(15),out,inst_37389);
} else {
if((state_val_37402 === (2))){
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37401__$1,(4),ch);
} else {
if((state_val_37402 === (11))){
var inst_37365 = (state_37401[(9)]);
var inst_37369 = (state_37401[(10)]);
var inst_37379 = (state_37401[(2)]);
var inst_37380 = [];
var inst_37381 = inst_37380.push(inst_37365);
var inst_37361 = inst_37380;
var inst_37362 = inst_37369;
var state_37401__$1 = (function (){var statearr_37413 = state_37401;
(statearr_37413[(7)] = inst_37362);

(statearr_37413[(11)] = inst_37381);

(statearr_37413[(12)] = inst_37379);

(statearr_37413[(8)] = inst_37361);

return statearr_37413;
})();
var statearr_37414_37438 = state_37401__$1;
(statearr_37414_37438[(2)] = null);

(statearr_37414_37438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (9))){
var inst_37361 = (state_37401[(8)]);
var inst_37377 = cljs.core.vec.call(null,inst_37361);
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37401__$1,(11),out,inst_37377);
} else {
if((state_val_37402 === (5))){
var inst_37362 = (state_37401[(7)]);
var inst_37365 = (state_37401[(9)]);
var inst_37369 = (state_37401[(10)]);
var inst_37369__$1 = f.call(null,inst_37365);
var inst_37370 = cljs.core._EQ_.call(null,inst_37369__$1,inst_37362);
var inst_37371 = cljs.core.keyword_identical_QMARK_.call(null,inst_37362,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37372 = ((inst_37370) || (inst_37371));
var state_37401__$1 = (function (){var statearr_37415 = state_37401;
(statearr_37415[(10)] = inst_37369__$1);

return statearr_37415;
})();
if(cljs.core.truth_(inst_37372)){
var statearr_37416_37439 = state_37401__$1;
(statearr_37416_37439[(1)] = (8));

} else {
var statearr_37417_37440 = state_37401__$1;
(statearr_37417_37440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (14))){
var inst_37394 = (state_37401[(2)]);
var inst_37395 = cljs.core.async.close_BANG_.call(null,out);
var state_37401__$1 = (function (){var statearr_37419 = state_37401;
(statearr_37419[(13)] = inst_37394);

return statearr_37419;
})();
var statearr_37420_37441 = state_37401__$1;
(statearr_37420_37441[(2)] = inst_37395);

(statearr_37420_37441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (10))){
var inst_37384 = (state_37401[(2)]);
var state_37401__$1 = state_37401;
var statearr_37421_37442 = state_37401__$1;
(statearr_37421_37442[(2)] = inst_37384);

(statearr_37421_37442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37402 === (8))){
var inst_37365 = (state_37401[(9)]);
var inst_37361 = (state_37401[(8)]);
var inst_37369 = (state_37401[(10)]);
var inst_37374 = inst_37361.push(inst_37365);
var tmp37418 = inst_37361;
var inst_37361__$1 = tmp37418;
var inst_37362 = inst_37369;
var state_37401__$1 = (function (){var statearr_37422 = state_37401;
(statearr_37422[(7)] = inst_37362);

(statearr_37422[(14)] = inst_37374);

(statearr_37422[(8)] = inst_37361__$1);

return statearr_37422;
})();
var statearr_37423_37443 = state_37401__$1;
(statearr_37423_37443[(2)] = null);

(statearr_37423_37443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28677__auto___37429,out))
;
return ((function (switch__28518__auto__,c__28677__auto___37429,out){
return (function() {
var cljs$core$async$state_machine__28519__auto__ = null;
var cljs$core$async$state_machine__28519__auto____0 = (function (){
var statearr_37424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37424[(0)] = cljs$core$async$state_machine__28519__auto__);

(statearr_37424[(1)] = (1));

return statearr_37424;
});
var cljs$core$async$state_machine__28519__auto____1 = (function (state_37401){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_37401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e37425){if((e37425 instanceof Object)){
var ex__28522__auto__ = e37425;
var statearr_37426_37444 = state_37401;
(statearr_37426_37444[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37445 = state_37401;
state_37401 = G__37445;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
cljs$core$async$state_machine__28519__auto__ = function(state_37401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28519__auto____1.call(this,state_37401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28519__auto____0;
cljs$core$async$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28519__auto____1;
return cljs$core$async$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___37429,out))
})();
var state__28679__auto__ = (function (){var statearr_37427 = f__28678__auto__.call(null);
(statearr_37427[(6)] = c__28677__auto___37429);

return statearr_37427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___37429,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1540243364404
