// Contenido embebido de Roles.txt
const rolesText = `
👑 Admin

Fundador y máxima autoridad del clan.
Vigila el cumplimiento de las normas, la unidad del grupo y la visión de Avellanark.
Sus decisiones son definitivas y buscan siempre el bien común del clan.

🕯️ Consejeros Mayores

Sabios de la orden.
Asisten al Admin en la toma de decisiones importantes y velan por la armonía entre los miembros.
Su palabra guía el rumbo del clan en momentos de duda o conflicto.

🛡️ Ayudante

Mano derecha de los Guardianes y Vanguardia.
Apoya en la organización interna, registro de miembros, resolución de dudas y coordinación de eventos.
Representan la voz del pueblo ante los altos rangos.

⚔️ Capitanes de la Guardia Real

Líderes en el campo de batalla.
Supervisan a los Guardias Reales, planifican estrategias y defienden el honor de Avellanark.
Su deber es proteger al clan de amenazas externas y mantener el orden interno.

🛡️ Guardias Reales

Defensores élite del clan.
Custodian a los miembros de rango inferior y aseguran la paz en los canales.
Son símbolo de disciplina, lealtad y fuerza.

⚒️ Soldados

El corazón del clan.
Participan activamente en misiones, guerras, eventos y actividades conjuntas.
Su compromiso en batalla demuestra el valor del espíritu Avellanark.

🏗️ Capitanes Constructores

Maestros del diseño y la creación.
Dirigen proyectos arquitectónicos, supervisan construcciones y entrenan a los nuevos constructores.
Sus obras levantan los cimientos del legado Avellanark.

🪓 Constructores

Manos que dan forma al reino.
Se encargan de edificar, decorar y mantener las estructuras del clan.
Su trabajo refleja el ingenio y la unión de la hermandad.

🌾 Farmer

Proveedores y guardianes de los recursos.
Cultivan, recolectan y administran los materiales esenciales para la supervivencia y prosperidad del clan.
Sin ellos, el reino no florece.

🤝 Hermano

Miembro pleno de la comunidad.
Ha demostrado compromiso, respeto y fidelidad al clan.
Participa activamente en eventos y decisiones colectivas.
Ser Hermano es un honor ganado, no otorgado.

🔰 Aspirante

Nuevo miembro en camino a la hermandad.
Aprende las costumbres, valores y reglas del clan.
Su conducta y participación determinarán su ascenso.

🌑 Desaparecido

Miembro inactivo o ausente por tiempo prolongado.
Mantiene su rango simbólicamente, pero no participa de las decisiones ni actividades del clan.
Puede ser reintegrado al volver con compromiso renovado.
`;

// Contenido embebido de Reglas.txt
const reglasText = `
🛡️ 1. Respeto sobre todo

El respeto es el pilar fundamental de nuestra comunidad.
En Avellanark somos hermanos, no súbditos.
Queda terminantemente prohibido el uso de insultos, expresiones discriminatorias, acoso o cualquier forma de ataque personal, directo o indirecto.
Toda diferencia debe resolverse mediante el diálogo y con la intervención de un Guardián o miembro de la Vanguardia si es necesario.

🚫 2. Comunicación responsable

Para mantener la armonía y fluidez en los canales:
Prohibido el spam o flood, incluyendo mensajes repetidos, emojis excesivos o envíos masivos de texto.
No se permite el uso del chat con fines ajenos al clan o fuera del contexto del canal.

📢 3. Publicidad y enlaces

Está prohibido promocionar otros servidores, clanes, redes sociales o proyectos externos sin autorización expresa de un Guardián.
Se prohíbe compartir enlaces maliciosos, sospechosos o de contenido no verificado.
Todo enlace compartido debe tener un propósito claro y relacionado con el clan.

🗂️ 4. Uso de canales

Cada canal tiene su función:
💬 Chat general — conversación cotidiana y anuncios.
🎙️ Voz y Estrategia — coordinación y comunicación en partidas.
Usar cada canal de acuerdo con su finalidad es obligatorio.
El mal uso reiterado podrá derivar en advertencias o sanciones.

🚷 5. Contenido permitido

En el Clan Avellanark no se permite ningún tipo de contenido:
❌ NSFW (sexual o sugerente)
❌ Gore o violencia explícita
❌ Ilegal o inapropiado
❌ Político o religioso que genere conflicto
Mantén siempre un entorno seguro, apto para todos los miembros.

🎧 6. Convivencia en voz

Para una comunicación fluida y respetuosa:
Respeta los turnos de palabra y evita interrumpir.
No generes ruidos molestos ni pongas música sin consentimiento del grupo.
El uso de distorsionadores de voz, sonidos molestos o abuso del micrófono será sancionado.

🏰 7. Jerarquía del clan

El Clan se estructura en los siguientes rangos:
Aspirante → Hermano → Vanguardia → Guardián
Los Guardianes y la Vanguardia son responsables de mantener el orden y hacer cumplir estas normas.
Sus decisiones deben ser respetadas.
Los ascensos se basan en mérito, compromiso y conducta, no en favoritismos o vínculos personales.

🔐 8. Seguridad y cuentas

Se prohíbe el uso de múltiples cuentas o suplantación de identidad.
Cada miembro debe proteger su cuenta con medidas de seguridad (como 2FA).
El incumplimiento podrá conllevar expulsión inmediata del clan.

🔥 9. Espíritu Avellanark

Participar, aportar ideas y apoyar a los compañeros es parte del camino de un verdadero hermano.
La fuerza del clan reside en su unión, su lealtad y su honor.
⚔️ Juntos forjamos el futuro del Clan Avellanark. ⚔️
`;

