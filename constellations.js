document.addEventListener("DOMContentLoaded", function(event) {

    function createConstellation(constellation) {
        var arms = 5,
            outerRadius = 30,
            innerRadius = 15;

        constellation.starCenters.forEach(function(center, index) {
            var starIndex = index + 1;
                id = constellation.name + '-' + starIndex,
                star = document.getElementById(id),
                duration = 1 + Math.random() * 3;

            star.setAttribute('points', CalculateStarPoints(center.x, center.y, arms, outerRadius, innerRadius));
            star.style.animation = duration + "s gleam infinite ease";
        });



        constellation.path.forEach(function(path, index){
            var pathStr = '',
                pathIndex = index + 1;
            path.forEach(function(pointIndex) {
                pathStr += constellation.starCenters[pointIndex].x + ',' + constellation.starCenters[pointIndex].y + ' ';
            });

            document.getElementById(constellation.name + '-path-' + pathIndex).setAttribute('points', pathStr);
        });
    }

    var leoMinor = {
            name: 'leo-minor',
            starCenters: [
                {x: 5, y: 1000},
                {x: 150, y: 1270},
                {x: 250, y: 1470},
                {x: 140, y: 1370}
            ],
            path: [[0, 1, 2, 3, 1]]
        },
        leo = {
            name: 'leo',
            starCenters: [
                {x: 630, y: 860},
                {x: 550, y: 1000},
                {x: 750, y: 1200},
                {x: 930, y: 1150},
                {x: 1000, y: 1000},
                {x: 1170, y: 890},
                {x: 1260, y: 1540},
                {x: 1370, y: 1740},
                {x: 1060, y: 1600}
            ],
            path: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 3]]
        },
        cancer = {
            name: 'cancer',
            starCenters: [
                {x: 50, y: 350},
                {x: 100, y: 550},
                {x: 300, y: 400},
                {x: 370, y: 350},
                {x: 550, y: 50},
                {x: 650, y: 400}
            ],
            path: [
                [0, 2, 3, 4],
                [1, 2, 3, 5]
            ]
        },
        sextans = {
            name: 'sextans',
            starCenters: [
                {x: 1500, y: 760},
                {x: 1650, y: 1000}
            ],
            path: [[0, 1]]
        },
        hydra = {
            name: 'hydra',
            starCenters: [
                {x:860, y: 130},
                {x:750, y: 200},
                {x:820, y: 310},
                {x:880, y: 325},
                {x:890, y: 200},
                {x:920, y: 400},
                {x:1180, y: 500},
                {x:1420, y: 570},
                {x:1460, y: 500},
                {x:1700, y: 400},
                {x:1920, y: 500},
                {x:1880, y: 700},
                {x:2020, y: 750},
                {x:2050, y: 900}
            ],
            path: [[3, 4, 0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13]]
        };


    createConstellation(leoMinor);
    createConstellation(leo);
    createConstellation(cancer);
    createConstellation(sextans);
    createConstellation(hydra);
});