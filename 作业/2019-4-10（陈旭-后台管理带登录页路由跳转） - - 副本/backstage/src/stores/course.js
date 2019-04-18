import axios from 'axios'
export default {
    namespaced: true,
    state: {
        data: [],
        isLoading: false
    },
    mutations: {
        setData(state, data) {
            state.data = data
        }
    },
    actions: {
        async reqCourse(context) {
            const req = await axios.get('/api/course')
            // console.log(req.data.data)
            context.commit('setData', req.data.data)
        }
    }
}