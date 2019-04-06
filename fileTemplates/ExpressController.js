"use strict";
/**
 * Created by ${USER} on ${DATE}${TIME}.
 */
var ctl = module.exports = new ExpressController('A');

ctl.needUser().withPermission('B', 'C');
ctl.main = function (rt){
	rt.display('D');
};
