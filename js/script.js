document.addEventListener('DOMContentLoaded', function() {
    // شاشة التحميل
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    // القائمة المتنقلة
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                menuToggle.classList.remove('active');
                sidebar.classList.remove('active');
                mainContent.classList.remove('active');
            }
            
            // إضافة active للرابط الحالي
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // تأثير الكتابة
    const typed = new Typed('.typing-effect', {
        strings: [
            'أحمد غانم',
            'مبرمج Full Stack',
            'مطور تطبيقات',
            'خبير تقني'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|'
    });

    // تصفية المشاريع
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة active من جميع الأزرار
            filterBtns.forEach(item => item.classList.remove('active'));
            
            // إضافة active للزر الحالي
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // تأثيرات التمرير
    window.addEventListener('scroll', reveal);
    
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        const backToTop = document.querySelector('.back-to-top');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 100;
            
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
        
        // زر العودة للأعلى
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }
    
    // تفعيل تأثيرات التمرير عند التحميل
    reveal();
    
    // إضافة تأثير reveal لجميع الأقسام
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
    });

    // إضافة active للرابط الحالي عند التمرير
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // إرسال النموذج
    const contactForm = document.querySelector('.contact-form .form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال النموذج
            alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريبًا.');
            this.reset();
        });
    }
});