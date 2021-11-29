const components = {};
components.homeScreen =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BONE</title>
    <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
   <div id="Logo" > <h1>Welcome to B1 class</h1></div>
   <div id="WholeClass">
      
   <div id="thanhngang">
       <div class="menu" id="home">Home</div>
       <div  class="menu" id="chat">Chat</div>
       <div  class="menu" id="gallery">Gallery</div>
       <div class="menu" id="schedule">Schedule</div>



   </div>


   <div id="To"><h2 style="text-align: center;"> Group 1 </h2>
        <h4  style="text-align: center;">Members</h4>
        <div class="ban">
            <div class="thanhvien"   style="width: 120px;" ><h5 class="theten" >Yên Hạnh </h5>   
            <img class="anhdaidien "https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/260489088_1074543056660586_1991535148912838968_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4zHYyc6TyAYAX9Q2Edo&tn=oB9FVPH0-dN7aMfq&_nc_ht=scontent.fhph1-3.fna&oh=b67bb20074da4f9a7596878cc6f5951c&oe=61AA34C7" alt=""></div>
            <div class="gioithieu" ><p>Lê Yên Hạnh <br></p> <p> Birth:30/11/2005 </div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Minh Phương</h5>
            <img class="anhdaidien" src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/260404545_401715704969252_4077216518665613809_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ovw-e3Ab9KQAX_HocaC&_nc_ht=scontent.fhph1-1.fna&oh=3c048bff698790e49968d828cd0a7059&oe=61A86BA6" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Minh Phương <br> Birth: 20/02/2005  </p></div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Nguyễn Hậu </h5>
            <img class="anhdaidien" src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/258235602_1007903136454844_2447816749979331706_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=P7ygv2Bso4wAX99rFEk&tn=oB9FVPH0-dN7aMfq&_nc_ht=scontent.fhph2-1.fna&oh=70fab698ca4192ea7f34e36daf5cb7c4&oe=61A9D7C6" alt=""></div>
            <div class="gioithieu3"><P>Nguyễn Thị Hậu <br> Birth: 02/08/2005</P></div>
        </div>


        <div class="ban">
            <div class="thanhvien"><h5 class="theten">Trương Thiện</h5>
            <img class="anhdaidien" src="../B1_Web_/IMG/anhthanhvien/262402990_291430122904135_2822240004441470897_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Trương Đức Thiện <br> Birth: 17/12/2005  </p></div>
            <div  class="thanhvien" ><h5 class="theten">Ngọc Duyên</h5>
            <img class="anhdaidien"  src="https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/259629178_1163732217693470_2178325955481720083_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=To2Z2R6ZicAAX9ci7Ll&_nc_ht=scontent.fhph1-2.fna&oh=da6092db1599fb8ffcffa5d9578ca5e7&oe=61A86521" alt=""></div>
            <div class="gioithieu2"><p>Trương Lê Ngọc Duyên <br> Birth: 10/02/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Ngọc Ánh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260857263_1012290559319015_3145646781814782878_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Lê Thị Ngọc Ánh <br> Birth: 18/03/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Thị Hà</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261274120_1083280915808888_4717254398421274066_n.jpg" alt=""></div>
            <div class="gioithieu4"><p>Phạm Thị Hà <br> Birth: 26/05/2005  </p></div>
        </div>

        <div class="ban">
            <div class="thanhvien"><h5 class="theten">Nguyễn Tùng</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260064812_1529001487463820_4374407283465472885_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Nguyễn Văn Tùng <br> Birth: 07/03/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Đình Anh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/" alt=""></div>
            <div class="gioithieu2"><p>Vũ Đình Anh <br> Birth: 22/10/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Minh Ánh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261859608_286233490083864_3051953573331645027_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Phạm Minh Ánh <br> Birth: 11/06/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Ngọc Huyền</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260668785_592997281948248_2772815120801560796_n.jpg" alt=""></div>
            <div class="gioithieu4"><p>Hoàng Thị Ngọc Huyền <br> Birth: 08/03/2005  </p></div>
        </div>

        <div class="ban">
            <div class="thanhvien" style="width: 120px;"><h5 class="theten"></h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/Black_colour.jpg" alt=""></div>
            <div class="gioithieu" ><p><br>   </p></div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Nguyễn Khánh</h5>
            <img class="anhdaidien"  src="../B1_web_/IMG/anhthanhvien/261328986_436588457845714_4112069340125445957_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Nguyễn Duy Khánh <br> Birth: 29/07/2005 </p></div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Đăng Dương</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261934628_1336202990150926_7284763493539931721_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Nguyễn Đăng Dương <br> Birth: 24/05/2005  </p></div>
        </div>

        <div class="ban">
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Xuân Trường</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261793445_478030306984011_1004420773151188178_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Bùi Xuân Trường <br> Birth: 20/06/2005 </p></div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Đức Hiếu</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Đức Hiếu <br> Birth: 14/01/2005 </p></div>

        </div>

        <div class="ban">
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Nguyên Vũ</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/249359268_536712231009166_7026775707875441761_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Đỗ Nguyên Anh Vũ <br> Birth: 28/09/2005  </p></div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Xuân Hải</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261815830_420868696338647_6894569316635634718_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Xuân Hải<br> Birth: 02/03/2005 </p></div>
        </div>
    </div>
    <div id="To"><h2  style="text-align: center;"> Group 2 </h2>
        <h4  style="text-align: center;">Members</h4>
        <div class="ban">
            <div class="thanhvien" ><h5 class="theten">Hoàng Phong</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/" alt=""></div>
            <div class="gioithieu" ><p>Dương Hoàng Phong <br> Birth: 13/10/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Tú Anh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261793096_1872352506284710_6835786697257573543_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Ngọc Tú Anh <br> Birth:29/04/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Ngô Phương</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/259951550_633956014307960_4875554515232511891_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Ngô Thị Phương <br> Birth: 14/07/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Khánh Huyền</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien//261157917_237951835100305_7270611722976563051_n.jpg" alt=""></div>
            <div class="gioithieu4"><p>Nguyễn Khánh Huyền<br> Birth: ??/??/2005 </p></div>
        </div>


        <div class="ban">
            <div class="thanhvien"><h5 class="theten">Trịnh Nhung</h5>
            <img class="anhdaidien" src="../IMG/" alt=""></div>
            <div class="gioithieu" ><p>Trịnh Thị Nhung <br> Birth: 15/04/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Hồng Liên</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260296419_3036259056642259_3431627266943644011_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Hồng Liên <br> Birth: 16/02/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Yến Nhi</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260074761_2694304484212274_9102422892868856205_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Nguyễn Yến Nhi<br> Birth: 10/2/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Thu Hà</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261454095_299061978625067_7635848206736476059_n.gif" alt=""></div>
            <div class="gioithieu4"><p>Phạm Thu Hà <br> Birth: 14/5/2005  </p></div>
        </div>

        <div class="ban">
            <div class="thanhvien"><h5 class="theten">Tuấn Hoàn</h5>    
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261238883_976534286543926_3579199679814162456_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Phạm Tuấn Hoàn <br> Birth: 21/08/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Trịnh Vinh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260525815_303628081661136_433270060348055259_n.gif" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Trí Vinh <br> Birth: 07/06/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Quang Minh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261178923_615021986612094_7413524943211614898_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Lê Quang Minh <br> Birth: 14/01/2005  </p></div>
            <div class="thanhvien"><h5 class="theten">Thúy Hà</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/262049602_440637134164917_8028771740715647774_n.jpg" alt=""></div>
            <div class="gioithieu4"><p>Nguyễn Thị Thúy Hà<br> Birth: 23/08/2005 </p></div>
        </div>

        <div class="ban">
            <div class="thanhvien"><h5 class="theten">Trung Anh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261460210_151220900549887_7937210287335214306_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Lữ Trung Anh <br> Birth: 05/10/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Bảo Tín</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/262107823_1976388669194950_8209154749578727855_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Trần Bảo Tín <br> Birth: 26/09/2005 </p></div>
            <div class="thanhvien"><h5 class="theten" style="margin-left:5px;">Nguyễn Trung</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/262049319_868803280360731_1937194214083397436_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Nguyễn Đình Trung <br> Birth: 06/01/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Hoàng Long</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261944527_933372340613413_8776592982251769942_n.jpg" alt=""></div>
            <div class="gioithieu4"><p>Lê Hoàng Long <br> Birth: 29/08/2005 </p></div>
        </div>

        <div class="ban">
            <div class="thanhvien"><h5 class="theten">Duy Hưng</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260306752_1078246139599915_9085554561607325171_n.jpg" alt=""></div>
            <div class="gioithieu" style="color: red;"><p>Lê Duy Hưng </p><p> Birth: 09/10/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Thanh Quân</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/260702610_325913202328230_8164824714833165579_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Trịnh Thanh Quân <br> Birth: 14/04/2005 </p></div>
            <div class="thanhvien"><h5 class="theten">Xuân Đạo </h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/262532492_1927976087396017_2140638550461865756_n.jpg" alt=""></div>
            <div class="gioithieu3"><p>Vũ Xuân Đạo <br> Birth: 25/02/2005 </p></div>
            <div class="thanhvien">  <h5 class="theten"> <a href="https://www.facebook.com/cter.hunter" style="text-decoration: none;"> Đỗ Đức </a></h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261871284_1096939117783935_8840720159858060180_n.jpg" alt=""></div>
            <div class="gioithieu4"><p>Đỗ Văn Đức <br> Birth: 17/07/2005  </p></div>
                

        </div>

        <div class="ban">
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Gia Minh</h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/261414850_1253702581772894_5495647559372703923_n.jpg" alt=""></div>
            <div class="gioithieu" ><p>Trần Gia Minh <br> Birth: 27/12/2004  </p></div>
            <div class="thanhvien" style="width: 120px;"><h5 class="theten">Phạm Thành </h5>
            <img class="anhdaidien" src="../B1_web_/IMG/anhthanhvien/259234972_940183746598436_4937134762062294484_n.jpg" alt=""></div>
            <div class="gioithieu2"><p>Phạm Thị Thành <br> Birth: 14/08/2005  </p></div>
        </div>

