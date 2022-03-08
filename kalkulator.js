function placeholdername1(){
    let frm = document.getElementById("formulir");
    frm.a1.value="";
}

function placeholdername2(){
    let frm = document.getElementById("formulir");
    frm.a2.value="";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
    frm.penambahan.value = "";
    frm.pengurangan.value = "";
    frm.perkalian.value = "";
    frm.pembagian.value = "";
    frm.perpangkatan.value = "";


}

function penjumlahan(){
        let frm = document.getElementById("formulir");
        a1= Number(formulir.a1.value);
        a2= Number(formulir.a2.value);

        if (isNaN(a1) || a1 == '') {
            alert("harap isi data berupa angka");
        } else if (isNaN(a2) || a2 == '') {
            alert("harap isi data berupa angka");
        } else {
           
        let total = a2 + a1;
        frm.hasil.value = total;      
    }
}

function perkurangan(){
        let frm = document.getElementById("formulir");
        a1= Number(formulir.a1.value);
        a2= Number(formulir.a2.value);

        if (isNaN(a1) || a1 == '') {
            alert("harap isi data berupa angka");
        } else if (isNaN(a2) || a2 == '') {
            alert("harap isi data berupa angka");
        } else {
        let total = a1 - a2;
        frm.hasil.value = total;      

    }
}

    function kali(){
        let frm = document.getElementById("formulir");
        a1= Number(formulir.a1.value);
        a2= Number(formulir.a2.value);

        if (isNaN(a1) || a1 == '') {
            alert("harap isi data berupa angka");
        } else if (isNaN(a2) || a2 == '') {
            alert("harap isi data berupa angka");
        } else {

        let total = a1*a2;
        frm.hasil.value = total;      

    }
    }
    function bagi(){
        let frm = document.getElementById("formulir");
        a1= Number(formulir.a1.value);
        a2= Number(formulir.a2.value);

        if (isNaN(a1) || a1 == '') {
            alert("harap isi data berupa angka");
        } else if (isNaN(a2) || a2 == '') {
            alert("harap isi data berupa angka");
        } else {
        let total = a1/a2;
        frm.hasil.value = total;      

    }
}

    function pangkat(){
        let frm = document.getElementById("formulir");
        a1= Number(formulir.a1.value);
        a2= Number(formulir.a2.value);

        if (isNaN(a1) || a1 == '') {
            alert("harap isi data berupa angka");
        } else if (isNaN(a2) || a2 == '') {
            alert("harap isi data berupa angka");
        } else {

        let total = Math.pow(a1,a2);
        frm.hasil.value = total;

    }
}
