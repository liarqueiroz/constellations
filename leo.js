document.addEventListener("DOMContentLoaded", function(event) {

    var svgEl = document.getElementsByTagName('svg')[0],
        arms = 5,
        outerRadius = 50,
        innerRadius = 25,
        centers = [
            {x: 940, y: 470},
            {x: 1080, y: 640},
            {x: 1100, y: 900},
            {x: 415, y: 840},
            {x: 130, y: 870},
            {x: 375, y: 540},
            {x: 970, y: 300},
            {x: 1200, y: 180},
            {x: 1270, y: 290}
        ];

    centers.forEach(function(center, index) {
        var starIndex = index + 1;
            id = 'star' + starIndex,
            star = document.getElementById(id),
            duration = 1 + Math.random() * 3;

        star.setAttribute('points', CalculateStarPoints(center.x, center.y, arms, outerRadius, innerRadius));
        star.style.animation = duration + "s gleam infinite ease";
    });

    var path = document.getElementById('path'),
        points = centers[0].x + ',' + centers[0].y + ' ' +
                 centers[1].x + ',' + centers[1].y + ' ' +
                 centers[2].x + ',' + centers[2].y + ' ' +
                 centers[3].x + ',' + centers[3].y + ' ' +
                 centers[4].x + ',' + centers[4].y + ' ' +
                 centers[5].x + ',' + centers[5].y + ' ' +
                 centers[0].x + ',' + centers[0].y + ' ' +
                 centers[6].x + ',' + centers[6].y + ' ' +
                 centers[7].x + ',' + centers[7].y + ' ' +
                 centers[8].x + ',' + centers[8].y;

    path.setAttribute('points', points);
});