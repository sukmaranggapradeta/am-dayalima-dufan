(this["webpackJsonpdufan-treasure"]=this["webpackJsonpdufan-treasure"]||[]).push([[0],{37:function(a,e,t){a.exports=t(93)},42:function(a,e,t){},93:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),r=t(17),o=t.n(r),m=(t(42),t(22)),l=t(32),s=t.n(l),c=t(5),u=t(18),d=t.n(u);t(44);d.a.initializeApp({apiKey:"AIzaSyDHiGWcwwpKGNWNOIZX5iMYjaDknYIpFPw",authDomain:"dufan-am2020.firebaseapp.com",databaseURL:"https://dufan-am2020.firebaseio.com",projectId:"dufan-am2020",storageBucket:"dufan-am2020.appspot.com",messagingSenderId:"264789428199",appId:"1:264789428199:web:c48b0e8f0dc463cfa9df42"});var p=d.a.firestore(),g=t(10),f=t.n(g),h=t(8),y=t(9);function b(){var a=Object(h.a)(['\n  /* font-family: "Press Start 2P"; */\n  /* font-family: "Indie Flower", cursive; */\n  /* font-family: "Amatic SC", cursive; */\n  /* font-family: "Cinzel", serif; */\n  font-family: "Mountains of Christmas", cursive;\n  /* font-family: "Cinzel Decorative", cursive; */\n  /* font-family: "Mansalva", cursive; */\n  /* font-family: "Megrim", cursive; */\n  /* font-family: "Bungee Shade", cursive; */\n  /* font-family: "Press Start 2P", cursive; */\n  font-size: 40px;\n']);return b=function(){return a},a}function k(){var a=Object(h.a)(["\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  border: solid 1.5px #e6e6e6;\n  background-color: #ffffff;\n  margin: 0;\n  opacity: 0.8;\n  width: 35px;\n  height: 0px;\n"]);return k=function(){return a},a}function E(){var a=Object(h.a)(["\n  margin: 4%;\n\n  .stone-width {\n    width: 50px;\n  }\n\n  .btn-logout {\n    border: solid 1px red;\n    border-radius: 50%;\n    width: 25px;\n    /* height: 20px; */\n  }\n"]);return E=function(){return a},a}var v=y.a.div(E()),w=y.a.div(k());y.a.div(b());function N(){var a=Object(h.a)(['\n  @import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,900&display=swap");\n  body,\n  html {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background: #4b4168;\n    color: #333;\n  }\n\n  .center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    z-index: 10;\n    font-family: "Red Hat Display", sans-serif;\n  }\n\n  .top3 {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    color: #4b4168;\n  }\n  .top3 .item {\n    box-sizing: border-box;\n    position: relative;\n    background: white;\n    width: 80%;\n    height: 12rem;\n    text-align: center;\n    padding: 2.8rem 0 0;\n    margin: 1rem 5px 2rem;\n    border-radius: 0.5rem;\n    -webkit-transform-origin: bottom;\n    transform-origin: bottom;\n    cursor: pointer;\n    transition: -webkit-transform 200ms ease-in-out;\n    transition: transform 200ms ease-in-out;\n    transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n    box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.1),\n      0 1rem 2rem -1rem rgba(0, 0, 0, 0.3);\n  }\n  .top3 .item .pic {\n    position: absolute;\n    top: -2rem;\n    left: 41%;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background-size: cover;\n    background-position: center;\n    margin-right: 1rem;\n    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2),\n      0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.3);\n  }\n  .top3 .item .pos {\n    font-weight: 900;\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n  }\n  .top3 .item .name {\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n  }\n  .top3 .item .score {\n    opacity: 0.5;\n  }\n  .top3 .item .score:after {\n    display: block;\n    content: "points";\n    opacity: 0.5;\n  }\n  .top3 .item.one {\n    width: 100%;\n    height: 13rem;\n    padding-top: 3.5rem;\n  }\n  .top3 .item.one .pic {\n    width: 75px;\n    height: 75px;\n    left: 41%;\n  }\n  .top3 .item:hover {\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  .list {\n    padding-left: 2rem;\n    margin: 0 auto;\n  }\n  .list .item {\n    position: relative;\n    display: flex;\n    align-items: center;\n    background: white;\n    height: 3rem;\n    border-radius: 4rem;\n    margin-bottom: 2rem;\n    background: #eaa786;\n    -webkit-transform-origin: left;\n    transform-origin: left;\n    cursor: pointer;\n    transition: -webkit-transform 200ms ease-in-out;\n    transition: transform 200ms ease-in-out;\n    transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n    box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.1),\n      0 1rem 2rem -1rem rgba(0, 0, 0, 0.3);\n  }\n  .list .item .pos {\n    font-weight: 900;\n    position: absolute;\n    left: -2rem;\n    text-align: center;\n    font-size: 1.25rem;\n    width: 1.5rem;\n    color: black;\n    opacity: 0.6;\n    transition: opacity 200ms ease-in-out;\n  }\n  .list .item .pic {\n    width: 4rem;\n    height: 4rem;\n    object-fit: cover;\n    border-radius: 50%;\n    background-size: cover;\n    background-position: center;\n    margin-right: 1rem;\n    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2),\n      0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.3);\n  }\n  .list .item .name {\n    flex-grow: 2;\n    flex-basis: 10rem;\n    font-size: 1rem;\n  }\n  .list .item .score {\n    margin-right: 1.5rem;\n    opacity: 0.5;\n  }\n  .list .item .score:after {\n    margin-right: 1rem;\n    content: "points";\n    opacity: 0.5;\n  }\n  .list .item:hover {\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n  .list .item:hover .pos {\n    opacity: 0.8;\n  }\n\n  /* IPAD / TABLET POTRAIT*/\n  @media (max-width: 768px) {\n    .top3 .item.one .pic {\n      left: 36%;\n    }\n    .top3 .item .pic {\n      left: 36%;\n    }\n  }\n\n  /* Mobile devices */\n  @media (max-width: 480px) {\n    .top3 .item .pic {\n      left: 20%;\n    }\n    .top3 .item.one .pic {\n      left: 20%;\n    }\n  }\n']);return N=function(){return a},a}var x=y.a.div(N()),S=t(6);var A=function(a){var e=a.dataTeam.filter((function(e){return e.teamName===a.player.nama})),t=i.a.createElement(x,{className:"one item"},i.a.createElement("div",{className:"pos"},"1"),i.a.createElement("div",null,i.a.createElement("img",{className:"pic",src:a.player.pic,alt:""})),i.a.createElement("div",{className:"name"},a.player.nama),i.a.createElement("div",{className:"score"},a.player.poin));return i.a.createElement(S.Modal,{header:"Team ".concat(a.player.nama),trigger:t},e.length>0&&e[0].member.map((function(a,e){return i.a.createElement("p",{key:e},e+1,". ",a)})))};var I=function(a){var e=a.dataTeam.filter((function(e){return e.teamName===a.player.nama})),t=i.a.createElement(x,{className:"two item"},i.a.createElement("div",{className:"pos"},"2"),i.a.createElement("div",null,i.a.createElement("img",{className:"pic",src:a.player.pic,alt:""})),i.a.createElement("div",{className:"name"},a.player.nama),i.a.createElement("div",{className:"score"},a.player.poin));return i.a.createElement(S.Modal,{header:"Team ".concat(a.player.nama),trigger:t},e.length>0&&e[0].member.map((function(a,e){return i.a.createElement("p",{key:e},e+1,". ",a)})))};var j=function(a){var e=a.dataTeam.filter((function(e){return e.teamName===a.player.nama})),t=i.a.createElement(x,{className:"three item"},i.a.createElement("div",{className:"pos"},"3"),i.a.createElement("div",null," ",i.a.createElement("img",{className:"pic",src:a.player.pic,alt:""})),i.a.createElement("div",{className:"name"},a.player.nama),i.a.createElement("div",{className:"score"},a.player.poin));return i.a.createElement(S.Modal,{header:"Team ".concat(a.player.nama),trigger:t},e.length>0&&e[0].member.map((function(a,e){return i.a.createElement("p",{key:e},e+1,". ",a)})))};var C=function(a){var e=a.dataTeam.filter((function(e){return e.teamName===a.player.nama})),t=i.a.createElement(x,null,i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"pos"},a.number?a.number:""),i.a.createElement("div",null," ",i.a.createElement("img",{className:"pic",src:a.player.pic,alt:""})),i.a.createElement("div",{className:"name"},a.player?a.player.nama:""),i.a.createElement("div",{className:"score"},a.player?a.player.poin:"")));return i.a.createElement(S.Modal,{header:"Team ".concat(a.player.nama),trigger:t},e.length>0&&e[0].member.map((function(a,e){return i.a.createElement("p",{key:e},e+1,". ",a)})))},T=[{no:1,teamName:"HUMANITY",member:["Heru Yuwono","Linda Umar","Imam Sayuti Ogiansyah","Linda Jayanti Agustini","Surachman","Fajar Hikmat Hidayat","Malinda","Talitha Hapsari Nurdijanti","Anita Pratanti Waworuntu","Rohely Safitri","Josandy Maha Putra","Hatta Triangga","Maharani Syahratu Kertapati","Aditya Vonan Mainzerino"]},{no:2,teamName:"SINCERITY",member:["Cicik Tri Meylany Istiningtyas","Audira Harsono","Padma Pionir Ryuputra","Mulyawan","Wanda Arista Dana Paramitha","Nurhadiyati","Salsabi Rolansyah","Ricky Hizkia Ferdianto","Fakhrisal Dedisurya","Christina Hartono","Mashudi","Vina Ganakin Pendit","Ery Putra Anindya Wibowo"]},{no:3,teamName:"VIRTUE",member:["Yosep Sahea","Sulistyawati Patricia","Oktiana Lestari - Lista","Yanuar Dwi Sasongko","Rafael","Astari Walidin","Kalista Dewi Adenis","Pandu Aditya Wirawan","Nurul Dwikarimah","Norinda Dwirahmanti","Ananto Abdurrahman","Ahmet ferdiansyah","Yuri Yogaswara","Apung Sumengkar"]},{no:4,teamName:"AFFECTION",member:["Yeni Yulianti","Primita Rahmani","Cut Nyak Inseun Faradena","Muhammad Hamdan Kautsar","M.A Ramadhan C. Salim","Darsono","Pujani Nadine Kamarwan","Ayatullah Syauqi Qasthalani","Dio Riandika","Gusti Ayu Ketut Vitha Adinda","Denny Eviany","Endah Susilaningtyas Afiff","Aditya Rikidaniel","Desey Irawati Saragih"]},{no:5,teamName:"UNDERSTANDING",member:["Syaiful","Sabaruddin","Felicia Maukar","Muhammad Auliya Rahman","Maria Dhamayanti","Linda Yanti","Amat Miftakhudin","Anindita Laksmiputri","Diyah Ambarwati","Erika Marlina","Rozan Anwar","Dara Larasati","Irri Fisher Nunut Napitupulu"]},{no:6,teamName:"PATIENCE",member:["Winartaulina","Maulydia","sari pitaloka","Rangga Antonio Novalisky","Trianasari Dhamayanti","Noviliantina","Adji Pradana","Diandra Krista Sasongko","Fariz Emirsyah Afiff","Dadan Sukma Saputra","Hani Hedianti","Hendra Iskandar Lubis","Shabrina Kuswardani","Ramadhany Yusuf"]},{no:7,teamName:"CHARITY",member:["soni wibisono","Boy Firmanto","Slamet Riadi","Niluh Putu Ayu Dewi Artalina","Rido Sandi Atmanto","Sekar Arum Cindardini","Karel Adiwardoyo","Rizki Utami","Kadiran","Andi Wijaya","Jeanne Agnes Tiur Mauli","Ricardo Irwan Rei","Nita Laurina Wibowo","Ridho Yulio Rahmadino","Ahmad Sahroji"]},{no:8,teamName:"TOLERANCE",member:["Ranessia","Novian Ade Chandra","Gavin Torinno Hardipura","Novy Fenycia","Imanuddin","Karina Amalia","Muhammad Luthfi Fauruza","Ismalia","Diptraya Pramandana Ratulangi","Rizka Setiyana","Devita Triana","Bambang Setiawan","Ketut Saguna Narayana","Duma Meividia Malaon","Meitriani Dian Utami"]},{no:9,teamName:"GRACE",member:["wesiana","Satio Pramono","Muhammad Gazimahdi","Indri Suseno","Dharma Novriansyah","Putri Rizki Virajati","Hasya Millatina","Revky Randa","Hilmawan","Aldira Gusana Meyer","Afda","Ahmad Wahyudi","Dini Damayanti Makmun","Rainier Gustav Ferdinand Turangan","Ario Bimo"]},{no:10,teamName:"SYMPATHY",member:["Diah Arum Witasari","Adinda Fudia Hanamici","Hilda Stiani","Hendri Syahputra","Ali Said","Muhammad Yusuf","Ulisari","Syarip Hidayat","Azka Merci Fauzia Lestarie","Sarwin","Dian Rosdiana","Jusni","Dicky Herlambang","Khansa Karima"]}];var D=function(a){return console.log("leaderboar",a),i.a.createElement(x,null,i.a.createElement("div",{className:""},i.a.createElement("div",{className:"top3"},a.players.map((function(a,e){return 1===e&&i.a.createElement(I,{key:e,player:a,dataTeam:T})})),a.players.map((function(a,e){return 0===e&&i.a.createElement(A,{key:e,player:a,dataTeam:T})})),a.players.map((function(a,e){return 2===e&&i.a.createElement(j,{key:e,player:a,dataTeam:T})}))),i.a.createElement("div",{className:"list"},a.players.map((function(a,e){return e>2&&i.a.createElement(C,{key:e,player:a,number:e+1,dataTeam:T})})))))};var M=function(){return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",borderRadius:"25px"}},i.a.createElement("img",{src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/Bean+Eater-1s-200px.svg",alt:""}))};var P=function(){return i.a.createElement("div",{style:{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}},i.a.createElement("img",{width:"90%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/congrat.gif",alt:""}))},R=[{id:1,lokasi:"Eco Park",posName:"Get Closer with Nature",clues:[{category:"Photo Challenge",mission:["Fotolah dibawah tanaman cinta. Dia di dekat unggas yang terkenal cantik (1 medal)","Keren banget foto di atas air! Burung jawa bisa kasih tau kamu lokasinya (1 medal)"]},{category:"Lets Get Fit Together",mission:["Carilah panitia yang berjaga di pos. Ia punya misi khusus untuk kamu! (1 medal)"]}]},{id:2,lokasi:"Pasar Seni",posName:"Get Closer with The Local Craftsman",clues:[{category:"Photo Challenge",mission:["GH 324 (1 medal)","Dikerubuti oleh serangga-serangga kecil yang membesar (1 medal)","Tertulis pada tanggal 2 Juli 1977 (1 medal)"]},{category:"Sharing Story",mission:["Carilah salah satu seniman dan mintalah dia bercerita tentang seninya & kisah hidupnya. Pastikan seluruh kelompok kamu tau ceritanya yaa. Jangan lupa berfoto! (1 medal)"]}]},{id:3,lokasi:"Halaman Ocean Dream",posName:"Get Closer with Your Aqua Friends",clues:[{category:"Photo Challenge",mission:["Aku adalah mamalia yang sangat pintar dan mempunyai sonar. Hitunglah ada berapa bentuk 3 Dimensi ku yang tersebar di halaman tempat ini. Jangan lupa berfoto bersamaku ya (1 medal)",'Berapakah total sampah plastik yang membentuk trio si "pintar", si "pinnipeda" dan si "hitam putih" (1 medal)']},{category:"Tebak Temanmu",mission:["Carilah panitia yang berjaga di pos. Ia punya misi khusus untuk kamu! (3 medal)"]}]},{id:4,lokasi:"Danau",posName:"Get United",clues:[{category:"Photo Challenge",mission:['Hitunglah berapa jumlah kata "KAMI" pada monumen putih. Jangan lupa berfoto! (1 medal)','Namaku unik, 6 huruf. Kata orang-orang jahil, namaku bisa jadi memiliki kepanjangan "Pasangan Soleha Labil" (1 medal)']},{category:"Berlayar Bersama",mission:["Naik kapal bersama seluruh anggota tim mu, berfotolah dengan background dan gaya terbaik menurut tim mu dan ceritakan ke panitia mengapa kalian memilih berfoto seperti itu! (1 medal)"]}]},{id:5,lokasi:"Mercure",posName:"Get to Know Your Kindness",clues:[{category:"Tell the Kindness",mission:["Dengan label yang sudah disediakan, tuliskanlah kebaikan-kebaikan yang sudah dilakukan oleh masing-masing anggotamu!"]},{category:"Team Photo",mission:["Dengan semua sudah memiliki label di tubuh, berfotolah bersama! :)"]}]}];var O=function(){var a=Object(n.useState)(""),e=Object(c.a)(a,2),t=e[0],r=e[1],o=Object(n.useState)(""),l=Object(c.a)(o,2),u=l[0],d=l[1],g=Object(n.useState)([]),h=Object(c.a)(g,2),y=h[0],b=h[1],k=Object(n.useState)(!1),E=Object(c.a)(k,2),N=E[0],x=E[1],S=Object(n.useState)(""),A=Object(c.a)(S,2),I=A[0],j=A[1],C=Object(n.useState)(!1),T=Object(c.a)(C,2),R=T[0],O=T[1],H=Object(n.useState)("orange"),F=Object(c.a)(H,2),B=F[0],L=F[1],K=Object(n.useState)(!1),Y=Object(c.a)(K,2),G=Y[0],W=Y[1],U=function(a,e){O(!0),p.collection("dufan-players").doc(a).get().then((function(t){console.log("findOne",t.data().poin),p.collection("dufan-players").doc(a).update({token:e,poin:t.data().poin+20,time:new Date}).then((function(a){console.log("updated"),O(!1),f.a.fire({position:"center",icon:"success",title:"Success Update Poin",showConfirmButton:!1,timer:1500})})).catch((function(a){console.error("Error createPM: ",a)}))})).catch((function(a){console.error("Error createPM: ",a)}))};return Object(n.useEffect)((function(){N&&y.length>0&&0===y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].poin&&L("orange"),N&&y.length>0&&20===y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].poin&&L("ungu"),N&&y.length>0&&40===y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].poin&&L("biru"),N&&y.length>0&&60===y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].poin&&L("hijau"),N&&y.length>0&&80===y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].poin&&L("merah"),N&&y.length>0&&100===y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].poin&&W(!0)}),[y,N]),Object(n.useEffect)((function(){O(!0),p.collection("dufan-players").orderBy("poin","desc").orderBy("time","asc").onSnapshot((function(a){var e=[];a.forEach((function(a){e.push(Object(m.a)({id:a.id},a.data()))})),b(e)}))}),[]),Object(n.useEffect)((function(){y.length>0&&O(!1)}),[y]),Object(n.useEffect)((function(){r(""),d("")}),[]),Object(n.useEffect)((function(){if(localStorage.getItem("dufanLogin")){console.log("players",y);for(var a=!1,e=0;e<y.length;e++)y[e].nama===localStorage.getItem("dufanName")&&(x(!0),a=!0);a||x(!1)}}),[y]),i.a.createElement("div",{className:"App"},i.a.createElement(v,null,N?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("img",{width:"25px",height:"25px",style:{borderRadius:"50%"},src:localStorage.getItem("dufanPic"),alt:""}),i.a.createElement("span",{style:{marginLeft:"10px"}},localStorage.getItem("dufanName"))),i.a.createElement("div",null,i.a.createElement("div",{className:"btn-logout",onClick:function(){return localStorage.removeItem("dufanLogin"),localStorage.removeItem("dufanId"),localStorage.removeItem("dufanPic"),localStorage.removeItem("dufanName"),r(""),d(""),x(!1),W(!1),void f.a.fire("Bye Heroes!","You Success Logout!","success")}},i.a.createElement("img",{width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/exit.svg",alt:""})))),!G&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("h3",{style:{fontFamily:"Megrim",marginBottom:"0px",marginTop:"0px"}},"Welcome Heroes")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},i.a.createElement("img",{style:{width:"100%",height:"100%"},src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/new_map1.png",alt:""}))),G&&i.a.createElement(P,null),!R&&!G&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement("div",{className:"stone-width"},i.a.createElement("img",{style:"orange"===B?{opacity:"1"}:{opacity:"0.4"},width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/orange.png",alt:""})),i.a.createElement(w,null),i.a.createElement("div",{className:"stone-width"},i.a.createElement("img",{style:"ungu"===B?{opacity:"1"}:{opacity:"0.4"},width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/ungu.png",alt:""})),i.a.createElement(w,null),i.a.createElement("div",{className:"stone-width"},i.a.createElement("img",{style:"biru"===B?{opacity:"1"}:{opacity:"0.4"},width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/biru.png",alt:""})),i.a.createElement(w,null),i.a.createElement("div",{className:"stone-width"},i.a.createElement("img",{style:"hijau"===B?{opacity:"1"}:{opacity:"0.4"},width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/hijau.png",alt:""})),i.a.createElement(w,null),i.a.createElement("div",{className:"stone-width"},i.a.createElement("img",{style:"merah"===B?{opacity:"1"}:{opacity:"0.4"},width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/merah.png",alt:""}))),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center"}},console.log(z(N&&y.length>0&&y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].urutan)),z(N&&y.length>0&&y.filter((function(a){return a.nama===localStorage.getItem("dufanName")}))[0].urutan).map((function(a,e){return i.a.createElement("div",{key:e},B===a.color&&i.a.createElement(i.a.Fragment,null," ",i.a.createElement("h5",null,i.a.createElement("i",{className:"material-icons"},"location_on"),'"',a.posName.toUpperCase(),'"'," "),a.clues.map((function(a,e){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("h6",{style:{textAlign:"left"}},e+1,". ",a.category),i.a.createElement("ul",{style:{marginLeft:"6%"}},a.mission.map((function(a,e){return i.a.createElement("li",{style:{textAlign:"left",listStyleType:"disc"},key:e}," ",a)}))))}))))})),i.a.createElement("div",{className:"input-field col s6",style:{marginBottom:"0px"}},i.a.createElement("i",{className:"material-icons prefix"},"confirmation_number"),i.a.createElement("input",{type:"text",value:I,placeholder:"Input Secret Key to unlock next...",onChange:function(a){return j(a.target.value.toUpperCase())}})),i.a.createElement("div",{style:{width:"125px"},onClick:function(){return function(){console.log("token",I);for(var a=!1,e=[],t=0;t<y.length;t++)if(y[t].nama===localStorage.getItem("dufanName"))for(var n=0;n<y[t].token.length;n++)y[t].token[n]===I?a=!0:e.push(y[t].token[n]);console.log(e),a?(U(localStorage.getItem("dufanId"),e),j("")):f.a.fire({icon:"warning",title:"Oops...",text:"Wrong key!!!"})}()}},i.a.createElement("img",{width:"100%",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/btnticket.png",alt:""})))),!R&&N&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("h3",{style:{fontFamily:"Megrim",marginBottom:"2 0px",marginTop:"30px"}},"LeaderBoard")))):i.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},i.a.createElement("img",{style:{width:"100%",height:"100%"},src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/new_map1.png",alt:""})),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},i.a.createElement("div",{className:"",style:{marginBottom:"0px"}},i.a.createElement("form",null,i.a.createElement("div",{className:""},i.a.createElement("div",{className:"input-field col s6"},i.a.createElement("i",{className:"material-icons prefix"},"account_circle"),i.a.createElement("input",{id:"icon_prefix",type:"text",value:t,onChange:function(a){return r(a.target.value.toUpperCase())}}),i.a.createElement("label",{htmlFor:"icon_prefix"},"Team Name")),i.a.createElement("div",{className:"input-field col s6"},i.a.createElement("i",{className:"material-icons prefix"},"vpn_key"),i.a.createElement("input",{id:"icon_telephone",type:"password",value:u,onChange:function(a){return d(a.target.value)}}),i.a.createElement("label",{htmlFor:"icon_telephone"},"Password")))))),i.a.createElement("div",{onClick:function(){return function(){var a;return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<y.length)){e.next=13;break}if(y[a].nama!==t||y[a].password!==u){e.next=10;break}return x(!0),localStorage.setItem("dufanLogin",!0),localStorage.setItem("dufanId",y[a].id),localStorage.setItem("dufanPic",y[a].pic),localStorage.setItem("dufanName",y[a].nama),f.a.fire({position:"center",icon:"success",title:"Welcome ".concat(t),showConfirmButton:!1,timer:1500}),e.abrupt("return",console.log("true"));case 10:a++,e.next=1;break;case 13:f.a.fire({icon:"error",title:"Oops...",text:"Team Name / Password Salah!"});case 14:case"end":return e.stop()}}))}()},style:{cursor:"pointer"}},i.a.createElement("img",{width:"150px",src:"https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/BUTN.png",alt:""}))),R&&N&&i.a.createElement(M,null),!R&&N&&i.a.createElement(D,{players:y}),i.a.createElement("div",{className:"footer-copyright center",style:{marginTop:"50px"}},i.a.createElement("div",{className:"container"},"\xa9 2020 by AM Team"))))};function z(a){var e=[],t=["orange","ungu","biru","hijau","merah"];return a.map((function(a,n){return e.push(Object(m.a)({},R[a-1],{color:t[n]}))})),e}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e98837c4.chunk.js.map