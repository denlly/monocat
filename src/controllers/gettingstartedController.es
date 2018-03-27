'use strict';

import config from '../config/config';
const gettingstartedController = {
    index() {
        return async(ctx, next) => {
            // const indexModelApp = new indexModel(ctx);
            // const _tips = await indexModelApp.getNotice();
            ctx.body = await ctx.render('gettingstarted/pages/index.html', {
                title: "GettingStarted",
                //userinfo: ctx.session.userInfo.user_info,
                userinfo: 'fanxd',
                notice: "欢迎同学进入Nightwatch中文网。"
                //notice: _tips.result.notice || "欢迎同学进入一灯学习系统。"
            });
        }
    }
};
export default gettingstartedController;