// ↓↓ 算JSON行數 ↓↓
function countJsonAmount(json) {
    var prop;
    var propCount = 0;

    for (prop in json) {
        propCount++;
    }
    return propCount;
}
// ↓↓ 點物料成本 ↓↓
function getCostOfRawMaterial() {
    $.ajax({
        type: 'POST',
        url: 'get-cost-of-raw-material.php',
        data: '',
        beforeSend:function(){},
        success : function(data) {
            // data = data.replace("<!-- chansi5_chansing -->",'');
            var result = $.parseJSON(data);
            var amount = countJsonAmount(result);
            html = ''

            for (var i = 1; i <= amount; i++) {
                var name = result[i]['name'];
                var gross_weight = result[i]['gross_weight'];
                var net_weight = result[i]['net_weight'];
                var weight_persent = result[i]['weight_persent'];
                var unit = result[i]['unit'];
                var cost = result[i]['cost'];
                var unit_cost = result[i]['unit_cost'];
                var kind = result[i]['kind'];
                var notes = result[i]['notes'];
                html += '<div class="col-12 col-md-6 col-lg-4">';
                html += '<div class="card">';
                html += '<div class="card-body row">';
                html += '<div class="col-10">';
                html += '<h5 class="card-title material-cost">' + name + '</h5>';
                html += '<h6 class="card-subtitle">單位成本：每' + unit + unit_cost + '元</h6>';
                html += '<div class="card-body">';
                html += '<div class="card-text">';
                html += '進貨成本：' + cost + '元';
                html += '</div>';
                html += '<div class="card-text">';
                html += gross_weight ? ('進貨重量：' + gross_weight + '克') : '';
                html += '</div>';
                html += '<div class="card-text">';
                html += net_weight ? ('淨材料重：' + net_weight + '克') : '';
                html += '</div>';
                html += '<div class="card-text">';
                html += weight_persent ? ('淨料率：' + weight_persent) : '';
                html += '</div>';
                html += '</div>';
                html += '<p class="card-text">備註：';
                html += notes ? notes : '無';
                html += '</p></div>';
                html += '<div class="material-tool col-2 d-flex align-content-between flex-wrap" data-bs-toggle="modal" data-bs-target="#add-on-modal"><span class="material-card-icon"><ion-icon name="create-outline"></ion-icon></span><span class="material-card-icon"><ion-icon name="trash-outline"></ion-icon></span><span class="material-card-icon"><ion-icon name="analytics-outline"></ion-icon></span></div>';
                html += '</div></div></div>'
            }
            $('#main').html(html);
            $('#main').addClass('content-exist');
            },
            error:function(xhr){},
            complete:function(){ }
    });
}

function materialCostPage() {
    const searching_bar = '<div class="col-lg-4 col-8 align-self-center"><div class="input-group mb-3"><input id="material-searching-bar" type="text" class="form-control" placeholder="搜尋" aria-label="searching" aria-describedby="basic-addon1"><a class="searching-button" href="javascript:void(0);"><ion-icon name="search-outline"></ion-icon></a></div></div><div class="col-1"><a class="add-new-button" href="javascript:void(0);"><ion-icon name="add-circle"></ion-icon></a></div>'
    $('#searching').html(searching_bar);
    $('#searching').addClass('content-exist');

    getCostOfRawMaterial();
}

function productCostPage() {
    $('#main').html('<div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</div>');
    $('#main').addClass('content-exist');
}