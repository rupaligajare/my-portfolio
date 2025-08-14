
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click',()=> mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=> mobileMenu.classList.remove('open')));

    // Active nav link on scroll
    const links = document.querySelectorAll('.nav-link');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const opts = {rootMargin:'-40% 0px -55% 0px', threshold:0};
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          links.forEach(l=>l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, opts);
    sections.forEach(s=> io.observe(s));

    // Tabs (About)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    tabBtns.forEach(btn=> btn.addEventListener('click', ()=>{
      tabBtns.forEach(b=>{b.classList.remove('active'); b.setAttribute('aria-selected','false')});
      panels.forEach(p=> p.classList.remove('active'));
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      document.getElementById(btn.dataset.tab).classList.add('active');
    }));

    // Reveal on scroll + animate meters
    const revealEls = document.querySelectorAll('.reveal, .skill .meter span');
    const revealIO = new IntersectionObserver((es)=>{
      es.forEach(e=>{
        if(e.isIntersecting){
          if(e.target.classList.contains('reveal')) e.target.classList.add('visible');
          if(e.target.matches('.skill .meter span')) e.target.style.width = getComputedStyle(e.target).getPropertyValue('--w');
          revealIO.unobserve(e.target);
        }
      })
    }, {threshold:.2});
    revealEls.forEach(el=> revealIO.observe(el));

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();