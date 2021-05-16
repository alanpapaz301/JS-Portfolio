const data = {
  education: {
    overview:
      "Estudando do curso de Analise e Desenvolvimento de Sistemas no \
      Instituto Federal do Paraná, campus Londrina. Ensino médio em conjunto com Técnico em Informática concluido em Atenas, Grécia.\
      Em conjunto com o conteúdo do curso estou estudando e desenvolvendo projetos pessoais para\
      ganhar experiência no desenvolvimento web moderno",
    courses: [
      {
        institution: "Instituto Federal do Paraná",
        course: "Analise e Desenvolvimento de Sistemas",
        period: "02/2019 a 02/2022",
      },
      {
        institution: "3º Liceu Profissionalizante de Tavros – Atenas / Grécia",
        course: "Ensino médio em conjunto com Técnico em Informática",
        period: "06/2009 a 06/2012",
      },
      {
        institution: "Free Code Camp",
        course: "Responsive Web Design Certification",
        period: "Em progresso",
      },
      {
        institution: "Universidade de Helsinki",
        course: "Full Stack Open 2021",
        period: "Em progresso",
      },
    ],
  },
  trajectory:
    "Estudante e desenvolvedor, tenho o objetivo de atuar na área de desenvolvimento Web como Full Stack.",
  projects: {
    overview:
      "Projetos realizados tanto para o conteúdo da faculdade quanto projetos pessoais com o objetivo de ganhar experiência com as tecnologias utilizadas no mercado.",
    projectsArray: [
      {
        title: "Weather and timezone app - React",
        description:
          "Aplicação Web com o proposto de exibir informações sobre clima e fuso horário de qualquer local do mundo selecionado, utiliza as APIs OpenWeatherMap e TZLookup para obter as informações",
        link: "https://github.com/alanpapaz301/Get-Local-Info-React",
      },
      {
        title: "Javascript calculator",
        description:
          "Calculadora básica desenvolvida somente com HTML, CSS e Javascript. Desenvolvido para projeto da faculdade.",
        link: "https://github.com/alanpapaz301/JS-Calculator",
      },
      {
        title: "Console Tetris game",
        description:
          "Jogo Tetris com base no prompt de comando desenvolvido na linguagem C. Desenvolvido para projeto da faculdade.",
        link: "https://github.com/alanpapaz301/TetrisIFPR",
      },
      {
        title: "Console Car Racing game",
        description:
          "Jogo de corrida com base no prompt de comando desenvolvido na linguagem C. Desenvolvido para projeto da faculdade.",
        link: "https://github.com/alanpapaz301/Car-Racing",
      },
    ],
  },
  contacts: {
    mail: "alanpapazoglou@gmail.com",
    phone: "43984362663",
    github: "https://github.com/alanpapaz301",
  },
};

const educationOverview = document.querySelector(".educationOverview");
educationOverview.innerText = data.education.overview;

const eduContainer = document.querySelector(".boxContainer");
for (var i = 0; i < data.education.courses.length; i++) {
  //Cria um div container para cada objeto dentro do array education
  var box = document.createElement("div");
  box.className = "box";
  eduContainer.appendChild(box);
  //Popula cada "caixa" com os elementos do objeto
  var course = document.createElement("h3");
  course.innerText = data.education.courses[i].course;
  box.appendChild(course);
  var institution = document.createElement("h5");
  institution.innerText = data.education.courses[i].institution;
  box.appendChild(institution);
  var period = document.createElement("p");
  period.innerText = data.education.courses[i].period;
  box.appendChild(period);
}

const trajectory = document.querySelector(".trajectoryParagraph");
trajectory.innerText = data.trajectory;

//Popula dinamicamente a seção de projetos

const projectsOverview = document.querySelector(".projectsOverview");
projectsOverview.innerText = data.projects.overview;

const projectsContainer = document.querySelector(".projectsContainer");

for (var i = 0; i < data.projects.projectsArray.length; i++) {
  var h5 = document.createElement("h5");
  h5.innerHTML = data.projects.projectsArray[i].title;
  projectsContainer.appendChild(h5);
  var p = document.createElement("p");
  p.innerHTML = data.projects.projectsArray[i].description;
  projectsContainer.appendChild(p);
  var anchor = document.createElement("a");
  anchor.innerText = "Link";
  anchor.href = data.projects.projectsArray[i].link;
  projectsContainer.appendChild(anchor);
}

//Controle de exibição do formulário
const showForm = () => {
  let form = document.getElementById("project-form");
  form.classList.toggle("form-show");
};

const sendBtn = (e) => {
  let form1 = document.getElementById("project-form");
  alert("Proposta enviada com sucesso!");
  form1.classList.remove("form-show");
};

//Popula a seção contatos com os atributos + seus valores
const contactsContainer = document.querySelector(".contactContainer");

const contactsAttributes = Object.getOwnPropertyNames(data.contacts);
for (var i = 0; i < contactsAttributes.length; i++) {
  var content = document.createElement("h3");
  content.innerText =
    contactsAttributes[i] + ":" + " " + Object.values(data.contacts)[i];
  contactsContainer.appendChild(content);
}
