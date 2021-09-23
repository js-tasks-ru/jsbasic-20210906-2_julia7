function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  let li = ''
  friends.forEach(friend => {
    li += `<li>${friend.firstName} ${friend.lastName}</li>`
  });
  ul.innerHTML = li
  return ul
}
