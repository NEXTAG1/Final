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
                <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG Black men's bag(men)850$/523603_9F2YN_1095_001_100_0055_Light-GG-Black-mens-bag.jpg"
                  alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG Black men's bag(men)850$/523603_9F2YN_1095_002_100_0055_Light-GG-Black-mens-bag.jpg"
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
        text =`<div class="row">
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
                  src="GUCCI-PRADA/gucci/GG Marmont leather pouch 830$/475317_DJ20T_1000_001_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="GUCCI-PRADA/gucci/GG Marmont leather pouch 830$/475317_DJ20T_1000_002_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="GUCCI-PRADA/gucci/GG Marmont leather pouch 830$/475317_DJ20T_1000_003_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
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
              <img class="d-block w-100" src="GUCCI-PRADA/gucci/GG iPhone case with tiger print 480$/575137_G2BAN_1087_001_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="GUCCI-PRADA/gucci/GG iPhone case with tiger print 480$/575137_G2BAN_1087_002_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="GUCCI-PRADA/gucci/GG iPhone case with tiger print 480$/575137_G2BAN_1087_004_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
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
                src="/GUCCI-PRADA/gucci/Gucci 1955 horsebit bag 2300$/602204_92TCG_8563_001_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci 1955 horsebit bag 2300$/602204_92TCG_8563_002_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci 1955 horsebit bag 2300$/602204_92TCG_8563_003_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
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
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case 580$/570679_1B90X_1275_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case 580$/570679_1B90X_1275_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case 580$/570679_1B90X_1275_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
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
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case wallet 580$/570660_1B90X_1000_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case wallet 580$/570660_1B90X_1000_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case wallet 580$/570660_1B90X_1000_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Gucci Zumi python mini bucket bag 1150$/576432_0OLRX_9698_001_065_0016_Light-Gucci-Zumi-mini-bucket-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Gucci Zumi python mini bucket bag 1150$/576432_0OLRX_9698_005_100_0000_Light-Gucci-Zumi-mini-bucket-bag.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Medium suede shoulder bag 2890$/589471_1DGBG_2334_001_071_0000_Light-Medium-suede-shoulder-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Medium suede shoulder bag 2890$/589471_1DGBG_2334_002_071_0000_Light-Medium-suede-shoulder-bag.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Ophidia GG zip around wallet 690$/523154_96IWG_8745_001_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Ophidia GG zip around wallet 690$/523154_96IWG_8745_002_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Badge Holder 295$/cq5dam.web.white.1280x1280 (1).jpeg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Badge Holder 295$/cq5dam.web.white.1280x1280.jpeg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Keychain 380$/cq5dam.web.white.2560x2560 (1).webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Keychain 380$/cq5dam.web.white.2560x2560.jpeg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Wallet 725$/cq5dam.web.white.1280x1280 (1).webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Wallet 725$/cq5dam.web.white.1280x1280.jpeg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Printed Saffiano leather wallet 440$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Printed Saffiano leather wallet 440$/cq5dam.web.white.1280x1280 (2).jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Cuir leather wallet 440$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Cuir leather wallet 440$/cq5dam.web.white.1280x1280 (2).jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280.jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280.jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano leather wallet 650$/cq5dam.web.white.1280x1280 (1).webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano leather wallet 650$/cq5dam.web.white.1280x1280 (2).jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Small Prada Cahier wallet 570$/cq5dam.web.white.1280x1280 (1).webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Small Prada Cahier wallet 570$/cq5dam.web.white.1280x1280 (2).webp"
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
                <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG Black men's bag(men)850$/523603_9F2YN_1095_001_100_0055_Light-GG-Black-mens-bag.jpg"
                  alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG Black men's bag(men)850$/523603_9F2YN_1095_002_100_0055_Light-GG-Black-mens-bag.jpg"
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
        text2 =`<div class="row">
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
                  src="/GUCCI-PRADA/gucci/GG Marmont leather pouch 830$/475317_DJ20T_1000_001_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="/GUCCI-PRADA/gucci/GG Marmont leather pouch 830$/475317_DJ20T_1000_002_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100"
                  src="/GUCCI-PRADA/gucci/GG Marmont leather pouch 830$/475317_DJ20T_1000_003_100_0010_Light-GG-Marmont-leather-pouch.jpg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG iPhone case with tiger print 480$/575137_G2BAN_1087_001_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG iPhone case with tiger print 480$/575137_G2BAN_1087_002_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/GG iPhone case with tiger print 480$/575137_G2BAN_1087_004_080_0031_Light-GG-iPhone-case-with-tiger-print.jpg"
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
                src="/GUCCI-PRADA/gucci/Gucci 1955 horsebit bag 2300$/602204_92TCG_8563_001_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci 1955 horsebit bag 2300$/602204_92TCG_8563_002_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci 1955 horsebit bag 2300$/602204_92TCG_8563_003_074_0000_Light-Online-Exclusive-Preview-Gucci-1955-Horsebit-bag.jpg"
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
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case 580$/570679_1B90X_1275_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case 580$/570679_1B90X_1275_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case 580$/570679_1B90X_1275_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case.jpg" alt="Second slide">
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
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case wallet 580$/570660_1B90X_1000_001_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case wallet 580$/570660_1B90X_1000_002_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
                alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"
                src="/GUCCI-PRADA/gucci/Gucci Zumi grainy leather card case wallet 580$/570660_1B90X_1000_003_080_0000_Light-Gucci-Zumi-grainy-leather-card-case-wallet.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Gucci Zumi python mini bucket bag 1150$/576432_0OLRX_9698_001_065_0016_Light-Gucci-Zumi-mini-bucket-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Gucci Zumi python mini bucket bag 1150$/576432_0OLRX_9698_005_100_0000_Light-Gucci-Zumi-mini-bucket-bag.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Medium suede shoulder bag 2890$/589471_1DGBG_2334_001_071_0000_Light-Medium-suede-shoulder-bag.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Medium suede shoulder bag 2890$/589471_1DGBG_2334_002_071_0000_Light-Medium-suede-shoulder-bag.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Ophidia GG zip around wallet 690$/523154_96IWG_8745_001_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/gucci/Ophidia GG zip around wallet 690$/523154_96IWG_8745_002_100_0024_Light-Ophidia-GG-zip-around-wallet.jpg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Badge Holder 295$/cq5dam.web.white.1280x1280 (1).jpeg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Badge Holder 295$/cq5dam.web.white.1280x1280.jpeg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Keychain 380$/cq5dam.web.white.2560x2560 (1).webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Keychain 380$/cq5dam.web.white.2560x2560.jpeg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Wallet 725$/cq5dam.web.white.1280x1280 (1).webp" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Leather Wallet 725$/cq5dam.web.white.1280x1280.jpeg" alt="Second slide">
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Printed Saffiano leather wallet 440$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Printed Saffiano leather wallet 440$/cq5dam.web.white.1280x1280 (2).jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Cuir leather wallet 440$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Cuir leather wallet 440$/cq5dam.web.white.1280x1280 (2).jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280.jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280 (1).jpeg"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano Leather Coin Purse 360$/cq5dam.web.white.1280x1280.jpeg"
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
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano leather wallet 650$/cq5dam.web.white.1280x1280 (1).webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/GUCCI-PRADA/prada/Saffiano leather wallet 650$/cq5dam.web.white.1280x1280 (2).jpeg"
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
              <img class="d-block w-100" src="GUCCI-PRADA/prada/Small Prada Cahier wallet 570$/cq5dam.web.white.1280x1280 (1).webp"
                alt="First slide">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="GUCCI-PRADA/prada/Small Prada Cahier wallet 570$/cq5dam.web.white.1280x1280 (2).webp"
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
    //**prada wallet */
    default: {
      text2 = 'product 2';
      break;
    }
  }
  document.getElementById('pr2-compire').innerHTML = text2;
});
