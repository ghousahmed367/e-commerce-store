// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen search box
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  // mobile nav 
  
  
  ;(function($, window, document, undefined) {
    var pluginName = "jqueryAccordionMenu";
    var defaults = {
    speed: 300,
    showDelay: 0,
    hideDelay: 0,
    singleOpen: true,
    clickEffect: true
    };
    
    function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
    }
    
    $.extend(Plugin.prototype, {
    init: function() {
    this.openSubmenu();
    this.submenuIndicators();
    if (defaults.clickEffect) {
      this.addClickEffect();
    }
    },
    openSubmenu: function() {
    $(this.element).children('ul').find('li').bind('click touchstart', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(this).children('.submenu').length > 0) {
        if ($(this).children('.submenu').css('display') == 'none') {
          $(this).children('.submenu').delay(defaults.showDelay).slideDown(defaults.speed);
          $(this).children('.submenu').siblings('a').addClass('submenu-indicator-minus');
          if (defaults.singleOpen) {
            $(this).siblings().children('.submenu').slideUp(defaults.speed);
            $(this).siblings().children('.submenu').siblings('a').removeClass('submenu-indicator-minus');
          }
          return false;
        } else {
          $(this).children('.submenu').delay(defaults.hideDelay).slideUp(defaults.speed);
        }
        
        if ($(this).children('.submenu').siblings('a').hasClass('submenu-indicator-minus')) {
          $(this).children('.submenu').siblings('a').removeClass('submenu-indicator-minus');
        }
      }
      window.location.href = $(this).children('a').attr('href');
    })
    },
    submenuIndicators: function() {
    if ($(this.element).find('.submenu').length > 0) {
      $(this.element).find('.submenu').siblings('a').append('<span class="submenu-indicator"><i class="fa-solid fa-angle-down"></i></span>');
    }
    },
    addClickEffect: function() {
    var ink, d, x, y;
    $(this.element).find('a').bind('click touchstart', function(e) {
      $('.ink').remove();
      if ($(this).children('.ink').length === 0) {
        $(this).prepend('<span class="ink"></span>');
      }
      ink = $(this).find('.ink');
      ink.removeClass('animate-ink');
      if (!ink.height() && !ink.width()) {
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({
          height: d,
          width: d
        });
      }
      x = e.pageX - $(this).offset().left - ink.width() / 2;
      y = e.pageY - $(this).offset().top - ink.height() / 2;
      ink.css({
        top: y + 'px',
        left: x + 'px'
      }).addClass('animate-ink');
    })
    }
    });
    $.fn[pluginName] = function(options) {
    this.each(function() {
    if (!$.data(this, 'plugin_' + pluginName)) {
      $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
    }
    });
    return this;
    }
    })(jQuery, window, document);
    
    jQuery('#jquery-accordion-menu').jqueryAccordionMenu();
    


  /* FUENTE: http://cssmenumaker.com/menu/flat-accordion-menu */
(function($){
  $(document).ready(function(){
  
  $('#cssmenu li.active').addClass('open').children('ul').show();
    $('#cssmenu li.has-sub>a').on('click', function(){
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(200);
      }
      else {
        element.addClass('open');
        element.children('ul').slideDown(200);
        element.siblings('li').children('ul').slideUp(200);
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(200);
      }
    });
  
  });
  })(jQuery);
  










  document.getElementsByTagName("body").style.backgroundColor = 'rgb(224,224,224)';

  