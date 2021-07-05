const notific = ({ dispatch, message, error }) => {
  dispatch('app/setAlert', message || error, { root: true })
  dispatch('app/closeAlert', null, { root: true })
}

export default notific
