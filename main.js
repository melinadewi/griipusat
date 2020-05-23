const serverUrl = 'https://grii-pusat.project.halamanku.id';
const serverBulletin = 'https://grii-pusat.dev.kentgi.net'
$(document).ready(function(){
  toHome()
    $('.to-home').on('click', function(event){
      event.preventDefault()
      console.log("To Home Page")
      toHome()
    })

    $('.to-gerakan1').on('click', function(event){
      event.preventDefault()
      console.log("To Gerakan Page")
      toGerakan()
    })

    $('#content').on('click', '.to-gerakan1', function(event){
      event.preventDefault()
      console.log("To Gerakan Page 1")
      toGerakan()
    })

    $('#content').on('click', '.to-gerakan2', function(event){
      console.log("To Gerakan Page 2")
      event.preventDefault()
      $('#content').empty()
      $('#content').append(`      
        <div id="gerakan" class="card-body" style="padding:7vh 20vw; overflow-y: scroll;">
          <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content:center; margin-top: 28px;">
            <button type="button" class="btn btn-outline-danger to-gerakan1">Sebelum Gerakan Ini</button>
            <button type="button" class="btn btn-danger to-gerakan2">Gerakan Reformed dalam Sejarah</button>
            <button type="button" class="btn btn-outline-danger to-gerakan3">Panggilan Gerakan Reformed Injili</button>
          </div>
          <br>
          <h3 class="card-title">Gerakan Reformed Injili</h3>
          <br>
          <h5 class="card-subtitle mb-2">Gerakan Reformed dalam Sejarah</h5>
          <p class="card-text">Reformasi yang terjadi pada abad ke-16 merupakan gerakan yang unik dan tidak tertandingi karena motivasi reformasi adalah kembali kepada Kitab Suci dan mengaku bahwa segala sesuatu semata-mata berdasarkan anugerah, dan bahwa hanya melalui iman, dan bukan jasa manusia, kaum pilihan dipanggil untuk menjadi saksi Tuhan di dalam dunia ini. Gereja dipanggil bukan hanya untuk mengabarkan Injil dan mengajarkan kebenaran, gereja juga dipanggil untuk melaksanakan mandat budaya melalui bimbingan Firman Tuhan untuk mencerahkan dunia ini dengan prinsip-prinsip Firman Tuhan dalam segala aspek kebudayaan.</p>
          <p class="card-text">Dalam segala segi kehidupan manusia, sejarah telah menyaksikan kontribusi Calvinisme, mulai dari kehidupan pribadi sampai kehidupan bermasyarakat dan pendidikan, bahkan menjadi perintis demokrasi di seluruh dunia. Pada saat pengaruh Liberalisme semakin meluas dan menggerogoti iman Kristen dalam abad ke-19, teolog-teolog Reformed dengan gigih berdiri di garis pertempuran yang paling depan untuk melawan ajaran-ajaran yang tidak setia kepada Kitab Suci. Sehingga baik di Eropa maupun di Amerika, buku-buku yang paling berbobot dalam memerangi ajaran-ajaran liberal kebanyakan merupakan hasil karya teolog-teolog Reformed. Semangat teologi Reformed inilah yang telah memelihara Kekristenan dari segala penyelewengan dan perselingkuhan gereja sebagai mempelai perempuan Kristus yang harus setia kepada Tuhan.</p>
          <p class="card-text">Tokoh-tokoh seperti Abraham Kuyper, Herman Bavinck, Hendrik Kraemer di Belanda; dan Charles Hodge, Archibald Hodge, B.B. Warfield, Gresham Machen, Cornelius Van Til, John Murray, dan tokoh-tokoh lainnya di Amerika telah memperlihatkan semangat tidak berkompromi mereka yang diturunkan dari John Calvin. Penemuan anugerah umum (common grace) dan keunikan pengertian wahyu umum (general revelation) telah menjadi keunggulan dan ciri khas Teologi Reformed dalam menangani masalah-masalah kebudayaan serta memberi pencerahan dan bimbingan kepada semua penemuan ilmiah yang paling modern, juga perubahan arus pikiran sampai pada Gerakan Zaman Baru dan Postmodernisme. Tidak ada seorang pun yang bisa mengabaikan apa yang telah dikerjakan oleh Teologi Reformed sepanjang sejarah. Teologi Reformed merupakan salah satu teologi yang paling tahan uji dan paling unggul untuk memimpin orang Kristen melalui peperangan iman dan memberi petunjuk untuk hari depan umat manusia.</p>
        </div>
      `)
    })

    $('#content').on('click', '.to-gerakan3', function(event){
      event.preventDefault()
      console.log("To Gerakan Page 3")
      $('#content').empty()
      $('#content').append(`
        <div id="gerakan" class="card-body" style="padding:7vh 20vw; overflow-y: scroll;">
          <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content:center; margin-top: 28px;">
            <button type="button" class="btn btn-outline-danger to-gerakan1">Sebelum Gerakan Ini</button>
            <button type="button" class="btn btn-outline-danger to-gerakan2">Gerakan Reformed dalam Sejarah</button>
            <button type="button" class="btn btn-danger to-gerakan3">Panggilan Gerakan Reformed Injili</button>
          </div>
          <br>
          <h3 class="card-title">Gerakan Reformed Injili</h3>
          <br>
          <h5 class="card-subtitle mb-2">Panggilan Gerakan Reformed Injili</h5>
          <p class="card-text">Bukankah banyak pimpinan gereja yang pernah dididik di sekolah teologi Reformed di Amerika, Belanda, dan tempat-tempat lain yang sudah kembali berada di ladang pelayanan di Indonesia? Bukankah mereka yang seharusnya membawa gereja kembali kepada semangat Reformed serta membangkitkan kesadaran orang Kristen untuk memelihara iman kepercayaan yang diturunkan kepada kita dan berperang di dalam dunia yang penuh dengan arus pikiran yang sangat berlawanan dengan Kitab Suci?</p>
          <p class="card-text">Setelah menanti selama kira-kira 20 tahun, saya merasa sudah tidak boleh menunggu lagi – meskipun sejak tahun 1964 saya telah mengajar doktrin Reformed di sekolah teologi yang saya layani dan membentuk pikiran Reformed dalam diri para mahasiswa. Panggilan untuk mendirikan Gerakan Reformed Injili ini menjadi semakin jelas dan mendesak setelah saya mendapat penyakit hepatitis B pada tahun 1984.</p>
          <p class="card-text">Hidup adalah sementara. Meskipun saya sudah melayani selama 27 tahun, namun dengan pengertian yang diperoleh melalui pengalaman menderita penyakit lever semacam itu, saya merasa mungkin masih bisa bertahan dalam dunia ini selama hanya 15 sampai 20 tahun lagi. Maka saya tidak menanti orang lain lagi dan dengan sungguh-sungguh berdoa menyerahkan diri sekali lagi untuk menegakkan Gerakan Reformed Injili di Indonesia. Saya memohon kepada Tuhan supaya di dalam waktu 15 tahun, menjelang abad ke-21, sudah terbentuk sekelompok generasi muda yang memahami dan menyadari pentingnya Gerakan Reformed Injili serta rela menyerahkan diri untuk mengabdi dan berkorban di dalam zaman ini.</p>
          <p class="card-text">Tanggapan terhadap panggilan ini mendapat restu dari Tuhan, sehingga pada tahun 1984 dimulailah langkah yang pertama, yaitu dengan berani mengadakan Seminar Pembinaan Iman Kristen (SPIK) untuk memelopori doktrin Reformed. Di luar dugaan, pesertanya makin lama makin banyak dan dengan antusiasme yang sangat tinggi menerima doktrin Reformed yang diajarkan.</p>
          <p class="card-text">Gerakan SPIK yang dimulai sejak tahun 1984 telah menjadi gerakan yang tidak layu hingga sekarang, baik di Indonesia maupun di luar negeri. Mereka yang disadarkan mengambil keputusan untuk mempelajari doktrin Reformed lebih lanjut. Maka langkah kedua dalam panggilan ini adalah mendirikan Sekolah Teologi Reformed Injili (STRI) bagi kaum awam pada tahun 1986.</p>
          <h5 class="card-subtitle mb-2">Apakah yang Disebut Gerakan Reformed Injili?</h5>
          <p class="card-text">Gerakan berbeda dengan organisasi. Gerakan merupakan semacam api dan semangat spiritual yang berkobar dan yang membakar sekelompok orang sehingga menjadi suatu kekuatan pengaruh terhadap pribadi-pribadi lain untuk melihat, mengakui, melangsungkan dan melaksanakan suatu tugas yang penting untuk mengubah sejarah. Gerakan sejarah yang bermutu selalu memiliki teori yang konsisten, strategi yang lincah, pengabdian yang tuntas, pengikut yang setia, dan pengaruh yang abadi, baik dalam bidang sekuler maupun rohani, unsur-unsur di atas bisa dilihat dengan jelas. Oleh karena itu Gerakan Reformed Injili juga harus meminta kepada Tuhan untuk memberikan pertolongan dan berkat dalam hal-hal yang penting. Kami percaya bahwa motivasi untuk mengadakan gerakan ini adalah murni berdasarkan panggilan Tuhan dan kebutuhan zaman serta berlangsungnya hidup iman sebagai orang Kristen dalam sejarah. Maka dengan jelas kami melihat Tuhan melimpahkan berkat-Nya baik dalam penyertaan maupun pengurapan, khususnya membangkitkan pribadi-pribadi yang dikobarkan oleh api Roh Kudus. Soli Deo Gloria (Segala kemuliaan hanya bagi Allah).</p>
          <h5 class="card-subtitle mb-2">Apakah Isi Gerakan Reformed Injili?</h5>
          <p class="card-text">Gerakan ini meliputi dua aspek. Pertama, mengembalikan pengertian teologi berdasarkan wahyu Allah dalam Kitab Suci yang dipelopori oleh para Reformator, khususnya sayap Calvinisme dan para penerusnya sampai sekarang. Dengan teologi yang ketat ini, yang berasal dari makna-makna yang tersimpan dalam Kitab Suci, maka iman orang Kristen akan dibekali dan diperkuat untuk menghadapi tantangan segala zaman. Kedua, mengobarkan semangat penginjilan dan memobilisasi orang Kristen untuk secara langsung memberitakan Injil, yang adalah kabar baik bagi seluruh umat manusia, memperkenalkan kuasa keselamatan melalui kematian dan kebangkitan Kristus bagi pengampunan dosa dan perdamaian manusia dengan Tuhan Allah sehingga menciptakan hidup baru yang memuliakan Tuhan, bersaksi bagi Kristus, dan mengabarkan Injil. Maka gerakan ini membawa gereja berakar dalam Firman Tuhan dan berbuah dalam dunia ini.</p>
          <h5 class="card-subtitle mb-2">Bagaimana Permulaan Gerakan Ini?</h5>
          <p class="card-text">Langkah-langkah Gerakan ini telah dipimpin oleh Tuhan melalui ketaatan hamba-hamba-Nya. Maka kami merencanakan (untuk Aspek Teologi Reformed): Pertama, membentuk sebanyak mungkin massa yang menyadari dan mengalami pengajaran Reformed Injili. Ini diwujudkan dalam bentuk Seminar Pembinaan Iman Kristen (SPIK). Kedua, menyaring dan memperoleh sekelompok kaum awam yang menuntut diri untuk mempelajari teologi Reformed secara sistematis dan konsisten. Ini diwujudkan dalam bentuk Sekolah Teologi Reformed Injili (STRI). Ketiga, mendirikan perpustakaan yang menyediakan buku-buku bermutu untuk mengisi kebutuhan orang-orang yang ingin lebih banyak belajar kebenaran serta meyakini bahwa gerakan ini bersifat universal dan berpengaruh dalam sejarah. Keempat, mendirikan sekolah teologi dan Institut untuk mempersiapkan tenaga hamba Tuhan penuh waktu bagi generasi yang akan datang. Kelima, dengan teologi yang benar mendirikan gereja dan pos-pos Injil untuk menjadi wadah bagi para hamba Tuhan untuk boleh dengan berani mengajarkan teologi Reformed dan menggembalakan kaum pilihan Tuhan. Keenam, menerjemahkan dan mencetak buku-buku teologi Reformed.</p>
          <p class="card-text">Sedangkan rencana dalam Aspek Penginjilan meliputi: Pertama, mengadakan penginjilan massal dan secara langsung menghadapi kebutuhan masyarakat serta mengajar manusia untuk bertobat dan menyambut undangan menjadi orang Kristen. Kedua, mengadakan pemuridan penginjilan untuk melatih pribadi-pribadi yang merasa terpanggil untuk melebarkan Kerajaan Allah melalui penginjilan pribadi. Dengan demikian memobilisasi orang Kristen untuk menjadi saluran anugerah Tuhan bagi masyarakat. Ketiga, melatih penginjil-penginjil penuh waktu dalam sekolah teologi untuk mempersiapkan hamba-hamba Tuhan yang berkarunia dan berbeban khusus dalam penginjilan. Keempat, menyediakan pos-pos Injil untuk menampung buah-buah penginjilan untuk menuju kepada hidup penggembalaan dan gereja.</p>
          <h5 class="card-subtitle mb-2">Apakah Keunikan Gerakan Ini?</h5>
          <p class="card-text">Gerakan Reformed Injili berbeda dengan gereja dan denominasi Reformed Injili. Gerakan Reformed Injili dimaksud untuk menjadi dorongan bagi setiap denominasi dan boleh menjadi milik setiap gereja di luar Gereja Reformed Injili, sehingga gereja-gereja dibangunkan dan diarahkan kepada teologi yang benar dan semangat Injili yang benar. Namun Gerakan Reformed Injili tidak menutup kemungkinan bagi hamba-hamba Tuhan yang berteologi Reformed Injili untuk mendirikan Gereja Reformed Injili sebagai salah satu wadah dalam Kerajaan Allah, yang mendampingi gereja-gereja lain untuk melaksanakan tugas panggilannya sebagai tubuh Kristus.</p>
          <h5 class="card-subtitle mb-2">Siapakah yang Ada dalam Gerakan Ini?</h5>
          <p class="card-text">Gerakan ini tidak dimonopoli oleh hamba-hamba Tuhan penuh waktu, juga tidak dimonopoli oleh GRII, karena teologi Reformed dan penginjilan dalam Gerakan Reformed Injili merupakan inti internal dan aksi eksternal yang seharusnya dimiliki oleh semua gereja. Maka setiap orang Kristen yang telah mengalami kelahiran baru oleh Roh Kudus dan telah dibaptiskan ke dalam Tuhan, berhak berbagian dalam Gerakan Reformed Injili. Jika Tuhan memimpin, maka orang-orang Kristen yang bersemangat dan berteologi semacam ini, boleh dengan bebas, atas kerelaannya sendiri, bergabung ke dalam Lembaga Reformed Injili, bahkan Gereja Reformed Injili Indonesia. Setiap orang yang berbagian dalam gerakan ini harus menyadari dan memahami Pengakuan Iman Reformed Injili serta rela bekerja sama dengan kaum Reformed Injili untuk mengembangkan gerakan ini, dengan tujuan untuk memuliakan Tuhan, memurnikan iman gereja, dan mengobarkan semangat Amanat Agung sampai Kristus datang kembali.</p>
          <h4 class="card-subtitle mb-2">GRII dan Gerakan Reformed Injili</h4>
          <p class="card-text">GRII didirikan di atas dasar Pengakuan Iman Reformed Injili dengan tujuan menegakkan satu gereja yang berbasiskan teologi Reformed, dengan mimbar yang menyampaikan khotbah ekspositoris, dan jemaat yang berkomitmen mengabarkan Injil. Gereja ini merupakan bagian dari tubuh Kristus, yang terdiri dari semua gereja yang berdasarkan pada ajaran yang benar dalam melaksanakan tugasnya di dalam dunia ini. Anggota GRII terdiri dari: Pertama, hasil penginjilan langsung yang menerima Tuhan dan dibaptiskan ke dalam GRII. Kedua, dari anggota gereja di luar negeri atau luar pulau yang pindah ke kota di mana GRII ada, lalu atas permintaan dan kerelaannya sendiri menjadi anggota GRII melalui atestasi setelah mengikuti katekisasi. Ketiga, anak-anak anggota yang dijanjikan oleh orangtua yang beriman untuk mendidik mereka berdasarkan iman Kristen. Keempat, perpindahan anggota gereja lain dengan mengikuti prosedur yang sah.</p>
          <p class="card-text">Dari antara anggota GRII yang meyakini pentingnya Gerakan Reformed Injili serta memiliki beban panggilan Tuhan untuk terjun dalam gerakan ini, mereka akan diberikan kesempatan untuk mengikuti pelayanan sehingga melalui pengamatan, latihan dan penyaringan, sebagian menjadi pekerja-pekerja yang melayani lebih banyak orang. Pengurus terdiri dari mereka yang sudah melewati tahap pelayanan yang dianggap cukup matang. Setiap orang Kristen yang menyadari dan memahami Gerakan Reformed Injili seharusnya memberi pengaruh yang positif, baik di dalam hidup gerejawi maupun hidup bermasyarakat dan bernegara.</p>
          <h4 class="card-subtitle mb-2">Prospek Gerakan Ini</h4>
          <p class="card-text">Melalui kepercayaan Reformed Injili, kami mengharapkan semakin banyak gereja yang kembali kepada ajaran yang benar, dan semakin banyak gereja yang terjun dalam melaksanakan Amanat Agung Tuhan Yesus Kristus. Dengan demikian, STTRII, Institut Reformed, dan STRI yang berada di kota-kota besar di Indonesia maupun di luar negeri, memikul kewajiban untuk mendidik orang Kristen dalam pengenalan teologi Reformed serta memobilisasi misi penginjilan. Sedangkan GRII diharapkan untuk membuka sebanyak mungkin MRI (Mimbar Reformed Injili) di berbagai tempat untuk mengisi kebutuhan dan kehausan orang Kristen akan Firman Tuhan, teologi Reformed, dan latihan penginjilan. Kami mengharapkan teologi yang benar menjadi kunci pencerahan bagi kebudayaan dan kehidupan di dalam dunia ini; dan melalui penginjilan, membawa seluruh bangsa kembali kepada Tuhan. Karena Tuhan berkata. “Kamulah terang dunia, kamulah garam dunia.” Dalam menyongsong abad  ke-21 yang ditandai dengan gerakan massa yang dipengaruhi oleh semangat Gerakan Zaman Baru serta gerakan kebudayaan yang berfilsafatkan Postmodernisme, marilah kita memancarkan cahaya Firman Tuhan bagaikan mercusuar yang menuntun semua orang yang tersesat kembali ke pangkuan Allah yang kekal.</p>
        </div>
      `)
    })

    $('#to-pengakuan').on('click', function(event){
      event.preventDefault()
      console.log("To Pengakuan Page")
      toPengakuan()
    })

    $('#content').on('click', '.to-pengakuan1', function(event){
      console.log("To Pengakuan Page 1")
      event.preventDefault()
      toPengakuan()
    })

    $('#content').on('click', '.to-pengakuan2', function(event){
      console.log("To Pengakuan Page 2")
      event.preventDefault()
      $('#content').empty()
      $('#content').append(`      
      <div id="pengakuan" class="card-body" style="padding: 7vh 20vw; overflow-y: scroll;">
        <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content:center; margin-top: 28px;">
          <button type="button" class="btn btn-outline-danger to-pengakuan1">Pengakuan Iman Reformed Injili</button>
          <button type="button" class="btn btn-danger to-pengakuan2">Pengakuan Iman Penginjilan</button>
        </div>
        <br>
        <h3 class="card-title">PENGAKUAN IMAN PENGINJILAN</h3>
        <br>
        <ol class="card-text" style="margin-top:35px;">
          <li>Aku percaya Injil sebagai kuasa Allah untuk menyelamatkan setiap orang yang percaya.</li>
          <br>
          <li>Aku percaya satu Allah di dalam Tiga Pribadi, Pencipta manusia dan dunia, Hakim Tertinggi atas semua dosa dan Sumber keselamatan manusia.</li>
          <br>
          <li>Aku percaya kejatuhan manusia sebagai fakta sejarah yang menyebabkan polusi natur manusia secara total. Oleh sebab itu, manusia tidak mampu menyelamatkan dirinya sendiri.</li>
          <br>
          <li>Aku percaya anugerah Allah yang berdaulat kepada manusia yang tidak layak menerima keselamatan, yang memilih umat-Nya di dalam hikmat-Nya yang tertinggi oleh penetapan-Nya yang kekal, dan bertindak di dalam proses dinamis sejarah, untuk menebus mereka di dalam Anak Tunggal-Nya, Yesus Kristus.</li>
          <br>
          <li>Aku percaya akan inkarnasi Yesus Kristus melalui kelahiran anak dara, hidup-Nya tanpa dosa, penyaliban, kematian, kebangkitan dan kenaikan-Nya adalah fakta-fakta sejarah yang menyusun esensi dan berita Injil, sebagai satu-satunya sarana untuk mencapai keselamatan Allah.</li>
          <br>
          <li>Aku percaya kuasa darah Yesus Kristus yang membersihkan, terkandung di dalam pengorbanan-Nya yang bersifat penggantian, pemulihan (propisiasi), penebusan dan pendamaian, yang memberikan hidup baru kepada manusia.</li>
          <br>
          <li>Aku percaya akan pemberitaan Injil sebagai satu-satunya berita baik, yang memberikan dasar hidup bahagia dan pengharapan kekal bagi umat manusia. Penginjilan adalah:
            <ul>
              <li>Kesaksian hidup orang-orang Kristen sejati yang menundukkan diri mereka kepada perintah Allah.</li>
              <li>Menciptakan pertemuan pribadi antara orang-orang berdosa dengan Allah, melalui perantaraan Yesus Kristus.</li>
              <li>Penyebab yang menimbulkan iman yang menyelamatkan di dalam hati manusia.</li>
              <li>Kunci menuju pertumbuhan gereja dan kesukaan akan kehadiran-Nya yang kekal.</li>
            </ul>
          </li>
          <br>
          <li>Aku percaya pertobatan sebagai bukti kelahiran baru dari Roh Kudus yang menghasilkan iman sejati di dalam Yesus Kristus dan menghasilkan buah-buah hidup baru.</li>
          <br>
          <li>Aku percaya akan pengurapan Roh Kudus di dalam penginjilan dalam bentuk keberanian, hikmat, kuat-kuasa, dan kesukaan menjadi saksi atas mereka yang mentaati Amanat Agung Yesus Kristus.</li>
          <br>
          <li>Aku percaya akan finalitas Injil yang adalah sempurna pada dirinya, yang tidak dapat digantikan atau dibandingkan, baik dengan pemikiran agama, ide filsafat, dan perbuatan baik duniawi (beda secara kualitatif), maupun dengan mandat kebudayaan dan kepedulian sosial di dalam iman ortodoks dan injili (hanya merupakan pelengkap dari pra- dan pasca-penginjilan), ataupun kariuna Roh Kudus dan mujizat dan tanda-tanda di dalam Alkitab (yang kadang-kadang Allah gunakan untuk menyaksikan Injil-Nya). Kita harus mempertahankan kesempurnaan Injil.</li>
          <br>
          <li>Aku percaya kuasa yang tidak berubah dari Injil Yesus Kristus yang mampu memelihara umat tebusan-Nya serta mengubah masyarakat melalui kesaksian mereka hingga hari penggenapan pemuliaan di saat kedatangan Yesus kembali.</li>
        </ol>
        <hr>
      </div>
      `)
    })

    $('#to-bebandoa').on('click', function(event){
      event.preventDefault()
      console.log("To Beban Doa Page")
      $('#content').empty()
      $('#content').append(`
        <div id="bebandoa" class="card-body" style="padding:7vh 20vw; overflow-y: scroll;">
          <h3 class="card-title">Beban dan Doa Kami</h3>
          <h6>(Visi dan panggilan berdirinya Gereja Reformed Injili Indonesia)</h6>
          <br>
          <h5 class="card-subtitle mb-2" style="margin-top:1vh;">Beban Kami</h5>
          <p class="card-text">Berdasarkan anugerah Tuhan dan iman kepercayaan yang diwariskan dari zaman ke zaman kepada kita, kami akan melayani zaman ini dengan menegakkan mimbar yang setia kepada Firman Tuhan serta memberikan kabar baik yaitu Injil Kristus kepada sesama manusia. Beserta semua kaum pilihan Tuhan di seluruh dunia, kami ingin melihat gereja yang teguh didirikan sebagai saksi Kristus, untuk menyongsong abad yang akan datang.</p>
          <h5 class="card-subtitle mb-2" style="margin-top:1vh;">Doa Kami</h5>
          <p class="card-text">Kami berdoa kiranya Roh Tuhan menggenapi setiap Firman yang dikotbahkan dari mimbar ini. Kami berdoa kiranya setiap jemaat yang mendengar Firman dari mimbar ini memperoleh iman yang sejati melalui Firman-Nya.</p>
          <p class="card-text">Kami berdoa kiranya manusia yang taat kepada Firman-Nya boleh mengalami keselamatannya di dalam Injil-Nya dan menjadi lebih sempurna seperti Tuhan kita. Kami berdoa kiranya mimbar ini menggugah hati nurani umat Tuhan yang hidup saleh dan benar di hadapan-Nya, hidup penuh kasih dan adil di dalam tubuh Kristus, serta bertanggung jawab di dalam seluruh segi hidupnya sebagai saksi Injil Kristus di dalam dunia.</p>
          <p class="card-text">Kiranya segala kemuliaan kembali bagi Tuhan pemberi Firman kepada manusia. Damai sejahtera memerintah setiap jiwa yang dikasihi-Nya sampai selama-lamanya. Tuhan berkatilah dan pimpinlah pelayanan mimbar ini sampai kehendak-Mu jadi. Nyatakanlah visi-Mu kepada umat-Mu, panggillah hamba-hamba-Mu bagi penuaian ladang-Mu. Berkatilah bangsaku melalui mimbar ini. Kabulkanlah doa hamba-Mu.</p>
          <br>
          <p class="card-text">(Pdt. Dr. Stephen Tong)</p>
        </div>
      `)
    })

    $('#to-stephen-tong').on('click', function(event){
      event.preventDefault()
      console.log("To Stephen Tong Page")
      $('#content').empty()
      $('#content').append(`
        <div id="stephen-tong" class="card-body" style="padding: 5vh; overflow-y: scroll;">
          <div style="width: 30vw; color:white; margin-left: 5vw;">
            <h1>PDT. DR. STEPHEN TONG</h1>
            <br>
            <p>In his ministry spanning 62 years, given his start at age17, Dr. Stephen Tong has introduced more than 33 million people to Christ. As a world-renowned evangelist, he has preached in Asia, Europe, Australia, North and South America. As an evangelist firmly rooted in Reformed theology, Dr. Tong has influenced 450,000 to become full-time ministers of the Gospel. He has guest lectured at many leading theological seminaries in Asia and North America. As an ordained pastor, Dr. Tong is the founder of the Reformed Evangelical Church of Indonesia (RECI), Reformed Institute for Christianity and 21st Century in Washington DC as well as the International Reformed Evangelical Seminary (IRES) in Jakarta. Holding a Honorary Doctorate from Westminster Theological Seminary, he has written 75 books, including "Theology of Evangelism" and "Culture and the Fall".</p>
            <p>Dr. Tong is also the founder and the President of the Stephen Tong Evangelistic Ministries International (STEMI) which has established offices in the US, Europe, Hong Kong, Jakarta, Kuala Lumpur, Singapore and Taipei. He is a member of the International Consultants of the Lausanne Committee of World Evangelization and has been a main speaker at the general assembly of the World Reformed Fellowship in Johannesburg 2006, Second Lausanne Congress in 1989, International Prayer Assembly in Seoul 1984 and as the Seminar Leader in Amsterdam 1988 (sponsored by Billy Graham Association). Fulfilling the Cultural Mandate, he designed and built Aula Simfonia Jakarta, a concert hall with 1227 seats that is considered as one on the best acoustic concert halls in the world. He also established Sofilia Fine Art Center, a museum of many Western and Eastern art collections. He is also the founder of Calvin Christian School and Calvin Institute of Technology, as well as Reformed Center for Religion and Society.</p>
          </div>
        </div>
      `)
    })
})

