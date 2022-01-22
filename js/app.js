window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.querySelector(".menu-list");
  const homeLink = document.querySelector(".home-link");
  const contactLink = document.querySelector(".contact-link");
  const readMore = document.querySelector(".read-more__link");
  const aboutSection = document.querySelector(".about");
  let toggle = false;
  
  menuIcon.addEventListener("click", (e) => {
    menuList.classList.toggle("open");
  });
  
  readMore.addEventListener("click", (e) => {
    aboutSection.classList.toggle("about__open");
    if (!toggle) {
      readMore.textContent = "That's plenty!";
      toggle = true;
    } else {
      readMore.textContent = "About Me";
      toggle = false;
    }
  });
  
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .from(".top-nav", { y: "-100%" }, 0.5)
    .from(
      ".menu-list li",
      {
        y: "-100%",
        stagger: 0.2,
        ease: "power",
      },
      1
    )
    .from(".side-nav", { x: "-100%" }, 1)
    .from(
      ".side-nav ul li",
      {
        x: "-100%",
        stagger: 0.2,
        ease: "power",
      },
      1
    )
    .from(".heading-text1", { opacity: 0 }, 1.5)
    .from(".heading-text2", { opacity: 0 }, 1.7)
    .from(".read-more__link", { y: "-20%", opacity: 0, duration: 0.5 }, 1.7)
    .from(".heading-line", { y: "10px", opacity: 0 }, 1.7)
    .from(".entry__title-container", { opacity: 0 }, 1.5)
    .from(
      ".entry__img-container",
      {
        scale: 0.9,
        opacity: 0,
      },
      1.5
    )
    .from(
      ".entry__link-container",
      {
        opacity: 0,
      },
      1.8
    )
    .from(
      ".tool-icon",
      {
        opacity: 0,
        y: "-30px",
        stagger: 0.2,
      },
      1.8
    )
    .from(".entry__about-text", { opacity: 0 }, 2)
    .from(
      ".tool-icon2",
      {
        opacity: 0,
        y: "-30px",
        stagger: 0.2,
        duration: 0.5,
      },
      1.8
    );
  