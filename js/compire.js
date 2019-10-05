var getValue = document.getElementsByName('product1')[0];
var pr1 = '';
getValue.addEventListener('input', function () {
  pr1 = getValue.value;
  var text = "";
  switch (pr1) {
    case 'GG Black mens bag(men)':
      {
        text = `<div class="row">
        <!-- Image of product-->
        <div class="col-sm-12 col-lg-6 ">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img class="d-block w-100"
                  src="image/523603_9F2YN_1095_001_100_0055_Light-GG-Black-mens-bag.jpg"
                  alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="image/523603_9F2YN_1095_002_100_0055_Light-GG-Black-mens-bag.jpg"
                  alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-0">
          <!-- Title of product-->
          <div class="title-of-product">GG Black men's bag(men)</div>
          <!--Price of product-->
          <div class="Price">$850.00</div>
          <div class="Property">
            <p>COLOR : BLACK <br>
              SIZE : ONE SIZE <br>
              IN STOCK
            </p>
          </div>
          <button class="add-to-bag">ADD TO BAG</button>
          <!-- Detail of product-->
          <div class="detail">
            <div class="panel-heading">
              <!-- Detail button-->
              <br>
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse">Detail</a>
              </h5>
            </div>
            <!-- Collapse detail of product-->
            <div id="collapse" class="panel-collapse collapse">
              <div class="product-detail">
                <p>
                  First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                  1930s, and from then it's been an established symbol of Gucci's heritage. This men's bag combines the
                  signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
                <ul>
                  <li>Black/grey GG Supreme canvas, a material with low environmental impact</li>
                  <li>Blue and red Web</li>
                  <li>Palladium-toned hardware</li>
                  <li>Interior zipper pocket and two smartphone pockets</li>
                  <li>Detachable wrist strap with 7" drop</li>
                  <li>Zipper closure</li>
                  <li>W12" x H9.5" x D2"</li>
                  <li>Cotton linen lining</li>
                  <li>Made in Italy</li>
                </ul>
                <p>More information? <a href="Information/GG Black men's bag.docx">Click here</a></p>
              </div>
            </div>
            <div class="panel-heading">
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
              </h5>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
              <p>
                <li>Leather</li>
                <li>Imported</li>
              </p>
            </div>
          </div>
        </div>
      </div>`;
        break;
      }
    case 'GG iPhone case with tiger print':
      {
        text = `<div class="row">
        <!-- Image of product-->
        <div class="col-sm-12 col-lg-6 ">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img class="d-block w-100"
                  src="image/475317_DJ20T_1000_001_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="image/475317_DJ20T_1000_002_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="image/475317_DJ20T_1000_003_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-0">
          <!-- Title of product-->
          <div class="title-of-product">GG iPhone case with tiger print</div>
          <!--Price of product-->
          <div class="Price">$480.00</div>
          <div class="Property">
            <p>COLOR : BLACK <br>
              SIZE : ONE SIZE <br>
              IN STOCK
            </p>
          </div>
          <button class="add-to-bag">ADD TO BAG</button>
          <!-- Detail of product-->
          <div class="detail">
            <div class="panel-heading">
              <!-- Detail button-->
              <br>
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse">Detail</a>
              </h5>
            </div>
            <!-- Collapse detail of product-->
            <div id="collapse" class="panel-collapse collapse">
              <div class="product-detail">
                <p>
                  Presented in black and grey GG Supreme canvas, this iPhone case is completed by a removable wrist strap.
                  Tigers, reflecting the fascination for wild animals that permeate the House's narrative, contrast the
                  monogrammed background.</p>
                <ul>
                  <li>Black/grey GG Supreme canvas with tigers print, a material with low environmental impact</li>
                  <li>Black leather trim</li>
                  <li>Moiré lining</li>
                  <li>Two card slots</li>
                  <li>Removable wrist strap with 4.9" drop</li>
                  <li>Zipper closure</li>
                  <li>7"W x 4.3"H</li>
                  <li>Made in Italy</li>
                </ul>
                <p>More information? <a href="Information/GG iPhone case with tiger print.docx">Click here</a></p>
              </div>
            </div>
            <div class="panel-heading">
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
              </h5>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
              <p>
                <li>Leather</li>
                <li>Imported</li>
              </p>
            </div>
          </div>
        </div>
      </div>`;
        break;
      }
    case "GG Marmont leather pouch": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/575137_G2BAN_1087_001_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/575137_G2BAN_1087_002_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/575137_G2BAN_1087_004_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">GG Marmont leather pouch </div>
        <!--Price of product-->
        <div class="Price">$830.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                A slim leather pouch, distinguished by Double G hardware. Made in calfskin leather heat-stamped to
                achieve a boar effect, giving it a textured appearance.</p>
              <ul>
                <li>Black leather</li>
                <li>Removable leather wrist strap</li>
                <li>Six card slots and one open pocket</li>
                <li>Zipper closure </li>
                <li>12"W x 8"H x .6"D</li>
                <li>Made in Italy</li>
              </ul>
              <p>More information? <a href="Information/GG Marmont leather pouch 830$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci 1955 horsebit": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100"
                src="image/602204_92TCG_8563_001_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/602204_92TCG_8563_002_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/602204_92TCG_8563_003_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci 1955 horsebit bag </div>
        <!--Price of product-->
        <div class="Price">$2300.00</div>
        <div class="Property">
          <p>COLOR : BROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Introduced for Cruise 2020, the Gucci 1955 Horsebit bag is recreated from an archival design. With the
                same lines and forms first introduced over six decades ago, the accessory unifies the original details
                with a modern spirit, highlighting the Horsebit. Part of Gucci’s genetic code, the double ring and bar
                design has been established as one of the most distinctive elements among the House symbols borrowed
                from the equestrian world. Presented on a small flap shoulder bag, the hardware is paired with the
                House’s monogram fabric and completed with a special mechanism that adjusts the length of the shoulder
                strap so it can be carried on one shoulder or cross body. </p>
              <ul>
                <li>A limited time online exclusive, this bag will be available with early access on Gucci.com</li>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Gold-toned hardware</li>
                <li>Microfiber lining with a suede-like finish</li>
                <li>Each bag will ship with a small pouch containing two additional button covers that can be used to
                  cover the exposed studs when the shoulder strap is lengthened</li>
                <li>Horsebit detail at the front</li>
                <li>Half Horsebit detail at each side</li>
                <li>Three gussets with one zipper and one open pocket</li>
                <li>Shoulder strap with snap buttons can be adjusted from a 9.8" to 17.7" drop</li>
                <li>Flap closure</li>
                <li>Small size: 9.8"W x 7"H x 3.1"D</li>
                <li>The model is 5'8" tall</li>
                <li>Made in Italy </li>
              </ul>
              <p>More information? <a href="Information/Gucci 1955 horsebit bag.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci Zumi grainy leather card case": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100"
                src="image/570679_1B90X_1275_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570679_1B90X_1275_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570679_1B90X_1275_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci Zumi grainy leather card case </div>
        <!--Price of product-->
        <div class="Price">$580.00</div>
        <div class="Property">
          <p>COLOR : PINK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Hybrid design elements continue to shape the Gucci narrative atop this card case. Crafted from white
                grainy leather, the accessory is enhanced by the Interlocking G Horsebit, a fusion of two of the House's
                most characteristic codes. The Gucci Zumi line takes its name from actress and experimental musician
                Zumi Rosow – unconventional and modern, and at the same time evoking an inherent free spirit – Zumi's
                individual look creates an unexpected contrast to the structured, refined details of the collection.</p>
              <ul>
                <li>White grainy leather</li>
                <li>Shiny gold- and silver-toned hardware</li>
                <li>Moiré lining</li>
                <li>Interlocking G Horsebit—inspired by an archival piece, the hardware combines two of the House's most
                  historical motifs in a mix of metals</li>
                <li>Four card slots</li>
                <li>4"W x 3"H</li>
                <li>Made in Italy</li>
              </ul>
              <p>More information? <a href="Information/Gucci Zumi grainy leather card case.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci Zumi grainy leather card case wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100"
                src="image/570660_1B90X_1000_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570660_1B90X_1000_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570660_1B90X_1000_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci Zumi grainy leather card case wallet</div>
        <!--Price of product-->
        <div class="Price">$580.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Hybrid design elements continue to shape the Gucci narrative. Completed by a detachable chain strap, the
                grainy leather card case wallet is enhanced by the Interlocking G Horsebit, a fusion of two of the
                House's most characteristic codes. Introduced in the evocative setting of the Théâtre Le Palace in
                Paris, the Gucci Zumi line takes its name from actress and experimental musician Zumi Rosow, who walked
                the Spring Summer 2019 runway carrying the bag. </p>
              <ul>
                <li>Black grainy leather</li>
                <li>Shiny gold- and silver-toned hardware</li>
                <li>Moiré lining</li>
                <li>Interlocking G Horsebit—inspired by an archival piece, the hardware combines two of the House's most
                  historical motifs in a mix of metals</li>
                <li>Five card slots</li>
                <li>Interior open pocket</li>
                <li>Interior zipper pocket</li>
                <li>Detachable metal chain with 4" drop</li>
                <li>Snap closure</li>
                <li>Open: 4.3"W x 3"H</li>
                <li>Closed: 4.3"W x 3.3"H x 1"D</li>
                <li>Made in Italy</li>
              </ul>
              <p>More information? <a href="Information/Gucci Zumi grainy leather card case wallet.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci Zumi python mini bucket": {
      text = ` <div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/576432_0OLRX_9698_001_065_0016_Light-Gucci-Zumi-mini-bucket-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/576432_0OLRX_9698_005_100_0000_Light-Gucci-Zumi-mini-bucket-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci Zumi python mini bucket bag </div>
        <!--Price of product-->
        <div class="Price">$1150.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                The mini bucket bag shape is revisited in precious dusty grey-colored python. Channeling the
                unconventional and individual spirit of its namesake—actress and experimental musician Zumi Rosow—the
                petite drawstring shape is topped with the line’s signature hardware in a modern mix of silver and gold
                tones.</p>
              <ul>
                <li>Dusty grey python </li>
                <li>Shiny gold- and silver-toned hardware</li>
                <li>Microfiber and moiré lining </li>
                <li>Interlocking G Horsebit—inspired by an archival piece, the hardware combines two of the House's most
                  historical motifs in a mix of metals</li>
                <li>Detachable key ring</li>
                <li>2 card slots</li>
                <li>Chain strap with 23.6" drop</li>
                <li>Drawstring closure</li>
                <li>Can also be worn as a cross body bag</li>
                <li>Mini size: 7.5"W x 6.7"H</li>
                <li>The model is 5'9" tall</li>
                <li>Made in Italy</li>
                <li>Note that python products may not be shipped to California</li>
              </ul>
              <p>More information? <a href="Information/Gucci Zumi python mini bucket bag.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Medium suede shoulder": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/589471_1DGBG_2334_001_071_0000_Light-Medium-suede-shoulder-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/589471_1DGBG_2334_002_071_0000_Light-Medium-suede-shoulder-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Medium suede shoulder bag </div>
        <!--Price of product-->
        <div class="Price">$2890.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Presented in deep brown suede, this shoulder bag introduced for Fall Winter 2019 is completed with the
                framed torchon Double G, which defines the line. A modern mix of shiny and antique gold-toned metal, the
                new emblem reintroduces the Double G with a twisted torchon finish surrounded by a ring detail. The
                structured shape is completed with an adjustable leather shoulder strap and a flap closure with a hidden
                pocket detail.</p>
              <ul>
                <li>Deep brown suede</li>
                <li>Antique and shiny gold-toned hardware</li>
                <li>Framed torchon Double G</li>
                <li>Open pocket under the flap</li>
                <li>Interior zipper and smartphone pockets</li>
                <li>Adjustable shoulder strap with 16.5" drop </li>
                <li>Flap closure</li>
                <li>Medium size: 11.8"W x 8.3"H x 3.7"D</li>
                <li>Viscose lining</li>
                <li>Made in Italy</li>
                <li>The model is 5'9" tall</li>
              </ul>
              <p>More information? <a href="Information/Medium suede shoulder bag.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Ophidia GG zip around wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/523154_96IWG_8745_001_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/523154_96IWG_8745_002_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Ophidia GG zip around wallet</div>
        <!--Price of product-->
        <div class="Price">$690.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Ophidia GG zip around wallet.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    //gucci***********************//
    case "Leather Badge Holder": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Leather Badge Holder 1.jpeg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Leather Badge Holder 2.webp" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Leather Badge Holder </div>
        <!--Price of product-->
        <div class="Price">$295.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <div class="product-detail-block clickable border-bottom">
                <div class="main-container">
                  <div class="detail-label middle" id="product-details-label">product details</div>
                  <span class="open middle-right icon-minus" role="button" tabindex="0"
                    aria-label="toggle product details" aria-expanded="true">
                    <span class="sr-only">Toggleproduct details</span>
                  </span>
                </div>
                <div aria-labelledby="product-details-label" class="detail-content" id="product-details-content"
                  tabindex="-1" style="display: block;">

                  Saffiano leather with double pocket inside for documents or tickets<br>Saffiano leather wrist
                  strap<br>Gold-toned hardware<br>Prada lettering logo inside and outside<br><br>-Snap closure<br>
                  9.7
                  cm height<br>

                  7
                  cm width
                  <p>More information? <a href="Information/Leather Badge Holder.docx">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Leather Keychain": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Leather Keychain 1.webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Leather Keychain 2.webp" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Leather Keychain</div>
        <!--Price of product-->
        <div class="Price">$380.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <div class="product-detail-block clickable border-bottom">
                <div class="main-container">
                  <div class="detail-label middle" id="product-details-label">product details</div>
                  <span class="open middle-right icon-minus" role="button" tabindex="0"
                    aria-label="toggle product details" aria-expanded="true">
                    <span class="sr-only">Toggleproduct details</span>
                  </span>
                </div>
                <div aria-labelledby="product-details-label" class="detail-content" id="product-details-content"
                  tabindex="-1" style="display: block;">

                  Saffiano leather<br>Metal snap-hook and split ring<br>Zipper pouch<br>Metal hardware<br>Enamel
                  triangle logo<br>
                  6.5
                  cm height<br>
                  10.5
                  cm width
                  <p>More information? <a href="Information/Leather Keychain 380$.docx">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Leather Wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Leather Wallet 1.webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Leather Keychain 2.webp" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Leather Wallet</div>
        <!--Price of product-->
        <div class="Price">$725.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <div class="product-detail-block clickable border-bottom">
                <div class="main-container">
                  <div class="detail-label middle" id="product-details-label">product details</div>
                  <span class="open middle-right icon-minus" role="button" tabindex="0"
                    aria-label="toggle product details" aria-expanded="true">
                    <span class="sr-only">Toggleproduct details</span>
                  </span>
                </div>
                <div aria-labelledby="product-details-label" class="detail-content" id="product-details-content"
                  style="display: block;" tabindex="-1">

                  Saffiano leather<br>Zipper pull with enameled metal triangle charm<br>Zipper closure<br>Three inside
                  compartments<br>Two center pockets, including one with zipper<br>Twelve card slots<br>Nylon and
                  leather lining<br>Metal lettering logo<br>
                  10.3
                  cm height<br>

                  20
                  cm width
                  <p>More information? <a href="Information/Leather Wallet 725$.docx">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Printed Saffiano leather wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Printed Saffiano leather wallet 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Printed Saffiano leather wallet 2.jpeg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Printed Saffiano leather wallet</div>
        <!--Price of product-->
        <div class="Price">$440.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Printed Saffiano leather wallet 440$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano Cuir leather wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Saffiano Cuir leather wallet</div>
        <!--Price of product-->
        <div class="Price">$440.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano Cuir leather wallet 440$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano leather clutch": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano leather clutch 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano leather clutch 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">/Saffiano leather clutch</div>
        <!--Price of product-->
        <div class="Price">$360.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano leather clutch 570$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano Leather Coin Purse": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano leather clutch 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano leather clutch 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Saffiano Leather Coin Purse</div>
        <!--Price of product-->
        <div class="Price">$360.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano Leather Coin Purse 360$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano leather wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 2.webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 1.jpeg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Saffiano leather wallet</div>
        <!--Price of product-->
        <div class="Price">$650.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano leather wallet 650$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Small Prada Cahier wallet": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Small Prada Cahier wallet 1.webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Small Prada Cahier wallet 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Small Prada Cahier wallet</div>
        <!--Price of product-->
        <div class="Price">$570.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Small Prada Cahier wallet 570$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "CALVIN KEILN - LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with an allover ck logo, this sleek wallet is made with glossy leather, a zip-around closure, an interior zip divider pocket and multiple bill and card slots.</p>
            <li>leather ck logo zip-around continental wallet</li>
            <li>allover ck logo design</li>
            <li>zip around closure</li>
            <li>interior zip divider pocket</li>
            <li>2 large bill slots</li>
            <li>12 card slots</li>
            <li>7.5" wide x 3.9" tall x 0.8" deep</li>
            <p>Style #: 37105129 <br>
            Universal Style #: K60K605129</p>
            <p>More information? <a href="Information/CALVIN KEILN - LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - LOGO PLAQUE LARGE TRIFOLD WALLET": {
      text = `	<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOGO PLAQUE LARGE TRIFOLD WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOGO PLAQUE LARGE TRIFOLD WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOGO PLAQUE LARGE TRIFOLD WALLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - LOGO PLAQUE LARGE TRIFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$78.00</div><br>
        <div class="Property">
          <p>COLOR : LIGHT SAND <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a prominent, polished logo plaque at the front, this spacious trifold wallet is made with soft faux leather, 14 card slots, a bill slot, a coin pocket and contemporary ck styling.</p>
            <li>logo plaque large trifold wallet</li>
            <li>faux leather</li>
            <li>14 card slots, bill slot + coin pocket</li>
            <li>metal plaque on the front</li>
            <li>7.5" wide x 3.9" tall x 1.4" deep</li>
            <li>presented in a box</li>
            
            <p>Style #: 37405099-064 <br>
            Universal Style #: K60K605099</p>
            <p>More information? <a href="Information/CALVIN KEILN - LOGO PLAQUE LARGE TRIFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - MONOGRAM LOGO TRIFOLD WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/MONOGRAM LOGO TRIFOLD WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/MONOGRAM LOGO TRIFOLD WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/MONOGRAM LOGO TRIFOLD WALLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - MONOGRAM LOGO TRIFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$78.00</div><br>
        <div class="Property">
          <p>COLOR : BRN KHK/LUG <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>A spacious silhouette with an allover ck monogram design, this iconic trifold wallet is made with water-resistant, subtly textured faux leather. Features a top flap closure with a logo plaque, an exterior back zip pocket, an interior zip pocket, multiple card slots and an id window.</p>
            <li>Monogram logo trifold wallet</li>
            <li>Top flap + logo plaque</li>
            <li>Snap closure</li>
            <li>Exterior back zip pocket</li>
            <li>Interior zip pocket</li>
            <li>8 card slots + 1 id window</li>
            <li>Fully lined</li>
            <p>Style #: 37304215 <br>
            Universal Style #: H6GOJ833</p>
            <p>More information? <a href="Information/CALVIN KEILN - MONOGRAM LOGO TRIFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - PEBBLE LARGE ZIP-AROUND WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/PEBBLE LARGE ZIP-AROUND WALLET.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/PEBBLE LARGE ZIP-AROUND WALLET 1.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - PEBBLE LARGE ZIP-AROUND WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : LIGHT SAND <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a sleek and solid look, this large wallet is made with an allover pebble texture, a zip-around closure and a signature logo plaque. interior features a zip divider coin pocket, large bill slots and multiple card slots for everyday essentials.</p>
            <li>pebble large zip-around wallet</li>
            <li>solid design</li>
            <li>zip-around closure</li>
            <li>signature logo plaque</li>
            <li>interior center zip divider pocket</li>
            <li>2 bill slots + 6 card slots</li>
            <li>8.1" wide x 4.3" tall x 1" deep</li>
            <p>Style #: 37405101-064 <br>
            Universal Style #: K60K605101</p>
            <p>More information? <a href="Information/CALVIN KEILN - PEBBLE LARGE ZIP-AROUND WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - PYTHON PATTERN ZIP CONTINENTAL WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/PYTHON PATTERN ZIP CONTINENTAL WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
            
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - PYTHON PATTERN ZIP CONTINENTAL WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK/WHT <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with a striking python pattern, this edgy zip continental wallet is made with faux leather, a zip around closure, a signature logo plaque, an interior center zip divider pocket, multiple bill slots and card slots in a fully lined interior.</p>
            <li>Python pattern zip continental wallet</li>
            <li>Zip-around closure</li>
            <li>Logo plaque</li>
            <li>Interior center zip divider pocket</li>
            <li>2 large bill slots + 2 open slots</li>
            <li>8 card slots</li>
            <li>Fully lined</li>
            <p>Style #: 37204203-817 <br>
            Universal Style #: H8JQS8VD</p>
            <p>More information? <a href="Information/CALVIN KEILN - PYTHON PATTERN ZIP CONTINENTAL WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - SAFFIANO LEATHER ZIP CONTINENTAL WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER ZIP CONTINENTAL WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER ZIP CONTINENTAL WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER ZIP CONTINENTAL WALLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - SAFFIANO LEATHER ZIP CONTINENTAL WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : LUGGAGE <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this elegant zip continental wallet is made with a zip around closure, a signature logo plaque, an interior center zip divider pocket, multiple bill slots and card slots in a fully lined interior.</p>
            <li>Saffiano leather zip continental wallet</li>
            <li>Zip-around closure</li>
            <li>Logo plaque</li>
            <li>Interior center zip divider pocket</li>
            <li>2 large bill slots + 2 open slots</li>
            <li>8 card slots</li>
            <li>Fully lined</li>
            <p>Style #: 37204201-208 <br>
            Universal Style #: H8JQ18VD</p>
            <p>More information? <a href="Information/CALVIN KEILN - SAFFIANO LEATHER ZIP CONTINENTAL WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET</div><br>
        <!--Price of product-->
        <div class="Price">$58.00</div><br>
        <div class="Property">
          <p>COLOR : LUGGAGE  <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button><br><br>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this travel-ready large wristlet features a top zip closure with a signature logo plaque, a detachable wristlet strap, an interior open compartment and multiple slots with a full logo lining.</p>
            <li>Saffiano leather large zip wristlet</li>
            <li>Wristlet strap</li>
            <li>Top zip closure</li>
            <li>Logo plaque</li>
            <li>Interior open compartment</li>
            <li>4 card slots</li>
            <li>Fully lined</li>
            <li>8" wide x 5.5" tall x 0.4" deep</li>
            <p>Style #: 37204217 <br>
            Universal Style #: H9GL1KX1</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - CK MONOGRAM STRIPE BILLFOLD WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/CK MONOGRAM STRIPE BILLFOLD WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CK MONOGRAM STRIPE BILLFOLD WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - CK MONOGRAM STRIPE BILLFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$48.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a signature ck monogram, this bold billfold wallet features a colorful stripe highlight. features an interior bill slot, multiple card slots and faux leather for excellent durability.</p>
            <li>ck monogram stripe billfold wallet</li>
            <li>6 card slots + bill slot</li>
            <li>CK monogram logo print</li>
            <li>pop-color stripe on the back</li>
            <li>embossed logo on the front</li>
            <li>presented in a box</li>
            <li>1.8 x 10.2 x 8.6 cm</li>
            
            <p>Style #: 47114412</p>
            <p>More information? <a href="Information/CALVIN KLEIN - CK MONOGRAM STRIPE BILLFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>100% polyurethane</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - EXOTIC LIZARD AVIATOR WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/EXOTIC LIZARD AVIATOR WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/EXOTIC LIZARD AVIATOR WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - EXOTIC LIZARD AVIATOR WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$60.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>made with an exotic lizard textured faux leather, this aviator wallet features a bifold design, a logo on the front, interior slots and border topstitching.</p>
            <li>exotic lizard aviator wallet</li>
            <li>bifold design</li>
            <li>logo plaque</li>
            <li>interior bill slot + card slots</li>
            <li>topstitching + seaming details</li>
            <li>4.6" wide x 3.8" tall x 1" deep</li>
            <p>Style #: 47208773</p>
            <p>More information? <a href="Information/CALVIN KLEIN - EXOTIC LIZARD AVIATOR WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : NAVY <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">DETAIL</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with textured leather, this billfold wallet features a ckj logo plaque on the front, a large bill slot, 2 security slots and 8 card slots.</p>
            <li>leather ckj plaque squared billfold wallet</li>
            <li>ckj logo plaque</li>
            <li>billfold design</li>
            <li>1 large bill slot</li>
            <li>2 security slots</li>
            <li>8 card slots</li>
            <li>4.5" wide x 3.7" tall x 0.8" deep</li>
            
            <p>Style #: 47111163-480</p>
            <p>More information? <a href="Information/CALVIN KLEIN - LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - LEATHER SLIMFOLD RFID WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LEATHER SLIMFOLD RFID WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LEATHER SLIMFOLD RFID WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - LEATHER SLIMFOLD RFID WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$50.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>crafted with smooth leather, this slimfold wallet features a bifold design, a logo plaque, multiple slots and rfid blocking technology.</p>
            <li>leather slimfold rfid wallet</li>
            <li>bifold design</li>
            <li>logo plaque</li>
            <li>multiple slots + id window</li>
            <li>rfid blocking technology</li>
            <li>topstitching</li>
            <li>4.9" wide x 3.7" tall x 0.6" deep</li>
            
            <p>Style #: 47208655</p>
            <p>More information? <a href="Information/CALVIN KLEIN - LEATHER SLIMFOLD RFID WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - LOGO POP COIN BILLFOLD WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOGO POP COIN BILLFOLD WALLET 2.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOGO POP COIN BILLFOLD WALLET 1.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - LOGO POP COIN BILLFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : BITTER BROWN <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a logo pop oversized institutional logo, this billfold wallet is made with smooth leather, an interior bill slot, 5 card slots and a coin pocket.</p>
            <li>Calvin Klein Jeans</li>
            <li>logo pop coin billfold wallet</li>
            <li>smooth leather</li>
            <li>oversized embossed + printed institutional logo</li>
            <li>interior bill slot</li>
            <li>5 card slots + coin pocket</li>
            <li>4.8" wide x 3.9" tall x 1.2" deep</li>
            
            <p>Style #: 47111076-488</p>
            <p>More information? <a href="Information/CALVIN KLEIN - LOGO POP COIN BILLFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - MARBLED LEATHER OMEGA AVIATOR WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/MARBLED LEATHER OMEGA AVIATOR WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/MARBLED LEATHER OMEGA AVIATOR WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - MARBLED LEATHER OMEGA AVIATOR WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$70.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>defined by a distinct marbled look, this aviator wallet features smooth leather, an embossed logo with omega stitching on the front, an interior bill slot, multiple card slots, an id window and a coin pouch.</p>
            <li>marbled leather omega aviator wallet</li>
            <li>bifold design</li>
            <li>embossed logo + omega stitching</li>
            <li>interior bill slot</li>
            <li>coin pouch</li>
            <li>multiple slots + id window</li>
            <li>topstitching</li>
            <li>4.9" wide x 3.7" tall x 1" deep</li>
            <p>Style #: 47209108</p>
            <p>More information? <a href="Information/CALVIN KEILN - MARBLED LEATHER OMEGA AVIATOR WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - PEBBLE LEATHER LOGO BIFOLD WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/PEBBLE LEATHER LOGO BIFOLD WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/PEBBLE LEATHER LOGO BIFOLD WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - PEBBLE LEATHER LOGO BIFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$48.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with textured pebble leather, this bifold wallet features an embossed logo on the front, an interior bill slot, 6 card slots and 2 security pockets.</p>
            <li>pebble leather logo bifold wallet</li>
            <li>bifold design</li>
            <li>embossed logo</li>
            <li>interior bill slot</li>
            <li>6 card slots + 2 security slots</li>
            <li>topstitching + seaming details</li>
            <p>Style #: 47114445</p>
            <p>More information? <a href="Information/CALVIN KLEIN - PEBBLE LEATHER LOGO BIFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK/GOLD <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this travel-ready large wristlet features a slim profile, a top zip closure with a signature logo plaque, a wristlet strap and a front zip pocket, an interior open compartment and multiple slots with a full logo lining.</p>
            <li>Saffiano leather large slim wristlet</li>
            <li>Top zip closure</li>
            <li>Wristlet strap</li>
            <li>Front zip pocket + logo plaque</li>
            <li>Interior open compartment</li>
            <li>8 card slots</li>
            <li>Fully lined</li>
            <p>Style #: 37204206 <br>
            Universal Style #: H3GG11WA</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - SAFFIANO LEATHER PASSCASE WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER PASSCASE WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER PASSCASE WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER PASSCASE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$60.00</div><br>
        <div class="Property">
          <p>COLOR : BROWN <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>a passcase wallet featuring textured saffiano leather, a bifold design and a removable extra flap with id windows.</p>
            <li>saffiano leather textured wallet</li>
            <li>removable double-sided id holder</li>
            <li>logo plaque on front</li>
            <li>large bill slot</li>
            <li>6 card slots</li>
            <li>2 hidden slots</li>
            <li>4.5" wide x 3.5" tall x 0.75" deep</li>
            
            <p>Style #: 47209346-200</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER PASSCASE WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - SAFFIANO LEATHER SHOULDER ZIP BAG": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER SHOULDER ZIP BAG 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER SHOULDER ZIP BAG 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER SHOULDER ZIP BAG 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER SHOULDER ZIP BAG</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK/GOLD <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this textured shoulder bag is made with a chainlink shoulder 	strap, a top zip closure, a signature logo plaque, an exterior back slip pocket and 2 interior 		    pockets with a full logo lining.</p>
            <li>Saffiano leather shoulder zip bag</li>
            <li>Chainlink shoulder strap</li>
            <li>Top zip closure</li>
            <li>Logo plaque</li>
            <li>Exterior back slip pocket</li>
            <li>Interior 1 zip pocket + 1 slip pocket</li>
            <li>Fully lined</li>
            <li>Style #: 37204211-001</li>
            <li>Universal Style #: H9GH1KD1</li><br>
            <p>Style #: 37204211-001 <br>
            Universal Style #: H9GH1KD1</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER SHOULDER ZIP BAG.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN -TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN -TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with textured leather and a modern look, this bifold wallet features a ckj logo on the front, an interior bill slot, multiple interior slots and border topstitching. paired with a coordinating card case, which can be removed or inserted within this bifold design.</p>
            <li>Calvin Klein Jeans</li>
            <li>textured ckj logo billfold wallet + card case</li>
            <li>textured leather</li>
            <li>ckj logo</li>
            <li>bifold design</li>
            <li>interior bill slot + 2 security slots</li>
            <li>8 card slots</li>
            <li>5" wide x 3.9" tall x 1.2" deep</li>
            <p>Style #: 47111254-488</p>
            <p>More information? <a href="Information/CALVIN KLEIN -TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //**CALVIN KLEIN WALLET */
    case "FENDI - BIFORD":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/Fendi_a.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/Fendi_c.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-BIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$290.00</div><br>
        <div class="Property">
          <p>COLOR :RED/YELLOW <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Card holder with six slots and flat central pocket. Made of PU with brown FF motif. Fendi Label print in yellow. Made in Italy. </p>
            <li>Length:3.9 inches</li>
            <li>Height:3.1 inches</li>
                      <li>Depth:inches</li>
                      <li>Composition:45% Cotton, 40% Polyurethane, 15% Polyester </li>
            <p>Universal Style #: Product Code:7M0164A7SBF17HW</p>
            <p>More information? <a href="Information/FENDI-BIFOLD.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-BIFOLDA":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0387A18BF0MVV_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0387A18BF0MVV_04_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-BIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$490.00</div><br>
        <div class="Property">
          <p>COLOR :Red leather compact wallet <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>F is Fendi compact bi-fold wallet. Interior organized with a flat pocket, a coin pocket with press stud and four card slots. Made of red tumbled Cruise leather. Decorated with the F is Fendi logo. Gold-finish metalware.Made in Italy. </p>
            <li>Length:3.5 inches</li>
            <li>Height:4.5 inches</li>
                      <li>Depth:1 inches</li>
                      <li>Composition:100% Calfskin</li>
                      <p>Universal Style: Product Code:8M0387A18BF0MVV</p>	
                      <p>More information? <a href="Information/FENDI-BIFOLDA.docx">Click here</a></p>            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-COIN PURSE":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/7M0270O73F17HQ_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/7M0270O73F17HQ_03_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-COIN PURSE</div><br>
        <!--Price of product-->
        <div class="Price">$490.00</div><br>
        <div class="Property">
          <p>COLOR :BLACK/RED <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Coin purse with gusseted sides. Zip fastening on two sides. Made of black calfskin. Yellow leather appliqués in the shape of Bag Bugs eyes.Made in Italy. </p>
            <li>Length:8.5 inches</li>
            <li>Height:3.9 inches</li>
                      <li>Depth:0.8 inches</li>
                      <li>Composition:100% Lamb leather + back: 100% Calf </li>
            <p>Universal Style #: Product Code:7M0270O73F17HQ</p>
            <p>More information? <a href="Information/FENDI-COIN PURSE.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-CONTINENTAL WITH CHAIN":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0365A18BF11CB_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0365A18BF11CB_04_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-CONTINENTAL WITH CHAIN</div><br>
        <!--Price of product-->
        <div class="Price">$850.00</div><br>
        <div class="Property">
          <p>COLOR :RED/PINK/BROWN/LIGHT PINK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Continental F is Fendi wallet with slim detachable chain shoulder strap. Inside, it has two gusseted compartments, zip pocket, flat pockets and six credit card slots. Made of white cruise leather. Twist lock with the new Fendi logo. Gold metalware.
  Made in Italy. </p>
            <li>Length:7.5 inches</li>
            <li>Height:3.5 inches</li>
                      <li>Depth:0.4 inches</li>
                      <li>Composition:100% calfskin</li>
            <p>Universal Style #: Product Code:8M0365A18BF01KW</p>
            <p>More information? <a href="Information/FENDI-CONTINENTAL WITH CHAIN.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-CONTINENTAL":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0251A6CBF13VK_01_large 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0251A6CBF13VK_02_large 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-CONTINENTAL</div><br>
        <!--Price of product-->
        <div class="Price">$770.00</div><br>
        <div class="Property">
          <p>COLOR :BLACK/RED/PINK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Continental F is Fendi wallet fastened with a press stud. Spacious and well-organized, with two gusseted pockets, a zippered pocket, ten card slots and flat side pockets. Made of black calf leather. FF pattern printed in relief and hand-painted in tones of black and brown. Gold-finish metalware. Made in Italy. </p>
            <li>Length:7.5 inches</li>
            <li>Height:3.5 inches</li>
            <li>Depth:0.4 inches</li>
            <li>Composition:100% Calf leather, inside: 100% Calf leather, 50% Cotton, 42% Polyamide, 8% Resins, embroidery: 100% Zamak
  </li>
            <p>Universal Style #: Product Code:8M0251A6CBF13VK</p>
            <p>More information? <a href="Information/FENDI-CONTINENTAL.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-MICRO TRIFOLD":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0415A5DYF0MVV_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0415A5DYF0MVV_03_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-MICRO TRIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$650.00</div><br>
        <div class="Property">
          <p>COLOR :COLOR : BLACK/RED <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Compact, tri-fold Peekaboo wallet with large internal bill compartment and three concealed card holders. External purse with iconic hook closure. Made of matte-effect red calf leather. Contrasting two-tone lining. Gold-finish metalware. Made in Italy. </p>
            <li>Length:2.8 inches</li>
            <li>Height:3.7 inches</li>
            <li>Depth:1.2 inches</li>
            <li>Composition:100% Calfskin</li>
            <p>Universal Style #: Product Code:8M0415A5DYF0MVV</p>
            <p>More information? <a href="Information/FENDI-MICRO TRIFOLD.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-MICRO TRIFOLDA":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0395SMTF1893_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0395SMTF1893_03_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-MICRO TRIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$630.00</div><br>
        <div class="Property">
          <p>COLOR :Brown leather wallet <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Compact trifold Selleria wallet, with large internal bill compartment, three concealed card holders and an external coin purse with a press-stud fastening. Made of brown Romano leather, with tone-on-tone hand stitching. Contrasting two-tone lining. Gold-finish metalware.Made in Italy. </p>
            <li>Length:3.7 inches</li>
            <li>Height:3 inches</li>
                      <li>Depth:1.2 inches</li>
            <p>Universal Style: Product Code:8M0395SMTF1893</p>
                      <p>More information? <a href="Information/FENDI-MICRO TRIFOLDA.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-ZIP-AROUND":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M04016GMF13VK_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M04016GMF13VK_04_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-ZIP-AROUND</div><br>
        <!--Price of product-->
        <div class="Price">$550.00</div><br>
        <div class="Property">
          <p>COLOR :Brown leather wallet <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>By The Way wallet with zip fastening along three sides. Interior features a large bill compartment, 8 card holder slots and a removable coin pouch with zip fastening. Made of brown calfskin. Black leather interior and pouch. Decorated with the iconic By The Way stud. Gold-finish metalware.Made in Italy. </p>
            <li>Length:15</li>
            <li>Height:10,5</li>
                      <li>Depth:2</li>
                      <li>Composition:100% calf leather + inside: 100% calf leather + 50% cotton, 42% polyamide, 8% resins</li>
                      <p>Universal Style: Product Code:8M04016GMF13VK</p>	
                      <p>More information? <a href="Information/FENDI-ZIP AROUND.docx">Click here</a></p>            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENI-CARD POUCH":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0348A18BF11CB_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0348A18BF11CB_02_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-CARD POUCH</div><br>
        <!--Price of product-->
        <div class="Price">$420.00</div><br>
        <div class="Property">
          <p>COLOR :White leather card holder <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Small slim F is Fendi pouch with gusseted interior and 5 card slots on the back. Zip fastening. Made of white cruise leather. Decorated with the new Fendi logo. Gold metalware.Made in Italy. </p>
            <li>Length:13,5</li>
            <li>Height:8</li>
                      <li>Depth:,5</li>
                      <li>Composition:100% calf leather</li>
                      <p>Universal Style: Product Code:8M0348A18BF11CB</p>	
                      <p>More information? <a href="Information/FENDI-CARD POUCH.docx">Click here</a></p>            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //fendi wallet
    case "CHANEL 19 Waist Bag":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/chanel-19-waist-bag-navy-blue-black-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-packshot-default-as1163b01624mh059-8819792314398.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/chanel-19-waist-bag-navy-blue-black-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-packshot-alternative-as1163b01624mh059-8819794673694.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL 19 Waist Bag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,200</div><br>
        <div class="Property">
          <p>COLOR : Navy Blue/Black <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Wool Tweed, Gold-Tone, Silver-Tone & Ruthenium-Finish Metal.</p>
            <li>Reference: AS1163 B01624 MH059</li>
            <li>11 × 20 × 5 cm</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL- 2.55 Card Holder":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/2-55-card-holder-black-aged-calfskin-black-metal-aged-calfskin-black-metal-packshot-alternative-a80611y8360894305-8819836878878.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/2-55-card-holder-black-aged-calfskin-black-metal-aged-calfskin-black-metal-packshot-other-a80611y8360894305-8819820167198.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL- 2.55 Card Holder</div><br>
        <!--Price of product-->
        <div class="Price">SGD 510</div><br>
        <div class="Property">
          <p>COLOR :BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Aged Calfskin & Black Metal</p>
            <li>Reference: A80611 Y83608</li>
            <li>7.5 × 0.5 × 11.2 cm</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-2.55 Handbag":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/2-55-handbag-ecru-navy-blue-orange-white-wool-tweed-denim-gold-tone-metal-wool-tweed-denim-gold-tone-metal-packshot-default-a37586b01467n5259-8819789889566.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/2-55-handbag-ecru-navy-blue-orange-white-wool-tweed-denim-gold-tone-metal-wool-tweed-denim-gold-tone-metal-packshot-other-a37586b01467n5259-8819788316702.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-2.55 Handbag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$6,825</div><br>
        <div class="Property">
          <p>COLOR : Ecru, Navy Blue, Orange ,White <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Wool Tweed, Denim & Gold-Tone Metal</p>
            <li>16 × 24 × 7.5 cm</li>
                      <li>Reference: A37586 B01467 N5259</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-BOY CHANEL Zipped Coin Purse":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/boy-chanel-zipped-coin-purse-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-a80602y0765994305-8819948322846.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/boy-chanel-zipped-coin-purse-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-other-a80602y0765994305-8812132007966.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-BOY CHANEL Zipped Coin Purse</div><br>
        <!--Price of product-->
        <div class="Price">SGD 800</div><br>
        <div class="Property">
          <p>COLOR :GREEN/BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Lambskin & Gold-Tone Metal</p>
            <li>Reference: A80602 Y07659 94305</li>
            <li> 7.5 × 11 × 2 cm </li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Clutch":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/clutch-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-as1184b0151794305-8819798999070.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/clutch-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-other-as1184b0151794305-8819787005982.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Clutch</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,550</div><br>
        <div class="Property">
          <p>COLOR : Black <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Lambskin & Gold-Tone MetaL.</p>
            <li>17 × 31 × 4 cm</li>
                      <li>Reference: AS1184 B01517 94305</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Flap Bag":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/flap-bag-silver-black-sequins-ruthenium-finish-metal-sequins-ruthenium-finish-metal-packshot-default-as1078b01638n4552-8819791134750.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/flap-bag-silver-black-sequins-ruthenium-finish-metal-sequins-ruthenium-finish-metal-packshot-other-as1078b01638n4552-8819799588894.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Flap Bag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$6,450</div><br>
        <div class="Property">
          <p>COLOR : Silver/Black <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Sequins & Ruthenium-Finish Metal</p>
            <li>15 × 22 × 7 cm</li>
                      <li>Reference: AS1078 B01638 N4552</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Small Vanity Case":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/small-vanity-case-navy-blue-black-gray-jersey-calfskin-gold-tone-metal-jersey-calfskin-gold-tone-metal-packshot-default-a93342b01189n4963-8818377392158.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/small-vanity-case-navy-blue-black-gray-jersey-calfskin-gold-tone-metal-jersey-calfskin-gold-tone-metal-packshot-other-a93342b01189n4963-8818376212510.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Small Vanity Case</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,725</div><br>
        <div class="Property">
          <p>COLOR : Navy Blue, Black & Gray <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Jersey, Calfskin & Gold-Tone Metal</p>
            <li>13 × 7 × 17 cm</li>
                      <li>Reference: A93342 B01189 N4963</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Waist Bag & Coin Purse":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/waist-bag-coin-purse-white-aged-calfskin-gold-tone-metal-aged-calfskin-gold-tone-metal-packshot-default-as1077b0140110601-8819796377630.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/waist-bag-coin-purse-white-aged-calfskin-gold-tone-metal-aged-calfskin-gold-tone-metal-packshot-other-as1077b0140110601-8819796639774.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Waist Bag & Coin Purse</div><br>
        <!--Price of product-->
        <div class="Price">CAN$3,625</div><br>
        <div class="Property">
          <p>COLOR : White <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Aged Calfskin & Gold-Tone Metal</p>
            <li>15 × 34 × 6 cm</li>
                      <li>Reference: AS1077 B01401 10601</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Waist Bag":{
      text=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/waist-bag-black-brown-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-packshot-default-as0406b01575n5275-8819788808222.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/waist-bag-black-brown-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-packshot-other-as0406b01575n5275-8819797753886.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Waist Bag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,625</div><br>
        <div class="Property">
          <p>COLOR : Black/Brown <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Shiny Crumpled Sheepskin, Shearling Sheepskin & Gold-Tone Metal.</p>
            <li>11 × 17 × 5 cm</li>
                      <li>Reference: AS0406 B01575 N5275</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }

    //chanel wallet
    case "LOUIS VUITTON - ADÈLE WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ADÈLE WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ADÈLE WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ADÈLE WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ADÈLE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1010.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Crafted from embossed Monogram Empreinte leather, the elegant Adèle Wallet has an ultra-slim design with two leather zips and a magnetized button for easy opening. Roomy enough to hold a smartphone in addition to cards and coins, it can also be carried as a clutch.</p>
            <li>Scarlet Red</li>
            <li>Monogram Empreinte embossed supple grained cowhide leather</li>
            <li>Supple grained cowhide-leather trim</li>
            <li>Grained cowhide-leather lining</li>
            <li>22.0 x 10.0 x 1.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ADÈLE WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - CROISETTE CHAIN WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - CROISETTE CHAIN WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - CROISETTE CHAIN WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - CROISETTE CHAIN WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - CROISETTE CHAIN WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1730.00</div><br>
        <div class="Property">
          <p>COLOR : Rose Ballerine <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>This reinterpretation of the Croisette handbag in Damier canvas features a colorful leather lining and an emblematic metallic clasp inspired by historic Louis Vuitton trunks. Fresh and feminine, it can be used as a large wallet or a small, chic evening pouch, either with or without its removable chain.</p>
            <li>12 CC slots</li>
            <li>1 zipped coin pocket</li>
            <li>2 flat pockets</li>
            <li>2 large gusseted compartments</li>
            <li>Damier Ebène coated canvas</li>
            <li>19.0 x 10.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - CROISETTE CHAIN WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - LOCKME II WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - LOCKME II WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - LOCKME II WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - LOCKME II WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - LOCKME II WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1600.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
        <div id="collapse" class="panel-collapse collapse">
            <p>Echoing the stylish, casual design of the Lockme II handbag, this wallet in soft calf leather is embellished with a feminine braided detail that subtly references Louis Vuitton's tradition of craftsmanship. Secured with a distinctive LV initials clasp, its spacious interior boasts a variety of pockets and compartments.</p>
            <li>12 card slots</li>
            <li>1 patch pocket</li>
            <li>1 large flat pocket</li>
            <li>Silver color metallic pieces</li>
            <li>19.5 x 10.0 x 2.0 cm (Length x Height x Width) </li>
          <p>More information? <a href="Information/LOUIS VUITTON - LOCKME II WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - SARAH WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - SARAH WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - SARAH WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - SARAH WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - SARAH WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1140.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Sarah wallet gets a bold new look as part of the LV Jungle special edition of accessories and leather goods. It comes in Monogram Giant canvas, which is revisited with a graphic animal print. This classic envelope-style wallet opens to reveal a well-organized interior with a variety of pockets and card slots.</p>
            <li>Monogram Giant coated canvas</li>
            <li>Grained cowhide-leather lining</li>
            <li>Gold-color hardware</li>
            <li>Press-stud closure</li>
            <li>Zipped coin pocket</li>
            <li>19.0 x 10.5 x 2.0 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - SARAH WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - VICTORINE WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - VICTORINE WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - VICTORINE WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - VICTORINE WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - VICTORINE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$745.00</div><br>
        <div class="Property">
          <p>COLOR : Red <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Victorine wallet in Damier Ebene canvas is a compact, envelope-style design which opens out to reveal a range of practical features, including space for bills and cards, and a zipped coin pocket on the side. Its colorful press-stud and grained-leather lining add a touch of femininity.</p>
            <li>Cerise Red</li>
            <li>Damier Ebene coated canvas</li>
            <li>Grained cowhide-leather trim</li>
            <li>Gold-color hardware</li>
            <li>Press-stud closure</li>
            <li>12.0 x 9.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - VICTORINE WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Damier Ebene</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - ZIPPY WALLET-2": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET-1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET-2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET-3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ZIPPY WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1410.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Zippy wallet is crafted from Epi leather, characterized by its distinctive grain. One of Louis Vuitton's most iconic models, the Zippy wallet is named for its secure, all-round zip, which opens to reveal multiple card slots, pockets and compartments. Perfect for organizing everyday essentials, this wallet can also be used as a clutch.</p>
            <li>Cherry Berry Burgundy</li>
            <li>Epi grained cowhide leather</li>
            <li>Grained cowhide-leather lining</li>
            <li>Silver-color hardware</li>
            <li>3 large gusseted compartments</li>
            <li>19.5 x 10.5 x 2.5 cm (Length x Height x Width)  </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ZIPPY WALLET-2.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - ZIPPY WALLET-3": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 4.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 5.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 6.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ZIPPY WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1410.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>For Fall-Winter 2019, Nicolas Ghesquière brings the Monogram LV Pop motif to the Zippy Wallet’s calf leather. Inspired by the distinctive colorway of the Centre Pompidou museum in Paris, the pattern has a neon, 3-D effect that brings modernity to the wallet. The interior array of pockets, compartments, and card slots make it practical.</p>
            <li>Monogram LV Pop Blue</li>
            <li>Printed calf leather</li>
            <li>Calf-leather trim</li>
            <li>Microfiber lining</li>
            <li>19.5 x 10.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ZIPPY WALLET-3.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - ZIPPY WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ZIPPY WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1410.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Time Trunk Zippy wallet comes in transformed Damier canvas with trompe-l'œil detailing for a vintage look. It is part of a seasonal collection referencing the Fall-Winter 2018-19 fashion show, where Nicolas Ghesquière revisited Louis Vuitton's historic trunks. This iconic wallet packs a host of convenient features into a secure, zip-around format.</p>
            <li>Transformed Damier canvas</li>
            <li>Calf-leather trim</li>
            <li>Calfskin lining</li>
            <li>Brushed gold-color hardware</li>
            <li>12 CC slots</li>
            <li>19.5 x 10.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ZIPPY WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LV - CLÉMENCE WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LV - CLÉMENCE WALLET 1.PNG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LV - CLÉMENCE WALLET 2.PNG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LV - CLÉMENCE WALLET 3.PNG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - CLÉMENCE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$950.00</div><br>
        <div class="Property">
          <p>COLOR : Rose Ballerine Coquelicot <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>For the Epi Blooming Corners limited edition, the Clémence wallet comes in Epi leather with contrasting Monogram flower-shaped corners. This detail, which was inspired by historic Louis Vuitton trunks, brings a fresh, playful note to this elegant long wallet, whose secure zip-around format conceals a variety of pockets and credit card slots.</p>
            <li>Epi cowhide leather in pale-pink Rose Ballerine</li>
            <li>Cowhide-leather lining</li>
            <li>Silver-color hardware</li>
            <li>8 CC slots</li>
            <li>1 zipped coin pocket</li>
            <li>20.0 x 9.0 x 2.0 cm 
              (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - CLÉMENCE WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //**prada wallet */
    default: {
      text = 'product 1';
      break;
    }
  }
  document.getElementById('pr1-compire').innerHTML = text;
});



var getValue1 = document.getElementsByName('product2')[0];
var pr2 = '';
getValue1.addEventListener('input', function () {
  pr2 = getValue1.value;
  var text2 = "";
  switch (pr2) {
    case 'GG Black mens bag(men)':
      {
        text2 = `<div class="row">
        <!-- Image of product-->
        <div class="col-sm-12 col-lg-6 ">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img class="d-block w-100"
                  src="image/523603_9F2YN_1095_001_100_0055_Light-GG-Black-mens-bag.jpg"
                  alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="image/523603_9F2YN_1095_002_100_0055_Light-GG-Black-mens-bag.jpg"
                  alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-0">
          <!-- Title of product-->
          <div class="title-of-product">GG Black men's bag(men)</div>
          <!--Price of product-->
          <div class="Price">$850.00</div>
          <div class="Property">
            <p>COLOR : BLACK <br>
              SIZE : ONE SIZE <br>
              IN STOCK
            </p>
          </div>
          <button class="add-to-bag">ADD TO BAG</button>
          <!-- Detail of product-->
          <div class="detail">
            <div class="panel-heading">
              <!-- Detail button-->
              <br>
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse">Detail</a>
              </h5>
            </div>
            <!-- Collapse detail of product-->
            <div id="collapse" class="panel-collapse collapse">
              <div class="product-detail">
                <p>
                  First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                  1930s, and from then it's been an established symbol of Gucci's heritage. This men's bag combines the
                  signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
                <ul>
                  <li>Black/grey GG Supreme canvas, a material with low environmental impact</li>
                  <li>Blue and red Web</li>
                  <li>Palladium-toned hardware</li>
                  <li>Interior zipper pocket and two smartphone pockets</li>
                  <li>Detachable wrist strap with 7" drop</li>
                  <li>Zipper closure</li>
                  <li>W12" x H9.5" x D2"</li>
                  <li>Cotton linen lining</li>
                  <li>Made in Italy</li>
                </ul>
                <p>More information? <a href="Information/GG Black men's bag.docx">Click here</a></p>
              </div>
            </div>
            <div class="panel-heading">
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
              </h5>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
              <p>
                <li>Leather</li>
                <li>Imported</li>
              </p>
            </div>
          </div>
        </div>
      </div>`;
        break;
      }
    case 'GG iPhone case with tiger print':
      {
        text2 = `<div class="row">
        <!-- Image of product-->
        <div class="col-sm-12 col-lg-6 ">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img class="d-block w-100"
                  src="image/475317_DJ20T_1000_001_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="image/475317_DJ20T_1000_002_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="image/475317_DJ20T_1000_003_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-0">
          <!-- Title of product-->
          <div class="title-of-product">GG iPhone case with tiger print</div>
          <!--Price of product-->
          <div class="Price">$480.00</div>
          <div class="Property">
            <p>COLOR : BLACK <br>
              SIZE : ONE SIZE <br>
              IN STOCK
            </p>
          </div>
          <button class="add-to-bag">ADD TO BAG</button>
          <!-- Detail of product-->
          <div class="detail">
            <div class="panel-heading">
              <!-- Detail button-->
              <br>
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse">Detail</a>
              </h5>
            </div>
            <!-- Collapse detail of product-->
            <div id="collapse" class="panel-collapse collapse">
              <div class="product-detail">
                <p>
                  Presented in black and grey GG Supreme canvas, this iPhone case is completed by a removable wrist strap.
                  Tigers, reflecting the fascination for wild animals that permeate the House's narrative, contrast the
                  monogrammed background.</p>
                <ul>
                  <li>Black/grey GG Supreme canvas with tigers print, a material with low environmental impact</li>
                  <li>Black leather trim</li>
                  <li>Moiré lining</li>
                  <li>Two card slots</li>
                  <li>Removable wrist strap with 4.9" drop</li>
                  <li>Zipper closure</li>
                  <li>7"W x 4.3"H</li>
                  <li>Made in Italy</li>
                </ul>
                <p>More information? <a href="Information/GG iPhone case with tiger print.docx">Click here</a></p>
              </div>
            </div>
            <div class="panel-heading">
              <h5 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
              </h5>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
              <p>
                <li>Leather</li>
                <li>Imported</li>
              </p>
            </div>
          </div>
        </div>
      </div>`;
        break;
      }
    case "GG Marmont leather pouch": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/575137_G2BAN_1087_001_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/575137_G2BAN_1087_002_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/575137_G2BAN_1087_004_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">GG Marmont leather pouch </div>
        <!--Price of product-->
        <div class="Price">$830.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                A slim leather pouch, distinguished by Double G hardware. Made in calfskin leather heat-stamped to
                achieve a boar effect, giving it a textured appearance.</p>
              <ul>
                <li>Black leather</li>
                <li>Removable leather wrist strap</li>
                <li>Six card slots and one open pocket</li>
                <li>Zipper closure </li>
                <li>12"W x 8"H x .6"D</li>
                <li>Made in Italy</li>
              </ul>
              <p>More information? <a href="Information/GG Marmont leather pouch 830$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci 1955 horsebit": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100"
                src="image/602204_92TCG_8563_001_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/602204_92TCG_8563_002_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/602204_92TCG_8563_003_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci 1955 horsebit bag </div>
        <!--Price of product-->
        <div class="Price">$2300.00</div>
        <div class="Property">
          <p>COLOR : BROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Introduced for Cruise 2020, the Gucci 1955 Horsebit bag is recreated from an archival design. With the
                same lines and forms first introduced over six decades ago, the accessory unifies the original details
                with a modern spirit, highlighting the Horsebit. Part of Gucci’s genetic code, the double ring and bar
                design has been established as one of the most distinctive elements among the House symbols borrowed
                from the equestrian world. Presented on a small flap shoulder bag, the hardware is paired with the
                House’s monogram fabric and completed with a special mechanism that adjusts the length of the shoulder
                strap so it can be carried on one shoulder or cross body. </p>
              <ul>
                <li>A limited time online exclusive, this bag will be available with early access on Gucci.com</li>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Gold-toned hardware</li>
                <li>Microfiber lining with a suede-like finish</li>
                <li>Each bag will ship with a small pouch containing two additional button covers that can be used to
                  cover the exposed studs when the shoulder strap is lengthened</li>
                <li>Horsebit detail at the front</li>
                <li>Half Horsebit detail at each side</li>
                <li>Three gussets with one zipper and one open pocket</li>
                <li>Shoulder strap with snap buttons can be adjusted from a 9.8" to 17.7" drop</li>
                <li>Flap closure</li>
                <li>Small size: 9.8"W x 7"H x 3.1"D</li>
                <li>The model is 5'8" tall</li>
                <li>Made in Italy </li>
              </ul>
              <p>More information? <a href="Information/Gucci 1955 horsebit bag.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci Zumi grainy leather card case": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100"
                src="image/570679_1B90X_1275_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570679_1B90X_1275_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570679_1B90X_1275_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci Zumi grainy leather card case </div>
        <!--Price of product-->
        <div class="Price">$580.00</div>
        <div class="Property">
          <p>COLOR : PINK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Hybrid design elements continue to shape the Gucci narrative atop this card case. Crafted from white
                grainy leather, the accessory is enhanced by the Interlocking G Horsebit, a fusion of two of the House's
                most characteristic codes. The Gucci Zumi line takes its name from actress and experimental musician
                Zumi Rosow – unconventional and modern, and at the same time evoking an inherent free spirit – Zumi's
                individual look creates an unexpected contrast to the structured, refined details of the collection.</p>
              <ul>
                <li>White grainy leather</li>
                <li>Shiny gold- and silver-toned hardware</li>
                <li>Moiré lining</li>
                <li>Interlocking G Horsebit—inspired by an archival piece, the hardware combines two of the House's most
                  historical motifs in a mix of metals</li>
                <li>Four card slots</li>
                <li>4"W x 3"H</li>
                <li>Made in Italy</li>
              </ul>
              <p>More information? <a href="Information/Gucci Zumi grainy leather card case.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci Zumi grainy leather card case wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100"
                src="image/570660_1B90X_1000_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570660_1B90X_1000_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="image/570660_1B90X_1000_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci Zumi grainy leather card case wallet</div>
        <!--Price of product-->
        <div class="Price">$580.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Hybrid design elements continue to shape the Gucci narrative. Completed by a detachable chain strap, the
                grainy leather card case wallet is enhanced by the Interlocking G Horsebit, a fusion of two of the
                House's most characteristic codes. Introduced in the evocative setting of the Théâtre Le Palace in
                Paris, the Gucci Zumi line takes its name from actress and experimental musician Zumi Rosow, who walked
                the Spring Summer 2019 runway carrying the bag. </p>
              <ul>
                <li>Black grainy leather</li>
                <li>Shiny gold- and silver-toned hardware</li>
                <li>Moiré lining</li>
                <li>Interlocking G Horsebit—inspired by an archival piece, the hardware combines two of the House's most
                  historical motifs in a mix of metals</li>
                <li>Five card slots</li>
                <li>Interior open pocket</li>
                <li>Interior zipper pocket</li>
                <li>Detachable metal chain with 4" drop</li>
                <li>Snap closure</li>
                <li>Open: 4.3"W x 3"H</li>
                <li>Closed: 4.3"W x 3.3"H x 1"D</li>
                <li>Made in Italy</li>
              </ul>
              <p>More information? <a href="Information/Gucci Zumi grainy leather card case wallet.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Gucci Zumi python mini bucket": {
      text2 = ` <div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/576432_0OLRX_9698_001_065_0016_Light-Gucci-Zumi-mini-bucket-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/576432_0OLRX_9698_005_100_0000_Light-Gucci-Zumi-mini-bucket-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Gucci Zumi python mini bucket bag </div>
        <!--Price of product-->
        <div class="Price">$1150.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                The mini bucket bag shape is revisited in precious dusty grey-colored python. Channeling the
                unconventional and individual spirit of its namesake—actress and experimental musician Zumi Rosow—the
                petite drawstring shape is topped with the line’s signature hardware in a modern mix of silver and gold
                tones.</p>
              <ul>
                <li>Dusty grey python </li>
                <li>Shiny gold- and silver-toned hardware</li>
                <li>Microfiber and moiré lining </li>
                <li>Interlocking G Horsebit—inspired by an archival piece, the hardware combines two of the House's most
                  historical motifs in a mix of metals</li>
                <li>Detachable key ring</li>
                <li>2 card slots</li>
                <li>Chain strap with 23.6" drop</li>
                <li>Drawstring closure</li>
                <li>Can also be worn as a cross body bag</li>
                <li>Mini size: 7.5"W x 6.7"H</li>
                <li>The model is 5'9" tall</li>
                <li>Made in Italy</li>
                <li>Note that python products may not be shipped to California</li>
              </ul>
              <p>More information? <a href="Information/Gucci Zumi python mini bucket bag.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Medium suede shoulder": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/589471_1DGBG_2334_001_071_0000_Light-Medium-suede-shoulder-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/589471_1DGBG_2334_002_071_0000_Light-Medium-suede-shoulder-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Medium suede shoulder bag </div>
        <!--Price of product-->
        <div class="Price">$2890.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                Presented in deep brown suede, this shoulder bag introduced for Fall Winter 2019 is completed with the
                framed torchon Double G, which defines the line. A modern mix of shiny and antique gold-toned metal, the
                new emblem reintroduces the Double G with a twisted torchon finish surrounded by a ring detail. The
                structured shape is completed with an adjustable leather shoulder strap and a flap closure with a hidden
                pocket detail.</p>
              <ul>
                <li>Deep brown suede</li>
                <li>Antique and shiny gold-toned hardware</li>
                <li>Framed torchon Double G</li>
                <li>Open pocket under the flap</li>
                <li>Interior zipper and smartphone pockets</li>
                <li>Adjustable shoulder strap with 16.5" drop </li>
                <li>Flap closure</li>
                <li>Medium size: 11.8"W x 8.3"H x 3.7"D</li>
                <li>Viscose lining</li>
                <li>Made in Italy</li>
                <li>The model is 5'9" tall</li>
              </ul>
              <p>More information? <a href="Information/Medium suede shoulder bag.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Ophidia GG zip around wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/523154_96IWG_8745_001_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/523154_96IWG_8745_002_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Ophidia GG zip around wallet</div>
        <!--Price of product-->
        <div class="Price">$690.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Ophidia GG zip around wallet.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    //gucci***********************//
    case "Leather Badge Holder": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Leather Badge Holder 1.jpeg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Leather Badge Holder 2.webp" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Leather Badge Holder </div>
        <!--Price of product-->
        <div class="Price">$295.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <div class="product-detail-block clickable border-bottom">
                <div class="main-container">
                  <div class="detail-label middle" id="product-details-label">product details</div>
                  <span class="open middle-right icon-minus" role="button" tabindex="0"
                    aria-label="toggle product details" aria-expanded="true">
                    <span class="sr-only">Toggleproduct details</span>
                  </span>
                </div>
                <div aria-labelledby="product-details-label" class="detail-content" id="product-details-content"
                  tabindex="-1" style="display: block;">

                  Saffiano leather with double pocket inside for documents or tickets<br>Saffiano leather wrist
                  strap<br>Gold-toned hardware<br>Prada lettering logo inside and outside<br><br>-Snap closure<br>
                  9.7
                  cm height<br>

                  7
                  cm width
                  <p>More information? <a href="Information/Leather Badge Holder.docx">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Leather Keychain": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Leather Keychain 1.webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Leather Keychain 2.webp" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Leather Keychain</div>
        <!--Price of product-->
        <div class="Price">$380.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <div class="product-detail-block clickable border-bottom">
                <div class="main-container">
                  <div class="detail-label middle" id="product-details-label">product details</div>
                  <span class="open middle-right icon-minus" role="button" tabindex="0"
                    aria-label="toggle product details" aria-expanded="true">
                    <span class="sr-only">Toggleproduct details</span>
                  </span>
                </div>
                <div aria-labelledby="product-details-label" class="detail-content" id="product-details-content"
                  tabindex="-1" style="display: block;">

                  Saffiano leather<br>Metal snap-hook and split ring<br>Zipper pouch<br>Metal hardware<br>Enamel
                  triangle logo<br>
                  6.5
                  cm height<br>
                  10.5
                  cm width
                  <p>More information? <a href="Information/Leather Keychain 380$.docx">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Leather Wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Leather Wallet 1.webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Leather Keychain 2.webp" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Leather Wallet</div>
        <!--Price of product-->
        <div class="Price">$725.00</div>
        <div class="Property">
          <p>COLOR : BLACK <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <div class="product-detail-block clickable border-bottom">
                <div class="main-container">
                  <div class="detail-label middle" id="product-details-label">product details</div>
                  <span class="open middle-right icon-minus" role="button" tabindex="0"
                    aria-label="toggle product details" aria-expanded="true">
                    <span class="sr-only">Toggleproduct details</span>
                  </span>
                </div>
                <div aria-labelledby="product-details-label" class="detail-content" id="product-details-content"
                  style="display: block;" tabindex="-1">

                  Saffiano leather<br>Zipper pull with enameled metal triangle charm<br>Zipper closure<br>Three inside
                  compartments<br>Two center pockets, including one with zipper<br>Twelve card slots<br>Nylon and
                  leather lining<br>Metal lettering logo<br>
                  10.3
                  cm height<br>

                  20
                  cm width
                  <p>More information? <a href="Information/Leather Wallet 725$.docx">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Printed Saffiano leather wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Printed Saffiano leather wallet 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Printed Saffiano leather wallet 2.jpeg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Printed Saffiano leather wallet</div>
        <!--Price of product-->
        <div class="Price">$440.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Printed Saffiano leather wallet 440$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano Cuir leather wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Saffiano Cuir leather wallet</div>
        <!--Price of product-->
        <div class="Price">$440.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano Cuir leather wallet 440$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano leather clutch": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano leather clutch 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano leather clutch 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">/Saffiano leather clutch</div>
        <!--Price of product-->
        <div class="Price">$360.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano leather clutch 570$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano Leather Coin Purse": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano leather clutch 1.jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano leather clutch 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Saffiano Leather Coin Purse</div>
        <!--Price of product-->
        <div class="Price">$360.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano Leather Coin Purse 360$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Saffiano leather wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 2.webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Saffiano Cuir leather wallet 1.jpeg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Saffiano leather wallet</div>
        <!--Price of product-->
        <div class="Price">$650.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Saffiano leather wallet 650$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "Small Prada Cahier wallet": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/Small Prada Cahier wallet 1.webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/Small Prada Cahier wallet 2.webp"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">Small Prada Cahier wallet</div>
        <!--Price of product-->
        <div class="Price">$570.00</div>
        <div class="Property">
          <p>COLOR : GROWN <br>
            SIZE : ONE SIZE <br>
            IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br>
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <div class="product-detail">
              <p>
                First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the
                1930s, and from then it's been an established symbol of Gucci's heritage. The zip around wallet combines
                the signature motif with the Web stripe—a timeless pairing that pays homage to Gucci's roots.</p>
              <ul>
                <li>Beige/ebony GG Supreme canvas, a material with low environmental impact, with brown leather trim
                </li>
                <li>Green and red Web</li>
                <li>Gold-toned hardware</li>
                <li>Double G</li>
                <li>Twelve credit card slots and three bill compartments </li>
                <li>Zipper coin pocket</li>
                <li>Zip around closure</li>
                <li>7.5"W x 4.5"H x 1"D</li>
                <li>Made in Italy</li>
                <li>
                  <a class="proposition-65-link overlay-open" href="#overlay-prop65"><b>WARNING</b> for California
                    residents</a></li>
              </ul>
              <p>More information? <a href="Information/Small Prada Cahier wallet 570$.docx">Click here</a></p>
            </div>
          </div>
          <div class="panel-heading">
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
            </h5>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <p>
              <li>Leather</li>
              <li>Imported</li>
            </p>
          </div>
        </div>
      </div>
    </div>`;
      break;
    }
    case "CALVIN KEILN - LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with an allover ck logo, this sleek wallet is made with glossy leather, a zip-around closure, an interior zip divider pocket and multiple bill and card slots.</p>
            <li>leather ck logo zip-around continental wallet</li>
            <li>allover ck logo design</li>
            <li>zip around closure</li>
            <li>interior zip divider pocket</li>
            <li>2 large bill slots</li>
            <li>12 card slots</li>
            <li>7.5" wide x 3.9" tall x 0.8" deep</li>
            <p>Style #: 37105129 <br>
            Universal Style #: K60K605129</p>
            <p>More information? <a href="Information/CALVIN KEILN - LEATHER CK LOGO ZIP-AROUND CONTINENTAL WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - LOGO PLAQUE LARGE TRIFOLD WALLET": {
      text2 = `	<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOGO PLAQUE LARGE TRIFOLD WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOGO PLAQUE LARGE TRIFOLD WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOGO PLAQUE LARGE TRIFOLD WALLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - LOGO PLAQUE LARGE TRIFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$78.00</div><br>
        <div class="Property">
          <p>COLOR : LIGHT SAND <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a prominent, polished logo plaque at the front, this spacious trifold wallet is made with soft faux leather, 14 card slots, a bill slot, a coin pocket and contemporary ck styling.</p>
            <li>logo plaque large trifold wallet</li>
            <li>faux leather</li>
            <li>14 card slots, bill slot + coin pocket</li>
            <li>metal plaque on the front</li>
            <li>7.5" wide x 3.9" tall x 1.4" deep</li>
            <li>presented in a box</li>
            
            <p>Style #: 37405099-064 <br>
            Universal Style #: K60K605099</p>
            <p>More information? <a href="Information/CALVIN KEILN - LOGO PLAQUE LARGE TRIFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - MONOGRAM LOGO TRIFOLD WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/MONOGRAM LOGO TRIFOLD WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/MONOGRAM LOGO TRIFOLD WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/MONOGRAM LOGO TRIFOLD WALLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - MONOGRAM LOGO TRIFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$78.00</div><br>
        <div class="Property">
          <p>COLOR : BRN KHK/LUG <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>A spacious silhouette with an allover ck monogram design, this iconic trifold wallet is made with water-resistant, subtly textured faux leather. Features a top flap closure with a logo plaque, an exterior back zip pocket, an interior zip pocket, multiple card slots and an id window.</p>
            <li>Monogram logo trifold wallet</li>
            <li>Top flap + logo plaque</li>
            <li>Snap closure</li>
            <li>Exterior back zip pocket</li>
            <li>Interior zip pocket</li>
            <li>8 card slots + 1 id window</li>
            <li>Fully lined</li>
            <p>Style #: 37304215 <br>
            Universal Style #: H6GOJ833</p>
            <p>More information? <a href="Information/CALVIN KEILN - MONOGRAM LOGO TRIFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - PEBBLE LARGE ZIP-AROUND WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/PEBBLE LARGE ZIP-AROUND WALLET.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/PEBBLE LARGE ZIP-AROUND WALLET 1.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - PEBBLE LARGE ZIP-AROUND WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : LIGHT SAND <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a sleek and solid look, this large wallet is made with an allover pebble texture, a zip-around closure and a signature logo plaque. interior features a zip divider coin pocket, large bill slots and multiple card slots for everyday essentials.</p>
            <li>pebble large zip-around wallet</li>
            <li>solid design</li>
            <li>zip-around closure</li>
            <li>signature logo plaque</li>
            <li>interior center zip divider pocket</li>
            <li>2 bill slots + 6 card slots</li>
            <li>8.1" wide x 4.3" tall x 1" deep</li>
            <p>Style #: 37405101-064 <br>
            Universal Style #: K60K605101</p>
            <p>More information? <a href="Information/CALVIN KEILN - PEBBLE LARGE ZIP-AROUND WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - PYTHON PATTERN ZIP CONTINENTAL WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/PYTHON PATTERN ZIP CONTINENTAL WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
            
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - PYTHON PATTERN ZIP CONTINENTAL WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK/WHT <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with a striking python pattern, this edgy zip continental wallet is made with faux leather, a zip around closure, a signature logo plaque, an interior center zip divider pocket, multiple bill slots and card slots in a fully lined interior.</p>
            <li>Python pattern zip continental wallet</li>
            <li>Zip-around closure</li>
            <li>Logo plaque</li>
            <li>Interior center zip divider pocket</li>
            <li>2 large bill slots + 2 open slots</li>
            <li>8 card slots</li>
            <li>Fully lined</li>
            <p>Style #: 37204203-817 <br>
            Universal Style #: H8JQS8VD</p>
            <p>More information? <a href="Information/CALVIN KEILN - PYTHON PATTERN ZIP CONTINENTAL WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEILN - SAFFIANO LEATHER ZIP CONTINENTAL WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER ZIP CONTINENTAL WALLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER ZIP CONTINENTAL WALLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER ZIP CONTINENTAL WALLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - SAFFIANO LEATHER ZIP CONTINENTAL WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : LUGGAGE <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this elegant zip continental wallet is made with a zip around closure, a signature logo plaque, an interior center zip divider pocket, multiple bill slots and card slots in a fully lined interior.</p>
            <li>Saffiano leather zip continental wallet</li>
            <li>Zip-around closure</li>
            <li>Logo plaque</li>
            <li>Interior center zip divider pocket</li>
            <li>2 large bill slots + 2 open slots</li>
            <li>8 card slots</li>
            <li>Fully lined</li>
            <p>Style #: 37204201-208 <br>
            Universal Style #: H8JQ18VD</p>
            <p>More information? <a href="Information/CALVIN KEILN - SAFFIANO LEATHER ZIP CONTINENTAL WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET</div><br>
        <!--Price of product-->
        <div class="Price">$58.00</div><br>
        <div class="Property">
          <p>COLOR : LUGGAGE  <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button><br><br>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this travel-ready large wristlet features a top zip closure with a signature logo plaque, a detachable wristlet strap, an interior open compartment and multiple slots with a full logo lining.</p>
            <li>Saffiano leather large zip wristlet</li>
            <li>Wristlet strap</li>
            <li>Top zip closure</li>
            <li>Logo plaque</li>
            <li>Interior open compartment</li>
            <li>4 card slots</li>
            <li>Fully lined</li>
            <li>8" wide x 5.5" tall x 0.4" deep</li>
            <p>Style #: 37204217 <br>
            Universal Style #: H9GL1KX1</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER LARGE ZIP WRISTLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - CK MONOGRAM STRIPE BILLFOLD WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/CK MONOGRAM STRIPE BILLFOLD WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CK MONOGRAM STRIPE BILLFOLD WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - CK MONOGRAM STRIPE BILLFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$48.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a signature ck monogram, this bold billfold wallet features a colorful stripe highlight. features an interior bill slot, multiple card slots and faux leather for excellent durability.</p>
            <li>ck monogram stripe billfold wallet</li>
            <li>6 card slots + bill slot</li>
            <li>CK monogram logo print</li>
            <li>pop-color stripe on the back</li>
            <li>embossed logo on the front</li>
            <li>presented in a box</li>
            <li>1.8 x 10.2 x 8.6 cm</li>
            
            <p>Style #: 47114412</p>
            <p>More information? <a href="Information/CALVIN KLEIN - CK MONOGRAM STRIPE BILLFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>100% polyurethane</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - EXOTIC LIZARD AVIATOR WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/EXOTIC LIZARD AVIATOR WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/EXOTIC LIZARD AVIATOR WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - EXOTIC LIZARD AVIATOR WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$60.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>made with an exotic lizard textured faux leather, this aviator wallet features a bifold design, a logo on the front, interior slots and border topstitching.</p>
            <li>exotic lizard aviator wallet</li>
            <li>bifold design</li>
            <li>logo plaque</li>
            <li>interior bill slot + card slots</li>
            <li>topstitching + seaming details</li>
            <li>4.6" wide x 3.8" tall x 1" deep</li>
            <p>Style #: 47208773</p>
            <p>More information? <a href="Information/CALVIN KLEIN - EXOTIC LIZARD AVIATOR WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>faux leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : NAVY <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">DETAIL</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with textured leather, this billfold wallet features a ckj logo plaque on the front, a large bill slot, 2 security slots and 8 card slots.</p>
            <li>leather ckj plaque squared billfold wallet</li>
            <li>ckj logo plaque</li>
            <li>billfold design</li>
            <li>1 large bill slot</li>
            <li>2 security slots</li>
            <li>8 card slots</li>
            <li>4.5" wide x 3.7" tall x 0.8" deep</li>
            
            <p>Style #: 47111163-480</p>
            <p>More information? <a href="Information/CALVIN KLEIN - LEATHER CKJ PLAQUE SQUARED BILLFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - LEATHER SLIMFOLD RFID WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LEATHER SLIMFOLD RFID WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LEATHER SLIMFOLD RFID WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - LEATHER SLIMFOLD RFID WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$50.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>crafted with smooth leather, this slimfold wallet features a bifold design, a logo plaque, multiple slots and rfid blocking technology.</p>
            <li>leather slimfold rfid wallet</li>
            <li>bifold design</li>
            <li>logo plaque</li>
            <li>multiple slots + id window</li>
            <li>rfid blocking technology</li>
            <li>topstitching</li>
            <li>4.9" wide x 3.7" tall x 0.6" deep</li>
            
            <p>Style #: 47208655</p>
            <p>More information? <a href="Information/CALVIN KLEIN - LEATHER SLIMFOLD RFID WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - LOGO POP COIN BILLFOLD WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOGO POP COIN BILLFOLD WALLET 2.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOGO POP COIN BILLFOLD WALLET 1.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - LOGO POP COIN BILLFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : BITTER BROWN <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with a logo pop oversized institutional logo, this billfold wallet is made with smooth leather, an interior bill slot, 5 card slots and a coin pocket.</p>
            <li>Calvin Klein Jeans</li>
            <li>logo pop coin billfold wallet</li>
            <li>smooth leather</li>
            <li>oversized embossed + printed institutional logo</li>
            <li>interior bill slot</li>
            <li>5 card slots + coin pocket</li>
            <li>4.8" wide x 3.9" tall x 1.2" deep</li>
            
            <p>Style #: 47111076-488</p>
            <p>More information? <a href="Information/CALVIN KLEIN - LOGO POP COIN BILLFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - MARBLED LEATHER OMEGA AVIATOR WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/MARBLED LEATHER OMEGA AVIATOR WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/MARBLED LEATHER OMEGA AVIATOR WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KEILN - MARBLED LEATHER OMEGA AVIATOR WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$70.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>defined by a distinct marbled look, this aviator wallet features smooth leather, an embossed logo with omega stitching on the front, an interior bill slot, multiple card slots, an id window and a coin pouch.</p>
            <li>marbled leather omega aviator wallet</li>
            <li>bifold design</li>
            <li>embossed logo + omega stitching</li>
            <li>interior bill slot</li>
            <li>coin pouch</li>
            <li>multiple slots + id window</li>
            <li>topstitching</li>
            <li>4.9" wide x 3.7" tall x 1" deep</li>
            <p>Style #: 47209108</p>
            <p>More information? <a href="Information/CALVIN KEILN - MARBLED LEATHER OMEGA AVIATOR WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - PEBBLE LEATHER LOGO BIFOLD WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/PEBBLE LEATHER LOGO BIFOLD WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/PEBBLE LEATHER LOGO BIFOLD WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - PEBBLE LEATHER LOGO BIFOLD WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$48.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with textured pebble leather, this bifold wallet features an embossed logo on the front, an interior bill slot, 6 card slots and 2 security pockets.</p>
            <li>pebble leather logo bifold wallet</li>
            <li>bifold design</li>
            <li>embossed logo</li>
            <li>interior bill slot</li>
            <li>6 card slots + 2 security slots</li>
            <li>topstitching + seaming details</li>
            <p>Style #: 47114445</p>
            <p>More information? <a href="Information/CALVIN KLEIN - PEBBLE LEATHER LOGO BIFOLD WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK/GOLD <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this travel-ready large wristlet features a slim profile, a top zip closure with a signature logo plaque, a wristlet strap and a front zip pocket, an interior open compartment and multiple slots with a full logo lining.</p>
            <li>Saffiano leather large slim wristlet</li>
            <li>Top zip closure</li>
            <li>Wristlet strap</li>
            <li>Front zip pocket + logo plaque</li>
            <li>Interior open compartment</li>
            <li>8 card slots</li>
            <li>Fully lined</li>
            <p>Style #: 37204206 <br>
            Universal Style #: H3GG11WA</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER LARGE SLIM WRISTLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - SAFFIANO LEATHER PASSCASE WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER PASSCASE WALLET 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER PASSCASE WALLET 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER PASSCASE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$60.00</div><br>
        <div class="Property">
          <p>COLOR : BROWN <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>a passcase wallet featuring textured saffiano leather, a bifold design and a removable extra flap with id windows.</p>
            <li>saffiano leather textured wallet</li>
            <li>removable double-sided id holder</li>
            <li>logo plaque on front</li>
            <li>large bill slot</li>
            <li>6 card slots</li>
            <li>2 hidden slots</li>
            <li>4.5" wide x 3.5" tall x 0.75" deep</li>
            
            <p>Style #: 47209346-200</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER PASSCASE WALLET.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN - SAFFIANO LEATHER SHOULDER ZIP BAG": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER SHOULDER ZIP BAG 1.jfif" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER SHOULDER ZIP BAG 2.jfif" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/SAFFIANO LEATHER SHOULDER ZIP BAG 3.jfif" alt="Third slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN - SAFFIANO LEATHER SHOULDER ZIP BAG</div><br>
        <!--Price of product-->
        <div class="Price">$68.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK/GOLD <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Designed with distinct saffiano leather, this textured shoulder bag is made with a chainlink shoulder 	strap, a top zip closure, a signature logo plaque, an exterior back slip pocket and 2 interior 		    pockets with a full logo lining.</p>
            <li>Saffiano leather shoulder zip bag</li>
            <li>Chainlink shoulder strap</li>
            <li>Top zip closure</li>
            <li>Logo plaque</li>
            <li>Exterior back slip pocket</li>
            <li>Interior 1 zip pocket + 1 slip pocket</li>
            <li>Fully lined</li>
            <li>Style #: 37204211-001</li>
            <li>Universal Style #: H9GH1KD1</li><br>
            <p>Style #: 37204211-001 <br>
            Universal Style #: H9GH1KD1</p>
            <p>More information? <a href="Information/CALVIN KLEIN - SAFFIANO LEATHER SHOULDER ZIP BAG.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CALVIN KLEIN -TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CALVIN KLEIN -TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE</div><br>
        <!--Price of product-->
        <div class="Price">$98.00</div><br>
        <div class="Property">
          <p>COLOR : BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>designed with textured leather and a modern look, this bifold wallet features a ckj logo on the front, an interior bill slot, multiple interior slots and border topstitching. paired with a coordinating card case, which can be removed or inserted within this bifold design.</p>
            <li>Calvin Klein Jeans</li>
            <li>textured ckj logo billfold wallet + card case</li>
            <li>textured leather</li>
            <li>ckj logo</li>
            <li>bifold design</li>
            <li>interior bill slot + 2 security slots</li>
            <li>8 card slots</li>
            <li>5" wide x 3.9" tall x 1.2" deep</li>
            <p>Style #: 47111254-488</p>
            <p>More information? <a href="Information/CALVIN KLEIN -TEXTURED CKJ LOGO BILLFOLD WALLET + CARD CASE.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //**CALVIN KLEIN WALLET */
    case "LOUIS VUITTON - ADÈLE WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ADÈLE WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ADÈLE WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ADÈLE WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ADÈLE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1010.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Crafted from embossed Monogram Empreinte leather, the elegant Adèle Wallet has an ultra-slim design with two leather zips and a magnetized button for easy opening. Roomy enough to hold a smartphone in addition to cards and coins, it can also be carried as a clutch.</p>
            <li>Scarlet Red</li>
            <li>Monogram Empreinte embossed supple grained cowhide leather</li>
            <li>Supple grained cowhide-leather trim</li>
            <li>Grained cowhide-leather lining</li>
            <li>22.0 x 10.0 x 1.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ADÈLE WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - CROISETTE CHAIN WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - CROISETTE CHAIN WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - CROISETTE CHAIN WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - CROISETTE CHAIN WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - CROISETTE CHAIN WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1730.00</div><br>
        <div class="Property">
          <p>COLOR : Rose Ballerine <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>This reinterpretation of the Croisette handbag in Damier canvas features a colorful leather lining and an emblematic metallic clasp inspired by historic Louis Vuitton trunks. Fresh and feminine, it can be used as a large wallet or a small, chic evening pouch, either with or without its removable chain.</p>
            <li>12 CC slots</li>
            <li>1 zipped coin pocket</li>
            <li>2 flat pockets</li>
            <li>2 large gusseted compartments</li>
            <li>Damier Ebène coated canvas</li>
            <li>19.0 x 10.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - CROISETTE CHAIN WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - LOCKME II WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - LOCKME II WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - LOCKME II WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - LOCKME II WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - LOCKME II WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1600.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
        <div id="collapse" class="panel-collapse collapse">
            <p>Echoing the stylish, casual design of the Lockme II handbag, this wallet in soft calf leather is embellished with a feminine braided detail that subtly references Louis Vuitton's tradition of craftsmanship. Secured with a distinctive LV initials clasp, its spacious interior boasts a variety of pockets and compartments.</p>
            <li>12 card slots</li>
            <li>1 patch pocket</li>
            <li>1 large flat pocket</li>
            <li>Silver color metallic pieces</li>
            <li>19.5 x 10.0 x 2.0 cm (Length x Height x Width) </li>
          <p>More information? <a href="Information/LOUIS VUITTON - LOCKME II WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - SARAH WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - SARAH WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - SARAH WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - SARAH WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - SARAH WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1140.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Sarah wallet gets a bold new look as part of the LV Jungle special edition of accessories and leather goods. It comes in Monogram Giant canvas, which is revisited with a graphic animal print. This classic envelope-style wallet opens to reveal a well-organized interior with a variety of pockets and card slots.</p>
            <li>Monogram Giant coated canvas</li>
            <li>Grained cowhide-leather lining</li>
            <li>Gold-color hardware</li>
            <li>Press-stud closure</li>
            <li>Zipped coin pocket</li>
            <li>19.0 x 10.5 x 2.0 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - SARAH WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - VICTORINE WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - VICTORINE WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - VICTORINE WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - VICTORINE WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - VICTORINE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$745.00</div><br>
        <div class="Property">
          <p>COLOR : Red <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Victorine wallet in Damier Ebene canvas is a compact, envelope-style design which opens out to reveal a range of practical features, including space for bills and cards, and a zipped coin pocket on the side. Its colorful press-stud and grained-leather lining add a touch of femininity.</p>
            <li>Cerise Red</li>
            <li>Damier Ebene coated canvas</li>
            <li>Grained cowhide-leather trim</li>
            <li>Gold-color hardware</li>
            <li>Press-stud closure</li>
            <li>12.0 x 9.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - VICTORINE WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Damier Ebene</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - ZIPPY WALLET-2": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET-1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET-2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET-3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ZIPPY WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1410.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Zippy wallet is crafted from Epi leather, characterized by its distinctive grain. One of Louis Vuitton's most iconic models, the Zippy wallet is named for its secure, all-round zip, which opens to reveal multiple card slots, pockets and compartments. Perfect for organizing everyday essentials, this wallet can also be used as a clutch.</p>
            <li>Cherry Berry Burgundy</li>
            <li>Epi grained cowhide leather</li>
            <li>Grained cowhide-leather lining</li>
            <li>Silver-color hardware</li>
            <li>3 large gusseted compartments</li>
            <li>19.5 x 10.5 x 2.5 cm (Length x Height x Width)  </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ZIPPY WALLET-2.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - ZIPPY WALLET-3": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 4.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 5.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 6.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ZIPPY WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1410.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>For Fall-Winter 2019, Nicolas Ghesquière brings the Monogram LV Pop motif to the Zippy Wallet’s calf leather. Inspired by the distinctive colorway of the Centre Pompidou museum in Paris, the pattern has a neon, 3-D effect that brings modernity to the wallet. The interior array of pockets, compartments, and card slots make it practical.</p>
            <li>Monogram LV Pop Blue</li>
            <li>Printed calf leather</li>
            <li>Calf-leather trim</li>
            <li>Microfiber lining</li>
            <li>19.5 x 10.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ZIPPY WALLET-3.docx">Click here</a></p>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LOUIS VUITTON - ZIPPY WALLET": {
      text2 = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 1.JPG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 2.JPG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LOUIS VUITTON - ZIPPY WALLET 3.JPG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - ZIPPY WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$1410.00</div><br>
        <div class="Property">
          <p>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>The Time Trunk Zippy wallet comes in transformed Damier canvas with trompe-l'œil detailing for a vintage look. It is part of a seasonal collection referencing the Fall-Winter 2018-19 fashion show, where Nicolas Ghesquière revisited Louis Vuitton's historic trunks. This iconic wallet packs a host of convenient features into a secure, zip-around format.</p>
            <li>Transformed Damier canvas</li>
            <li>Calf-leather trim</li>
            <li>Calfskin lining</li>
            <li>Brushed gold-color hardware</li>
            <li>12 CC slots</li>
            <li>19.5 x 10.5 x 2.5 cm (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - ZIPPY WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "LV - CLÉMENCE WALLET": {
      text = `<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/LV - CLÉMENCE WALLET 1.PNG" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/LV - CLÉMENCE WALLET 2.PNG" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
          <div class="carousel-item">
                  <img class="d-block w-100" src="image/LV - CLÉMENCE WALLET 3.PNG" alt="Thirst slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>	
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">LOUIS VUITTON - CLÉMENCE WALLET</div><br>
        <!--Price of product-->
        <div class="Price">$950.00</div><br>
        <div class="Property">
          <p>COLOR : Rose Ballerine Coquelicot <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>For the Epi Blooming Corners limited edition, the Clémence wallet comes in Epi leather with contrasting Monogram flower-shaped corners. This detail, which was inspired by historic Louis Vuitton trunks, brings a fresh, playful note to this elegant long wallet, whose secure zip-around format conceals a variety of pockets and credit card slots.</p>
            <li>Epi cowhide leather in pale-pink Rose Ballerine</li>
            <li>Cowhide-leather lining</li>
            <li>Silver-color hardware</li>
            <li>8 CC slots</li>
            <li>1 zipped coin pocket</li>
            <li>20.0 x 9.0 x 2.0 cm 
              (Length x Height x Width) </li>
            <p>More information? <a href="Information/LOUIS VUITTON - CLÉMENCE WALLET.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //**prada wallet */
    case "FENDI - BIFORD":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/Fendi_a.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/Fendi_c.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-BIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$290.00</div><br>
        <div class="Property">
          <p>COLOR :RED/YELLOW <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Card holder with six slots and flat central pocket. Made of PU with brown FF motif. Fendi Label print in yellow. Made in Italy. </p>
            <li>Length:3.9 inches</li>
            <li>Height:3.1 inches</li>
                      <li>Depth:inches</li>
                      <li>Composition:45% Cotton, 40% Polyurethane, 15% Polyester </li>
            <p>Universal Style #: Product Code:7M0164A7SBF17HW</p>
            <p>More information? <a href="Information/FENDI-BIFOLD.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-BIFOLDA":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0387A18BF0MVV_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0387A18BF0MVV_04_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-BIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$490.00</div><br>
        <div class="Property">
          <p>COLOR :Red leather compact wallet <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>F is Fendi compact bi-fold wallet. Interior organized with a flat pocket, a coin pocket with press stud and four card slots. Made of red tumbled Cruise leather. Decorated with the F is Fendi logo. Gold-finish metalware.Made in Italy. </p>
            <li>Length:3.5 inches</li>
            <li>Height:4.5 inches</li>
                      <li>Depth:1 inches</li>
                      <li>Composition:100% Calfskin</li>
                      <p>Universal Style: Product Code:8M0387A18BF0MVV</p>	
                      <p>More information? <a href="Information/FENDI-BIFOLDA.docx">Click here</a></p>            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-COIN PURSE":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/7M0270O73F17HQ_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/7M0270O73F17HQ_03_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-COIN PURSE</div><br>
        <!--Price of product-->
        <div class="Price">$490.00</div><br>
        <div class="Property">
          <p>COLOR :BLACK/RED <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Coin purse with gusseted sides. Zip fastening on two sides. Made of black calfskin. Yellow leather appliqués in the shape of Bag Bugs eyes.Made in Italy. </p>
            <li>Length:8.5 inches</li>
            <li>Height:3.9 inches</li>
                      <li>Depth:0.8 inches</li>
                      <li>Composition:100% Lamb leather + back: 100% Calf </li>
            <p>Universal Style #: Product Code:7M0270O73F17HQ</p>
            <p>More information? <a href="Information/FENDI-COIN PURSE.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-CONTINENTAL WITH CHAIN":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0365A18BF11CB_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0365A18BF11CB_04_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-CONTINENTAL WITH CHAIN</div><br>
        <!--Price of product-->
        <div class="Price">$850.00</div><br>
        <div class="Property">
          <p>COLOR :RED/PINK/BROWN/LIGHT PINK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Continental F is Fendi wallet with slim detachable chain shoulder strap. Inside, it has two gusseted compartments, zip pocket, flat pockets and six credit card slots. Made of white cruise leather. Twist lock with the new Fendi logo. Gold metalware.
  Made in Italy. </p>
            <li>Length:7.5 inches</li>
            <li>Height:3.5 inches</li>
                      <li>Depth:0.4 inches</li>
                      <li>Composition:100% calfskin</li>
            <p>Universal Style #: Product Code:8M0365A18BF01KW</p>
            <p>More information? <a href="Information/FENDI-CONTINENTAL WITH CHAIN.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-CONTINENTAL":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0251A6CBF13VK_01_large 1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0251A6CBF13VK_02_large 2.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-CONTINENTAL</div><br>
        <!--Price of product-->
        <div class="Price">$770.00</div><br>
        <div class="Property">
          <p>COLOR :BLACK/RED/PINK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Continental F is Fendi wallet fastened with a press stud. Spacious and well-organized, with two gusseted pockets, a zippered pocket, ten card slots and flat side pockets. Made of black calf leather. FF pattern printed in relief and hand-painted in tones of black and brown. Gold-finish metalware. Made in Italy. </p>
            <li>Length:7.5 inches</li>
            <li>Height:3.5 inches</li>
            <li>Depth:0.4 inches</li>
            <li>Composition:100% Calf leather, inside: 100% Calf leather, 50% Cotton, 42% Polyamide, 8% Resins, embroidery: 100% Zamak
  </li>
            <p>Universal Style #: Product Code:8M0251A6CBF13VK</p>
            <p>More information? <a href="Information/FENDI-CONTINENTAL.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-MICRO TRIFOLD":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0415A5DYF0MVV_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0415A5DYF0MVV_03_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-MICRO TRIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$650.00</div><br>
        <div class="Property">
          <p>COLOR :COLOR : BLACK/RED <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Compact, tri-fold Peekaboo wallet with large internal bill compartment and three concealed card holders. External purse with iconic hook closure. Made of matte-effect red calf leather. Contrasting two-tone lining. Gold-finish metalware. Made in Italy. </p>
            <li>Length:2.8 inches</li>
            <li>Height:3.7 inches</li>
            <li>Depth:1.2 inches</li>
            <li>Composition:100% Calfskin</li>
            <p>Universal Style #: Product Code:8M0415A5DYF0MVV</p>
            <p>More information? <a href="Information/FENDI-MICRO TRIFOLD.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-MICRO TRIFOLDA":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0395SMTF1893_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0395SMTF1893_03_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-MICRO TRIFOLD</div><br>
        <!--Price of product-->
        <div class="Price">$630.00</div><br>
        <div class="Property">
          <p>COLOR :Brown leather wallet <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Compact trifold Selleria wallet, with large internal bill compartment, three concealed card holders and an external coin purse with a press-stud fastening. Made of brown Romano leather, with tone-on-tone hand stitching. Contrasting two-tone lining. Gold-finish metalware.Made in Italy. </p>
            <li>Length:3.7 inches</li>
            <li>Height:3 inches</li>
                      <li>Depth:1.2 inches</li>
            <p>Universal Style: Product Code:8M0395SMTF1893</p>
                      <p>More information? <a href="Information/FENDI-MICRO TRIFOLDA.docx">Click here</a></p>
            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-ZIP-AROUND":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M04016GMF13VK_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M04016GMF13VK_04_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-ZIP-AROUND</div><br>
        <!--Price of product-->
        <div class="Price">$550.00</div><br>
        <div class="Property">
          <p>COLOR :Brown leather wallet <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>By The Way wallet with zip fastening along three sides. Interior features a large bill compartment, 8 card holder slots and a removable coin pouch with zip fastening. Made of brown calfskin. Black leather interior and pouch. Decorated with the iconic By The Way stud. Gold-finish metalware.Made in Italy. </p>
            <li>Length:15</li>
            <li>Height:10,5</li>
                      <li>Depth:2</li>
                      <li>Composition:100% calf leather + inside: 100% calf leather + 50% cotton, 42% polyamide, 8% resins</li>
                      <p>Universal Style: Product Code:8M04016GMF13VK</p>	
                      <p>More information? <a href="Information/FENDI-ZIP AROUND.docx">Click here</a></p>            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "FENDI-CARD POUCH":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/8M0348A18BF11CB_01_large.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/8M0348A18BF11CB_02_large.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">FENDI-CARD POUCH</div><br>
        <!--Price of product-->
        <div class="Price">$420.00</div><br>
        <div class="Property">
          <p>COLOR :White leather card holder <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Small slim F is Fendi pouch with gusseted interior and 5 card slots on the back. Zip fastening. Made of white cruise leather. Decorated with the new Fendi logo. Gold metalware.Made in Italy. </p>
            <li>Length:13,5</li>
            <li>Height:8</li>
                      <li>Depth:,5</li>
                      <li>Composition:100% calf leather</li>
                      <p>Universal Style: Product Code:8M0348A18BF11CB</p>	
                      <p>More information? <a href="Information/FENDI-CARD POUCH.docx">Click here</a></p>            
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //fendi wallet
    case "CHANEL 19 Waist Bag":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/chanel-19-waist-bag-navy-blue-black-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-packshot-default-as1163b01624mh059-8819792314398.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/chanel-19-waist-bag-navy-blue-black-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-wool-tweed-gold-tone-silver-tone-ruthenium-finish-metal-packshot-alternative-as1163b01624mh059-8819794673694.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL 19 Waist Bag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,200</div><br>
        <div class="Property">
          <p>COLOR : Navy Blue/Black <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Wool Tweed, Gold-Tone, Silver-Tone & Ruthenium-Finish Metal.</p>
            <li>Reference: AS1163 B01624 MH059</li>
            <li>11 × 20 × 5 cm</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL- 2.55 Card Holder":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/2-55-card-holder-black-aged-calfskin-black-metal-aged-calfskin-black-metal-packshot-alternative-a80611y8360894305-8819836878878.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/2-55-card-holder-black-aged-calfskin-black-metal-aged-calfskin-black-metal-packshot-other-a80611y8360894305-8819820167198.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL- 2.55 Card Holder</div><br>
        <!--Price of product-->
        <div class="Price">SGD 510</div><br>
        <div class="Property">
          <p>COLOR :BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Aged Calfskin & Black Metal</p>
            <li>Reference: A80611 Y83608</li>
            <li>7.5 × 0.5 × 11.2 cm</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-2.55 Handbag":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/2-55-handbag-ecru-navy-blue-orange-white-wool-tweed-denim-gold-tone-metal-wool-tweed-denim-gold-tone-metal-packshot-default-a37586b01467n5259-8819789889566.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/2-55-handbag-ecru-navy-blue-orange-white-wool-tweed-denim-gold-tone-metal-wool-tweed-denim-gold-tone-metal-packshot-other-a37586b01467n5259-8819788316702.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-2.55 Handbag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$6,825</div><br>
        <div class="Property">
          <p>COLOR : Ecru, Navy Blue, Orange ,White <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Wool Tweed, Denim & Gold-Tone Metal</p>
            <li>16 × 24 × 7.5 cm</li>
                      <li>Reference: A37586 B01467 N5259</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-BOY CHANEL Zipped Coin Purse":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/boy-chanel-zipped-coin-purse-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-a80602y0765994305-8819948322846.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/boy-chanel-zipped-coin-purse-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-other-a80602y0765994305-8812132007966.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-BOY CHANEL Zipped Coin Purse</div><br>
        <!--Price of product-->
        <div class="Price">SGD 800</div><br>
        <div class="Property">
          <p>COLOR :GREEN/BLACK <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Lambskin & Gold-Tone Metal</p>
            <li>Reference: A80602 Y07659 94305</li>
            <li> 7.5 × 11 × 2 cm </li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Clutch":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/clutch-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-as1184b0151794305-8819798999070.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/clutch-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-other-as1184b0151794305-8819787005982.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Clutch</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,550</div><br>
        <div class="Property">
          <p>COLOR : Black <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Lambskin & Gold-Tone MetaL.</p>
            <li>17 × 31 × 4 cm</li>
                      <li>Reference: AS1184 B01517 94305</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Flap Bag":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/flap-bag-silver-black-sequins-ruthenium-finish-metal-sequins-ruthenium-finish-metal-packshot-default-as1078b01638n4552-8819791134750.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/flap-bag-silver-black-sequins-ruthenium-finish-metal-sequins-ruthenium-finish-metal-packshot-other-as1078b01638n4552-8819799588894.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Flap Bag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$6,450</div><br>
        <div class="Property">
          <p>COLOR : Silver/Black <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Sequins & Ruthenium-Finish Metal</p>
            <li>15 × 22 × 7 cm</li>
                      <li>Reference: AS1078 B01638 N4552</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Small Vanity Case":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/small-vanity-case-navy-blue-black-gray-jersey-calfskin-gold-tone-metal-jersey-calfskin-gold-tone-metal-packshot-default-a93342b01189n4963-8818377392158.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/small-vanity-case-navy-blue-black-gray-jersey-calfskin-gold-tone-metal-jersey-calfskin-gold-tone-metal-packshot-other-a93342b01189n4963-8818376212510.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Small Vanity Case</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,725</div><br>
        <div class="Property">
          <p>COLOR : Navy Blue, Black & Gray <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Jersey, Calfskin & Gold-Tone Metal</p>
            <li>13 × 7 × 17 cm</li>
                      <li>Reference: A93342 B01189 N4963</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Waist Bag & Coin Purse":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/waist-bag-coin-purse-white-aged-calfskin-gold-tone-metal-aged-calfskin-gold-tone-metal-packshot-default-as1077b0140110601-8819796377630.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/waist-bag-coin-purse-white-aged-calfskin-gold-tone-metal-aged-calfskin-gold-tone-metal-packshot-other-as1077b0140110601-8819796639774.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Waist Bag & Coin Purse</div><br>
        <!--Price of product-->
        <div class="Price">CAN$3,625</div><br>
        <div class="Property">
          <p>COLOR : White <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Aged Calfskin & Gold-Tone Metal</p>
            <li>15 × 34 × 6 cm</li>
                      <li>Reference: AS1077 B01401 10601</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    case "CHANEL-Waist Bag":{
      text2=`<div class="row">
      <!-- Image of product-->
      <div class="col-sm-12 col-lg-6 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner ">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="image/waist-bag-black-brown-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-packshot-default-as0406b01575n5275-8819788808222.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
            </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="image/waist-bag-black-brown-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-shiny-crumpled-sheepskin-shearling-sheepskin-gold-tone-metal-packshot-other-as0406b01575n5275-8819797753886.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              </a>
            </div>	
      </div>
      <div class="col-lg-6 col-sm-0">
        <!-- Title of product-->
        <div class="title-of-product">CHANEL-Waist Bag</div><br>
        <!--Price of product-->
        <div class="Price">CAN$4,625</div><br>
        <div class="Property">
          <p>COLOR : Black/Brown <br>
             SIZE : ONE SIZE <br>
             IN STOCK
          </p>
        </div>
        <button class="add-to-bag">ADD TO BAG</button>
        <!-- Detail of product-->
        <div class="detail">
          <div class="panel-heading">
            <!-- Detail button-->
            <br><h5 class="panel-title">
              <a data-toggle="collapse" href="#collapse">Detail</a>
            </h5>
          </div>
          <!-- Collapse detail of product-->
          <div id="collapse" class="panel-collapse collapse">
            <p>Shiny Crumpled Sheepskin, Shearling Sheepskin & Gold-Tone Metal.</p>
            <li>11 × 17 × 5 cm</li>
                      <li>Reference: AS0406 B01575 N5275</li>
        </div>
        <div class="panel-heading">
          <h5 class="panel-title">
            <a data-toggle="collapse" href="#collapse1">CARE & COMPOSITION</a>
          </h5>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <p>
            <li>Leather</li>
            <li>Imported</li>
          </p>
        </div>
      </div> 
    </div>
  </div>`;
      break;
    }
    //chanel wallet
    default: {
      text2 = 'product 2';
      break;
    }
  }
  document.getElementById('pr2-compire').innerHTML = text2;
});
