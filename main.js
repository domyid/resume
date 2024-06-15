import {getValueRadio,setInner,onClick,hide,show,getValue} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";
import {get,postWithToken} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";


get("https://api.do.my.id/notif/ux/getlaporan/"+getHash(),runafterGet)

onClick("tombol",runOnRating);

function runafterGet(result){
    console.log(result);
    setInner("petugas",result.petugas);
    setInner("solusi",result.solusi);
    setInner("komentar",result.komentar);
}

function runOnRating(){
    let datarating={
        id:getHash(),
        rating:Number(getValueRadio("rating")),
        komentar:getValue("komentar")
    }
    setInner("feedback","Mohon tunggu sebentar data sedang dikirim");
    postWithToken("https://api.do.my.id/notif/ux/postrating","login",getCookie("login"),datarating,responseFunction);
}

function responseFunction(result){
    console.log(result);
    setInner("feedback","Risalah berhasil dikirim terima kasih. "+result.info);

}