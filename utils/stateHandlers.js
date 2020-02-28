const state = { error: null, loading: null, data: null }
const setError = err => (state.error = err)
const setLoading = val => (state.loading = val)
const setData = data => (state.data = data)

module.exports = {
  setError,
  setLoading,
  setData,
}
