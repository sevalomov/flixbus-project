$(document).ready(function () {
  $("#myInput-do").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList-do li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#myInput-od").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList-od li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  var singleornot = true;

  $(function () {
    $('input[name="daterangepicker"]').daterangepicker({
      singleDatePicker: singleornot,
      autoApply: true,
      opens: 'center',
      startDate: moment(),
      locale: {
        format: 'M/DD ',
      }
    });
  });

});

$(document).ready(function () {


  $('#myInput-od').click(function () { $(".bg-block").removeClass("my-hide"); });
  $('#myInput-do').click(function () { $(".bg-block").removeClass("my-hide"); });
  $('#powrot').click(function () { $(".bg-block").removeClass("my-hide"); });
  $('#odjazd').click(function () { $(".bg-block").removeClass("my-hide"); });
  $('#my-drop-licz').click(function () { $(".bg-block").removeClass("my-hide"); });
  document.addEventListener("click", function (ev) {
    if (ev.target == document.querySelector('#myInput-od') || ev.target == document.querySelector('#myInput-do') || ev.target == document.querySelector('#odjazd') || ev.target == document.querySelector('#powrot') || ev.target == document.querySelector('#my-drop-licz'))
      return;
    $(".bg-block").addClass("my-hide");
  });
});

$(document).ready(function () {
  $('#change-city').click(function () {
    var $inputC = $("#myInput-od");
    var $inputD = $("#myInput-do");
    console.log($inputC);
    var temp = $inputC.val();
    $inputC.val($inputD.val());
    $inputD.val(temp);
  });
});

$('#myInput-od').focus(function (e) {
  var $self = $(this);
  $self.data('value-tmp', $self.attr('value'));
  $self.attr('value', '');
  $self.val('');
});
$('#myInput-od').blur(function (e) {
  var $self = $(this);
  $self.attr('value', $self.data('value-tmp'));
  $self.val($self.data('value-tmp'));
});

$('#myInput-do').focus(function (e) {
  var $self = $(this);
  $self.data('value-tmp', $self.attr('value'));
  $self.attr('value', '');
  $self.val('');
});
$('#myInput-do').blur(function (e) {
  var $self = $(this);
  $self.attr('value', $self.data('value-tmp'));
  $self.val($self.data('value-tmp'));
});



$(document).ready(function () {

  $('.switch-way-1').click(function () {
    $(".odjazd-powrot div:last").addClass("my-hide");
    $(".odjazd-powrot div:last").removeClass("my-show");
    $(".odjazd-powrot div:first").removeClass("dwainputy");
  });
  $('.switch-way-2').click(function () {
    $(".odjazd-powrot div:last").addClass("my-show");
    $(".odjazd-powrot div:last").removeClass("my-hide");
    $(".odjazd-powrot div:first").addClass("dwainputy");
  });

  $('#button-filter').click(function () {
    document.querySelector('.modal').setAttribute('data-click', 'button-filter');
    $('#filter-block > div').appendTo($('.modal-body'));
  });


  $('#mapClick1').click(function () {
    document.querySelector('.modal').setAttribute('data-click', 'mapClick1');
    //$('#map').clone().css('height','100%').appendTo('.modal-body');
    $('#map-back >').appendTo($('.modal-body'));
    $('#map').css('height', '100%');
    $('.modal-body > p').css('display', 'none');
    $('.modal-body > .full-map').css('display', 'none');
  });


  $('#mapClick2').click(function () {
    document.querySelector('.modal').setAttribute('data-click', 'mapClick2');
    $('#map-back-2 >').appendTo($('.modal-body'));
    $('#map-2').css('height', '100%');
    $('.modal-body > p').css('display', 'none');
    $('.modal-body > .full-map').css('display', 'none');
  });


});







$('.modal').on('hidden.bs.modal', function (event) {
  let clickType = document.querySelector('.modal').getAttribute('data-click');
  switch (clickType) {
    case 'button-filter':
      $('.modal-body > div').appendTo($('#filter-block'));
    case 'mapClick1':
      $('.modal-body >').appendTo($('#map-back'));
      $('#map-back > #map').css('height', '80px');
      $('#map-back > p').css('display', 'block');
      $('#map-back > .full-map').css('display', 'block');
    case 'mapClick2':
      $('.modal-body >').appendTo($('#map-back-2'));
      $('#map-back-2 > #map-2').css('height', '80px');
      $('#map-back-2 > p').css('display', 'block');
      $('#map-back-2 > .full-map').css('display', 'block');
      break;

  }
  document.querySelector('.modal').removeAttribute('data-click');
});