</div> 
  


    <script src="../JS/index.js"></script>
</body>
</html>`
components.galleryScreen =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    
</head>
<body>
    <div id="Logo" > <h1>Welcome to B1 class</h1></div>
    <div id="WholeClass"    >
       
    <div id="thanhngang">
        <div class="menu" id="home">Home</div>
        <div  class="menu" id="chat">Chat</div>
        <div  class="menu" id="gallery">Gallery</div>
        <div class="menu" id="schedule">Schedule</div>
    </div>
      <h3 id="tieude"> Kho Ảnh Lớp 11B1</h3>
    <div class="khochuaanh">
    
    <div class="khochuaanh">
    <img class="anh" src="../B1_web_/IMG/anhthanhvien/3K9A1949.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1919.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1920.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1925.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1929.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1949.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1951.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1982.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1983.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1985.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A1986.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A2019.JPG" alt="">
    <img class="anh" src="../B1_web_/IMG/Gallery/3K9A2020.JPG" alt="">

</div>
</body>
</html>`

components.scheduleScreen =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../B1_web_/CSS/shedule.css">
</head>
<body>
    <div id="Logo" > <h1>Welcome to B1 class</h1></div>
   <div id="WholeClass">
      
   <div id="thanhngang">
       <div class="menu" id="home">Home</div>
       <div  class="menu" id="chat">Chat</div>
       <div  class="menu" id="gallery">Gallery</div>
       <div class="menu" id="shedule">Schedule</div>



   </div>



    <div id="thoikhoabieu">  <h1 style="color: white;">B1 Shedule</h1>
           <div> <div class="thu"></div>
            <div class="sang" style="height: 110px;">Morning</div>
            <div class="chieu" style="height: 90px;">AfterNoon</div></div>

            <div> <div class="thu"> Monday</div>
            <div class="sang">
                <div class="tiet">Salute the Flag</div>
                <div class="tiet">Physical Education</div>
                <div class="tiet">Civic Education</div>
                <div class="tiet">Literature</div>
                <div class="tiet"></div>
            </div>
            <div class="chieu"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
            </div>



            <div> <div class="thu"> Tuesday</div>
            <div class="sang">
                <div class="tiet">Physical Education</div>
                <div class="tiet">Biology</div>
                <div class="tiet">Literature</div>
                <div class="tiet">Information Technology</div>
                <div class="tiet">Technology</div>
            </div>
            <div class="chieu"></div>
                <div class="tiet">Physic</div>
                <div class="tiet">Physic</div>
                <div class="tiet">Math</div>
                <div class="tiet">Math</div>
            </div>


            <div> <div class="thu"> Wednesday</div>
            <div class="sang">
                <div class="tiet">Literature</div>
                <div class="tiet">Literature</div>
                <div class="tiet">Math</div>
                <div class="tiet">Math</div>
                <div class="tiet">Chemistry</div>
            </div>
            <div class="chieu"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
            </div>

            <div> <div class="thu"> Thurday</div>
            <div class="sang">
                <div class="tiet">Defense Education</div>
                <div class="tiet">History</div>
                <div class="tiet">Geography</div>
                <div class="tiet">English</div>
                <div class="tiet"></div>
            </div>
            <div class="chieu"></div>
                <div class="tiet">Math</div>
                <div class="tiet">Math</div>
                <div class="tiet">Chemistry</div>
                <div class="tiet">Chemistry</div>
            </div>


            <div> <div class="thu"> Friday</div>
            <div class="sang">
                <div class="tiet">Math</div>
                <div class="tiet">English</div>
                <div class="tiet">English</div>
                <div class="tiet">Chemistry</div>
                <div class="tiet">Physic</div>
            </div>
            <div class="chieu"></div>
                <div class="tiet">Chemistry</div>
                <div class="tiet">Chemistry</div>
                <div class="tiet">Math</div>
                <div class="tiet">Math</div>
            </div>

            <div> <div class="thu"> Saturday</div>
            <div class="sang">
                <div class="tiet">Math</div>
                <div class="tiet">Information Technology</div>
                <div class="tiet">Physic</div>
                <div class="tiet">???</div>
                <div class="tiet"></div>
            </div>
            <div class="chieu"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
                <div class="tiet"></div>
            </div>


            <div> <div class="thu"> Sunday</div>
            <div class="sang">
                <div class="tiet">Literature</div>
                <div class="tiet">Literature</div>
                <div class="tiet">Biology</div>
                <div class="tiet">Biology</div>
                <div class="tiet"></div>
            </div>
            <div class="chieu"></div>
                <div class="tiet">English</div>
                <div class="tiet">English</div>
                <div class="tiet">Physic</div>
                <div class="tiet">Physic</div>
            </div>
            
    </div>
</body>
</html>`
