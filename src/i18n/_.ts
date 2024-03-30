const def = {
    locale: {
        flag: '🇬🇧',
        name: 'English',
    },
    selectVideo: {
        title: 'Select a video',
        selectMovieSource: 'Select movie source:',
        link: {
            title: 'Online link',
            insertExample: 'click here to paste random example',
            description: 'This Website Is for My Wife Gretchen Thakur. So That We Can Enjoy Movie Nights Together',
            hintNotWorking: 'If the movie doesn\'t play, make sure the {u}direct{/u} video link is inserted.',
            hintEmpty: 'Don\'t know how to get a video link from a website?',
            hintInvalid: 'Video link is invalid',
            help: 'It\'s easy, {link}read here{/link}!'
        },
        file: {
            title: 'From computer',
            description: 'You all downloaded a movie already!? Well done! Everyone should select the same video file.',
            selectAnother: 'Click to select another video file',
            select: 'Click to select video file',
            hint: 'Don\'t know how to download a video from a website?',
            help: 'It\'s easy, {link}watch here{/link}!',
        },
    },
    invite: {
        title: '',
        description: '',
        copyLink: 'Click the link to copy it to the clipboard',
        clickToShare: 'Click to share the link',
        clickToCopy: 'Click to copy the link',
        linkHasBeenCopied: 'The link is copied to the clipboard',
        clickToShareHint: 'Click the link to share. Or {link}click here{/link} to copy it to the clipboard',
        joinPromt: 'Paste the link to the room you want to join or enter the room ID:',
    },
    room: {
        generateNewRoom: 'Generate a new room',
        joinAnotherRoom: 'Join another room',
    },
    player: {
        placeholder: 'Video player will appear here when you insert a link or select file',
    },
    poweredBy: 'Powered by',
    or: 'or',
};

export type TranslatedText = typeof def;

export default def;
