/* ═══════════════════════════════════════════════════════════════
   DILLIRAJA SHOP - Website JavaScript
   Location: Arni, Tamil Nadu
═══════════════════════════════════════════════════════════════ */

$(document).ready(function () {

    /* ── Mobile Drawer Navigation ────────────────────────────── */
    function openDrawer() {
        $('#shDrawer').addClass('open').attr('aria-hidden', 'false');
        $('#shDrawerOverlay').addClass('open');
        $('body').css('overflow', 'hidden');
        $('#shHamburger').attr('aria-expanded', 'true');
    }

    function closeDrawer() {
        $('#shDrawer').removeClass('open').attr('aria-hidden', 'true');
        $('#shDrawerOverlay').removeClass('open');
        $('body').css('overflow', '');
        $('#shHamburger').attr('aria-expanded', 'false');
    }

    function toggleDrawer() {
        if ($('#shDrawer').hasClass('open')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }

    $('#shHamburger').on('click', function (e) {
        e.stopPropagation();
        toggleDrawer();
    });

    $('#shDrawerClose').on('click', function () {
        closeDrawer();
    });

    $('#shDrawerOverlay').on('click', function () {
        closeDrawer();
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            closeDrawer();
        }
    });

    $('#shDrawer .sh-drawer-nav a').on('click', function () {
        closeDrawer();
    });

    /* ── Sticky Header ───────────────────────────────────────── */
    $(window).on('scroll', function () {
        $('#siteHeader').toggleClass('is-sticky', $(window).scrollTop() > 63);
    });

    /* ── Search Functionality ────────────────────────────────── */
    var searchProducts = [
        { name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', price: '₹1,29,999', url: 'mobiles.html' },
        { name: 'Samsung Galaxy A56 5G', brand: 'Samsung', price: '₹27,999', url: 'mobiles.html' },
        { name: 'iPhone 16 Pro Max', brand: 'Apple', price: '₹1,44,900', url: 'mobiles.html' },
        { name: 'OnePlus 13', brand: 'OnePlus', price: '₹69,999', url: 'mobiles.html' },
        { name: 'vivo X200 Pro', brand: 'vivo', price: '₹65,999', url: 'mobiles.html' },
        { name: 'Motorola Edge 50 Pro', brand: 'Motorola', price: '₹31,999', url: 'mobiles.html' },
        { name: 'Nothing Phone (3a)', brand: 'Nothing', price: '₹23,999', url: 'mobiles.html' },
        { name: 'Realme GT 7 Pro', brand: 'Realme', price: '₹59,999', url: 'mobiles.html' },
        { name: 'POCO X7 Pro', brand: 'POCO', price: '₹24,999', url: 'mobiles.html' },
        { name: 'iQOO Neo 10R', brand: 'iQOO', price: '₹29,999', url: 'mobiles.html' },
        { name: 'Samsung Wireless Earbuds', brand: 'Samsung', price: '₹4,999', url: 'accessories.html' },
        { name: 'Boat Airdopes 141', brand: 'Boat', price: '₹1,099', url: 'accessories.html' },
        { name: 'Apple AirPods Pro 2', brand: 'Apple', price: '₹24,900', url: 'accessories.html' },
        { name: 'Fast Charger 65W', brand: 'Generic', price: '₹1,499', url: 'accessories.html' },
        { name: 'Tempered Glass Screen Protector', brand: 'Generic', price: '₹299', url: 'accessories.html' }
    ];

    $('.searchInput').on('keyup', function () {
        var search = $(this).val().toLowerCase();
        var resultsHtml = '';

        if (search.length >= 2) {
            var filtered = searchProducts.filter(function (item) {
                return item.name.toLowerCase().includes(search) ||
                       item.brand.toLowerCase().includes(search);
            });

            if (filtered.length > 0) {
                resultsHtml = '<div class="search-list">';
                filtered.slice(0, 6).forEach(function (item) {
                    resultsHtml += '<a href="' + item.url + '" class="search-item">';
                    resultsHtml += '<span class="search-item-name">' + item.name + '</span>';
                    resultsHtml += '<span class="search-item-price">' + item.price + '</span>';
                    resultsHtml += '</a>';
                });
                resultsHtml += '</div>';
            } else {
                resultsHtml = '<div class="search-no-results">No products found</div>';
            }
        }

        $('.searchResults').html(resultsHtml);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.sh-search').length) {
            $('.searchResults').html('');
        }
    });

    /* ── Scroll to Top Button ────────────────────────────────── */
    var scrollTopBtn = $('.scroll-top');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            scrollTopBtn.addClass('visible');
        } else {
            scrollTopBtn.removeClass('visible');
        }
    });

    scrollTopBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    /* ── Brand Slider Auto Scroll ────────────────────────────── */
    var brandSlider = document.querySelector('.brand-slider');
    if (brandSlider) {
        var scrollAmount = 0;
        var scrollDirection = 1;

        setInterval(function () {
            if (brandSlider.scrollLeft + brandSlider.clientWidth >= brandSlider.scrollWidth) {
                scrollDirection = -1;
            } else if (brandSlider.scrollLeft <= 0) {
                scrollDirection = 1;
            }
            brandSlider.scrollBy({ left: scrollDirection * 200, behavior: 'smooth' });
        }, 3000);
    }

    /* ── Product Card Hover Effects ──────────────────────────── */
    $('.product-card').on('mouseenter', function () {
        $(this).find('.product-image img').css('transform', 'scale(1.05)');
    }).on('mouseleave', function () {
        $(this).find('.product-image img').css('transform', 'scale(1)');
    });

    /* ── Newsletter Form ─────────────────────────────────────── */
    $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        var email = $(this).find('input[type="email"]').val();
        if (email) {
            alert('Thank you for subscribing! We will send you the latest updates.');
            $(this).find('input[type="email"]').val('');
        }
    });

    /* ── Contact Form ────────────────────────────────────────── */
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        $(this)[0].reset();
    });

    /* ── Smooth Reveal on Scroll ─────────────────────────────── */
    function revealOnScroll() {
        $('.reveal').each(function () {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 50) {
                $(this).addClass('revealed');
            }
        });
    }

    $(window).on('scroll', revealOnScroll);
    revealOnScroll();

});

/* ── Search Results Styles (Dynamic) ──────────────────────── */
var style = document.createElement('style');
style.textContent = `
    .search-list {
        padding: 8px 0;
    }
    .search-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px;
        text-decoration: none;
        color: #292e2e;
        transition: background .15s;
    }
    .search-item:hover {
        background: #f7feff;
    }
    .search-item-name {
        font-size: 13px;
        font-weight: 600;
    }
    .search-item-price {
        font-size: 13px;
        font-weight: 700;
        color: #f20000;
    }
    .search-no-results {
        padding: 16px;
        text-align: center;
        color: #999;
        font-size: 13px;
    }
    .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: all .6s ease;
    }
    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
