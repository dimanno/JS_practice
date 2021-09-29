// приватна функція, яка має розміститись у $.modal (для оптимізації передивитись відео про підключення вебпарк
function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('dmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal Title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const animation_speed = 200
    const dom_modal = _createModal(options)
    let closing = false
    return {
        open() {
            !closing && dom_modal.classList.add('open')
        },
        close() {
            closing = true
            dom_modal.classList.remove('open')
            dom_modal.classList.add('hide')
            setTimeout(() => {
                dom_modal.classList.remove('hide')
                closing = false
            }, animation_speed)
        },
        destroy() {}
    }
}