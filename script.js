var containers = [
    ["#skillsContainer1", 0],
    ["#skillsContainer2", 0],
    ];

var skills = [
    [
        ["#container1" , 'C#', 0.8],
        ['#container2' , 'SQL', 0.8],
        ['#container3' , 'Crystal Reports', 0.7],
        ['#container4' , 'HTML/CSS', 0.7],
        ['#container5' , 'WPF', 0.7],
        ['#container6' , 'Windows Forms', 0.7],
        ['#container7' , 'Visual Studio', 0.7],
        ['#container8' , 'Microsoft SQL Server', 0.7],
        ['#container9' , 'XML', 0.5],
        ['#container10' , 'SVN', 0.4],
        ['#container11' , 'GIT', 0.3],
        ['#container12' , 'JS', 0.3]
    ],
    [
        ["#language1" , 'English', 0.9 ],
        ["#language2" , 'German' , 0.3 ]
    ]
];


$(window).scroll(function() {
for (j = 0; j < 2; j++) {
    if (checkVisible($(containers[j][0]))) {
        if(containers[j][1] == 0){
            containers[j][1] = 1;
        for (i = 0; i < skills[j].length; i++) {
              var bar = new ProgressBar.Circle(skills[j][i][0], {
              strokeWidth: 6, 
              easing: 'easeInOut',
              duration: 1400,
              color: '#F08080',
              trailColor: '#FFEBCD',
              trailWidth: 4,
              svgStyle: null, 
              text: {
                value: skills[j][i][1],
              },
              from: { color: '#F08080', width: 4 },
              to: { color: '#F08080', width: 4 },
              step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
              }
            });
            bar.text.style.fontFamily = '"Abel", sans-serif';
            bar.text.style.fontSize = '2rem';
            bar.text.style.color = '#333';
            bar.animate(skills[j][i][2]);  // Number from 0.0 to 1.0
            }
        }
        }
}
});


function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}

var div = document.getElementById('container');
