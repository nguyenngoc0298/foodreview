
var arr = [
    {
        name: "Crab",
        info: "Nutritional value: Fresh grapes provide nutrients, relieve fatigue immediately. Studies have shown that fresh grapes contain vitamin A, C, calcium and iron to help maintain good health, good for the heart, prevent diabetes progress. As apples, American grapes, Australian ... are preserved in a special cold environment since picking, no preservatives and other health hazards.",
        image: "img/cua.jpg",
    },
    {
        name: "Mackerel",
        info: "Nutritional value: Fresh grapes provide nutrients, relieve fatigue immediately. Studies have shown that fresh grapes contain vitamin A, C, calcium and iron to help maintain good health, good for the heart, prevent diabetes progress. As apples, American grapes, Australian ... are preserved in a special cold environment since picking, no preservatives and other health hazards.",
        image: "img/cathu.jpg",
    },
    {
        name: "Squid",
        info: "Nutritional value: Fresh grapes provide nutrients, relieve fatigue immediately. Studies have shown that fresh grapes contain vitamin A, C, calcium and iron to help maintain good health, good for the heart, prevent diabetes progress. As apples, American grapes, Australian ... are preserved in a special cold environment since picking, no preservatives and other health hazards.",
        image: "img/muc.jpg",
    },
    {
        name: "Shrimp",
        info: "Nutritional value: Fresh grapes provide nutrients, relieve fatigue immediately. Studies have shown that fresh grapes contain vitamin A, C, calcium and iron to help maintain good health, good for the heart, prevent diabetes progress. As apples, American grapes, Australian ... are preserved in a special cold environment since picking, no preservatives and other health hazards.",
        image: "img/tom.jpg",
    },
    {
        name: "Mantis shrimp",
        info: "Nutritional value: Fresh grapes provide nutrients, relieve fatigue immediately. Studies have shown that fresh grapes contain vitamin A, C, calcium and iron to help maintain good health, good for the heart, prevent diabetes progress. As apples, American grapes, Australian ... are preserved in a special cold environment since picking, no preservatives and other health hazards.",
        image: "img/tomtich.jpg",
    },
    {
        name: "Beef",
        info: "Nutritional value: Fresh grapes provide nutrients, relieve fatigue immediately. Studies have shown that fresh grapes contain vitamin A, C, calcium and iron to help maintain good health, good for the heart, prevent diabetes progress. As apples, American grapes, Australian ... are preserved in a special cold environment since picking, no preservatives and other health hazards.",
        image: "img/thitbo.jpg",
    },
];

function findProduct(tenanh)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].image == tenanh)
            return i;
    }
    return -1;
}

function show()
{
    //lay object co event
    var obj = window.event.target;
    var tenanh = obj.src;
    tenanh = tenanh.substring(tenanh.lastIndexOf("/") + 1);

    var kq = findProduct("img/" + tenanh);
    if (kq >= 0)//tim thay
    {
        var thehinh = document.getElementById("hinh");
        thehinh.src = arr[kq].image;
        thehinh.setAttribute("alt", arr[kq].name);

        var div = document.getElementById("infor");
        div.innerHTML = "<br>Name: " + arr[kq].name;
        div.innerHTML += "<br><br>Information: " + arr[kq].info;
        var div_detail = document.getElementById("detail");
        div_detail.style.display = "block";
    }
}
function display()
{
    var div_chinh = document.getElementById("dssp");

    for (var i = 0; i < arr.length; i++)
    {
        var div_con = document.createElement("div");
        var anh = document.createElement("img");
        anh.src = arr[i].image;
        anh.addEventListener("click", show);//gan code ham show vao trong su kien onclick cua anh


        var p1 = document.createElement("p");
        p1.innerHTML = arr[i].name;

        div_con.appendChild(anh);
        div_con.appendChild(p1);
        div_chinh.appendChild(div_con);
    }
}

function closeDetail()
{
    var div_detail = document.getElementById("detail");
    div_detail.style.display = "none";
}

