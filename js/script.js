// Тест-опросник - вызывающийся при клике на блок с голосованием
(function() {
    // Переменные, вопросы, ответы
    var questions = [{
      question: "Как вы нашли наш сайт?",
      choices: ["Через видео-рекламу", "В социальных сетях", "Случайно", "На каком-то форуме", "По реферальной ссылке"],
      correctAnswer: "Случайно"
    }, {
      question: "Какие новые категории вы бы хотели видеть на нашем сайте?",
      choices: ["Стримы", "Промокоды на игры", "Бесплатные раздачи аккаунтов", "Интеграция торговой площадки", "Расширенные настройки для профиля"],
      correctAnswer: "Стримы"
    }, {
      question: "Как вы оцениваете общий дизайн сайта?",
      choices: ["Сногсшибательно", "Отлично", "Средне", "Удовлетворительно", "Плохо"],
      correctAnswer: "Сногсшибательно"
    }, {
      question: "Насколько часто вы испытывали какие-либо проблемы с покупкой премиума?",
      choices: ["Часто", "Редко", "Никогда"],
      correctAnswer: "Никогда"
    }, {
      question: "Насколько вы оцениваете общий функционал сайта?",
      choices: ["На 100%", "На 80%", "На 60%", "На 50%", "На 40%"],
      correctAnswer: "На 100%"
    }];
    
    var questionCounter = 0; //Отслеживает номер вопроса
    var selections = []; //Массив, содержащий выбор пользователя
    var quiz = $('#quiz'); //Название объекта для теста
    
    // Отобразить первоначальный вопрос
    displayNext();
    
    // Обработчик щелчка для кнопки «Далее»
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Приостановить прослушивание кликов во время анимации исчезновения
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // Если выбор пользователя не выбран, прогресс останавливается.
      if (isNaN(selections[questionCounter])) {
        alert('Пожалуйста выберите вариант ответа!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Обработчик щелчка для кнопки «предыдущий»
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Обработчик кликов для кнопки «Начать сначала»
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Анимирует кнопки при наведении
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Создает и возвращает элемент div, содержащий вопросы и
    // варианты ответов
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Вопрос ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Создает список вариантов ответа в качестве радио-кнопок.
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Считывает выбор пользователя и помещает значение в массив.
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Отображает следующий запрошенный элемент
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Управляет отображением кнопки «предыдущий»
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Вычисляет оценку и возвращает элемент абзаца для отображения.
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('Спасибо за прохождение теста ' + ' ваш отзыв учтен.');
      return score;
    }
  })();

// Скрипт прокрутки для случайной игры
$('.tombola').mouseenter(function(){
    var rotation = [1440,1485,1530,1575,1620,1665,1710,1755];
    var pick = Math.floor(Math.random()*8);
    var spin = rotation[pick];
   $('.tombola').css({'transform':'rotateX('+spin+'deg) translateZ(-480px)'});
  });
  
  $('.tombola').mouseleave(function(){
    $('.tombola').css({'transform':'rotateX(0deg) translateZ(-480px)'});
  });

// Скрипт музыкального плеера
$(function () {
    var playerTrack = $("#player-track"),
      bgArtwork = $("#bg-artwork"),
      bgArtworkUrl,
      albumName = $("#album-name"),
      trackName = $("#track-name"),
      albumArt = $("#album-art"),
      sArea = $("#s-area"),
      seekBar = $("#seek-bar"),
      trackTime = $("#track-time"),
      insTime = $("#ins-time"),
      sHover = $("#s-hover"),
      playPauseButton = $("#play-pause-button"),
      i = playPauseButton.find("i"),
      tProgress = $("#current-time"),
      tTime = $("#track-length"),
      seekT,
      seekLoc,
      seekBarPos,
      cM,
      ctMinutes,
      ctSeconds,
      curMinutes,
      curSeconds,
      durMinutes,
      durSeconds,
      playProgress,
      bTime,
      nTime = 0,
      buffInterval = null,
      tFlag = false,
      // Сюда можно закинуть еще переменных и мп3
      albums = [
        "Cyberpunk 2077",
        "Dying Light",
        "Elden Ring",
        "Atomic Heart",
        "DOOM"
      ],
      trackNames = [
        "Cyberpunk 2077 - The Rebel Path",
        "Dying Light - Main Menu Theme",
        "Elden Ring - Leyndell Royal Capital",
        "Atomic Heart - Komarovo",
        "DOOM - At Doom's Gate"
      ],
      albumArtworks = ["_1", "_2", "_3", "_4", "_5"],
      trackUrl = [
        "/music/Cyberpunk-2077-The-Rebel-Path.mp3",
        "/music/Dying-Light-Main-Menu-Theme.mp3",
        "/music/Elden-Ring-OST-Leyndell_-Royal-Capital.mp3",
        "/music/Atomic-Heart-Komarovo.mp3",
        "/music/At-Doom_s-Gate.mp3"
      ],
      playPreviousTrackButton = $("#play-previous"),
      playNextTrackButton = $("#play-next"),
      currIndex = -1;
  
      // Функция паузы в плеере
    function playPause() {
      setTimeout(function () {
        if (audio.paused) {
          playerTrack.addClass("active");
          albumArt.addClass("active");
          checkBuffering();
          i.attr("class", "fas fa-pause");
          audio.play();
        } else {
          playerTrack.removeClass("active");
          albumArt.removeClass("active");
          clearInterval(buffInterval);
          albumArt.removeClass("buffering");
          i.attr("class", "fas fa-play");
          audio.pause();
        }
      }, 300);
    }
  
    function showHover(event) {
      seekBarPos = sArea.offset();
      seekT = event.clientX - seekBarPos.left;
      seekLoc = audio.duration * (seekT / sArea.outerWidth());
  
      sHover.width(seekT);
  
      cM = seekLoc / 60;
  
      ctMinutes = Math.floor(cM);
      ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
  
      if (ctMinutes < 0 || ctSeconds < 0) return;
  
      if (ctMinutes < 0 || ctSeconds < 0) return;
  
      if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
      if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;
  
      if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
      else insTime.text(ctMinutes + ":" + ctSeconds);
  
      insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
    }
  
    function hideHover() {
      sHover.width(0);
      insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
    }
  
    function playFromClickedPos() {
      audio.currentTime = seekLoc;
      seekBar.width(seekT);
      hideHover();
    }
  
    function updateCurrTime() {
      nTime = new Date();
      nTime = nTime.getTime();
  
      if (!tFlag) {
        tFlag = true;
        trackTime.addClass("active");
      }
  
      curMinutes = Math.floor(audio.currentTime / 60);
      curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
  
      durMinutes = Math.floor(audio.duration / 60);
      durSeconds = Math.floor(audio.duration - durMinutes * 60);
  
      playProgress = (audio.currentTime / audio.duration) * 100;
  
      if (curMinutes < 10) curMinutes = "0" + curMinutes;
      if (curSeconds < 10) curSeconds = "0" + curSeconds;
  
      if (durMinutes < 10) durMinutes = "0" + durMinutes;
      if (durSeconds < 10) durSeconds = "0" + durSeconds;
  
      if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
      else tProgress.text(curMinutes + ":" + curSeconds);
  
      if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
      else tTime.text(durMinutes + ":" + durSeconds);
  
      if (
        isNaN(curMinutes) ||
        isNaN(curSeconds) ||
        isNaN(durMinutes) ||
        isNaN(durSeconds)
      )
        trackTime.removeClass("active");
      else trackTime.addClass("active");
  
      seekBar.width(playProgress + "%");
  
      if (playProgress == 100) {
        i.attr("class", "fa fa-play");
        seekBar.width(0);
        tProgress.text("00:00");
        albumArt.removeClass("buffering").removeClass("active");
        clearInterval(buffInterval);
      }
    }
  
    function checkBuffering() {
      clearInterval(buffInterval);
      buffInterval = setInterval(function () {
        if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
        else albumArt.removeClass("buffering");
  
        bTime = new Date();
        bTime = bTime.getTime();
      }, 100);
    }
  
    // Функция из куска плеера - выбор аудио
    function selectTrack(flag) {
      if (flag == 0 || flag == 1) ++currIndex;
      else --currIndex;
  
      if (currIndex > -1 && currIndex < albumArtworks.length) {
        if (flag == 0) i.attr("class", "fa fa-play");
        else {
          albumArt.removeClass("buffering");
          i.attr("class", "fa fa-pause");
        }
  
        seekBar.width(0);
        trackTime.removeClass("active");
        tProgress.text("00:00");
        tTime.text("00:00");
  
        currAlbum = albums[currIndex];
        currTrackName = trackNames[currIndex];
        currArtwork = albumArtworks[currIndex];
  
        audio.src = trackUrl[currIndex];
  
        nTime = 0;
        bTime = new Date();
        bTime = bTime.getTime();
  
        if (flag != 0) {
          audio.play();
          playerTrack.addClass("active");
          albumArt.addClass("active");
  
          clearInterval(buffInterval);
          checkBuffering();
        }
  
        albumName.text(currAlbum);
        trackName.text(currTrackName);
        albumArt.find("img.active").removeClass("active");
        $("#" + currArtwork).addClass("active");
  
        bgArtworkUrl = $("#" + currArtwork).attr("src");
  
        bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
      } else {
        if (flag == 0 || flag == 1) --currIndex;
        else ++currIndex;
      }
    }
  
    function initPlayer() {
      audio = new Audio();
  
      selectTrack(0);
  
      audio.loop = false;
  
      playPauseButton.on("click", playPause);
  
      sArea.mousemove(function (event) {
        showHover(event);
      });
  
      sArea.mouseout(hideHover);
  
      sArea.on("click", playFromClickedPos);
  
      $(audio).on("timeupdate", updateCurrTime);
  
      playPreviousTrackButton.on("click", function () {
        selectTrack(-1);
      });
      playNextTrackButton.on("click", function () {
        selectTrack(1);
      });
    }
  
    initPlayer();
  });
  