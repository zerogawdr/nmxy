# Git课堂笔记 {ignore=true}

文档：  https://git-scm.com/book/zh/v2/

分支学习游戏：https://learngitbranching.js.org/

[toc]

# 为什么需要版本控制

如果没有版本控制：

1. 如果突然想将当前的工程回退到之前的状态，怎么办？

2. 如果回退之后，又想前进到回退之前的状态，怎么办？

3. 你现在正在开发一个新功能，但是已经开发的旧功能出了问题，如何修改旧功能？

4. 你现在正在开发一个实验性的功能，随时可取并随时可以回退，怎么办？

5. 团队协作，如何共同开发一个工程，如何共同开发一个文件？

# 常见的版本控制系统

git是目前最流行的版本控制系统

Linux 之父 Linus，完成Linux之后，开源。其他开发者，会提交代码。当时由一个超级大脑完成版本控制 —— Linus。

BitKeeper：版本控制系统，商业授权，收费。

BitKeeper 和  Linux  展开合作。

Linus决定自己开发一套版本控制系统 —— git，为其专门开发了一个网站 —— github, 第一个开源系统Linux

git基于命令行。

版本控制系统的分类：

1. 集中化的版本控制系统(Centralized Version Control Systems，简称 CVCS): CVS、SVN

特点：强烈服务器、权限控制

2. 分布式的版本控制系统（Distributed Version Control System，简称 DVCS）：Git、Mercurial

特点：分布式、权限控制松散

# git版本控制基础

1. 全局配置个人信息

2. 初始化工程

git的控制，是基于版本，版本的产生，需要手动提交（commit）

在提交之前，必须要把你当前的改动，添加到暂存区域，在之后的合适的时候，将暂存区的所有内容，提交为一个版本

git不跟踪文件夹，仅跟踪文件

改动的文件  -->  暂存区  -->  新版本

关于换行：

windows：\r\n

Linux: \n

3. git add 文件名

添加一个文件到暂存区

4. 查看当前的版本控制状态：git status

5. git commit

git要求，每一个版本，必须使用一个字符串来标识

6. 查看目前的所有版本：git log

7. 分支

分支的本质，是一个指针（C语言的概念，内存地址），指向某个版本。

当新建一个git工程时，会默认创建一个分支master，它表示主分支。

通常不会在主分支上直接开发，而是新建一个分支dev(develop)，在该分支上进行开发，当某个完整的版本（指可以部署到服务器的版本），将主分支合并到开发分支。

master：记录可以部署的版本
dev：记录开发的过程

创建分支： git branch 分支名

查看分支： git branch

切换分支： git checkout 分支名

删除分支： git branch -d 分支名

创建并切换分支： git checkout -b 分支名

混合分支：git merge 分支名

# 远程仓库

主要为了团队协作

公共仓库：免费，所有的其他人都能看见

私有仓库：收费（自己搭建），其他人不可见

github:  github.com
码云： gitee.com
