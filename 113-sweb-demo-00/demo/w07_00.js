const p = document.querySelector('.show-classdemo');
console.log('show-classdemo:', p);

function showDemo(item) {
  switch (item) {
    case 'w02-intro-00':
      p.innerHTML = `<iframe src=
      './w02-intro-00/index.html' width="100%" height="100%" />`;
      break;
    case 'w03_card_00':
      p.innerHTML = `<iframe src=
      './w03_card_00/index.html' width="100%" height="100%" />`;
      break;
    case 'w06_blog_00':
      p.innerHTML = `<iframe src=
      './w06_blog_00/index.html' width="100%" height="100%" />`;
      break;
  }
}
