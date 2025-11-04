// ========================================
// MINTLY LANDING PAGE - JAVASCRIPT
// ========================================

// ========================================
// TESTIMONIAL CAROUSEL
// ========================================

let currentTestimonial = 0;

function showTestimonial(index) {
	const slides = document.querySelectorAll(
		".testimonial-slide"
	);
	const dots = document.querySelectorAll(".dot");

	// Validate index
	if (index >= slides.length) {
		currentTestimonial = 0;
	} else if (index < 0) {
		currentTestimonial = slides.length - 1;
	} else {
		currentTestimonial = index;
	}

	// Hide all slides
	slides.forEach((slide) =>
		slide.classList.remove("active")
	);
	dots.forEach((dot) =>
		dot.classList.remove("active")
	);

	// Show current slide
	slides[currentTestimonial].classList.add(
		"active"
	);
	dots[currentTestimonial].classList.add(
		"active"
	);
}

function nextTestimonial() {
	showTestimonial(currentTestimonial + 1);
}

function previousTestimonial() {
	showTestimonial(currentTestimonial - 1);
}

function goToTestimonial(index) {
	showTestimonial(index);
}

// Auto-rotate testimonials every 8 seconds
setInterval(() => {
	nextTestimonial();
}, 8000);

// ========================================
// LIVE CHAT WIDGET
// ========================================

let isChatOpen = false;

function toggleChat() {
	const chatBody =
		document.getElementById("chatBody");
	isChatOpen = !isChatOpen;

	if (isChatOpen) {
		chatBody.classList.add("active");
	} else {
		chatBody.classList.remove("active");
	}
}

function sendQuickReply(message) {
	const chatBody =
		document.getElementById("chatBody");

	// Create user message
	const userMessage =
		document.createElement("div");
	userMessage.style.cssText =
		"background: #14B8A6; color: white; padding: 10px 12px; border-radius: 8px; margin-bottom: 10px; text-align: right; font-size: 13px; max-width: 80%;";
	userMessage.textContent = message;
	chatBody.appendChild(userMessage);

	// Simulate bot response
	setTimeout(() => {
		const botMessage =
			document.createElement("div");
		botMessage.style.cssText =
			"background: #F0F0F0; color: #374151; padding: 10px 12px; border-radius: 8px; margin-bottom: 10px; text-align: left; font-size: 13px; max-width: 80%;";

		const responses = {
			"I have a question":
				"Great! Our support team is here to help. You can also check our Help Center or email support@mintly.app",
			"I want to sign up":
				'Awesome! Click the "Get Started Free" button to create your account. No credit card required!',
			"Feature inquiry":
				"We offer automated savings, smart investing, budget tracking, goal setting, and AI recommendations. Want to learn more about a specific feature?",
		};

		botMessage.textContent =
			responses[message] ||
			"Thanks for your interest! How else can we help?";
		chatBody.appendChild(botMessage);
		chatBody.scrollTop = chatBody.scrollHeight;
	}, 500);

	chatBody.scrollTop = chatBody.scrollHeight;
}

// ========================================
// SMOOTH SCROLLING
// ========================================

document
	.querySelectorAll('a[href^="#"]')
	.forEach((anchor) => {
		anchor.addEventListener(
			"click",
			function (e) {
				const href = this.getAttribute("href");
				if (
					href !== "#" &&
					document.querySelector(href)
				) {
					e.preventDefault();
					document
						.querySelector(href)
						.scrollIntoView({
							behavior: "smooth",
						});
				}
			}
		);
	});

// ========================================
// FORM SUBMISSION
// ========================================

function handleSignup(event) {
	event.preventDefault();

	const form = event.target;
	const email = form.querySelector(
		'input[type="email"]'
	).value;

	if (!email) {
		alert("Please enter your email address.");
		return;
	}

	// Validate email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert("Please enter a valid email address.");
		return;
	}

	// Here you would typically send the email to your backend
	console.log("Signup initiated for:", email);

	// Show success message
	const button = form.querySelector("button");
	const originalText = button.textContent;
	button.textContent = "✓ Check your email!";
	button.style.background = "#0D9488";

	// Reset form
	form.reset();

	// Reset button after 3 seconds
	setTimeout(() => {
		button.textContent = originalText;
		button.style.background = "";
	}, 3000);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Add animate class to trigger CSS animations
				entry.target.classList.add("animate");
				observer.unobserve(entry.target);
			}
		});
	},
	observerOptions
);

// Observe elements for scroll animations
document
	.querySelectorAll(
		".how-it-works, .benefit-card, .step, .testimonial, .cert-badge"
	)
	.forEach((el) => {
		observer.observe(el);
	});

// ========================================
// NAVBAR - NO NAVBAR AS PER DESIGN
// But keeping for potential future use
// ========================================

// Sticky header on scroll (optional enhancement)
window.addEventListener("scroll", () => {
	const hero = document.querySelector(".hero");
	const scrolled = window.scrollY > 100;

	if (scrolled) {
		// Can add scroll-triggered animations here
	}
});

// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener("keydown", (e) => {
	// Allow arrow keys for testimonial navigation
	if (e.key === "ArrowLeft") {
		previousTestimonial();
	} else if (e.key === "ArrowRight") {
		nextTestimonial();
	}

	// ESC to close chat
	if (e.key === "Escape") {
		const chatBody =
			document.getElementById("chatBody");
		if (isChatOpen) {
			toggleChat();
		}
	}
});

// ========================================
// MOBILE OPTIMIZATION
// ========================================

// Detect if user is on mobile
const isMobile = () => {
	return window.innerWidth <= 768;
};

// Adjust chat widget position on mobile
window.addEventListener("resize", () => {
	const chatWidget = document.querySelector(
		".live-chat-widget"
	);
	if (isMobile()) {
		chatWidget.style.width = "calc(100% - 24px)";
	} else {
		chatWidget.style.width = "350px";
	}
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images if using them
if ("IntersectionObserver" in window) {
	const imageObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					if (img.dataset.src) {
						img.src = img.dataset.src;
						img.removeAttribute("data-src");
						observer.unobserve(img);
					}
				}
			});
		}
	);

	document
		.querySelectorAll("img[data-src]")
		.forEach((img) => imageObserver.observe(img));
}

// ========================================
// ANALYTICS TRACKING (Example)
// ========================================

function trackEvent(eventName, eventData = {}) {
	console.log(`Event: ${eventName}`, eventData);
	// Replace with your analytics service (GA, Mixpanel, etc.)
}

// Track CTA clicks
document
	.querySelectorAll(".cta-button")
	.forEach((btn) => {
		btn.addEventListener("click", () => {
			trackEvent("CTA_Click", {
				text: btn.textContent,
			});
		});
	});

// Track testimonial navigation
document
	.querySelectorAll(".carousel-btn, .dot")
	.forEach((btn) => {
		btn.addEventListener("click", () => {
			trackEvent("Testimonial_Navigation", {
				current: currentTestimonial,
			});
		});
	});

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener(
	"DOMContentLoaded",
	() => {
		console.log("Mintly Landing Page Loaded");

		// Initialize first testimonial
		showTestimonial(0);

		// Open chat by default (optional - comment out if not desired)
		// toggleChat();
	}
);
