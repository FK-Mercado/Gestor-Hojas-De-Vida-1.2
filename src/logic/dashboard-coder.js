// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  
  
  console.log('DOM cargado correctamente');

  // Elementos del DOM
  const fotoInput = document.getElementById("foto");
  const vistaPrevia = document.getElementById("vista-previa");
  const fullNameInput = document.getElementById("fullName");
  const ageInput = document.getElementById("age");
  const professionInput = document.getElementById("profession");
  const cityInput = document.getElementById("city");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const portfolioInput = document.getElementById("portfolio");
  const profileTextInput = document.getElementById("profileText");

  // Verificar que los elementos existan
  console.log('fullNameInput:', fullNameInput);
  console.log('ageInput:', ageInput);

  // Configurar event listeners para botones
  setupButtonListeners();

  // Configurar event listeners para inputs
  setupInputListeners();

  // Función para configurar botones
  function setupButtonListeners() {
    const btnIdioma = document.getElementById("btnIdioma");
    const btnCompeTecnicas = document.getElementById("btnCompeTecnicas");
    const btnHumana = document.getElementById("btnHumana");
    const btnExpeProfesiona = document.getElementById("btnExpeProfesiona");
    const btnEducation = document.getElementById("btnEducation");

    console.log('Botones encontrados:', {
      btnIdioma: !!btnIdioma,
      btnCompeTecnicas: !!btnCompeTecnicas,
      btnHumana: !!btnHumana,
      btnExpeProfesiona: !!btnExpeProfesiona,
      btnEducation: !!btnEducation
    });

    if (btnIdioma) {
      btnIdioma.addEventListener("click", function () {
        console.log('Botón idioma clickeado');
        addLanguage();
      });
    }

    if (btnCompeTecnicas) {
      btnCompeTecnicas.addEventListener("click", function () {
        console.log('Botón competencias técnicas clickeado');
        addTechnicalSkill();
      });
    }

    if (btnHumana) {
      btnHumana.addEventListener("click", function () {
        console.log('Botón competencias humanas clickeado');
        addHumanSkill();
      });
    }

    if (btnExpeProfesiona) {
      btnExpeProfesiona.addEventListener("click", function () {
        console.log('Botón experiencia clickeado');
        addExperience();
      });
    }

    if (btnEducation) {
      btnEducation.addEventListener("click", function () {
        console.log('Botón educación clickeado');
        addEducation();
      });
    }
  }

  // Función para configurar inputs
  function setupInputListeners() {
    const inputs = [fullNameInput, ageInput, professionInput, cityInput, phoneInput, emailInput, portfolioInput, profileTextInput];

    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', function () {
          console.log('Input cambiado:', input.id, input.value);
          updateCVDisplay();
        });
      }
    });
  }

  // Vista previa de foto
  if (fotoInput) {
    fotoInput.addEventListener("change", function () {
      const archivo = fotoInput.files[0];
      if (archivo) {
        const lector = new FileReader();
        lector.onload = function () {
          if (vistaPrevia) {
            vistaPrevia.src = lector.result;
          }
          updateCVDisplay();
        };
        lector.readAsDataURL(archivo);
      }
    });
  }

  // Actualizar vista previa inicial
  updateCVDisplay();
});

// Función para alternar secciones
function toggleSection(sectionId) {
  console.log('Toggling section:', sectionId);
  const section = document.getElementById(sectionId);
  const toggleIcon = section.previousElementSibling.querySelector('.toggle-icon');

  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
    if (toggleIcon) toggleIcon.textContent = '▼';
  } else {
    section.style.display = 'none';
    if (toggleIcon) toggleIcon.textContent = '▶';
  }
}

// Funciones para agregar elementos
function addLanguage(idioma = "", nivel = "") {
  console.log('Agregando idioma:', idioma, nivel);
  const container = document.getElementById("languagesList");
  if (!container) {
    console.error('No se encontró el contenedor languagesList');
    return;
  }

  const div = document.createElement("div");
  div.classList.add("language-entry", "form-group");
  div.innerHTML = `
        <div class="two-column">
            <input type="text" placeholder="Idioma" class="language-name" value="${idioma}" />
            <input type="text" placeholder="Nivel" class="language-level" value="${nivel}" />
        </div>
        <button class="btn btn-danger" onclick="removeElement(this)">❌</button>
    `;
  container.appendChild(div);

  // Agregar event listeners
  const inputs = div.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', updateCVDisplay);
  });

  updateCVDisplay();
}

