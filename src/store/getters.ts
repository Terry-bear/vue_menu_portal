const getters = {
  sidebar: (state: any) => state.app.sidebar,
  device: (state: any) => state.app.device,
  token: (state: any) => state.user.token,
  avatar: (state: any) => state.user.avatar,
  visitedViews: (state: any) => state.tagsView.visitedViews,
  cachedViews: (state: any) => state.tagsView.cachedViews,
  name: (state: any) => state.user.name,
  createTime: (state: any) => state.user.createTime,
  email: (state: any) => state.user.email,
  roles: (state: any) => state.user.roles,
  routers: (state: any) => state.ruters.projectRouters
}
export default getters
