var selectCustom = $('select'),
    selectCustomDecor = '.select-custom-decor',
    optionSelected = 'option:selected';

selectCustom.each(function () {
    $(this).siblings(selectCustomDecor).text($(this).children(optionSelected).text());
});
selectCustom.change(function () {
    $(this).siblings(selectCustomDecor).text($(this).children(optionSelected).text());
});