function addTechnicalSkill(skill = "") {
  console.log('Agregando competencia técnica:', skill);
  const container = document.getElementById("technicalSkillsList");
  if (!container) {
    console.error('No se encontró el contenedor technicalSkillsList');
    return;
  }

  const div = document.createElement("div");
  div.classList.add("technical-skill-entry", "form-group");
  div.innerHTML = `
        <input type="text" placeholder="Competencia Técnica" class="technical-skill" value="${skill}" />
        <button class="btn btn-danger" onclick="removeElement(this)">❌</button>
    `;
  container.appendChild(div);

  // Agregar event listener
  const input = div.querySelector('input');
  input.addEventListener('input', updateCVDisplay);

  updateCVDisplay();
}

function addHumanSkill(valor = "") {
  console.log('Agregando competencia humana:', valor);
  const container = document.getElementById("humanSkillsList");
  if (!container) {
    console.error('No se encontró el contenedor humanSkillsList');
    return;
  }

  const div = document.createElement("div");
  div.classList.add("form-group", "human-skill-entry");
  div.innerHTML = `
        <input type="text" class="human-skill" placeholder="Ej: Liderazgo" value="${valor}" />
        <button class="btn btn-danger" onclick="removeElement(this)">❌</button>
    `;
  container.appendChild(div);

  // Agregar event listener
  const input = div.querySelector('input');
  input.addEventListener('input', updateCVDisplay);

  updateCVDisplay();
}

function addExperience(cargo = "", empresa = "", periodo = "", descripcion = "") {
  console.log('Agregando experiencia:', cargo, empresa);
  const container = document.getElementById("experienceList");
  if (!container) {
    console.error('No se encontró el contenedor experienceList');
    return;
  }

  const div = document.createElement("div");
  div.classList.add("experience-entry", "form-group");
  div.innerHTML = `
        <div class="two-column">
            <input type="text" placeholder="Cargo" class="job-title" value="${cargo}" />
            <input type="text" placeholder="Empresa" class="company-name" value="${empresa}" />
        </div>
        <input type="text" placeholder="Período (Ej: 2022-2024)" class="job-period" value="${periodo}" />
        <textarea placeholder="Descripción de responsabilidades..." class="job-description" rows="3">${descripcion}</textarea>
        <button class="btn btn-danger" onclick="removeElement(this)">❌</button>
    `;
  container.appendChild(div);

  // Agregar event listeners
  const inputs = div.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', updateCVDisplay);
  });

  updateCVDisplay();
}

function addEducation(institucion = "", titulo = "", periodo = "") {
  console.log('Agregando educación:', institucion, titulo);
  const container = document.getElementById("educationList");
  if (!container) {
    console.error('No se encontró el contenedor educationList');
    return;
  }

  const div = document.createElement("div");
  div.classList.add("education-entry", "form-group");
  div.innerHTML = `
        <input type="text" placeholder="Institución" class="education-institution" value="${institucion}" />
        <input type="text" placeholder="Título o Certificación" class="education-title" value="${titulo}" />
        <input type="text" placeholder="Período (Ej: 2020-2024)" class="education-period" value="${periodo}" />
        <button class="btn btn-danger" onclick="removeElement(this)">❌</button>
    `;
  container.appendChild(div);

  // Agregar event listeners
  const inputs = div.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', updateCVDisplay);
  });

  updateCVDisplay();
}

// Función para remover elementos
function removeElement(button) {
  button.parentElement.remove();
  updateCVDisplay();
}

