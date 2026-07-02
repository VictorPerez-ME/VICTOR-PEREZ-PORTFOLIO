'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// submit the contact form via Web3Forms (no page reload, shows status)
const formStatus = document.querySelector("[data-form-status]");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const setStatus = function (msg, state) {
      if (!formStatus) return;
      formStatus.textContent = msg;
      formStatus.className = "form-status " + state;
    };

    setStatus("Sending…", "sending");
    formBtn.setAttribute("disabled", "");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(async function (res) {
        const data = await res.json().catch(function () { return {}; });
        if (res.ok && data.success) {
          setStatus("Thanks! Your message has been sent — I'll get back to you soon.", "success");
          form.reset();
        } else {
          setStatus((data && data.message) || "Something went wrong. Please email me directly at victorperezvp371@gmail.com.", "error");
          formBtn.removeAttribute("disabled");
        }
      })
      .catch(function () {
        setStatus("Network error. Please email me directly at victorperezvp371@gmail.com.", "error");
        formBtn.removeAttribute("disabled");
      });
  });
}



// project detail sub-page navigation
const portfolioGrid = document.querySelector("[data-portfolio-grid]");
const portfolioDetail = document.querySelector("[data-portfolio-detail]");
const projectOpenLinks = document.querySelectorAll("[data-project-open]");
const projectBackBtn = document.querySelector("[data-portfolio-back]");
const projectSubnavLinks = document.querySelectorAll("[data-project-link]");
const projectPages = document.querySelectorAll("[data-project-page]");

// show a specific project's sub-page
const showProjectPage = function (key) {
  for (let i = 0; i < projectPages.length; i++) {
    projectPages[i].classList.toggle("active", projectPages[i].dataset.projectPage === key);
  }
  for (let i = 0; i < projectSubnavLinks.length; i++) {
    projectSubnavLinks[i].classList.toggle("active", projectSubnavLinks[i].dataset.projectLink === key);
  }
};

// open detail view (hide grid)
const openProjectDetail = function (key) {
  showProjectPage(key);
  if (portfolioGrid) portfolioGrid.classList.add("hidden");
  if (portfolioDetail) portfolioDetail.classList.add("active");
  window.scrollTo(0, 0);
};

// return to grid view
const closeProjectDetail = function () {
  if (portfolioDetail) portfolioDetail.classList.remove("active");
  if (portfolioGrid) portfolioGrid.classList.remove("hidden");
  window.scrollTo(0, 0);
};

for (let i = 0; i < projectOpenLinks.length; i++) {
  projectOpenLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    openProjectDetail(this.dataset.projectOpen);
  });
}

for (let i = 0; i < projectSubnavLinks.length; i++) {
  projectSubnavLinks[i].addEventListener("click", function () {
    showProjectPage(this.dataset.projectLink);
    window.scrollTo(0, 0);
  });
}

if (projectBackBtn) projectBackBtn.addEventListener("click", closeProjectDetail);



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // always reset the portfolio back to its grid when switching tabs
    closeProjectDetail();

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



/* INTRO ANIMATION */
(function () {

  const intro = document.querySelector("[data-intro]");
  if (!intro) return; // already removed by the inline pre-paint check

  sessionStorage.setItem("introPlayed", "1");
  document.body.style.overflow = "hidden";

  let finished = false;

  const removeIntro = function () {
    document.body.style.overflow = "";
    if (intro.parentNode) intro.remove();
  };

  const finish = function () {
    if (finished) return;
    finished = true;
    clearTimeout(autoExit);
    document.body.style.overflow = "";
    intro.classList.add("intro-exit");
    intro.querySelector(".intro-panel--top").addEventListener("transitionend", removeIntro);
  };

  // auto-exit once the sequence completes (~2.0s + 0.6s panel split = 2.6s total)
  const autoExit = setTimeout(finish, 2000);

  // any click or keypress skips
  intro.addEventListener("click", finish);
  window.addEventListener("keydown", finish, { once: true });

  // safety net — the site can never stay hidden
  setTimeout(removeIntro, 3500);

})();