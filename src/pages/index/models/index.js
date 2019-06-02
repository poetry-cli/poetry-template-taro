
export default {
  namespace: 'index',
  state: {
    data: [],
  },

  effects: {
    * getLists({ payload }, { select, call, put }) {

    }
  },

  reducers: {
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  }
}
