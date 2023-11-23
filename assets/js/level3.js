const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }

        });

    }
}


function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}

function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    
        if (concat.toUpperCase() == "TML" && tipe == "t1") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "HOLIS" && tipe == "t2") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "ERMINAL" && tipe == "t3") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "IBUHAN" && tipe == "t4") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "BERKAH" && tipe == "d1") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "ACUR" && tipe == "d2") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "AMET" && tipe == "d3") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "" && tipe == "d4") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "" && tipe == "d5") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        } else if (concat.toUpperCase() == "" && tipe == "d6") {
            alert("Selamat Jawaban Anda Benar!");
            tableRepeat(tabel);
            return;
        }
        
  


    }

function tableRepeat(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
       
    }
}

$(document).ready(function(){
    $(".target").hide();
      
      $("#toggle").click(function(){
        $(".target").show();
      });

      $("#toggleHide").click(function(){
        $(".target").hide();
      });
});