const execSafely = (func) => {
  try {
    return [func()]
  } catch (error) {
    return [null, error]
  }
}

export default execSafely
