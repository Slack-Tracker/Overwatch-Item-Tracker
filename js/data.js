OWI.factory('Data', function() {
  var items = `{"skinsLegendary":{},"skinsEpic":{},"emotes":{},"intros":{},"sprays":{},"voicelines":{},"poses":{},"icons":{}}`
  return {
    currentEvent: 'YEAR_OF_THE_ROOSTER_2017',
    checked: {
      SUMMER_GAMES_2016: JSON.parse(items),
      HALLOWEEN_2016: JSON.parse(items),
      WINTER_WONDERLAND_2016: JSON.parse(items),
      YEAR_OF_THE_ROOSTER_2017: JSON.parse(items)
    },
    prices: {
      'common': 75,
      'rare': 225,
      'epic': 750,
      'legendary': 3000
    },
    updates: {
      "SUMMER_GAMES_2016": {
        "name": "Summer Games 2016",
        "id": "SUMMER_GAMES_2016",
        "dates": {
          "start": "1470164400000",
          "end": "1471928400000"
        },
        "items": {
          "icons": [
            {
              "name": "Archery",
              "id": "hanzo-archery",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/hanzo-archery.png"
            },
            {
              "name": "Australia",
              "id": "australia",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/australia.png"
            },
            {
              "name": "BMX",
              "id": "reaper-bmx",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/reaper-bmx.png"
            },
            {
              "name": "Badminton",
              "id": "mercy-badminton",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mercy-badminton.png"
            },
            {
              "name": "Basketball",
              "id": "pharah-basketball",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/pharah-basketball.png"
            },
            {
              "name": "Boxing",
              "id": "bastion-boxing",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/bastion-boxing.png"
            },
            {
              "name": "Brazil",
              "id": "brazil",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/brazil.png"
            },
            {
              "name": "China",
              "id": "china",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/china.png"
            },
            {
              "name": "Cycling",
              "id": "dva-cycling",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/dva-cycling.png"
            },
            {
              "name": "Diving",
              "id": "roadhog-diving",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/roadhog-diving.png"
            },
            {
              "name": "Egypt",
              "id": "egypt",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/egypt.png"
            },
            {
              "name": "Equestrian",
              "id": "mccree-equestrian",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mccree-equestrian.png"
            },
            {
              "name": "Fencing",
              "id": "genji-fencing",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/genji-fencing.png"
            },
            {
              "name": "Football",
              "id": "lucio-football",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/lucio-football.png"
            },
            {
              "name": "France",
              "id": "france",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/france.png"
            },
            {
              "name": "Germany",
              "id": "germany",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/germany.png"
            },
            {
              "name": "Golf",
              "id": "soldier-76-golf",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/soldier-76-golf.png"
            },
            {
              "name": "Greece",
              "id": "greece",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/greece.png"
            },
            {
              "name": "Gymnastics",
              "id": "widowmaker-gymnastics",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/widowmaker-gymnastics.png"
            },
            {
              "name": "Japan",
              "id": "japan",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/japan.png"
            },
            {
              "name": "Mexico",
              "id": "mexico",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mexico.png"
            },
            {
              "name": "Nepal",
              "id": "nepal",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/nepal.png"
            },
            {
              "name": "Numbani",
              "id": "numbani",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/numbani.png"
            },
            {
              "name": "Rhythmic Gymnastics",
              "id": "symmetra-rhythmic-gymnastics",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/symmetra-rhythmic-gymnastics.png"
            },
            {
              "name": "Russia",
              "id": "russia",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/russia.png"
            },
            {
              "name": "Shooting",
              "id": "ana-shooting",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/ana-shooting.png"
            },
            {
              "name": "South Korea",
              "id": "south-korea",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/south-korea.png"
            },
            {
              "name": "Summer Games",
              "id": "summer-games",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/summer-games.png"
            },
            {
              "name": "Sweden",
              "id": "sweden",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/sweden.png"
            },
            {
              "name": "Switzerland",
              "id": "switzerland",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/switzerland.png"
            },
            {
              "name": "Table Tennis",
              "id": "mei-table-tennis",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mei-table-tennis.png"
            },
            {
              "name": "Taekwondo",
              "id": "zenyatta-taekwondo",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/zenyatta-taekwondo.png"
            },
            {
              "name": "Tennis",
              "id": "junkrat-tennis",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/junkrat-tennis.png"
            },
            {
              "name": "Track",
              "id": "tracer-track",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/tracer-track.png"
            },
            {
              "name": "United Kingdom",
              "id": "united-kingdom",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-kingdom.png"
            },
            {
              "name": "United States",
              "id": "united-states",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-states.png"
            },
            {
              "name": "Volleyball",
              "id": "winston-volleyball",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/winston-volleyball.png"
            },
            {
              "name": "Water Polo",
              "id": "torbjorn-water-polo",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/torbjorn-water-polo.png"
            },
            {
              "name": "Weightlifting",
              "id": "zarya-weightlifting",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/zarya-weightlifting.png"
            },
            {
              "name": "Wrestling",
              "id": "reinhardt-wrestling",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/reinhardt-wrestling.png"
            }
          ],
          "sprays": [
            {
              "hero": "Ana",
              "name": "Shooting",
              "id": "ana-shooting",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/ana-shooting.png"
            },
            {
              "hero": "Bastion",
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/bastion-boxing.png"
            },
            {
              "hero": "D.Va",
              "name": "Cycling",
              "id": "dva-cycling",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/dva-cycling.png"
            },
            {
              "hero": "Genji",
              "name": "Fencing",
              "id": "genji-fencing",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/genji-fencing.png"
            },
            {
              "hero": "Hanzo",
              "name": "Archery",
              "id": "hanzo-archery",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/hanzo-archery.png"
            },
            {
              "hero": "Junkrat",
              "name": "Tennis",
              "id": "junkrat-tennis",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/junkrat-tennis.png"
            },
            {
              "hero": "Lúcio",
              "name": "Football",
              "id": "lucio-football",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/lucio-football.png"
            },
            {
              "hero": "McCree",
              "name": "Equestrian",
              "id": "mccree-equestrian",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mccree-equestrian.png"
            },
            {
              "hero": "Mei",
              "name": "Table Tennis",
              "id": "mei-table-tennis",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mei-table-tennis.png"
            },
            {
              "hero": "Mercy",
              "name": "Badminton",
              "id": "mercy-badminton",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mercy-badminton.png"
            },
            {
              "hero": "Pharah",
              "name": "Basketball",
              "id": "pharah-basketball",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/pharah-basketball.png"
            },
            {
              "hero": "Reaper",
              "name": "BMX",
              "id": "reaper-bmx",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reaper-bmx.png"
            },
            {
              "hero": "Reinhardt",
              "name": "Wrestling",
              "id": "reinhardt-wrestling",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reinhardt-wrestling.png"
            },
            {
              "hero": "Roadhog",
              "name": "Diving",
              "id": "roadhog-diving",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/roadhog-diving.png"
            },
            {
              "hero": "Soldier: 76",
              "name": "Golf",
              "id": "soldier-76-golf",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/soldier-76-golf.png"
            },
            {
              "hero": "Symmetra",
              "name": "Rhythmic",
              "id": "symmetra-rhythmic",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/symmetra-rhythmic.png"
            },
            {
              "hero": "Torbjörn",
              "name": "Water Polo",
              "id": "torbjorn-water-polo",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/torbjorn-water-polo.png"
            },
            {
              "hero": "Tracer",
              "name": "Track",
              "id": "tracer-track",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/tracer-track.png"
            },
            {
              "hero": "Widowmaker",
              "name": "Gymnastics",
              "id": "widowmaker-gymnastics",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/widowmaker-gymnastics.png"
            },
            {
              "hero": "Winston",
              "name": "Volleyball",
              "id": "winston-volleyball",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/winston-volleyball.png"
            },
            {
              "hero": "Zarya",
              "name": "Weightlifting",
              "id": "zarya-weightlifting",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zarya-weightlifting.png"
            },
            {
              "hero": "Zenyatta",
              "name": "Taekwondo",
              "id": "zenyatta-taekwondo",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zenyatta-taekwondo.png"
            },
            {
              "name": "Summer Games",
              "id": "summer-games",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/summer-games.png",
              "quality": "common"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "Learn from the Pain",
              "id": "ana-learn-from-the-pain",
              "quality": "common"
            },
            {
              "hero": "Bastion",
              "name": "WHOO-VWEEEEEE",
              "id": "bastion-whoovweeeeee",
              "quality": "common"
            },
            {
              "hero": "D.Va",
              "name": "I'm #1",
              "id": "dva-im-1",
              "quality": "common"
            },
            {
              "hero": "Genji",
              "name": "I was hoping for a challenge",
              "id": "genji-i-was-hoping-for-a-challenge",
              "quality": "common"
            },
            {
              "hero": "Hanzo",
              "name": "Ignore all distractions",
              "id": "hanzo-ignore-all-distractions",
              "quality": "common"
            },
            {
              "hero": "Junkrat",
              "name": "I give it a 10!",
              "id": "junkrat-i-give-it-a-10",
              "quality": "common"
            },
            {
              "hero": "Lúcio",
              "name": "Be champions",
              "id": "lucio-be-champions",
              "quality": "common"
            },
            {
              "hero": "McCree",
              "name": "I don't much like losing",
              "id": "mccree-i-dont-much-like-losing",
              "quality": "common"
            },
            {
              "hero": "Mei",
              "name": "Overcome all obstacles",
              "id": "mei-overcome-all-obstacles",
              "quality": "common"
            },
            {
              "hero": "Mercy",
              "name": "Piece of cake",
              "id": "mercy-piece-of-cake",
              "quality": "common"
            },
            {
              "hero": "Pharah",
              "name": "We are in this together",
              "id": "pharah-we-are-in-this-together",
              "quality": "common"
            },
            {
              "hero": "Reaper",
              "name": "It's in the refrigerator",
              "id": "reaper-its-in-the-refrigerator",
              "quality": "common"
            },
            {
              "hero": "Reinhardt",
              "name": "100%% German power",
              "id": "reinhardt-100-german-power",
              "quality": "common"
            },
            {
              "hero": "Roadhog",
              "name": "What's mine is mine",
              "id": "roadhog-whats-mine-is-mine",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76",
              "name": "You want a medal?",
              "id": "soldier-76-you-want-a-medal",
              "quality": "common"
            },
            {
              "hero": "Symmetra",
              "name": "Hard work and dedication",
              "id": "symmetra-hard-work-and-dedication",
              "quality": "common"
            },
            {
              "hero": "Torbjörn",
              "name": "More where that came from",
              "id": "torbjorn-more-where-that-came-from",
              "quality": "common"
            },
            {
              "hero": "Tracer",
              "name": "Eat my dust",
              "id": "tracer-eat-my-dust",
              "quality": "common"
            },
            {
              "hero": "Widowmaker",
              "name": "I don't miss",
              "id": "widowmaker-i-dont-miss",
              "quality": "common"
            },
            {
              "hero": "Winston",
              "name": "Playtime's over",
              "id": "winston-playtimes-over",
              "quality": "common"
            },
            {
              "hero": "Zarya",
              "name": "No pain, no gain",
              "id": "zarya-no-pain-no-gain",
              "quality": "common"
            },
            {
              "hero": "Zenyatta",
              "name": "Strive for improvement",
              "id": "zenyatta-strive-for-improvement",
              "quality": "common"
            }
          ],
          "emotes": [
            {
              "hero": "Bastion",
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/emotes/bastion-boxing.webm"
            },
            {
              "hero": "Lúcio",
              "name": "Juggle",
              "id": "lucio-juggle",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/emotes/lucio-juggle.webm"
            },
            {
              "hero": "Symmetra",
              "name": "Ribbon",
              "id": "symmetra-ribbon",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/emotes/symmetra-ribbon.webm"
            }
          ],
          "skinsEpic": [
            {
              "hero": "D.Va",
              "name": "Taegeukgi",
              "id": "dva-taegeukgi",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/dva-taegeukgi.jpg"
            },
            {
              "hero": "Genji",
              "name": "Nihon",
              "id": "genji-nihon",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/genji-nihon.jpg"
            },
            {
              "hero": "McCree",
              "name": "American",
              "id": "mccree-american",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mccree-american.jpg"
            },
            {
              "hero": "Mercy",
              "name": "Eidgenossin",
              "id": "mercy-eidgenossin",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mercy-eidgenossin.jpg"
            },
            {
              "hero": "Torbjörn",
              "name": "Tre Kronor",
              "id": "torbjorn-tre-kronor",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/torbjorn-tre-kronor.jpg"
            },
            {
              "hero": "Widowmaker",
              "name": "Tricolore",
              "id": "widowmaker-tricolore",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/widowmaker-tricolore.jpg"
            }
          ],
          "intros": [
            {
              "hero": "Junkrat",
              "name": "Shot Put",
              "id": "junkrat-shot-put",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/intros/junkrat-shot-put.webm"
            },
            {
              "hero": "Lúcio",
              "name": "Bicycle Kick",
              "id": "lucio-bicycle-kick",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/intros/lucio-bicycle-kick.webm"
            },
            {
              "hero": "Tracer",
              "name": "Hurdle",
              "id": "tracer-hurdle",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/intros/tracer-hurdle.webm"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "Lúcio",
              "name": "Seleção",
              "id": "lucio-selecao",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-selecao.jpg"
            },
            {
              "hero": "Lúcio",
              "name": "Striker",
              "id": "lucio-striker",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-striker.jpg"
            },
            {
              "hero": "Tracer",
              "name": "Sprinter",
              "id": "tracer-sprinter",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-sprinter.jpg"
            },
            {
              "hero": "Tracer",
              "name": "Track and Field",
              "id": "tracer-track-and-field",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-track-and-field.jpg"
            },
            {
              "hero": "Zarya",
              "name": "Champion",
              "id": "zarya-champion",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-champion.jpg"
            },
            {
              "hero": "Zarya",
              "name": "Weightlifter",
              "id": "zarya-weightlifter",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-weightlifter.jpg"
            }
          ],
          "poses": [
            {
              "hero": "Mei",
              "name": "Medal",
              "id": "mei-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/mei-medal.jpg"
            },
            {
              "hero": "Pharah",
              "name": "Medal",
              "id": "pharah-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/pharah-medal.jpg"
            },
            {
              "hero": "Reaper",
              "name": "Medal",
              "id": "reaper-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/reaper-medal.jpg"
            },
            {
              "hero": "Roadhog",
              "name": "Medal",
              "id": "roadhog-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/roadhog-medal.jpg"
            },
            {
              "hero": "Soldier: 76",
              "name": "Golf Swing",
              "id": "soldier-76-golf-swing",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/soldier-76-golf-swing.jpg"
            },
            {
              "hero": "Torbjörn",
              "name": "Medal",
              "id": "torbjorn-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/torbjorn-medal.jpg"
            },
            {
              "hero": "Widowmaker",
              "name": "Medal",
              "id": "widowmaker-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/widowmaker-medal.jpg"
            },
            {
              "hero": "Winston",
              "name": "Medal",
              "id": "winston-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/winston-medal.jpg"
            },
            {
              "hero": "Zenyatta",
              "name": "Medals",
              "id": "zenyatta-medals",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/zenyatta-medals.jpg"
            }
          ]
        }
      },
      "HALLOWEEN_2016": {
        "name": "Halloween 2016",
        "id": "HALLOWEEN_2016",
        "dates": {
          "start": "1476208800000",
          "end": "1478059200000"
        },
        "items": {
          "skinsEpic": [
            {
              "hero": "Ana",
              "name": "Ghoul",
              "id": "ana-ghoul",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/ana-ghoul.jpg"
            },
            {
              "hero": "Bastion",
              "name": "Tombstone",
              "id": "bastion-tombstone",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/bastion-tombstone.jpg"
            },
            {
              "hero": "Hanzo",
              "name": "Demon",
              "id": "hanzo-demon",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/hanzo-demon.jpg"
            },
            {
              "hero": "Pharah",
              "name": "Possessed",
              "id": "pharah-possessed",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/pharah-possessed.jpg"
            },
            {
              "hero": "Reinhardt",
              "name": "Coldhardt",
              "id": "reinhardt-coldhardt",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/reinhardt-coldhardt.jpg"
            },
            {
              "hero": "Soldier: 76",
              "name": "Immortal",
              "id": "soldier-76-immortal",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/soldier-76-immortal.jpg"
            },
            {
              "hero": "Symmetra",
              "name": "Vampire",
              "id": "symmetra-vampire",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/symmetra-vampire.jpg"
            },
            {
              "hero": "Zenyatta",
              "name": "Skullyatta",
              "id": "zenyatta-skullyatta",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/zenyatta-skullyatta.jpg"
            }
          ],
          "emotes": [
            {
              "hero": "Ana",
              "name": "Candy",
              "id": "ana-candy",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/emotes/ana-candy.webm"
            },
            {
              "hero": "Reinhardt",
              "name": "Pumpkin Smash",
              "id": "reinhardt-pumpkin-smash",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/emotes/reinhardt-pumpkin-smash.webm"
            },
            {
              "hero": "Winston",
              "name": "Shadow Puppets",
              "id": "winston-shadow-puppets",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/emotes/winston-shadow-puppets.webm"
            }
          ],
          "sprays": [
            {
              "hero": "Ana",
              "name": "Trick or Treat",
              "id": "ana-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/ana-trick-or-treat.png"
            },
            {
              "hero": "Bastion",
              "name": "Trick or Treat",
              "id": "bastion-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/bastion-trick-or-treat.png"
            },
            {
              "hero": "D.Va",
              "name": "Trick or Treat",
              "id": "dva-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/dva-trick-or-treat.png"
            },
            {
              "hero": "Genji",
              "name": "Trick or Treat",
              "id": "genji-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/genji-trick-or-treat.png"
            },
            {
              "hero": "Hanzo",
              "name": "Trick or Treat",
              "id": "hanzo-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/hanzo-trick-or-treat.png"
            },
            {
              "hero": "Junkrat",
              "name": "Trick or Treat",
              "id": "junkrat-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/junkrat-trick-or-treat.png"
            },
            {
              "hero": "Lúcio",
              "name": "Trick or Treat",
              "id": "lucio-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/lucio-trick-or-treat.png"
            },
            {
              "hero": "McCree",
              "name": "Trick or Treat",
              "id": "mccree-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/mccree-trick-or-treat.png"
            },
            {
              "hero": "Mei",
              "name": "Trick or Treat",
              "id": "mei-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/mei-trick-or-treat.png"
            },
            {
              "hero": "Mercy",
              "name": "Trick or Treat",
              "id": "mercy-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/mercy-trick-or-treat.png"
            },
            {
              "hero": "Pharah",
              "name": "Trick or Treat",
              "id": "pharah-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/pharah-trick-or-treat.png"
            },
            {
              "hero": "Reaper",
              "name": "Trick or Treat",
              "id": "reaper-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/reaper-trick-or-treat.png"
            },
            {
              "hero": "Reinhardt",
              "name": "Trick or Treat",
              "id": "reinhardt-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/reinhardt-trick-or-treat.png"
            },
            {
              "hero": "Roadhog",
              "name": "Trick or Treat",
              "id": "roadhog-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/roadhog-trick-or-treat.png"
            },
            {
              "hero": "Soldier: 76",
              "name": "Trick or Treat",
              "id": "soldier-76-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/soldier-76-trick-or-treat.png"
            },
            {
              "hero": "Symmetra",
              "name": "Trick or Treat",
              "id": "symmetra-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/symmetra-trick-or-treat.png"
            },
            {
              "hero": "Torbjörn",
              "name": "Trick or Treat",
              "id": "torbjorn-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/torbjorn-trick-or-treat.png"
            },
            {
              "hero": "Tracer",
              "name": "Trick or Treat",
              "id": "tracer-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/tracer-trick-or-treat.png"
            },
            {
              "hero": "Widowmaker",
              "name": "Trick or Treat",
              "id": "widowmaker-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/widowmaker-trick-or-treat.png"
            },
            {
              "hero": "Winston",
              "name": "Trick or Treat",
              "id": "winston-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/winston-trick-or-treat.png"
            },
            {
              "hero": "Zarya",
              "name": "Trick or Treat",
              "id": "zarya-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/zarya-trick-or-treat.png"
            },
            {
              "hero": "Zenyatta",
              "name": "Trick or Treat",
              "id": "zenyatta-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/zenyatta-trick-or-treat.png"
            },
            {
              "name": "...Never Die",
              "id": "never-die",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/never-die.png",
              "quality": "common"
            },
            {
              "name": "Bats",
              "id": "bats",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/bats.png",
              "quality": "common"
            },
            {
              "name": "Boo!",
              "id": "boo",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/boo.png",
              "quality": "common"
            },
            {
              "name": "Boop!",
              "id": "boop",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/boop.png",
              "quality": "common"
            },
            {
              "name": "Candyball",
              "id": "candyball",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/candyball.png",
              "quality": "common"
            },
            {
              "name": "Fangs",
              "id": "fangs",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/fangs.png",
              "quality": "common"
            },
            {
              "name": "Gummy Hog",
              "id": "gummy-hog",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/gummy-hog.png",
              "quality": "common"
            },
            {
              "name": "Halloween Terror 2016",
              "id": "halloween-terror-2016",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/halloween-terror-2016.png",
              "quality": "common"
            },
            {
              "name": "Pumpkins",
              "id": "pumpkins",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/pumpkins.png",
              "quality": "common"
            },
            {
              "name": "Witch's Brew",
              "id": "witchs-brew",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/witchs-brew.png",
              "quality": "common"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "Are you scared?",
              "id": "ana-are-you-scared",
              "quality": "common"
            },
            {
              "hero": "Bastion",
              "name": "W-W-Wooooo...?",
              "id": "bastion-wwwooooo",
              "quality": "common"
            },
            {
              "hero": "D.Va",
              "name": "Happy Halloween!",
              "id": "dva-happy-halloween",
              "quality": "common"
            },
            {
              "hero": "Genji",
              "name": "My Halloween costume?",
              "id": "genji-my-halloween-costume",
              "quality": "common"
            },
            {
              "hero": "Hanzo",
              "name": "You are already dead",
              "id": "hanzo-you-are-already-dead",
              "quality": "common"
            },
            {
              "hero": "Junkrat",
              "name": "Happy Halloween",
              "id": "junkrat-happy-halloween",
              "quality": "common"
            },
            {
              "hero": "Lúcio",
              "name": "Killed it!",
              "id": "lucio-killed-it",
              "quality": "common"
            },
            {
              "hero": "McCree",
              "name": "It's your funeral",
              "id": "mccree-its-your-funeral",
              "quality": "common"
            },
            {
              "hero": "Mei",
              "name": "Scary!",
              "id": "mei-scary",
              "quality": "common"
            },
            {
              "hero": "Mercy",
              "name": "Superstition",
              "id": "mercy-superstition",
              "quality": "common"
            },
            {
              "hero": "Pharah",
              "name": "Dead or alive",
              "id": "pharah-dead-or-alive",
              "quality": "common"
            },
            {
              "hero": "Reaper",
              "name": "I work the graveyard shift",
              "id": "reaper-i-work-the-graveyard-shift",
              "quality": "common"
            },
            {
              "hero": "Reinhardt",
              "name": "Smashing",
              "id": "reinhardt-smashing",
              "quality": "common"
            },
            {
              "hero": "Roadhog",
              "name": "Want some candy?",
              "id": "roadhog-want-some-candy",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76",
              "name": "Knock knock",
              "id": "soldier-76-knock-knock",
              "quality": "common"
            },
            {
              "hero": "Symmetra",
              "name": "A frightening thought",
              "id": "symmetra-a-frightening-thought",
              "quality": "common"
            },
            {
              "hero": "Torbjörn",
              "name": "If you build it",
              "id": "torbjorn-if-you-build-it",
              "quality": "common"
            },
            {
              "hero": "Tracer",
              "name": "Ooh, Scary!",
              "id": "tracer-ooh-scary",
              "quality": "common"
            },
            {
              "hero": "Widowmaker",
              "name": "The party is over",
              "id": "widowmaker-the-party-is-over",
              "quality": "common"
            },
            {
              "hero": "Winston",
              "name": "This is not a costume",
              "id": "winston-this-is-not-a-costume",
              "quality": "common"
            },
            {
              "hero": "Zarya",
              "name": "Never forget the fallen",
              "id": "zarya-never-forget-the-fallen",
              "quality": "common"
            },
            {
              "hero": "Zenyatta",
              "name": "Trick or treat?",
              "id": "zenyatta-trick-or-treat",
              "quality": "common"
            }
          ],
          "poses": [
            {
              "hero": "Ana",
              "name": "R.I.P.",
              "id": "ana-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/ana-rip.jpg"
            },
            {
              "hero": "Bastion",
              "name": "R.I.P.",
              "id": "bastion-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/bastion-rip.jpg"
            },
            {
              "hero": "D.Va",
              "name": "R.I.P.",
              "id": "dva-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/dva-rip.jpg"
            },
            {
              "hero": "Genji",
              "name": "R.I.P.",
              "id": "genji-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/genji-rip.jpg"
            },
            {
              "hero": "Hanzo",
              "name": "R.I.P.",
              "id": "hanzo-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/hanzo-rip.jpg"
            },
            {
              "hero": "Junkrat",
              "name": "R.I.P.",
              "id": "junkrat-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/junkrat-rip.jpg"
            },
            {
              "hero": "Lúcio",
              "name": "R.I.P.",
              "id": "lucio-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/lucio-rip.jpg"
            },
            {
              "hero": "McCree",
              "name": "R.I.P.",
              "id": "mccree-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/mccree-rip.jpg"
            },
            {
              "hero": "Mei",
              "name": "R.I.P.",
              "id": "mei-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/mei-rip.jpg"
            },
            {
              "hero": "Mercy",
              "name": "R.I.P.",
              "id": "mercy-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/mercy-rip.jpg"
            },
            {
              "hero": "Pharah",
              "name": "R.I.P.",
              "id": "pharah-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/pharah-rip.jpg"
            },
            {
              "hero": "Reaper",
              "name": "R.I.P.",
              "id": "reaper-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/reaper-rip.jpg"
            },
            {
              "hero": "Reinhardt",
              "name": "R.I.P.",
              "id": "reinhardt-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/reinhardt-rip.jpg"
            },
            {
              "hero": "Roadhog",
              "name": "R.I.P.",
              "id": "roadhog-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/roadhog-rip.jpg"
            },
            {
              "hero": "Soldier: 76",
              "name": "R.I.P.",
              "id": "soldier-76-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/soldier-76-rip.jpg"
            },
            {
              "hero": "Symmetra",
              "name": "R.I.P.",
              "id": "symmetra-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/symmetra-rip.jpg"
            },
            {
              "hero": "Torbjörn",
              "name": "R.I.P.",
              "id": "torbjorn-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/torbjorn-rip.jpg"
            },
            {
              "hero": "Tracer",
              "name": "R.I.P.",
              "id": "tracer-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/tracer-rip.jpg"
            },
            {
              "hero": "Widowmaker",
              "name": "R.I.P.",
              "id": "widowmaker-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/widowmaker-rip.jpg"
            },
            {
              "hero": "Winston",
              "name": "R.I.P.",
              "id": "winston-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/winston-rip.jpg"
            },
            {
              "hero": "Zarya",
              "name": "R.I.P.",
              "id": "zarya-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/zarya-rip.jpg"
            },
            {
              "hero": "Zenyatta",
              "name": "R.I.P.",
              "id": "zenyatta-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/zenyatta-rip.jpg"
            }
          ],
          "intros": [
            {
              "hero": "Genji",
              "name": "Pumpkin Carving",
              "id": "genji-pumpkin-carving",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/intros/genji-pumpkin-carving.webm"
            },
            {
              "hero": "Mei",
              "name": "Ice Scream",
              "id": "mei-ice-scream",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/intros/mei-ice-scream.webm"
            },
            {
              "hero": "Reaper",
              "name": "Eternal Rest",
              "id": "reaper-eternal-rest",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/intros/reaper-eternal-rest.webm"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "Junkrat",
              "name": "Dr. Junkenstein",
              "id": "junkrat-dr-junkenstein",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/junkrat-dr-junkenstein.jpg"
            },
            {
              "hero": "Mercy",
              "name": "Witch",
              "id": "mercy-witch",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/mercy-witch.jpg"
            },
            {
              "hero": "Reaper",
              "name": "Pumpkin",
              "id": "reaper-pumpkin",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/reaper-pumpkin.jpg"
            },
            {
              "hero": "Roadhog",
              "name": "Junkenstein's Monster",
              "id": "roadhog-junkensteins-monster",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/roadhog-junkensteins-monster.jpg"
            }
          ],
          "icons": [
            {
              "name": "...Never Die",
              "id": "never-die",
              "img": "./resources/updates/HALLOWEEN_2016/icons/never-die.png"
            },
            {
              "name": "Bewitching",
              "id": "bewitching",
              "img": "./resources/updates/HALLOWEEN_2016/icons/bewitching.png"
            },
            {
              "name": "Calavera",
              "id": "calavera",
              "img": "./resources/updates/HALLOWEEN_2016/icons/calavera.png"
            },
            {
              "name": "Candle",
              "id": "candle",
              "img": "./resources/updates/HALLOWEEN_2016/icons/candle.png"
            },
            {
              "name": "Eyeball",
              "id": "eyeball",
              "img": "./resources/updates/HALLOWEEN_2016/icons/eyeball.png"
            },
            {
              "name": "Ghostymari",
              "id": "ghostymari",
              "img": "./resources/updates/HALLOWEEN_2016/icons/ghostymari.png"
            },
            {
              "name": "Halloween Terror",
              "id": "halloween-terror",
              "img": "./resources/updates/HALLOWEEN_2016/icons/halloween-terror.png"
            },
            {
              "name": "Spider",
              "id": "spider",
              "img": "./resources/updates/HALLOWEEN_2016/icons/spider.png"
            },
            {
              "name": "Superstition",
              "id": "superstition",
              "img": "./resources/updates/HALLOWEEN_2016/icons/superstition.png"
            },
            {
              "name": "The Doctor",
              "id": "junkrat-the-doctor",
              "img": "./resources/updates/HALLOWEEN_2016/icons/junkrat-the-doctor.png"
            },
            {
              "name": "The Monster",
              "id": "roadhog-the-monster",
              "img": "./resources/updates/HALLOWEEN_2016/icons/roadhog-the-monster.png"
            },
            {
              "name": "The Reaper",
              "id": "reaper-the-reaper",
              "img": "./resources/updates/HALLOWEEN_2016/icons/reaper-the-reaper.png"
            },
            {
              "name": "The Witch",
              "id": "mercy-the-witch",
              "img": "./resources/updates/HALLOWEEN_2016/icons/mercy-the-witch.png"
            },
            {
              "name": "Tombstone",
              "id": "tombstone",
              "img": "./resources/updates/HALLOWEEN_2016/icons/tombstone.png"
            },
            {
              "name": "Vampachimari",
              "id": "vampachimari",
              "img": "./resources/updates/HALLOWEEN_2016/icons/vampachimari.png"
            },
            {
              "name": "Witch's Brew",
              "id": "witchs-brew",
              "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-brew.png"
            },
            {
              "name": "Witch's Hat",
              "id": "witchs-hat",
              "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-hat.png"
            },
            {
              "name": "Wolf",
              "id": "wolf",
              "img": "./resources/updates/HALLOWEEN_2016/icons/wolf.png"
            }
          ]
        }
      },
      "WINTER_WONDERLAND_2016": {
        "name": "Winter Wonderland 2016",
        "id": "WINTER_WONDERLAND_2016",
        "dates": {
          "start": "1481652000000",
          "end": "1483416000000"
        },
        "items": {
          "sprays": [
            {
              "hero": "Ana",
              "name": "Warm",
              "id": "ana-warm",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-warm.png",
              "ornamentID": "ana-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
            },
            {
              "hero": "Ana",
              "name": "Ornament",
              "id": "ana-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png",
              "ornamentID": "ana-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
            },
            {
              "hero": "Bastion",
              "name": "ORNAMENT",
              "id": "bastion-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png",
              "ornamentID": "bastion-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
            },
            {
              "hero": "Bastion",
              "name": "FESTIVE",
              "id": "bastion-festive",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-festive.png",
              "ornamentID": "bastion-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
            },
            {
              "hero": "D.Va",
              "name": "ORNAMENT",
              "id": "dva-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png",
              "ornamentID": "dva-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
            },
            {
              "hero": "D.Va",
              "name": "COOKIE",
              "id": "dva-cookie",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-cookie.png",
              "ornamentID": "dva-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
            },
            {
              "hero": "Genji",
              "name": "Kadomatsu",
              "id": "genji-kadomatsu",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-kadomatsu.png",
              "ornamentID": "genji-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
            },
            {
              "hero": "Genji",
              "name": "Ornament",
              "id": "genji-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png",
              "ornamentID": "genji-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
            },
            {
              "hero": "Hanzo",
              "name": "Kadomatsu",
              "id": "hanzo-kadomatsu",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-kadomatsu.png",
              "ornamentID": "hanzo-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
            },
            {
              "hero": "Hanzo",
              "name": "Ornament",
              "id": "hanzo-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png",
              "ornamentID": "hanzo-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
            },
            {
              "hero": "Junkrat",
              "name": "\"WINTER\"",
              "id": "junkrat-winter",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-winter.png",
              "ornamentID": "junkrat-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
            },
            {
              "hero": "Junkrat",
              "name": "Ornament",
              "id": "junkrat-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png",
              "ornamentID": "junkrat-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
            },
            {
              "hero": "Lúcio",
              "name": "Ornament",
              "id": "lucio-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png",
              "ornamentID": "lucio-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
            },
            {
              "hero": "Lúcio",
              "name": "Hockey",
              "id": "lucio-hockey",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-hockey.png",
              "ornamentID": "lucio-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
            },
            {
              "hero": "McCree",
              "name": "Ornament",
              "id": "mccree-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png",
              "ornamentID": "mccree-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
            },
            {
              "hero": "McCree",
              "name": "Ugly Sweater",
              "id": "mccree-ugly-sweater",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ugly-sweater.png",
              "ornamentID": "mccree-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
            },
            {
              "hero": "Mei",
              "name": "Sculpting",
              "id": "mei-sculpting",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-sculpting.png",
              "ornamentID": "mei-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
            },
            {
              "hero": "Mei",
              "name": "Ornament",
              "id": "mei-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png",
              "ornamentID": "mei-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
            },
            {
              "hero": "Mercy",
              "name": "Snow Angel",
              "id": "mercy-snow-angel",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-snow-angel.png",
              "ornamentID": "mercy-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
            },
            {
              "hero": "Mercy",
              "name": "Ornament",
              "id": "mercy-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png",
              "ornamentID": "mercy-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
            },
            {
              "hero": "Pharah",
              "name": "Ice Fishing",
              "id": "pharah-ice-fishing",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ice-fishing.png",
              "ornamentID": "pharah-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
            },
            {
              "hero": "Pharah",
              "name": "Ornament",
              "id": "pharah-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png",
              "ornamentID": "pharah-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
            },
            {
              "hero": "Reaper",
              "name": "Stocking",
              "id": "reaper-stocking",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-stocking.png",
              "ornamentID": "reaper-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
            },
            {
              "hero": "Reaper",
              "name": "Ornament",
              "id": "reaper-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png",
              "ornamentID": "reaper-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
            },
            {
              "hero": "Reinhardt",
              "name": "Ice Fishing",
              "id": "reinhardt-ice-fishing",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ice-fishing.png",
              "ornamentID": "reinhardt-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
            },
            {
              "hero": "Reinhardt",
              "name": "Ornament",
              "id": "reinhardt-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png",
              "ornamentID": "reinhardt-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
            },
            {
              "hero": "Roadhog",
              "name": "\"Winter\"",
              "id": "roadhog-winter",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-winter.png",
              "ornamentID": "roadhog-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
            },
            {
              "hero": "Roadhog",
              "name": "Ornament",
              "id": "roadhog-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png",
              "ornamentID": "roadhog-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
            },
            {
              "hero": "Soldier: 76",
              "name": "Ornament",
              "id": "soldier-76-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png",
              "ornamentID": "soldier-76-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
            },
            {
              "hero": "Soldier: 76",
              "name": "Army Man: 76",
              "id": "soldier-76-army-man-76",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-army-man-76.png",
              "ornamentID": "soldier-76-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
            },
            {
              "hero": "Sombra",
              "name": "Puppet",
              "id": "sombra-puppet",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-puppet.png",
              "ornamentID": "sombra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
            },
            {
              "hero": "Sombra",
              "name": "Ornament",
              "id": "sombra-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png",
              "ornamentID": "sombra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
            },
            {
              "hero": "Symmetra",
              "name": "Snowflake",
              "id": "symmetra-snowflake",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-snowflake.png",
              "ornamentID": "symmetra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
            },
            {
              "hero": "Symmetra",
              "name": "Ornament",
              "id": "symmetra-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png",
              "ornamentID": "symmetra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
            },
            {
              "hero": "Torbjörn",
              "name": "Workshop",
              "id": "torbjorn-workshop",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-workshop.png",
              "ornamentID": "torbjorn-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
            },
            {
              "hero": "Torbjörn",
              "name": "Ornament",
              "id": "torbjorn-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png",
              "ornamentID": "torbjorn-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
            },
            {
              "hero": "Tracer",
              "name": "Snowboarding",
              "id": "tracer-snowboarding",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-snowboarding.png",
              "ornamentID": "tracer-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
            },
            {
              "hero": "Tracer",
              "name": "Ornament",
              "id": "tracer-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png",
              "ornamentID": "tracer-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
            },
            {
              "hero": "Widowmaker",
              "name": "Skiing",
              "id": "widowmaker-skiing",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-skiing.png",
              "ornamentID": "widowmaker-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
            },
            {
              "hero": "Widowmaker",
              "name": "Ornament",
              "id": "widowmaker-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png",
              "ornamentID": "widowmaker-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
            },
            {
              "hero": "Winston",
              "name": "Presents",
              "id": "winston-presents",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-presents.png",
              "ornamentID": "winston-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
            },
            {
              "hero": "Winston",
              "name": "Ornament",
              "id": "winston-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png",
              "ornamentID": "winston-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
            },
            {
              "hero": "Zarya",
              "name": "Matryoshka",
              "id": "zarya-matryoshka",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-matryoshka.png",
              "ornamentID": "zarya-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
            },
            {
              "hero": "Zarya",
              "name": "Ornament",
              "id": "zarya-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png",
              "ornamentID": "zarya-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
            },
            {
              "hero": "Zenyatta",
              "name": "Snowball Fight",
              "id": "zenyatta-snowball-fight",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-snowball-fight.png",
              "ornamentID": "zenyatta-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
            },
            {
              "hero": "Zenyatta",
              "name": "Ornament",
              "id": "zenyatta-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png",
              "ornamentID": "zenyatta-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
            },
            {
              "name": "SnowCree",
              "id": "snowcree",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowcree.png"
            },
            {
              "name": "SnowHog",
              "id": "snowhog",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowhog.png"
            },
            {
              "name": "SnowMei",
              "id": "snowmei",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowmei.png"
            },
            {
              "name": "SnowReaper",
              "id": "snowreaper",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowreaper.png"
            },
            {
              "name": "Winter Wonderland",
              "id": "winter-wonderland",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winter-wonderland.png",
              "quality": "common"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "I'm watching out for you",
              "id": "ana-im-watching-out-for-you",
              "quality": "common"
            },
            {
              "hero": "Bastion",
              "name": "DWEE DOO HOO",
              "id": "bastion-dwee-doo-hoo",
              "quality": "common"
            },
            {
              "hero": "D.Va",
              "name": "Aw, you shouldn't have",
              "id": "dva-aw-you-shouldnt-have",
              "quality": "common"
            },
            {
              "hero": "Genji",
              "name": "Merry Christmas!",
              "id": "genji-merry-christmas",
              "quality": "common"
            },
            {
              "hero": "Hanzo",
              "name": "A gift for you",
              "id": "hanzo-a-gift-for-you",
              "quality": "common"
            },
            {
              "hero": "Junkrat",
              "name": "Merry Christmas",
              "id": "junkrat-merry-christmas",
              "quality": "common"
            },
            {
              "hero": "Lúcio",
              "name": "Happy holidays!",
              "id": "lucio-happy-holidays",
              "quality": "common"
            },
            {
              "hero": "McCree",
              "name": "Had to break the ice",
              "id": "mccree-had-to-break-the-ice",
              "quality": "common"
            },
            {
              "hero": "Mei",
              "name": "I got you something!",
              "id": "mei-i-got-you-something",
              "quality": "common"
            },
            {
              "hero": "Mercy",
              "name": "Your guardian angel",
              "id": "mercy-your-guardian-angel",
              "quality": "common"
            },
            {
              "hero": "Pharah",
              "name": "The forecast",
              "id": "pharah-the-forecast",
              "quality": "common"
            },
            {
              "hero": "Reaper",
              "name": "Holiday spirit",
              "id": "reaper-holiday-spirit",
              "quality": "common"
            },
            {
              "hero": "Reinhardt",
              "name": "You're on my naughty list",
              "id": "reinhardt-youre-on-my-naughty-list",
              "quality": "common"
            },
            {
              "hero": "Roadhog",
              "name": "Ho ho ho",
              "id": "roadhog-ho-ho-ho",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76",
              "name": "Stay frosty",
              "id": "soldier-76-stay-frosty",
              "quality": "common"
            },
            {
              "hero": "Sombra",
              "name": "I know who's been naughty",
              "id": "sombra-i-know-whos-been-naughty",
              "quality": "common"
            },
            {
              "hero": "Symmetra",
              "name": "I made you something",
              "id": "symmetra-i-made-you-something",
              "quality": "common"
            },
            {
              "hero": "Torbjörn",
              "name": "Made to order",
              "id": "torbjorn-made-to-order",
              "quality": "common"
            },
            {
              "hero": "Tracer",
              "name": "It's in the bag",
              "id": "tracer-its-in-the-bag",
              "quality": "common"
            },
            {
              "hero": "Widowmaker",
              "name": "Exquisite",
              "id": "widowmaker-exquisite",
              "quality": "common"
            },
            {
              "hero": "Winston",
              "name": "I... got you something",
              "id": "winston-i-got-you-something",
              "quality": "common"
            },
            {
              "hero": "Zarya",
              "name": "For the Motherland",
              "id": "zarya-for-the-motherland",
              "quality": "common"
            },
            {
              "hero": "Zenyatta",
              "name": "No snowflake",
              "id": "zenyatta-no-snowflake",
              "quality": "common"
            }
          ],
          "poses": [
            {
              "hero": "Ana",
              "name": "Toast",
              "id": "ana-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/ana-toast.jpg"
            },
            {
              "hero": "D.Va",
              "name": "Festive",
              "id": "dva-festive",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/dva-festive.jpg"
            },
            {
              "hero": "Mercy",
              "name": "Mistletoe",
              "id": "mercy-mistletoe",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/mercy-mistletoe.jpg"
            },
            {
              "hero": "Pharah",
              "name": "Toast",
              "id": "pharah-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/pharah-toast.jpg"
            },
            {
              "hero": "Reinhardt",
              "name": "Toast",
              "id": "reinhardt-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/reinhardt-toast.jpg"
            },
            {
              "hero": "Soldier: 76",
              "name": "Toast",
              "id": "soldier-76-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/soldier-76-toast.jpg"
            },
            {
              "hero": "Torbjörn",
              "name": "Toast",
              "id": "torbjorn-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/torbjorn-toast.jpg"
            }
          ],
          "skinsEpic": [
            {
              "hero": "Lúcio",
              "name": "Andes",
              "id": "lucio-andes",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/lucio-andes.jpg"
            },
            {
              "hero": "McCree",
              "name": "Scrooge",
              "id": "mccree-scrooge",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/mccree-scrooge.jpg"
            },
            {
              "hero": "Pharah",
              "name": "Frostbite",
              "id": "pharah-frostbite",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/pharah-frostbite.jpg"
            },
            {
              "hero": "Reaper",
              "name": "Shiver",
              "id": "reaper-shiver",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/reaper-shiver.jpg"
            },
            {
              "hero": "Roadhog",
              "name": "Rudolph",
              "id": "roadhog-rudolph",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/roadhog-rudolph.jpg"
            },
            {
              "hero": "Sombra",
              "name": "Peppermint",
              "id": "sombra-peppermint",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/sombra-peppermint.jpg"
            },
            {
              "hero": "Zarya",
              "name": "Frosted",
              "id": "zarya-frosted",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/zarya-frosted.jpg"
            }
          ],
          "emotes": [
            {
              "hero": "McCree",
              "name": "Hat Trick",
              "id": "mccree-hat-trick",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mccree-hat-trick.webm"
            },
            {
              "hero": "Mei",
              "name": "Snowman",
              "id": "mei-snowman",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mei-snowman.webm"
            },
            {
              "hero": "Zarya",
              "legendary": true,
              "name": "Mystery Gift",
              "id": "zarya-mystery-gift",
              "quality": "legendary",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/zarya-mystery-gift.webm"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "Mei",
              "name": "Mei-rry",
              "id": "mei-meirry",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/mei-meirry.jpg"
            },
            {
              "hero": "Torbjörn",
              "name": "Santaclad",
              "id": "torbjorn-santaclad",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/torbjorn-santaclad.jpg"
            },
            {
              "hero": "Tracer",
              "name": "Jingle",
              "id": "tracer-jingle",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/tracer-jingle.jpg"
            },
            {
              "hero": "Winston",
              "name": "Yeti",
              "id": "winston-yeti",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/winston-yeti.jpg"
            },
            {
              "hero": "Zenyatta",
              "name": "Nutcracker",
              "id": "zenyatta-nutcracker",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/zenyatta-nutcracker.jpg"
            }
          ],
          "intros": [
            {
              "hero": "Symmetra",
              "name": "Snowflakes",
              "id": "symmetra-snowflakes",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/symmetra-snowflakes.webm"
            },
            {
              "hero": "Widowmaker",
              "name": "Under the Mistletoe",
              "id": "widowmaker-under-the-mistletoe",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/widowmaker-under-the-mistletoe.webm"
            }
          ],
          "icons": [
            {
              "name": "2017",
              "id": "2017",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/2017.png"
            },
            {
              "name": "Bells",
              "id": "bells",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bells.png"
            },
            {
              "name": "Bubbly",
              "id": "bubbly",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bubbly.png"
            },
            {
              "name": "Candy Cane",
              "id": "candy-cane",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/candy-cane.png"
            },
            {
              "name": "Cheers!",
              "id": "cheers",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/cheers.png"
            },
            {
              "name": "Dreidel",
              "id": "dreidel",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/dreidel.png"
            },
            {
              "name": "Gingerbread",
              "id": "gingerbread",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingerbread.png"
            },
            {
              "name": "Gingermari",
              "id": "gingermari",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingermari.png"
            },
            {
              "name": "Holly",
              "id": "holly",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/holly.png"
            },
            {
              "name": "Hot Cocoa",
              "id": "hot-cocoa",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/hot-cocoa.png"
            },
            {
              "name": "Jingle",
              "id": "tracer-jingle",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tracer-jingle.png"
            },
            {
              "name": "Mochi",
              "id": "mochi",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/mochi.png"
            },
            {
              "name": "Nutcracker",
              "id": "zenyatta-nutcracker",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/zenyatta-nutcracker.png"
            },
            {
              "name": "Ornament",
              "id": "ornament",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/ornament.png"
            },
            {
              "name": "Pachimerry",
              "id": "pachimerry",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachimerry.png"
            },
            {
              "name": "Pachireindeer",
              "id": "pachireindeer",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachireindeer.png"
            },
            {
              "name": "Peppermint",
              "id": "peppermint",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/peppermint.png"
            },
            {
              "name": "Present",
              "id": "present",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/present.png"
            },
            {
              "name": "Santaclad",
              "id": "torbjorn-santaclad",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/torbjorn-santaclad.png"
            },
            {
              "name": "Snow Globe",
              "id": "snow-globe",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snow-globe.png"
            },
            {
              "name": "Snowman",
              "id": "snowman",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snowman.png"
            },
            {
              "name": "Stocking",
              "id": "stocking",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/stocking.png"
            },
            {
              "name": "Tannenbaum",
              "id": "tannenbaum",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tannenbaum.png"
            },
            {
              "name": "Winter Wonderland",
              "id": "winter-wonderland",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winter-wonderland.png"
            },
            {
              "name": "Wreath",
              "id": "wreath",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/wreath.png"
            },
            {
              "name": "Yeti",
              "id": "winston-yeti",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winston-yeti.png"
            }
          ]
        }
      },
      "YEAR_OF_THE_ROOSTER_2017": {
        "name": "Year of the Rooster 2017",
        "id": "YEAR_OF_THE_ROOSTER_2017",
        "dates": {
          "start": "1485280800000",
          "end": "1487066400000"
        },
        "items": {
          "skinsEpic": [
            {
              "hero": "Ana",
              "name": "Tal",
              "id": "ana-tal",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/ana-tal.jpg"
            },
            {
              "hero": "Bastion",
              "name": "Rooster",
              "id": "bastion-rooster",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/bastion-rooster.jpg"
            },
            {
              "hero": "Junkrat",
              "name": "Firework",
              "id": "junkrat-firework",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/junkrat-firework.jpg"
            },
            {
              "hero": "Mercy",
              "name": "Fortune",
              "id": "mercy-golden",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/mercy-golden.jpg"
            },
            {
              "hero": "Symmetra",
              "name": "Qipao",
              "id": "symmetra-qipao",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/symmetra-qipao.jpg"
            },
            {
              "hero": "Tracer",
              "name": "Rose",
              "id": "tracer-rose",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/tracer-rose.jpg"
            }
          ],
          "sprays": [
            {
              "hero": "Ana",
              "name": "Dance",
              "id": "ana-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dance.png",
              "dragonID": "ana-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png"
            },
            {
              "hero": "Ana",
              "name": "Dragon Dance",
              "id": "ana-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png",
              "dragonID": "ana-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png"
            },
            {
              "hero": "Bastion",
              "name": "Dragon Dance",
              "id": "bastion-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png",
              "dragonID": "bastion-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png"
            },
            {
              "hero": "Bastion",
              "name": "Bast-yum",
              "id": "bastion-bastyum",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-bastyum.png",
              "dragonID": "bastion-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png"
            },
            {
              "hero": "D.Va",
              "name": "Seesaw",
              "id": "dva-seesaw",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-seesaw.png",
              "dragonID": "dva-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png"
            },
            {
              "hero": "D.Va",
              "name": "Dragon Dance",
              "id": "dva-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png",
              "dragonID": "dva-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png"
            },
            {
              "hero": "Genji",
              "name": "Dragon Dance",
              "id": "genji-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png",
              "dragonID": "genji-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png"
            },
            {
              "hero": "Genji",
              "name": "Green Dragon",
              "id": "genji-green-dragon",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-green-dragon.png",
              "dragonID": "genji-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png"
            },
            {
              "hero": "Hanzo",
              "name": "Blue Dragon",
              "id": "hanzo-blue-dragon",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-blue-dragon.png",
              "dragonID": "hanzo-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png"
            },
            {
              "hero": "Hanzo",
              "name": "Dragon Dance",
              "id": "hanzo-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png",
              "dragonID": "hanzo-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png"
            },
            {
              "hero": "Junkrat",
              "name": "Dragon Dance",
              "id": "junkrat-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png",
              "dragonID": "junkrat-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png"
            },
            {
              "hero": "Junkrat",
              "name": "I'm flying!",
              "id": "junkrat-im-flying",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-im-flying.png",
              "dragonID": "junkrat-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png"
            },
            {
              "hero": "Lúcio",
              "name": "Keep Ups",
              "id": "lucio-keep-ups",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-keep-ups.png",
              "dragonID": "lucio-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png"
            },
            {
              "hero": "Lúcio",
              "name": "Dragon Dance",
              "id": "lucio-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png",
              "dragonID": "lucio-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png"
            },
            {
              "hero": "McCree",
              "name": "Call It",
              "id": "mccree-call-it",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-call-it.png",
              "dragonID": "mccree-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png"
            },
            {
              "hero": "McCree",
              "name": "Dragon Dance",
              "id": "mccree-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png",
              "dragonID": "mccree-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png"
            },
            {
              "hero": "Mei",
              "name": "Fortune",
              "id": "mei-fortune",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-fortune.png",
              "dragonID": "mei-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png"
            },
            {
              "hero": "Mei",
              "name": "Dragon Dance",
              "id": "mei-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png",
              "dragonID": "mei-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png"
            },
            {
              "hero": "Mercy",
              "name": "Dragon Dance",
              "id": "mercy-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png",
              "dragonID": "mercy-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png"
            },
            {
              "hero": "Mercy",
              "name": "Parasol",
              "id": "mercy-parasol",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-parasol.png",
              "dragonID": "mercy-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png"
            },
            {
              "hero": "Pharah",
              "name": "Happy New Year",
              "id": "pharah-happy-new-year",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-happy-new-year.png",
              "dragonID": "pharah-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png"
            },
            {
              "hero": "Pharah",
              "name": "Dragon Dance",
              "id": "pharah-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png",
              "dragonID": "pharah-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png"
            },
            {
              "hero": "Reaper",
              "name": "Fire Blossom",
              "id": "reaper-fire-blossom",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-fire-blossom.png",
              "dragonID": "reaper-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png"
            },
            {
              "hero": "Reaper",
              "name": "Dragon Dance",
              "id": "reaper-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png",
              "dragonID": "reaper-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png"
            },
            {
              "hero": "Reinhardt",
              "name": "Lion Dance",
              "id": "reinhardt-lion-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-lion-dance.png",
              "dragonID": "reinhardt-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png"
            },
            {
              "hero": "Reinhardt",
              "name": "Dragon Dance",
              "id": "reinhardt-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png",
              "dragonID": "reinhardt-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png"
            },
            {
              "hero": "Roadhog",
              "name": "Steamed Buns",
              "id": "roadhog-steamed-buns",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-steamed-buns.png",
              "dragonID": "roadhog-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png"
            },
            {
              "hero": "Roadhog",
              "name": "Dragon Dance",
              "id": "roadhog-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png",
              "dragonID": "roadhog-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png"
            },
            {
              "hero": "Soldier: 76",
              "name": "Folded Hands",
              "id": "soldier-76-folded-hands",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-folded-hands.png",
              "dragonID": "soldier-76-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png"
            },
            {
              "hero": "Soldier: 76",
              "name": "Dragon Dance",
              "id": "soldier-76-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png",
              "dragonID": "soldier-76-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png"
            },
            {
              "hero": "Sombra",
              "name": "Dragon Dance",
              "id": "sombra-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png",
              "dragonID": "sombra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png"
            },
            {
              "hero": "Sombra",
              "name": "Fortunate",
              "id": "sombra-fortunate",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-fortunate.png",
              "dragonID": "sombra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png"
            },
            {
              "hero": "Symmetra",
              "name": "Lantern",
              "id": "symmetra-lantern",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-lantern.png",
              "dragonID": "symmetra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png"
            },
            {
              "hero": "Symmetra",
              "name": "Dragon Dance",
              "id": "symmetra-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png",
              "dragonID": "symmetra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png"
            },
            {
              "hero": "Torbjörn",
              "name": "Gold",
              "id": "torbjorn-gold",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-gold.png",
              "dragonID": "torbjorn-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png"
            },
            {
              "hero": "Torbjörn",
              "name": "Dragon Dance",
              "id": "torbjorn-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png",
              "dragonID": "torbjorn-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png"
            },
            {
              "hero": "Tracer",
              "name": "Fan Dance",
              "id": "tracer-fan-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-fan-dance.png",
              "dragonID": "tracer-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png"
            },
            {
              "hero": "Tracer",
              "name": "Dragon Dance",
              "id": "tracer-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png",
              "dragonID": "tracer-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png"
            },
            {
              "hero": "Widowmaker",
              "name": "Hairpin",
              "id": "widowmaker-hairpin",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-hairpin.png",
              "dragonID": "widowmaker-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png"
            },
            {
              "hero": "Widowmaker",
              "name": "Dragon Dance",
              "id": "widowmaker-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png",
              "dragonID": "widowmaker-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png"
            },
            {
              "hero": "Winston",
              "name": "Kite",
              "id": "winston-kite",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-kite.png",
              "dragonID": "winston-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png"
            },
            {
              "hero": "Winston",
              "name": "Dragon Dance",
              "id": "winston-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png",
              "dragonID": "winston-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png"
            },
            {
              "hero": "Zarya",
              "name": "Calories",
              "id": "zarya-calories",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-calories.png",
              "dragonID": "zarya-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png"
            },
            {
              "hero": "Zarya",
              "name": "Dragon Dance",
              "id": "zarya-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png",
              "dragonID": "zarya-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png"
            },
            {
              "hero": "Zenyatta",
              "name": "Yut Nori",
              "id": "zenyatta-yut-nori",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-yut-nori.png",
              "dragonID": "zenyatta-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png"
            },
            {
              "hero": "Zenyatta",
              "name": "Dragon Dance",
              "id": "zenyatta-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png",
              "dragonID": "zenyatta-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png"
            },
            {
              "name": "Auspicious Lion",
              "id": "auspicious-lion",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/auspicious-lion.png"
            },
            {
              "name": "Awakened Lion",
              "id": "awakened-lion",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/awakened-lion.png"
            },
            {
              "name": "Dragon's Head",
              "id": "dragons-head",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dragons-head.png",
              "quality": "common"
            },
            {
              "name": "Lucky Pouch",
              "id": "lucky-pouch",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucky-pouch.png",
              "quality": "common"
            },
            {
              "name": "Red Envelope",
              "id": "red-envelope",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/red-envelope.png",
              "quality": "common"
            },
            {
              "name": "Year of the Rooster",
              "id": "year-of-the-rooster",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/year-of-the-rooster.png",
              "quality": "common"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "The moon in winter",
              "id": "ana-the-moon-in-winter",
              "quality": "common"
            },
            {
              "hero": "Bastion",
              "name": "Woop doo woo dun woop",
              "id": "bastion-woop-doo-woo-dun-woop",
              "quality": "common"
            },
            {
              "hero": "D.Va",
              "name": "The best things in life",
              "id": "dva-the-best-things-in-life",
              "quality": "common"
            },
            {
              "hero": "Genji",
              "name": "To know yourself",
              "id": "genji-to-know-yourself",
              "quality": "common"
            },
            {
              "hero": "Hanzo",
              "name": "When the moon is full",
              "id": "hanzo-when-the-moon-is-full",
              "quality": "common"
            },
            {
              "hero": "Junkrat",
              "name": "Gong Xi Fa Cai",
              "id": "junkrat-gong-xi-fa-cai",
              "quality": "common"
            },
            {
              "hero": "Lúcio",
              "name": "I make this look good...",
              "id": "lucio-i-make-this-look-good",
              "quality": "common"
            },
            {
              "hero": "McCree",
              "name": "Calls for a celebration",
              "id": "mccree-calls-for-a-celebration",
              "quality": "common"
            },
            {
              "hero": "Mei",
              "name": "Wishing you prosperity",
              "id": "mei-wishing-you-prosperity",
              "quality": "common"
            },
            {
              "hero": "Mercy",
              "name": "A most impressive display",
              "id": "mercy-a-most-impressive-display",
              "quality": "common"
            },
            {
              "hero": "Pharah",
              "name": "I keep the peace",
              "id": "pharah-i-keep-the-peace",
              "quality": "common"
            },
            {
              "hero": "Reaper",
              "name": "Now those are fireworks",
              "id": "reaper-now-those-are-fireworks",
              "quality": "common"
            },
            {
              "hero": "Reinhardt",
              "name": "Are you chicken?",
              "id": "reinhardt-are-you-chicken",
              "quality": "common"
            },
            {
              "hero": "Roadhog",
              "name": "You chicken?",
              "id": "roadhog-you-chicken",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76",
              "name": "The rooster crows",
              "id": "soldier-76-the-rooster-crows",
              "quality": "common"
            },
            {
              "hero": "Sombra",
              "name": "You're easily impressed",
              "id": "sombra-youre-easily-impressed",
              "quality": "common"
            },
            {
              "hero": "Symmetra",
              "name": "Good fortune",
              "id": "symmetra-good-fortune",
              "quality": "common"
            },
            {
              "hero": "Torbjörn",
              "name": "Too hot for you?",
              "id": "torbjorn-too-hot-for-you",
              "quality": "common"
            },
            {
              "hero": "Tracer",
              "name": "Ready for some fireworks?",
              "id": "tracer-ready-for-some-fireworks",
              "quality": "common"
            },
            {
              "hero": "Widowmaker",
              "name": "You have my attention",
              "id": "widowmaker-you-have-my-attention",
              "quality": "common"
            },
            {
              "hero": "Winston",
              "name": "That was awesome!",
              "id": "winston-that-was-awesome",
              "quality": "common"
            },
            {
              "hero": "Zarya",
              "name": "Get pumped",
              "id": "zarya-get-pumped",
              "quality": "common"
            },
            {
              "hero": "Zenyatta",
              "name": "Every rooster crows",
              "id": "zenyatta-every-rooster-crows",
              "quality": "common"
            }
          ],
          "poses": [
            {
              "hero": "Ana",
              "name": "Folded hands",
              "id": "ana-folded-hands",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/ana-folded-hands.jpg"
            },
            {
              "hero": "Bastion",
              "name": "Firework",
              "id": "bastion-firework",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/bastion-firework.jpg"
            },
            {
              "hero": "D.Va",
              "name": "Lucky Pouch",
              "id": "dva-lucky-pouch",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/dva-lucky-pouch.jpg"
            },
            {
              "hero": "Junkrat",
              "name": "Bad for Your Health",
              "id": "junkrat-bad-for-your-health",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/junkrat-bad-for-your-health.jpg"
            },
            {
              "hero": "Mei",
              "name": "Lucky!",
              "id": "mei-lucky",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/mei-lucky.jpg"
            },
            {
              "hero": "Roadhog",
              "name": "What's mine is mine",
              "id": "roadhog-whats-mine-is-mine",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/roadhog-whats-mine-is-mine.jpg"
            },
            {
              "hero": "Sombra",
              "name": "Sparklers",
              "id": "sombra-sparklers",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/sombra-sparklers.jpg"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "D.Va",
              "name": "Palanquin",
              "id": "dva-palanquin",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/dva-palanquin.jpg"
            },
            {
              "hero": "Mei",
              "name": "Chang'e",
              "id": "mei-change",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/mei-change.jpg"
            },
            {
              "hero": "Mei",
              "name": "Luna",
              "id": "mei-luna",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/mei-luna.jpg"
            },
            {
              "hero": "Reinhardt",
              "name": "Wujing",
              "id": "reinhardt-wujing",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/reinhardt-wujing.jpg"
            },
            {
              "hero": "Roadhog",
              "name": "Bajie",
              "id": "roadhog-bajie",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/roadhog-bajie.jpg"
            },
            {
              "hero": "Winston",
              "name": "Wukong",
              "id": "winston-wukong",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/winston-wukong.jpg"
            },
            {
              "hero": "Zenyatta",
              "name": "Sanzang",
              "id": "zenyatta-sanzang",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/zenyatta-sanzang.jpg"
            }
          ],
          "emotes": [
            {
              "hero": "D.Va",
              "name": "Bow",
              "id": "dva-bow",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/dva-bow.webm"
            },
            {
              "hero": "Junkrat",
              "name": "Dud?",
              "id": "junkrat-dud",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/junkrat-dud.webm"
            },
            {
              "hero": "Mei",
              "name": "So Excited",
              "id": "mei-so-excited",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/mei-so-excited.webm"
            }
          ],
          "icons": [
            {
              "name": "Bokimari",
              "id": "bokimari",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/bokimari.png"
            },
            {
              "name": "Chang'e",
              "id": "mei-change",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/mei-change.png"
            },
            {
              "name": "Coin",
              "id": "coin",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/coin.png"
            },
            {
              "name": "Dragon Dance",
              "id": "dragon-dance",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/dragon-dance.png"
            },
            {
              "name": "Fortune",
              "id": "fortune",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/fortune.png"
            },
            {
              "name": "Fuchimari",
              "id": "fuchimari",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/fuchimari.png"
            },
            {
              "name": "Gold",
              "id": "gold",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/gold.png"
            },
            {
              "name": "Hanbok",
              "id": "dva-hanbok",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/dva-hanbok.png"
            },
            {
              "name": "Have Fish",
              "id": "have-fish",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/have-fish.png"
            },
            {
              "name": "Lantern",
              "id": "lantern",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lantern.png"
            },
            {
              "name": "Lion Dance",
              "id": "lion-dance",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lion-dance.png"
            },
            {
              "name": "Lucky Pouch",
              "id": "lucky-pouch",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lucky-pouch.png"
            },
            {
              "name": "Lunamari",
              "id": "lunamari",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lunamari.png"
            },
            {
              "name": "Monkey",
              "id": "winston-monkey",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/winston-monkey.png"
            },
            {
              "name": "New Year Cake",
              "id": "new-year-cake",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/new-year-cake.png"
            },
            {
              "name": "Pachilantern",
              "id": "pachilantern",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/pachilantern.png"
            },
            {
              "name": "Pigsy",
              "id": "roadhog-piggy",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/roadhog-piggy.png"
            },
            {
              "name": "Red Envelope",
              "id": "red-envelope",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/red-envelope.png"
            },
            {
              "name": "Sandy",
              "id": "reinhardt-sandy",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/reinhardt-sandy.png"
            },
            {
              "name": "Sanzang",
              "id": "zenyatta-sanzang",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/zenyatta-sanzang.png"
            },
            {
              "name": "Seollal",
              "id": "seollal",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/seollal.png"
            },
            {
              "name": "Tangerines",
              "id": "tangerines",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/tangerines.png"
            },
            {
              "name": "Year of the Rooster",
              "id": "year-of-the-rooster",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/year-of-the-rooster.png"
            }
          ],
          "intros": [
            {
              "hero": "Mercy",
              "name": "Fortune",
              "id": "mercy-fortune",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/mercy-fortune.webm"
            },
            {
              "hero": "Roadhog",
              "name": "Feast",
              "id": "roadhog-feast",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/roadhog-feast.webm"
            },
            {
              "hero": "Tracer",
              "name": "Lion Dance",
              "id": "tracer-lion-dance",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/tracer-lion-dance.webm"
            }
          ]
        }
      }
    },
    heroes: {
      "all": {
        "icons": [
          {
            "name": "...Never Die",
            "id": "never-die"
          },
          {
            "name": "16-Bit Hero",
            "id": "16bit-hero"
          },
          {
            "name": "2017",
            "id": "2017"
          },
          {
            "name": "Anubis",
            "id": "anubis"
          },
          {
            "name": "Australia",
            "id": "australia"
          },
          {
            "name": "Bao",
            "id": "bao"
          },
          {
            "name": "Barbarian",
            "id": "barbarian"
          },
          {
            "name": "Bells",
            "id": "bells"
          },
          {
            "name": "Bewitching",
            "id": "bewitching"
          },
          {
            "name": "Bokimari",
            "id": "bokimari"
          },
          {
            "name": "Brazil",
            "id": "brazil"
          },
          {
            "name": "Bubbly",
            "id": "bubbly"
          },
          {
            "name": "Calavera",
            "id": "calavera"
          },
          {
            "name": "Candle",
            "id": "candle"
          },
          {
            "name": "Candy Cane",
            "id": "candy-cane"
          },
          {
            "name": "Capsule",
            "id": "capsule"
          },
          {
            "name": "Cheers!",
            "id": "cheers"
          },
          {
            "name": "Cheers",
            "id": "cheers"
          },
          {
            "name": "China",
            "id": "china"
          },
          {
            "name": "Coin",
            "id": "coin"
          },
          {
            "name": "Colossus",
            "id": "colossus"
          },
          {
            "name": "Credit",
            "id": "credit"
          },
          {
            "name": "Crusader",
            "id": "crusader"
          },
          {
            "name": "Dark Lady",
            "id": "dark-lady"
          },
          {
            "name": "Dark Wanderer",
            "id": "dark-wanderer"
          },
          {
            "name": "Demolition",
            "id": "demolition"
          },
          {
            "name": "Demon Hunter",
            "id": "demon-hunter"
          },
          {
            "name": "Dominion",
            "id": "dominion"
          },
          {
            "name": "Dragon Dance",
            "id": "dragon-dance"
          },
          {
            "name": "Dreidel",
            "id": "dreidel"
          },
          {
            "name": "Egypt",
            "id": "egypt"
          },
          {
            "name": "Elephant",
            "id": "elephant"
          },
          {
            "name": "Eyeball",
            "id": "eyeball"
          },
          {
            "name": "For the Alliance",
            "id": "for-the-alliance"
          },
          {
            "name": "For the Horde",
            "id": "for-the-horde"
          },
          {
            "name": "Fortune",
            "id": "fortune"
          },
          {
            "name": "France",
            "id": "france"
          },
          {
            "name": "From Beyond the Moon",
            "id": "from-beyond-the-moon"
          },
          {
            "name": "Fuchimari",
            "id": "fuchimari"
          },
          {
            "name": "Garrosh",
            "id": "garrosh"
          },
          {
            "name": "Germany",
            "id": "germany"
          },
          {
            "name": "Ghostymari",
            "id": "ghostymari"
          },
          {
            "name": "Gingerbread",
            "id": "gingerbread"
          },
          {
            "name": "Gingermari",
            "id": "gingermari"
          },
          {
            "name": "Gold",
            "id": "gold"
          },
          {
            "name": "Greece",
            "id": "greece"
          },
          {
            "name": "Halloween Terror 2016",
            "id": "halloween-terror-2016"
          },
          {
            "name": "Happy Squid",
            "id": "happy-squid"
          },
          {
            "name": "Have Fish",
            "id": "have-fish"
          },
          {
            "name": "Hearthstone",
            "id": "hearthstone"
          },
          {
            "name": "Hierarch",
            "id": "hierarch"
          },
          {
            "name": "Holly",
            "id": "holly"
          },
          {
            "name": "Hot Cocoa",
            "id": "hot-cocoa"
          },
          {
            "name": "Jaina",
            "id": "jaina"
          },
          {
            "name": "Japan",
            "id": "japan"
          },
          {
            "name": "Jim",
            "id": "jim"
          },
          {
            "name": "Kọfị Aromo",
            "id": "kf-aromo"
          },
          {
            "name": "Lantern",
            "id": "lantern"
          },
          {
            "name": "Lich King",
            "id": "lich-king"
          },
          {
            "name": "Lion Dance",
            "id": "lion-dance"
          },
          {
            "name": "Loot Box",
            "id": "loot-box"
          },
          {
            "name": "Lord of Candy",
            "id": "lord-of-candy"
          },
          {
            "name": "Lord of Terror",
            "id": "lord-of-terror"
          },
          {
            "name": "Los Muertos",
            "id": "los-muertos"
          },
          {
            "name": "Lucky Pouch",
            "id": "lucky-pouch"
          },
          {
            "name": "Lunamari",
            "id": "lunamari"
          },
          {
            "name": "Mama Pig's",
            "id": "mama-pigs"
          },
          {
            "name": "Mariachi",
            "id": "mariachi"
          },
          {
            "name": "Mech",
            "id": "mech"
          },
          {
            "name": "Mexico",
            "id": "mexico"
          },
          {
            "name": "Mochi",
            "id": "mochi"
          },
          {
            "name": "Monk",
            "id": "monk"
          },
          {
            "name": "Nepal",
            "id": "nepal"
          },
          {
            "name": "New Year Cake",
            "id": "new-year-cake"
          },
          {
            "name": "Nexus",
            "id": "nexus"
          },
          {
            "name": "Numbani",
            "id": "numbani"
          },
          {
            "name": "Oni",
            "id": "oni"
          },
          {
            "name": "Ornament",
            "id": "ornament"
          },
          {
            "name": "Overwatch Dark",
            "id": "overwatch-dark"
          },
          {
            "name": "Overwatch Light",
            "id": "overwatch-light"
          },
          {
            "name": "Pachilantern",
            "id": "pachilantern"
          },
          {
            "name": "Pachimari",
            "id": "pachimari"
          },
          {
            "name": "Pachimerry",
            "id": "pachimerry"
          },
          {
            "name": "Pachireindeer",
            "id": "pachireindeer"
          },
          {
            "name": "Peppermint",
            "id": "peppermint"
          },
          {
            "name": "Pharaoh",
            "id": "pharaoh"
          },
          {
            "name": "Present",
            "id": "present"
          },
          {
            "name": "Protoss",
            "id": "protoss"
          },
          {
            "name": "Queen of Blades",
            "id": "queen-of-blades"
          },
          {
            "name": "Ramen",
            "id": "ramen"
          },
          {
            "name": "Red Envelope",
            "id": "red-envelope"
          },
          {
            "name": "Rhino",
            "id": "rhino"
          },
          {
            "name": "Rikimaru",
            "id": "rikimaru"
          },
          {
            "name": "Route 66",
            "id": "route-66"
          },
          {
            "name": "Russia",
            "id": "russia"
          },
          {
            "name": "Sakura",
            "id": "sakura"
          },
          {
            "name": "Scooter",
            "id": "scooter"
          },
          {
            "name": "Season 1 Competitor",
            "id": "season-1-competitor"
          },
          {
            "name": "Season 1 Hero",
            "id": "season-1-hero"
          },
          {
            "name": "Season 2 Competitor",
            "id": "season-2-competitor"
          },
          {
            "name": "Season 2 Hero",
            "id": "season-2-hero"
          },
          {
            "name": "Season 3 Competitor",
            "id": "season-3-competitor"
          },
          {
            "name": "Season 3 Hero",
            "id": "season-3-hero"
          },
          {
            "name": "Seollal",
            "id": "seollal"
          },
          {
            "name": "Siege Mode",
            "id": "siege-mode"
          },
          {
            "name": "Six-Gun Killer",
            "id": "sixgun-killer"
          },
          {
            "name": "Snow Globe",
            "id": "snow-globe"
          },
          {
            "name": "Snowman",
            "id": "snowman"
          },
          {
            "name": "South Korea",
            "id": "south-korea"
          },
          {
            "name": "Spider",
            "id": "spider"
          },
          {
            "name": "Stocking",
            "id": "stocking"
          },
          {
            "name": "Summer Games 2016",
            "id": "summer-games-2016"
          },
          {
            "name": "Superstition",
            "id": "superstition"
          },
          {
            "name": "Svyatogor",
            "id": "svyatogor"
          },
          {
            "name": "Sweden",
            "id": "sweden"
          },
          {
            "name": "Switzerland",
            "id": "switzerland"
          },
          {
            "name": "Tangerines",
            "id": "tangerines"
          },
          {
            "name": "Tannenbaum",
            "id": "tannenbaum"
          },
          {
            "name": "Terran",
            "id": "terran"
          },
          {
            "name": "Tombstone",
            "id": "tombstone"
          },
          {
            "name": "Top 500",
            "id": "top-500"
          },
          {
            "name": "Totem",
            "id": "totem"
          },
          {
            "name": "Training Bot",
            "id": "training-bot"
          },
          {
            "name": "United Kingdom",
            "id": "united-kingdom"
          },
          {
            "name": "United States of America",
            "id": "united-states-of-america"
          },
          {
            "name": "Vampachimari",
            "id": "vampachimari"
          },
          {
            "name": "Varian",
            "id": "varian"
          },
          {
            "name": "Vivi",
            "id": "vivi"
          },
          {
            "name": "Winter Wonderland 2016",
            "id": "winter-wonderland-2016"
          },
          {
            "name": "Witch Doctor",
            "id": "witch-doctor"
          },
          {
            "name": "Witch's Brew",
            "id": "witchs-brew"
          },
          {
            "name": "Witch's Hat",
            "id": "witchs-hat"
          },
          {
            "name": "Wizard",
            "id": "wizard"
          },
          {
            "name": "Wolf",
            "id": "wolf"
          },
          {
            "name": "Wreath",
            "id": "wreath"
          },
          {
            "name": "Year of the Rooster 2017",
            "id": "year-of-the-rooster-2017"
          },
          {
            "name": "You are not prepared",
            "id": "you-are-not-prepared"
          },
          {
            "name": "Zerg",
            "id": "zerg"
          }
        ],
        "sprays": [
          {
            "name": "...Never Die",
            "id": "never-die"
          },
          {
            "name": "...Punch",
            "id": "punch"
          },
          {
            "name": "Auspicious Lion",
            "id": "auspicious-lion"
          },
          {
            "name": "Awakened Lion",
            "id": "awakened-lion"
          },
          {
            "name": "Barbarian",
            "id": "barbarian"
          },
          {
            "name": "Bats",
            "id": "bats"
          },
          {
            "name": "Beyond the Moon",
            "id": "beyond-the-moon"
          },
          {
            "name": "Boo!",
            "id": "boo"
          },
          {
            "name": "Boop!",
            "id": "boop"
          },
          {
            "name": "Candyball",
            "id": "candyball"
          },
          {
            "name": "Catcher",
            "id": "catcher"
          },
          {
            "name": "Caution",
            "id": "caution"
          },
          {
            "name": "Crusader",
            "id": "crusader"
          },
          {
            "name": "Dance",
            "id": "dance"
          },
          {
            "name": "Dark Logo",
            "id": "dark-logo"
          },
          {
            "name": "Dark Overwatch",
            "id": "dark-overwatch"
          },
          {
            "name": "Dark Title",
            "id": "dark-title"
          },
          {
            "name": "Demon Hunter",
            "id": "demon-hunter"
          },
          {
            "name": "Dragon's Head",
            "id": "dragons-head"
          },
          {
            "name": "Día de los Muertos",
            "id": "da-de-los-muertos"
          },
          {
            "name": "Fangs",
            "id": "fangs"
          },
          {
            "name": "Forge Onward",
            "id": "forge-onward"
          },
          {
            "name": "FotS2",
            "id": "fots2"
          },
          {
            "name": "Fuji",
            "id": "fuji"
          },
          {
            "name": "GL HF",
            "id": "gl-hf"
          },
          {
            "name": "Goldshire Pictures",
            "id": "goldshire-pictures"
          },
          {
            "name": "Gummy Hog",
            "id": "gummy-hog"
          },
          {
            "name": "Halloween Special",
            "id": "halloween-special"
          },
          {
            "name": "Halloween Terror",
            "id": "halloween-terror"
          },
          {
            "name": "Jail",
            "id": "jail"
          },
          {
            "name": "Junkenstein's Revenge",
            "id": "junkensteins-revenge"
          },
          {
            "name": "Leek",
            "id": "leek"
          },
          {
            "name": "Logo",
            "id": "logo"
          },
          {
            "name": "Lucky Pouch",
            "id": "lucky-pouch"
          },
          {
            "name": "Lumérico",
            "id": "lumrico"
          },
          {
            "name": "Man and Omnic",
            "id": "man-and-omnic"
          },
          {
            "name": "Monk",
            "id": "monk"
          },
          {
            "name": "Numbani Statue",
            "id": "numbani-statue"
          },
          {
            "name": "Omnic Rights",
            "id": "omnic-rights"
          },
          {
            "name": "Oops",
            "id": "oops"
          },
          {
            "name": "Out of My Way",
            "id": "out-of-my-way"
          },
          {
            "name": "Overwatch Title",
            "id": "overwatch-title"
          },
          {
            "name": "Overwatch",
            "id": "overwatch"
          },
          {
            "name": "Pachimari",
            "id": "pachimari"
          },
          {
            "name": "Piñata",
            "id": "piata"
          },
          {
            "name": "Pumpkins",
            "id": "pumpkins"
          },
          {
            "name": "Red Envelope",
            "id": "red-envelope"
          },
          {
            "name": "Red O",
            "id": "red-o"
          },
          {
            "name": "Red X",
            "id": "red-x"
          },
          {
            "name": "Respect",
            "id": "respect"
          },
          {
            "name": "Rhino",
            "id": "rhino"
          },
          {
            "name": "Rikimaru",
            "id": "rikimaru"
          },
          {
            "name": "Rise of the Zomnics",
            "id": "rise-of-the-zomnics"
          },
          {
            "name": "Rise",
            "id": "rise"
          },
          {
            "name": "Sarcophagus",
            "id": "sarcophagus"
          },
          {
            "name": "Scooter",
            "id": "scooter"
          },
          {
            "name": "Scroll",
            "id": "scroll"
          },
          {
            "name": "Season 1 Competitor",
            "id": "season-1-competitor"
          },
          {
            "name": "Season 2 Competitor",
            "id": "season-2-competitor"
          },
          {
            "name": "Season 3 Competitor",
            "id": "season-3-competitor"
          },
          {
            "name": "Siege Mode",
            "id": "siege-mode"
          },
          {
            "name": "Six-Gun Killer",
            "id": "sixgun-killer"
          },
          {
            "name": "Snowcer",
            "id": "snowcer"
          },
          {
            "name": "Snowcree",
            "id": "snowcree"
          },
          {
            "name": "Snowhog",
            "id": "snowhog"
          },
          {
            "name": "Snowmei",
            "id": "snowmei"
          },
          {
            "name": "Snowreaper",
            "id": "snowreaper"
          },
          {
            "name": "Snowscientist",
            "id": "snowscientist"
          },
          {
            "name": "Sol",
            "id": "sol"
          },
          {
            "name": "Sorry",
            "id": "sorry"
          },
          {
            "name": "Soulstone",
            "id": "soulstone"
          },
          {
            "name": "Summer Games 2016",
            "id": "summer-games-2016"
          },
          {
            "name": "Tea Time",
            "id": "tea-time"
          },
          {
            "name": "Thanks",
            "id": "thanks"
          },
          {
            "name": "The Reapening",
            "id": "the-reapening"
          },
          {
            "name": "Victory",
            "id": "victory"
          },
          {
            "name": "Vivi's Adventure",
            "id": "vivis-adventure"
          },
          {
            "name": "Well Played",
            "id": "well-played"
          },
          {
            "name": "Winter Wonderland",
            "id": "winter-wonderland"
          },
          {
            "name": "Witch Doctor",
            "id": "witch-doctor"
          },
          {
            "name": "Witch's Brew",
            "id": "witchs-brew"
          },
          {
            "name": "Wizard",
            "id": "wizard"
          },
          {
            "name": "Year of the Rooster",
            "id": "year-of-the-rooster"
          },
          {
            "name": "You are not prepared!",
            "id": "you-are-not-prepared"
          }
        ]
      },
      "ana": {
        "name": "Ana",
        "class": "Support",
        "id": "ana",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "ana-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Turquoise",
              "id": "ana-turquoise",
              "quality": "rare"
            },
            {
              "name": "Citrine",
              "id": "ana-citrine",
              "quality": "rare"
            },
            {
              "name": "Garnet",
              "id": "ana-garnet",
              "quality": "rare"
            },
            {
              "name": "Peridot",
              "id": "ana-peridot",
              "quality": "rare"
            },
            {
              "name": "Merciful",
              "id": "ana-merciful",
              "quality": "epic"
            },
            {
              "name": "Shrike",
              "id": "ana-shrike",
              "quality": "epic"
            },
            {
              "name": "Wasteland",
              "id": "ana-wasteland",
              "quality": "legendary"
            },
            {
              "name": "Wadjet",
              "id": "ana-wadjet",
              "quality": "legendary"
            },
            {
              "name": "Captain Amari",
              "id": "ana-captain-amari",
              "quality": "legendary"
            },
            {
              "name": "Horus",
              "id": "ana-horus",
              "quality": "legendary"
            },
            {
              "name": "Ghoul",
              "id": "ana-ghoul",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Tal",
              "id": "ana-tal",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "ana-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Protector",
              "id": "ana-protector",
              "quality": "epic"
            },
            {
              "name": "Tea Time",
              "id": "ana-tea-time",
              "quality": "epic"
            },
            {
              "name": "Disapproving",
              "id": "ana-disapproving",
              "quality": "epic"
            },
            {
              "name": "Not impressed",
              "id": "ana-not-impressed",
              "quality": "epic"
            },
            {
              "name": "Take a Knee",
              "id": "ana-take-a-knee",
              "quality": "epic"
            },
            {
              "name": "Candy",
              "id": "ana-candy",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "ana-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Shh...",
              "id": "ana-shh",
              "quality": "epic"
            },
            {
              "name": "Locked On",
              "id": "ana-locked-on",
              "quality": "epic"
            },
            {
              "name": "Guardian",
              "id": "ana-guardian",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Ana",
              "id": "ana-ana",
              "quality": "rare"
            },
            {
              "name": "Wedjat",
              "id": "ana-wedjat",
              "quality": "rare"
            },
            {
              "name": "Watcher",
              "id": "ana-watcher",
              "quality": "rare"
            },
            {
              "name": "Shooting",
              "id": "ana-shooting",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "ana-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "ana-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Old Soldier",
              "id": "ana-old-soldier",
              "quality": "common"
            },
            {
              "name": "Ana",
              "id": "ana-ana",
              "quality": "common"
            },
            {
              "name": "Action",
              "id": "ana-action",
              "quality": "common"
            },
            {
              "name": "Wedjat",
              "id": "ana-wedjat",
              "quality": "common"
            },
            {
              "name": "Cracked",
              "id": "ana-cracked",
              "quality": "common"
            },
            {
              "name": "Rifle",
              "id": "ana-rifle",
              "quality": "common"
            },
            {
              "name": "Wrist Launcher",
              "id": "ana-wrist-launcher",
              "quality": "common"
            },
            {
              "name": "Gaze",
              "id": "ana-gaze",
              "quality": "common"
            },
            {
              "name": "Eyepatch",
              "id": "ana-eyepatch",
              "quality": "common"
            },
            {
              "name": "Overhead",
              "id": "ana-overhead",
              "quality": "common"
            },
            {
              "name": "Photograph",
              "id": "ana-photograph",
              "quality": "common"
            },
            {
              "name": "Sidearm",
              "id": "ana-sidearm",
              "quality": "common"
            },
            {
              "name": "Guardian",
              "id": "ana-guardian",
              "quality": "common"
            },
            {
              "name": "Hesitation",
              "id": "ana-hesitation",
              "quality": "common"
            },
            {
              "name": "Shadow",
              "id": "ana-shadow",
              "quality": "common"
            },
            {
              "name": "Grenade",
              "id": "ana-grenade",
              "quality": "common"
            },
            {
              "name": "Fareeha",
              "id": "ana-fareeha",
              "quality": "common"
            },
            {
              "name": "Zzz",
              "id": "ana-zzz",
              "quality": "common"
            },
            {
              "name": "Bearer",
              "id": "ana-bearer",
              "quality": "common"
            },
            {
              "name": "Letter",
              "id": "ana-letter",
              "quality": "common"
            },
            {
              "name": "Cheer",
              "id": "ana-cheer",
              "quality": "common"
            },
            {
              "name": "Shhh",
              "id": "ana-shhh",
              "quality": "common"
            },
            {
              "name": "Icon",
              "id": "ana-icon",
              "quality": "common"
            },
            {
              "name": "Shooting",
              "id": "ana-shooting",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "ana-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Warm",
              "id": "ana-warm",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "ana-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Dance",
              "id": "ana-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "ana-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Justice delivered",
              "id": "ana-justice-delivered",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Children, behave",
              "id": "ana-children-behave",
              "quality": "common"
            },
            {
              "name": "What are you thinking?",
              "id": "ana-what-are-you-thinking",
              "quality": "common"
            },
            {
              "name": "Everyone dies",
              "id": "ana-everyone-dies",
              "quality": "common"
            },
            {
              "name": "someone to tuck you in?",
              "id": "ana-someone-to-tuck-you-in",
              "quality": "common"
            },
            {
              "name": "Mother knows best",
              "id": "ana-mother-knows-best",
              "quality": "common"
            },
            {
              "name": "No scope needed",
              "id": "ana-no-scope-needed",
              "quality": "common"
            },
            {
              "name": "Justice rains from above",
              "id": "ana-justice-rains-from-above",
              "quality": "common"
            },
            {
              "name": "Witness me",
              "id": "ana-witness-me",
              "quality": "common"
            },
            {
              "name": "It takes a woman to know",
              "id": "ana-it-takes-a-woman-to-know",
              "quality": "common"
            },
            {
              "name": "You know nothing",
              "id": "ana-you-know-nothing",
              "quality": "common"
            },
            {
              "name": "Learn from the Pain",
              "id": "ana-learn-from-the-pain",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Are you scared?",
              "id": "ana-are-you-scared",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "I'm watching out for you",
              "id": "ana-im-watching-out-for-you",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "The moon in winter",
              "id": "ana-the-moon-in-winter",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "ana-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Protector",
              "id": "ana-protector",
              "quality": "rare"
            },
            {
              "name": "Seated",
              "id": "ana-seated",
              "quality": "rare"
            },
            {
              "name": "Mission Complete",
              "id": "ana-mission-complete",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "ana-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Toast",
              "id": "ana-toast",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Folded hands",
              "id": "ana-folded-hands",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "bastion": {
        "name": "Bastion",
        "class": "Defence",
        "id": "bastion",
        "items": {
          "skins": [
            {
              "name": "Overgrown",
              "id": "bastion-overgrown",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "BlizzCon 2016",
              "id": "bastion-blizzcon-2016",
              "quality": "epic",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "bastion-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Sky",
              "id": "bastion-sky",
              "quality": "rare"
            },
            {
              "name": "Meadow",
              "id": "bastion-meadow",
              "quality": "rare"
            },
            {
              "name": "Dawn",
              "id": "bastion-dawn",
              "quality": "rare"
            },
            {
              "name": "Soot",
              "id": "bastion-soot",
              "quality": "rare"
            },
            {
              "name": "Omnic Crisis",
              "id": "bastion-omnic-crisis",
              "quality": "epic"
            },
            {
              "name": "Defense Matrix",
              "id": "bastion-defense-matrix",
              "quality": "epic"
            },
            {
              "name": "Steambot",
              "id": "bastion-steambot",
              "quality": "legendary"
            },
            {
              "name": "Gearbot",
              "id": "bastion-gearbot",
              "quality": "legendary"
            },
            {
              "name": "Antique",
              "id": "bastion-antique",
              "quality": "legendary"
            },
            {
              "name": "Woodbot",
              "id": "bastion-woodbot",
              "quality": "legendary"
            },
            {
              "name": "Tombstone",
              "id": "bastion-tombstone",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Rooster",
              "id": "bastion-rooster",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "bastion-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Dizzy",
              "id": "bastion-dizzy",
              "quality": "epic"
            },
            {
              "name": "Robot",
              "id": "bastion-robot",
              "quality": "epic"
            },
            {
              "name": "Alert! Alert!",
              "id": "bastion-alert-alert",
              "quality": "epic"
            },
            {
              "name": "Chortle",
              "id": "bastion-chortle",
              "quality": "epic"
            },
            {
              "name": "Rest Mode",
              "id": "bastion-rest-mode",
              "quality": "epic"
            },
            {
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "bastion-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "On Guard",
              "id": "bastion-on-guard",
              "quality": "epic"
            },
            {
              "name": "Ganymede",
              "id": "bastion-ganymede",
              "quality": "epic"
            },
            {
              "name": "Bullet Rain",
              "id": "bastion-bullet-rain",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Bastion",
              "id": "bastion-bastion",
              "quality": "rare"
            },
            {
              "name": "Tank Crossing",
              "id": "bastion-tank-crossing",
              "quality": "rare"
            },
            {
              "name": "Ganymede",
              "id": "bastion-ganymede",
              "quality": "rare"
            },
            {
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "bastion-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "bastion-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "bastion-icon",
              "quality": "common"
            },
            {
              "name": "Fire At Will",
              "id": "bastion-fire-at-will",
              "quality": "common"
            },
            {
              "name": "Giant",
              "id": "bastion-giant",
              "quality": "common"
            },
            {
              "name": "Recovery",
              "id": "bastion-recovery",
              "quality": "common"
            },
            {
              "name": "Ganymede",
              "id": "bastion-ganymede",
              "quality": "common"
            },
            {
              "name": "Omnic",
              "id": "bastion-omnic",
              "quality": "common"
            },
            {
              "name": "Action",
              "id": "bastion-action",
              "quality": "common"
            },
            {
              "name": "Bird",
              "id": "bastion-bird",
              "quality": "common"
            },
            {
              "name": "Birdwatchers",
              "id": "bastion-birdwatchers",
              "quality": "common"
            },
            {
              "name": "Black",
              "id": "bastion-black",
              "quality": "common"
            },
            {
              "name": "Curious",
              "id": "bastion-curious",
              "quality": "common"
            },
            {
              "name": "e54",
              "id": "bastion-e54",
              "quality": "common"
            },
            {
              "name": "Sprout",
              "id": "bastion-sprout",
              "quality": "common"
            },
            {
              "name": "Flower Power",
              "id": "bastion-flower-power",
              "quality": "common"
            },
            {
              "name": "Wood and Stone",
              "id": "bastion-wood-and-stone",
              "quality": "common"
            },
            {
              "name": "Flight",
              "id": "bastion-flight",
              "quality": "common"
            },
            {
              "name": "Blocks",
              "id": "bastion-blocks",
              "quality": "common"
            },
            {
              "name": "Crisis",
              "id": "bastion-crisis",
              "quality": "common"
            },
            {
              "name": "Nest",
              "id": "bastion-nest",
              "quality": "common"
            },
            {
              "name": "In Repair",
              "id": "bastion-in-repair",
              "quality": "common"
            },
            {
              "name": "Overgrown",
              "id": "bastion-overgrown",
              "quality": "common"
            },
            {
              "name": "Cannon",
              "id": "bastion-cannon",
              "quality": "common"
            },
            {
              "name": "Retro",
              "id": "bastion-retro",
              "quality": "common"
            },
            {
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "bastion-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "FESTIVE",
              "id": "bastion-festive",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "ORNAMENT",
              "id": "bastion-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Bast-yum",
              "id": "bastion-bastyum",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "bastion-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Doo-woo",
              "id": "bastion-doowoo",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Sh-sh-sh",
              "id": "bastion-shshsh",
              "quality": "common"
            },
            {
              "name": "Beeple",
              "id": "bastion-beeple",
              "quality": "common"
            },
            {
              "name": "Zwee?",
              "id": "bastion-zwee",
              "quality": "common"
            },
            {
              "name": "Dun dun boop boop",
              "id": "bastion-dun-dun-boop-boop",
              "quality": "common"
            },
            {
              "name": "DAH-DAH WEEEEE!",
              "id": "bastion-dahdah-weeeee",
              "quality": "common"
            },
            {
              "name": "Boo boo doo de doo",
              "id": "bastion-boo-boo-doo-de-doo",
              "quality": "common"
            },
            {
              "name": "Hee hoo hoo",
              "id": "bastion-hee-hoo-hoo",
              "quality": "common"
            },
            {
              "name": "Bweeeeeeeeeee",
              "id": "bastion-bweeeeeeeeeee",
              "quality": "common"
            },
            {
              "name": "Dweet dweet dweet!",
              "id": "bastion-dweet-dweet-dweet",
              "quality": "common"
            },
            {
              "name": "Chirr chirr chirr",
              "id": "bastion-chirr-chirr-chirr",
              "quality": "common"
            },
            {
              "name": "WHOO-VWEEEEEE",
              "id": "bastion-whoovweeeeee",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "W-W-Wooooo...?",
              "id": "bastion-wwwooooo",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "DWEE DOO HOO",
              "id": "bastion-dwee-doo-hoo",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Woop doo woo dun woop",
              "id": "bastion-woop-doo-woo-dun-woop",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "bastion-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Birdwatching",
              "id": "bastion-birdwatching",
              "quality": "rare"
            },
            {
              "name": "Pop Up",
              "id": "bastion-pop-up",
              "quality": "rare"
            },
            {
              "name": "Tank",
              "id": "bastion-tank",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "bastion-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Firework",
              "id": "bastion-firework",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "dva": {
        "name": "D.Va",
        "class": "Tank",
        "id": "dva",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "dva-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Blueberry",
              "id": "dva-blueberry",
              "quality": "rare"
            },
            {
              "name": "Lemon-Lime",
              "id": "dva-lemonlime",
              "quality": "rare"
            },
            {
              "name": "Tangerine",
              "id": "dva-tangerine",
              "quality": "rare"
            },
            {
              "name": "Watermelon",
              "id": "dva-watermelon",
              "quality": "rare"
            },
            {
              "name": "Carbon Fiber",
              "id": "dva-carbon-fiber",
              "quality": "epic"
            },
            {
              "name": "White Rabbit",
              "id": "dva-white-rabbit",
              "quality": "epic"
            },
            {
              "name": "B.Va",
              "id": "dva-bva",
              "quality": "legendary"
            },
            {
              "name": "Junebug",
              "id": "dva-junebug",
              "quality": "legendary"
            },
            {
              "name": "Junker",
              "id": "dva-junker",
              "quality": "legendary"
            },
            {
              "name": "Scavenger",
              "id": "dva-scavenger",
              "quality": "legendary"
            },
            {
              "name": "Taegeukgi",
              "id": "dva-taegeukgi",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Palanquin",
              "id": "dva-palanquin",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "dva-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "heartbreaker",
              "id": "dva-heartbreaker",
              "quality": "epic"
            },
            {
              "name": "Party Time",
              "id": "dva-party-time",
              "quality": "epic"
            },
            {
              "name": "Bunny Hop",
              "id": "dva-bunny-hop",
              "quality": "epic"
            },
            {
              "name": "^o^",
              "id": "dva-o",
              "quality": "epic"
            },
            {
              "name": "Game On",
              "id": "dva-game-on",
              "quality": "legendary"
            },
            {
              "name": "Bow",
              "id": "dva-bow",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "dva-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Eject",
              "id": "dva-eject",
              "quality": "epic"
            },
            {
              "name": "Lying Around",
              "id": "dva-lying-around",
              "quality": "epic"
            },
            {
              "name": "MEKA Activated",
              "id": "dva-meka-activated",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "D.Va",
              "id": "dva-dva",
              "quality": "rare"
            },
            {
              "name": "Bunny",
              "id": "dva-bunny",
              "quality": "rare"
            },
            {
              "name": "Charm",
              "id": "dva-charm",
              "quality": "rare"
            },
            {
              "name": "Cycling",
              "id": "dva-cycling",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Hanbok",
              "id": "dva-hanbok",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "dva-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "dva-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "dva-icon",
              "quality": "common"
            },
            {
              "name": "B.Ny",
              "id": "dva-bny",
              "quality": "common"
            },
            {
              "name": "Diva",
              "id": "dva-diva",
              "quality": "common"
            },
            {
              "name": "Light Gun",
              "id": "dva-light-gun",
              "quality": "common"
            },
            {
              "name": "Hana",
              "id": "dva-hana",
              "quality": "common"
            },
            {
              "name": "Unload",
              "id": "dva-unload",
              "quality": "common"
            },
            {
              "name": "Bunny Hop",
              "id": "dva-bunny-hop",
              "quality": "common"
            },
            {
              "name": "Love D.Va",
              "id": "dva-love-dva",
              "quality": "common"
            },
            {
              "name": "Salt",
              "id": "dva-salt",
              "quality": "common"
            },
            {
              "name": "Walk of Fame",
              "id": "dva-walk-of-fame",
              "quality": "common"
            },
            {
              "name": "Star",
              "id": "dva-star",
              "quality": "common"
            },
            {
              "name": "Watching",
              "id": "dva-watching",
              "quality": "common"
            },
            {
              "name": "Bubble",
              "id": "dva-bubble",
              "quality": "common"
            },
            {
              "name": "Pixel Bunny",
              "id": "dva-pixel-bunny",
              "quality": "common"
            },
            {
              "name": "Headset",
              "id": "dva-headset",
              "quality": "common"
            },
            {
              "name": "Bubble Gum",
              "id": "dva-bubble-gum",
              "quality": "common"
            },
            {
              "name": "Photo",
              "id": "dva-photo",
              "quality": "common"
            },
            {
              "name": "Bang",
              "id": "dva-bang",
              "quality": "common"
            },
            {
              "name": "Nano Cola",
              "id": "dva-nano-cola",
              "quality": "common"
            },
            {
              "name": "MEKA",
              "id": "dva-meka",
              "quality": "common"
            },
            {
              "name": "Power Up!",
              "id": "dva-power-up",
              "quality": "common"
            },
            {
              "name": "GG",
              "id": "dva-gg",
              "quality": "common"
            },
            {
              "name": "Heart",
              "id": "dva-heart",
              "quality": "common"
            },
            {
              "name": "Cycling",
              "id": "dva-cycling",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "dva-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "COOKIE",
              "id": "dva-cookie",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "ORNAMENT",
              "id": "dva-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Seesaw",
              "id": "dva-seesaw",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "dva-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Love, D.Va",
              "id": "dva-love-dva",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "LOL",
              "id": "dva-lol",
              "quality": "common"
            },
            {
              "name": "No hacks required",
              "id": "dva-no-hacks-required",
              "quality": "common"
            },
            {
              "name": "I play to win",
              "id": "dva-i-play-to-win",
              "quality": "common"
            },
            {
              "name": "Aw, yeah!",
              "id": "dva-aw-yeah",
              "quality": "common"
            },
            {
              "name": "AFK",
              "id": "dva-afk",
              "quality": "common"
            },
            {
              "name": "D.Va: 1, bad guys: 0",
              "id": "dva-dva-1-bad-guys-0",
              "quality": "common"
            },
            {
              "name": ";)",
              "id": "dva-winkyface",
              "quality": "common"
            },
            {
              "name": "gg!",
              "id": "dva-gg",
              "quality": "common"
            },
            {
              "name": "Is this easy mode?",
              "id": "dva-is-this-easy-mode",
              "quality": "common"
            },
            {
              "name": "A new challenger!",
              "id": "dva-a-new-challenger",
              "quality": "common"
            },
            {
              "name": "I'm #1",
              "id": "dva-im-1",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Happy Halloween!",
              "id": "dva-happy-halloween",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Aw, you shouldn't have",
              "id": "dva-aw-you-shouldnt-have",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "The best things in life",
              "id": "dva-the-best-things-in-life",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "dva-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "I heart you",
              "id": "dva-i-heart-you",
              "quality": "rare"
            },
            {
              "name": "Peace",
              "id": "dva-peace",
              "quality": "rare"
            },
            {
              "name": "Sitting",
              "id": "dva-sitting",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "dva-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Festive",
              "id": "dva-festive",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Lucky Pouch",
              "id": "dva-lucky-pouch",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "genji": {
        "name": "Genji",
        "class": "Assault",
        "id": "genji",
        "items": {
          "skins": [
            {
              "name": "Oni",
              "id": "genji-oni",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "genji-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Azurite",
              "id": "genji-azurite",
              "quality": "rare"
            },
            {
              "name": "Malachite",
              "id": "genji-malachite",
              "quality": "rare"
            },
            {
              "name": "Ochre",
              "id": "genji-ochre",
              "quality": "rare"
            },
            {
              "name": "Cinnabar",
              "id": "genji-cinnabar",
              "quality": "rare"
            },
            {
              "name": "Carbon Fiber",
              "id": "genji-carbon-fiber",
              "quality": "epic"
            },
            {
              "name": "Chrome",
              "id": "genji-chrome",
              "quality": "epic"
            },
            {
              "name": "Young Genji",
              "id": "genji-young-genji",
              "quality": "legendary"
            },
            {
              "name": "Sparrow",
              "id": "genji-sparrow",
              "quality": "legendary"
            },
            {
              "name": "Bedouin",
              "id": "genji-bedouin",
              "quality": "legendary"
            },
            {
              "name": "Nomad",
              "id": "genji-nomad",
              "quality": "legendary"
            },
            {
              "name": "Nihon",
              "id": "genji-nihon",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "genji-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Cutting Edge",
              "id": "genji-cutting-edge",
              "quality": "epic"
            },
            {
              "name": "Salute",
              "id": "genji-salute",
              "quality": "epic"
            },
            {
              "name": "Challenge",
              "id": "genji-challenge",
              "quality": "epic"
            },
            {
              "name": "Amusing",
              "id": "genji-amusing",
              "quality": "epic"
            },
            {
              "name": "Meditate",
              "id": "genji-meditate",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "genji-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Unsheathing the Sword",
              "id": "genji-unsheathing-the-sword",
              "quality": "epic"
            },
            {
              "name": "Warrior's Salute",
              "id": "genji-warriors-salute",
              "quality": "epic"
            },
            {
              "name": "Shuriken",
              "id": "genji-shuriken",
              "quality": "epic"
            },
            {
              "name": "Pumpkin Carving",
              "id": "genji-pumpkin-carving",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "icons": [
            {
              "name": "Genji",
              "id": "genji-genji",
              "quality": "rare"
            },
            {
              "name": "Nin",
              "id": "genji-nin",
              "quality": "rare"
            },
            {
              "name": "God of War",
              "id": "genji-god-of-war",
              "quality": "rare"
            },
            {
              "name": "Fencing",
              "id": "genji-fencing",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "genji-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "genji-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Oni",
              "id": "genji-oni",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "genji-icon",
              "quality": "common"
            },
            {
              "name": "Nin",
              "id": "genji-nin",
              "quality": "common"
            },
            {
              "name": "God of War",
              "id": "genji-god-of-war",
              "quality": "common"
            },
            {
              "name": "Signature",
              "id": "genji-signature",
              "quality": "common"
            },
            {
              "name": "Ryugekiken",
              "id": "genji-ryugekiken",
              "quality": "common"
            },
            {
              "name": "Kaze no Gotoku",
              "id": "genji-kaze-no-gotoku",
              "quality": "common"
            },
            {
              "name": "Lunge",
              "id": "genji-lunge",
              "quality": "common"
            },
            {
              "name": "Green Ninja",
              "id": "genji-green-ninja",
              "quality": "common"
            },
            {
              "name": "Dragonblade",
              "id": "genji-dragonblade",
              "quality": "common"
            },
            {
              "name": "Shuriken",
              "id": "genji-shuriken",
              "quality": "common"
            },
            {
              "name": "Dragon",
              "id": "genji-dragon",
              "quality": "common"
            },
            {
              "name": "Warrior",
              "id": "genji-warrior",
              "quality": "common"
            },
            {
              "name": "Stoic",
              "id": "genji-stoic",
              "quality": "common"
            },
            {
              "name": "Assassin",
              "id": "genji-assassin",
              "quality": "common"
            },
            {
              "name": "Swords",
              "id": "genji-swords",
              "quality": "common"
            },
            {
              "name": "Draw",
              "id": "genji-draw",
              "quality": "common"
            },
            {
              "name": "Shimada",
              "id": "genji-shimada",
              "quality": "common"
            },
            {
              "name": "Stance",
              "id": "genji-stance",
              "quality": "common"
            },
            {
              "name": "Soul",
              "id": "genji-soul",
              "quality": "common"
            },
            {
              "name": "Fully Loaded",
              "id": "genji-fully-loaded",
              "quality": "common"
            },
            {
              "name": "Onmyodo",
              "id": "genji-onmyodo",
              "quality": "common"
            },
            {
              "name": "Prepared",
              "id": "genji-prepared",
              "quality": "common"
            },
            {
              "name": "Target Practice",
              "id": "genji-target-practice",
              "quality": "common"
            },
            {
              "name": "Fencing",
              "id": "genji-fencing",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "genji-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Kadomatsu",
              "id": "genji-kadomatsu",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "genji-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Green Dragon",
              "id": "genji-green-dragon",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "genji-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "A steady blade",
              "id": "genji-a-steady-blade",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Come on!",
              "id": "genji-come-on",
              "quality": "common"
            },
            {
              "name": "I am prepared!",
              "id": "genji-i-am-prepared",
              "quality": "common"
            },
            {
              "name": "My soul seeks balance",
              "id": "genji-my-soul-seeks-balance",
              "quality": "common"
            },
            {
              "name": "Let's fight!",
              "id": "genji-lets-fight",
              "quality": "common"
            },
            {
              "name": "Yeah!",
              "id": "genji-yeah",
              "quality": "common"
            },
            {
              "name": "Measure twice, cut once",
              "id": "genji-measure-twice-cut-once",
              "quality": "common"
            },
            {
              "name": "You are only human",
              "id": "genji-you-are-only-human",
              "quality": "common"
            },
            {
              "name": "Damn!",
              "id": "genji-damn",
              "quality": "common"
            },
            {
              "name": "Simple",
              "id": "genji-simple",
              "quality": "common"
            },
            {
              "name": "Not good enough",
              "id": "genji-not-good-enough",
              "quality": "common"
            },
            {
              "name": "I was hoping for a challenge",
              "id": "genji-i-was-hoping-for-a-challenge",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "My Halloween costume?",
              "id": "genji-my-halloween-costume",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Merry Christmas!",
              "id": "genji-merry-christmas",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "To know yourself",
              "id": "genji-to-know-yourself",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "genji-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Shuriken",
              "id": "genji-shuriken",
              "quality": "rare"
            },
            {
              "name": "Kneeling",
              "id": "genji-kneeling",
              "quality": "rare"
            },
            {
              "name": "Sword stance",
              "id": "genji-sword-stance",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "genji-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "hanzo": {
        "name": "Hanzo",
        "class": "Defence",
        "id": "hanzo",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "hanzo-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Azuki",
              "id": "hanzo-azuki",
              "quality": "rare"
            },
            {
              "name": "Midori",
              "id": "hanzo-midori",
              "quality": "rare"
            },
            {
              "name": "Kinoko",
              "id": "hanzo-kinoko",
              "quality": "rare"
            },
            {
              "name": "Sora",
              "id": "hanzo-sora",
              "quality": "rare"
            },
            {
              "name": "Cloud",
              "id": "hanzo-cloud",
              "quality": "epic"
            },
            {
              "name": "Dragon",
              "id": "hanzo-dragon",
              "quality": "epic"
            },
            {
              "name": "Young Hanzo",
              "id": "hanzo-young-hanzo",
              "quality": "legendary"
            },
            {
              "name": "Young Master",
              "id": "hanzo-young-master",
              "quality": "legendary"
            },
            {
              "name": "Okami",
              "id": "hanzo-okami",
              "quality": "legendary"
            },
            {
              "name": "Lone Wolf",
              "id": "hanzo-lone-wolf",
              "quality": "legendary"
            },
            {
              "name": "Demon",
              "id": "hanzo-demon",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "hanzo-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Brush shoulder",
              "id": "hanzo-brush-shoulder",
              "quality": "epic"
            },
            {
              "name": "Victory",
              "id": "hanzo-victory",
              "quality": "epic"
            },
            {
              "name": "Beckon",
              "id": "hanzo-beckon",
              "quality": "epic"
            },
            {
              "name": "Chuckle",
              "id": "hanzo-chuckle",
              "quality": "epic"
            },
            {
              "name": "Meditate",
              "id": "hanzo-meditate",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "hanzo-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "My Aim Is True",
              "id": "hanzo-my-aim-is-true",
              "quality": "epic"
            },
            {
              "name": "Superior",
              "id": "hanzo-superior",
              "quality": "epic"
            },
            {
              "name": "Backflip",
              "id": "hanzo-backflip",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Hanzo",
              "id": "hanzo-hanzo",
              "quality": "rare"
            },
            {
              "name": "Storm",
              "id": "hanzo-storm",
              "quality": "rare"
            },
            {
              "name": "Shimada",
              "id": "hanzo-shimada",
              "quality": "rare"
            },
            {
              "name": "Archery",
              "id": "hanzo-archery",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "hanzo-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "hanzo-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "hanzo-icon",
              "quality": "common"
            },
            {
              "name": "Seal",
              "id": "hanzo-seal",
              "quality": "common"
            },
            {
              "name": "Nin",
              "id": "hanzo-nin",
              "quality": "common"
            },
            {
              "name": "Haori",
              "id": "hanzo-haori",
              "quality": "common"
            },
            {
              "name": "Duty",
              "id": "hanzo-duty",
              "quality": "common"
            },
            {
              "name": "Wanderer",
              "id": "hanzo-wanderer",
              "quality": "common"
            },
            {
              "name": "Yellow",
              "id": "hanzo-yellow",
              "quality": "common"
            },
            {
              "name": "Spray",
              "id": "hanzo-spray",
              "quality": "common"
            },
            {
              "name": "Kumo",
              "id": "hanzo-kumo",
              "quality": "common"
            },
            {
              "name": "Archer",
              "id": "hanzo-archer",
              "quality": "common"
            },
            {
              "name": "Dragonstrike",
              "id": "hanzo-dragonstrike",
              "quality": "common"
            },
            {
              "name": "Successor",
              "id": "hanzo-successor",
              "quality": "common"
            },
            {
              "name": "Challenge",
              "id": "hanzo-challenge",
              "quality": "common"
            },
            {
              "name": "Cloud",
              "id": "hanzo-cloud",
              "quality": "common"
            },
            {
              "name": "Kneeling",
              "id": "hanzo-kneeling",
              "quality": "common"
            },
            {
              "name": "Dragons",
              "id": "hanzo-dragons",
              "quality": "common"
            },
            {
              "name": "Scarf",
              "id": "hanzo-scarf",
              "quality": "common"
            },
            {
              "name": "Stoic",
              "id": "hanzo-stoic",
              "quality": "common"
            },
            {
              "name": "Moon",
              "id": "hanzo-moon",
              "quality": "common"
            },
            {
              "name": "Dragon",
              "id": "hanzo-dragon",
              "quality": "common"
            },
            {
              "name": "Sake",
              "id": "hanzo-sake",
              "quality": "common"
            },
            {
              "name": "Tea",
              "id": "hanzo-tea",
              "quality": "common"
            },
            {
              "name": "Drawn",
              "id": "hanzo-drawn",
              "quality": "common"
            },
            {
              "name": "Archery",
              "id": "hanzo-archery",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "hanzo-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Kadomatsu",
              "id": "hanzo-kadomatsu",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "hanzo-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Blue Dragon",
              "id": "hanzo-blue-dragon",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "hanzo-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Expect nothing less",
              "id": "hanzo-expect-nothing-less",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Remember this moment",
              "id": "hanzo-remember-this-moment",
              "quality": "common"
            },
            {
              "name": "Flow like water",
              "id": "hanzo-flow-like-water",
              "quality": "common"
            },
            {
              "name": "Hm...",
              "id": "hanzo-hm",
              "quality": "common"
            },
            {
              "name": "I do what I must",
              "id": "hanzo-i-do-what-i-must",
              "quality": "common"
            },
            {
              "name": "Never second best",
              "id": "hanzo-never-second-best",
              "quality": "common"
            },
            {
              "name": "From one thing...",
              "id": "hanzo-from-one-thing",
              "quality": "common"
            },
            {
              "name": "Sake!",
              "id": "hanzo-sake",
              "quality": "common"
            },
            {
              "name": "Never in doubt",
              "id": "hanzo-never-in-doubt",
              "quality": "common"
            },
            {
              "name": "Spirit dragon",
              "id": "hanzo-spirit-dragon",
              "quality": "common"
            },
            {
              "name": "Step into the dojo",
              "id": "hanzo-step-into-the-dojo",
              "quality": "common"
            },
            {
              "name": "Ignore all distractions",
              "id": "hanzo-ignore-all-distractions",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "You are already dead",
              "id": "hanzo-you-are-already-dead",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "A gift for you",
              "id": "hanzo-a-gift-for-you",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "When the moon is full",
              "id": "hanzo-when-the-moon-is-full",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "hanzo-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Confident",
              "id": "hanzo-confident",
              "quality": "rare"
            },
            {
              "name": "Over the Shoulder",
              "id": "hanzo-over-the-shoulder",
              "quality": "rare"
            },
            {
              "name": "Kneeling",
              "id": "hanzo-kneeling",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "hanzo-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "junkrat": {
        "name": "Junkrat",
        "class": "Defence",
        "id": "junkrat",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "junkrat-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Bleached",
              "id": "junkrat-bleached",
              "quality": "rare"
            },
            {
              "name": "Irradiated",
              "id": "junkrat-irradiated",
              "quality": "rare"
            },
            {
              "name": "Rusted",
              "id": "junkrat-rusted",
              "quality": "rare"
            },
            {
              "name": "Drowned",
              "id": "junkrat-drowned",
              "quality": "rare"
            },
            {
              "name": "Jailbird",
              "id": "junkrat-jailbird",
              "quality": "epic"
            },
            {
              "name": "Toasted",
              "id": "junkrat-toasted",
              "quality": "epic"
            },
            {
              "name": "Jester",
              "id": "junkrat-jester",
              "quality": "legendary"
            },
            {
              "name": "Fool",
              "id": "junkrat-fool",
              "quality": "legendary"
            },
            {
              "name": "Scarecrow",
              "id": "junkrat-scarecrow",
              "quality": "legendary"
            },
            {
              "name": "Hayseed",
              "id": "junkrat-hayseed",
              "quality": "legendary"
            },
            {
              "name": "Dr. Junkenstein",
              "id": "junkrat-dr-junkenstein",
              "quality": "legendary",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Firework",
              "id": "junkrat-firework",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "junkrat-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Juggling",
              "id": "junkrat-juggling",
              "quality": "epic"
            },
            {
              "name": "Vaudeville",
              "id": "junkrat-vaudeville",
              "quality": "epic"
            },
            {
              "name": "Puppet",
              "id": "junkrat-puppet",
              "quality": "epic"
            },
            {
              "name": "Can't deal",
              "id": "junkrat-cant-deal",
              "quality": "epic"
            },
            {
              "name": "Lounging",
              "id": "junkrat-lounging",
              "quality": "epic"
            },
            {
              "name": "Dud?",
              "id": "junkrat-dud",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "junkrat-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "RIP-Tire",
              "id": "junkrat-riptire",
              "quality": "epic"
            },
            {
              "name": "Unfortunate",
              "id": "junkrat-unfortunate",
              "quality": "epic"
            },
            {
              "name": "I'm Flying!",
              "id": "junkrat-im-flying",
              "quality": "epic"
            },
            {
              "name": "Shot Put",
              "id": "junkrat-shot-put",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "icons": [
            {
              "name": "Junkrat",
              "id": "junkrat-junkrat",
              "quality": "rare"
            },
            {
              "name": "Have a Nice Day!",
              "id": "junkrat-have-a-nice-day",
              "quality": "rare"
            },
            {
              "name": "AHHHH!",
              "id": "junkrat-ahhhh",
              "quality": "rare"
            },
            {
              "name": "Tennis",
              "id": "junkrat-tennis",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "The Doctor",
              "id": "junkrat-the-doctor",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "junkrat-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "junkrat-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "junkrat-icon",
              "quality": "common"
            },
            {
              "name": "Smile",
              "id": "junkrat-smile",
              "quality": "common"
            },
            {
              "name": "Kaboom!",
              "id": "junkrat-kaboom",
              "quality": "common"
            },
            {
              "name": "Frag",
              "id": "junkrat-frag",
              "quality": "common"
            },
            {
              "name": "Wanted",
              "id": "junkrat-wanted",
              "quality": "common"
            },
            {
              "name": "Bang Bang",
              "id": "junkrat-bang-bang",
              "quality": "common"
            },
            {
              "name": "Spin",
              "id": "junkrat-spin",
              "quality": "common"
            },
            {
              "name": "Mad",
              "id": "junkrat-mad",
              "quality": "common"
            },
            {
              "name": "Fuse",
              "id": "junkrat-fuse",
              "quality": "common"
            },
            {
              "name": "Trapper",
              "id": "junkrat-trapper",
              "quality": "common"
            },
            {
              "name": "Crazy",
              "id": "junkrat-crazy",
              "quality": "common"
            },
            {
              "name": "Grin",
              "id": "junkrat-grin",
              "quality": "common"
            },
            {
              "name": "Minefield",
              "id": "junkrat-minefield",
              "quality": "common"
            },
            {
              "name": "Rolling",
              "id": "junkrat-rolling",
              "quality": "common"
            },
            {
              "name": "Firework",
              "id": "junkrat-firework",
              "quality": "common"
            },
            {
              "name": "Mine",
              "id": "junkrat-mine",
              "quality": "common"
            },
            {
              "name": "Smoke",
              "id": "junkrat-smoke",
              "quality": "common"
            },
            {
              "name": "Vroom!!",
              "id": "junkrat-vroom",
              "quality": "common"
            },
            {
              "name": "For You",
              "id": "junkrat-for-you",
              "quality": "common"
            },
            {
              "name": "Mayhem",
              "id": "junkrat-mayhem",
              "quality": "common"
            },
            {
              "name": "AHHHH!",
              "id": "junkrat-ahhhh",
              "quality": "common"
            },
            {
              "name": "Fireball",
              "id": "junkrat-fireball",
              "quality": "common"
            },
            {
              "name": "Junk",
              "id": "junkrat-junk",
              "quality": "common"
            },
            {
              "name": "Tennis",
              "id": "junkrat-tennis",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "junkrat-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "\"WINTER\"",
              "id": "junkrat-winter",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "junkrat-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "I'm flying!",
              "id": "junkrat-im-flying",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "junkrat-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Tick-tock-tick-tock",
              "id": "junkrat-ticktockticktock",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Anyone want some bbq?",
              "id": "junkrat-anyone-want-some-bbq",
              "quality": "common"
            },
            {
              "name": "Brrring!",
              "id": "junkrat-brrring",
              "quality": "common"
            },
            {
              "name": "Coming up explodey!",
              "id": "junkrat-coming-up-explodey",
              "quality": "common"
            },
            {
              "name": "Happy birthday",
              "id": "junkrat-happy-birthday",
              "quality": "common"
            },
            {
              "name": "Kaboom",
              "id": "junkrat-kaboom",
              "quality": "common"
            },
            {
              "name": "Smile!",
              "id": "junkrat-smile",
              "quality": "common"
            },
            {
              "name": "Have a nice day!",
              "id": "junkrat-have-a-nice-day",
              "quality": "common"
            },
            {
              "name": "It's the little things",
              "id": "junkrat-its-the-little-things",
              "quality": "common"
            },
            {
              "name": "...blow it up again",
              "id": "junkrat-blow-it-up-again",
              "quality": "common"
            },
            {
              "name": "Ooh, shiny",
              "id": "junkrat-ooh-shiny",
              "quality": "common"
            },
            {
              "name": "I give it a 10!",
              "id": "junkrat-i-give-it-a-10",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Happy Halloween",
              "id": "junkrat-happy-halloween",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Merry Christmas",
              "id": "junkrat-merry-christmas",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Gong Xi Fa Cai",
              "id": "junkrat-gong-xi-fa-cai",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "junkrat-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "It'll Freeze That Way",
              "id": "junkrat-itll-freeze-that-way",
              "quality": "rare"
            },
            {
              "name": "Kneeling",
              "id": "junkrat-kneeling",
              "quality": "rare"
            },
            {
              "name": "Nyah nyah",
              "id": "junkrat-nyah-nyah",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "junkrat-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Bad for Your Health",
              "id": "junkrat-bad-for-your-health",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "lucio": {
        "name": "Lúcio",
        "class": "Support",
        "id": "lucio",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "lucio-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Roxo",
              "id": "lucio-roxo",
              "quality": "rare"
            },
            {
              "name": "Laranja",
              "id": "lucio-laranja",
              "quality": "rare"
            },
            {
              "name": "Vermelho",
              "id": "lucio-vermelho",
              "quality": "rare"
            },
            {
              "name": "Azul",
              "id": "lucio-azul",
              "quality": "rare"
            },
            {
              "name": "Synaesthesia",
              "id": "lucio-synaesthesia",
              "quality": "epic"
            },
            {
              "name": "Auditiva",
              "id": "lucio-auditiva",
              "quality": "epic"
            },
            {
              "name": "Ribbit",
              "id": "lucio-ribbit",
              "quality": "legendary"
            },
            {
              "name": "Hippityhop",
              "id": "lucio-hippityhop",
              "quality": "legendary"
            },
            {
              "name": "Breakaway",
              "id": "lucio-breakaway",
              "quality": "legendary"
            },
            {
              "name": "Slapshot",
              "id": "lucio-slapshot",
              "quality": "legendary"
            },
            {
              "name": "Seleção",
              "id": "lucio-selecao",
              "quality": "legendary",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Striker",
              "id": "lucio-striker",
              "quality": "legendary",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Andes",
              "id": "lucio-andes",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "lucio-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "In the Groove",
              "id": "lucio-in-the-groove",
              "quality": "epic"
            },
            {
              "name": "Capoeira",
              "id": "lucio-capoeira",
              "quality": "epic"
            },
            {
              "name": "Nah!",
              "id": "lucio-nah",
              "quality": "epic"
            },
            {
              "name": "Knee Slapper",
              "id": "lucio-knee-slapper",
              "quality": "epic"
            },
            {
              "name": "Chilling",
              "id": "lucio-chilling",
              "quality": "epic"
            },
            {
              "name": "Juggle",
              "id": "lucio-juggle",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "lucio-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Drop the beat",
              "id": "lucio-drop-the-beat",
              "quality": "epic"
            },
            {
              "name": "In the Groove",
              "id": "lucio-in-the-groove",
              "quality": "epic"
            },
            {
              "name": "Freestyle",
              "id": "lucio-freestyle",
              "quality": "epic"
            },
            {
              "name": "Bicycle Kick",
              "id": "lucio-bicycle-kick",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "icons": [
            {
              "name": "Lúcio",
              "id": "lucio-lucio",
              "quality": "rare"
            },
            {
              "name": "Kambô",
              "id": "lucio-kambo",
              "quality": "rare"
            },
            {
              "name": "Frog",
              "id": "lucio-frog",
              "quality": "rare"
            },
            {
              "name": "Football",
              "id": "lucio-football",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "lucio-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "lucio-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "lucio-icon",
              "quality": "common"
            },
            {
              "name": "Frog",
              "id": "lucio-frog",
              "quality": "common"
            },
            {
              "name": "Deck",
              "id": "lucio-deck",
              "quality": "common"
            },
            {
              "name": "Tag",
              "id": "lucio-tag",
              "quality": "common"
            },
            {
              "name": "Signature",
              "id": "lucio-signature",
              "quality": "common"
            },
            {
              "name": "Hero",
              "id": "lucio-hero",
              "quality": "common"
            },
            {
              "name": "Confident",
              "id": "lucio-confident",
              "quality": "common"
            },
            {
              "name": "Cereal",
              "id": "lucio-cereal",
              "quality": "common"
            },
            {
              "name": "Scratch",
              "id": "lucio-scratch",
              "quality": "common"
            },
            {
              "name": "Acelerar",
              "id": "lucio-acelerar",
              "quality": "common"
            },
            {
              "name": "Break It Down",
              "id": "lucio-break-it-down",
              "quality": "common"
            },
            {
              "name": "In Concert",
              "id": "lucio-in-concert",
              "quality": "common"
            },
            {
              "name": "Wave",
              "id": "lucio-wave",
              "quality": "common"
            },
            {
              "name": "Walk of Fame",
              "id": "lucio-walk-of-fame",
              "quality": "common"
            },
            {
              "name": "Bass",
              "id": "lucio-bass",
              "quality": "common"
            },
            {
              "name": "Vinyl",
              "id": "lucio-vinyl",
              "quality": "common"
            },
            {
              "name": "Grin",
              "id": "lucio-grin",
              "quality": "common"
            },
            {
              "name": "Under Control",
              "id": "lucio-under-control",
              "quality": "common"
            },
            {
              "name": "Kambô",
              "id": "lucio-kambo",
              "quality": "common"
            },
            {
              "name": "Spin",
              "id": "lucio-spin",
              "quality": "common"
            },
            {
              "name": "Baixo",
              "id": "lucio-baixo",
              "quality": "common"
            },
            {
              "name": "Triplo",
              "id": "lucio-triplo",
              "quality": "common"
            },
            {
              "name": "Mural",
              "id": "lucio-mural",
              "quality": "common"
            },
            {
              "name": "Football",
              "id": "lucio-football",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "lucio-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Hockey",
              "id": "lucio-hockey",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "lucio-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Keep Ups",
              "id": "lucio-keep-ups",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "lucio-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "To the rhythm",
              "id": "lucio-to-the-rhythm",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Oh, yeah!",
              "id": "lucio-oh-yeah",
              "quality": "common"
            },
            {
              "name": "Why are you so angry?",
              "id": "lucio-why-are-you-so-angry",
              "quality": "common"
            },
            {
              "name": "Can't stop, won't stop",
              "id": "lucio-cant-stop-wont-stop",
              "quality": "common"
            },
            {
              "name": "Jackpot!",
              "id": "lucio-jackpot",
              "quality": "common"
            },
            {
              "name": "Hit me!",
              "id": "lucio-hit-me",
              "quality": "common"
            },
            {
              "name": "I could do this all day",
              "id": "lucio-i-could-do-this-all-day",
              "quality": "common"
            },
            {
              "name": "Not hearing that noise",
              "id": "lucio-not-hearing-that-noise",
              "quality": "common"
            },
            {
              "name": "I'm on top of the world",
              "id": "lucio-im-on-top-of-the-world",
              "quality": "common"
            },
            {
              "name": "Tinnitus",
              "id": "lucio-tinnitus",
              "quality": "common"
            },
            {
              "name": "You gotta believe!",
              "id": "lucio-you-gotta-believe",
              "quality": "common"
            },
            {
              "name": "Be champions",
              "id": "lucio-be-champions",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Killed it!",
              "id": "lucio-killed-it",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Happy holidays!",
              "id": "lucio-happy-holidays",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "I make this look good...",
              "id": "lucio-i-make-this-look-good",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "lucio-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Ready for Action",
              "id": "lucio-ready-for-action",
              "quality": "rare"
            },
            {
              "name": "Grooving",
              "id": "lucio-grooving",
              "quality": "rare"
            },
            {
              "name": "Confident",
              "id": "lucio-confident",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "lucio-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "mccree": {
        "name": "McCree",
        "class": "Assault",
        "id": "mccree",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "mccree-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Lake",
              "id": "mccree-lake",
              "quality": "rare"
            },
            {
              "name": "Sage",
              "id": "mccree-sage",
              "quality": "rare"
            },
            {
              "name": "Wheat",
              "id": "mccree-wheat",
              "quality": "rare"
            },
            {
              "name": "Ebony",
              "id": "mccree-ebony",
              "quality": "rare"
            },
            {
              "name": "On the Range",
              "id": "mccree-on-the-range",
              "quality": "epic"
            },
            {
              "name": "White Hat",
              "id": "mccree-white-hat",
              "quality": "epic"
            },
            {
              "name": "Gambler",
              "id": "mccree-gambler",
              "quality": "legendary"
            },
            {
              "name": "Riverboat",
              "id": "mccree-riverboat",
              "quality": "legendary"
            },
            {
              "name": "Mystery Man",
              "id": "mccree-mystery-man",
              "quality": "legendary"
            },
            {
              "name": "Vigilante",
              "id": "mccree-vigilante",
              "quality": "legendary"
            },
            {
              "name": "American",
              "id": "mccree-american",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Scrooge",
              "id": "mccree-scrooge",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "mccree-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Gunspinning",
              "id": "mccree-gunspinning",
              "quality": "epic"
            },
            {
              "name": "Hat Tip",
              "id": "mccree-hat-tip",
              "quality": "epic"
            },
            {
              "name": "Spit",
              "id": "mccree-spit",
              "quality": "epic"
            },
            {
              "name": "Joker",
              "id": "mccree-joker",
              "quality": "epic"
            },
            {
              "name": "Take a load off",
              "id": "mccree-take-a-load-off",
              "quality": "epic"
            },
            {
              "name": "Hat Trick",
              "id": "mccree-hat-trick",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "mccree-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "The name's McCree",
              "id": "mccree-the-names-mccree",
              "quality": "epic"
            },
            {
              "name": "The Duel",
              "id": "mccree-the-duel",
              "quality": "epic"
            },
            {
              "name": "Rolling into Action",
              "id": "mccree-rolling-into-action",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "McCree",
              "id": "mccree-mccree",
              "quality": "rare"
            },
            {
              "name": "Badge",
              "id": "mccree-badge",
              "quality": "rare"
            },
            {
              "name": "Deadeye",
              "id": "mccree-deadeye",
              "quality": "rare"
            },
            {
              "name": "Equestrian",
              "id": "mccree-equestrian",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "mccree-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "mccree-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "mccree-icon",
              "quality": "common"
            },
            {
              "name": "Badge",
              "id": "mccree-badge",
              "quality": "common"
            },
            {
              "name": "Gunslinger",
              "id": "mccree-gunslinger",
              "quality": "common"
            },
            {
              "name": "Tumbleweed",
              "id": "mccree-tumbleweed",
              "quality": "common"
            },
            {
              "name": "Bullet",
              "id": "mccree-bullet",
              "quality": "common"
            },
            {
              "name": "Skull",
              "id": "mccree-skull",
              "quality": "common"
            },
            {
              "name": "Spin",
              "id": "mccree-spin",
              "quality": "common"
            },
            {
              "name": "Noose",
              "id": "mccree-noose",
              "quality": "common"
            },
            {
              "name": "Thumbs Up",
              "id": "mccree-thumbs-up",
              "quality": "common"
            },
            {
              "name": "Bang!",
              "id": "mccree-bang",
              "quality": "common"
            },
            {
              "name": "Deadeye",
              "id": "mccree-deadeye",
              "quality": "common"
            },
            {
              "name": "BAMF",
              "id": "mccree-bamf",
              "quality": "common"
            },
            {
              "name": "Target",
              "id": "mccree-target",
              "quality": "common"
            },
            {
              "name": "The Name's",
              "id": "mccree-the-names",
              "quality": "common"
            },
            {
              "name": "Draw",
              "id": "mccree-draw",
              "quality": "common"
            },
            {
              "name": "Take It Easy",
              "id": "mccree-take-it-easy",
              "quality": "common"
            },
            {
              "name": "Jesse",
              "id": "mccree-jesse",
              "quality": "common"
            },
            {
              "name": "Outlaw",
              "id": "mccree-outlaw",
              "quality": "common"
            },
            {
              "name": "Enigma",
              "id": "mccree-enigma",
              "quality": "common"
            },
            {
              "name": "Wanted",
              "id": "mccree-wanted",
              "quality": "common"
            },
            {
              "name": "High Noon",
              "id": "mccree-high-noon",
              "quality": "common"
            },
            {
              "name": "Buckle",
              "id": "mccree-buckle",
              "quality": "common"
            },
            {
              "name": "Your Face Here",
              "id": "mccree-your-face-here",
              "quality": "common"
            },
            {
              "name": "Equestrian",
              "id": "mccree-equestrian",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "mccree-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Ugly Sweater",
              "id": "mccree-ugly-sweater",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "mccree-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Call It",
              "id": "mccree-call-it",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "mccree-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Watch and learn",
              "id": "mccree-watch-and-learn",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Ain't I killed you before",
              "id": "mccree-aint-i-killed-you-before",
              "quality": "common"
            },
            {
              "name": "You done?",
              "id": "mccree-you-done",
              "quality": "common"
            },
            {
              "name": "Sure as hell ain't ugly",
              "id": "mccree-sure-as-hell-aint-ugly",
              "quality": "common"
            },
            {
              "name": "I'm the quick...",
              "id": "mccree-im-the-quick",
              "quality": "common"
            },
            {
              "name": "Happens to the best of us",
              "id": "mccree-happens-to-the-best-of-us",
              "quality": "common"
            },
            {
              "name": "Reach for the sky",
              "id": "mccree-reach-for-the-sky",
              "quality": "common"
            },
            {
              "name": "I tried being reasonable",
              "id": "mccree-i-tried-being-reasonable",
              "quality": "common"
            },
            {
              "name": "I've got a bullet...",
              "id": "mccree-ive-got-a-bullet",
              "quality": "common"
            },
            {
              "name": "I'm your huckleberry",
              "id": "mccree-im-your-huckleberry",
              "quality": "common"
            },
            {
              "name": "Wanted: dead or alive",
              "id": "mccree-wanted-dead-or-alive",
              "quality": "common"
            },
            {
              "name": "I don't much like losing",
              "id": "mccree-i-dont-much-like-losing",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "It's your funeral",
              "id": "mccree-its-your-funeral",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Had to break the ice",
              "id": "mccree-had-to-break-the-ice",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Calls for a celebration",
              "id": "mccree-calls-for-a-celebration",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "mccree-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Take it easy",
              "id": "mccree-take-it-easy",
              "quality": "rare"
            },
            {
              "name": "Over the Shoulder",
              "id": "mccree-over-the-shoulder",
              "quality": "rare"
            },
            {
              "name": "Contemplative",
              "id": "mccree-contemplative",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "mccree-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "mei": {
        "name": "Mei",
        "class": "Defence",
        "id": "mei",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "mei-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Chrysanthemum",
              "id": "mei-chrysanthemum",
              "quality": "rare"
            },
            {
              "name": "Persimmon",
              "id": "mei-persimmon",
              "quality": "rare"
            },
            {
              "name": "Heliotrope",
              "id": "mei-heliotrope",
              "quality": "rare"
            },
            {
              "name": "Jade",
              "id": "mei-jade",
              "quality": "rare"
            },
            {
              "name": "Earthen",
              "id": "mei-earthen",
              "quality": "epic"
            },
            {
              "name": "Snow Plum",
              "id": "mei-snow-plum",
              "quality": "epic"
            },
            {
              "name": "Rescue Mei",
              "id": "mei-rescue-mei",
              "quality": "legendary"
            },
            {
              "name": "Firefighter",
              "id": "mei-firefighter",
              "quality": "legendary"
            },
            {
              "name": "Yeti Hunter",
              "id": "mei-yeti-hunter",
              "quality": "legendary"
            },
            {
              "name": "Abominable",
              "id": "mei-abominable",
              "quality": "legendary"
            },
            {
              "name": "Mei-rry",
              "id": "mei-meirry",
              "quality": "legendary",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Chang'e",
              "id": "mei-change",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Luna",
              "id": "mei-luna",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "mei-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Companion",
              "id": "mei-companion",
              "quality": "epic"
            },
            {
              "name": "Yaaaaaaaaay!",
              "id": "mei-yaaaaaaaaay",
              "quality": "epic"
            },
            {
              "name": "Spray",
              "id": "mei-spray",
              "quality": "epic"
            },
            {
              "name": "Giggle",
              "id": "mei-giggle",
              "quality": "epic"
            },
            {
              "name": "Kneel",
              "id": "mei-kneel",
              "quality": "epic"
            },
            {
              "name": "Snowman",
              "id": "mei-snowman",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "So Excited",
              "id": "mei-so-excited",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "mei-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Going Up!",
              "id": "mei-going-up",
              "quality": "epic"
            },
            {
              "name": "Frosty :)",
              "id": "mei-frosty-",
              "quality": "epic"
            },
            {
              "name": "Skating Around",
              "id": "mei-skating-around",
              "quality": "epic"
            },
            {
              "name": "Ice Scream",
              "id": "mei-ice-scream",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "icons": [
            {
              "name": "Mei",
              "id": "mei-mei",
              "quality": "rare"
            },
            {
              "name": "Snowball",
              "id": "mei-snowball",
              "quality": "rare"
            },
            {
              "name": "Hairpin",
              "id": "mei-hairpin",
              "quality": "rare"
            },
            {
              "name": "Table Tennis",
              "id": "mei-table-tennis",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Chang'e",
              "id": "mei-change",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "mei-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "mei-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "mei-icon",
              "quality": "common"
            },
            {
              "name": "Blaster",
              "id": "mei-blaster",
              "quality": "common"
            },
            {
              "name": "Snowman",
              "id": "mei-snowman",
              "quality": "common"
            },
            {
              "name": "Eyes",
              "id": "mei-eyes",
              "quality": "common"
            },
            {
              "name": "Walled",
              "id": "mei-walled",
              "quality": "common"
            },
            {
              "name": "Reading",
              "id": "mei-reading",
              "quality": "common"
            },
            {
              "name": "Mei's Journal",
              "id": "mei-meis-journal",
              "quality": "common"
            },
            {
              "name": "Smile",
              "id": "mei-smile",
              "quality": "common"
            },
            {
              "name": "Dizzy",
              "id": "mei-dizzy",
              "quality": "common"
            },
            {
              "name": "Sketch",
              "id": "mei-sketch",
              "quality": "common"
            },
            {
              "name": "Explorer",
              "id": "mei-explorer",
              "quality": "common"
            },
            {
              "name": "Popsicle",
              "id": "mei-popsicle",
              "quality": "common"
            },
            {
              "name": "Hairpin",
              "id": "mei-hairpin",
              "quality": "common"
            },
            {
              "name": "Print",
              "id": "mei-print",
              "quality": "common"
            },
            {
              "name": "Snow Art",
              "id": "mei-snow-art",
              "quality": "common"
            },
            {
              "name": "^_^",
              "id": "mei-joy",
              "quality": "common"
            },
            {
              "name": ">_\\<",
              "id": "mei-frustration",
              "quality": "common"
            },
            {
              "name": "Confident",
              "id": "mei-confident",
              "quality": "common"
            },
            {
              "name": "Casual",
              "id": "mei-casual",
              "quality": "common"
            },
            {
              "name": "Snowball",
              "id": "mei-snowball",
              "quality": "common"
            },
            {
              "name": "Beat the Heat",
              "id": "mei-beat-the-heat",
              "quality": "common"
            },
            {
              "name": "Carefree",
              "id": "mei-carefree",
              "quality": "common"
            },
            {
              "name": "Soft Serve",
              "id": "mei-soft-serve",
              "quality": "common"
            },
            {
              "name": "Table Tennis",
              "id": "mei-table-tennis",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "mei-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Sculpting",
              "id": "mei-sculpting",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "mei-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Fortune",
              "id": "mei-fortune",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "mei-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Hang in there",
              "id": "mei-hang-in-there",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Okay!",
              "id": "mei-okay",
              "quality": "common"
            },
            {
              "name": "Yay!",
              "id": "mei-yay",
              "quality": "common"
            },
            {
              "name": "Fight for our world",
              "id": "mei-fight-for-our-world",
              "quality": "common"
            },
            {
              "name": "Ouch, are you okay?",
              "id": "mei-ouch-are-you-okay",
              "quality": "common"
            },
            {
              "name": "That was great",
              "id": "mei-that-was-great",
              "quality": "common"
            },
            {
              "name": "Learned your lesson",
              "id": "mei-learned-your-lesson",
              "quality": "common"
            },
            {
              "name": "Sorry sorry sorry sorry",
              "id": "mei-sorry-sorry-sorry-sorry",
              "quality": "common"
            },
            {
              "name": "You have to let it go",
              "id": "mei-you-have-to-let-it-go",
              "quality": "common"
            },
            {
              "name": "Chill out!",
              "id": "mei-chill-out",
              "quality": "common"
            },
            {
              "name": "A-Mei-zing!",
              "id": "mei-ameizing",
              "quality": "common"
            },
            {
              "name": "Overcome all obstacles",
              "id": "mei-overcome-all-obstacles",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Scary!",
              "id": "mei-scary",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "I got you something!",
              "id": "mei-i-got-you-something",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Wishing you prosperity",
              "id": "mei-wishing-you-prosperity",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "mei-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Hands on Hips",
              "id": "mei-hands-on-hips",
              "quality": "rare"
            },
            {
              "name": "Casual",
              "id": "mei-casual",
              "quality": "rare"
            },
            {
              "name": "Kneeling",
              "id": "mei-kneeling",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "mei-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "mei-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Lucky!",
              "id": "mei-lucky",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "mercy": {
        "name": "Mercy",
        "class": "Support",
        "id": "mercy",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "mercy-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Celestial",
              "id": "mercy-celestial",
              "quality": "rare"
            },
            {
              "name": "Verdant",
              "id": "mercy-verdant",
              "quality": "rare"
            },
            {
              "name": "Orchid",
              "id": "mercy-orchid",
              "quality": "rare"
            },
            {
              "name": "Mist",
              "id": "mercy-mist",
              "quality": "rare"
            },
            {
              "name": "Cobalt",
              "id": "mercy-cobalt",
              "quality": "epic"
            },
            {
              "name": "Amber",
              "id": "mercy-amber",
              "quality": "epic"
            },
            {
              "name": "Devil",
              "id": "mercy-devil",
              "quality": "legendary"
            },
            {
              "name": "Imp",
              "id": "mercy-imp",
              "quality": "legendary"
            },
            {
              "name": "Valkyrie",
              "id": "mercy-valkyrie",
              "quality": "legendary"
            },
            {
              "name": "Sigrún",
              "id": "mercy-sigrun",
              "quality": "legendary"
            },
            {
              "name": "Eidgenossin",
              "id": "mercy-eidgenossin",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Witch",
              "id": "mercy-witch",
              "quality": "legendary",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Fortune",
              "id": "mercy-golden",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "mercy-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Caduceus",
              "id": "mercy-caduceus",
              "quality": "epic"
            },
            {
              "name": "Applause",
              "id": "mercy-applause",
              "quality": "epic"
            },
            {
              "name": "No Pulse",
              "id": "mercy-no-pulse",
              "quality": "epic"
            },
            {
              "name": "The Best Medicine",
              "id": "mercy-the-best-medicine",
              "quality": "epic"
            },
            {
              "name": "Relax",
              "id": "mercy-relax",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "mercy-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Heroes Never Die",
              "id": "mercy-heroes-never-die",
              "quality": "epic"
            },
            {
              "name": "Guardian Angel",
              "id": "mercy-guardian-angel",
              "quality": "epic"
            },
            {
              "name": "Battle Angel",
              "id": "mercy-battle-angel",
              "quality": "epic"
            },
            {
              "name": "Fortune",
              "id": "mercy-fortune",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "icons": [
            {
              "name": "Mercy",
              "id": "mercy-mercy",
              "quality": "rare"
            },
            {
              "name": "Guardian Angel",
              "id": "mercy-guardian-angel",
              "quality": "rare"
            },
            {
              "name": "Valkyrie",
              "id": "mercy-valkyrie",
              "quality": "rare"
            },
            {
              "name": "Badminton",
              "id": "mercy-badminton",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "The Witch",
              "id": "mercy-the-witch",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "mercy-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "mercy-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "mercy-icon",
              "quality": "common"
            },
            {
              "name": "Emblem",
              "id": "mercy-emblem",
              "quality": "common"
            },
            {
              "name": "Blaster",
              "id": "mercy-blaster",
              "quality": "common"
            },
            {
              "name": "Support",
              "id": "mercy-support",
              "quality": "common"
            },
            {
              "name": "Halo",
              "id": "mercy-halo",
              "quality": "common"
            },
            {
              "name": "Light",
              "id": "mercy-light",
              "quality": "common"
            },
            {
              "name": "Smile",
              "id": "mercy-smile",
              "quality": "common"
            },
            {
              "name": "On Call",
              "id": "mercy-on-call",
              "quality": "common"
            },
            {
              "name": "Valkyrie",
              "id": "mercy-valkyrie",
              "quality": "common"
            },
            {
              "name": "Swiss",
              "id": "mercy-swiss",
              "quality": "common"
            },
            {
              "name": "Arrow",
              "id": "mercy-arrow",
              "quality": "common"
            },
            {
              "name": "Medic",
              "id": "mercy-medic",
              "quality": "common"
            },
            {
              "name": "Battle Ready",
              "id": "mercy-battle-ready",
              "quality": "common"
            },
            {
              "name": "Sting",
              "id": "mercy-sting",
              "quality": "common"
            },
            {
              "name": "Gauze",
              "id": "mercy-gauze",
              "quality": "common"
            },
            {
              "name": "Stethoscope",
              "id": "mercy-stethoscope",
              "quality": "common"
            },
            {
              "name": "Bandage",
              "id": "mercy-bandage",
              "quality": "common"
            },
            {
              "name": "Patched Up",
              "id": "mercy-patched-up",
              "quality": "common"
            },
            {
              "name": "Ziegler",
              "id": "mercy-ziegler",
              "quality": "common"
            },
            {
              "name": "Huge Rez!!",
              "id": "mercy-huge-rez",
              "quality": "common"
            },
            {
              "name": "Heroes Never Die",
              "id": "mercy-heroes-never-die",
              "quality": "common"
            },
            {
              "name": "Resurrect",
              "id": "mercy-resurrect",
              "quality": "common"
            },
            {
              "name": "Wings",
              "id": "mercy-wings",
              "quality": "common"
            },
            {
              "name": "Badminton",
              "id": "mercy-badminton",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "mercy-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Snow Angel",
              "id": "mercy-snow-angel",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "mercy-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Parasol",
              "id": "mercy-parasol",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "mercy-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "I have my eye on you",
              "id": "mercy-i-have-my-eye-on-you",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Doctor's orders",
              "id": "mercy-doctors-orders",
              "quality": "common"
            },
            {
              "name": "Take two",
              "id": "mercy-take-two",
              "quality": "common"
            },
            {
              "name": "The doctor will see you",
              "id": "mercy-the-doctor-will-see-you",
              "quality": "common"
            },
            {
              "name": "On a scale of 1-10",
              "id": "mercy-on-a-scale-of-110",
              "quality": "common"
            },
            {
              "name": "Consultation fee",
              "id": "mercy-consultation-fee",
              "quality": "common"
            },
            {
              "name": "How Barbaric",
              "id": "mercy-how-barbaric",
              "quality": "common"
            },
            {
              "name": "Miracle Worker",
              "id": "mercy-miracle-worker",
              "quality": "common"
            },
            {
              "name": "Super!",
              "id": "mercy-super",
              "quality": "common"
            },
            {
              "name": "Need a second opinion?",
              "id": "mercy-need-a-second-opinion",
              "quality": "common"
            },
            {
              "name": "The Doctor Is In",
              "id": "mercy-the-doctor-is-in",
              "quality": "common"
            },
            {
              "name": "Piece of cake",
              "id": "mercy-piece-of-cake",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Superstition",
              "id": "mercy-superstition",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Your guardian angel",
              "id": "mercy-your-guardian-angel",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "A most impressive display",
              "id": "mercy-a-most-impressive-display",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "mercy-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Ready for battle",
              "id": "mercy-ready-for-battle",
              "quality": "rare"
            },
            {
              "name": "Carefree",
              "id": "mercy-carefree",
              "quality": "rare"
            },
            {
              "name": "Angelic",
              "id": "mercy-angelic",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "mercy-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Mistletoe",
              "id": "mercy-mistletoe",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ]
        }
      },
      "pharah": {
        "name": "Pharah",
        "class": "Assault",
        "id": "pharah",
        "items": {
          "skins": [
            {
              "name": "Security Chief",
              "id": "pharah-security-chief",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "pharah-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Emerald",
              "id": "pharah-emerald",
              "quality": "rare"
            },
            {
              "name": "Amethyst",
              "id": "pharah-amethyst",
              "quality": "rare"
            },
            {
              "name": "Titanium",
              "id": "pharah-titanium",
              "quality": "rare"
            },
            {
              "name": "Copper",
              "id": "pharah-copper",
              "quality": "rare"
            },
            {
              "name": "Anubis",
              "id": "pharah-anubis",
              "quality": "epic"
            },
            {
              "name": "Jackal",
              "id": "pharah-jackal",
              "quality": "epic"
            },
            {
              "name": "Mechaqueen",
              "id": "pharah-mechaqueen",
              "quality": "legendary"
            },
            {
              "name": "Raptorion",
              "id": "pharah-raptorion",
              "quality": "legendary"
            },
            {
              "name": "Thunderbird",
              "id": "pharah-thunderbird",
              "quality": "legendary"
            },
            {
              "name": "Raindancer",
              "id": "pharah-raindancer",
              "quality": "legendary"
            },
            {
              "name": "Possessed",
              "id": "pharah-possessed",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Frostbite",
              "id": "pharah-frostbite",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "pharah-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Flourish",
              "id": "pharah-flourish",
              "quality": "epic"
            },
            {
              "name": "Cheer",
              "id": "pharah-cheer",
              "quality": "epic"
            },
            {
              "name": "Knuckles",
              "id": "pharah-knuckles",
              "quality": "epic"
            },
            {
              "name": "Chuckle",
              "id": "pharah-chuckle",
              "quality": "epic"
            },
            {
              "name": "Take a knee",
              "id": "pharah-take-a-knee",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "pharah-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Touchdown",
              "id": "pharah-touchdown",
              "quality": "epic"
            },
            {
              "name": "Mission Complete",
              "id": "pharah-mission-complete",
              "quality": "epic"
            },
            {
              "name": "Barrage",
              "id": "pharah-barrage",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Pharah",
              "id": "pharah-pharah",
              "quality": "rare"
            },
            {
              "name": "Raptora",
              "id": "pharah-raptora",
              "quality": "rare"
            },
            {
              "name": "Wadjet",
              "id": "pharah-wadjet",
              "quality": "rare"
            },
            {
              "name": "Basketball",
              "id": "pharah-basketball",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "pharah-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "pharah-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Raptora",
              "id": "pharah-raptora",
              "quality": "common"
            },
            {
              "name": "Wedjat",
              "id": "pharah-wedjat",
              "quality": "common"
            },
            {
              "name": "Statue",
              "id": "pharah-statue",
              "quality": "common"
            },
            {
              "name": "Rocket Jump",
              "id": "pharah-rocket-jump",
              "quality": "common"
            },
            {
              "name": "Icon",
              "id": "pharah-icon",
              "quality": "common"
            },
            {
              "name": "Hieroglyph",
              "id": "pharah-hieroglyph",
              "quality": "common"
            },
            {
              "name": "Justice...",
              "id": "pharah-justice",
              "quality": "common"
            },
            {
              "name": "Guardian",
              "id": "pharah-guardian",
              "quality": "common"
            },
            {
              "name": "Wings",
              "id": "pharah-wings",
              "quality": "common"
            },
            {
              "name": "Stone",
              "id": "pharah-stone",
              "quality": "common"
            },
            {
              "name": "Rocket Launcher",
              "id": "pharah-rocket-launcher",
              "quality": "common"
            },
            {
              "name": "Tattoo",
              "id": "pharah-tattoo",
              "quality": "common"
            },
            {
              "name": "Ana",
              "id": "pharah-ana",
              "quality": "common"
            },
            {
              "name": "Incoming",
              "id": "pharah-incoming",
              "quality": "common"
            },
            {
              "name": "Wrist Launcher",
              "id": "pharah-wrist-launcher",
              "quality": "common"
            },
            {
              "name": "Cobra",
              "id": "pharah-cobra",
              "quality": "common"
            },
            {
              "name": "Scarab",
              "id": "pharah-scarab",
              "quality": "common"
            },
            {
              "name": "Amari",
              "id": "pharah-amari",
              "quality": "common"
            },
            {
              "name": "On Guard",
              "id": "pharah-on-guard",
              "quality": "common"
            },
            {
              "name": "Salute",
              "id": "pharah-salute",
              "quality": "common"
            },
            {
              "name": "Play Pharah",
              "id": "pharah-play-pharah",
              "quality": "common"
            },
            {
              "name": "Aerial Superiority",
              "id": "pharah-aerial-superiority",
              "quality": "common"
            },
            {
              "name": "Concussive Blast",
              "id": "pharah-concussive-blast",
              "quality": "common"
            },
            {
              "name": "Basketball",
              "id": "pharah-basketball",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "pharah-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Ice Fishing",
              "id": "pharah-ice-fishing",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "pharah-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Happy New Year",
              "id": "pharah-happy-new-year",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "pharah-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Security in my hands",
              "id": "pharah-security-in-my-hands",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Got you on my radar",
              "id": "pharah-got-you-on-my-radar",
              "quality": "common"
            },
            {
              "name": "Leave this to a professional",
              "id": "pharah-leave-this-to-a-professional",
              "quality": "common"
            },
            {
              "name": "Shot down",
              "id": "pharah-shot-down",
              "quality": "common"
            },
            {
              "name": "Flying the friendly skies",
              "id": "pharah-flying-the-friendly-skies",
              "quality": "common"
            },
            {
              "name": "Not a chance",
              "id": "pharah-not-a-chance",
              "quality": "common"
            },
            {
              "name": "Aerial superiority achieved",
              "id": "pharah-aerial-superiority-achieved",
              "quality": "common"
            },
            {
              "name": "Rocket jump?",
              "id": "pharah-rocket-jump",
              "quality": "common"
            },
            {
              "name": "Sorry, but I need to jet",
              "id": "pharah-sorry-but-i-need-to-jet",
              "quality": "common"
            },
            {
              "name": "Play nice, play Pharah",
              "id": "pharah-play-nice-play-pharah",
              "quality": "common"
            },
            {
              "name": "Fly like an egyptian",
              "id": "pharah-fly-like-an-egyptian",
              "quality": "common"
            },
            {
              "name": "We are in this together",
              "id": "pharah-we-are-in-this-together",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Dead or alive",
              "id": "pharah-dead-or-alive",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "The forecast",
              "id": "pharah-the-forecast",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "I keep the peace",
              "id": "pharah-i-keep-the-peace",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "pharah-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Jump Jet",
              "id": "pharah-jump-jet",
              "quality": "rare"
            },
            {
              "name": "Guardian",
              "id": "pharah-guardian",
              "quality": "rare"
            },
            {
              "name": "Kneeling",
              "id": "pharah-kneeling",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "pharah-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "pharah-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Toast",
              "id": "pharah-toast",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ]
        }
      },
      "reaper": {
        "name": "Reaper",
        "class": "Assault",
        "id": "reaper",
        "items": {
          "skins": [
            {
              "name": "Blackwatch Reyes",
              "id": "reaper-blackwatch-reyes",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "reaper-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Royal",
              "id": "reaper-royal",
              "quality": "rare"
            },
            {
              "name": "Blood",
              "id": "reaper-blood",
              "quality": "rare"
            },
            {
              "name": "Midnight",
              "id": "reaper-midnight",
              "quality": "rare"
            },
            {
              "name": "Moss",
              "id": "reaper-moss",
              "quality": "rare"
            },
            {
              "name": "Desert",
              "id": "reaper-desert",
              "quality": "epic"
            },
            {
              "name": "Wight",
              "id": "reaper-wight",
              "quality": "epic"
            },
            {
              "name": "Mariachi",
              "id": "reaper-mariachi",
              "quality": "legendary"
            },
            {
              "name": "El Blanco",
              "id": "reaper-el-blanco",
              "quality": "legendary"
            },
            {
              "name": "Nevermore",
              "id": "reaper-nevermore",
              "quality": "legendary"
            },
            {
              "name": "Plague Doctor",
              "id": "reaper-plague-doctor",
              "quality": "legendary"
            },
            {
              "name": "Pumpkin",
              "id": "reaper-pumpkin",
              "quality": "legendary",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Shiver",
              "id": "reaper-shiver",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "reaper-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Slice",
              "id": "reaper-slice",
              "quality": "epic"
            },
            {
              "name": "Slow Clap",
              "id": "reaper-slow-clap",
              "quality": "epic"
            },
            {
              "name": "Not Impressed",
              "id": "reaper-not-impressed",
              "quality": "epic"
            },
            {
              "name": "Cackle",
              "id": "reaper-cackle",
              "quality": "epic"
            },
            {
              "name": "Take a knee",
              "id": "reaper-take-a-knee",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "reaper-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Executioner",
              "id": "reaper-executioner",
              "quality": "epic"
            },
            {
              "name": "SHADOW STEP",
              "id": "reaper-shadow-step",
              "quality": "epic"
            },
            {
              "name": "Death Blossom",
              "id": "reaper-death-blossom",
              "quality": "epic"
            },
            {
              "name": "Eternal Rest",
              "id": "reaper-eternal-rest",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "icons": [
            {
              "name": "Reaper",
              "id": "reaper-reaper",
              "quality": "rare"
            },
            {
              "name": "Soul",
              "id": "reaper-soul",
              "quality": "rare"
            },
            {
              "name": "Emblem",
              "id": "reaper-emblem",
              "quality": "rare"
            },
            {
              "name": "BMX",
              "id": "reaper-bmx",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "The Reaper",
              "id": "reaper-the-reaper",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "reaper-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "reaper-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "reaper-icon",
              "quality": "common"
            },
            {
              "name": "Psst",
              "id": "reaper-psst",
              "quality": "common"
            },
            {
              "name": "Everywhere",
              "id": "reaper-everywhere",
              "quality": "common"
            },
            {
              "name": "Revenge",
              "id": "reaper-revenge",
              "quality": "common"
            },
            {
              "name": "Soul Globe",
              "id": "reaper-soul-globe",
              "quality": "common"
            },
            {
              "name": "Oops",
              "id": "reaper-oops",
              "quality": "common"
            },
            {
              "name": "Blossom",
              "id": "reaper-blossom",
              "quality": "common"
            },
            {
              "name": "Shadow",
              "id": "reaper-shadow",
              "quality": "common"
            },
            {
              "name": "Cloaked",
              "id": "reaper-cloaked",
              "quality": "common"
            },
            {
              "name": "Blackwatch",
              "id": "reaper-blackwatch",
              "quality": "common"
            },
            {
              "name": "Hooded",
              "id": "reaper-hooded",
              "quality": "common"
            },
            {
              "name": "Death Blossom",
              "id": "reaper-death-blossom",
              "quality": "common"
            },
            {
              "name": "Shadow Step",
              "id": "reaper-shadow-step",
              "quality": "common"
            },
            {
              "name": "Scythes",
              "id": "reaper-scythes",
              "quality": "common"
            },
            {
              "name": "Grave",
              "id": "reaper-grave",
              "quality": "common"
            },
            {
              "name": "Silent",
              "id": "reaper-silent",
              "quality": "common"
            },
            {
              "name": "Reaping",
              "id": "reaper-reaping",
              "quality": "common"
            },
            {
              "name": "Death Comes",
              "id": "reaper-death-comes",
              "quality": "common"
            },
            {
              "name": "Time to Kill",
              "id": "reaper-time-to-kill",
              "quality": "common"
            },
            {
              "name": "Die Die Die",
              "id": "reaper-die-die-die",
              "quality": "common"
            },
            {
              "name": "Reap On",
              "id": "reaper-reap-on",
              "quality": "common"
            },
            {
              "name": "Hellfire",
              "id": "reaper-hellfire",
              "quality": "common"
            },
            {
              "name": "Horns",
              "id": "reaper-horns",
              "quality": "common"
            },
            {
              "name": "BMX",
              "id": "reaper-bmx",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "reaper-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Stocking",
              "id": "reaper-stocking",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "reaper-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Fire Blossom",
              "id": "reaper-fire-blossom",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "reaper-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "What are you looking at",
              "id": "reaper-what-are-you-looking-at",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Dead man walking",
              "id": "reaper-dead-man-walking",
              "quality": "common"
            },
            {
              "name": "Next",
              "id": "reaper-next",
              "quality": "common"
            },
            {
              "name": "Haven't I killed you",
              "id": "reaper-havent-i-killed-you",
              "quality": "common"
            },
            {
              "name": "Too easy",
              "id": "reaper-too-easy",
              "quality": "common"
            },
            {
              "name": "Was that all?",
              "id": "reaper-was-that-all",
              "quality": "common"
            },
            {
              "name": "Give me a break",
              "id": "reaper-give-me-a-break",
              "quality": "common"
            },
            {
              "name": "Psychopath",
              "id": "reaper-psychopath",
              "quality": "common"
            },
            {
              "name": "Seen a ghost?",
              "id": "reaper-seen-a-ghost",
              "quality": "common"
            },
            {
              "name": "If it lives, I can kill it",
              "id": "reaper-if-it-lives-i-can-kill-it",
              "quality": "common"
            },
            {
              "name": "I'm back in black",
              "id": "reaper-im-back-in-black",
              "quality": "common"
            },
            {
              "name": "It's in the refrigerator",
              "id": "reaper-its-in-the-refrigerator",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "I work the graveyard shift",
              "id": "reaper-i-work-the-graveyard-shift",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Holiday spirit",
              "id": "reaper-holiday-spirit",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Now those are fireworks",
              "id": "reaper-now-those-are-fireworks",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "reaper-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Enigmatic",
              "id": "reaper-enigmatic",
              "quality": "rare"
            },
            {
              "name": "Menacing",
              "id": "reaper-menacing",
              "quality": "rare"
            },
            {
              "name": "Casual",
              "id": "reaper-casual",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "reaper-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "reaper-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "reinhardt": {
        "name": "Reinhardt",
        "class": "Tank",
        "id": "reinhardt",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "reinhardt-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Copper",
              "id": "reinhardt-copper",
              "quality": "rare"
            },
            {
              "name": "Viridian",
              "id": "reinhardt-viridian",
              "quality": "rare"
            },
            {
              "name": "Brass",
              "id": "reinhardt-brass",
              "quality": "rare"
            },
            {
              "name": "Cobalt",
              "id": "reinhardt-cobalt",
              "quality": "rare"
            },
            {
              "name": "Paragon",
              "id": "reinhardt-paragon",
              "quality": "epic"
            },
            {
              "name": "Bundeswehr",
              "id": "reinhardt-bundeswehr",
              "quality": "epic"
            },
            {
              "name": "Blackhardt",
              "id": "reinhardt-blackhardt",
              "quality": "legendary"
            },
            {
              "name": "Bloodhardt",
              "id": "reinhardt-bloodhardt",
              "quality": "legendary"
            },
            {
              "name": "Lionhardt",
              "id": "reinhardt-lionhardt",
              "quality": "legendary"
            },
            {
              "name": "Stonehardt",
              "id": "reinhardt-stonehardt",
              "quality": "legendary"
            },
            {
              "name": "Balderich",
              "id": "reinhardt-balderich",
              "quality": "legendary"
            },
            {
              "name": "Greifhardt",
              "id": "reinhardt-greifhardt",
              "quality": "legendary"
            },
            {
              "name": "Coldhardt",
              "id": "reinhardt-coldhardt",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Wujing",
              "id": "reinhardt-wujing",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "reinhardt-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Flex",
              "id": "reinhardt-flex",
              "quality": "epic"
            },
            {
              "name": "Warrior's Salute",
              "id": "reinhardt-warriors-salute",
              "quality": "epic"
            },
            {
              "name": "Taunt",
              "id": "reinhardt-taunt",
              "quality": "epic"
            },
            {
              "name": "Uproarious",
              "id": "reinhardt-uproarious",
              "quality": "epic"
            },
            {
              "name": "Kneel",
              "id": "reinhardt-kneel",
              "quality": "epic"
            },
            {
              "name": "Pumpkin Smash",
              "id": "reinhardt-pumpkin-smash",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "reinhardt-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Hammer Down",
              "id": "reinhardt-hammer-down",
              "quality": "epic"
            },
            {
              "name": "More stretching required",
              "id": "reinhardt-more-stretching-required",
              "quality": "epic"
            },
            {
              "name": "CHARGE",
              "id": "reinhardt-charge",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Reinhardt",
              "id": "reinhardt-reinhardt",
              "quality": "rare"
            },
            {
              "name": "Scar",
              "id": "reinhardt-scar",
              "quality": "rare"
            },
            {
              "name": "Lionhardt",
              "id": "reinhardt-lionhardt",
              "quality": "rare"
            },
            {
              "name": "Wrestling",
              "id": "reinhardt-wrestling",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Sandy",
              "id": "reinhardt-sandy",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "reinhardt-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "reinhardt-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "reinhardt-icon",
              "quality": "common"
            },
            {
              "name": "Emblem",
              "id": "reinhardt-emblem",
              "quality": "common"
            },
            {
              "name": "Helm",
              "id": "reinhardt-helm",
              "quality": "common"
            },
            {
              "name": "Crusader",
              "id": "reinhardt-crusader",
              "quality": "common"
            },
            {
              "name": "White",
              "id": "reinhardt-white",
              "quality": "common"
            },
            {
              "name": "Hammer Down",
              "id": "reinhardt-hammer-down",
              "quality": "common"
            },
            {
              "name": "Cracks",
              "id": "reinhardt-cracks",
              "quality": "common"
            },
            {
              "name": "Charge",
              "id": "reinhardt-charge",
              "quality": "common"
            },
            {
              "name": "Fire Strike",
              "id": "reinhardt-fire-strike",
              "quality": "common"
            },
            {
              "name": "Vigilant",
              "id": "reinhardt-vigilant",
              "quality": "common"
            },
            {
              "name": "Royal",
              "id": "reinhardt-royal",
              "quality": "common"
            },
            {
              "name": "Knight",
              "id": "reinhardt-knight",
              "quality": "common"
            },
            {
              "name": "Wilhelm",
              "id": "reinhardt-wilhelm",
              "quality": "common"
            },
            {
              "name": "Roar",
              "id": "reinhardt-roar",
              "quality": "common"
            },
            {
              "name": "Glorious",
              "id": "reinhardt-glorious",
              "quality": "common"
            },
            {
              "name": "Swing",
              "id": "reinhardt-swing",
              "quality": "common"
            },
            {
              "name": "Wrestle",
              "id": "reinhardt-wrestle",
              "quality": "common"
            },
            {
              "name": "Honor",
              "id": "reinhardt-honor",
              "quality": "common"
            },
            {
              "name": "Stein",
              "id": "reinhardt-stein",
              "quality": "common"
            },
            {
              "name": "Barrier",
              "id": "reinhardt-barrier",
              "quality": "common"
            },
            {
              "name": "Earthshatter",
              "id": "reinhardt-earthshatter",
              "quality": "common"
            },
            {
              "name": "Lion",
              "id": "reinhardt-lion",
              "quality": "common"
            },
            {
              "name": "Shield Up",
              "id": "reinhardt-shield-up",
              "quality": "common"
            },
            {
              "name": "Wrestling",
              "id": "reinhardt-wrestling",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "reinhardt-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Ice Fishing",
              "id": "reinhardt-ice-fishing",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "reinhardt-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Lion Dance",
              "id": "reinhardt-lion-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "reinhardt-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "I salute you",
              "id": "reinhardt-i-salute-you",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Honor and glory",
              "id": "reinhardt-honor-and-glory",
              "quality": "common"
            },
            {
              "name": "Are you afraid?",
              "id": "reinhardt-are-you-afraid",
              "quality": "common"
            },
            {
              "name": "Crushing machine",
              "id": "reinhardt-crushing-machine",
              "quality": "common"
            },
            {
              "name": "Show you how it's done",
              "id": "reinhardt-show-you-how-its-done",
              "quality": "common"
            },
            {
              "name": "Crusader online",
              "id": "reinhardt-crusader-online",
              "quality": "common"
            },
            {
              "name": "Bring me another",
              "id": "reinhardt-bring-me-another",
              "quality": "common"
            },
            {
              "name": "Respect your elders",
              "id": "reinhardt-respect-your-elders",
              "quality": "common"
            },
            {
              "name": "This old dog",
              "id": "reinhardt-this-old-dog",
              "quality": "common"
            },
            {
              "name": "German engineering",
              "id": "reinhardt-german-engineering",
              "quality": "common"
            },
            {
              "name": "Catch phrase!",
              "id": "reinhardt-catch-phrase",
              "quality": "common"
            },
            {
              "name": "100%% German power",
              "id": "reinhardt-100-german-power",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Smashing",
              "id": "reinhardt-smashing",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "You're on my naughty list",
              "id": "reinhardt-youre-on-my-naughty-list",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Are you chicken?",
              "id": "reinhardt-are-you-chicken",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "reinhardt-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Flex",
              "id": "reinhardt-flex",
              "quality": "rare"
            },
            {
              "name": "Confident",
              "id": "reinhardt-confident",
              "quality": "rare"
            },
            {
              "name": "Legendary",
              "id": "reinhardt-legendary",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "reinhardt-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Toast",
              "id": "reinhardt-toast",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ]
        }
      },
      "roadhog": {
        "name": "Roadhog",
        "class": "Tank",
        "id": "roadhog",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "roadhog-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Kiwi",
              "id": "roadhog-kiwi",
              "quality": "rare"
            },
            {
              "name": "Mud",
              "id": "roadhog-mud",
              "quality": "rare"
            },
            {
              "name": "Sand",
              "id": "roadhog-sand",
              "quality": "rare"
            },
            {
              "name": "Thistle",
              "id": "roadhog-thistle",
              "quality": "rare"
            },
            {
              "name": "Stitched",
              "id": "roadhog-stitched",
              "quality": "epic"
            },
            {
              "name": "Pigpen",
              "id": "roadhog-pigpen",
              "quality": "epic"
            },
            {
              "name": "Toa",
              "id": "roadhog-toa",
              "quality": "legendary"
            },
            {
              "name": "Islander",
              "id": "roadhog-islander",
              "quality": "legendary"
            },
            {
              "name": "Mako",
              "id": "roadhog-mako",
              "quality": "legendary"
            },
            {
              "name": "Sharkbait",
              "id": "roadhog-sharkbait",
              "quality": "legendary"
            },
            {
              "name": "Junkenstein's Monster",
              "id": "roadhog-junkensteins-monster",
              "quality": "legendary",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Rudolph",
              "id": "roadhog-rudolph",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Bajie",
              "id": "roadhog-bajie",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "roadhog-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Can Crusher",
              "id": "roadhog-can-crusher",
              "quality": "epic"
            },
            {
              "name": "Headbanging",
              "id": "roadhog-headbanging",
              "quality": "epic"
            },
            {
              "name": "Boo!",
              "id": "roadhog-boo",
              "quality": "epic"
            },
            {
              "name": "Belly Laugh",
              "id": "roadhog-belly-laugh",
              "quality": "epic"
            },
            {
              "name": "Tuckered out",
              "id": "roadhog-tuckered-out",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "roadhog-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Little Piggy",
              "id": "roadhog-little-piggy",
              "quality": "epic"
            },
            {
              "name": "Say \"Cheese\"",
              "id": "roadhog-say-cheese",
              "quality": "epic"
            },
            {
              "name": "WHOLE HOG",
              "id": "roadhog-whole-hog",
              "quality": "epic"
            },
            {
              "name": "Feast",
              "id": "roadhog-feast",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "icons": [
            {
              "name": "Roadhog",
              "id": "roadhog-roadhog",
              "quality": "rare"
            },
            {
              "name": "Hook",
              "id": "roadhog-hook",
              "quality": "rare"
            },
            {
              "name": "Piggy",
              "id": "roadhog-piggy",
              "quality": "rare"
            },
            {
              "name": "Diving",
              "id": "roadhog-diving",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "The Monster",
              "id": "roadhog-the-monster",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Pigsy",
              "id": "roadhog-piggy",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "roadhog-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "roadhog-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "roadhog-icon",
              "quality": "common"
            },
            {
              "name": "Helmet",
              "id": "roadhog-helmet",
              "quality": "common"
            },
            {
              "name": "Fresh Meat",
              "id": "roadhog-fresh-meat",
              "quality": "common"
            },
            {
              "name": "Wanted",
              "id": "roadhog-wanted",
              "quality": "common"
            },
            {
              "name": "No Pork",
              "id": "roadhog-no-pork",
              "quality": "common"
            },
            {
              "name": "Toxic",
              "id": "roadhog-toxic",
              "quality": "common"
            },
            {
              "name": "Piggy",
              "id": "roadhog-piggy",
              "quality": "common"
            },
            {
              "name": "Mako",
              "id": "roadhog-mako",
              "quality": "common"
            },
            {
              "name": "License",
              "id": "roadhog-license",
              "quality": "common"
            },
            {
              "name": "Tails",
              "id": "roadhog-tails",
              "quality": "common"
            },
            {
              "name": "Eyes",
              "id": "roadhog-eyes",
              "quality": "common"
            },
            {
              "name": "Wild Hog",
              "id": "roadhog-wild-hog",
              "quality": "common"
            },
            {
              "name": "Emblem",
              "id": "roadhog-emblem",
              "quality": "common"
            },
            {
              "name": "Free Pig",
              "id": "roadhog-free-pig",
              "quality": "common"
            },
            {
              "name": "Gotcha",
              "id": "roadhog-gotcha",
              "quality": "common"
            },
            {
              "name": "Left",
              "id": "roadhog-left",
              "quality": "common"
            },
            {
              "name": "Hogpower",
              "id": "roadhog-hogpower",
              "quality": "common"
            },
            {
              "name": "Popper",
              "id": "roadhog-popper",
              "quality": "common"
            },
            {
              "name": "Here Piggy",
              "id": "roadhog-here-piggy",
              "quality": "common"
            },
            {
              "name": "Breathin'",
              "id": "roadhog-breathin",
              "quality": "common"
            },
            {
              "name": "Deep Thoughts",
              "id": "roadhog-deep-thoughts",
              "quality": "common"
            },
            {
              "name": "Hooked",
              "id": "roadhog-hooked",
              "quality": "common"
            },
            {
              "name": "Grand Theft",
              "id": "roadhog-grand-theft",
              "quality": "common"
            },
            {
              "name": "Diving",
              "id": "roadhog-diving",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "roadhog-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "\"Winter\"",
              "id": "roadhog-winter",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "roadhog-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Steamed Buns",
              "id": "roadhog-steamed-buns",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "roadhog-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "The apocalypse",
              "id": "roadhog-the-apocalypse",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Candy from a baby",
              "id": "roadhog-candy-from-a-baby",
              "quality": "common"
            },
            {
              "name": "Piece of cake",
              "id": "roadhog-piece-of-cake",
              "quality": "common"
            },
            {
              "name": "Hook, line, and sinker",
              "id": "roadhog-hook-line-and-sinker",
              "quality": "common"
            },
            {
              "name": "Life is pain, so is death",
              "id": "roadhog-life-is-pain-so-is-death",
              "quality": "common"
            },
            {
              "name": "Push off",
              "id": "roadhog-push-off",
              "quality": "common"
            },
            {
              "name": "We're all animals",
              "id": "roadhog-were-all-animals",
              "quality": "common"
            },
            {
              "name": "Violence is the answer",
              "id": "roadhog-violence-is-the-answer",
              "quality": "common"
            },
            {
              "name": "Say \"bacon...\"",
              "id": "roadhog-say-bacon",
              "quality": "common"
            },
            {
              "name": "Got something to say?",
              "id": "roadhog-got-something-to-say",
              "quality": "common"
            },
            {
              "name": "HAHAHA!",
              "id": "roadhog-hahaha",
              "quality": "common"
            },
            {
              "name": "What's mine is mine",
              "id": "roadhog-whats-mine-is-mine",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Want some candy?",
              "id": "roadhog-want-some-candy",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Ho ho ho",
              "id": "roadhog-ho-ho-ho",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "You chicken?",
              "id": "roadhog-you-chicken",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "roadhog-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Tuckered out",
              "id": "roadhog-tuckered-out",
              "quality": "rare"
            },
            {
              "name": "Pointing to the sky",
              "id": "roadhog-pointing-to-the-sky",
              "quality": "rare"
            },
            {
              "name": "Thumbs up",
              "id": "roadhog-thumbs-up",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "roadhog-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "roadhog-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "What's mine is mine",
              "id": "roadhog-whats-mine-is-mine",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "soldier-76": {
        "name": "Soldier: 76",
        "class": "Assault",
        "id": "soldier-76",
        "items": {
          "skins": [
            {
              "name": "Strike-Commander Morrison",
              "id": "soldier-76-strikecommander-morrison",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "soldier-76-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Olive",
              "id": "soldier-76-olive",
              "quality": "rare"
            },
            {
              "name": "Russet",
              "id": "soldier-76-russet",
              "quality": "rare"
            },
            {
              "name": "Smoke",
              "id": "soldier-76-smoke",
              "quality": "rare"
            },
            {
              "name": "Jet",
              "id": "soldier-76-jet",
              "quality": "rare"
            },
            {
              "name": "Bone",
              "id": "soldier-76-bone",
              "quality": "epic"
            },
            {
              "name": "Golden",
              "id": "soldier-76-golden",
              "quality": "epic"
            },
            {
              "name": "Daredevil: 76",
              "id": "soldier-76-daredevil-76",
              "quality": "legendary"
            },
            {
              "name": "Stunt Rider: 76",
              "id": "soldier-76-stunt-rider-76",
              "quality": "legendary"
            },
            {
              "name": "Commando: 76",
              "id": "soldier-76-commando-76",
              "quality": "legendary"
            },
            {
              "name": "Night Ops: 76",
              "id": "soldier-76-night-ops-76",
              "quality": "legendary"
            },
            {
              "name": "Immortal",
              "id": "soldier-76-immortal",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "soldier-76-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Locked and Loaded",
              "id": "soldier-76-locked-and-loaded",
              "quality": "epic"
            },
            {
              "name": "Fist",
              "id": "soldier-76-fist",
              "quality": "epic"
            },
            {
              "name": "I see you",
              "id": "soldier-76-i-see-you",
              "quality": "epic"
            },
            {
              "name": "Amused",
              "id": "soldier-76-amused",
              "quality": "epic"
            },
            {
              "name": "Take a Knee",
              "id": "soldier-76-take-a-knee",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "soldier-76-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Looking at You",
              "id": "soldier-76-looking-at-you",
              "quality": "epic"
            },
            {
              "name": "Target Rich Environment",
              "id": "soldier-76-target-rich-environment",
              "quality": "epic"
            },
            {
              "name": "HELIX",
              "id": "soldier-76-helix",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Soldier: 76",
              "id": "soldier-76-soldier-76",
              "quality": "rare"
            },
            {
              "name": "Strike-Commander",
              "id": "soldier-76-strikecommander",
              "quality": "rare"
            },
            {
              "name": "76",
              "id": "soldier-76-76",
              "quality": "rare"
            },
            {
              "name": "Golf",
              "id": "soldier-76-golf",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "soldier-76-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "soldier-76-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "soldier-76-icon",
              "quality": "common"
            },
            {
              "name": "Helix",
              "id": "soldier-76-helix",
              "quality": "common"
            },
            {
              "name": "Heal Up",
              "id": "soldier-76-heal-up",
              "quality": "common"
            },
            {
              "name": "Jacket: 76",
              "id": "soldier-76-jacket-76",
              "quality": "common"
            },
            {
              "name": "Grave",
              "id": "soldier-76-grave",
              "quality": "common"
            },
            {
              "name": "Wanted",
              "id": "soldier-76-wanted",
              "quality": "common"
            },
            {
              "name": "Move!",
              "id": "soldier-76-move",
              "quality": "common"
            },
            {
              "name": "Coin",
              "id": "soldier-76-coin",
              "quality": "common"
            },
            {
              "name": "Visor",
              "id": "soldier-76-visor",
              "quality": "common"
            },
            {
              "name": "Vigilante",
              "id": "soldier-76-vigilante",
              "quality": "common"
            },
            {
              "name": "Hooah",
              "id": "soldier-76-hooah",
              "quality": "common"
            },
            {
              "name": "76",
              "id": "soldier-76-76",
              "quality": "common"
            },
            {
              "name": "Pulse Rifle",
              "id": "soldier-76-pulse-rifle",
              "quality": "common"
            },
            {
              "name": "Strike Commander",
              "id": "soldier-76-strike-commander",
              "quality": "common"
            },
            {
              "name": "Rockets",
              "id": "soldier-76-rockets",
              "quality": "common"
            },
            {
              "name": "Grizzled",
              "id": "soldier-76-grizzled",
              "quality": "common"
            },
            {
              "name": "Muzzle",
              "id": "soldier-76-muzzle",
              "quality": "common"
            },
            {
              "name": "Rifle: 76",
              "id": "soldier-76-rifle-76",
              "quality": "common"
            },
            {
              "name": "Resolute",
              "id": "soldier-76-resolute",
              "quality": "common"
            },
            {
              "name": "All Soldiers",
              "id": "soldier-76-all-soldiers",
              "quality": "common"
            },
            {
              "name": "Old Soldier",
              "id": "soldier-76-old-soldier",
              "quality": "common"
            },
            {
              "name": "Salute",
              "id": "soldier-76-salute",
              "quality": "common"
            },
            {
              "name": "American Hero",
              "id": "soldier-76-american-hero",
              "quality": "common"
            },
            {
              "name": "Golf",
              "id": "soldier-76-golf",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "soldier-76-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Army Man: 76",
              "id": "soldier-76-army-man-76",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "soldier-76-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Folded Hands",
              "id": "soldier-76-folded-hands",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "soldier-76-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "I've still got it",
              "id": "soldier-76-ive-still-got-it",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "You didn't make the cut",
              "id": "soldier-76-you-didnt-make-the-cut",
              "quality": "common"
            },
            {
              "name": "Not on my watch",
              "id": "soldier-76-not-on-my-watch",
              "quality": "common"
            },
            {
              "name": "That's \"sir\" to you",
              "id": "soldier-76-thats-sir-to-you",
              "quality": "common"
            },
            {
              "name": "I didn't start this war...",
              "id": "soldier-76-i-didnt-start-this-war",
              "quality": "common"
            },
            {
              "name": "Old soldiers",
              "id": "soldier-76-old-soldiers",
              "quality": "common"
            },
            {
              "name": "What are you lookin' at?",
              "id": "soldier-76-what-are-you-lookin-at",
              "quality": "common"
            },
            {
              "name": "I'm an army of one",
              "id": "soldier-76-im-an-army-of-one",
              "quality": "common"
            },
            {
              "name": "You're the other one",
              "id": "soldier-76-youre-the-other-one",
              "quality": "common"
            },
            {
              "name": "Smells like victory",
              "id": "soldier-76-smells-like-victory",
              "quality": "common"
            },
            {
              "name": "Get off my lawn",
              "id": "soldier-76-get-off-my-lawn",
              "quality": "common"
            },
            {
              "name": "You want a medal?",
              "id": "soldier-76-you-want-a-medal",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Knock knock",
              "id": "soldier-76-knock-knock",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Stay frosty",
              "id": "soldier-76-stay-frosty",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "The rooster crows",
              "id": "soldier-76-the-rooster-crows",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "soldier-76-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Soldier",
              "id": "soldier-76-soldier",
              "quality": "rare"
            },
            {
              "name": "Locked and Loaded",
              "id": "soldier-76-locked-and-loaded",
              "quality": "rare"
            },
            {
              "name": "Fist Pump",
              "id": "soldier-76-fist-pump",
              "quality": "rare"
            },
            {
              "name": "Golf Swing",
              "id": "soldier-76-golf-swing",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "soldier-76-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Toast",
              "id": "soldier-76-toast",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ]
        }
      },
      "sombra": {
        "name": "Sombra",
        "class": "Assault",
        "id": "sombra",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "sombra-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Cidro",
              "id": "sombra-cidro",
              "quality": "rare"
            },
            {
              "name": "Incendio",
              "id": "sombra-incendio",
              "quality": "rare"
            },
            {
              "name": "Mar",
              "id": "sombra-mar",
              "quality": "rare"
            },
            {
              "name": "Noche",
              "id": "sombra-noche",
              "quality": "rare"
            },
            {
              "name": "Glitch",
              "id": "sombra-glitch",
              "quality": "epic"
            },
            {
              "name": "Virus",
              "id": "sombra-virus",
              "quality": "epic"
            },
            {
              "name": "Los Muertos",
              "id": "sombra-los-muertos",
              "quality": "legendary"
            },
            {
              "name": "Azúcar",
              "id": "sombra-azucar",
              "quality": "legendary"
            },
            {
              "name": "Cyberspace",
              "id": "sombra-cyberspace",
              "quality": "legendary"
            },
            {
              "name": "Augmented",
              "id": "sombra-augmented",
              "quality": "legendary"
            },
            {
              "name": "Peppermint",
              "id": "sombra-peppermint",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "sombra-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Amused",
              "id": "sombra-amused",
              "quality": "epic"
            },
            {
              "name": "Masterpiece",
              "id": "sombra-masterpiece",
              "quality": "epic"
            },
            {
              "name": "Hold On",
              "id": "sombra-hold-on",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "sombra-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Undetected",
              "id": "sombra-undetected",
              "quality": "epic"
            },
            {
              "name": "Hacking",
              "id": "sombra-hacking",
              "quality": "epic"
            },
            {
              "name": "Pulse",
              "id": "sombra-pulse",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Sombra",
              "id": "sombra-sombra",
              "quality": "rare"
            },
            {
              "name": "Skull",
              "id": "sombra-skull",
              "quality": "rare"
            },
            {
              "name": "Hacker",
              "id": "sombra-hacker",
              "quality": "rare"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "sombra-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "sombra-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Marionette",
              "id": "sombra-marionette",
              "quality": "common"
            },
            {
              "name": "Calavera",
              "id": "sombra-calavera",
              "quality": "common"
            },
            {
              "name": "Neural",
              "id": "sombra-neural",
              "quality": "common"
            },
            {
              "name": "Hacked",
              "id": "sombra-hacked",
              "quality": "common"
            },
            {
              "name": "Virus",
              "id": "sombra-virus",
              "quality": "common"
            },
            {
              "name": "Illusive",
              "id": "sombra-illusive",
              "quality": "common"
            },
            {
              "name": "Machine Pistol",
              "id": "sombra-machine-pistol",
              "quality": "common"
            },
            {
              "name": "Unlocked",
              "id": "sombra-unlocked",
              "quality": "common"
            },
            {
              "name": "¿Quién?",
              "id": "sombra-quin",
              "quality": "common"
            },
            {
              "name": "Translocator",
              "id": "sombra-translocator",
              "quality": "common"
            },
            {
              "name": "Superior",
              "id": "sombra-superior",
              "quality": "common"
            },
            {
              "name": "Power",
              "id": "sombra-power",
              "quality": "common"
            },
            {
              "name": "5kull",
              "id": "sombra-5kull",
              "quality": "common"
            },
            {
              "name": "Tagged",
              "id": "sombra-tagged",
              "quality": "common"
            },
            {
              "name": "Eyes",
              "id": "sombra-eyes",
              "quality": "common"
            },
            {
              "name": "Skycode",
              "id": "sombra-skycode",
              "quality": "common"
            },
            {
              "name": "Web",
              "id": "sombra-web",
              "quality": "common"
            },
            {
              "name": "Skull",
              "id": "sombra-skull",
              "quality": "common"
            },
            {
              "name": "Key",
              "id": "sombra-key",
              "quality": "common"
            },
            {
              "name": "Hacked the Moon",
              "id": "sombra-hacked-the-moon",
              "quality": "common"
            },
            {
              "name": "Agent",
              "id": "sombra-agent",
              "quality": "common"
            },
            {
              "name": "Hacker",
              "id": "sombra-hacker",
              "quality": "common"
            },
            {
              "name": "Deaf-Mute",
              "id": "sombra-deafmute",
              "quality": "common"
            },
            {
              "name": "Puzzle",
              "id": "sombra-puzzle",
              "quality": "common"
            },
            {
              "name": "Behind You",
              "id": "sombra-behind-you",
              "quality": "common"
            },
            {
              "name": "Icon",
              "id": "sombra-icon",
              "quality": "common"
            },
            {
              "name": "Puppet",
              "id": "sombra-puppet",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "sombra-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Fortunate",
              "id": "sombra-fortunate",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "sombra-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Playing Fair",
              "id": "sombra-playing-fair",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Hack the Planet",
              "id": "sombra-hack-the-planet",
              "quality": "common"
            },
            {
              "name": "Mess with the best...",
              "id": "sombra-mess-with-the-best",
              "quality": "common"
            },
            {
              "name": "Glitch in the system",
              "id": "sombra-glitch-in-the-system",
              "quality": "common"
            },
            {
              "name": "In over your head",
              "id": "sombra-in-over-your-head",
              "quality": "common"
            },
            {
              "name": "Did you mean to do that?",
              "id": "sombra-did-you-mean-to-do-that",
              "quality": "common"
            },
            {
              "name": "Taking this very seriously",
              "id": "sombra-taking-this-very-seriously",
              "quality": "common"
            },
            {
              "name": "Show me what you got",
              "id": "sombra-show-me-what-you-got",
              "quality": "common"
            },
            {
              "name": "Good one",
              "id": "sombra-good-one",
              "quality": "common"
            },
            {
              "name": "Cool",
              "id": "sombra-cool",
              "quality": "common"
            },
            {
              "name": "Just squishing a bug",
              "id": "sombra-just-squishing-a-bug",
              "quality": "common"
            },
            {
              "name": "Boop",
              "id": "sombra-boop",
              "quality": "common"
            },
            {
              "name": "I know who's been naughty",
              "id": "sombra-i-know-whos-been-naughty",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "You're easily impressed",
              "id": "sombra-youre-easily-impressed",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "sombra-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Kneeling",
              "id": "sombra-kneeling",
              "quality": "rare"
            },
            {
              "name": "Rising",
              "id": "sombra-rising",
              "quality": "rare"
            },
            {
              "name": "Hacked",
              "id": "sombra-hacked",
              "quality": "rare"
            },
            {
              "name": "Sparklers",
              "id": "sombra-sparklers",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ]
        }
      },
      "symmetra": {
        "name": "Symmetra",
        "class": "Support",
        "id": "symmetra",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "symmetra-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Hyacinth",
              "id": "symmetra-hyacinth",
              "quality": "rare"
            },
            {
              "name": "Cardamom",
              "id": "symmetra-cardamom",
              "quality": "rare"
            },
            {
              "name": "Saffron",
              "id": "symmetra-saffron",
              "quality": "rare"
            },
            {
              "name": "Technomancer",
              "id": "symmetra-technomancer",
              "quality": "rare"
            },
            {
              "name": "Regal",
              "id": "symmetra-regal",
              "quality": "epic"
            },
            {
              "name": "Utopaea",
              "id": "symmetra-utopaea",
              "quality": "epic"
            },
            {
              "name": "Devi",
              "id": "symmetra-devi",
              "quality": "legendary"
            },
            {
              "name": "Goddess",
              "id": "symmetra-goddess",
              "quality": "legendary"
            },
            {
              "name": "Vishkar",
              "id": "symmetra-vishkar",
              "quality": "legendary"
            },
            {
              "name": "Architech",
              "id": "symmetra-architech",
              "quality": "legendary"
            },
            {
              "name": "Vampire",
              "id": "symmetra-vampire",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Qipao",
              "id": "symmetra-qipao",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "symmetra-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Flow",
              "id": "symmetra-flow",
              "quality": "epic"
            },
            {
              "name": "Clap",
              "id": "symmetra-clap",
              "quality": "epic"
            },
            {
              "name": "Insignificant",
              "id": "symmetra-insignificant",
              "quality": "epic"
            },
            {
              "name": "Snicker",
              "id": "symmetra-snicker",
              "quality": "epic"
            },
            {
              "name": "Have a Seat",
              "id": "symmetra-have-a-seat",
              "quality": "epic"
            },
            {
              "name": "Ribbon",
              "id": "symmetra-ribbon",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "symmetra-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Dance",
              "id": "symmetra-dance",
              "quality": "epic"
            },
            {
              "name": "My reality",
              "id": "symmetra-my-reality",
              "quality": "epic"
            },
            {
              "name": "Askew",
              "id": "symmetra-askew",
              "quality": "epic"
            },
            {
              "name": "Snowflakes",
              "id": "symmetra-snowflakes",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "icons": [
            {
              "name": "Symmetra",
              "id": "symmetra-symmetra",
              "quality": "rare"
            },
            {
              "name": "Vishkar",
              "id": "symmetra-vishkar",
              "quality": "rare"
            },
            {
              "name": "Sentry",
              "id": "symmetra-sentry",
              "quality": "rare"
            },
            {
              "name": "Rhythmic Gymnastics",
              "id": "symmetra-rhythmic-gymnastics",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "symmetra-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "symmetra-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "symmetra-icon",
              "quality": "common"
            },
            {
              "name": "Vishkar",
              "id": "symmetra-vishkar",
              "quality": "common"
            },
            {
              "name": "Light",
              "id": "symmetra-light",
              "quality": "common"
            },
            {
              "name": "Visor",
              "id": "symmetra-visor",
              "quality": "common"
            },
            {
              "name": "Lotus",
              "id": "symmetra-lotus",
              "quality": "common"
            },
            {
              "name": "Projector",
              "id": "symmetra-projector",
              "quality": "common"
            },
            {
              "name": "Behold",
              "id": "symmetra-behold",
              "quality": "common"
            },
            {
              "name": "Pose",
              "id": "symmetra-pose",
              "quality": "common"
            },
            {
              "name": "Glove",
              "id": "symmetra-glove",
              "quality": "common"
            },
            {
              "name": "Vaswani",
              "id": "symmetra-vaswani",
              "quality": "common"
            },
            {
              "name": "Builder",
              "id": "symmetra-builder",
              "quality": "common"
            },
            {
              "name": "Architect",
              "id": "symmetra-architect",
              "quality": "common"
            },
            {
              "name": "Superior",
              "id": "symmetra-superior",
              "quality": "common"
            },
            {
              "name": "Weaver",
              "id": "symmetra-weaver",
              "quality": "common"
            },
            {
              "name": "Design",
              "id": "symmetra-design",
              "quality": "common"
            },
            {
              "name": "Agent",
              "id": "symmetra-agent",
              "quality": "common"
            },
            {
              "name": "Will",
              "id": "symmetra-will",
              "quality": "common"
            },
            {
              "name": "Car Wash",
              "id": "symmetra-car-wash",
              "quality": "common"
            },
            {
              "name": "Lines",
              "id": "symmetra-lines",
              "quality": "common"
            },
            {
              "name": "Blueprint",
              "id": "symmetra-blueprint",
              "quality": "common"
            },
            {
              "name": "Caution",
              "id": "symmetra-caution",
              "quality": "common"
            },
            {
              "name": "The Path",
              "id": "symmetra-the-path",
              "quality": "common"
            },
            {
              "name": "Satya",
              "id": "symmetra-satya",
              "quality": "common"
            },
            {
              "name": "Rhythmic",
              "id": "symmetra-rhythmic",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "symmetra-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Snowflake",
              "id": "symmetra-snowflake",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "symmetra-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Lantern",
              "id": "symmetra-lantern",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "symmetra-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Such a lack of imagination",
              "id": "symmetra-such-a-lack-of-imagination",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Why do you struggle?",
              "id": "symmetra-why-do-you-struggle",
              "quality": "common"
            },
            {
              "name": "Perfect harmony",
              "id": "symmetra-perfect-harmony",
              "quality": "common"
            },
            {
              "name": "How unsightly",
              "id": "symmetra-how-unsightly",
              "quality": "common"
            },
            {
              "name": "Exquisite",
              "id": "symmetra-exquisite",
              "quality": "common"
            },
            {
              "name": "Put you in your place",
              "id": "symmetra-put-you-in-your-place",
              "quality": "common"
            },
            {
              "name": "Precisely",
              "id": "symmetra-precisely",
              "quality": "common"
            },
            {
              "name": "Welcome to my reality",
              "id": "symmetra-welcome-to-my-reality",
              "quality": "common"
            },
            {
              "name": "Everything by design",
              "id": "symmetra-everything-by-design",
              "quality": "common"
            },
            {
              "name": "Impressive",
              "id": "symmetra-impressive",
              "quality": "common"
            },
            {
              "name": "I don't think so",
              "id": "symmetra-i-dont-think-so",
              "quality": "common"
            },
            {
              "name": "Hard work and dedication",
              "id": "symmetra-hard-work-and-dedication",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "A frightening thought",
              "id": "symmetra-a-frightening-thought",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "I made you something",
              "id": "symmetra-i-made-you-something",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Good fortune",
              "id": "symmetra-good-fortune",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "symmetra-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Creation",
              "id": "symmetra-creation",
              "quality": "rare"
            },
            {
              "name": "Balance",
              "id": "symmetra-balance",
              "quality": "rare"
            },
            {
              "name": "Dance",
              "id": "symmetra-dance",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "symmetra-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "torbjorn": {
        "name": "Torbjörn",
        "class": "Defence",
        "id": "torbjorn",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "torbjorn-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Citron",
              "id": "torbjorn-citron",
              "quality": "rare"
            },
            {
              "name": "Grön",
              "id": "torbjorn-gron",
              "quality": "rare"
            },
            {
              "name": "Blå",
              "id": "torbjorn-bla",
              "quality": "rare"
            },
            {
              "name": "Plommon",
              "id": "torbjorn-plommon",
              "quality": "rare"
            },
            {
              "name": "Woodclad",
              "id": "torbjorn-woodclad",
              "quality": "epic"
            },
            {
              "name": "Cathode",
              "id": "torbjorn-cathode",
              "quality": "epic"
            },
            {
              "name": "Deadlock",
              "id": "torbjorn-deadlock",
              "quality": "legendary"
            },
            {
              "name": "Chopper",
              "id": "torbjorn-chopper",
              "quality": "legendary"
            },
            {
              "name": "Blackbeard",
              "id": "torbjorn-blackbeard",
              "quality": "legendary"
            },
            {
              "name": "Barbarossa",
              "id": "torbjorn-barbarossa",
              "quality": "legendary"
            },
            {
              "name": "Tre Kronor",
              "id": "torbjorn-tre-kronor",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Santaclad",
              "id": "torbjorn-santaclad",
              "quality": "legendary",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "torbjorn-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Overload",
              "id": "torbjorn-overload",
              "quality": "epic"
            },
            {
              "name": "Clicking heels",
              "id": "torbjorn-clicking-heels",
              "quality": "epic"
            },
            {
              "name": "Fisticuffs",
              "id": "torbjorn-fisticuffs",
              "quality": "epic"
            },
            {
              "name": "Guffaw",
              "id": "torbjorn-guffaw",
              "quality": "epic"
            },
            {
              "name": "Taking a Break",
              "id": "torbjorn-taking-a-break",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "torbjorn-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Ride 'Em",
              "id": "torbjorn-ride-em",
              "quality": "epic"
            },
            {
              "name": "Refreshing",
              "id": "torbjorn-refreshing",
              "quality": "epic"
            },
            {
              "name": "In your face",
              "id": "torbjorn-in-your-face",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Torbjörn",
              "id": "torbjorn-torbjorn",
              "quality": "rare"
            },
            {
              "name": "Forge",
              "id": "torbjorn-forge",
              "quality": "rare"
            },
            {
              "name": "Gears",
              "id": "torbjorn-gears",
              "quality": "rare"
            },
            {
              "name": "Water Polo",
              "id": "torbjorn-water-polo",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Santaclad",
              "id": "torbjorn-santaclad",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "torbjorn-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "torbjorn-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "torbjorn-icon",
              "quality": "common"
            },
            {
              "name": "Gears",
              "id": "torbjorn-gears",
              "quality": "common"
            },
            {
              "name": "Uppgradera",
              "id": "torbjorn-uppgradera",
              "quality": "common"
            },
            {
              "name": "Smält",
              "id": "torbjorn-smlt",
              "quality": "common"
            },
            {
              "name": "Fix It Up",
              "id": "torbjorn-fix-it-up",
              "quality": "common"
            },
            {
              "name": "Kanon",
              "id": "torbjorn-kanon",
              "quality": "common"
            },
            {
              "name": "Forged",
              "id": "torbjorn-forged",
              "quality": "common"
            },
            {
              "name": "Armor",
              "id": "torbjorn-armor",
              "quality": "common"
            },
            {
              "name": "Stoic",
              "id": "torbjorn-stoic",
              "quality": "common"
            },
            {
              "name": "Ironclad",
              "id": "torbjorn-ironclad",
              "quality": "common"
            },
            {
              "name": "Turret",
              "id": "torbjorn-turret",
              "quality": "common"
            },
            {
              "name": "Hot",
              "id": "torbjorn-hot",
              "quality": "common"
            },
            {
              "name": "Hammer",
              "id": "torbjorn-hammer",
              "quality": "common"
            },
            {
              "name": "Claw",
              "id": "torbjorn-claw",
              "quality": "common"
            },
            {
              "name": "Mask",
              "id": "torbjorn-mask",
              "quality": "common"
            },
            {
              "name": "Beard",
              "id": "torbjorn-beard",
              "quality": "common"
            },
            {
              "name": "Ready to Work",
              "id": "torbjorn-ready-to-work",
              "quality": "common"
            },
            {
              "name": "Catch a Ride",
              "id": "torbjorn-catch-a-ride",
              "quality": "common"
            },
            {
              "name": "Run!",
              "id": "torbjorn-run",
              "quality": "common"
            },
            {
              "name": "Chef",
              "id": "torbjorn-chef",
              "quality": "common"
            },
            {
              "name": "Molten Core",
              "id": "torbjorn-molten-core",
              "quality": "common"
            },
            {
              "name": "Turrets",
              "id": "torbjorn-turrets",
              "quality": "common"
            },
            {
              "name": "Get Ready",
              "id": "torbjorn-get-ready",
              "quality": "common"
            },
            {
              "name": "Water Polo",
              "id": "torbjorn-water-polo",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "torbjorn-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Workshop",
              "id": "torbjorn-workshop",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "torbjorn-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Gold",
              "id": "torbjorn-gold",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "torbjorn-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Hard work pays off",
              "id": "torbjorn-hard-work-pays-off",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Leave this to an expert",
              "id": "torbjorn-leave-this-to-an-expert",
              "quality": "common"
            },
            {
              "name": "Working as intended",
              "id": "torbjorn-working-as-intended",
              "quality": "common"
            },
            {
              "name": "A chicken out of a feather",
              "id": "torbjorn-a-chicken-out-of-a-feather",
              "quality": "common"
            },
            {
              "name": "I'm Swedish!",
              "id": "torbjorn-im-swedish",
              "quality": "common"
            },
            {
              "name": "Engineers",
              "id": "torbjorn-engineers",
              "quality": "common"
            },
            {
              "name": "Let's not buy the pig",
              "id": "torbjorn-lets-not-buy-the-pig",
              "quality": "common"
            },
            {
              "name": "Don't get caught",
              "id": "torbjorn-dont-get-caught",
              "quality": "common"
            },
            {
              "name": "Some assembly required",
              "id": "torbjorn-some-assembly-required",
              "quality": "common"
            },
            {
              "name": "I'm giving it all I've got!",
              "id": "torbjorn-im-giving-it-all-ive-got",
              "quality": "common"
            },
            {
              "name": "Completion date?",
              "id": "torbjorn-completion-date",
              "quality": "common"
            },
            {
              "name": "More where that came from",
              "id": "torbjorn-more-where-that-came-from",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "If you build it",
              "id": "torbjorn-if-you-build-it",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Made to order",
              "id": "torbjorn-made-to-order",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Too hot for you?",
              "id": "torbjorn-too-hot-for-you",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "torbjorn-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Hammer",
              "id": "torbjorn-hammer",
              "quality": "rare"
            },
            {
              "name": "Sitting Pretty",
              "id": "torbjorn-sitting-pretty",
              "quality": "rare"
            },
            {
              "name": "Take five",
              "id": "torbjorn-take-five",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "torbjorn-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "torbjorn-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Toast",
              "id": "torbjorn-toast",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ]
        }
      },
      "tracer": {
        "name": "Tracer",
        "class": "Assault",
        "id": "tracer",
        "items": {
          "skins": [
            {
              "name": "Slipstream",
              "id": "tracer-slipstream",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "tracer-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Neon Green",
              "id": "tracer-neon-green",
              "quality": "rare"
            },
            {
              "name": "Royal Blue",
              "id": "tracer-royal-blue",
              "quality": "rare"
            },
            {
              "name": "Hot Pink",
              "id": "tracer-hot-pink",
              "quality": "rare"
            },
            {
              "name": "Electric Purple",
              "id": "tracer-electric-purple",
              "quality": "rare"
            },
            {
              "name": "Posh",
              "id": "tracer-posh",
              "quality": "epic"
            },
            {
              "name": "Sporty",
              "id": "tracer-sporty",
              "quality": "epic"
            },
            {
              "name": "Punk",
              "id": "tracer-punk",
              "quality": "legendary"
            },
            {
              "name": "Ultraviolet",
              "id": "tracer-ultraviolet",
              "quality": "legendary"
            },
            {
              "name": "T. Racer",
              "id": "tracer-t-racer",
              "quality": "legendary"
            },
            {
              "name": "Mach T",
              "id": "tracer-mach-t",
              "quality": "legendary"
            },
            {
              "name": "Sprinter",
              "id": "tracer-sprinter",
              "quality": "legendary",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Track and Field",
              "id": "tracer-track-and-field",
              "quality": "legendary",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Jingle",
              "id": "tracer-jingle",
              "quality": "legendary",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Rose",
              "id": "tracer-rose",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "tracer-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Spin",
              "id": "tracer-spin",
              "quality": "epic"
            },
            {
              "name": "Cheer",
              "id": "tracer-cheer",
              "quality": "epic"
            },
            {
              "name": "Having a laugh",
              "id": "tracer-having-a-laugh",
              "quality": "epic"
            },
            {
              "name": "Sitting Around...",
              "id": "tracer-sitting-around",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "tracer-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Just in Time",
              "id": "tracer-just-in-time",
              "quality": "epic"
            },
            {
              "name": "Serious Business",
              "id": "tracer-serious-business",
              "quality": "epic"
            },
            {
              "name": "Backflip",
              "id": "tracer-backflip",
              "quality": "epic"
            },
            {
              "name": "Hurdle",
              "id": "tracer-hurdle",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Lion Dance",
              "id": "tracer-lion-dance",
              "quality": "epic",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "icons": [
            {
              "name": "Tracer",
              "id": "tracer-tracer",
              "quality": "rare"
            },
            {
              "name": "Pulse Bomb",
              "id": "tracer-pulse-bomb",
              "quality": "rare"
            },
            {
              "name": "Patch",
              "id": "tracer-patch",
              "quality": "rare"
            },
            {
              "name": "Track",
              "id": "tracer-track",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Jingle",
              "id": "tracer-jingle",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "tracer-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "tracer-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "tracer-icon",
              "quality": "common"
            },
            {
              "name": "Wings",
              "id": "tracer-wings",
              "quality": "common"
            },
            {
              "name": "Blink",
              "id": "tracer-blink",
              "quality": "common"
            },
            {
              "name": "Fighter",
              "id": "tracer-fighter",
              "quality": "common"
            },
            {
              "name": "Cheers, Love",
              "id": "tracer-cheers-love",
              "quality": "common"
            },
            {
              "name": "Tagged",
              "id": "tracer-tagged",
              "quality": "common"
            },
            {
              "name": "Orange",
              "id": "tracer-orange",
              "quality": "common"
            },
            {
              "name": "Lena",
              "id": "tracer-lena",
              "quality": "common"
            },
            {
              "name": "Clock's Tickin'",
              "id": "tracer-clocks-tickin",
              "quality": "common"
            },
            {
              "name": "Pistols",
              "id": "tracer-pistols",
              "quality": "common"
            },
            {
              "name": "Shaded",
              "id": "tracer-shaded",
              "quality": "common"
            },
            {
              "name": "Pulse Bomb",
              "id": "tracer-pulse-bomb",
              "quality": "common"
            },
            {
              "name": "Bomb's Away!",
              "id": "tracer-bombs-away",
              "quality": "common"
            },
            {
              "name": "Ready for Action",
              "id": "tracer-ready-for-action",
              "quality": "common"
            },
            {
              "name": "Confident",
              "id": "tracer-confident",
              "quality": "common"
            },
            {
              "name": "Kneeling",
              "id": "tracer-kneeling",
              "quality": "common"
            },
            {
              "name": "Whatcha' Lookin' At?",
              "id": "tracer-whatcha-lookin-at",
              "quality": "common"
            },
            {
              "name": "Cavalry's Here",
              "id": "tracer-cavalrys-here",
              "quality": "common"
            },
            {
              "name": "Cheers",
              "id": "tracer-cheers",
              "quality": "common"
            },
            {
              "name": "Pew! Pew! Pew!",
              "id": "tracer-pew-pew-pew",
              "quality": "common"
            },
            {
              "name": "Poster",
              "id": "tracer-poster",
              "quality": "common"
            },
            {
              "name": "Salute",
              "id": "tracer-salute",
              "quality": "common"
            },
            {
              "name": "Portrait",
              "id": "tracer-portrait",
              "quality": "common"
            },
            {
              "name": "Track",
              "id": "tracer-track",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "tracer-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Snowboarding",
              "id": "tracer-snowboarding",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "tracer-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Fan Dance",
              "id": "tracer-fan-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "tracer-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "You got it",
              "id": "tracer-you-got-it",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Aw, rubbish",
              "id": "tracer-aw-rubbish",
              "quality": "common"
            },
            {
              "name": "Under control",
              "id": "tracer-under-control",
              "quality": "common"
            },
            {
              "name": "The world needs heroes",
              "id": "tracer-the-world-needs-heroes",
              "quality": "common"
            },
            {
              "name": "You need a time out",
              "id": "tracer-you-need-a-time-out",
              "quality": "common"
            },
            {
              "name": "Check me out",
              "id": "tracer-check-me-out",
              "quality": "common"
            },
            {
              "name": "She shoots, she scores",
              "id": "tracer-she-shoots-she-scores",
              "quality": "common"
            },
            {
              "name": "Cheers, love!",
              "id": "tracer-cheers-love",
              "quality": "common"
            },
            {
              "name": "Keep calm",
              "id": "tracer-keep-calm",
              "quality": "common"
            },
            {
              "name": "Be right back!",
              "id": "tracer-be-right-back",
              "quality": "common"
            },
            {
              "name": "déjà vu",
              "id": "tracer-dj-vu",
              "quality": "common"
            },
            {
              "name": "Eat my dust",
              "id": "tracer-eat-my-dust",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Ooh, Scary!",
              "id": "tracer-ooh-scary",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "It's in the bag",
              "id": "tracer-its-in-the-bag",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ready for some fireworks?",
              "id": "tracer-ready-for-some-fireworks",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "tracer-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Salute",
              "id": "tracer-salute",
              "quality": "rare"
            },
            {
              "name": "Over the Shoulder",
              "id": "tracer-over-the-shoulder",
              "quality": "rare"
            },
            {
              "name": "Sitting",
              "id": "tracer-sitting",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "tracer-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "widowmaker": {
        "name": "Widowmaker",
        "class": "Defence",
        "id": "widowmaker",
        "items": {
          "skins": [
            {
              "name": "Noire",
              "id": "widowmaker-noire",
              "quality": "legendary",
              "achievement": true
            },
            {
              "name": "Classic",
              "id": "widowmaker-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Ciel",
              "id": "widowmaker-ciel",
              "quality": "rare"
            },
            {
              "name": "Vert",
              "id": "widowmaker-vert",
              "quality": "rare"
            },
            {
              "name": "Nuit",
              "id": "widowmaker-nuit",
              "quality": "rare"
            },
            {
              "name": "Rose",
              "id": "widowmaker-rose",
              "quality": "rare"
            },
            {
              "name": "Winter",
              "id": "widowmaker-winter",
              "quality": "epic"
            },
            {
              "name": "Patina",
              "id": "widowmaker-patina",
              "quality": "epic"
            },
            {
              "name": "Odile",
              "id": "widowmaker-odile",
              "quality": "legendary"
            },
            {
              "name": "Odette",
              "id": "widowmaker-odette",
              "quality": "legendary"
            },
            {
              "name": "Comtesse",
              "id": "widowmaker-comtesse",
              "quality": "legendary"
            },
            {
              "name": "Huntress",
              "id": "widowmaker-huntress",
              "quality": "legendary"
            },
            {
              "name": "Tricolore",
              "id": "widowmaker-tricolore",
              "quality": "epic",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "widowmaker-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Widow's kiss",
              "id": "widowmaker-widows-kiss",
              "quality": "epic"
            },
            {
              "name": "Curtain Call",
              "id": "widowmaker-curtain-call",
              "quality": "epic"
            },
            {
              "name": "Shot Dead",
              "id": "widowmaker-shot-dead",
              "quality": "epic"
            },
            {
              "name": "Delighted",
              "id": "widowmaker-delighted",
              "quality": "epic"
            },
            {
              "name": "At Rest",
              "id": "widowmaker-at-rest",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "widowmaker-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Swinging into Action",
              "id": "widowmaker-swinging-into-action",
              "quality": "epic"
            },
            {
              "name": "I see you...",
              "id": "widowmaker-i-see-you",
              "quality": "epic"
            },
            {
              "name": "Hanging Around",
              "id": "widowmaker-hanging-around",
              "quality": "epic"
            },
            {
              "name": "Under the Mistletoe",
              "id": "widowmaker-under-the-mistletoe",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "icons": [
            {
              "name": "Widowmaker",
              "id": "widowmaker-widowmaker",
              "quality": "rare"
            },
            {
              "name": "Grappling Hook",
              "id": "widowmaker-grappling-hook",
              "quality": "rare"
            },
            {
              "name": "Baiser",
              "id": "widowmaker-baiser",
              "quality": "rare"
            },
            {
              "name": "Gymnastics",
              "id": "widowmaker-gymnastics",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "widowmaker-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "widowmaker-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "widowmaker-icon",
              "quality": "common"
            },
            {
              "name": "Blood",
              "id": "widowmaker-blood",
              "quality": "common"
            },
            {
              "name": "Baiser",
              "id": "widowmaker-baiser",
              "quality": "common"
            },
            {
              "name": "Widow's Kiss",
              "id": "widowmaker-widows-kiss",
              "quality": "common"
            },
            {
              "name": "Emblem",
              "id": "widowmaker-emblem",
              "quality": "common"
            },
            {
              "name": "Crouch",
              "id": "widowmaker-crouch",
              "quality": "common"
            },
            {
              "name": "Swing",
              "id": "widowmaker-swing",
              "quality": "common"
            },
            {
              "name": "Detected",
              "id": "widowmaker-detected",
              "quality": "common"
            },
            {
              "name": "Noire",
              "id": "widowmaker-noire",
              "quality": "common"
            },
            {
              "name": "Kneeling",
              "id": "widowmaker-kneeling",
              "quality": "common"
            },
            {
              "name": "Gaze",
              "id": "widowmaker-gaze",
              "quality": "common"
            },
            {
              "name": "Veuve",
              "id": "widowmaker-veuve",
              "quality": "common"
            },
            {
              "name": "Widow",
              "id": "widowmaker-widow",
              "quality": "common"
            },
            {
              "name": "Sniper",
              "id": "widowmaker-sniper",
              "quality": "common"
            },
            {
              "name": "Une Balle",
              "id": "widowmaker-une-balle",
              "quality": "common"
            },
            {
              "name": "Black Widow",
              "id": "widowmaker-black-widow",
              "quality": "common"
            },
            {
              "name": "No One Escapes",
              "id": "widowmaker-no-one-escapes",
              "quality": "common"
            },
            {
              "name": "Hourglass",
              "id": "widowmaker-hourglass",
              "quality": "common"
            },
            {
              "name": "Scope",
              "id": "widowmaker-scope",
              "quality": "common"
            },
            {
              "name": "In My Sights",
              "id": "widowmaker-in-my-sights",
              "quality": "common"
            },
            {
              "name": "Je Te Vois",
              "id": "widowmaker-je-te-vois",
              "quality": "common"
            },
            {
              "name": "Spider",
              "id": "widowmaker-spider",
              "quality": "common"
            },
            {
              "name": "Portrait",
              "id": "widowmaker-portrait",
              "quality": "common"
            },
            {
              "name": "Gymnastics",
              "id": "widowmaker-gymnastics",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "widowmaker-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Skiing",
              "id": "widowmaker-skiing",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "widowmaker-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Hairpin",
              "id": "widowmaker-hairpin",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "widowmaker-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "A single death",
              "id": "widowmaker-a-single-death",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Encore?",
              "id": "widowmaker-encore",
              "quality": "common"
            },
            {
              "name": "What's an aimbot?",
              "id": "widowmaker-whats-an-aimbot",
              "quality": "common"
            },
            {
              "name": "Ouh là là",
              "id": "widowmaker-ouh-l-l",
              "quality": "common"
            },
            {
              "name": "Look for the woman",
              "id": "widowmaker-look-for-the-woman",
              "quality": "common"
            },
            {
              "name": "One shot, one kill",
              "id": "widowmaker-one-shot-one-kill",
              "quality": "common"
            },
            {
              "name": "Magnifique",
              "id": "widowmaker-magnifique",
              "quality": "common"
            },
            {
              "name": "Let them eat cake",
              "id": "widowmaker-let-them-eat-cake",
              "quality": "common"
            },
            {
              "name": "To life, to death",
              "id": "widowmaker-to-life-to-death",
              "quality": "common"
            },
            {
              "name": "That's how it is",
              "id": "widowmaker-thats-how-it-is",
              "quality": "common"
            },
            {
              "name": "Step into my parlor...",
              "id": "widowmaker-step-into-my-parlor",
              "quality": "common"
            },
            {
              "name": "I don't miss",
              "id": "widowmaker-i-dont-miss",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "The party is over",
              "id": "widowmaker-the-party-is-over",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Exquisite",
              "id": "widowmaker-exquisite",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "You have my attention",
              "id": "widowmaker-you-have-my-attention",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "widowmaker-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Over the Shoulder",
              "id": "widowmaker-over-the-shoulder",
              "quality": "rare"
            },
            {
              "name": "Activating Visor",
              "id": "widowmaker-activating-visor",
              "quality": "rare"
            },
            {
              "name": "Gaze",
              "id": "widowmaker-gaze",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "widowmaker-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "widowmaker-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "winston": {
        "name": "Winston",
        "class": "Tank",
        "id": "winston",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "winston-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Forest",
              "id": "winston-forest",
              "quality": "rare"
            },
            {
              "name": "Atmosphere",
              "id": "winston-atmosphere",
              "quality": "rare"
            },
            {
              "name": "Banana",
              "id": "winston-banana",
              "quality": "rare"
            },
            {
              "name": "Red Planet",
              "id": "winston-red-planet",
              "quality": "rare"
            },
            {
              "name": "Desert",
              "id": "winston-desert",
              "quality": "epic"
            },
            {
              "name": "Horizon",
              "id": "winston-horizon",
              "quality": "epic"
            },
            {
              "name": "Undersea",
              "id": "winston-undersea",
              "quality": "legendary"
            },
            {
              "name": "Frogston",
              "id": "winston-frogston",
              "quality": "legendary"
            },
            {
              "name": "Explorer",
              "id": "winston-explorer",
              "quality": "legendary"
            },
            {
              "name": "Safari",
              "id": "winston-safari",
              "quality": "legendary"
            },
            {
              "name": "Yeti",
              "id": "winston-yeti",
              "quality": "legendary",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Wukong",
              "id": "winston-wukong",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "winston-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Roar",
              "id": "winston-roar",
              "quality": "epic"
            },
            {
              "name": "Peanut butter?",
              "id": "winston-peanut-butter",
              "quality": "epic"
            },
            {
              "name": "Monkey Business",
              "id": "winston-monkey-business",
              "quality": "epic"
            },
            {
              "name": "Laughing Matter",
              "id": "winston-laughing-matter",
              "quality": "epic"
            },
            {
              "name": "Sitting Around",
              "id": "winston-sitting-around",
              "quality": "epic"
            },
            {
              "name": "Shadow Puppets",
              "id": "winston-shadow-puppets",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "winston-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Primal Rage",
              "id": "winston-primal-rage",
              "quality": "epic"
            },
            {
              "name": "Glasses",
              "id": "winston-glasses",
              "quality": "epic"
            },
            {
              "name": "Excuse Me",
              "id": "winston-excuse-me",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Winston",
              "id": "winston-winston",
              "quality": "rare"
            },
            {
              "name": "Peanut Butter",
              "id": "winston-peanut-butter",
              "quality": "rare"
            },
            {
              "name": "Lunar Ops",
              "id": "winston-lunar-ops",
              "quality": "rare"
            },
            {
              "name": "Volleyball",
              "id": "winston-volleyball",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Yeti",
              "id": "winston-yeti",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Monkey",
              "id": "winston-monkey",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "winston-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "winston-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "winston-icon",
              "quality": "common"
            },
            {
              "name": "Lexigrams",
              "id": "winston-lexigrams",
              "quality": "common"
            },
            {
              "name": "Science!",
              "id": "winston-science",
              "quality": "common"
            },
            {
              "name": "Horizon",
              "id": "winston-horizon",
              "quality": "common"
            },
            {
              "name": "PB",
              "id": "winston-pb",
              "quality": "common"
            },
            {
              "name": "White",
              "id": "winston-white",
              "quality": "common"
            },
            {
              "name": "Ape Crossing",
              "id": "winston-ape-crossing",
              "quality": "common"
            },
            {
              "name": "Q.E.D.",
              "id": "winston-qed",
              "quality": "common"
            },
            {
              "name": "Serious",
              "id": "winston-serious",
              "quality": "common"
            },
            {
              "name": "Mine!",
              "id": "winston-mine",
              "quality": "common"
            },
            {
              "name": "Lightning",
              "id": "winston-lightning",
              "quality": "common"
            },
            {
              "name": "Explorer",
              "id": "winston-explorer",
              "quality": "common"
            },
            {
              "name": "Wow",
              "id": "winston-wow",
              "quality": "common"
            },
            {
              "name": "Research",
              "id": "winston-research",
              "quality": "common"
            },
            {
              "name": "Harold",
              "id": "winston-harold",
              "quality": "common"
            },
            {
              "name": "Swing",
              "id": "winston-swing",
              "quality": "common"
            },
            {
              "name": "Banana",
              "id": "winston-banana",
              "quality": "common"
            },
            {
              "name": "Baby",
              "id": "winston-baby",
              "quality": "common"
            },
            {
              "name": "Primal Rage",
              "id": "winston-primal-rage",
              "quality": "common"
            },
            {
              "name": "Angry",
              "id": "winston-angry",
              "quality": "common"
            },
            {
              "name": "Roar",
              "id": "winston-roar",
              "quality": "common"
            },
            {
              "name": "Rage",
              "id": "winston-rage",
              "quality": "common"
            },
            {
              "name": "Fastball",
              "id": "winston-fastball",
              "quality": "common"
            },
            {
              "name": "Volleyball",
              "id": "winston-volleyball",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "winston-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Presents",
              "id": "winston-presents",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "winston-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Kite",
              "id": "winston-kite",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "winston-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Curious",
              "id": "winston-curious",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "No monkey business",
              "id": "winston-no-monkey-business",
              "quality": "common"
            },
            {
              "name": "Natural selection",
              "id": "winston-natural-selection",
              "quality": "common"
            },
            {
              "name": "Don't get me angry",
              "id": "winston-dont-get-me-angry",
              "quality": "common"
            },
            {
              "name": "How embarrassing!",
              "id": "winston-how-embarrassing",
              "quality": "common"
            },
            {
              "name": "The power of science!",
              "id": "winston-the-power-of-science",
              "quality": "common"
            },
            {
              "name": "...Excuse me",
              "id": "winston-excuse-me",
              "quality": "common"
            },
            {
              "name": "Peanut butter?",
              "id": "winston-peanut-butter",
              "quality": "common"
            },
            {
              "name": "Sorry about that!",
              "id": "winston-sorry-about-that",
              "quality": "common"
            },
            {
              "name": "We have a problem",
              "id": "winston-we-have-a-problem",
              "quality": "common"
            },
            {
              "name": "I do not want a banana",
              "id": "winston-i-do-not-want-a-banana",
              "quality": "common"
            },
            {
              "name": "Playtime's over",
              "id": "winston-playtimes-over",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "This is not a costume",
              "id": "winston-this-is-not-a-costume",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "I... got you something",
              "id": "winston-i-got-you-something",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "That was awesome!",
              "id": "winston-that-was-awesome",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "winston-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "The Thinker",
              "id": "winston-the-thinker",
              "quality": "rare"
            },
            {
              "name": "Glasses",
              "id": "winston-glasses",
              "quality": "rare"
            },
            {
              "name": "Beast",
              "id": "winston-beast",
              "quality": "rare"
            },
            {
              "name": "Medal",
              "id": "winston-medal",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "winston-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "zarya": {
        "name": "Zarya",
        "class": "Tank",
        "id": "zarya",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "zarya-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Taiga",
              "id": "zarya-taiga",
              "quality": "rare"
            },
            {
              "name": "Violet",
              "id": "zarya-violet",
              "quality": "rare"
            },
            {
              "name": "Brick",
              "id": "zarya-brick",
              "quality": "rare"
            },
            {
              "name": "Goldenrod",
              "id": "zarya-goldenrod",
              "quality": "rare"
            },
            {
              "name": "Dawn",
              "id": "zarya-dawn",
              "quality": "epic"
            },
            {
              "name": "Midnight",
              "id": "zarya-midnight",
              "quality": "epic"
            },
            {
              "name": "Industrial",
              "id": "zarya-industrial",
              "quality": "legendary"
            },
            {
              "name": "Cybergoth",
              "id": "zarya-cybergoth",
              "quality": "legendary"
            },
            {
              "name": "Siberian Front",
              "id": "zarya-siberian-front",
              "quality": "legendary"
            },
            {
              "name": "Arctic",
              "id": "zarya-arctic",
              "quality": "legendary"
            },
            {
              "name": "Champion",
              "id": "zarya-champion",
              "quality": "legendary",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Weightlifter",
              "id": "zarya-weightlifter",
              "quality": "legendary",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Frosted",
              "id": "zarya-frosted",
              "quality": "epic",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "zarya-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Pumping Iron",
              "id": "zarya-pumping-iron",
              "quality": "epic"
            },
            {
              "name": "Bring It On",
              "id": "zarya-bring-it-on",
              "quality": "epic"
            },
            {
              "name": "Crush You",
              "id": "zarya-crush-you",
              "quality": "epic"
            },
            {
              "name": "Comedy gold",
              "id": "zarya-comedy-gold",
              "quality": "epic"
            },
            {
              "name": "Take a Knee",
              "id": "zarya-take-a-knee",
              "quality": "epic"
            },
            {
              "name": "Mystery Gift",
              "id": "zarya-mystery-gift",
              "quality": "legendary",
              "event": "WINTER_WONDERLAND_2016"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "zarya-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "This Is Strength",
              "id": "zarya-this-is-strength",
              "quality": "epic"
            },
            {
              "name": "DEADLIFT",
              "id": "zarya-deadlift",
              "quality": "epic"
            },
            {
              "name": "Maximum Charge",
              "id": "zarya-maximum-charge",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Zarya",
              "id": "zarya-zarya",
              "quality": "rare"
            },
            {
              "name": "Particle Barrier",
              "id": "zarya-particle-barrier",
              "quality": "rare"
            },
            {
              "name": "512",
              "id": "zarya-512",
              "quality": "rare"
            },
            {
              "name": "Weightlifting",
              "id": "zarya-weightlifting",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "zarya-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "zarya-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "zarya-icon",
              "quality": "common"
            },
            {
              "name": "Shield",
              "id": "zarya-shield",
              "quality": "common"
            },
            {
              "name": "Surge",
              "id": "zarya-surge",
              "quality": "common"
            },
            {
              "name": "Pumped",
              "id": "zarya-pumped",
              "quality": "common"
            },
            {
              "name": "512",
              "id": "zarya-512",
              "quality": "common"
            },
            {
              "name": "Barrier",
              "id": "zarya-barrier",
              "quality": "common"
            },
            {
              "name": "Lift",
              "id": "zarya-lift",
              "quality": "common"
            },
            {
              "name": "Focused",
              "id": "zarya-focused",
              "quality": "common"
            },
            {
              "name": "Defender",
              "id": "zarya-defender",
              "quality": "common"
            },
            {
              "name": "Weights",
              "id": "zarya-weights",
              "quality": "common"
            },
            {
              "name": "For the People",
              "id": "zarya-for-the-people",
              "quality": "common"
            },
            {
              "name": "Cannon",
              "id": "zarya-cannon",
              "quality": "common"
            },
            {
              "name": "Gun Show",
              "id": "zarya-gun-show",
              "quality": "common"
            },
            {
              "name": "Pink",
              "id": "zarya-pink",
              "quality": "common"
            },
            {
              "name": "Champion",
              "id": "zarya-champion",
              "quality": "common"
            },
            {
              "name": "Wrestle",
              "id": "zarya-wrestle",
              "quality": "common"
            },
            {
              "name": "Bear",
              "id": "zarya-bear",
              "quality": "common"
            },
            {
              "name": "Smile",
              "id": "zarya-smile",
              "quality": "common"
            },
            {
              "name": "Strength",
              "id": "zarya-strength",
              "quality": "common"
            },
            {
              "name": "Avenger",
              "id": "zarya-avenger",
              "quality": "common"
            },
            {
              "name": "We Are Strong",
              "id": "zarya-we-are-strong",
              "quality": "common"
            },
            {
              "name": "Tobelstein",
              "id": "zarya-tobelstein",
              "quality": "common"
            },
            {
              "name": "Alexandra",
              "id": "zarya-alexandra",
              "quality": "common"
            },
            {
              "name": "Weightlifting",
              "id": "zarya-weightlifting",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "zarya-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Matryoshka",
              "id": "zarya-matryoshka",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "zarya-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Calories",
              "id": "zarya-calories",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "zarya-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "Strong as the mountain",
              "id": "zarya-strong-as-the-mountain",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Need personal training?",
              "id": "zarya-need-personal-training",
              "quality": "common"
            },
            {
              "name": "Get down, give me 20",
              "id": "zarya-get-down-give-me-20",
              "quality": "common"
            },
            {
              "name": "No mercy",
              "id": "zarya-no-mercy",
              "quality": "common"
            },
            {
              "name": "Welcome to the gun show",
              "id": "zarya-welcome-to-the-gun-show",
              "quality": "common"
            },
            {
              "name": "Together we are strong",
              "id": "zarya-together-we-are-strong",
              "quality": "common"
            },
            {
              "name": "I can bench more than you",
              "id": "zarya-i-can-bench-more-than-you",
              "quality": "common"
            },
            {
              "name": "Siberian bear",
              "id": "zarya-siberian-bear",
              "quality": "common"
            },
            {
              "name": "I am Mother Russia",
              "id": "zarya-i-am-mother-russia",
              "quality": "common"
            },
            {
              "name": "In Russia, game plays you",
              "id": "zarya-in-russia-game-plays-you",
              "quality": "common"
            },
            {
              "name": "I will break you",
              "id": "zarya-i-will-break-you",
              "quality": "common"
            },
            {
              "name": "No pain, no gain",
              "id": "zarya-no-pain-no-gain",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Never forget the fallen",
              "id": "zarya-never-forget-the-fallen",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "For the Motherland",
              "id": "zarya-for-the-motherland",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Get pumped",
              "id": "zarya-get-pumped",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "zarya-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Casual",
              "id": "zarya-casual",
              "quality": "rare"
            },
            {
              "name": "Flexing",
              "id": "zarya-flexing",
              "quality": "rare"
            },
            {
              "name": "Check out this gun",
              "id": "zarya-check-out-this-gun",
              "quality": "rare"
            },
            {
              "name": "R.I.P.",
              "id": "zarya-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      },
      "zenyatta": {
        "name": "Zenyatta",
        "class": "Support",
        "id": "zenyatta",
        "items": {
          "skins": [
            {
              "name": "Classic",
              "id": "zenyatta-classic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Leaf",
              "id": "zenyatta-leaf",
              "quality": "rare"
            },
            {
              "name": "Water",
              "id": "zenyatta-water",
              "quality": "rare"
            },
            {
              "name": "Earth",
              "id": "zenyatta-earth",
              "quality": "rare"
            },
            {
              "name": "Air",
              "id": "zenyatta-air",
              "quality": "rare"
            },
            {
              "name": "Ascendant",
              "id": "zenyatta-ascendant",
              "quality": "epic"
            },
            {
              "name": "Harmonious",
              "id": "zenyatta-harmonious",
              "quality": "epic"
            },
            {
              "name": "Ra",
              "id": "zenyatta-ra",
              "quality": "legendary"
            },
            {
              "name": "Sunyatta",
              "id": "zenyatta-sunyatta",
              "quality": "legendary"
            },
            {
              "name": "Djinnyatta",
              "id": "zenyatta-djinnyatta",
              "quality": "legendary"
            },
            {
              "name": "Ifrit",
              "id": "zenyatta-ifrit",
              "quality": "legendary"
            },
            {
              "name": "Skullyatta",
              "id": "zenyatta-skullyatta",
              "quality": "epic",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Nutcracker",
              "id": "zenyatta-nutcracker",
              "quality": "legendary",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Sanzang",
              "id": "zenyatta-sanzang",
              "quality": "legendary",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "emotes": [
            {
              "name": "Heroic",
              "id": "zenyatta-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Focusing",
              "id": "zenyatta-focusing",
              "quality": "epic"
            },
            {
              "name": "Round of Applause",
              "id": "zenyatta-round-of-applause",
              "quality": "epic"
            },
            {
              "name": "Taunt",
              "id": "zenyatta-taunt",
              "quality": "epic"
            },
            {
              "name": "Tickled",
              "id": "zenyatta-tickled",
              "quality": "epic"
            },
            {
              "name": "Meditate",
              "id": "zenyatta-meditate",
              "quality": "epic"
            }
          ],
          "intros": [
            {
              "name": "Heroic",
              "id": "zenyatta-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Focused",
              "id": "zenyatta-focused",
              "quality": "epic"
            },
            {
              "name": "Harmony and Discord",
              "id": "zenyatta-harmony-and-discord",
              "quality": "epic"
            },
            {
              "name": "Transcendence",
              "id": "zenyatta-transcendence",
              "quality": "epic"
            }
          ],
          "icons": [
            {
              "name": "Zenyatta",
              "id": "zenyatta-zenyatta",
              "quality": "rare"
            },
            {
              "name": "Harmony",
              "id": "zenyatta-harmony",
              "quality": "rare"
            },
            {
              "name": "Meditation",
              "id": "zenyatta-meditation",
              "quality": "rare"
            },
            {
              "name": "Taekwondo",
              "id": "zenyatta-taekwondo",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Nutcracker",
              "id": "zenyatta-nutcracker",
              "quality": "rare",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Sanzang",
              "id": "zenyatta-sanzang",
              "quality": "rare",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "sprays": [
            {
              "name": "Pixel",
              "id": "zenyatta-pixel",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Cute",
              "id": "zenyatta-cute",
              "quality": "common",
              "achievement": true
            },
            {
              "name": "Icon",
              "id": "zenyatta-icon",
              "quality": "common"
            },
            {
              "name": "Graphic",
              "id": "zenyatta-graphic",
              "quality": "common"
            },
            {
              "name": "Balance",
              "id": "zenyatta-balance",
              "quality": "common"
            },
            {
              "name": "Adorable",
              "id": "zenyatta-adorable",
              "quality": "common"
            },
            {
              "name": "Together",
              "id": "zenyatta-together",
              "quality": "common"
            },
            {
              "name": "Nine",
              "id": "zenyatta-nine",
              "quality": "common"
            },
            {
              "name": "Tekhartha",
              "id": "zenyatta-tekhartha",
              "quality": "common"
            },
            {
              "name": "Enlightened",
              "id": "zenyatta-enlightened",
              "quality": "common"
            },
            {
              "name": "Orbs",
              "id": "zenyatta-orbs",
              "quality": "common"
            },
            {
              "name": "Flow",
              "id": "zenyatta-flow",
              "quality": "common"
            },
            {
              "name": "Throw",
              "id": "zenyatta-throw",
              "quality": "common"
            },
            {
              "name": "Guru",
              "id": "zenyatta-guru",
              "quality": "common"
            },
            {
              "name": "Hand",
              "id": "zenyatta-hand",
              "quality": "common"
            },
            {
              "name": "Peace",
              "id": "zenyatta-peace",
              "quality": "common"
            },
            {
              "name": "Taunt",
              "id": "zenyatta-taunt",
              "quality": "common"
            },
            {
              "name": "Fist Bump",
              "id": "zenyatta-fist-bump",
              "quality": "common"
            },
            {
              "name": "Discord",
              "id": "zenyatta-discord",
              "quality": "common"
            },
            {
              "name": "Harmony",
              "id": "zenyatta-harmony",
              "quality": "common"
            },
            {
              "name": "Inner Fire",
              "id": "zenyatta-inner-fire",
              "quality": "common"
            },
            {
              "name": "Contemplative",
              "id": "zenyatta-contemplative",
              "quality": "common"
            },
            {
              "name": "Orb",
              "id": "zenyatta-orb",
              "quality": "common"
            },
            {
              "name": "Aura",
              "id": "zenyatta-aura",
              "quality": "common"
            },
            {
              "name": "Foot",
              "id": "zenyatta-foot",
              "quality": "common"
            },
            {
              "name": "Taekwondo",
              "id": "zenyatta-taekwondo",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or Treat",
              "id": "zenyatta-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "Snowball Fight",
              "id": "zenyatta-snowball-fight",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Ornament",
              "id": "zenyatta-ornament",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Yut Nori",
              "id": "zenyatta-yut-nori",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            },
            {
              "name": "Dragon Dance",
              "id": "zenyatta-dragon-dance",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "voicelines": [
            {
              "name": "We are in harmony",
              "id": "zenyatta-we-are-in-harmony",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Hello, world!",
              "id": "zenyatta-hello-world",
              "quality": "common"
            },
            {
              "name": "Death is whimsical today",
              "id": "zenyatta-death-is-whimsical-today",
              "quality": "common"
            },
            {
              "name": "Peace and blessings",
              "id": "zenyatta-peace-and-blessings",
              "quality": "common"
            },
            {
              "name": "The iris embraces you",
              "id": "zenyatta-the-iris-embraces-you",
              "quality": "common"
            },
            {
              "name": "Free your mind",
              "id": "zenyatta-free-your-mind",
              "quality": "common"
            },
            {
              "name": "I dreamt I was a butterfly",
              "id": "zenyatta-i-dreamt-i-was-a-butterfly",
              "quality": "common"
            },
            {
              "name": "I will not juggle",
              "id": "zenyatta-i-will-not-juggle",
              "quality": "common"
            },
            {
              "name": "Do I think?",
              "id": "zenyatta-do-i-think",
              "quality": "common"
            },
            {
              "name": "Ones and zeroes",
              "id": "zenyatta-ones-and-zeroes",
              "quality": "common"
            },
            {
              "name": "I think, therefore I am",
              "id": "zenyatta-i-think-therefore-i-am",
              "quality": "common"
            },
            {
              "name": "Strive for improvement",
              "id": "zenyatta-strive-for-improvement",
              "quality": "common",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "Trick or treat?",
              "id": "zenyatta-trick-or-treat",
              "quality": "common",
              "event": "HALLOWEEN_2016"
            },
            {
              "name": "No snowflake",
              "id": "zenyatta-no-snowflake",
              "quality": "common",
              "event": "WINTER_WONDERLAND_2016"
            },
            {
              "name": "Every rooster crows",
              "id": "zenyatta-every-rooster-crows",
              "quality": "common",
              "event": "YEAR_OF_THE_ROOSTER_2017"
            }
          ],
          "poses": [
            {
              "name": "Heroic",
              "id": "zenyatta-heroic",
              "quality": "common",
              "standardItem": true
            },
            {
              "name": "Balance",
              "id": "zenyatta-balance",
              "quality": "rare"
            },
            {
              "name": "Peace",
              "id": "zenyatta-peace",
              "quality": "rare"
            },
            {
              "name": "Harmony",
              "id": "zenyatta-harmony",
              "quality": "rare"
            },
            {
              "name": "Medals",
              "id": "zenyatta-medals",
              "quality": "rare",
              "event": "SUMMER_GAMES_2016"
            },
            {
              "name": "R.I.P.",
              "id": "zenyatta-rip",
              "quality": "rare",
              "event": "HALLOWEEN_2016"
            }
          ]
        }
      }
    }
  }
})
