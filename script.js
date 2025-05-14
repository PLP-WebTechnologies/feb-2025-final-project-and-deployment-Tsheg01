// Toggle light/dark theme
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
});

// Add comments using localStorage
function addComment() {
  const input = document.getElementById('commentInput');
  const commentList = document.getElementById('commentList');
  const comment = input.value.trim();
  if (!comment) return;

  const li = document.createElement('li');
  li.textContent = comment;
  commentList.appendChild(li);

  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));
  input.value = '';
}

// Load saved comments
window.addEventListener('DOMContentLoaded', () => {
  const commentList = document.getElementById('commentList');
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c;
    commentList?.appendChild(li);
  });
});
