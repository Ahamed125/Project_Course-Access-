
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Services Data
    const services = [
        {
            title: 'Web Development',
            description: 'Custom websites built with the latest technologies to ensure performance, security, and scalability.',
            image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed to enhance user experience and drive engagement.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Digital Marketing',
            description: 'Comprehensive strategies to increase your online presence and attract more customers.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'SEO Optimization',
            description: 'Improve your search engine rankings and drive organic traffic to your website.',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Mobile App Development',
            description: 'High-quality mobile applications for iOS and Android platforms.',
            image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'E-commerce Solutions',
            description: 'Complete online store solutions to grow your business and increase sales.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
    ];
    
    // Populate Services
    const servicesGrid = document.querySelector('.services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card animate';
        serviceCard.innerHTML = `
            <div class="service-img">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
    
    // Team Data
    const teamMembers = [
        {
            name: 'Aakil Feroze',
            position: 'CEO & Founder',
            image: 'https://res.cloudinary.com/dldtfwvxa/image/upload/v1750667302/WhatsApp_Image_2025-06-23_at_13.57.51_ab791c04_h5tepy.jpg',
            social: {
                facebook: 'https://www.facebook.com/share/16VfCgnMkb/?mibextid=wwXIfr',
                twitter: '#',
                linkedin: '#',
                instagram: 'https://www.instagram.com/aham_ed168/profilecard'
            }
        },
        {
            name: 'Sarah Johnson',
            position: 'Creative Director',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'Michael Chen',
            position: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'Emma Wilson',
            position: 'Marketing Director',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            social: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                instagram: '#'
            }
        }
    ];
    
    // Populate Team
    const teamGrid = document.querySelector('.team-grid');
    teamMembers.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member animate';
        teamMember.innerHTML = `
            <div class="member-img">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.position}</p>
                <div class="social-links">
                    <a href="${member.social.facebook}"><i class="fab fa-facebook-f"></i></a>
                    <a href="${member.social.twitter}"><i class="fab fa-twitter"></i></a>
                    <a href="${member.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${member.social.instagram}"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;
        teamGrid.appendChild(teamMember);
    });
    
    // Stats Data
    const stats = [
        {
            number: '50+',
            label: 'Projects Completed'
        },
        {
            number: '100%',
            label: 'Client Satisfaction'
        },
        {
            number: '20+',
            label: 'Team Members'
        }
    ];
    
    // Populate Stats
    const statsContainer = document.querySelector('.stats');
    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item animate';
        statItem.innerHTML = `
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        statsContainer.appendChild(statItem);
    });
    
    // Testimonials Data
    const testimonials = [
        {
            content: "ABC Group transformed our online presence completely. Their web development team delivered beyond our expectations.",
            author: "David Miller",
            role: "CEO, TechSolutions Inc."
        },
        {
            content: "The digital marketing strategy they implemented doubled our leads in just three months. Highly recommended!",
            author: "Jennifer Lopez",
            role: "Marketing Director, RetailCorp"
        },
        {
            content: "Their UI/UX design approach made our app intuitive and user-friendly, resulting in higher engagement rates.",
            author: "Robert Chen",
            role: "Product Manager, AppWorks"
        }
    ];
    
    // Populate Testimonials
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = `testimonial ${index === 0 ? 'active' : ''}`;
        testimonialElement.innerHTML = `
            <p class="testimonial-content">"${testimonial.content}"</p>
            <h4 class="testimonial-author">${testimonial.author}</h4>
            <p class="testimonial-role">${testimonial.role}</p>
        `;
        testimonialsSlider.insertBefore(testimonialElement, document.querySelector('.slider-controls'));
    });
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonialElements = document.querySelectorAll('.testimonial');
    
    function showTestimonial(index) {
        testimonialElements.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonialElements[index].classList.add('active');
        currentTestimonial = index;
    }
    
    document.getElementById('nextTestimonial').addEventListener('click', function() {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonialElements.length) {
            nextIndex = 0;
        }
        showTestimonial(nextIndex);
    });
    
    document.getElementById('prevTestimonial').addEventListener('click', function() {
        let prevIndex = currentTestimonial - 1;
        if (prevIndex < 0) {
            prevIndex = testimonialElements.length - 1;
        }
        showTestimonial(prevIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonialElements.length) {
            nextIndex = 0;
        }
        showTestimonial(nextIndex);
    }, 5000);
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
    
    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});