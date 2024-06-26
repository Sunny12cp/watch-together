import type { TranslatedText } from './_';

const ru: TranslatedText = {
    locale: {
        flag: '🇷🇺',
        name: 'Russian | Русский',
    },
    selectVideo: {
        title: 'Выбрать видео',
        selectMovieSource: 'Выбери источник видео:',
        link: {
            title: 'Онлайн',
            insertExample: 'нажми сюда, чтобы вставить пример',
            description: 'Вставь ссылку на {type}Dailymotion{/type}, {type}YouTube{/type}, {type}Vimeo{/type}, {type}HLS{/type} плейлист, {type}видео{/type} или {type}аудио{/type} файл. Поле ввода синхронизованно со всему в этой комнате.',
            hintNotWorking: 'Если фильм не грузится, убедись, что введена {u}прямая{/u} ссылка на видео.',
            hintEmpty: 'Не знаешь, как получить прямую ссылку на видео?',
            hintInvalid: 'Неверная ссылка',
            help: 'Это просто, {link}читай здесь{/link}!'
        },
        file: {
            title: 'Файл на компьютере',
            description: 'Вы оба уже скачали фильм?! Супер, оба должны выбрать его по кнопке ниже',
            selectAnother: 'Выбрать другой видео-файл',
            select: 'Выбрать видео-файл',
            hint: 'Не знаешь как скачать видео с сайта?',
            help: 'Это просто, {link}смотри здесь{/link}!',
        },
    },
    invite: {
        title: 'Пригласить в эту комнату',
        description: 'Поделись ссылкой с тем, вместе с кем хочешь посмотреть фильм',
        copyLink: 'Нажми на ссылку, чтобы скопировать её',
        clickToShare: 'Нажми, чтобы поделиться ссылкой',
        clickToCopy: 'Нажми, чтобы скопировать ссылку',
        linkHasBeenCopied: 'Ссылка скопирована в буфер обмена',
        clickToShareHint: 'Нажми на ссылку, чтобы поделиться ею. Или {link}нажми здесь{/link} чтобы скопировать её',
        joinPromt: 'Вставь ссылку или идентификатор комнаты, к которой хочешь присоединиться:',
    },
    room: {
        generateNewRoom: 'Создать новую комнату',
        joinAnotherRoom: 'Войти в другую комнату',
    },
    player: {
        placeholder: 'Вставь ссылку на видео или выбери файл, чтобы начать воспроизведение фильма',
    },
    poweredBy: 'Сделано с помощью',
    or: 'или',
};

export default ru;
