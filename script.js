const content = [{
    title: "Pelatihan memasang lampu otomatis kkn univ undip",
    img: "artik_1.jpg",
    p: "Untuk meningkatkan efisiensi energi dan mendukung pemanfaatan teknologi dalam kehidupan sehari-hari, mahasiswa Teknik Elektro KKN Tim 1 Undip 2025 bernama Ariel Kurniansyah mengadakan pelatihan dan pendampingan instalasi lampu dengan sakelar otomatis berbasis sensor cahaya yang digelar di Dusun Sawahan Desa Somopuro Jogonalan Klaten. Kegiatan ini diikuti oleh masyarakat umum yang tertarik dengan teknologi otomasi sistem kelistrikan. Pelatihan ini bertujuan untuk memberikan pemahaman serta keterampilan praktis dalam pemasangan dan instalasi sakelar otomatis berbasis sensor cahaya. Teknologi ini memungkinkan lampu menyala dan mati secara otomatis sesuai dengan tingkat pencahayaan di sekitar, sehingga dapat menghemat energi listrik dan meningkatkan kenyamanan pengguna. Salah satu peserta bernama Pak Mardi mengungkapkan bahwa pelatihan ini sangat bermanfaat baginya. 'Saya jadi lebih paham bagaimana cara kerja sakelar otomatis ini dan bagaimana cara memasangnya sendiri di rumah. Teknologi ini juga sangat membantu dalam menghemat energi listrik,' katanya. Selama pelatihan, peserta diberikan teori mengenai cara kerja sensor cahaya, cara intalasi, dan komponen pendukung lainnya. Setelah itu, peserta juga melakukan praktik langsung dalam menginstalasi perangkat dan menguji fungsinya."
}];

const Main = document.getElementById("main");

Main.innerHTML = content.map(article => 
                `<article class="article">
                    <div class="title">
                        <h2>${article.title}</h2>
                    </div>
                    <aside class="aside">
                        <img src="${article.img}" alt="" id="img">
                    </aside>
                    <div class="paragraph">
                    <p>
                    ${article.p}
                    </p>
                    </div>
                  </article>
                `).join("");
/*
Main.innerHTML = 
    `
    <article class="article">
        <div class="title">
            <h2>${article.title}</h2>
        </div>
        <aside class="aside">
            <img src="${article.img}" alt="" id="img">
        </aside>
        <div class="paragraph">
            <p>
                ${article.p}
            </p>
        </div>
    </article>
    `
*/


