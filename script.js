const fortunes = [
"Sabah mı gece mi daha çok sana benzer?",
"Güne başlarken ilk yaptığın şey ne olur?",
"Seni en hızlı mutlu eden küçük şey ne?",
"Kahve mi çay mı, nasıl içersin?",
"Yalnız kalmak mı kalabalık mı sana daha iyi gelir?",
"Boş bir günün olsa onu nasıl geçirirsin?",
"En sevdiğin yemek hangisi, neden?",
"En çok hangi mevsimde kendin gibi hissedersin?",
"Gün içinde seni motive eden şey ne?",
"Ev mi dışarısı mı sana daha ait hissettirir?",
"Moralin bozukken sana ne iyi gelir?",
"Kendinle ilgili en sevdiğin özelliğin ne?",
"Kendinle ilgili değiştirmek istediğin bir şey var mı?",
"Kırıldığında bunu belli eder misin?",
"Kolay güvenen biri misin?",
"Seni en çok zorlayan duygu hangisi?",
"Son zamanlarda seni mutlu eden bir şey neydi?",
"Ağlamak sana iyi gelir mi?",
"Kendini en rahat hissettiğin an ne zaman?",
"İçinden geldiği gibi davranmak senin için kolay mı?",
"Bir insanda seni en çok etkileyen özellik ne?",
"Arkadaşlıkta senin için olmazsa olmaz nedir?",
"İnsanlarla çabuk bağ kurar mısın?",
"Birinin sana değer verdiğini nasıl anlarsın?",
"Affetmek senin için kolay mı zor mu?",
"Küstüğünde ilk adımı atar mısın?",
"Seni insanlardan uzaklaştıran bir davranış ne?",
"Bir ilişkide en çok neye ihtiyaç duyarsın?",
"Anlaşılmak mı, sevilmek mi senin için daha önemli?",
"Birinin seni gerçekten dinlediğini nasıl anlarsın?",
"Çocukluğundan aklında kalan güzel bir an ne?",
"Seni en çok değiştiren dönem hangisiydi?",
"Hayatında 'iyi ki olmuş' dediğin bir olay var mı?",
"Unutamadığın bir anın var mı?",
"Küçükken yapmayı en sevdiğin şey neydi?",
"Eskiden çok sevip şimdi bıraktığın bir şey var mı?",
"Hayatında seni en çok etkileyen biri kimdi?",
"Geçmişten aldığın önemli bir ders ne?",
"Eskiden korkup şimdi güldüğün bir şey var mı?",
"Çocukluğunu bir kelimeyle anlatsan ne olurdu?",
"Şu sıralar en çok neyin hayalini kuruyorsun?",
"Hayatta olmazsa olmazın ne?",
"Gelecekte kendini nerede hayal ediyorsun?",
"Bir gün her şeyi bırakıp gitmek ister miydin?",
"Şu an gerçekleştirmek istediğin küçük bir hedef ne?",
"Seni en çok heyecanlandıran düşünce ne?",
"Hayatında daha çok neye yer açmak istiyorsun?",
"Mutluluk senin için ne demek?",
"Hayatın nasıl hissettirmesini istersin?",
"Kendin için en çok neyi diliyorsun?",
"Tek başına yapmayı sevdiğin bir şey ne?",
"En sevdiğin koku hangisi?",
"Uyumadan önce genelde ne yaparsın?",
"En verimli olduğun saatler hangileri?",
"En sevdiğin küçük kaçamak ne?",
"Sessizlik mi müzik mi sana daha iyi gelir?",
"Alışkanlıklarına bağlı mısın?",
"Kendinle baş başa kalmayı sever misin?",
"Gün içinde kendin için yaptığın küçük bir şey var mı?",
"Seni yoran şeylerden uzaklaşmak için ne yaparsın?",
"Seni en çok ne kırar?",
"Söylemekte zorlandığın bir şey var mı?",
"Kendini en çok kime açarsın?",
"Anlaşılmadığını hissettiğin anlar olur mu?",
"En çok ne zaman kendin gibi hissedersin?",
"İnsanların senin hakkında bilmesini istediğin bir şey ne?",
"Yalnız hissettiğinde ne yaparsın?",
"Sana güven veren şey nedir?",
"Birine yakın hissetmen ne kadar sürer?",
"Birinin seninle kalmasını sağlayan şey ne olurdu?",
"Bugün seni gülümseten bir şey neydi?",
"Şu an kalbinde en baskın duygu ne?",
"Son zamanlarda kendinle gurur duyduğun bir şey var mı?",
"Birine teşekkür etmek istesen kim olurdu?",
"Şu an hayatında en çok neye ihtiyacın var?",
"Kendine karşı yeterince nazik misin?",
"Bugün kendin için ne yaptın?",
"Seni sen yapan şey sence ne?",
"Birinin senin için burada olması ne ifade eder?",
"Bu oyundan sonra karşındaki kişiyle ilgili en çok neyi merak ediyorsun?"
];

const shownFortunes = new Set();

function showFortune() {
  // Tüm mesajlar gösterildiyse tekrar gösterme veya resetleme yapılabilir
  if (shownFortunes.size === fortunes.length) {
    document.getElementById("fortune-text").innerText = "Tüm mesajlar gösterildi. Sayfayı yenileyin.";
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * fortunes.length);
  } while (shownFortunes.has(randomIndex));

  shownFortunes.add(randomIndex);
  document.getElementById("fortune-text").innerText = fortunes[randomIndex];
}


