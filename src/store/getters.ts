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
  permission_routers: (state: any) => state.permission.routers,
  addRouters: (state: any) => state.permission.addRouters,
  socketApi: (state: any) => state.api.socketApi,
  imagesUploadApi: (state: any) => state.api.imagesUploadApi,
  updateAvatarApi: (state: any) => state.api.updateAvatarApi,
  qiNiuUploadApi: (state: any) => state.api.qiNiuUploadApi
}
export default getters
