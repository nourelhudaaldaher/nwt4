namespace NWT4.Migrations
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NWT4.DAL.AppDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(NWT4.DAL.AppDbContext context)
        {
            //  This method will be called after migrating to the latest version.


            //users///////////////////////////////////////////////////////////
            var users = new[]
            {
                new User
                {
                    Id = 1,
                    Email = "admin@admin.com",
                    FirstName = "admin",
                    LastName = "admin",
                    Password = "admin"
                },
                new User
                {
                    Id = 2,
                    Email = "borko1@borko.com",
                    FirstName = "Borko1",
                    LastName = "Borkic1",
                    Password = "borko1"
                },
                new User
                {
                    Id = 3,
                    Email = "borko2@borko.com",
                    FirstName = "Borko2",
                    LastName = "Borkic2",
                    Password = "borko2"
                },
                new User
                {
                    Id = 4,
                    Email = "borko3@borko.com",
                    FirstName = "Borko3",
                    LastName = "Borkic3",
                    Password = "borko3"
                },
                new User
                {
                    Id = 5,
                    Email = "borko4@borko.com",
                    FirstName = "Borko4",
                    LastName = "Borkic4",
                    Password = "borko4"
                },
                new User
                {
                    Id = 6,
                    Email = "borko5@borko.com",
                    FirstName = "Borko5",
                    LastName = "Borkic5",
                    Password = "borko5"
                },
                new User
                {
                    Id = 7,
                    Email = "borko7@borko.com",
                    FirstName = "Borko7",
                    LastName = "Borkic7",
                    Password = "borko7"
                }
            };

            context.Users.AddOrUpdate(p => p.Id, users);
            ///////////////////////////////////////////////////////////////////////////


            //games and comments//////////////////////////////////////////////////////
            var games = new[]
            {
                new Game { Id = 1, Name = "Mario Cart",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/cover-switch-mario-kart-8-deluxe.jpg",
                            Price = 49.99,
                            Console = "Nintendo Switch",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 1, Name = "John", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 2, Name = "Catrin", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 3, Name = "Zelda", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 2, Name = "Mario Cart",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/cover-switch-mario-kart-8-deluxe.jpg",
                            Price = 49.99,
                            Console = "Nintendo Switch",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 4, Name = "John", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 5, Name = "Catrin", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 6, Name = "Zelda", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 3, Name = "Mario Cart",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/cover-switch-mario-kart-8-deluxe.jpg",
                            Price = 49.99,
                            Console = "Nintendo Switch",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 7, Name = "John", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 8, Name = "Catrin", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 9, Name = "Zelda", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 4, Name = "Legend of Zelda: WW",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wiiu_the_legend_of_zelda_-_breath_of_the_wild.jpg",
                            Price = 79.99,
                            Console = "Nintendo Wii U",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 10, Name = "John", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 11, Name = "Catrin", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 12, Name = "Zelda", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 5, Name = "Game2", ShortDescription = "ShortDescription2",
                    FullDescription = "FullDescription2", ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wiiu_the_legend_of_zelda_-_breath_of_the_wild.jpg",
                    Price = 49.99, Console = "PS4",
                    YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                    WebsiteLink = "http://www.zelda.com/windwaker/",
                    Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 13, Name = "Comment4", Content="Content1", Score=5, Date=DateTime.Now},
                        new Comment { Id = 14, Name = "Comment5", Content="Content2", Score=4, Date=DateTime.Now},
                        new Comment { Id = 15, Name = "Comment6", Content="Content3", Score=3, Date=DateTime.Now},
                    }
                },
                new Game { Id = 6, Name = "Game2", ShortDescription = "ShortDescription2",
                    FullDescription = "FullDescription2", ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wiiu_the_legend_of_zelda_-_breath_of_the_wild.jpg",
                    Price = 39.99, Console = "PS3",
                    YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                    WebsiteLink = "http://www.zelda.com/windwaker/",
                    Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 16, Name = "Comment7", Content="Content1", Score=5, Date=DateTime.Now},
                        new Comment { Id = 17, Name = "Comment8", Content="Content2", Score=4, Date=DateTime.Now},
                        new Comment { Id = 18, Name = "Comment9", Content="Content3", Score=3, Date=DateTime.Now},
                    }
                },
                new Game { Id = 7, Name = "Legend of Zelda: BoTW",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wiiu_the_legend_of_zelda_-_breath_of_the_wild.jpg",
                            Price = 29.99,
                            Console = "Nintendo Switch",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "Nintendo",
                    GameComments = new []
                    {
                        new Comment { Id = 19, Name = "John8", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 20, Name = "Catrin11", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 21, Name = "Zelda15", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 8, Name = "Far Cry 5",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/c/fc5_mock_packshot_x1_deluxe_2d.jpg",
                            Price = 79.99,
                            Console = "XBox One",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "Ubisoft",
                    GameComments = new []
                    {
                        new Comment { Id = 22, Name = "John8", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 23, Name = "Catrin11", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 24, Name = "Zelda15", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 9, Name = "NBA2K15",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/1/917l5bmoigl._sl1500_.jpg",
                            Price = 89.99,
                            Console = "XBox One",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "2K Games",
                    GameComments = new []
                    {
                        new Comment { Id = 25, Name = "John88", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 26, Name = "Catrin118", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 27, Name = "Zelda158", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                },
                new Game { Id = 10, Name = "NBA2K15",
                            ShortDescription = "The Legend of Zelda: Breath of the Wild represents the next great boundary-breaking adventure from Nintendo.",
                            FullDescription = "The Legend of Zelda: The Wind Waker (Japanese: ゼルダの伝説 風のタクト Hepburn: Zeruda no Densetsu: Kaze no Takuto?) is an action-adventure game developed and published by Nintendo for the GameCube home video game console. The tenth installment in the The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003. " +
                                      "The game is set on a group of islands in a vast sea. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred relic that grants its holder's wishes. Aided by allies including pirate captain Tetra and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role, and can be controlled with a magic conductor's baton called the Wind Waker. " +
                                      "The Wind Waker was directed by Eiji Aonuma and produced by Shigeru Miyamoto and Takashi Tezuka.It retains the basic 3D gameplay of its predecessors, Ocarina of Time and Majora's Mask, but with a distinctive cartoon-like art style created through cel shading. Though the art style proved divisive among players, resulting in comparatively weak sales outside Japan, the game received critical acclaim, and is now widely considered to be one of the greatest video games ever made. The Wind Waker originated the 'Toon Link' variant of the main character, and received two direct sequels for the Nintendo DS, Phantom Hourglass (2007) and Spirit Tracks (2009). A high-definition remaster, The Legend of Zelda: The Wind Waker HD, was released for the Wii U in 2013.",
                            ImageUrl = "http://games.rs/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/1/917l5bmoigl._sl1500_.jpg",
                            Price = 29.99,
                            Console = "PS4",
                            YoutubeLink = "https://www.youtube.com/watch?v=IkVt1s_ZFbw",
                            WebsiteLink = "http://www.zelda.com/windwaker/",
                            Developer = "2K Games",
                    GameComments = new []
                    {
                        new Comment { Id = 28, Name = "John88", Content="Although without presenting new content, Wind Waker HD comes to the Wii U after a restoration that puts it at the same level of productions of the current generation.", Score=5, Date=DateTime.Now},
                        new Comment { Id = 29, Name = "Catrin118", Content="The original was amazing and was filled with so much adventure. The same is true for The Wind Waker HD. Also, I love being able to play this on my Wii U as the HD remake looks spectacular.", Score=4, Date=DateTime.Now},
                        new Comment { Id = 30, Name = "Zelda158", Content="Wind Waker HD is a must play game not just for Zelda fans, but for every gamer.", Score=5, Date=DateTime.Now},
                    }
                }
            };
            //games.ForEach(g => context.Games.AddOrUpdate(p => p.Id, g));
            context.Games.AddOrUpdate(p => p.Id, games);
            ////////////////////////////////////////////////////////////////////////////////////
            

            context.SaveChanges();
        }
    }
}
