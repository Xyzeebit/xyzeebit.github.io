(function ($) {
    let state = {
        lightMode: true
    }
    const id = 'xyzeebit_state'
    // update state from localStorage
    const store = JSON.parse(
    localStorage.getItem(id));
    
    if(store) {
        state = store;
    } else {
        localStorage.setItem(id, JSON.stringify(state));
    }
    // update site state
    
    if(!state.lightMode) {
        $('#switch').prop('checked', true);
         $('body, main, .container, .content, .side-nav, .nav').toggleClass('toggle-mode');
    }

    
    
    $('#switch').on('change', function(e) {
        
        $('body, main, .container, .content, .side-nav, .nav').toggleClass('toggle-mode');
        
        $('div.card-footer').toggleClass('toggle-f-color f-color');
        
        $('div.p-card-desc').toggleClass('f-color toggle-f-color')
        
        $('div.projects-list').toggleClass('bg-p-list-light bg-p-list-dark');
        
        $('.social-buttons').toggleClass('toggle-f-color');
        
        if(e.target.checked) {
            $('ul.links li a img').css('filter', 'invert(100%)');
        } else {
            $('ul.links li a img').css('filter', 'invert(0%)');
        }
        
        $('.selected-img').css('filter', 'invert(55%) sepia(226%) saturate(325%) hue-rotate(151deg) brightness(83%) contrast(61%)')
    });
    
    $(window).on('scroll', function(e) {
        if($(this).scrollTop() > 70) {
            $('.side-logo').addClass('show-side-logo');
        } else {
            $('.side-logo').removeClass('show-side-logo');
        }
    });
    
    $('form').on('submit', function(e) {
        if(!$('#senders-name').val()) {
            $('.err-name').addClass('show-err')
            e.preventDefault();
        } else {
            $('.err-name').removeClass('show-err')
        }
        if(!isEmail($('#senders-email').val())) {
            $('.err-email').addClass('show-err').text('Enter a valid email')
            e.preventDefault();
        } else {
            $('.err-email').removeClass('show-err')
        }
        if(!$('.message').val()) {
            $('.err-message').addClass('show-err')
            e.preventDefault();
        } else {
            $('.err-message').removeClass('show-err')
        }
    });
    function sanitized(value) {
        //const pattern = /(\<(/?[^\>]+)\>)/
        return value.replace('/(\<(/?[^\>]+)\>)/', '');
    }
    function isEmail(email) {
        const pattern = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
        if(pattern.test(email)) {
            alert('match')
            return true;
        }
        return false;
    }
    
})(jQuery)