$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    



    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    // var share_bar = document.getElementsByClassName('share-bar');
    // var po = document.createElement('script');
    // po.type = 'text/javascript';
    // po.async = true;
    // po.src = 'https://apis.google.com/js/platform.js';
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(po, s);

    // for (var i = 0; i < share_bar.length; i++) {
    //     var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
    //         'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
    //         'style="width:105px; height:21px;">' +
    //         '</iframe>' +

    //         '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

    //         '<div class="g-plusone" data-size="medium"></div>';

    //     // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

    //     share_bar[i].innerHTML = html;
    //     share_bar[i].style.display = 'inline-block';
    // }

    // /********************** Embed youtube video *********************/
    // $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    document.addEventListener('DOMContentLoaded', function() {
        // Listen for the modal to be shown, which is a good time to adjust contents dynamically
        $('#rsvp-modal').on('shown.bs.modal', function () {
            const eventData = {
                title: "Erwin en Hanneke se Troue",
                start: new Date('2024-11-23T15:30:00'),
                end: new Date('2024-11-24T00:00:00'),
                address: 'Langkloof Rose, Wellington',
                description: "Ons kan nie wag om julle te sien nie."
            };
    
            function createGoogleCalendarUrl(data) {
                let baseUrl = "https://www.google.com/calendar/render";
                let params = new URLSearchParams({
                    action: 'TEMPLATE',
                    text: data.title,
                    dates: `${formatDate(data.start)}/${formatDate(data.end)}`,
                    details: data.description,
                    location: data.address,
                    sprop: 'website:example.com',
                    sf: true
                });
    
                return `${baseUrl}?${params.toString()}`;
            }
    
            function formatDate(date) {
                return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
            }
    
            // Dynamically adding the calendar link
            let calendarUrl = createGoogleCalendarUrl(eventData);
            let linkHtml = `<a href="${calendarUrl}" target="_blank" class="btn btn-primary">Voeg by Google Kalender</a>`;
            document.getElementById('add-to-cal').innerHTML = linkHtml;
        });
    });



    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Wag a paar sekondes!</strong> Ons stoor U besonderhede.'));

        if (MD5($('#invite_code').val()) !== 'b0e53b10c1f55ede516b240036b88f40'
            && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> U het die verkeerde uitnodigings kode verskaf.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbx_fx8GEoJn89ePI1ejiX4NNIqksZRKS5jQ4nry8nm5Gm43Lm0EtGCggtIWDyf5mD3j4w/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Jammer!</strong> Daar is n probleem met die server. '));
                });
        }
    });





});


/********************** RSVP couples **********************/
const couples = {

    "Erwin Schillack": "Hanneke Augustyn",
    "Volker Schillack": "Nicolene Schillack",
    "Reiner Schillack": "Isabel De Jager",
    "Drikus Viljoen":"Charne Viljoen",
    "Jaco Augustyn":"Charlotte Augustyn",
    "Beatrix":"Freddy",
    "Annemarie Wium":"Edu Wium",
    "Joanne Els":"Theo Els",
    "Andrea Jansen van Rensburg? ":"Jaco Jansen van Rensburg",
    "San Binnedel?":"Anton Binnedel",
    "Dup du Plessis (Oom Dup)":"Dagmara du Plessis (Tannie Dagmara)",
    "Ansu ":"Adrian ",
    "Riaan Smit ?":"Susanne Juling Smit ?",
    "Elria Wentzel":"Maurits Wentzel",
    "John Marais":"Jessica Henn",
    "Kai Juling":"Lume",
    "Waldo Cilliers":"Luvonne Cilliers",
    "Ryan Meerman":"Sonnet Meerman",
    "Mariaan Prins":"Dolf Frick",
    "Faf du Plessis":"Retha du Plessis",
    "Hennie ?":"Marilize ",
    "Sonya van Zyl":"JL van Zyl",
    "Marli Auret":"JP Auret",
    "Johanna Theron":"Danie Theron",
    "Petri Stander":"Ismari Stander",
    "Adell Blom":"Neil Blom",
    "Metgesel naam en van":"Metgesel naam en van"
};


