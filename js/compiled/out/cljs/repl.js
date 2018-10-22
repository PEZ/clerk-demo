// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43286){
var map__43287 = p__43286;
var map__43287__$1 = ((((!((map__43287 == null)))?(((((map__43287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43287):map__43287);
var m = map__43287__$1;
var n = cljs.core.get.call(null,map__43287__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43287__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43289_43311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43290_43312 = null;
var count__43291_43313 = (0);
var i__43292_43314 = (0);
while(true){
if((i__43292_43314 < count__43291_43313)){
var f_43315 = cljs.core._nth.call(null,chunk__43290_43312,i__43292_43314);
cljs.core.println.call(null,"  ",f_43315);


var G__43316 = seq__43289_43311;
var G__43317 = chunk__43290_43312;
var G__43318 = count__43291_43313;
var G__43319 = (i__43292_43314 + (1));
seq__43289_43311 = G__43316;
chunk__43290_43312 = G__43317;
count__43291_43313 = G__43318;
i__43292_43314 = G__43319;
continue;
} else {
var temp__5457__auto___43320 = cljs.core.seq.call(null,seq__43289_43311);
if(temp__5457__auto___43320){
var seq__43289_43321__$1 = temp__5457__auto___43320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43289_43321__$1)){
var c__4351__auto___43322 = cljs.core.chunk_first.call(null,seq__43289_43321__$1);
var G__43323 = cljs.core.chunk_rest.call(null,seq__43289_43321__$1);
var G__43324 = c__4351__auto___43322;
var G__43325 = cljs.core.count.call(null,c__4351__auto___43322);
var G__43326 = (0);
seq__43289_43311 = G__43323;
chunk__43290_43312 = G__43324;
count__43291_43313 = G__43325;
i__43292_43314 = G__43326;
continue;
} else {
var f_43327 = cljs.core.first.call(null,seq__43289_43321__$1);
cljs.core.println.call(null,"  ",f_43327);


var G__43328 = cljs.core.next.call(null,seq__43289_43321__$1);
var G__43329 = null;
var G__43330 = (0);
var G__43331 = (0);
seq__43289_43311 = G__43328;
chunk__43290_43312 = G__43329;
count__43291_43313 = G__43330;
i__43292_43314 = G__43331;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43332 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43332);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43332)))?cljs.core.second.call(null,arglists_43332):arglists_43332));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43293_43333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43294_43334 = null;
var count__43295_43335 = (0);
var i__43296_43336 = (0);
while(true){
if((i__43296_43336 < count__43295_43335)){
var vec__43297_43337 = cljs.core._nth.call(null,chunk__43294_43334,i__43296_43336);
var name_43338 = cljs.core.nth.call(null,vec__43297_43337,(0),null);
var map__43300_43339 = cljs.core.nth.call(null,vec__43297_43337,(1),null);
var map__43300_43340__$1 = ((((!((map__43300_43339 == null)))?(((((map__43300_43339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43300_43339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43300_43339):map__43300_43339);
var doc_43341 = cljs.core.get.call(null,map__43300_43340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43342 = cljs.core.get.call(null,map__43300_43340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43338);

cljs.core.println.call(null," ",arglists_43342);

if(cljs.core.truth_(doc_43341)){
cljs.core.println.call(null," ",doc_43341);
} else {
}


var G__43343 = seq__43293_43333;
var G__43344 = chunk__43294_43334;
var G__43345 = count__43295_43335;
var G__43346 = (i__43296_43336 + (1));
seq__43293_43333 = G__43343;
chunk__43294_43334 = G__43344;
count__43295_43335 = G__43345;
i__43296_43336 = G__43346;
continue;
} else {
var temp__5457__auto___43347 = cljs.core.seq.call(null,seq__43293_43333);
if(temp__5457__auto___43347){
var seq__43293_43348__$1 = temp__5457__auto___43347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43293_43348__$1)){
var c__4351__auto___43349 = cljs.core.chunk_first.call(null,seq__43293_43348__$1);
var G__43350 = cljs.core.chunk_rest.call(null,seq__43293_43348__$1);
var G__43351 = c__4351__auto___43349;
var G__43352 = cljs.core.count.call(null,c__4351__auto___43349);
var G__43353 = (0);
seq__43293_43333 = G__43350;
chunk__43294_43334 = G__43351;
count__43295_43335 = G__43352;
i__43296_43336 = G__43353;
continue;
} else {
var vec__43302_43354 = cljs.core.first.call(null,seq__43293_43348__$1);
var name_43355 = cljs.core.nth.call(null,vec__43302_43354,(0),null);
var map__43305_43356 = cljs.core.nth.call(null,vec__43302_43354,(1),null);
var map__43305_43357__$1 = ((((!((map__43305_43356 == null)))?(((((map__43305_43356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43305_43356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43305_43356):map__43305_43356);
var doc_43358 = cljs.core.get.call(null,map__43305_43357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43359 = cljs.core.get.call(null,map__43305_43357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43355);

cljs.core.println.call(null," ",arglists_43359);

if(cljs.core.truth_(doc_43358)){
cljs.core.println.call(null," ",doc_43358);
} else {
}


var G__43360 = cljs.core.next.call(null,seq__43293_43348__$1);
var G__43361 = null;
var G__43362 = (0);
var G__43363 = (0);
seq__43293_43333 = G__43360;
chunk__43294_43334 = G__43361;
count__43295_43335 = G__43362;
i__43296_43336 = G__43363;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__43307 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43308 = null;
var count__43309 = (0);
var i__43310 = (0);
while(true){
if((i__43310 < count__43309)){
var role = cljs.core._nth.call(null,chunk__43308,i__43310);
var temp__5457__auto___43364__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43364__$1)){
var spec_43365 = temp__5457__auto___43364__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43365));
} else {
}


var G__43366 = seq__43307;
var G__43367 = chunk__43308;
var G__43368 = count__43309;
var G__43369 = (i__43310 + (1));
seq__43307 = G__43366;
chunk__43308 = G__43367;
count__43309 = G__43368;
i__43310 = G__43369;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43307);
if(temp__5457__auto____$1){
var seq__43307__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43307__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__43307__$1);
var G__43370 = cljs.core.chunk_rest.call(null,seq__43307__$1);
var G__43371 = c__4351__auto__;
var G__43372 = cljs.core.count.call(null,c__4351__auto__);
var G__43373 = (0);
seq__43307 = G__43370;
chunk__43308 = G__43371;
count__43309 = G__43372;
i__43310 = G__43373;
continue;
} else {
var role = cljs.core.first.call(null,seq__43307__$1);
var temp__5457__auto___43374__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43374__$2)){
var spec_43375 = temp__5457__auto___43374__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43375));
} else {
}


var G__43376 = cljs.core.next.call(null,seq__43307__$1);
var G__43377 = null;
var G__43378 = (0);
var G__43379 = (0);
seq__43307 = G__43376;
chunk__43308 = G__43377;
count__43309 = G__43378;
i__43310 = G__43379;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1540243379110
