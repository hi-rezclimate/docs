var getURL = function (_params) {
  var endpoint = 'http://api.hi-rezclimate.org/amsr2.py/';
  var params = _params || {
    category: 'sst',
    lat: '35.32',
    lng: '138.99',
    date: '2014-04-10',
    range: '0.5'
  };
  endpoint += params['category'] + '?';
  delete params['category'];
  Object.keys(params).forEach(function(key) {
    endpoint += key + '=' + params[key] + '&';
  });

  return endpoint.slice(0, -1);
};

$('#demo').on('click', function () {
  var params = {
    category: 'sst',
    lat: '35.32',
    lng: '138.99',
    date: '2014-04-10',
    range: '0.5'
  };
  Object.keys(params).forEach(function(key) {
    $('#' + key).val(params[key]);
  });
});

$('#send').on('click', function () {
  $('#json').fadeOut('slow', function () {
    $.get(getURL(), function(data){
      var json = JSON.stringify(data.values, null, 4);
      $('#json').html(json).fadeIn('slow');
    });
  });
});