const guestPhotos = {
    "Hanneke Augustyn": ["img/eng_pics/WhatsApp Image 2024-04-17 at 19.50.56 (1).jpeg","img/eng_pics/H&E186.jpg" ],
    "Erwin Schillack": ["img/eng_pics/WhatsApp Image 2024-04-17 at 19.50.56 (1).jpeg","img/eng_pics/H&E186.jpg" ],
    "Volker Schillack":["img/eng_pics/egesin.jpeg","img/gaste/almal.jpeg"],
    "Nicolene Schillack":["img/eng_pics/egesin.jpeg","img/gaste/almal.jpeg"],
    "Reiner Schillack":["img/eng_pics/egesin.jpeg","img/gaste/reiner.jpeg"],
    "Isabel de Jager":["img/gaste/isabel.jpeg","img/gaste/almal.jpeg"],
    "Jaco Augustyn":["img/gaste/h_ouers.jpeg"],
    "Charlotte Augustyn":["img/gaste/h_ouers.jpeg"],
    "Dolf Frick":["img/gaste/dolf_mariaan.jpeg"],
    "Mariaan Prins":["img/gaste/dolf_mariaan.jpeg"],
    "Drikus Viljoen":["img/gaste/viljoene.jpeg","img/gaste/carlie.jpeg"],
    "Charne Viljoen":["img/gaste/viljoene.jpeg","img/gaste/carlie.jpeg"],
    "Adell Blom":["img/gaste/adell_neil.jpeg"],
    "Neil Blom":["img/gaste/adell_neil.jpeg"],
    "Andrea Jansen van Rensburg":["img/gaste/andrea.jpeg"],
    "Jaco Jansen van Rensburg":["img/gaste/andrea.jpeg"],
    "Detlef Schillack":["img/gaste/dettie.jpeg","img/gaste/dettie_renate_2.jpeg"],
    "Renate Schillack":["img/gaste/renate.jpeg","img/gaste/dettie_renate_2.jpeg"],
    "Annetjie Schillack":["img/gaste/tan_annetjie.jpeg"],
    "Ruan Theron":["img/gaste/ruan.jpeg","img/gaste/ruan1.jpeg","img/gaste/ruan2.jpeg"],
    "Johanna Theron":["img/gaste/theronne.jpeg","img/gaste/theronne1.jpg"],
    "Danie Theron":["img/gaste/theronne.jpeg","img/gaste/ruan.jpeg"],
    "Rulene Theron":["img/gaste/theronne.jpeg","img/gaste/ruan_rulene.jpeg"],
    "Viandrie Robertson":["img/gaste/viandrie.jpeg"],
    "Waldo Cilliers":["img/gaste/waldo.jpeg"],
    "Kai Juling":["img/gaste/kai_lume.jpeg","img/gaste/kai1.jpeg","img/gaste/kai2.jpeg"],
    "John Marais":["img/gaste/john_jess.jpeg","img/gaste/john1.jpeg","img/gaste/kai1.jpeg"],
    "Jessica Henn":["img/gaste/john_jess.jpeg"],
    "Jonty Swanevelder":["img/gaste/jonty3.jpeg","img/gaste/jonty1.jpeg","img/gaste/jonty2.jpeg"],
    "HJ de Bruyn":["img/gaste/hj.jpeg","img/gaste/hj2.jpeg"],
    "Dwayne Wentzel":["img/gaste/dwayne.jpeg"],
    "Faf du Plessis":["img/gaste/faf_retha.jpeg"],
    "Retha du Plessis":["img/gaste/faf_retha.jpeg"],
    "Hennie du Ridder":["img/gaste/marlize.jpeg"],
    "Marilize de Ridder":["img/gaste/marlize.jpeg"],
    "Sonya van Zyl":["img/gaste/sonya.jpeg","img/gaste/sonya_jl_1.jpeg"],
    "JL van Zyl":["img/gaste/sonya.jpeg","img/gaste/sonya_jl_1.jpeg"],
    "Marne van Zyl":["img/gaste/marne1.jpeg","img/gaste/marne2.jpeg"],
    "Marli Auret":["img/gaste/marli.jpeg"],
    "Malissa Murphy":["img/gaste/malisa.jpeg"],
    "Ryan Meerman":["img/gaste/ryan.jpeg"],
    "Sonnet Meerman":["img/gaste/ryan.jpeg"]
    // Add more guests and their image paths
};


// Function to normalize names for comparison
function normalizeName(name) {
    return name.trim().toLowerCase(); // Trim spaces and convert to lowercase
}

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let guestName = document.querySelector('input[name="name"]').value;
    guestName = normalizeName(guestName); // Normalize the input for comparison

    // Find the photo based on normalized name, default if not found
    const photos = Object.keys(guestPhotos).reduce((acc, key) => {
        if (normalizeName(key) === guestName) {
            return guestPhotos[key];
        }
        return acc;
    }, ['img/eng_pics/H&E9.jpg']);

    const photoContainer = document.getElementById('guestPhotoGallery');
    photoContainer.innerHTML = ''; // Clear previous images

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Photo of ${guestName}`;
        img.style.width = "100%"; // Set the image width to fit container
        photoContainer.appendChild(img);
    });

    $('#rsvp-modal').modal('show'); // Show modal with images
});



// Create a bidirectional lookup map from the given couples
const bidirectionalCouples = {};
Object.keys(couples).forEach(person => {
    bidirectionalCouples[person] = couples[person];
    bidirectionalCouples[couples[person]] = person;
});

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.querySelector('input[name="name"]');
    const spouseInput = document.querySelector('input[name="metgesel_naam"]');
    const dataList = document.getElementById('nameOptions');

    nameInput.addEventListener('input', function() {
        const inputVal = nameInput.value.toLowerCase();
        dataList.innerHTML = '';  // Clear existing options in datalist
        let bestMatch = null;
        let anyMatches = false; // Flag to detect any matches

        // Populate dataList with suggestions from partial name matches
        Object.keys(bidirectionalCouples).forEach(person => {
            if (person.toLowerCase().includes(inputVal)) {
                anyMatches = true;  // Indicate that we found at least one match
                const option = document.createElement('option');
                option.value = person;
                dataList.appendChild(option);

                // Check if this person is a better match (e.g., starts with input)
                if (!bestMatch || person.toLowerCase().startsWith(inputVal)) {
                    bestMatch = person;
                }
            }
        });

        // Update or clear the spouse's name based on match status
        if (bestMatch && anyMatches) {
            spouseInput.value = bidirectionalCouples[bestMatch];
        } else {
            spouseInput.value = ''; // Clear spouse field if no matches are found
        }
    });
});


/********************** Extras **********************/
// -33.60349356305752, 19.036909069204583
// Google map
function initMap() {
    var location = {lat: -33.60349356305752, lng: 19.036909069204583};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 20.305826, lng: 85.85480189999998};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};