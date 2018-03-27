module.exports = function(templateParams) {
    var _cssList = ['common', 'gettingstarted_index'];
    var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, _cssList);
    var _html = "{% extends '../../common/pages/layout.html' %} " +
        "{% block title %}[[title]]{% endblock %}" +
        "{% block styles %} " +
        webAssetsHelp.styles +
        "{% endblock %}" +
        '{% block content %}' +
        '<section id="gettingstarted-container">'+
        '{% include "../../../widgets/titlebanner/titlebanner.html"%}'+
        '<div class="container bs-docs-container">'+
            '<div class="row" >'+
                '<div class="col-md-3">'+
                    '{% include "../../../widgets/titlelist/titlelist.html" %}' +
                '</div>'+
                '<div class="col-md-9" role="main">'+
                    '{% include "../../../widgets/titlemain/titlemain.html" %}'
                '</div>'
            '</div>' +
        '</div>' +
        '</section>'+
        '{% endblock %}' +
        '{% block script%}' +
        webAssetsHelp.scripts +
        '{% endblock%}';
    return _html;
};
