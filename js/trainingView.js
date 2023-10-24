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
        <div class="trainingPlan">
            <h1>Trening</h1>
            <div>${treningsopplegg.bein[0].knebøy}</div>
            <iframe src="${treningsopplegg.bein[0].knebøyMedialink}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div>${treningsopplegg.bein[0].knebøyMVekt}</div>
            <div><input type="checkbox"${treningsopplegg.bein[0].knebøySumo}/></div>
            <h1>Kroppsvekt Treningsopplegg</h1>
         
            <h2>Oppvarming</h2>
            <ul>
                <li>5-10 minutters lett jogging eller hopping på stedet</li>
                <li>10-15 kroppshevninger</li>
                <li>10 armkretsløp (frem og tilbake)</li>
            </ul>

            <h2>Styrketrening</h2>
            <h3>Øvelse 1: Knebøy</h3>
            <p>Utfør 3 sett med 10-15 repetisjoner. Pause i 30 sekunder mellom hvert sett.</p>

            <h3>Øvelse 2: Armhevinger</h3>
            <p>Utfør 3 sett med så mange repetisjoner som mulig. Pause i 30 sekunder mellom hvert sett.</p>

            <h3>Øvelse 3: Planke</h3>
            <p>Utfør 3 sett med 20-30 sekunders hold. Pause i 30 sekunder mellom hvert sett.</p>

            <h2>Nedkjøring</h2>
            <ul>
                <li>5-10 minutters rolig gange</li>
                <li>Tøying av de store muskelgruppene i 10-15 sekunder per øvelse</li>
            </ul>

            <p>Husk å utføre øvelsene med riktig teknikk og ta pauser mellom settene ved behov. Du kan justere antall repetisjoner og sett etter ditt ferdighetsnivå.</p>
        </div>
    `;
}