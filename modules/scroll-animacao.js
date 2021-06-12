export default function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')

    sections[0].classList.add('ativo')

    if(sections.length){
        const windowmetade = window.innerHeight * 0.6

        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top - windowmetade

                if(sectionTop < 0){
                    section.classList.add('ativo')
                }else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo')
                }
            })
        }

        window.addEventListener('scroll', animaScroll)
    }
}
initAnimacaoScroll()