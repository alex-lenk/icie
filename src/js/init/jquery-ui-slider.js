$(function () {
    var mse2_number_slider = $(".mse2_number_slider"),
        minCost = $("#minCost"),
        maxCost = $("#maxCost");

    mse2_number_slider.slider({
        range: true,
        min: 50,
        max: 99000,
        values: [50, 99000],
        stop: function (event, ui) {
            minCost.val(mse2_number_slider.slider("values", 0));
            maxCost.val(mse2_number_slider.slider("values", 1));

        },
        slide: function (event, ui) {
            minCost.val(mse2_number_slider.slider("values", 0));
            maxCost.val(mse2_number_slider.slider("values", 1));
        }
    });
});


var mse2_number_slider = $(".mse2_number_slider"),
    minCost = $("#minCost"),
    maxCost = $("#maxCost");

minCost.change(function () {
    var value1 = minCost.val();
    var value2 = maxCost.val();

    if (parseInt(value1) > parseInt(value2)) {
        value1 = value2;
        minCost.val(value1);
    }
    mse2_number_slider.slider("values", 0, value1);
});


maxCost.change(function () {
    var value1 = minCost.val();
    var value2 = maxCost.val();

    if (value2 > 50) {
        value2 = 50;
        maxCost.val(990000)
    }

    if (parseInt(value1) > parseInt(value2)) {
        value2 = value1;
        maxCost.val(value2);
    }
    mse2_number_slider.slider("values", 1, value2);
});
