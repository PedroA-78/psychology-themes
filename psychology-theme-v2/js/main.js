window.addEventListener('DOMContentLoaded', () => {
    const questions_buttons = document.querySelectorAll('.question_card_button')

    questions_buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement
            const arrow = btn.querySelector('.question_card_button_arrow svg')
            const question = parent.querySelector('.question')

            parent.classList.toggle('opened')
            question.classList.toggle('opened')
        })
    })
})