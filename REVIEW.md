
Genel olarak gayet guzel proje. bi cok seyi kullanmissin zaten. eline saglik. coook detayli bakmadim ama ilk bakista gozume carpanlari ekledim. Kolay gelsin


1. Dosya ve klasor isimlerinin hepsi ya Ingilizce ya da Türkçe olsun. Bazi seyler ingilizce bazilari turkce hos durmuyor.
   1. Ornek: `ProductDetay` yerine `ProductDetails` `MobilMenu` yerine `MobileMenu`, `Sepet` yerien `Cart` gibi. 
   2. Projeyi open source yapacaksan bence hersey ingilizce olsun.
2. Formatting her sayfada ayni degil. bazi sayfalar duzgun iken bazilarina hic `prettier` ugramamis gibi duruyor.
   1. Bunun etkili bir yolu var: `husky` + `lint-staged` + `prettier`
   2. bu araclara tek tek bak. kisacasi: her commit oncesinde, o commit icin degismis dosyalari prettier ile formatlayip, sonrasinda eslint ile hata var mi diye bakip; hata var ise, commit in kaydedilmesini engelleyen, hata yok ise devam eden bir sistem. boyle biraz karisik gozukmus olabilir. ama degil. bi kere bunu oturttugun zaman her projende kullanabilrisin.
   3. boylelikle hem sen, hem de repoyu kullanan diger insanlar remote a kotu formatlanmis kod gonderemiyor oluyor. guzel bi sey bu.
   4. benim `react-editext` reposunda ornek kod var. ama su yaziya da bakabilirsin: https://www.coffeeclass.io/articles/commit-better-code-with-husky-prettier-eslint-lint-staged
3. commit mesajlarinda [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) yontemini uygulayabilirsin.
   1. ben yillardir kisisel ya da calistigim firma isleri icin hep bu formati kullandim / kullandirttim. 
   2. bunu da otomatik hale getirmek ve commit mesajlarinin validationdan gecmesi icin [commitlint](https://github.com/conventional-changelog/commitlint) kullanabilirsin.
   3. TLDR: commit mesajlarinda hic bi zaman gecmis zaman kullanma. `fixed xxx` ya da `updated yyy` ya da `zzz ozelligi eklendi` gibi.
      1. commit mesajlarini gonderirken soyle hayal et: `this commit will XXXXXXXXX`. `XXXXXXXX` yazan yere senin commit mesajin gelecek. bu cumle yapisini korumaya calis
      2. dolayisiyla, `fix styled button` ya da `update webpack config` gibi bir yapi kullan. bunu yukaridaki yere koyunca: `this commit will fix styled button` ya da `this commit will update webpack config` olacak. anlamli bir cumle oldu gordugun gibi.
   4. buna direkt olarak HATA , YANLIS diyemem. ama bu yontemi izlersen daha dogru ve kabul gorur olacaktir opensource dunyasinda.
4. Bazi yerlerde `React.useState` bazi yerlerde ise `useState` kullanmissin. tutarli olmakta fayda var proje genelinde. ikisinden birini secebilirsin.
5. Logical bloklar arasinda bosluk birakmaya calis. (import statementlari ile component arasinda ya da function bodylerinde birbiriyle alakasiz yerleri ayirmaya calis.) Kodu makine icin yaziyoruz ama insan okuyacak sonucta. kisaltmalardan olusan degisken ve fonksiyon isimleri yerine self-documenting uzun isimler kullanmakta sorun yok. saga sola bosluk koymak da kotu bir fikir degil. zamanla oturur zaten bu pratik.
6. custom bir `eslint` config dosyasi ekledigin icin bazi useEffect kullanimlarinda depedency sorunu var. eslintrc dosyasini silip tekrar react componentlerine goz gezdirebilirsin.
   1. `ProductDetay` ve `Home` benim gorebildigim iki tanesi.