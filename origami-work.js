const workModal = document.getElementById('workModal');
workModal.addEventListener(
  'show.bs.modal',
  (event) => {
    const btn = event.relatedTarget; // 押されたボタン
    document.getElementById('modalTitle').textContent = btn.getAttribute('data-title');
    document.getElementById('modalImg').src = btn.getAttribute('data-img');
    document.getElementById('modalInfo').textContent = btn.getAttribute('data-info');
    document.getElementById('modalNote').textContent = btn.getAttribute('data-note');
  }
);