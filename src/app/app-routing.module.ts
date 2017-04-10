/**
 * Created by 31618 on 2017/4/4.
 * 定义路由模块，所有的路由都在此配置
 *
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./componments/index/index.component";
import { FoundComponent } from "./componments/found/found.component";
import { MyComponent } from "./componments/my/my.component";
import { OrderComponent } from "./componments/order/order.component";
export const routes: Routes = [

  { path: 'index', component: IndexComponent },
  { path: 'found', component: FoundComponent },
  { path: 'my', component: MyComponent },
  { path: 'order', component: OrderComponent },
  /**解决默认加载路由的问题 此处用重定向的方式解决初始化加载路由模板的问题 */
  { path: '', redirectTo: 'index', pathMatch: 'full' },


];
/**
 * 不要在路由特性模块中使用RouterModule.forRoot(routes)
 * 此路由模块仅仅应用于根模块
 * RouterModule.forRoot(routes)作用：
 *      该方法返回的AppRoutingModule类是一个路由模块，
 *      它同时包含了RouterModule指令和用来生成配置好的Router的依赖注入提供商
 * 用法;只要在根模块中导入此模块就能正常导航
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/**
 * 特性模块从设计意图来区分
 * 特性模块用来提供了内聚的功能集合。 聚焦于应用的某个业务领域、用户工作流、某个基础设施（表单、HTTP、路由），或一组相关的工具集合。
 *
 * 虽然这些都能在根模块中做，但特性模块可以帮助我们把应用切分成具有特定关注点和目标的不同区域。
 * 特性模块通过自己提供的服务和它决定对外共享的那些组件、指令、管道来与根模块等其它模块协同工作。
 *  同时可以定义特性模块路由，
 *
 *  例如：
 *  @NgModule({
 *      imports: [RouterModule.forChild([
 *             { path: 'contact', component: ContactComponent }
 *            ])],
 *            exports: [RouterModule]
 *          })
 * export class ContactRoutingModule {}
 * 在特性模块中
 * 我们要把路由列表传给RouterModule的forChild方法。 该方法会为特性模块生成另一种对象
 */
