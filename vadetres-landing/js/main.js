// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Menú móvil
    const menuToggle = document.getElementById("menuToggle")
    const navLinks = document.getElementById("navLinks")
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active")
        menuToggle.classList.toggle("active")
      })
  
      // Cerrar menú al hacer clic en un enlace
      const links = navLinks.querySelectorAll("a")
      links.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active")
          menuToggle.classList.remove("active")
        })
      })
    }
  
    // Navegación activa según la sección visible
    const sections = document.querySelectorAll("section[id]")
    const navItems = document.querySelectorAll(".nav-links a")
  
    function highlightNavigation() {
      const scrollPosition = window.scrollY + 100
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navItems.forEach((item) => {
            item.classList.remove("active")
            if (item.getAttribute("href") === `#${sectionId}`) {
              item.classList.add("active")
            }
          })
        }
      })
    }
  
    window.addEventListener("scroll", highlightNavigation)
  
    // El formulario de contacto ahora usa Formspree
    // No necesitamos JavaScript adicional para el envío
    // Formspree se encargará de procesar el formulario
  
    // Simulación de verificación de transmisión en vivo
    function checkLiveStatus() {
      // En un entorno real, esto sería una llamada a una API
      // Por ahora, simularemos que está en vivo en ciertos momentos
  
      const now = new Date()
      const day = now.getDay() // 0 = domingo, 1 = lunes, ...
      const hour = now.getHours()
  
      // Simulación: en vivo los martes y jueves a las 21hs
      const isStreamDay = day === 2 || day === 4 // Martes o Jueves
      const isStreamHour = hour === 21
  
      const liveBanner = document.getElementById("live-banner")
  
      if (liveBanner) {
        if (isStreamDay && isStreamHour) {
          liveBanner.style.display = "block"
        } else {
          liveBanner.style.display = "none"
        }
      }
    }
  
    // Verificar estado en vivo al cargar la página
    checkLiveStatus()
  
    // Para propósitos de demostración, también podemos mostrar el banner
    // Comenta esta línea si quieres que solo aparezca cuando realmente esté en vivo
    document.getElementById("live-banner").style.display = "block"
  })
  