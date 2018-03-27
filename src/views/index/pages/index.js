module.exports = function(templateParams) {
    var _cssList = ['common', 'home_index'];
    var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, _cssList);
    var _html = "{% extends '../../common/pages/layout.html' %} " +
        "{% block title %}[[title]]{% endblock %}" +
        "{% block styles %} " +
        webAssetsHelp.styles +
        "{% endblock %}" +
        '{% block content %}' +
        '<section id="index-container">'+
        '{% include "../../../widgets/homebanner/homebanner.html"%}'+
        '{% include "../../../widgets/homemain/homemain.html"%}' +
        '</section>'
        '{% endblock %}' +
        '{% block script%}' +
        webAssetsHelp.scripts +
        '{% endblock%}';
    return _html;
};