function toHome(){
  $('#content').empty()
  $('#content').append(`
  <div id="home" class="home d-flex justify-content-around" style="margin-top: 5vh; height: 80vh;">
    <div class="leftTab d-flex justify-content" id="percobaanWarta" style="width: 25vw; margin-bottom: 20px; flex-direction: column; margin-left: 5vw; margin-right: 2.5vw;">
      <span class="subTitle">15 SEPTEMBER 2019</span>
      <span class="serviceTitle">Kebaktian Mandarin (07.30 WIB)</span>
      <span class="serviceSpeaker"><strong>PDT. DR. STEPHEN TONG</strong></span>
      <span class="serviceTitle">Kebaktian Indonesia (09.30 WIB)</span>
      <span class="serviceSpeaker"><strong>PDT. DR. STEPHEN TONG</strong></span>
      <span class="serviceTitle">English Service (09.30 WIB)</span>
      <span class="serviceSpeaker"><strong>REV. MICHAEL DENSMOOR</strong></span>
      <span class="serviceTitle">Kebaktian Sore (16.30 WIB)</span>
      <span class="serviceSpeaker"><strong>PDT. IVAN KRISTIONO</strong></span>
      <br>
      <span class="subTitle">Tambahan 23 MEI 2020</span>
      <br>
    </div>
    <div style="margin-left: 2.5vw; margin-right: 2.5vw;">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="width:30vw; display: flex; flex-direction: column-reverse;">
        <ol class="carousel-indicators" id="indicators">
        </ol>
        <div class="carousel-inner" id="banners">
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="rightTab d-flex justify-content-center" style="width: 25vw; margin-bottom: 20px; margin-left: 2.5vw; margin-right: 5vw;">
      <ul class="nav" style="flex-direction: column; width:100%;">
        <span class="submenuTitle">SubMenu Title 1</span>
        <li class="nav-item navHover">
          <a href="http://pembaruaniman.com/" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">KPIN</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://fires.id/" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">FIRES</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://spik.stemi.id" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">SPIK</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://www.buletinpillar.org" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">BULETIN PILLAR</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://www.sttrii.ac.id" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">STTRII</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://strij.org" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">STTRIJ</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://www.sekolahkristencalvin.org" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">SKC</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://www.momentum.or.id" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">T.B. MOMENTUM</span>
          </a>
        </li>
        <li class="nav-item navHover">
          <a href="http://majalahkita.org" class="nav-link router-link-exact-active router-link-active" target="blank">
            <span class="rightTabSpan">M. KITA</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  `)
  getBanner()
  getBulletin()
}

