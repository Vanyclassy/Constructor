import {TextBlock, TitleBlock, TextColumnsBlock} from './classes/blocks'


export const model = [
    new TitleBlock('Проект конструктора сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #20B2AA, #008B8B); color:white; padding:1.5rem; text-align:center'
    }),

    new TextBlock('Привет! Решили изучить JavaScript? Отличный выбор! Язык программирования JavaScript придумали специально для того, чтобы создавать интерактивные сайты. Такие сайты реагируют на ваши действия: добавляют лайк, когда вы нажимаете на «сердечко»; загружают новые посты в ленту, когда вы доходите до конца страницы; показывают оповещения о новом сообщении или письме. Для этого и нужен JavaScript. Сегодня это один из самых популярных  и востребованных языков программирования, поэтому он пригодится каждому веб-разработчику.',
        {
            styles: 'padding:1rem; background: linear-gradient(to bottom, #9370DB, #8A2BE2);font-weight:bold; color:white'
        }),

    new TextColumnsBlock( [
        'Приложение на чистом JavaScript без использования библиотек',
        'Принципы работы SOLID и ООП в JavaScript',
        'Создание интересных UI своими руками'
    ], {
        styles: 'padding:1rem; background:linear-gradient(to left, #FF7F50, #FF6347);font-weight:bold; color:white'
    }),


];