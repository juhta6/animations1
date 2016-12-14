tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
  topLevel: true
}).open();
//---------------------------------------------------------------------------------------------------------------------------

var wh = 100;
var set = 0;

var tileOne = new tabris.Composite({
  id: "tile11",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: 10, left: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).once("resize", function(widget){
  widget.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "1",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileTwo.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileTwo = new tabris.Composite({
  id: "tile21",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: 10, centerX: 0},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "2",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileThree.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileThree = new tabris.Composite({
  id: "tile31",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: 10, right: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "3",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileOne1.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileOne1 = new tabris.Composite({
  id: "tile12",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileOne, 10], left: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "4",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileTwo1.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileTwo1 = new tabris.Composite({
  id: "tile22",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileTwo, 10], centerX: 0},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "5",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileThree1.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileThree1 = new tabris.Composite({
  id: "tile32",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileThree, 10], right: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "6",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileOne2.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileOne2 = new tabris.Composite({
  id: "tile13",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileOne1, 10], left: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "7",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileTwo2.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileTwo2 = new tabris.Composite({
  id: "tile23",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileTwo1, 10], centerX: 0},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  highlightOnTouch: true,
  transform: {translationY: -screen.height+70}
}).once("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "9",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
        }).once("resize", function(widget){
          widget.animate({opacity: 0}, {duration: 500, delay: 8500})
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileThree2.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileThree2 = new tabris.Composite({
  id: "tile33",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileThree1, 10], right: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "10",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileOne3.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileOne3 = new tabris.Composite({
  id: "tile14",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileOne2, 10], left: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "11",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileTwo3.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileTwo3 = new tabris.Composite({
  id: "tile24",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileTwo2, 10], centerX: 0},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "12",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileThree3.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileThree3 = new tabris.Composite({
  id: "tile34",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileThree2, 10], right: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "13",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileOne4.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileOne4 = new tabris.Composite({
  id: "tile15",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileOne3, 10], left: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "14",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationstart",function(widget){
  tileTwo4.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
}).appendTo(page);

var tileTwo4 = new tabris.Composite({
  id: "tile25",
  type: "tile",
  layoutData: {height: wh, width: wh, bottom: [tileTwo3, 10], centerX: 0},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  transform: {translationY: -screen.height+70}
}).on("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "15",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
  }).appendTo(widget);
}).once("animationstart",function(widget){
    if (set == 0){
  set = 1
  tileThree4.animate({transform: {translationY: 0}}, {delay: 300, easing: "ease-in-out", duration: 300})
    }
}).appendTo(page);

var tileThree4 = new tabris.Composite({
  id: "tile35",
  layoutData: {height: wh, width: wh, bottom: [tileThree3, 10], right: 10},
  cornerRadius: 20,
  elevation: 16,
  background: "white",
  highlightOnTouch: true,
  transform: {translationY: -screen.height+70}
}).once("resize", function(widget){
  new tabris.TextView({
      layoutData: {centerX: 0, centerY: 0},
      text: "16",
      opacity: 1,
      font: "bold 30px",
       transfrom: {scaleX: 0.5, scaleY: 0.5}
    }).appendTo(widget);
}).once("animationend", function(widget){
  page.find("#tile31").animate({opacity: 0, transform: {translationX: -120, translationY: -220, scaleX: 0, scaleY: 0}},{delay: 300, duration: 2600})
    page.find("#tile32").animate({opacity: 0, transform: {translationX: -120, translationY: -110, scaleX: 0, scaleY: 0}},{delay: 150, duration: 2900})
      page.find("#tile33").animate({opacity: 0, transform: {translationX: -120, scaleX: 0, scaleY: 0}},{duration: 3000})
        page.find("#tile34").animate({opacity: 0, transform: {translationX: -120, translationY: 110, scaleX: 0, scaleY: 0}},{delay: 150,duration: 2900})
          page.find("#tile35").animate({opacity: 0, transform: {translationX: -120, translationY: 220, scaleX: 0, scaleY: 0}},{delay: 300,duration: 2600})
          
  page.find("#tile11").animate({opacity: 0, transform: {translationX: 120, translationY: -220, scaleX: 0, scaleY: 0}},{delay: 300,duration: 2600})
    page.find("#tile12").animate({opacity: 0, transform: {translationX: 120, translationY: -110, scaleX: 0, scaleY: 0}},{delay: 150,duration: 2900})
      page.find("#tile13").animate({opacity: 0, transform: {translationX: 120, scaleX: 0, scaleY: 0}},{duration: 3000})
        page.find("#tile14").animate({opacity: 0, transform: {translationX: 120, translationY: 110, scaleX: 0, scaleY: 0}},{delay: 150,duration: 2900})
          page.find("#tile15").animate({opacity: 0, transform: {translationX: 120, translationY: 220, scaleX: 0, scaleY: 0}},{delay: 300,duration: 2600})
          
  page.find("#tile21").animate({opacity: 0, transform: {translationY: -220, scaleX: 0, scaleY: 0}},{delay: 300, duration: 2600})
    page.find("#tile22").animate({opacity: 0, transform: {translationY: -110, scaleX: 0, scaleY: 0}},{duration: 3000})
        page.find("#tile24").animate({opacity: 0, transform: {translationY: 110, scaleX: 0, scaleY: 0}},{duration: 3000})
          page.find("#tile25").animate({opacity: 0, transform: {translationY: 220, scaleX: 0, scaleY: 0}},{delay: 300, duration: 2600}) 
          
  tileTwo2.animate({transform: {rotation: 4*Math.PI, scaleX: 1.5, scaleY: 1.5}}, {delay: 0, duration: 3300})
}).on("animationend", function(widget){
  if(set == 1){
    ++set;
    tileTwo2.animate({transform: {rotation: 0*Math.PI, scaleX: 1.5, scaleY: 1.5}}, {delay: 3300, duration: 0})
  } else if (set == 2){
    set = 3
    tileTwo2.animate({transform: {rotation: 0*Math.PI, scaleX: 0.1, scaleY: 1.5}}, {delay: 1000, duration: 700, repeat: 1, reverse: true})
        tileTwo2.animate({transform: {scaleX: 3, scaleY: 1.5}}, {delay: 1700, duration: 700})
  }
}).appendTo(page)
