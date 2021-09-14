function namify(users) {
  return users.reduce((res, item) => {
    res.push(item.name)
    return res
  }, [])
}
