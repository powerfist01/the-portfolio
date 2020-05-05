$(document).ready(function () {
  // MODAL
  var modalText = {
    weask: {
      title: 'weAsk',
      tag: 'CONNECT TO EXPERIENCED ONES.',
      detail:
        'Question and Answer portal for students regarding their small issues when they join a new college. Experienced ones can help the rest.',
      link: 'http://weask.herokuapp.com/',
      source: 'https://github.com/powerfist01/weAsk'
    },
    varta: {
      title: 'Varta',
      tag: 'INSTANT MESSAGING AND CHAT.',
      detail: 'Varta enables real-time, bidirectional and event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.',
      source: 'https://github.com/powerfist01/varta'
    },
    daily: {
      title: 'Daily Quoting',
      tag: 'SHARE YOUR THOUGHTS.',
      detail:
        'Progressive Web App deployed over Firebase and using Firebase Realtime database. Share your thoughts daily.',
      link: 'https://quoting-ninja.web.app/',
      source: 'https://github.com/powerfist01/Daily-Quoting'
    },
    iiitusports: {
      title: 'IIITU Sports',
      tag: 'IIIT UNA SPORTS WEBSITE.',
      detail: 'The Sports Website of IIIT Una.',
      link: 'https://iiitusports.herokuapp.com/',
      source: 'https://github.com/powerfist01/iiitusports'
    },
    bookcloud: {
      title: 'Book Cloud',
      tag: 'UPLOAD AND DOWNLOAD NOTES AND BOOKS.',
      detail: 'Simple portal in Flask and Sqlite3 to upload and download books.',
      source: 'https://github.com/powerfist01/Book-Cloud'
    },
    helloworld: {
      title: 'C / C++ Codes',
      tag: 'COMPETITIVE PROGRAMMING.',
      detail: 'Repository for most of my programming codes in C and C++ languages.',
      source: 'https://github.com/powerfist01/hello-world'
    },
    sparkmind: {
      title: 'Spark Your Mind',
      tag: 'WELCOME TO THE TRIVIA.',
      detail: 'Trivia website for option to add questions and do a quick quiz to know better abot any topic.',
      source: 'https://github.com/powerfist01/Spark-Your-Mind '
    },
    noteapp: {
      title: 'Note App',
      tag: 'SAVE ALL YOU NEED.',
      detail: 'Simple Flask app for you to take notes and save them for next time.',
      source: 'https://github.com/powerfist01/NoteApp'
    }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    $('#modal .button1')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].source)

    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
