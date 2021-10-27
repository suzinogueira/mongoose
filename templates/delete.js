// outra forma de deletar: utilizando onclick no button: onclick="deleteLink('<%=links[i]._id%>')" em /all
function deleteLink(id) {
  fetch('/' + id + 'o', { method: 'DELETE' }).then(res => {
    if (res.status == 200) {
      res.text().then(linkId => {
        console.log(linkId)
        document.getElementById(linkId).remove()
        window.location.reload()
      })
    } else {
      res.json().then(err => {
        console.log(err.message)
        alert(err.message)
      })
    }
  })
}
