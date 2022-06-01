# Кастомный селект
#### Готовое решение кастомного селекта на чистом JS
____
[DEMO](https://gabberex.ru/portfolio/simple-select/)
____
```JavaScript
new Select({
    container,
    options: ['По номеру', 'По балансу', 'По последней тразакции'],
    placeholder: {
        text: 'Сортировка',
        static: true,
    },
    optionTransform: 'checked', // checked or hidden
});
```
#### container - узел в котором будет расположена кастомный селект
#### options - элементы списка (```<options>```)
#### placeholder - содержимое в выбранном
#### placeholder -> text - аналог placeholder селекта. Если убрать, то на его место автоматически встает первый элемент
#### placeholder -> static - если true, тогда текст placeholder будет в шапке не смотря на выбранный элемент ... если false то в шапке будет первый элемент списка
#### optionTransform - cheched помечает выбранный элемент в списке ... hidden после выбора выкидывается из списка
____
## В планах:
- доступность по клавишам
- автопереворот снизу на вверх и обратно
- aria-label