// ===================== //
// Código original adaptado
// ===================== //

function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = 2 + Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function handleScroll() {
    const logoBackground = document.getElementById('logoBackground');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fadeStart = windowHeight * 0.2;
    const fadeEnd = windowHeight * 0.8;
    
    if (scrollY <= fadeStart) logoBackground.style.opacity = 1;
    else if (scrollY >= fadeEnd) logoBackground.style.opacity = 0;
    else logoBackground.style.opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
}

function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-card');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offset = targetSection.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });
}

function toggleSection(header) {
    const content = header.parentElement.querySelector('.section-content');
    const isExpanded = content.classList.contains('expanded');
    content.classList.toggle('expanded', !isExpanded);
    content.classList.toggle('collapsed', isExpanded);
    header.classList.toggle('open', !isExpanded);
}

// ===================== //
// Nuevo: cargar roles y reglas desde variables
// ===================== //

function loadRoles() {
    const rolesContainer = document.getElementById('roles-content');
    const lines = rolesText.split('\n');
    let html = '';
    let inRole = false;

    for (let line of lines) {
        line = line.trim();
        if (line.match(/^[👑🕯️🛡️⚔️⚒️🏗️🪓🌾🤝🔰🌑]/)) {
            if (inRole) html += '</div>';
            inRole = true;
            html += `<div class="role-item"><div class="role-title">${line}</div>`;
        } else if (inRole && line !== '') {
            html += `<div class="role-description">${line}</div>`;
        }
    }

    if (inRole) html += '</div>';
    rolesContainer.innerHTML = html;
}

function loadReglas() {
    const reglasContainer = document.getElementById('reglas-content');
    const lines = reglasText.split('\n');
    let html = '';
    let inRegla = false;
    let headerAdded = false;

    for (let line of lines) {
        line = line.trim();
        if (line === '') continue;

        // Detectar encabezado principal
        if (!headerAdded && line.startsWith('📜')) {
            html += `<div class="regla-header">${line}</div>`;
            headerAdded = true;
            continue;
        }

        // Detectar títulos de reglas (emoji seguido de número o texto)
        if (line.match(/^[🛡️🚫📢🗂️🚷🎧🏰🔐🔥🎙️💬].*/)) {
            if (inRegla) html += '</div>';
            inRegla = true;
            html += `<div class="regla-item"><div class="regla-title">${line}</div>`;
            continue;
        }

        // Descripciones normales
        if (inRegla) {
            html += `<div class="regla-description">${line}</div>`;
        }
    }

    if (inRegla) html += '</div>';
    reglasContainer.innerHTML = html || '<p>No se encontraron reglas.</p>';
}

// ===================== //
// Inicialización
// ===================== //

// Theme toggle functionality
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const darkThemeStyle = document.getElementById('dark-theme-style');
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    const logo = document.querySelector('.logo-image');
    
    if (darkThemeStyle.disabled) {
        // Switch to dark theme
        darkThemeStyle.disabled = false;
        themeStyle.disabled = true;
        themeToggleIcon.textContent = '🌛';
        if (logo) {
            logo.src = 'ModoOscuro/LogoClan_ModoOscuro.png';
        }
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light theme
        darkThemeStyle.disabled = true;
        themeStyle.disabled = false;
        themeToggleIcon.textContent = '🌞';
        if (logo) {
            logo.src = 'LogoClan.png';
        }
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setupSmoothScroll();
    loadRoles();
    loadReglas();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add theme toggle listener
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
    
    // Initial opacity check
    handleScroll();
});
