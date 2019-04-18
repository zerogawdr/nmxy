# Git常用命令

- git config --global user.name 姓名
- git config --global user.email 邮箱

配置姓名和邮箱，姓名和邮箱会被记录到每一次版本提交中

- git init

初始化一个工程，该工程使用git控制版本

- git status

查看当前版本控制的状态

- git commit

提交暂存区的内容，形成一个版本

- git commit -m "版本描述"

提交暂存区的内容，并指定描述，形成一个版本

- git diff

查看还未暂存的内容差异

- git diff --staged

查看暂存区域未提交的内容变化

- git add 文件名

通常用于将一个新建的文件，添加到git的版本控制中

- git rm --cached 文件名

将一个文件从版本控制中移除

- git log

查看历史提交记录

- git branch

查看分支

- git branch 分支名

新建分支

- git branch -d 分支名

删除分支

- git checkout 分支名

切换分支

- git checkout -b 分支名

新建并切换分支

- git merge 分支名

将当前分支和指定分支进行合并

- git branch -f 分支名 HEAD

让某个分支相对于HEAD进行移动

- git checkout -b 分支名 版本号

新建并切换分支，同时让分支指向某个版本

- git rebase 分支名

将当前分支使用变基的方式合并到另一个分支

- git clone 远程仓库地址

将远程仓库的工程目录克隆到本地

- git remote

查看当前本地有哪些远程仓库

- git remote add 仓库名称 仓库地址

添加一个远程仓库

- git remote rm 仓库名称

删除一个远程仓库

- git remote rename 旧仓库名 新仓库名

修改一个远程仓库名称

- git pull 仓库名

从远程仓库拉取版本，同步到当前分支