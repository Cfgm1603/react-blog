import React , { useEffect, useState } from 'react';

import Navbar from "./Navbar";

import List from "./List"

function BlogList() {

    const [movies, setMovies] = useState([]);
    const [le, setLe] = useState(0);
    const [loading, setLoading] = useState(true)
    const [capture, setCapture] = useState(false)
    
    
    const [title, setTitle] = useState('Avengers');
    const [mov, setMov] = useState([]);
    const [name, setName] = useState([]);
    const [url, setUrl] = useState([]);
    const [moviees, setMoviees] = useState([]);
    const [check, setCheck] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');

    
    const getData =  async(title) => {

      const url = `http://www.omdbapi.com/?s=${title}&plot=full&apikey=4c3f3840`  
      const response = await fetch(url)
      const responseJ = await response.json()
      console.log(responseJ)
      setMovies(responseJ)
      
      
      

   

  }
    useEffect (() => {
        
        getData(title)

      }, [title])

      if(movies.length==0){
        console.log("aun no")

      }else{
        if(check==true) {
            console.log('ya funciona')
            
            setLe(movies.length)
            setMov(movies.Search)
            setCheck(false)
            setLoading(false)
            console.log(movies.Search)

        }   
      }

      function refreshPage() {
        window.location.reload(false);
      }
      

      const handleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
        console.log(title)
      };

      const prueba = {
        "@meta": {
            "operation": "Search",
            "requestId": "53a4853a-5bfe-4a24-8944-3de09824a9f2",
            "serviceTimeMs": 481.820103
        },
        "@type": "imdb.api.find.response",
        "query": "Rocketman",
        "results": [
            {
                "disambiguation": "I",
                "id": "/title/tt2066051/",
                "image": {
                    "height": 1200,
                    "id": "/title/tt2066051/images/rm2778315265",
                    "url": "https://m.media-amazon.com/images/M/MV5BYmIzNjUxZGQtYjg0OS00MmE0LTgwZDAtMzVmODQ2MGI5MTQ5XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg",
                    "width": 800
                },
                "runningTimeInMinutes": 121,
                "title": "Rocketman",
                "titleType": "movie",
                "year": 2019,
                "principals": [
                    {
                        "id": "/name/nm5473782/",
                        "legacyNameText": "Egerton, Taron",
                        "name": "Taron Egerton",
                        "billing": 1,
                        "category": "actor",
                        "characters": [
                            "Elton John"
                        ],
                        "roles": [
                            {
                                "character": "Elton John"
                            }
                        ]
                    },
                    {
                        "disambiguation": "I",
                        "id": "/name/nm0068260/",
                        "legacyNameText": "Bell, Jamie (I)",
                        "name": "Jamie Bell",
                        "billing": 2,
                        "category": "actor",
                        "characters": [
                            "Bernie Taupin"
                        ],
                        "roles": [
                            {
                                "character": "Bernie Taupin"
                            }
                        ]
                    },
                    {
                        "disambiguation": "I",
                        "id": "/name/nm0534635/",
                        "legacyNameText": "Madden, Richard (I)",
                        "name": "Richard Madden",
                        "billing": 3,
                        "category": "actor",
                        "characters": [
                            "John Reid"
                        ],
                        "roles": [
                            {
                                "character": "John Reid"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/title/tt0120029/",
                "image": {
                    "height": 1500,
                    "id": "/title/tt0120029/images/rm1618150400",
                    "url": "https://m.media-amazon.com/images/M/MV5BYTU1YmQwYjgtMDBhNS00NzBhLWIyOWYtNDE1Y2QwNmIyZjFiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                    "width": 1013
                },
                "runningTimeInMinutes": 95,
                "title": "RocketMan",
                "titleType": "movie",
                "year": 1997,
                "principals": [
                    {
                        "disambiguation": "I",
                        "id": "/name/nm0005558/",
                        "legacyNameText": "Williams, Harland (I)",
                        "name": "Harland Williams",
                        "billing": 1,
                        "category": "actor",
                        "characters": [
                            "Fred Z. Randall"
                        ],
                        "roles": [
                            {
                                "character": "Fred Z. Randall",
                                "characterId": "/character/ch0271017/"
                            }
                        ]
                    },
                    {
                        "disambiguation": "I",
                        "id": "/name/nm0526649/",
                        "legacyNameText": "Lundy, Jessica (I)",
                        "name": "Jessica Lundy",
                        "billing": 2,
                        "category": "actress",
                        "characters": [
                            "Julie Ford"
                        ],
                        "roles": [
                            {
                                "character": "Julie Ford"
                            }
                        ]
                    },
                    {
                        "disambiguation": "I",
                        "id": "/name/nm0006669/",
                        "legacyNameText": "Sadler, William (I)",
                        "name": "William Sadler",
                        "billing": 3,
                        "category": "actor",
                        "characters": [
                            "'Wild Bill' Overbeck"
                        ],
                        "roles": [
                            {
                                "character": "'Wild Bill' Overbeck"
                            }
                        ]
                    }
                ]
            },
            {
                "disambiguation": "II",
                "id": "/title/tt8372368/",
                "image": {
                    "height": 500,
                    "id": "/title/tt8372368/images/rm128878593",
                    "url": "https://m.media-amazon.com/images/M/MV5BODA4NWExMDctMjQyMy00YjBhLWJkZjEtYzFhZmIzNmVkNDY2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
                    "width": 375
                },
                "runningTimeInMinutes": 94,
                "title": "Rocketman",
                "titleType": "movie",
                "year": 2019,
                "principals": [
                    {
                        "id": "/name/nm10142619/",
                        "legacyNameText": "Hughes, 'Mad' Mike",
                        "name": "'Mad' Mike Hughes",
                        "as": "Michael Hughes",
                        "billing": 1,
                        "category": "self",
                        "characters": [
                            "Self"
                        ],
                        "roles": [
                            {
                                "character": "Self"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm11011429/",
                        "legacyNameText": "Stakes, Waldo",
                        "name": "Waldo Stakes",
                        "billing": 2,
                        "category": "self",
                        "characters": [
                            "Self"
                        ],
                        "roles": [
                            {
                                "character": "Self"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm11011430/",
                        "legacyNameText": "Marchese, Patrick",
                        "name": "Patrick Marchese",
                        "billing": 3,
                        "category": "self",
                        "characters": [
                            "Self"
                        ],
                        "roles": [
                            {
                                "character": "Self"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/name/nm0166048/",
                "image": {
                    "height": 3000,
                    "id": "/name/nm0166048/images/rm1435801089",
                    "url": "https://m.media-amazon.com/images/M/MV5BODNkZDlmMzEtY2IyNy00YmNjLWI0OTktZDVmZTVkOTQ0ZWRhXkEyXkFqcGdeQXVyMTA2NjY2NzQ0._V1_.jpg",
                    "width": 2037
                },
                "legacyNameText": "Clemens, Roger",
                "name": "Roger Clemens",
                "knownFor": [
                    {
                        "cast": [
                            {
                                "billing": 62,
                                "category": "actor",
                                "characters": [
                                    "Skidmark"
                                ],
                                "roles": [
                                    {
                                        "character": "Skidmark",
                                        "characterId": "/character/ch0314629/"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Skidmark"
                            ],
                            "displayYear": "1996"
                        },
                        "id": "/title/tt0116778/",
                        "title": "Kingpin",
                        "titleType": "movie",
                        "year": 1996
                    },
                    {
                        "cast": [
                            {
                                "billing": 27,
                                "category": "actor",
                                "characters": [
                                    "Roger Clemens"
                                ],
                                "roles": [
                                    {
                                        "character": "Roger Clemens"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Roger Clemens"
                            ],
                            "displayYear": "2003"
                        },
                        "id": "/title/tt0305224/",
                        "title": "Anger Management",
                        "titleType": "movie",
                        "year": 2003
                    },
                    {
                        "cast": [
                            {
                                "billing": 20,
                                "category": "actor",
                                "characters": [
                                    "Opposing pitcher"
                                ],
                                "roles": [
                                    {
                                        "character": "Opposing pitcher"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Opposing pitcher"
                            ],
                            "displayYear": "1994"
                        },
                        "id": "/title/tt0109450/",
                        "title": "Cobb",
                        "titleType": "movie",
                        "year": 1994
                    },
                    {
                        "cast": [
                            {
                                "billing": 9,
                                "category": "actor",
                                "characters": [
                                    "Roger Clemens"
                                ],
                                "roles": [
                                    {
                                        "character": "Roger Clemens"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Roger Clemens"
                            ],
                            "displayYear": "2014"
                        },
                        "id": "/title/tt3073898/",
                        "title": "108 Stitches",
                        "titleType": "movie",
                        "year": 2014
                    }
                ]
            },
            {
                "id": "/name/nm2328628/",
                "image": {
                    "height": 400,
                    "id": "/name/nm2328628/images/rm1378259968",
                    "url": "https://m.media-amazon.com/images/M/MV5BMTk3MTIxNzExNV5BMl5BanBnXkFtZTcwODQ5NDk5MQ@@._V1_.jpg",
                    "width": 267
                },
                "legacyNameText": "Prokop, Matt",
                "name": "Matt Prokop",
                "knownFor": [
                    {
                        "cast": [
                            {
                                "billing": 13,
                                "category": "actor",
                                "characters": [
                                    "Jimmie Zara"
                                ],
                                "roles": [
                                    {
                                        "character": "Jimmie Zara",
                                        "characterId": "/character/ch0082074/"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Jimmie Zara"
                            ],
                            "displayYear": "2008"
                        },
                        "id": "/title/tt0962726/",
                        "title": "High School Musical 3: Senior Year",
                        "titleType": "movie",
                        "year": 2008
                    },
                    {
                        "cast": [
                            {
                                "billing": 2,
                                "category": "actor",
                                "characters": [
                                    "Josh Rosen"
                                ],
                                "roles": [
                                    {
                                        "character": "Josh Rosen",
                                        "characterId": "/character/ch0293393/"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Josh Rosen"
                            ],
                            "displayYear": "2011"
                        },
                        "id": "/title/tt1835977/",
                        "title": "Geek Charming",
                        "titleType": "tvMovie",
                        "year": 2011
                    },
                    {
                        "cast": [
                            {
                                "billing": 16,
                                "category": "actor",
                                "characters": [
                                    "J.T."
                                ],
                                "roles": [
                                    {
                                        "character": "J.T.",
                                        "characterId": "/character/ch0330979/"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "J.T."
                            ],
                            "displayYear": "2011"
                        },
                        "id": "/title/tt1619277/",
                        "title": "Conception",
                        "titleType": "movie",
                        "year": 2011
                    },
                    {
                        "cast": [
                            {
                                "billing": 7,
                                "category": "actor",
                                "characters": [
                                    "Tyler Sanders"
                                ],
                                "roles": [
                                    {
                                        "character": "Tyler Sanders",
                                        "characterId": "/character/ch0192662/"
                                    }
                                ]
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Tyler Sanders"
                            ],
                            "displayYear": "2010"
                        },
                        "id": "/title/tt0492389/",
                        "title": "Furry Vengeance",
                        "titleType": "movie",
                        "year": 2010
                    }
                ]
            },
            {
                "id": "/title/tt3294800/",
                "image": {
                    "height": 750,
                    "id": "/title/tt3294800/images/rm994920960",
                    "url": "https://m.media-amazon.com/images/M/MV5BZDBiYWFlODMtZTdlOC00MWM0LWI1MDEtMDhjMTdjYTU1N2I2XkEyXkFqcGdeQXVyMzQ1NzAwNjc@._V1_.jpg",
                    "width": 493
                },
                "runningTimeInMinutes": 12,
                "title": "Rocketman",
                "titleType": "short",
                "year": 2014,
                "principals": [
                    {
                        "id": "/name/nm6048676/",
                        "legacyNameText": "Manifavas, Philip",
                        "name": "Philip Manifavas",
                        "billing": 1,
                        "category": "actor",
                        "characters": [
                            "Harry"
                        ],
                        "roles": [
                            {
                                "character": "Harry"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm6048680/",
                        "legacyNameText": "Mackenzie, Rory",
                        "name": "Rory Mackenzie",
                        "billing": 2,
                        "category": "actor",
                        "characters": [
                            "Jordan"
                        ],
                        "roles": [
                            {
                                "character": "Jordan"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm2288025/",
                        "legacyNameText": "Rose-Carter, Gabriella",
                        "name": "Gabriella Rose-Carter",
                        "billing": 3,
                        "category": "actress",
                        "characters": [
                            "Mother"
                        ],
                        "roles": [
                            {
                                "character": "Mother"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/title/tt5556106/",
                "runningTimeInMinutes": 72,
                "title": "Rocketman",
                "titleType": "movie",
                "year": 2006
            },
            {
                "akas": [
                    "Captain Johnathan Hillstrand",
                    "Captain John Hillstrand",
                    "Johnathan Hillstrand",
                    "John Hillstrand",
                    "Captain Jonathan Hilstrand",
                    "Captain John",
                    "Captain Johnathan",
                    "Johnathan",
                    "Johnny",
                    "John",
                    "Captain Jonathan",
                    "Jonathan",
                    "Jonny",
                    "Rocketman"
                ],
                "id": "/name/nm2626523/",
                "image": {
                    "height": 375,
                    "id": "/name/nm2626523/images/rm323273728",
                    "url": "https://m.media-amazon.com/images/M/MV5BMjE3ODM2MTA2MF5BMl5BanBnXkFtZTgwNzk2OTc3MjE@._V1_.jpg",
                    "width": 500
                },
                "legacyNameText": "Hillstrand, Jonathan",
                "name": "Jonathan Hillstrand",
                "knownFor": [
                    {
                        "cast": [
                            {
                                "attr": [
                                    "uncredited"
                                ],
                                "category": "self",
                                "characters": [
                                    "Self"
                                ],
                                "roles": [
                                    {
                                        "character": "Self"
                                    }
                                ]
                            }
                        ],
                        "crew": [
                            {
                                "category": "miscellaneous",
                                "job": "consultant"
                            }
                        ],
                        "summary": {
                            "category": "miscellaneous",
                            "displayYear": "2016"
                        },
                        "id": "/title/tt6011060/",
                        "title": "Deadliest Catch: Sig Hansen Legacy",
                        "titleType": "tvSpecial",
                        "year": 2016
                    },
                    {
                        "cast": [
                            {
                                "category": "actor",
                                "characters": [
                                    "Dock Worker"
                                ],
                                "endYear": 2016,
                                "episodeCount": 1,
                                "roles": [
                                    {
                                        "character": "Dock Worker"
                                    }
                                ],
                                "startYear": 2016
                            }
                        ],
                        "summary": {
                            "category": "actor",
                            "characters": [
                                "Dock Worker"
                            ],
                            "displayYear": "2016"
                        },
                        "id": "/title/tt1292576/",
                        "title": "Sigmund and the Sea Monsters",
                        "titleType": "tvSeries",
                        "year": 2016
                    },
                    {
                        "cast": [
                            {
                                "attr": [
                                    "uncredited"
                                ],
                                "category": "self",
                                "characters": [
                                    "Self"
                                ],
                                "roles": [
                                    {
                                        "character": "Self"
                                    }
                                ]
                            }
                        ],
                        "crew": [
                            {
                                "category": "miscellaneous",
                                "job": "consultant"
                            }
                        ],
                        "summary": {
                            "category": "miscellaneous",
                            "displayYear": "2016"
                        },
                        "id": "/title/tt5631794/",
                        "title": "Deadliest Catch: Legend of the Wizard",
                        "titleType": "tvMovie",
                        "year": 2016
                    },
                    {
                        "cast": [
                            {
                                "category": "self",
                                "characters": [
                                    "Self - Co-Host",
                                    "Self"
                                ],
                                "endYear": 2016,
                                "episodeCount": 37,
                                "roles": [
                                    {
                                        "character": "Self - Co-Host"
                                    },
                                    {
                                        "character": "Self"
                                    }
                                ],
                                "startYear": 2013
                            }
                        ],
                        "summary": {
                            "category": "self",
                            "characters": [
                                "Self - Co-Host",
                                "Self"
                            ],
                            "displayYear": "2013-2016"
                        },
                        "id": "/title/tt2825020/",
                        "title": "Deadliest Catch: The Bait",
                        "titleType": "tvSeries",
                        "year": 2013
                    }
                ]
            },
            {
                "id": "/title/tt2611652/",
                "image": {
                    "height": 6052,
                    "id": "/title/tt2611652/images/rm905182464",
                    "url": "https://m.media-amazon.com/images/M/MV5BMjExMDYzNTIxNl5BMl5BanBnXkFtZTgwNzYwNDQyNDE@._V1_.jpg",
                    "width": 4280
                },
                "runningTimeInMinutes": 94,
                "title": "Virgin Mountain",
                "titleType": "movie",
                "year": 2015,
                "principals": [
                    {
                        "disambiguation": "II",
                        "id": "/name/nm0433603/",
                        "legacyNameText": "Jónsson, Gunnar (II)",
                        "name": "Gunnar Jónsson",
                        "billing": 1,
                        "category": "actor",
                        "characters": [
                            "Fúsi"
                        ],
                        "roles": [
                            {
                                "character": "Fúsi"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm1800322/",
                        "legacyNameText": "Kristjánsdóttir, Ilmur",
                        "name": "Ilmur Kristjánsdóttir",
                        "billing": 2,
                        "category": "actress",
                        "characters": [
                            "Sjöfn"
                        ],
                        "roles": [
                            {
                                "character": "Sjöfn"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm0457995/",
                        "legacyNameText": "Kjartansson, Sigurjón",
                        "name": "Sigurjón Kjartansson",
                        "billing": 3,
                        "category": "actor",
                        "characters": [
                            "Mörður"
                        ],
                        "roles": [
                            {
                                "character": "Mörður"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/title/tt19843258/",
                "image": {
                    "height": 1600,
                    "id": "/title/tt19843258/images/rm3675790337",
                    "url": "https://m.media-amazon.com/images/M/MV5BOTFjZGU0ZWYtNjkzNC00ZGQ4LTgzOWItZGMyOThlMTkzM2ExXkEyXkFqcGdeQXVyMTI3MTIwMTEz._V1_.jpg",
                    "width": 1142
                },
                "title": "Rocketman: The Donnie Rocket Story",
                "titleType": "short",
                "year": 2021,
                "principals": [
                    {
                        "id": "/name/nm12210809/",
                        "legacyNameText": "Clarke, Khobe",
                        "name": "Khobe Clarke",
                        "category": "actor",
                        "characters": [
                            "Donovan T. Winslow (Donnie)"
                        ],
                        "roles": [
                            {
                                "character": "Donovan T. Winslow (Donnie)"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/title/tt0468431/",
                "image": {
                    "height": 1960,
                    "id": "/title/tt0468431/images/rm1215080192",
                    "url": "https://m.media-amazon.com/images/M/MV5BNTc5Mjk0OTIyMF5BMl5BanBnXkFtZTcwOTgwOTU1OQ@@._V1_.jpg",
                    "width": 3008
                },
                "runningTimeInMinutes": 60,
                "nextEpisode": "/title/tt0687942/",
                "numberOfEpisodes": 6,
                "seriesStartYear": 2005,
                "title": "Rocket Man",
                "titleType": "tvMiniSeries",
                "year": 2005,
                "principals": [
                    {
                        "id": "/name/nm0338292/",
                        "legacyNameText": "Green, Robson",
                        "name": "Robson Green",
                        "category": "actor",
                        "characters": [
                            "George Stevenson"
                        ],
                        "endYear": 2005,
                        "episodeCount": 6,
                        "roles": [
                            {
                                "character": "George Stevenson",
                                "characterId": "/character/ch0078233/"
                            }
                        ],
                        "startYear": 2005
                    },
                    {
                        "disambiguation": "II",
                        "id": "/name/nm0197656/",
                        "legacyNameText": "Dale, Charles (II)",
                        "name": "Charles Dale",
                        "category": "actor",
                        "characters": [
                            "Barney Scott"
                        ],
                        "endYear": 2005,
                        "episodeCount": 6,
                        "roles": [
                            {
                                "character": "Barney Scott",
                                "characterId": "/character/ch0084228/"
                            }
                        ],
                        "startYear": 2005
                    },
                    {
                        "id": "/name/nm2088771/",
                        "legacyNameText": "Halliwell, John Rhys",
                        "name": "John Rhys Halliwell",
                        "category": "actor",
                        "characters": [
                            "Tom Stevenson"
                        ],
                        "endYear": 2005,
                        "episodeCount": 6,
                        "roles": [
                            {
                                "character": "Tom Stevenson",
                                "characterId": "/character/ch0126315/"
                            }
                        ],
                        "startYear": 2005
                    }
                ]
            },
            {
                "id": "/title/tt1493134/",
                "image": {
                    "height": 500,
                    "id": "/title/tt1493134/images/rm3387759616",
                    "url": "https://m.media-amazon.com/images/M/MV5BOTMzNzM4NzU1NF5BMl5BanBnXkFtZTgwNTQwNjM1ODE@._V1_.jpg",
                    "width": 375
                },
                "runningTimeInMinutes": 6,
                "title": "Rocketman",
                "titleType": "short",
                "year": 2007,
                "principals": [
                    {
                        "disambiguation": "XXVIII",
                        "id": "/name/nm3586658/",
                        "legacyNameText": "Jackson, Chris (XXVIII)",
                        "name": "Chris Jackson",
                        "category": "actor",
                        "characters": [
                            "Rocketman"
                        ],
                        "roles": [
                            {
                                "character": "Rocketman"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm2371220/",
                        "legacyNameText": "Shulman, Yael",
                        "name": "Yael Shulman",
                        "category": "actress",
                        "characters": [
                            "Hawkeye"
                        ],
                        "roles": [
                            {
                                "character": "Hawkeye"
                            }
                        ]
                    },
                    {
                        "disambiguation": "III",
                        "id": "/name/nm1281377/",
                        "legacyNameText": "Sweeney, Brian (III)",
                        "name": "Brian Sweeney",
                        "category": "actor",
                        "characters": [
                            "Graywolf"
                        ],
                        "roles": [
                            {
                                "character": "Graywolf"
                            }
                        ]
                    }
                ]
            },
            {
                "disambiguation": "III",
                "id": "/title/tt1558249/",
                "image": {
                    "height": 1094,
                    "id": "/title/tt1558249/images/rm673102592",
                    "url": "https://m.media-amazon.com/images/M/MV5BMTg1NzYwNDIxN15BMl5BanBnXkFtZTcwMjAxMDM4NA@@._V1_.jpg",
                    "width": 743
                },
                "runningTimeInMinutes": 69,
                "title": "Do Not Disturb",
                "titleType": "movie",
                "year": 2011,
                "principals": [
                    {
                        "id": "/name/nm0953259/",
                        "legacyNameText": "Zappa, Diva",
                        "name": "Diva Zappa",
                        "billing": 1,
                        "category": "actress",
                        "characters": [
                            "Maid"
                        ],
                        "roles": [
                            {
                                "character": "Maid"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm0050156/",
                        "legacyNameText": "Balfour, Eric",
                        "name": "Eric Balfour",
                        "billing": 2,
                        "category": "actor",
                        "characters": [
                            "Frank (segment \"Rocketman\")"
                        ],
                        "roles": [
                            {
                                "character": "Frank (segment \"Rocketman\")"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm0004949/",
                        "legacyNameText": "Garity, Troy",
                        "name": "Troy Garity",
                        "billing": 3,
                        "category": "actor",
                        "characters": [
                            "Mobster (segment \"Intrinsic\")"
                        ],
                        "roles": [
                            {
                                "character": "Mobster (segment \"Intrinsic\")"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/title/tt13593824/",
                "image": {
                    "height": 720,
                    "id": "/title/tt13593824/images/rm804969729",
                    "url": "https://m.media-amazon.com/images/M/MV5BY2VmMTc5OGEtZWEzYi00ODI1LWJiYmUtODZmNDVmZTY0YTgzXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_.jpg",
                    "width": 1152
                },
                "runningTimeInMinutes": 24,
                "title": "The Amazing Rocketman",
                "titleType": "short",
                "year": 2020,
                "principals": [
                    {
                        "disambiguation": "I",
                        "id": "/name/nm1616798/",
                        "legacyNameText": "Jolley, Tyler (I)",
                        "name": "Tyler Jolley",
                        "billing": 1,
                        "category": "actor",
                        "characters": [
                            "Henry Bumpnickle"
                        ],
                        "roles": [
                            {
                                "character": "Henry Bumpnickle"
                            }
                        ]
                    },
                    {
                        "disambiguation": "II",
                        "id": "/name/nm12123582/",
                        "legacyNameText": "Nystrom, Greg (II)",
                        "name": "Greg Nystrom",
                        "billing": 2,
                        "category": "actor",
                        "characters": [
                            "Roy Noghopper"
                        ],
                        "roles": [
                            {
                                "character": "Roy Noghopper"
                            }
                        ]
                    },
                    {
                        "disambiguation": "XI",
                        "id": "/name/nm8572644/",
                        "legacyNameText": "Perkins, Jeff (XI)",
                        "name": "Jeff Perkins",
                        "billing": 3,
                        "category": "actor",
                        "characters": [
                            "Samuel B. Bruntbelly"
                        ],
                        "roles": [
                            {
                                "character": "Samuel B. Bruntbelly"
                            }
                        ]
                    }
                ]
            },
            {
                "akas": [
                    "B.Flow",
                    "The Killers"
                ],
                "disambiguation": "I",
                "id": "/name/nm2063353/",
                "image": {
                    "height": 400,
                    "id": "/name/nm2063353/images/rm84711936",
                    "url": "https://m.media-amazon.com/images/M/MV5BMjAzNzU5MTM5Nl5BMl5BanBnXkFtZTYwMDE3MDgz._V1_.jpg",
                    "width": 275
                },
                "legacyNameText": "Flowers, Brandon (I)",
                "name": "Brandon Flowers",
                "knownFor": [
                    {
                        "summary": {
                            "category": "soundtrack",
                            "displayYear": "2007"
                        },
                        "id": "/title/tt0413300/",
                        "title": "Spider-Man 3",
                        "titleType": "movie",
                        "year": 2007
                    },
                    {
                        "summary": {
                            "category": "soundtrack",
                            "displayYear": "2006"
                        },
                        "id": "/title/tt0405336/",
                        "title": "Southland Tales",
                        "titleType": "movie",
                        "year": 2006
                    },
                    {
                        "summary": {
                            "category": "soundtrack",
                            "displayYear": "2013"
                        },
                        "disambiguation": "I",
                        "id": "/title/tt2194499/",
                        "title": "About Time",
                        "titleType": "movie",
                        "year": 2013
                    },
                    {
                        "summary": {
                            "category": "soundtrack",
                            "displayYear": "2006"
                        },
                        "id": "/title/tt0479143/",
                        "title": "Rocky Balboa",
                        "titleType": "movie",
                        "year": 2006
                    }
                ]
            },
            {
                "id": "/title/tt7750982/",
                "image": {
                    "height": 1080,
                    "id": "/title/tt7750982/images/rm793795584",
                    "url": "https://m.media-amazon.com/images/M/MV5BNjZmN2Q1NDMtYmI3OC00Y2MzLTkzNjEtODVhYTA5ZmE2MjllXkEyXkFqcGdeQXVyNzgwMDIwOTc@._V1_.jpg",
                    "width": 1920
                },
                "runningTimeInMinutes": 9,
                "title": "Rocketman",
                "titleType": "short",
                "year": 2015
            },
            {
                "id": "/title/tt8656370/",
                "image": {
                    "height": 12375,
                    "id": "/title/tt8656370/images/rm297944832",
                    "url": "https://m.media-amazon.com/images/M/MV5BYWQyNjE0MDUtMjkxNy00NTEzLWFkN2YtMzY4ZGEwNWNiYmM1XkEyXkFqcGdeQXVyMzcyMDkwMTk@._V1_.jpg",
                    "width": 8175
                },
                "runningTimeInMinutes": 11,
                "title": "Rocket Man",
                "titleType": "short",
                "year": 2020,
                "principals": [
                    {
                        "id": "/name/nm7434050/",
                        "legacyNameText": "Cowperthwaite, Cameron",
                        "name": "Cameron Cowperthwaite",
                        "category": "actor",
                        "characters": [
                            "David"
                        ],
                        "roles": [
                            {
                                "character": "David"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm5325271/",
                        "legacyNameText": "Cubis, Alexander",
                        "name": "Alexander Cubis",
                        "as": "Alex Cubis",
                        "category": "actor",
                        "characters": [
                            "Paul"
                        ],
                        "roles": [
                            {
                                "character": "Paul"
                            }
                        ]
                    },
                    {
                        "disambiguation": "II",
                        "id": "/name/nm3351267/",
                        "legacyNameText": "Long, Laura (II)",
                        "name": "Laura Long",
                        "category": "actress",
                        "characters": [
                            "Sarah"
                        ],
                        "roles": [
                            {
                                "character": "Sarah"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "/title/tt15048772/",
                "image": {
                    "height": 3000,
                    "id": "/title/tt15048772/images/rm674822401",
                    "url": "https://m.media-amazon.com/images/M/MV5BMTA0M2VjNGMtNTdkZS00MmFlLWE4NTItMzI3YjYyNmNkNzAxXkEyXkFqcGdeQXVyNjc1OTk4NjA@._V1_.jpg",
                    "width": 2000
                },
                "runningTimeInMinutes": 60,
                "title": "Elton John: Becoming Rocketman",
                "titleType": "movie",
                "year": 2019,
                "principals": [
                    {
                        "disambiguation": "I",
                        "id": "/name/nm0299050/",
                        "legacyNameText": "Furnish, David (I)",
                        "name": "David Furnish",
                        "category": "self",
                        "characters": [
                            "Self"
                        ],
                        "roles": [
                            {
                                "character": "Self"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm1650322/",
                        "legacyNameText": "Griffin, Sid",
                        "name": "Sid Griffin",
                        "category": "self",
                        "characters": [
                            "Self"
                        ],
                        "roles": [
                            {
                                "character": "Self"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm0005056/",
                        "legacyNameText": "John, Elton",
                        "name": "Elton John",
                        "category": "self",
                        "characters": [
                            "Self"
                        ],
                        "roles": [
                            {
                                "character": "Self"
                            }
                        ]
                    }
                ]
            },
            {
                "akas": [
                    "Kennie Gibson"
                ],
                "id": "/name/nm0317069/",
                "legacyNameText": "Gibson, Kinnie",
                "name": "Kinnie Gibson",
                "knownFor": [
                    {
                        "crew": [
                            {
                                "category": "stunts",
                                "job": "stunts"
                            }
                        ],
                        "summary": {
                            "category": "stunts",
                            "displayYear": "1990"
                        },
                        "id": "/title/tt0100502/",
                        "title": "RoboCop 2",
                        "titleType": "movie",
                        "year": 1990
                    },
                    {
                        "crew": [
                            {
                                "category": "stunts",
                                "job": "stunts"
                            }
                        ],
                        "summary": {
                            "category": "stunts",
                            "displayYear": "1987"
                        },
                        "id": "/title/tt0093756/",
                        "title": "Police Academy 4: Citizens on Patrol",
                        "titleType": "movie",
                        "year": 1987
                    },
                    {
                        "crew": [
                            {
                                "category": "stunts",
                                "job": "stunts"
                            }
                        ],
                        "summary": {
                            "category": "stunts",
                            "displayYear": "1989"
                        },
                        "id": "/title/tt0098105/",
                        "title": "Police Academy 6: City Under Siege",
                        "titleType": "movie",
                        "year": 1989
                    },
                    {
                        "crew": [
                            {
                                "category": "stunts",
                                "job": "stunt player"
                            }
                        ],
                        "summary": {
                            "category": "stunts",
                            "displayYear": "1995"
                        },
                        "id": "/title/tt0114697/",
                        "title": "Top Dog",
                        "titleType": "movie",
                        "year": 1995
                    }
                ]
            },
            {
                "id": "/title/tt6951020/",
                "image": {
                    "height": 710,
                    "id": "/title/tt6951020/images/rm1451043584",
                    "url": "https://m.media-amazon.com/images/M/MV5BNGUzMmM4NjAtZGU1OS00YjYzLTgwNWEtMzA5MjdjNDRiY2U0XkEyXkFqcGdeQXVyNjMxNzg3NjI@._V1_.jpg",
                    "width": 1274
                },
                "runningTimeInMinutes": 8,
                "title": "Chase Evans Rocketman",
                "titleType": "short",
                "year": 2017,
                "principals": [
                    {
                        "id": "/name/nm7569868/",
                        "legacyNameText": "Bowers, Shaelan",
                        "name": "Shaelan Bowers",
                        "category": "actor",
                        "characters": [
                            "Chase Evans"
                        ],
                        "roles": [
                            {
                                "character": "Chase Evans"
                            }
                        ]
                    },
                    {
                        "id": "/name/nm9028869/",
                        "legacyNameText": "Costello, Taressa",
                        "name": "Taressa Costello",
                        "category": "actor",
                        "characters": [
                            "Donna Evans"
                        ],
                        "roles": [
                            {
                                "character": "Donna Evans"
                            }
                        ]
                    },
                    {
                        "disambiguation": "III",
                        "id": "/name/nm9019136/",
                        "legacyNameText": "Roy, Danny (III)",
                        "name": "Danny Roy",
                        "category": "actor",
                        "characters": [
                            "Dr. Gordon"
                        ],
                        "roles": [
                            {
                                "character": "Dr. Gordon"
                            }
                        ]
                    }
                ]
            }
        ],
        "types": [
            "title",
            "name"
        ]
    }
        
      const clearMovies = () => {
        setMov(prueba.results)
        console.log(mov)
      }
      const toBlogPost = () => {

      }
        
    
    return (
      
        <div>
             <Navbar  />
            
                <div className="containerL">
                

              <button className='button-81' onClick={clearMovies}></button>
                
                
                <br /> <br />
                <h1 className="web-name">Movies with the title: {title}</h1>


                <List loading = { loading } le = { le } mov = { mov } onClick={toBlogPost}></List>
                     

                </div>    
                    
        </div>
    );
}
export default BlogList;



