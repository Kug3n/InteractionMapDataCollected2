/*! simple-map-d3 - v0.1.5 - 2013-08-21
 * http://code.minnpost.com/simple-map-d3/
 * Copyright (c) 2013 Alan Palazzolo; Licensed MIT
 */

function SimpleMapD3(a){var b={},c={startManually:!1,mapOffset:[0,0],colorOn:!1,colorSet:"YlOrBr",colorScale:"quantile",colorReverse:!1,tooltipOn:!0,tooltipContent:function(a){var b="";for(var c in a.properties)a.properties.hasOwnProperty(c)&&(b+=c+": "+a.properties[c]+"<br />");return b},projection:"albersUsa",legendFormatter:d3.format(","),legendOn:!0,legendTitle:"Legend",legendOffset:[10,10],styles:{},stylesHover:{},stylesBackground:{},stylesLegendContainer:{},stylesLegendTitleText:{},stylesLegendText:{},stylesLegendSwatch:{},stylesGraticule:{},stylesGlobe:{},canvasDragOn:!1,mapDragOn:!1,legendDragOn:!1,graticuleOn:!1};return b.brewer={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},b.constructor=function(a){if("undefined"==typeof d3)throw new Error("Simple Map requires D3.");var d=c;for(var e in a)a.hasOwnProperty(e)&&(d[e]=a[e]);if(b.options=d,"string"==typeof b.options.colorSet&&"[object Array]"==Object.prototype.toString.call(b.brewer[b.options.colorSet]))b.options.colorSet=b.brewer[b.options.colorSet];else if("[object Array]"!=Object.prototype.toString.call(b.options.colorSet))throw new Error("Simple Map requires a valid colorSet option.");return b.options.colorReverse===!0&&(b.options.colorSet=b.options.colorSet.reverse()),b.events=d3.dispatch("dataLoaded","rendered"),b.options.startManually!==!0&&b.start(),b},b.start=function(){return b.options.data===Object(b.options.data)?(b.data=b.options.data,b.loadData(b.data)):"[object String]"==Object.prototype.toString.call(b.options.datasource)&&b.getData(),b},b.getData=function(){return d3.json(b.options.datasource,function(a){b.data=a,b.loadData()}),b},b.loadData=function(a){return void 0===b.data&&(b.data=a),b.topo(),b.events.dataLoaded(b),b.drawCanvas().projection().makeColorRange().drawGlobe().drawGraticule().drawMap().fit().drawLegend().drag(),b.events.rendered(b),b},b.topo=function(){var a,c=b.options.topojsonObject;if("topology"===b.data.type.toLowerCase()&&"undefined"!=typeof topojson){if("undefined"==typeof c)for(c in b.data.objects)if(b.data.objects.hasOwnProperty(c)){a=b.data.objects[c];break}b.data=topojson.feature(b.data,b.data.objects[c])}return b},b.drawCanvas=function(){var a=b.options.mapOffset;return b.container=d3.select(b.options.container),b.width=parseFloat(b.container.style("width")),b.height=parseFloat(b.container.style("height")),b.canvas=b.container.append("svg").attr("width",b.width).attr("height",b.height).attr("class","smd-canvas").classed("smd-draggable",b.options.canvasDragOn).classed("smd-tooltipped",b.options.tooltipOn).data([{x:0,y:0}]),b.background=b.canvas.append("rect").attr("width",b.width).attr("height",b.height).classed("smd-background",!0).style(b.options.stylesBackground),b.draggableMapGroup=b.canvas.append("g").attr("class","smd-draggable-map-group").data([{x:a[0]-1,y:a[1]-1}]).attr("transform","translate("+a+")"),b.featureGroup=b.draggableMapGroup.append("g").attr("class","smd-feature-group"),b.options.tooltipOn===!0&&(b.container.classed("simple-map-d3-tooltip-container",!0),b.container.append("div").classed("simple-map-d3-tooltip",!0)),b},b.projection=function(){var a=b.options.projection;return("undefined"==typeof a||"function"!=typeof d3.geo[a])&&(a="albersUsa"),b.centroid=d3.geo.centroid(b.data),b.projection=d3.geo[a]().scale(1e3).translate([b.width/2,b.height/2]),"function"==typeof b.projection.center&&b.projection.center(b.centroid),"undefined"!=typeof b.options.rotation&&b.options.rotation.length>0&&"function"==typeof b.projection.rotate&&b.projection.rotate(b.options.rotation),b.projPath=d3.geo.path().projection(b.projection),b},b.fit=function(){var a=b.bounds=b.projPath.bounds(b.data);return b.featureGroup.attr("transform","translate("+b.projection.translate()+") "+"scale("+.95/Math.max((a[1][0]-a[0][0])/b.width,(a[1][1]-a[0][1])/b.height)+") "+"translate("+-(a[1][0]+a[0][0])/2+","+-(a[1][1]+a[0][1])/2+")"),b},b.makeColorRange=function(){var a,c=b.options.colorScale;if(b.valuesSet=[],b.options.colorOn!==!0)return b;for(a=0;a<b.data.features.length;a++)b.valuesSet.push(parseFloat(b.data.features[a].properties[b.options.colorProperty]));return b.valuesSet.sort(function(a,b){return a-b}),"function"!=typeof c&&(c=d3.scale[c]),b.colorRange=c().domain(b.valuesSet).range(b.options.colorSet),"function"==typeof b.colorRange.clamp&&b.colorRange.clamp(!0),b},b.dragging=!1,b.drag=function(){return b.dragCanvas=d3.behavior.drag().on("drag",function(a){return b.options.canvasDragOn!==!0?!0:(b.dragging=!0,b.canvas.classed("dragging",!0),d3.event.sourceEvent.stopPropagation(),a.x+=d3.event.dx,a.y+=d3.event.dy,b.draggableMapGroup.attr("transform","translate("+[a.x,a.y]+")"),void 0)}).on("dragend",function(){b.canvas.classed("dragging",!1),b.dragging=!1}),b.dragSimple=d3.behavior.drag().on("drag",function(a){a.x+=d3.event.dx,a.y+=d3.event.dy,d3.select(this).classed("dragging",!0).attr("transform",function(a){return"translate("+[a.x,a.y]+")"})}).on("dragend",function(){d3.select(this).classed("dragging",!1)}),b.options.canvasDragOn===!0&&b.canvas.call(b.dragCanvas),b.options.mapDragOn===!0&&b.draggableMapGroup.classed("smd-draggable",!0).call(b.dragSimple),b.options.legendDragOn===!0&&b.legendGroup&&b.legendGroup.classed("smd-draggable",!0).call(b.dragSimple),b},b.drawGraticule=function(){return b.options.graticuleOn!==!0?b:(b.graticule=d3.geo.graticule(),b.featureGroup.append("path").datum(b.graticule).attr("d",b.projPath).attr("class","smd-graticule").style(b.options.stylesGraticule),b)},b.drawGlobe=function(){return b.options.globeOn!==!0?b:(b.globe=b.featureGroup.append("path").datum({type:"Sphere"}).attr("class","smd-globe").attr("d",b.projPath).style(b.options.stylesGlobe),b)},b.drawLegend=function(){var a=b.options.legendFormatter||d3.format(","),c=10,d=b.options.legendWidth||b.width/5,e=b.options.legendScale||1,f=d3.min(b.valuesSet);d3.max(b.valuesSet);var g,h=b.options.legendOffset,i=[];if(b.options.legendOn!==!0||"undefined"==typeof b.colorRange)return b;if("quantile"===b.options.colorScale&&(i=b.colorRange.quantiles(),i[0]=f),"quantize"===b.options.colorScale)for(g=0;g<b.options.colorSet.length;g++)i.push(b.colorRange.invertExtent(b.options.colorSet[g])[0]);return 0===i.length?b:(i&&i.length>0&&(b.legendGroup=b.canvas.append("g"),b.legendGroup.append("rect").attr("class","smd-legend-container").attr("width",d).attr("height",i.length*2*c+3*c).attr("x",0).attr("y",0).style(b.options.stylesLegendContainer),b.legendGroup.append("text").attr("class","smd-legend-label").attr("font-size",c).attr("x",1*c).attr("y",2*c).text(b.options.legendTitle).style(b.options.stylesLegendTitleText),b.legendGroup.selectAll("rect.smd-legend-swatch").data(i).enter().append("rect").attr("class","smd-legend-swatch").attr("width",c).attr("height",c).attr("x",1*c).attr("y",function(a,b){return 2*b*c+3*c}).style(b.options.stylesLegendSwatch).style("fill",function(a){return b.colorRange(a)}),b.legendGroup.selectAll("text.smd-legend-amount").data(i).enter().append("text").attr("class","smd-legend-amount").attr("font-size",c).attr("x",3*c).attr("y",function(a,b){return 2*b*c+(4*c-1)}).text(function(b){return">= "+a(b)}).style(b.options.stylesLegendText),b.legendGroup.attr("transform","scale("+e+")").data([{x:h[0]-1,y:h[1]-1}]).attr("transform","translate("+h+")")),b)},b.drawMap=function(){return b.featureGroup.selectAll("path").data(b.data.features).enter().append("path").attr("d",b.projPath).attr("class","smd-path").style(b.options.styles).attr("fill",function(a){return b.options.colorOn===!1?b.options.styles.fill:b.colorRange(a.properties[b.options.colorProperty])}).on("mouseover",function(a){b.options.tooltipOn===!0&&b.container.select(".simple-map-d3-tooltip").style("display","block").html(b.options.tooltipContent(a)),d3.select(this).style(b.options.stylesHover)}).on("mouseout",function(){b.options.tooltipOn===!0&&b.container.select(".simple-map-d3-tooltip").style("display","none"),d3.select(this).style(b.options.styles)}),b},b.constructor(a),b}if("function"==typeof require)var d3=require("d3");"undefined"!=typeof module&&(module.exports=SimpleMapD3);