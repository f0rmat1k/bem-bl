{"name":"b-link","elems":[{"name":"inner","techs":[{"name":"bemhtml"},{"name":"en.title.txt"},{"name":"en.wiki"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Внутренний элемент","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["Опциональный элемент, в который помещается текстовое содержимое ссылки. Необходим, когда ссылка содержит графический контент, например, иконку."]}]}}],"mods":[{"name":"disabled","vals":[{"name":"yes","techs":[{"name":"css"},{"name":"en.title.txt"},{"name":"en.wiki"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Неактивная ссылка","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["Делает ссылку или псевдоссылку неактивной."]}]}}],"title":"","bemjsonDesc":""},{"name":"inner","vals":[{"name":"yes","techs":[{"name":"css"},{"name":"en.title.txt"},{"name":"en.wiki"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Ссылка с вложенным элементом.\\\\\nДля удобного использования с иконками","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["Позволяет добавлять в ссылку elem: &apos;inner&apos;. Содержит только css, которые переносит подчеркивание с самой ссылки на ее внутренний элемент."]}]}}],"title":"","bemjsonDesc":""},{"name":"pseudo","techs":[{"name":"bemhtml"}],"vals":[{"name":"yes","techs":[{"name":"css"},{"name":"en.title.txt"},{"name":"en.wiki"},{"name":"js"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Псевдоссылка","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["Модификация ссылки, подразумевающая действие без перехода на другую страницу. Визуально имеет пунктирное нижнее подчеркивание."]}]}}],"title":"","bemjsonDesc":""}],"techs":[{"name":"bemhtml"},{"name":"en.title.txt"},{"name":"en.wiki"},{"name":"ru.title.txt"},{"name":"ru.wiki"}],"title":"Ссылка","bemjsonDesc":{"block":"b-text","content":[{"elem":"p","content":["Блок со ссылкой. Используется в других блоках."]},{"elem":"p","content":["В простом случае для отображения блока необходимо задать следующий bemjson:"]},{"elem":"p","content":["{ block: &apos;b-link&apos;, url: &apos;http:",{"tag":"i","content":["company.yandex.ru&apos;, title: &apos;Click here to learn more&apos;, target: &apos;_blank&apos;, content: &apos;The best company all over the world&apos; }"]}]},{"elem":"p","content":["Свойство url преобразуется в атрибут href. Свойства title и target — в соотвествующие атрибуты."]}]}}