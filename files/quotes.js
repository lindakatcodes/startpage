const quotes = [
    {
      "Goodreads Quote Id": 8206,
      "Author": "Walt Whitman",
      "Book": "",
      "ISBN": "",
      "Quote": "Do I contradict myself? Very well, then, I contradict myself; I am large -- I contain multitudes.",
      "Tags": "change",
      "Quote Popularity": 2535,
      "Order": 1
    },
    {
      "Goodreads Quote Id": 218599,
      "Author": "Norton Juster",
      "Book": "The Phantom Tollbooth",
      "ISBN": 394820371,
      "Quote": "It's very much like your trying to reach infinity. You know that it's there, you just don't know where - but just because you can never reach it doesn't mean that it's not worth looking for.",
      "Tags": "goals, infinity",
      "Quote Popularity": 85,
      "Order": 2
    },
    {
      "Goodreads Quote Id": 163804,
      "Author": "Eleanor Roosevelt",
      "Book": "",
      "ISBN": "",
      "Quote": "No matter how plain a woman may be, if truth and honesty are written across her face, she will be beautiful.",
      "Tags": "beauty, inner-beauty, inspirational",
      "Quote Popularity": 2050,
      "Order": 3
    },
    {
      "Goodreads Quote Id": 18830,
      "Author": "Ralph Waldo Emerson",
      "Book": "",
      "ISBN": "",
      "Quote": "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.",
      "Tags": "life, regrets",
      "Quote Popularity": 16247,
      "Order": 4
    },
    {
      "Goodreads Quote Id": 4339,
      "Author": "Ralph Waldo Emerson",
      "Book": "Self Reliance",
      "ISBN": 308102045,
      "Quote": "Is it so bad, then, to be misunderstood? Pythagoras was misunderstood, and Socrates, and Jesus, and Luther, and Copernicus, and Galileo, and Newton, and every pure and wise spirit that ever took flesh. To be great is to be misunderstood.",
      "Tags": "greatness",
      "Quote Popularity": 3047,
      "Order": 5
    },
    {
      "Goodreads Quote Id": 14574,
      "Author": "Oliver Goldsmith",
      "Book": "The Citizen of the World, Or, Letters from a Chinese Philosopher, Residing in London, to His Friends in the Country, by Dr. Goldsmith (Vol. 1 of 2)",
      "ISBN": 1140821016,
      "Quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
      "Tags": "misattributed-to-confucius, success",
      "Quote Popularity": 2176,
      "Order": 6
    },
    {
      "Goodreads Quote Id": 4729,
      "Author": "Ralph Waldo Emerson",
      "Book": "",
      "ISBN": "",
      "Quote": "Whatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising that tempt you to believe your critics are right. To map out a course of action and follow it to an end requires some of the same courage that a soldier needs. Peace has its victories, but it takes brave men and women to win them.",
      "Tags": "courage, inspirational",
      "Quote Popularity": 2075,
      "Order": 7
    },
    {
      "Goodreads Quote Id": 2731,
      "Author": "Ralph Waldo Emerson",
      "Book": "",
      "ISBN": "",
      "Quote": "Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.",
      "Tags": "motivational, work",
      "Quote Popularity": 1442,
      "Order": 8
    },
    {
      "Goodreads Quote Id": 19755,
      "Author": "Ralph Waldo Emerson",
      "Book": "",
      "ISBN": "",
      "Quote": "That which we persist in doing becomes easier to do, not that the nature of the thing has changed but that our power to do has increased.",
      "Tags": "inspirational",
      "Quote Popularity": 317,
      "Order": 9
    },
    {
      "Goodreads Quote Id": 58697,
      "Author": "Ralph Waldo Emerson",
      "Book": "",
      "ISBN": "",
      "Quote": "Be silly. Be honest. Be kind.",
      "Tags": "",
      "Quote Popularity": 1074,
      "Order": 11
    },
    {
      "Goodreads Quote Id": 7604,
      "Author": "Walt Whitman",
      "Book": "",
      "ISBN": "",
      "Quote": "I exist as I am, that is enough, If no other in the world be aware I sit content, And if each and all be aware I sit content. One world is aware, and by the far the largest to me, and that is myself, And whether I come to my own today or in ten thousand or ten million years, I can cheerfully take it now, or with equal cheerfulness, I can wait.",
      "Tags": "",
      "Quote Popularity": 635,
      "Order": 14
    },
    {
      "Goodreads Quote Id": 1251,
      "Author": "Leonardo da Vinci",
      "Book": "",
      "ISBN": "",
      "Quote": "A painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.",
      "Tags": "art, inspirational",
      "Quote Popularity": 4458,
      "Order": 18
    },
    {
      "Goodreads Quote Id": 7980,
      "Author": "Maya Angelou",
      "Book": "Letter to My Daughter",
      "ISBN": 1400066124,
      "Quote": "I can be changed by what happens to me.  But I refuse to be reduced by it.",
      "Tags": "be-yourself, inspirational, misquote, self-determination",
      "Quote Popularity": 6484,
      "Order": 19
    },
    {
      "Goodreads Quote Id": 64407,
      "Author": "Neil Gaiman",
      "Book": "",
      "ISBN": "",
      "Quote": "May your coming year be filled with magic and dreams and good madness. I hope you read some fine books and kiss someone who thinks you're wonderful, and don't forget to make some art -- write or draw or build or sing or live as only you can. And I hope, somewhere in the next year, you surprise yourself.",
      "Tags": "",
      "Quote Popularity": 9670,
      "Order": 21
    },
    {
      "Goodreads Quote Id": 3823,
      "Author": "Eleanor Roosevelt",
      "Book": "You Learn by Living: Eleven Keys for a More Fulfilling Life",
      "ISBN": 664244947,
      "Quote": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
      "Tags": "confidence",
      "Quote Popularity": 6111,
      "Order": 23
    },
    {
      "Goodreads Quote Id": 26110,
      "Author": "Eleanor Roosevelt",
      "Book": "",
      "ISBN": "",
      "Quote": "You wouldn't worry so much about what others think of you if you realized how seldom they do.",
      "Tags": "confidence",
      "Quote Popularity": 5287,
      "Order": 24
    },
    {
      "Goodreads Quote Id": 31949,
      "Author": "Eleanor Roosevelt",
      "Book": "It Seems to Me: Selected Letters",
      "ISBN": "081312185X",
      "Quote": "A mature person is one who does not think only in absolutes, who is able to be objective even when deeply stirred emotionally, who has learned that there is both good and bad in all people and in all things, and who walks humbly and deals charitably with the circumstances of life, knowing that in this world no one is all knowing and therefore all of us need both love and charity.",
      "Tags": "",
      "Quote Popularity": 676,
      "Order": 25
    },
    {
      "Goodreads Quote Id": 4749,
      "Author": "Maya Angelou",
      "Book": "",
      "ISBN": "",
      "Quote": "You can only become truly accomplished at something you love. Don’t make money your goal. Instead pursue the things you love doing and then do them so well that people can’t take their eyes off of you.",
      "Tags": "",
      "Quote Popularity": 2680,
      "Order": 26
    },
    {
      "Goodreads Quote Id": 93512,
      "Author": "Maya Angelou",
      "Book": "",
      "ISBN": "",
      "Quote": "You may encounter many defeats, but you must not be defeated.  In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
      "Tags": "adversity, character, failure, perseverance",
      "Quote Popularity": 2384,
      "Order": 27
    },
    {
      "Goodreads Quote Id": 27628,
      "Author": "Maya Angelou",
      "Book": "",
      "ISBN": "",
      "Quote": "Stepping onto a brand-new path is difficult, but not more difficult than remaining in a situation which is not nurturing to the whole woman.",
      "Tags": "change, inspirational, self-determination",
      "Quote Popularity": 2059,
      "Order": 29
    },
    {
      "Goodreads Quote Id": 106516,
      "Author": "Maya Angelou",
      "Book": "",
      "ISBN": "",
      "Quote": "A Woman in harmony with her spirit is like a river flowing. She goes where she will without pretense and arrives at her destination prepared to be herself and only herself",
      "Tags": "inspirational",
      "Quote Popularity": 680,
      "Order": 31
    },
    {
      "Goodreads Quote Id": 109467,
      "Author": "Marilyn Monroe",
      "Book": "",
      "ISBN": "",
      "Quote": "I've never fooled anyone. I've let people fool themselves. They didn't bother to find out who and what I was. Instead they would invent a character for me. I wouldn't argue with them. They were obviously loving somebody I wasn't.",
      "Tags": "life-lessons",
      "Quote Popularity": 8490,
      "Order": 33
    },
    {
      "Goodreads Quote Id": 939,
      "Author": "E.B. White",
      "Book": "",
      "ISBN": "",
      "Quote": "If the world were merely seductive, that would be easy. If it were merely challenging, that would be no problem. But I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.",
      "Tags": "activism, humor, life, pleasure",
      "Quote Popularity": 8502,
      "Order": 37
    },
    {
      "Goodreads Quote Id": 101382,
      "Author": "Anthony Bourdain",
      "Book": "",
      "ISBN": "",
      "Quote": "I don't have to agree with you to like you or respect you.",
      "Tags": "admiration, disagreement",
      "Quote Popularity": 398,
      "Order": 40
    },
    {
      "Goodreads Quote Id": 160756,
      "Author": "Chris Cleave",
      "Book": "Little Bee",
      "ISBN": "038566530X",
      "Quote": "On the girl's brown legs there were many small white scars. I was thinking, Do those scars cover the whole of you, like the stars and the moons on your dress? I thought that would be pretty too, and I ask you right here please to agree with me that a scar is never ugly. That is what the scar makers want us to think. But you and I, we must make an agreement to defy them. We must see all scars as beauty. Okay? This will be our secret. Because take it from me, a scar does not form on the dying. A scar means, I survived.",
      "Tags": "healing, scars",
      "Quote Popularity": 364,
      "Order": 41
    },
    {
      "Goodreads Quote Id": 80038,
      "Author": "Norton Juster",
      "Book": "The Phantom Tollbooth",
      "ISBN": 394820371,
      "Quote": "It has been a long trip,\" said Milo, climbing onto the couch where the princesses sat; \"but we would have been here much sooner if I hadn't made so many mistakes. I'm afraid it's all my fault.\" \"You must never feel badly about making mistakes,\" explained Reason quietly, \"as long as you take the trouble to learn from them. For you often learn more by being wrong for the right reasons than you do by being right for the wrong reasons.",
      "Tags": "learning, lessons, mistakes",
      "Quote Popularity": 148,
      "Order": 43
    },
    {
      "Goodreads Quote Id": 67409,
      "Author": "Norton Juster",
      "Book": "The Phantom Tollbooth",
      "ISBN": 394820371,
      "Quote": "As the cheering continued, Rhyme leaned forward and touched Milo gently on the shoulder. \"They're cheering for you,\" she said with a smile. \"But I could never have done it,\" he objected, \"without everyone else's help.\" \"That may be true,\" said Reason gravely, \"but you had the courage to try; and what you can do is often simply a matter of what you *will* do.\""
    },
    {
      "Author": "Norton Juster",
      "Quote": " \"It was impossible,\" said the king, looking at the Mathemagician. \"Completely impossible,\" said the Mathemagician, looking at the king. \"Yes, indeed,\" they repeated together; \"but if we'd told you then, you might not have gone - and, as you've discovered, so many things are possible just as long as you don't know they're impossible.\"",
    },
    {
      "Goodreads Quote Id": 16072,
      "Author": "Chuck Palahniuk",
      "Book": "Choke",
      "ISBN": 385501560,
      "Quote": "The unreal is more powerful than the real. Because nothing is as perfect as you can imagine it. Because it's only intangible ideas, concepts, beliefs, fantasies that last. Stone crumbles. Wood rots. People, well, they die. But things as fragile as a thought, a dream, a legend, they can go on and on. If you can change the way people think. The way they see themselves. The way they see the world. You can change the way people live their lives. That's the only lasting thing you can create.",
      "Tags": "believe, inspirational",
      "Quote Popularity": 3441,
      "Order": 45
    },
    {
      "Goodreads Quote Id": 7470,
      "Author": "Chuck Palahniuk",
      "Book": "Invisible Monsters",
      "ISBN": 99285444,
      "Quote": "Our real discoveries come from chaos, from going to the place that looks wrong and stupid and foolish.",
      "Tags": "chaos, discovery",
      "Quote Popularity": 1134,
      "Order": 46
    },
    {
      "Goodreads Quote Id": 77686,
      "Author": "Chuck Palahniuk",
      "Book": "Choke",
      "ISBN": 385720920,
      "Quote": "We can spend our lives letting the world tell us who we are. Sane or insane. Saints or sex addicts. Heroes or victims. Letting history tell us how good or bad we are. Letting our past decide our future. Or we can decide for ourselves. And maybe it's our job to invent something better.",
      "Tags": "identity",
      "Quote Popularity": 1725,
      "Order": 47
    },
    {
      "Goodreads Quote Id": 2749,
      "Author": "Calvin Coolidge",
      "Book": "",
      "ISBN": "",
      "Quote": "Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan Press On! has solved and always will solve the problems of the human race.",
      "Tags": "attitude, attributed-no-source, determination, persistence",
      "Quote Popularity": 661,
      "Order": 48
    },
    {
      "Goodreads Quote Id": 150025,
      "Author": "Robert Fanney",
      "Book": "",
      "ISBN": "",
      "Quote": "In my experience, nothing worthwhile has ever really been all that easy. But it certainly has been worthwhile regardless how difficult it seemed.",
      "Tags": "inspiration, persistence, work",
      "Quote Popularity": 102,
      "Order": 49
    },
    {
      "Goodreads Quote Id": 26963,
      "Author": "Martin Luther King Jr.",
      "Book": "",
      "ISBN": "",
      "Quote": "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
      "Tags": "inspirational",
      "Quote Popularity": 6029,
      "Order": 50
    },
    {
      "Goodreads Quote Id": 142758,
      "Author": "haruki murakami",
      "Book": "What I Talk about When I Talk about Running",
      "ISBN": 307269191,
      "Quote": "Pain is inevitable. Suffering is optional.",
      "Tags": "inspirational, running",
      "Quote Popularity": 6418,
      "Order": 51
    },
    {
      "Goodreads Quote Id": 11877,
      "Author": "Maya Angelou",
      "Book": "",
      "ISBN": "",
      "Quote": "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
      "Tags": "",
      "Quote Popularity": 3858,
      "Order": 52
    },
    {
      "Goodreads Quote Id": 59581,
      "Author": "Johann Wolfgang Von Goethe",
      "Book": "",
      "ISBN": "",
      "Quote": "In all situations, it is my response that decides whether a crisis is escalated or de-escalated, and a person is humanized or de-humanized. If we treat people as they are, we make them worse. If we treat people as they ought to be, we help them become what they are capable of becoming.",
      "Tags": "",
      "Quote Popularity": 415,
      "Order": 56
    },
    {
      "Goodreads Quote Id": 16152,
      "Author": "Paulo Coelho",
      "Book": "",
      "ISBN": "",
      "Quote": "What's the world's greatest lie? It's this: that at a certain point in our lives, we lose control of what's happening to us, and our lives become controlled by fate.",
      "Tags": "inspirational",
      "Quote Popularity": 1055,
      "Order": 57
    },
    {
      "Goodreads Quote Id": 62867,
      "Author": "Paulo Coelho",
      "Book": "The Devil and Miss Prym (On the Seventh Day, #3)",
      "ISBN": 60527994,
      "Quote": "When we least expect it, life sets us a challenge to test our courage and willingness to change; at such a moment, there is no point in pretending that nothing has happened or in saying that we are not yet ready. The challenge will not wait. Life does not look back. A week is more than enough time for us to decide whether or not to accept our destiny.",
      "Tags": "challenges, change, courage, life",
      "Quote Popularity": 2727,
      "Order": 58
    },
    {
      "Goodreads Quote Id": 149901,
      "Author": "Paulo Coelho",
      "Book": "Brida",
      "ISBN": 9504915248,
      "Quote": "None of us knows what might happen even the next minute, yet still we go forward. Because we trust. Because we have faith.",
      "Tags": "faith, trust",
      "Quote Popularity": 2040,
      "Order": 59
    },
    {
      "Goodreads Quote Id": 77034,
      "Author": "Paulo Coelho",
      "Book": "",
      "ISBN": "",
      "Quote": "Why is patience so important? Because it makes us pay attention.",
      "Tags": "patience",
      "Quote Popularity": 704,
      "Order": 61
    },
    {
      "Goodreads Quote Id": 18177,
      "Author": "Paulo Coelho",
      "Book": "",
      "ISBN": "",
      "Quote": "You must be the person you have never had the courage to be. Gradually, you will discover that you are that person, but until you can see this clearly, you must pretend and invent.",
      "Tags": "fake-it-til-you-make-it",
      "Quote Popularity": 365,
      "Order": 62
    },
    {
      "Goodreads Quote Id": 108663,
      "Author": "Malcolm Gladwell",
      "Book": "",
      "ISBN": "",
      "Quote": "Truly successful decision-making relies on a balance between deliberate and instinctive thinking.",
      "Tags": "decisions",
      "Quote Popularity": 124,
      "Order": 63
    },
    {
      "Goodreads Quote Id": 350,
      "Author": "Anaïs Nin",
      "Book": "",
      "ISBN": "",
      "Quote": "I, with a deeper instinct, choose a man who compels my strength, who makes enormous demands on me, who does not doubt my courage or my toughness, who does not believe me naïve or innocent, who has the courage to treat me like a woman.",
      "Tags": "men, women",
      "Quote Popularity": 8682,
      "Order": 64
    },
    {
      "Goodreads Quote Id": 367,
      "Author": "Bertrand Russell",
      "Book": "",
      "ISBN": "",
      "Quote": "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
      "Tags": "confidence, eccentricity, philosophy",
      "Quote Popularity": 3923,
      "Order": 67
    },
    {
      "Goodreads Quote Id": 21824,
      "Author": "Jane Austen",
      "Book": "Pride and Prejudice",
      "ISBN": 679783261,
      "Quote": "Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.",
      "Tags": "prejudice, pride, vanity",
      "Quote Popularity": 3908,
      "Order": 68
    },
    {
      "Goodreads Quote Id": 28432,
      "Author": "Ralph Waldo Emerson",
      "Book": "The Complete Prose Works of Ralph Waldo Emerson",
      "ISBN": 1428641637,
      "Quote": "It is easy in the world to live after the world's opinion; it is easy in solitude to live after our own; but the great man is he who in the midst of the crowd keeps with perfect sweetness the independence of solitude.",
      "Tags": "essay, inspirational, lecture, nonfiction, philosophy, self-reliance, social-commentary, transcendentalism",
      "Quote Popularity": 1959,
      "Order": 70
    },
    {
      "Goodreads Quote Id": 73368,
      "Author": "Marcus Aurelius",
      "Book": "Meditations",
      "ISBN": 140449337,
      "Quote": "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
      "Tags": "truth",
      "Quote Popularity": 1586,
      "Order": 71
    },
    {
      "Goodreads Quote Id": 318929,
      "Author": "Steve Maraboli",
      "Book": "Life, the Truth, and Being Free",
      "ISBN": 979575028,
      "Quote": "Look around you. Everything changes. Everything on this earth is in a continuous state of evolving, refining, improving, adapting, enhancing…changing. You were not put on this earth to remain stagnant.",
      "Tags": "action, adapting, change, enhancing, evolving, improving, life, motivational, refining",
      "Quote Popularity": 113,
      "Order": 72
    },
    {
      "Goodreads Quote Id": 7045979,
      "Author": "Barbara De Angelis",
      "Book": "Secrets About Life Every Woman Should Know: Ten Principles for Total Emotional and Spiritual Fulfillment",
      "ISBN": 786889934,
      "Quote": "If you look around you at the physical universe, you will see that it's nature is growth. Everything from the cells in your body to the planets orbiting the sun are constantly growing, constantly changing, constantly evolving. Nothing stays still. Nothing remains the same. So think about it - why would your life be the exception? Why would you be the only thing that exists in all of creation whose purpose isn't to grow?",
      "Tags": "changing, evolving, growth, nature, universe",
      "Quote Popularity": 4,
      "Order": 74
    },
    {
      "Goodreads Quote Id": 7014041,
      "Author": "Victoria Erickson",
      "Book": "",
      "ISBN": "",
      "Quote": "This is the messiness of life - that we all carry multitudes, so must sit with the shifts. We are complicated creatures, and ultimately, the balance comes from this understanding. Be water. Flowing, flexible and soft. Subtly powerful and open. Wild and serene. Able to accept all changes, yet still led by the pull of steady tides. It is enough.",
      "Tags": "balance, bursting, care, changes, complicated, creatures, flexible, flowing, humans, love, multitudes, open, powerful, pull, serene, shy, silent, solitude, steady, tides, water, waves, wild, words",
      "Quote Popularity": 71,
      "Order": 75
    },
    {
        "Author": "Tori Margaret",
        "Quote": "You are not a hopeless case or a lost cause. You are standing up again, tending your wounds, moving forward. You are not a victim. You are a survivor, a warrior, a strong human being growing stronger every day. You are not in spite of your struggle; you are not because of your struggle. Struggle is only a place where you are refined, made stronger. You are becoming more clearly you every day."
    },
    {
        "Author": "F. Scott Fitzgerald",
        "Quote": "For what it's worth: It's never too late to be whoever you want to be. I hope you live a life you're proud of, and if you find that you're not, I hope you have the strength to start over."
    },
    {
        "Author": "Deepak Chopra",
        "Quote": "If you obsess over whether you are making the right decision, you are basically assuming that the universe will reward you for one thing and punish you for another. The universe has no fixed agenda. Once you make any decision, it works around that decision. There is no right or wrong, only a series of possibilities that shift with each thought, feeling, and action that you experience."
    },
    {
        "Author": "Muhammad Ali",
        "Quote": "Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing."
    },
    {
        "Author": "Neil Gaiman",
        "Quote": "A world in which there are monsters, and ghosts, and things that want to steal your heart is a word in which there are angels, and dreams, and a world in which there is hope."
    },
    {
        "Author": "Adventure Time",
        "Quote": "People get built different. We don't need to figure it out. We just need to respect it."
    },
    {
        "Author": "Stephen Hawking",
        "Quote": "So remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes a universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don't just give up."
    },
    {
        "Author": "Eckhart Tolle",
        "Quote": "Don’t look for peace. Don’t look for any other state than the one you are in now; otherwise, you will set up inner conflict and unconscious resistance. Forgive yourself for not being at peace. The moment you completely accept your non-peace, your non-peace becomes transmuted into peace. Anything you accept fully will get you there, will take you into peace. This is the miracle of surrender."
    },
    {
        "Author": "Jim Jarmusch",
        "Quote": "Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams, random conversations, architecture, bridges, street signs, trees, clouds, bodies of water, light and shadows. Select only things to steal from that speak directly to your soul. If you do this, your work (and theft) will be authentic."
    },
    {
        "Author": "S.C. Lourie",
        "Quote": "Be confused, it's where you begin to learn new things. Be broken, it's where you begin to heal. Be frustrated, it's where you start to make more authentic decisions. Be sad, because if we are brave enough we can hear our heart's wisdom through it. Be whatever you are right now. No more hiding. You are worthy, always."
    },
    {
        "Author": "Ratatouille",
        "Quote": "You must be imaginative, strong-hearted. You must try things that may not work. And you must not let anyone define your limits because of where you come from. Your only limit is your soul."
    },
    {
        "Author": "Rupi Kaur",
        "Quote": "What's the greatest lesson a woman should learn? That since day one, she's already had everything she needs within herself. It's the world that convinced her she did not."
    },
    {
        "Author": "Bruce Lee",
        "Quote": "Adapt what is useful, reject what is useless, and add what is specifically your own."
    }
  ];
  
  exports.quotes = quotes;