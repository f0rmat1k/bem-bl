{"name":"b-icon","techs":[{"name":"bemhtml"},{"name":"css"},{"name":"en.title.txt"},{"name":"en.wiki"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Абстрактная иконка","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["Блок ",{"tag":"tt","content":["b-icon"]}," создает контейнер для изображения."]},{"elem":"p","content":["Aтрибуты ",{"tag":"tt","content":["alt, url, width, height"]}," опциональны. Т.е. могут быть объявлены/необъявлены во входных данных."]},{"elem":"p","content":[{"tag":"tt","content":["BEMJSON"]}," блока:"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["block"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"b-icon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]}]},{"elem":"p","content":["Выводит картинку (",{"tag":"tt","content":["img"]},") с однопиксельным прозрачным ",{"tag":"tt","content":[".gif"]}," и пустым атрибутом ",{"tag":"tt","content":["alt"]},". ",{"tag":"tt","content":["HTML"]},":"]},{"block":"ohl","mods":{"lang":"xml"},"content":[{"tag":"span","attrs":{"class":"ohl-name ohl-name-tag"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&lt;"]},"img"," ",{"tag":"span","attrs":{"class":"ohl-name ohl-name-attribute"},"content":["class",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["="]},{"tag":"span","attrs":{"class":"ohl-string ohl-string-double"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&quot;"]},"b-icon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&quot;"]}]}]}," ",{"tag":"span","attrs":{"class":"ohl-name ohl-name-attribute"},"content":["src",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["="]},{"tag":"span","attrs":{"class":"ohl-string ohl-string-double"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&quot;"]},"//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&quot;"]}]}]}," ",{"tag":"span","attrs":{"class":"ohl-name ohl-name-attribute"},"content":["alt",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["="]},{"tag":"span","attrs":{"class":"ohl-string ohl-string-double"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&quot;"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&quot;"]}]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["/&gt;"]}]}]},{"elem":"p","content":["Использовать блок можно двумя способами:"]},{"elem":"ul","content":[{"elem":"li","content":["через ",{"tag":"tt","content":["url"]}]},{"elem":"li","content":["через модификатор"]}]},{"elem":"h3","content":["Использование блока через ",{"tag":"tt","content":["url"]}]},{"elem":"p","content":["Задаем в атрибуте ",{"tag":"tt","content":["url"]}," свой путь к изображению, ",{"tag":"tt","content":["bemjson"]},":"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["block"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"b-icon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["url"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"my-icon.png",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["alt"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"My icon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]}]},{"elem":"p","content":["Этот способ рекомендуется для добавления одиночных картинок."]},{"elem":"h3","content":["Использование блока через добавление модификатора"]},{"elem":"p","content":["Добавляем блоку модификатор, ",{"tag":"tt","content":["bemjson"]},":"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["block"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"b-icon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["mods"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["type"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"simple",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["alt"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"My icon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]}]},{"elem":"p","content":["В ",{"tag":"tt","content":["css"]}," задаем размеры изображения и путь к нему:"]},{"block":"ohl","mods":{"lang":"xml"},"content":[".b-icon_type_simple\n{\n    width: 16px;\n    height: 16px;\n\n    background: url(icons-sprite.png) no-repeat -50px 0;\n}"]},{"elem":"p","content":["Этот способ рекомендуется при использовании спрайтов."]}]}}