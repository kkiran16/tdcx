export type LinkStateToProps = {
  loading: boolean
  loginSuccess: boolean
}

export type LinkDispatchToProps = {
  login: (id, name) => void
}
