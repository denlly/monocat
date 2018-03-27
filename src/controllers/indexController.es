"use strict"
import config from "../config/config.base"

const indexController = {
    index(){
        return async (ctx, next) => {
            // const indexModelApp = new indexModel(ctx);
            // const _tips = await indexModelApp.getNotice();
            ctx.body = await ctx.render('index/pages/index.html', {
                title: "Nightwatch.js中文网",
                //userinfo: ctx.session.userInfo.user_info,
                userinfo: 'fanxd',
                notice: "欢迎同学进入Nightwatch中文网。"
                //notice: _tips.result.notice || "欢迎同学进入一灯学习系统。"
            });
        }
    }
}

export
default indexController;