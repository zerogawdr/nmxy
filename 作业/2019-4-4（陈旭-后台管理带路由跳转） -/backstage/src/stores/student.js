import axios from 'axios'
export default {
    namespaced: true,
    state: {
        data: {
            students: [],
            count: 0,
            isLoading: false,
            countpage: 1
        }
    },
    mutations: {
        // setStudents(state,stuArray){
        //     state.students=stuArray
        // },
        // setPage(state,countpage){
        //     state.countpage=countpage
        // },
        // setCount(state,count){
        //     state.count=count
        // }
        setData(state, obj) {
            state.data = {
                ...state.data,
                ...obj
            }
        },
        deletData(state, id) {
            state.data.students = state.data.students.filter(it => it._id !== id)
            state.data.count--
        }
    },
    actions: {
        async reqStudents(context, newPage = 1) {
            context.commit('setData', {
                countpage: newPage,
                isLoading: true
            })
            let req = await axios.get('/api/student', {
                params: {
                    page: newPage
                }
            })
            req = req.data
            context.commit('setData', {
                count: req.count,
                students: req.data,
                isLoading: false
            })
        },
        async removeStudent(context, id) {
            await axios.delete('/api/student/' + id)
            context.commit('deletData', id)
        }
    }
}