function toGerakan(){  
  $('#content').empty()
  $('#content').append(`
    <div id="gerakan" class="card-body" style="padding:7vh 20vw; overflow-y: scroll;">
      <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content:center; margin-top: 28px;">
        <button type="button" class="btn btn-danger to-gerakan1">Sebelum Gerakan Ini</button>
        <button type="button" class="btn btn-outline-danger to-gerakan2">Gerakan Reformed dalam Sejarah</button>
        <button type="button" class="btn btn-outline-danger to-gerakan3">Panggilan Gerakan Reformed Injili</button>
      </div>
      <br>
      <h3 class="card-title">Gerakan Reformed Injili</h3>
      <br>
      <h5 class="card-subtitle mb-2" style="margin-bottom:5px">Sebelum Gerakan Ini</h5>
      <p class="card-text">Pada pertengahan abad ke20, dunia Kekristenan baru mengalami sedikit kelegaan dari kesulitan-kesulitan yang ditimbulkan oleh Perang Dunia II. Daerah Eropa Timur sudah jatuh ke tangan komunisme. Daerah Eropa Barat dilanda oleh sekularisme. Pengutusan misionaris mulai beralih dari daratan Eropa ke Amerika Utara. Sedangkan gereja di Amerika harus menghadapi perkembangan Liberalisme yang sangat mengancam hidup Kekristenan tradisional.</p>
      <p class="card-text">Sementara itu teologi-teologi yang paling baru, misalnya: Demitologisasi berusaha menyaingi NeoOrtodoks dari sayap Barthian untuk mengecam kepercayaan Injil. Pada saat seperti itu, gereja di Asia sedang tertidur di dalam tahap mengabaikan teologi, meskipun gerakan rohani yang pernah dikaruniakan oleh Tuhan sudah menghasilkan banyak buah khususnya di Asia Tenggara dan Cina. Akibat kebaktiankebaktian kebangunan rohani yang dipimpin oleh John Sung dan Andrew Gih telah menghasilkan banyak buah berupa pekerja penuh waktu yang melayani Tuhan serta tim-tim penginjilan yang berkembang di sana sini sehingga telah menggugah semangat kebangsaan di negara-negara Asia. Namun gerakan Ekumene yang mengabaikan ortodoksi dan memperluas semangat toleransi terhadap segala macam aliran baru, ditambah gerakan Karismatik yang telah menggantikan gerakan Pentakosta tradisional untuk merombak struktur pikiran gereja-gereja denominasional, telah menghasilkan gelombang-gelombang awam yang tidak mengerti teologi namun memberanikan diri untuk mengabarkan Injil dan mendirikan gereja-gereja tanpa Pengakuan Iman, tanpa liturgi, bahkan tanpa penghargaan terhadap musik-musik yang agung yang diwariskan dari sejarah.</p>
      <p class="card-text">Pada tahun 70 hingga 80an, ketika kaum Injili melihat bahaya kesimpangsiuran yang terjadi di dalam Kekristenan, di Asia Tenggara gerakan mahasiswa mulai dibangkitkan, termasuk Gerakan Perkantas dan Lembaga Pelayanan Mahasiswa (Campus Crusade). Namun kubu-kubu teologi, yaitu tempat-tempat pendidikan hamba Tuhan sudah tidak mempunyai kekuatan yang cukup untuk mempertahankan iman kepercayaan yang ortodoks. Itulah sebabnya terjadi gerakan mendirikan sekolah teologi di luar jalur institusi-institusi yang konvensional. Sejarah membuktikan sekolah-sekolah semacam ini kurang berbobot dalam mempertahankan teologi yang benar dan pengertian Kitab Suci yang bertanggung jawab dan benar. Itulah sebabnya banyak hamba Tuhan lulusan sekolah-sekolah semacam ini sulit menerima tantangan zaman apalagi menantang zaman, khususnya dalam menghadapi kaum intelektual.</p>
      <p class="card-text">Di pihak lain, kebangunan agama-agama di luar Kekristenan juga menjadi suatu tantangan yang besar bagi iman Kristen. Semakin banyaknya kaum cendekiawan dalam agama-agama lain dan kesadaran mereka untuk melakukan konsolidasi juga merupakan fakta yang tidak boleh kita abaikan. Selain itu, makin meningkatnya pendidikan serta makin banyaknya pengaruh filsafat modern di negara-negara Asia telah meningkatkan kemungkinan Kekristenan, dengan pimpinan yang kurang berbobot, menjadi agama yang dianggap terbelakang dan dilecehkan oleh generasi yang baru. Melihat situasi demikian, siapakah yang sudah bersiap sedia untuk menerima tantangan ini serta mengisi kebutuhan zaman pada akhir abad ke-20?</p>
      <p class="card-text">Kuantitas yang diperoleh melalui gerakan-gerakan yang berlangsung di kalangan rakyat jelata tidak cukup untuk menjawab tantangan zaman ini. Karena ketidakpuasan terhadap kesimpangsiuran pengajaran Kristen masa kini dan ketidaksanggupan pihak Liberalisme maupun gerakan Kristen yang bersayap emosional untuk mewakili Kekristenan sejati, maka kami memikirkan perlu adanya Gerakan Reformed Injili.</p>
      <p class="card-text">Gerakan ini berada di dalam gelombang transisi dari masyarakat agrikultural (pertanian) menuju masyarakat industrialisasi dan juga menuju masyarakat informasi. Itulah sebabnya Gerakan ini tidak mudah diikuti oleh orang yang belum biasa dengan kedahsyatan gelombang transisi ini, apalagi Gerakan yang melawan arus ini berakar pada semangat yang dirintis pada abad ke-16. Gerakan ini bermotivasi membawa Kekristenan menuju abad ke-21. Itulah sebabnya, tidak heran, jika gerakan ini dinilai terlalu terbelakang atau melawan arus.</p>
    </div>
  `)
}

