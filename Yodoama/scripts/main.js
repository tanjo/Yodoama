(function(global) {
  'use strict';

  function showRealPrice() {
    if (document.getElementById("js_scl_unitPrice") == null) {
      return;
    }
    var price = parseInt(document.getElementById("js_scl_unitPrice").innerText.match(/[\d,]+/)[0].replace(/,/, ''));
    if (isNaN(price)) {
      return;
    }
    var point = parseInt(document.getElementById("js_scl_pointValue").innerText.match(/[\d,]+/)[0].replace(/,/, ''));

    var result = price - point + "";
    result = result.split(/(?=(?:\d{3})+$)/).join();

    var text = document.createTextNode("￥" + result);

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.appendChild(document.createTextNode("実質価格："));
    var td = document.createElement('td');
    td.className = "red fs16 alignM";
    var strong = document.createElement("strong");
    td.appendChild(strong);
    strong.appendChild(text);

    var products_maintitle = document.getElementById("products_maintitle").innerText;
    var split_value = products_maintitle.split("\n");
    var products_maintitle;
    if (split_value.length > 1) {
      products_maintitle = split_value[1];
    } else {
      products_maintitle = split_value[0];
    }
    var url = "http://www.amazon.co.jp/gp/search?ie=UTF8&camp=247&creative=1211&index=aps&keywords=" + encodeURIComponent(products_maintitle) + "&linkCode=ur2&tag=infirmaria112-22";

    var a = document.createElement('a');
    a.href = url;
    a.target = "_blank";

    td.appendChild(document.createTextNode(" "));

    td.appendChild(a);
    a.appendChild(document.createTextNode("Amazonで探す"));

    tr.appendChild(th);
    tr.appendChild(td);

    var js_deliveryPoint = document.getElementById('js_deliveryPoint');

    var tbody = js_deliveryPoint.parentElement;

    tbody.insertBefore(tr, js_deliveryPoint);
  }

  showRealPrice();

})(this.self || global);
