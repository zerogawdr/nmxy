export default [{
        path: '/',
        component: () => import('../src/components/Layout'),
        // name: "index",
        children: [{
                path: '/',
                name: 'home',
                component: () => import('../src/components/pages/students/contentList')
            },
            {
                path: '/stu',
                name: 'studentsList',
                component: () => import('../src/components/pages/students/index')
            },
            {
                path: '/stu/add',
                name: 'addstudent',
                component: () => import('../src/components/pages/students/addStudent')
            },
            {
                path: '/stu/edit/:id',
                name: 'editstudent',
                component: () => import('../src/components/pages/students/edit')
            },

        ]
    },
    {
        path: '/Login',
        name: 'login',
        component: () => import('../src/components/Login.vue')
    },
    {
        path: '/*',
        component: () => import('../src/components/pages/students/404')
    }

]