function toPengakuan(){  
  $('#content').empty()
  $('#content').append(`      
    <div id="pengakuan" class="card-body" style="padding: 7vh 20vw; overflow-y: scroll;">
      <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content:center; margin-top: 28px;">
        <button type="button" class="btn btn-danger to-pengakuan1">Pengakuan Iman Reformed Injili</button>
        <button type="button" class="btn btn-outline-danger to-pengakuan2">Pengakuan Iman Penginjilan</button>
      </div>
      <br>
      <h3 class="card-title">PENGAKUAN IMAN REFORMED INJILI</h3>
      <br>
      <h5 class="card-subtitle mb-2 pengakuanSub">ALLAH</h5>
      <p class="card-text">Kami percaya kepada satu-satunya Allah yang hidup dan benar, yang kekal dan keberadaan-Nya tergantung pada dirinya sendiri, yang melampaui dan mendahului semua ciptaan; yang dalam kekekalan-Nya ada di dalam tiga pribadi; Bapa, Putera dan Roh Kudus, yaitu Allah yang Esa; yang menciptakan alam semesta dari ketiadaan oleh Firman-Nya yang berkuasa; yang menopang dan memerintah segala sesuatu yang telah diciptakan-Nya serta memelihara ketetapan-ketetapan-Nya yang kekal.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">ALKITAB</h5>
      <p class="card-text">Kami percaya bahwa Alkitab Perjanjian Lama dan Perjanjian Baru adalah penyataan Allah yang sempurna yang diilhamkan Roh Kudus kepada para penulisnya dan karena itu adalah benar tanpa salah dalam naskah aslinya. Alkitab menyatakan di dalamnya kesaksian Roh Kudus, dan merupakan wibawa tunggal dan mutlak bagi iman dan kehidupan, baik untuk perseorangan, gereja, maupun masyarakat. Kami percaya bahwa Alkitab tidak bersalah dalam segala hal yang diajarkannya, termasuk hal-hal yang menyangkut sejarah dan ilmu.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">MANUSIA</h5>
      <p class="card-text">Kami percaya bahwa manusia telah diciptakan secara unik menurut rupa Allah, diciptakan dengan kekudusan, keadilan dan pengenalan sejati; dan diperintahkan Allah untuk menghayati pikiran-pikiran Allah sebagai seorang pemelihara perjanjian yang taat: ia dipercayakan untuk memerintah dan mengusahakan ciptaan Allah lainnya untuk kemuliaan Allah. Kami percaya bahwa seluruh segi kehidupan harus dihayati di bawah perintah Allah sebagai ungkapan ketaatan kepada hukum-hukum Allah.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">DOSA</h5>
      <p class="card-text">Kami percaya bahwa apa yang telah terjadi dalam diri Adam dan juga adalah wakil umat manusia, mengakibatkan seluruh umat manusia telah jatuh dalam dosa dan maut; mati secara rohani, patut menerima murka adil Allah, tanpa pengharapan dan tanpa pertolongan untuk memperoleh keselamatan, baik dari dirinya sendiri atau dari luar dirinya maupun dari dunia ini.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">PERJANJIAN ANUGERAH</h5>
      <p class="card-text">Kami percaya bahwa Allah dalam kekekalan telah membuat perjanjian untuk umat pilihan-Nya, dengan Yesus Kristus sebagai Kepala; bahwa melalui ketaatan Yesus Kristus yang sempurna dan kematian-Nya sebagai pengganti manusia di kayu salib, Kristus telah memenuhi tuntutan murka Allah terhadap umat-Nya.</p>
      <p class="card-text">Melalui kuasa kebangkitan Kristus, Allah terus-menerus memanggil dan mengumpulkan umat-Nya dari segala zaman dan segala bangsa untuk menjadi suatu imamat yang rajani dan bangsa yang kudus bagi kemuliaan-Nya.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">YESUS KRISTUS</h5>
      <p class="card-text">Kami percaya kepada Yesus Kristus, Pribadi kedua Allah Tritunggal, Allah sejati dan manusia sejati, satu-satunya Juruselamat manusia; yang telah dikandung oleh Roh Kudus, lahir dari anak dara Maria; hidup tanpa dosa, disalibkan mati dan bangkit dari kematian, naik ke surga, duduk di sebelah kanan Allah Bapa untuk bersyafaat bagi umat-Nya sebagai Imam Besar, yang berhasil dan penuh pengertian; bahwa Dia akan datang kembali dalam tubuh kemuliaan-Nya, secara kasatmata dan secara tiba-tiba untuk menghakimi orang yang hidup dan yang mati.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">ROH KUDUS</h5>
      <p class="card-text">Kami percaya kepada Roh Kudus, Pribadi ketiga Allah Tritunggal, Pengilham Ilahi Alkitab, yang menginsyafkan manusia akan dosa mereka melalui Firman-Nya, yang melahirbarukan mereka, sehingga tumbuh iman dan pertobatan kepada Yesus Kristus untuk keselamatan; Dia memperlengkapi orang-orang beriman dengan kuasa untuk menaati hukum-hukum Allah; Dia mengaruniakan kepada Gereja Yesus Kristus karunia-karunia untuk pelayanan orang kudus; Dia bersyafaat bagi orang beriman dengan keluh kesah yang tak terucapkan sampai hari pemuliaan umat Allah.</p>
      <h5 class="card-subtitle mb-2 pengakuanSub">GEREJA DAN MISI</h5>
      <p class="card-text">Kami percaya akan satu Gereja yang kudus dan am, yang terdiri dari seluruh umat pilihan Allah dari segala zaman dan yang sebagiannya kini terhisap dalam gereja setempat; gereja setempat harus merupakan ungkapan dari sifat Gereja yang kudus dan am tersebut dengan menjaga kemurnian ajaran sesuai dengan Alkitab, dengan mendahulukan persatuan berdasarkan kebenaran di dalam ikatan kasih antara berbagai gereja setempat dan aliran gereja yang ada, dengan memancarkan kemuliaan Allah melalui ibadah, pengajaran Firman Allah, pelaksanaan baptisan dan perjamuan kudus, persekutuan, pelaksanaan disiplin dalam kasih, pelayanan dan misi, kami percaya bahwa gereja ada di dalam dunia untuk memberitakan Injil Yesus Kristus dan mengungkapkan Ketuhanan Kristus lewat perbuatan-perbuatan nyata. Gereja menjalankan misi Yesus Kristus, yaitu menegakkan pemerintahan Kerajaan Allah atas dunia ini, baik melalui usaha-usaha penginjilan di dunia ini, sampai Kristus datang kembali untuk merampungkan penggenapan Kerajaan-Nya.</p>
      <br>
      <hr>
    </div>
  `)
}

