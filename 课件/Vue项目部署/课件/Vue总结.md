
- 响应式：数据变化，界面重新渲染，让开发者更加专注于业务数据，而不是界面
- 渐近式：对已有的工程，可以进行部分改造；Vue和其他前端技术不冲突
- 组件化：开发单元变小，易于分解复杂度，同时易于测试

- 架构和模式

三层架构：

1. 数据访问层（DAO， Data Access Object）：负责数据的持久化
2. 业务逻辑层（BLL/Service， Business Logic Layer）：处理业务逻辑




3. 界面展示层（UI层， User Interface）：负责界面和交互逻辑   ->   前端工程师


大前端：用户和设备之间的桥梁

MVC模式：

M： 模型Model，用户交互数据模型
V： 视图View，用于展示数据（css、html元素）
C： 控制器Controller，处理请求


请求  ->   Constroller (根据请求，组装数据Model)  ->  指定的View  -> 客户端

客户端操作  ->  Constroller (根据请求，组装数据Model) ->  指定的View  -> 客户端


MVVM模式：

最早是由微软提出，WPF中使用（数据双向绑定）

Vue是典型的MVVM模式

MVVM：  Model-View-ViewModel

Model: 数据模型
View：界面（模板）
ViewModel

Model（变化） -> ViewModel -> View（变化）

View（事件）  -> ViewModel -> Model（变化）


后面的课程：

1. git  github
2. TypeScript


SSR: Server Side Render  服务端渲染


Vue：   Nuxt框架

React： Next框架


以前：互联网大的入口只有搜索引擎

1. 微博
2. 微信
3. B站
4. 直播
5. 抖音