$("#myList-od .list-group-item ").on('click', function (event) {
  var $inputC = $("#myInput-od");
  var temp = event.target.innerHTML;
  var a = temp.split('<span>')[0];
  $inputC.attr('value', a);
  $inputC.attr('placeholder', a);
  $inputC.val(a);
});

$("#myList-do .list-group-item ").on('click', function (event) {
  var $inputC = $("#myInput-do");
  var temp = event.target.innerHTML;
  var a = temp.split('<span>')[0];
  $inputC.attr('value', a);
  $inputC.attr('placeholder', a);
  $inputC.val(a);
});




$("#slider-range, #slider-range-2").slider({
  range: true,
  min: 960,
  max: 1320,
  step: 30,
  values: [960, 1320],
  slide: function (e, ui) {
    var hours1 = Math.floor(ui.values[0] / 60);
    var minutes1 = ui.values[0] - (hours1 * 60);
    if (hours1.length == 1) hours1 = '0' + hours1;
    if (minutes1.length == 1) minutes1 = '0' + minutes1;
    if (minutes1 == 0) minutes1 = '00';
    if (hours1 >= 11) {
      if (hours1 == 11) {
        hours1 = hours1;
        minutes1 = minutes1 + "pm";
      } else {
        hours1 = hours1 - 11;
        minutes1 = minutes1 + "pm";
      }
    } else {
      hours1 = hours1;
      minutes1 = minutes1 + "am";
    }
    if (hours1 == 0) {
      hours1 = 11;
      minutes1 = minutes1;
    }
    console.log(this);
    //$('.slider-time').html(hours1 + '.' + minutes1);
    this.parentElement.parentElement.querySelector('.slider-time').innerHTML = hours1 + '.' + minutes1;
    var hours2 = Math.floor(ui.values[1] / 60);
    var minutes2 = ui.values[1] - (hours2 * 60);

    if (hours2.length == 1) hours2 = '0' + hours2;
    if (minutes2.length == 1) minutes2 = '0' + minutes2;
    if (minutes2 == 0) minutes2 = '00';
    if (hours2 >= 11) {
      if (hours2 == 11) {
        hours2 = hours2;
        minutes2 = minutes2 + "pm";
      } else {
        hours2 = hours2 - 11;
        minutes2 = minutes2 + "pm";
      }
    } else {
      hours2 = hours2;
      minutes2 = minutes2 + "pm";
    }

    //$('.slider-time2').html(hours2 + ':' + minutes2);
    this.parentElement.parentElement.querySelector('.slider-time2').innerHTML = hours2 + '.' + minutes2;
    $('.box').each(function () {
      var startTime = (hours1 + '.' + minutes1).replace(':', '').replace('pm', '');
      var endTime = (hours2 + '.' + minutes2).replace(':', '').replace('pm', '');
      //console.log('.box[data-start-time="' + startTime + '"]');

      var thisStartTime = $(this).data('start-time').replace(':', '');
      var thisEndTime = $(this).data('end-time').replace(':', '');
      //console.log('Selecting all events between ' + startTime + ' and ' + endTime);
      // skeleton key
      //console.log(thisStartTime + '<=' + endTime);
      if ((parseInt(thisEndTime) > parseInt(startTime)) && (parseInt(thisStartTime) < parseInt(endTime))) {
        $(this).show();
      } else {
        $(this).hide();
      }
      //
    });
  }
});
jQuery(document).ready(function () {
  // This button will increment the value
  $('[data-quantity="plus"]').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('data-field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $('[data-quantity="minus"]').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('data-field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});



$(".dropdown-menu").click(function (e) {
  e.stopPropagation();
});




'use strict';

// Map
var map = L.map('map', {
  center: [40.15, -77.25],
  zoom: 12,
});
var map2 = L.map('map-2', {
  center: [40.15, -77.25],
  zoom: 12,
});

// Open Street Map 
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);

var osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map2);
