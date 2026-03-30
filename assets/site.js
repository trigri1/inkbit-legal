(() => {
  const header = document.querySelector("[data-site-header]");
  const root = document.documentElement;
  root.classList.add("js");
  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  const updateHeaderOffset = () => {
    if (!header) return;
    const offset = Math.ceil(header.getBoundingClientRect().height + 12);
    root.style.setProperty("--header-offset", `${offset}px`);
  };

  updateHeaderOffset();
  setHeaderState();
  window.addEventListener("resize", updateHeaderOffset, { passive: true });
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("load", updateHeaderOffset, { once: true });

  if ("ResizeObserver" in window && header) {
    const headerObserver = new ResizeObserver(() => updateHeaderOffset());
    headerObserver.observe(header);
  }

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const primaryNav = document.getElementById("site-primary-nav");
  const mobileMenuQuery = window.matchMedia("(max-width: 699px)");

  if (header && menuToggle && primaryNav) {
    const syncMenuState = () => {
      const isMobile = mobileMenuQuery.matches;
      menuToggle.hidden = !isMobile;
      if (!isMobile) {
        header.classList.remove("is-menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        primaryNav.hidden = false;
      } else {
        primaryNav.hidden = !header.classList.contains("is-menu-open");
      }
      updateHeaderOffset();
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      primaryNav.hidden = !isOpen;
      updateHeaderOffset();
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (!mobileMenuQuery.matches) return;
        header.classList.remove("is-menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        primaryNav.hidden = true;
        updateHeaderOffset();
      });
    });

    if (typeof mobileMenuQuery.addEventListener === "function") {
      mobileMenuQuery.addEventListener("change", syncMenuState);
    } else {
      mobileMenuQuery.addListener(syncMenuState);
    }

    syncMenuState();
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if (sectionLinks.length > 0) {
    const setActiveSection = (id) => {
      sectionLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const sections = sectionLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (window.location.hash) {
      const current = sections.find((section) => `#${section.id}` === window.location.hash);
      if (current?.id) setActiveSection(current.id);
    }

    if ("IntersectionObserver" in window && sections.length > 0) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id) setActiveSection(visible.target.id);
        },
        { rootMargin: "-28% 0px -52% 0px", threshold: [0.2, 0.4, 0.6] }
      );

      sections.forEach((section) => sectionObserver.observe(section));
    }
  }

  const markImageState = (img) => {
    const media = img.closest(".shot-media");
    if (!media) return;
    const placeholder = media.querySelector(".shot-placeholder");
    if (img.naturalWidth > 0) {
      media.classList.add("is-loaded");
      media.classList.remove("is-missing");
      img.removeAttribute("aria-hidden");
      if (placeholder) {
        placeholder.hidden = true;
        placeholder.setAttribute("aria-hidden", "true");
        placeholder.removeAttribute("role");
      }
    } else {
      media.classList.add("is-missing");
      media.classList.remove("is-loaded");
      img.setAttribute("aria-hidden", "true");
      if (placeholder) {
        placeholder.hidden = false;
        placeholder.removeAttribute("aria-hidden");
        placeholder.setAttribute("role", "status");
      }
    }
  };

  document.querySelectorAll(".shot-image").forEach((img) => {
    if (img.complete) {
      markImageState(img);
      return;
    }

    img.addEventListener("load", () => markImageState(img), { once: true });
    img.addEventListener("error", () => markImageState(img), { once: true });
  });

  const faqItems = document.querySelectorAll(".faq details");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
