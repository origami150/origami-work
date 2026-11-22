'use strict';
const workModal   = document.getElementById('workModal');

const modalTitle  = document.getElementById('modalTitle');
const modalImg    = document.getElementById('modalImg');
const modalInfo   = document.getElementById('modalInfo');
const modalNote   = document.getElementById('modalNote');
workModal.addEventListener(
  'show.bs.modal',
  (event) => {
    const btn = event.relatedTarget; // 押されたボタン
    modalTitle.innerText  = btn.getAttribute('data-title');
    modalImg.src          = btn.getAttribute('data-img-src');
    modalImg.alt          = btn.getAttribute('data-img-alt');
    modalInfo.innerText   = btn.getAttribute('data-info');
    modalNote.innerText   = btn.getAttribute('data-note');
  }
);