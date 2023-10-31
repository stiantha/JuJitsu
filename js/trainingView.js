function trainingView() {
    let treningsopplegg = {
        bein: [
            {
                knebøy: 'Knebøy 10 x 3',
                knebøyMedialink: "https://player.vimeo.com/video/222059954", 
                knebøyMVekt: 'Knebøy 8 x 2',
                knebøySumo: 'Knebøy med ben spredt 12 x 3',
            }
        ],
        Kjerne: [
            {
                benhev: 'Ligg på rygg og hev ben vertikalt og ned til horisontalt uten at fot tar i bakken, sakte tempo og reduser krumning i rygg så godt du klarer',
                kneTilAlbue: 'Ligg på rygg, hold hender bak hodet og løft ett kne samtidig som du møter det kneet med motsatt side albue'
            }
        ]
    }
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main_settings">
 <div class="card_settings">
     <div class="card-body">
        <div class="trainingPlan">
            <div>${treningsopplegg.bein[0].knebøy}</div>
            <iframe src="${treningsopplegg.bein[0].knebøyMedialink}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div>${treningsopplegg.bein[0].knebøyMVekt}</div>
            <div><input type="checkbox"${treningsopplegg.bein[0].knebøySumo}/></div>
         <br>
         <hr>
            <h2>Oppvarming</h2>
            <ul>
                <li>5-10 minutters lett jogging eller hopping på stedet</li>
                <li>10-15 kroppshevninger</li>
                <li>10 armkretsløp (frem og tilbake)</li>
            </ul>
<hr>
            <h2>Styrketrening</h2>
            <h5>Øvelse 1: Knebøy</h5>
            <p>Utfør 3 sett med 10-15 repetisjoner. Pause i 30 sekunder mellom hvert sett.</p>
<br>
            <h5>Øvelse 2: Armhevinger</h5>
            <p>Utfør 3 sett med så mange repetisjoner som mulig. Pause i 30 sekunder mellom hvert sett.</p>
<br>
            <h5>Øvelse 3: Planke</h5>
            <p>Utfør 3 sett med 20-30 sekunders hold. Pause i 30 sekunder mellom hvert sett.</p>
<br>
<hr>
            <h2>Nedkjøring</h2>
            <p>5-10 minutters rolig gange<p>
            <br>
            <p>Tøying av de store muskelgruppene i 10-15 sekunder per øvelse</p>
            <br>
            <p>Husk å utføre øvelsene med riktig teknikk og ta pauser mellom settene ved behov. Du kan justere antall repetisjoner og sett etter ditt ferdighetsnivå.</p>
        </div>
     </div>
 </div>
    `;
}