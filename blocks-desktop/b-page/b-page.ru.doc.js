{"name":"b-page","techs":[{"name":"bemhtml"},{"name":"en.title.txt"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Обвязка страницы","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["﻿Блок b-page создаёт теги верхнего уровня страницы: ",{"tag":"tt","content":["&lt;html&gt;"]},", ",{"tag":"tt","content":["&lt;head&gt;"]},", ",{"tag":"tt","content":["&lt;body&gt;"]},". Именно он отвечает за то, какие подключить css и js-файлы к странице, выставление meta-тегов, заголовка и т.д."]},{"elem":"p","content":["Декларация блока в ",{"tag":"tt","content":["bemjson"]}," начинается объявлением блока и указанием свойства ",{"tag":"tt","content":["title"]},", которое превращается в тег ",{"tag":"tt","content":["&lt;title&gt;"]}," в HTML."]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["("]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["block"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"b-page",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["title"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"Page with link",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[")"]}]},{"elem":"p","content":["Указание свойства ",{"tag":"tt","content":["head"]}," дополняет элемент ",{"tag":"tt","content":["head"]},", соответствующий HTML-тегу ",{"tag":"tt","content":["&lt;head&gt;"]},", элементами для подключения css и  js-файлов:"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["("]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["head"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"css",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["url"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"example.css",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["ie"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-keyword ohl-keyword-constant"},"content":["false"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"css",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["url"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"example.ie.css",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["ie"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"lt IE 8",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"js",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["url"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"example.js",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["]"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[")"]}]},{"elem":"p","content":["Элемент ",{"tag":"tt","content":["css"]}," превращается в HTML в тег ",{"tag":"tt","content":["&lt;link&gt;"]},", подключающий как css-стиль тот файл, что указан в свойстве ",{"tag":"tt","content":["url"]}," этого элемента. Также у такого элемента может быть свойство ",{"tag":"tt","content":["ie"]},". Если это свойство ",{"tag":"tt","content":["false"]},", то будут использоваться такие ",{"tag":"tt","content":["condittional comments"]},", которые предотвратят использование этих стилей в IE. При строчном значении этого свойства тег ",{"tag":"tt","content":["&lt;link&gt;"]}," , будет обёрнут в соответствующий ",{"tag":"tt","content":["conditional comment"]},", и этот стиль будет грузиться и использоваться указанных браузерах.",{"tag":"br"}," Также есть возможность указывать свойство content для содержания тега ",{"tag":"tt","content":["&lt;style&gt;"]},":"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["("]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["head"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"css",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},".b-blah { color: #f00",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["]"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[")"]}]},{"elem":"p","content":["Элемент ",{"tag":"tt","content":["js"]}," действует аналогично, подключая к странице js-файлы при помощи тега ",{"tag":"tt","content":["&lt;script&gt;"]},"."]},{"elem":"p","content":["Свойство ",{"tag":"tt","content":["head"]}," не описывает содержание HTML-тега ",{"tag":"tt","content":["&lt;head&gt;"]}," полностью, а лишь дополняет дефолтное, которое блок сам создаёт в своём bemhtml-шаблоне:"]},{"elem":"ul","content":[{"elem":"li","content":["тег ",{"tag":"tt","content":["&lt;meta&gt;"]}," с указанием кодировки"]}]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["tag"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"meta",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["attrs"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"http-equiv",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"content-type",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"text/html; charset=utf-8",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]}]},{"elem":"ul","content":[{"elem":"li","content":["тег ",{"tag":"tt","content":["&lt;meta&gt;"]}," для использования IE9 (и выше) в максимальном compatibility режиме"]}]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["tag"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"meta",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["attrs"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"http-equiv",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"X-UA-Compatible",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"IE=EmulateIE7, IE=edge",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]}]},{"elem":"ul","content":[{"elem":"li","content":["выставление значения тега ",{"tag":"tt","content":["&lt;title&gt;"]}," страницы из свойства"]}]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["tag"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"title",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-keyword"},"content":["this"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-name"},"content":["ctx"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-name"},"content":["title"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]}]},{"elem":"ul","content":[{"elem":"li","content":["выставление фавиконки"]}]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-keyword"},"content":["this"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-name"},"content":["ctx"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-name"},"content":["favicon"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["?"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"favicon",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["url"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-keyword"},"content":["this"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-name"},"content":["ctx"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-name"},"content":["favicon"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]}]},{"elem":"ul","content":[{"elem":"li","content":["декларация блока ",{"tag":"tt","content":["i-ua"]}]}]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["block"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"i-ua",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]}]},{"elem":"p","content":["Аналогично указанию свойства ",{"tag":"tt","content":["head"]},", может быть задано свойство ",{"tag":"tt","content":["meta"]},", содержашее один или несколько элементов ",{"tag":"tt","content":["meta"]},":"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["("]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["meta"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"meta",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["attrs"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["name"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"keywords",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"js, css, html",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[")"]}]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["("]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["meta"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"meta",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["attrs"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["name"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"keywords",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"js, css, html",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["elem"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"meta",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["attrs"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["name"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"description",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"Yet another webdev blog",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n\t\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["]"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[")"]}]},{"elem":"p","content":["Значением свойства ",{"tag":"tt","content":["content"]}," блока ",{"tag":"tt","content":["b-page"]}," может быть хеш-описание содержимого (если речь идёт лишь об одном блоке) или массив блоков, описанных хешами:"]},{"block":"ohl","mods":{"lang":"js"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["("]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":["."]},"\n\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["["]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["block"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"b-link",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["mods"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["{"]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["pseudo"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"yes",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["togcolor"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"yes",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]}," ",{"tag":"span","attrs":{"class":"ohl-name"},"content":["color"]},{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"green",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]}," ",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["url"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"#",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["target"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"_blank",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["title"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"Кликни меня",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[","]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-name"},"content":["content"]}," ",{"tag":"span","attrs":{"class":"ohl-operator"},"content":[":"]}," ",{"tag":"span","attrs":{"class":"ohl-string ohl-string-single"},"content":[{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]},"Псевдоссылка, меняющая цвет по клику",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["&apos;"]}]},"\n\t\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},"\n\t",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["]"]},"\n",{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":["}"]},{"tag":"span","attrs":{"class":"ohl-punctuation"},"content":[")"]}]},{"elem":"p","content":["На блоки, содержащиеся в ",{"tag":"tt","content":["content"]},", действуют их bemhtml-шаблоны."]}]}}