// Función para actualizar la vista previa
function updateCVDisplay() {
  console.log('Actualizando vista previa...');

  // Información personal
  const displayName = document.getElementById('displayName');
  const displayAge = document.getElementById('displayAge');
  const displayProfession = document.getElementById('displayProfession');

  if (displayName) {
    const fullName = document.getElementById('fullName');
    displayName.textContent = fullName?.value || 'Tu Nombre Aquí';
  }

  if (displayAge) {
    const age = document.getElementById('age');
    displayAge.textContent = age?.value ? `${age.value} años` : '25 años';
  }

  if (displayProfession) {
    const profession = document.getElementById('profession');
    displayProfession.textContent = profession?.value || 'Profesión';
  }

  // Contacto
  const contactDisplay = document.getElementById('contactDisplay');
  if (contactDisplay) {
    const city = document.getElementById('city');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const portfolio = document.getElementById('portfolio');

    contactDisplay.innerHTML = `
            <li>📍 ${city?.value || 'Ciudad'}</li>
            <li>📞 ${phone?.value || 'Teléfono'}</li>
            <li>✉️ ${email?.value || 'Email'}</li>
            <li>🌐 ${portfolio?.value || 'Portfolio'}</li>
        `;
  }

  // Perfil profesional
  const profileDisplay = document.getElementById('profileDisplay');
  if (profileDisplay) {
    const profileText = document.getElementById('profileText');
    profileDisplay.textContent = profileText?.value || 'Describe aquí tu perfil profesional, experiencia y objetivos de carrera.';
  }

  // Idiomas
  updateLanguagesDisplay();

  // Competencias técnicas
  updateTechnicalSkillsDisplay();

  // Competencias humanas
  updateHumanSkillsDisplay();

  // Experiencia
  updateExperienceDisplay();

  // Educación
  updateEducationDisplay();
}

function updateLanguagesDisplay() {
  const languagesDisplay = document.getElementById('languagesDisplay');
  if (!languagesDisplay) return;

  const languages = Array.from(document.querySelectorAll('.language-entry')).map(entry => {
    const name = entry.querySelector('.language-name')?.value || '';
    const level = entry.querySelector('.language-level')?.value || '';
    return name && level ? `${name} - ${level}` : null;
  }).filter(Boolean);

  languagesDisplay.innerHTML = languages.length > 0
    ? languages.map(lang => `<li>${lang}</li>`).join('')
    : '<li>Español - Nativo</li>';
}

function updateTechnicalSkillsDisplay() {
  const technicalSkillsDisplay = document.getElementById('technicalSkillsDisplay');
  if (!technicalSkillsDisplay) return;

  const technicalSkills = Array.from(document.querySelectorAll('.technical-skill'))
    .map(input => input.value.trim())
    .filter(Boolean);

  technicalSkillsDisplay.innerHTML = technicalSkills.length > 0
    ? technicalSkills.map(skill => `<li>${skill}</li>`).join('')
    : '<li>HTML/CSS</li><li>JavaScript</li>';
}

function updateHumanSkillsDisplay() {
  const humanSkillsDisplay = document.getElementById('humanSkillsDisplay');
  if (!humanSkillsDisplay) return;

  const humanSkills = Array.from(document.querySelectorAll('.human-skill'))
    .map(input => input.value.trim())
    .filter(Boolean);

  humanSkillsDisplay.innerHTML = humanSkills.length > 0
    ? humanSkills.map(skill => `<li>${skill}</li>`).join('')
    : '<li>Trabajo en equipo</li><li>Comunicación efectiva</li>';
}

function updateExperienceDisplay() {
  const experienceDisplay = document.getElementById('experienceDisplay');
  if (!experienceDisplay) return;

  const experiences = Array.from(document.querySelectorAll('.experience-entry')).map(entry => {
    const title = entry.querySelector('.job-title')?.value || '';
    const company = entry.querySelector('.company-name')?.value || '';
    const period = entry.querySelector('.job-period')?.value || '';
    const description = entry.querySelector('.job-description')?.value || '';

    if (title || company) {
      return `
                <div class="experience-item">
                    <div class="job-title">${title || 'Cargo'}</div>
                    <div class="job-company">${company || 'Empresa'}</div>
                    <div class="job-period">${period || 'Período'}</div>
                    <div class="job-description">${description || 'Descripción de responsabilidades'}</div>
                </div>
            `;
    }
    return null;
  }).filter(Boolean);

  experienceDisplay.innerHTML = experiences.length > 0
    ? experiences.join('')
    : '<div class="experience-item"><div class="job-title">Agrega tu primera experiencia laboral</div><div class="job-period">Cargo</div><div class="job-description">Responsabilidad principal</div></div>';
}

