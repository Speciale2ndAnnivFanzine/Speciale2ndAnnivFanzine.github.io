if (!window.modalInitialized) {
  window.modalInitialized = true

  const imageModal = document.getElementById('imageModal')
  if (imageModal) {
    imageModal.addEventListener('show.bs.modal', e => {
      const { src, caption } = e.relatedTarget.dataset
      document.getElementById('modalImage').src = src
      document.getElementById('modalCaption').textContent = caption || ''
    })
  }
}