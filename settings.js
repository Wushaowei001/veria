var settings = {
    site: {
        URL: 'http://localhost:3000',
        name: 'VERIA CMS',
        tagline: 'This is a fresh installation!'
    },
    database: {
        client: 'sqlite3',
        connection: {
            filename : './config/veria.db'
        }
    },
    theme: {
        name: 'default',
        index: {
            sidebar: {
                avatarURL: 'http://localhost:3000/assets/images/logo.jpg',
                name: 'My Name!!',
                tagline: 'This my tag line, or a little bit about me!!',
                socialLinks: 
                    [{
                        name: 'Facebook',
                        icon: 'http://localhost:3000/assets/images/social-facebook.png',
                        URL: '#'
                    },
                    {
                        name: 'Twitter',
                        icon: 'http://localhost:3000/assets/images/social-twitter.png',
                        URL: '#'
                    },
                    {
                        name: 'Youtube',
                        icon: 'http://localhost:3000/assets/images/social-youtube.png',
                        URL: '#'
                    },
                    {
                        name: 'Gmail',
                        icon: 'http://localhost:3000/assets/images/social-gmail.png',
                        URL: '#'
                    }]
            }
        }
    }
}

module.exports = settings;  