function updateEducationDisplay() {
  const educationDisplay = document.getElementById('educationDisplay');
  if (!educationDisplay) return;

  const educations = Array.from(document.querySelectorAll('.education-entry')).map(entry => {
    const institution = entry.querySelector('.education-institution')?.value || '';
    const title = entry.querySelector('.education-title')?.value || '';
    const period = entry.querySelector('.education-period')?.value || '';

    if (institution || title) {
      return `
                <div class="education-item">
                    <div class="education-title">${institution || 'Institución'} ${period ? `/ ${period}` : ''}</div>
                    <div class="education-details">${title || 'Título o certificación'}</div>
                </div>
            `;
    }
    return null;
  }).filter(Boolean);

  educationDisplay.innerHTML = educations.length > 0
    ? educations.join('')
    : '<div class="education-item"><div class="education-title">Institución / Período</div><div class="education-details">Título o certificación</div></div>';
}

// Funciones principales
function guardarDatos() {
  const fullName = document.getElementById('fullName')?.value;
  const age = document.getElementById('age')?.value;
  const profession = document.getElementById('profession')?.value;
  const city = document.getElementById('city')?.value;
  const phone = document.getElementById('phone')?.value;
  const email = document.getElementById('email')?.value;
  const portfolio = document.getElementById('portfolio')?.value;
  const profileText = document.getElementById('profileText')?.value;

  // Obtener idiomas
  const idiomas = Array.from(document.querySelectorAll('.language-entry')).map(entry => {
    return {
      nombre: entry.querySelector('.language-name')?.value || '',
      nivel: entry.querySelector('.language-level')?.value || ''
    };
  });

  // Competencias técnicas
  const competenciasTecnicas = Array.from(document.querySelectorAll('.technical-skill'))
    .map(input => input.value.trim())
    .filter(Boolean);

  // Competencias humanas
  const competenciasHumanas = Array.from(document.querySelectorAll('.human-skill'))
    .map(input => input.value.trim())
    .filter(Boolean);

  // Experiencia
  const experiencia = Array.from(document.querySelectorAll('.experience-entry')).map(entry => ({
    cargo: entry.querySelector('.job-title')?.value || '',
    empresa: entry.querySelector('.company-name')?.value || '',
    periodo: entry.querySelector('.job-period')?.value || '',
    descripcion: entry.querySelector('.job-description')?.value || ''
  }));

  // Educación
  const educacion = Array.from(document.querySelectorAll('.education-entry')).map(entry => ({
    institucion: entry.querySelector('.education-institution')?.value || '',
    titulo: entry.querySelector('.education-title')?.value || '',
    periodo: entry.querySelector('.education-period')?.value || ''
  }));

  // Foto como base64
  const fotoInput = document.getElementById("foto");
  const archivo = fotoInput?.files[0];

  const enviarDatos = (fotoBase64 = "") => {
    const datos = {
      nombre: fullName,
      edad: age,
      profesion: profession,
      ciudad: city,
      telefono: phone,
      email: email,
      portfolio: portfolio,
      perfil: profileText,
      foto: fotoBase64,
      idiomas,
      competenciasTecnicas,
      competenciasHumanas,
      experiencia,
      educacion
    };

    fetch('http://localhost:3000/perfil', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(res => {
        console.log('Datos guardados:', res);
        alert("CV guardado exitosamente");
      })
      .catch(err => {
        console.error('Error al guardar:', err);
        alert("Error al guardar el CV");
      });
  };

  if (archivo) {
    const lector = new FileReader();
    lector.onload = () => {
      enviarDatos(lector.result);
    };
    lector.readAsDataURL(archivo);
  } else {
    enviarDatos(""); // Sin imagen
  }
}




function loadCV() {
  console.log('Cargando CV...');
  alert('Función de carga en desarrollo');
}

function clearCV() {
  console.log('Limpiando CV...');

  // Limpiar campos básicos
  const inputs = ['fullName', 'age', 'profession', 'city', 'phone', 'email', 'portfolio', 'profileText'];
  inputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) input.value = '';
  });

  // Limpiar listas dinámicas
  const containers = ['languagesList', 'technicalSkillsList', 'humanSkillsList', 'experienceList', 'educationList'];
  containers.forEach(id => {
    const container = document.getElementById(id);
    if (container) container.innerHTML = '';
  });

  // Limpiar vista previa de imagen
  const vistaPrevia = document.getElementById("vista-previa");
  if (vistaPrevia) vistaPrevia.src = "";

  updateCVDisplay();
}

function exportJSON() {
  console.log('Exportando JSON...');
  alert('Función de exportación en desarrollo');
}

function printCV() {
  console.log('Imprimiendo CV...');
  window.print();
}