function getBanner() {
  $.ajax({
      method: "GET",
      url: `${serverUrl}/api/getBannerList`
  })
      .done(completeBanners => {
        const banners = completeBanners.Message
        $.each(banners, function(i){
          if(i === 0){  
            $('#banners').empty()
            $('#banners').append(`
              <div class="carousel-item active">
                <background-image class="d-block w-100 backgroundCarousel" style="background-image: url('${serverUrl}/public/${banners[i].bannerLocation}');">
              </div>
            `)
            $('#indicators').empty()
            $('#indicators').append(`
              <li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active"></li>
            `)
          } else {
            $('#banners').append(`
              <div class="carousel-item">
                <background-image class="d-block w-100 backgroundCarousel" style="background-image: url('${serverUrl}/public/${banners[i].bannerLocation}');">
              </div>
            `)
            $('#indicators').append(`
              <li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>
            `)
          }
        });
      })
      .fail(err=> {
          console.log(err)
      })
      .always(function(){
          console.log("Get Banner Finished")
      })
}

function getBulletin() {
  $.ajax({
      method: "GET",
      url: `${serverBulletin}/api/getWartaList`
  })
      .done(completeBulletins => {
        const bulletins = completeBulletins.Message
        $.each(bulletins, function(i){
          console.log(bulletins)
            // $('#percobaanWarta').empty()
          $('#percobaanWarta').append(`
            <span class="subTitle">${dateFormatter(bulletins[i].EventDate)}</span>
            <span class="serviceTitle">${bulletins[i].EventName} (${bulletins[i].EventTime} WIB)</span>
            <span class="serviceSpeaker"><strong>${bulletins[i].Speaker.toUpperCase()}</strong></span>
            <span class="serviceTitle">Place: ${bulletins[i].Place}</span>
            <span class="serviceTitle">Note: ${bulletins[i].Note}</span>
            <br>
          `)
        });
      })
      .fail(err=> {
          console.log(err)
          let bulletins = [
            {
              EventTypeName: "Kebaktian",
              EventName: "kebaktian 1",
              EventDate: "2020-05-19",
              EventTime: "15:00",
              Speaker: "Kentgi",
              Place: "RMCI",
              Note: "test Notes"
            },
            {
              EventTypeName: "Kebaktian",
              EventName: "kebaktian 1",
              EventDate: "2020-05-19",
              EventTime: "15:00",
              Speaker: "Kentgi",
              Place: "RMCI",
              Note: "test Notes"
            }
          ]
          $.each(bulletins, function(i){
            console.log(bulletins)
            $('#percobaanWarta').append(`
              <span class="subTitle">${dateFormatter(bulletins[i].EventDate)}</span>
              <span class="serviceTitle">${bulletins[i].EventName} (${bulletins[i].EventTime} WIB)</span>
              <span class="serviceSpeaker"><strong>${bulletins[i].Speaker.toUpperCase()}</strong></span>
              <span class="serviceTitle">Place: ${bulletins[i].Place}</span>
              <span class="serviceTitle">Note: ${bulletins[i].Note}</span>
              <br>
            `)
          });
      })
      .always(function(){
          console.log("Get Bulletin Finished")
      })
}

function dateFormatter(date) {
  const dateForm = new Date(date).toDateString()
  var arr = dateForm.split(' ')
  arr.splice(0,1)
  switch(arr[0]) {
    case "January":
      arr[0] = "Januari"
      break;
    case "February":
      arr[0] = "Februari"
      break;
    case "March":
      arr[0] = "Maret"
      break;
    case "May":
      arr[0] = "Mei"
      break;
    case "June":
      arr[0] = "Juni"
      break;
    case "July":
      arr[0] = "Juli"
      break;
    case "August":
      arr[0] = "Agustus"
      break;
    case "October":
      arr[0] = "Oktober"
      break;
    case "December":
      arr[0] = "Desember"
      break;
    default:
      // default
  }
  return `${arr[1]} ${arr[0].toUpperCase()} ${arr[2]}`
}