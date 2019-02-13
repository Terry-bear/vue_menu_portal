import { parseTime } from '../../utils/index'

const user = {
  state: {
    token: '',
    name: '',
    email: '',
    avatar: '',
    createTime: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state: any, token: any) => {
      state.token = token
    },
    SET_NAME: (state: any, name: any) => {
      state.name = name
    },
    SET_AVATAR: (state: any, avatar: any) => {
      state.avatar = avatar
    },
    SET_ROLES: (state: any, roles: any) => {
      state.roles = roles
    },
    SET_CREATE_TIME: (state: any, createTime: any) => {
      state.createTime = createTime
    },
    SET_EMAIL: (state: any, email: any) => {
      state.email = email
    }
  },

  actions: {
    // 登录
    Login({ commit }: any, userInfo: any) {
      const username = userInfo.username
      const password = userInfo.password
      const rememberMe = userInfo.rememberMe
      return new Promise((resolve, reject) => {
          commit('SET_TOKEN', '')
        })
    },

    // 获取用户信息
    GetInfo({ commit }: any) {
      return new Promise((resolve, reject) => {
          commit('SET_ROLES', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_EMAIL', '')
          commit('SET_CREATE_TIME', parseTime(''))
          resolve('')
      })
    },

    // 登出
    LogOut({ commit }: any) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        resolve()
      })
    }
  }
}

export default user
