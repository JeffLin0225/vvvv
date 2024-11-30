const p = document.querySelector('.show-midterm-answer')
console.log('show-midterm-answer', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_00':
      p.innerHTML = `<iframe src='./p1_00/p1_00.html' width="100%" height="100%" />`
      break
    case 'p2_fuck':
      p.innerHTML = `<iframe src='./p2_00/p2_00.html' width="100%" height="100%" />`
      break
    case 'p3_xx':
      p.innerHTML = `<iframe src='./p3_00/p3_00.html' width="100%" height="100%" />`
      break
    case 'p4_xx':
      p.innerHTML = `<iframe src='./p4_00/p4_xx.html' width="100%" height="100%" />`
      break
  }
}
