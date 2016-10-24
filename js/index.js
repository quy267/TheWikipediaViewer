/**
 * Created by MyPC on 26/09/2016.
 */

var search = $('.search');
var result = $('.result');

search.keyup(function () {
    if (search.val() === '') {
        result.html('');
        return;
    }
    getResult()
});

var getResult = function () {
    return $.ajax({
        url: '//en.wikipedia.org/w/api.php',
        data: {
            action: 'query',
            list: 'search',
            srsearch: search.val(),
            format: 'json'
        },
        dataType: 'jsonp',
        success: function (x) {
            var html = '  <!-- result -->';

            x.query.search.map(function (w) {
                html += '    <div class="card card-block">';
                html += '      <h4 class="card-title">' + w.title + '</h4>';
                html += '        <div class="text-xs-left">';
                html += '          <p class="card-text">' + w.snippet + '</p> ';
                html += '           <a href="https://en.wikipedia.org/wiki/' + w.title + '"class="card-link">Link</a>';
                html += '        </div>';
                html += '    </div>';
            });

            result.html(html);
        }
    });
}




