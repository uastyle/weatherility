(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(33)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(6),r=t.n(l),i=t(12),o=t(13),s=t(18),u=t(14),m=t(19),d=t(3),p=t(4),E=t(17),h=t(1),f="JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN",y={status:!1,headline:{},weather:{},hourlyforecast:[],dailyforecast:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;return"SET_HEADLINE"===a.type?(console.log("SET_HEADLINE",a),Object(h.a)({},e,{status:a.payload.status,headline:a.payload.headline})):"SET_CURRENT_CONDITIONS"===a.type?(console.log(a),Object(h.a)({},e,{status:a.payload.status,weather:a.payload.weather})):"SET_HOURLY_FORECAST"===a.type?(console.log("SET_HOURLY_FORECAST",a),Object(h.a)({},e,{hourlyforecast:a.payload.hourlyforecast.map(function(e){return{Date:e.DateTime,Icon:e.WeatherIcon,Alt:e.IconPhrase,PrecipitationProbability:e.PrecipitationProbability,Temperature:e.Temperature}})})):"SET_DAILY_FORECAST"===a.type?(console.log(a),Object(h.a)({},e,{dailyforecast:a.payload.dailyforecast.map(function(e){return{Date:e.Date,Icon:e.Day.Icon,HoursOfSun:e.HoursOfSun,Minimum:e.Temperature.Minimum,Maximum:e.Temperature.Maximum,IconPhrase:e.Day.IconPhrase}})})):e},N=Object(p.combineReducers)({currentConditions:v}),g=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"logo",role:"banner"},c.a.createElement("a",{href:"/"},c.a.createElement("h3",null,"Weatherility"),c.a.createElement("div",{className:"morphing"},c.a.createElement("p",{className:"word"},"\u2014 weather forecast"),c.a.createElement("p",{className:"word"},"without devilry!")))))},b=t(7),w=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",function(e){var a;return function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];a&&cancelAnimationFrame(a),a=requestAnimationFrame(function(){e.apply(void 0,n)})}}(w),{passive:!0}),w();var O=["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"],S=function(){var e=Object(n.useState)({geopositionStatus:null,locationKey:null}),a=Object(b.a)(e,2),t=a[0],c=a[1],l=t.geopositionStatus,r=t.locationKey;Object(n.useEffect)(function(){w()},[]);var i=Object(d.c)(function(e){return e.currentConditions}),o=Object(d.b)(),s=i.weather.city,u=i.status,m=i.headline,p=i.weather,E=i.hourlyforecast,y=i.dailyforecast,v=function(e,a){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(f,"&language=uk-ua&details=true")).then(function(e){return e.json()}).then(function(e){var t=e[0],n=t.LocalObservationDateTime,c=t.Temperature.Metric,l=t.RealFeelTemperature.Metric,r=t.RealFeelTemperatureShade.Metric,i=t.WeatherText,s=t.WeatherIcon,u=t.PrecipitationSummary.Precipitation.Metric,m=t.Pressure.Metric,d=t.DewPoint.Metric,p=t.RelativeHumidity,E=t.Visibility.Metric,h=t.Wind.Direction,f=t.Wind.Speed.Metric,y=t.CloudCover,v=t.Ceiling.Metric,N=t.UVIndex,g=t.UVIndexText;o(function(e){return{type:"SET_CURRENT_CONDITIONS",payload:e}}({status:!0,weather:{city:a,time:n,temperature:c,realfeel:l,realfeelshade:r,weathertext:i,icon:s,precipitation:u,pressure:m,dewpoint:d,humidity:p,visibility:E,winddirection:h,windspeed:f,cloudcover:y,ceiling:v,uvindex:N,uvindextext:g}}))}).catch(function(e){console.log(e)})},N=function(e){fetch("https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(e,"?apikey=").concat(f,"&language=uk-ua&details=true&metric=true")).then(function(e){return e.json()}).then(function(e){console.log("12 hours forecast",e),o(function(e){return{type:"SET_HOURLY_FORECAST",payload:e}}({status:!0,hourlyforecast:e}))}).catch(function(e){console.log(e)})},g=function(e){fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(f,"&language=uk-ua&details=true&metric=true")).then(function(e){return e.json()}).then(function(e){console.log("headline",e.Headline),console.log("dailyforecast",e.DailyForecasts);var a=e.Headline,t=e.DailyForecasts;!function(e){var a=JSON.parse(localStorage.getItem("hoursOfSun"))||[];console.log("localStorageHoursOfSun",a),console.log("Daily forecasts",e),e.forEach(function(e){var t=a.findIndex(function(a){return a.Date===e.Date});t>1?a[t]={Date:e.Date,HoursOfSun:e.HoursOfSun}:a.push({Date:e.Date,HoursOfSun:e.HoursOfSun})}),console.log("localStorageHoursOfSun",a),localStorage.setItem("hoursOfSun",JSON.stringify(a))}(t),function(e){o(function(e){return{type:"SET_HEADLINE",payload:e}}(e))}({status:!0,headline:a}),function(e){o(function(e){return{type:"SET_DAILY_FORECAST",payload:e}}(e))}({status:!0,dailyforecast:t})}).catch(function(e){console.log(e)})},w=function(){navigator.geolocation.getCurrentPosition(function(e){!function(e,a){fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(f,"&q=").concat(e,"%2C").concat(a,"&language=uk-Ua&details=true&toplevel=true")).then(function(e){return e.json()}).then(function(e){c(function(a){return Object(h.a)({},a,{locationKey:e.Key})}),v(e.Key,e.LocalizedName),N(e.Key),g(e.Key)})}(e.coords.latitude,e.coords.longitude),c(function(e){return Object(h.a)({},e,{geopositionStatus:"success"})})},function(){c(function(e){return Object(h.a)({},e,{geopositionStatus:"error"})})})};return{weatherByCityKey:function(e,a){e&&(c(function(a){return Object(h.a)({},a,{locationKey:e})}),v(e,a),N(e),g(e))},weatherByUpdate:function(){r&&(c(function(e){return Object(h.a)({},e,{locationKey:r})}),v(r,s),N(r),g(r))},locationKey:r,city:s,headline:m,weather:p,hourlyforecast:E,dailyforecast:y,globalStatus:u,geopositionStatus:l}},x=function(e){var a=e.city,t=e.temperature,n=e.icon,l=e.weathertext,r=e.realfeel,i=e.realfeelshade,o=Object(d.c)(function(e){return e.currentConditions.headline});return t&&r&&o?c.a.createElement("div",{className:"head-info"},c.a.createElement("div",{className:"city"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"temperature"},c.a.createElement("p",null,Math.round(t.Value),"\xb0",t.Unit)),c.a.createElement("div",{className:"weather-icon"},c.a.createElement("img",{src:"weather-icons/".concat(n,"-s.png"),alt:"icon"})),c.a.createElement("div",{className:"description"},c.a.createElement("p",null,l)),c.a.createElement("div",{className:"realfeel"},c.a.createElement("p",null,"\u0420\u0435\u0430\u043b\u044c\u043d\u043e \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a ",Math.round(r.Value),"\xb0",c.a.createElement("span",null,t.Unit),", \u0443 \u0437\u0430\u0442\u0456\u043d\u043a\u0443 \u043d\u0435\u043c\u043e\u0432 ",Math.round(i.Value),"\xb0",c.a.createElement("span",null,t.Unit))),c.a.createElement("div",{className:"headline"},c.a.createElement("p",null,o.Text))):null},D=function(e){var a=e.date,t=e.icon,n=e.alt,l=e.precipitationprobability,r=e.temperature;return c.a.createElement("article",{className:"hourlyforecast__item"},c.a.createElement("div",{className:""},c.a.createElement("time",{className:"hour"},!!a&&function(e){var a=new Date(e);return"".concat(a.toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"}))}(a)),c.a.createElement("div",{title:"".concat(n),className:"weather-icon"},c.a.createElement("img",{src:"weather-icons/".concat(t,"-s.png"),alt:"".concat(n)})),c.a.createElement("div",{className:"precipitationprobability"},l),!!r&&c.a.createElement("div",{className:"temperature"},Math.round(r.Value))))},T=function(e){var a=e.date,t=e.icon,n=e.alt,l=e.precipitationprobabilityday,r=e.sunnyhours,i=e.temperaturemin,o=e.temperaturemax;return c.a.createElement("article",{className:"dailyforecast__item"},c.a.createElement("div",{className:""},c.a.createElement("time",{className:"day"},!!a&&function(e){var a=new Date(e);return"".concat(a.toLocaleDateString("uk-UA",{weekday:"short"}))}(a)),c.a.createElement("div",{title:"".concat(n),className:"weather-icon"},c.a.createElement("img",{src:"weather-icons/".concat(t,"-s.png"),alt:"".concat(n)})),c.a.createElement("div",{className:"sunnyhours"},r),c.a.createElement("div",{className:"precipitationprobability"},l),c.a.createElement("div",{className:"temperaturemax"},Math.round(o.Value)),c.a.createElement("div",{className:"temperaturemin"},Math.round(i.Value))))},I=function(e){var a,t=e.time,n=e.temperature,l=e.realfeel,r=e.pressure,i=e.precipitation,o=e.winddirection,s=e.windspeed,u=e.humidity,m=e.dewpoint,d=e.visibility,p=e.cloudcover,E=e.ceiling,h=e.uvindex,f=e.uvindextext;return n&&l&&o?c.a.createElement("article",{className:"current-conditions",role:"article"},c.a.createElement("div",{className:"extra-info"},c.a.createElement("p",null,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0423\u0424:"),c.a.createElement("ul",{className:"chartlist"},c.a.createElement("li",null,c.a.createElement("a",{href:"/"},h),c.a.createElement("span",{className:"count"},f),c.a.createElement("span",{className:"index percentage-".concat(h)})))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(p)},c.a.createElement("span",null,p,"%"),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432"))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(u)},c.a.createElement("span",null,u,"%"),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c"))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(o.Degrees)},c.a.createElement("span",null,o.English),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u0456\u0442\u0435\u0440 ",c.a.createElement("br",null)," ",o.Localized,", ",Number(s.Value)?(a=s.Value,Number(a)?Math.round(1e3*a/3600):"--"):"--"," \u043c/\u0441"))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(Number(i.Value)?i.Value:"0")},c.a.createElement("span",null,Number(i.Value)?i.Value:"0"," \u043c\u043c"),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u041e\u043f\u0430\u0434\u0438"))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u0438\u0441\u043e\u0442\u0430 \u043d\u0438\u0436\u043d\u044c\u043e\u0457 \u043c\u0435\u0436\u0456 \u0445\u043c\u0430\u0440: ",E.Value," \u043c")),c.a.createElement("div",null,c.a.createElement("p",null,"\u0422\u043e\u0447\u043a\u0430 \u0440\u043e\u0441\u0438: ",m.Value,"\xb0",c.a.createElement("span",null,n.Unit))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u0438\u0434\u0438\u043c\u0456\u0441\u0442\u044c: ",d.Value.toFixed()," \u043a\u043c")),c.a.createElement("div",null,c.a.createElement("p",null,"\u0422\u0438\u0441\u043a: ",Number(r.Value)?function(e){return Math.round(.750061683*e)}(r.Value):"--"," \u043c\u043c. \u0440\u0442. \u0441\u0442.")),c.a.createElement("div",{className:"localobservation-date-time"},c.a.createElement("time",{className:"date"},!!t&&function(e){var a=new Date(e);return"".concat(a.toLocaleDateString("uk-UA",{weekday:"long"}),", ").concat(a.getDate()," ").concat(O[a.getMonth()])}(t)),c.a.createElement("time",{className:"time"},!!t&&function(e){var a=new Date(e),t=a.getHours(),n=a.getMinutes();return"".concat(t," : ").concat(n)}(t)))):null},j=function(e){var a=Object(n.useState)({userInput:"",formattedLocation:[],open:!1}),t=Object(b.a)(a,2),c=t[0],l=t[1],r=c.userInput,i=c.formattedLocation,o=c.open,s=function(e,a){var t=null;return function(){for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];clearTimeout(t),t=setTimeout(function(){return e.apply(void 0,c)},a)}}(function(e){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(f,"&q=").concat(e,"&language=uk-UA")).then(function(e){return e.json()}).then(function(e){console.log(e);var a=e.map(function(e){return{Key:e.Key,LocalizedName:e.LocalizedName,Country:e.Country.LocalizedName}});l(function(e){return Object(h.a)({},e,{formattedLocation:a})})})},300);return{handleUserInput:function(e){var a=e.target.value;l(function(e){return Object(h.a)({},e,{userInput:a})}),a.length>3&&s(a)},handleUserClick:function(a,t){return function(){e(a,t),console.log(a),l(function(e){return Object(h.a)({},e,{open:!e.open})})}},handleUserInputClick:function(){l(function(e){return Object(h.a)({},e,{open:!e.open})})},userInput:r,open:o,formattedLocation:i}},k=function(e){var a=e.weatherByCityKey,t=j(a),l=t.handleUserInput,r=t.handleUserClick,i=t.handleUserInputClick,o=t.userInput,s=t.open,u=t.formattedLocation;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"findlocation",role:"search"},c.a.createElement("input",{type:"text",onChange:l,onClick:i,value:o,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443",autoFocus:!0}),c.a.createElement("div",{className:"chooselocation ".concat(s?"":"close")},u.map(function(e){return c.a.createElement("p",{key:e.Key,onClick:r(e.Key,e.LocalizedName)},e.LocalizedName,", ",e.Country)}))))},C=function(e){var a=e.precipitation,t=e.humidity,n=e.cloudcover,l=e.uvindex,r=e.uvindextext;return t&&n&&a?c.a.createElement("section",{className:"dataset"},c.a.createElement("div",{className:"precipitation"},c.a.createElement("dl",null,c.a.createElement("dt",null,"\u0414\u0435\u0442\u0430\u043b\u0456"),c.a.createElement("dd",{className:"percentage percentage-".concat(t)},c.a.createElement("span",{className:"text"},"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c: ",t,"%")),c.a.createElement("dd",{className:"percentage percentage-".concat(n)},c.a.createElement("span",{className:"text"},"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432: ",n,"%")),c.a.createElement("dd",{className:"percentage percentage-".concat(l)},c.a.createElement("span",{className:"text"},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0423\u0424: ",l," (",r,")")),c.a.createElement("dd",{className:"percentage percentage-".concat(Number(a.Value)?a.Value:"0")},c.a.createElement("span",{className:"text"},"\u041e\u043f\u0430\u0434\u0438: ",Number(a.Value)?a.Value:"0"," \u043c\u043c")))),c.a.createElement("figure",null,c.a.createElement("ul",{className:"sparklist"},c.a.createElement("li",null,c.a.createElement("span",{className:"sparkline"},c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"27%"}},"(60,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"98%"}},"220,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"56%"}},"140,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"17%"}},"80,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"67%"}},"110,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"100%"}},"90,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"7%"}},"180,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"27%"}},"140,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"40%"}},"120,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"89%"}},"160,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"66%"}},"175,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"21%"}},"225,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"2%"}},"175,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"87%"}},"125)")," ")))),c.a.createElement("figcaption",null,"Hours Of Sun per a Day"))):null},V=function(){var e=S(),a=e.weatherByCityKey,t=e.weatherByUpdate,n=(e.headline,e.weather),l=e.hourlyforecast,r=e.dailyforecast,i=e.globalStatus;e.statusGeoposition;return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"main",role:"main"},c.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-1"}),c.a.createElement("label",{htmlFor:"tab-nav-1"},"\u0406\u0441\u0442\u043e\u0440\u0456\u044f"),c.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-2",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"tab-nav-2"},"\u041f\u043e\u0433\u043e\u0434\u0430"),c.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-3"}),c.a.createElement("label",{htmlFor:"tab-nav-3"},"\u041b\u043e\u043a\u0430\u0446\u0456\u0457"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"tab"},c.a.createElement(C,null)),c.a.createElement("div",{className:"tab"},i&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"head"},c.a.createElement(x,n)),c.a.createElement("section",{className:"hourlyforecast"},l.map(function(e){return c.a.createElement(D,{date:e.Date,key:e.Date,icon:e.Icon,alt:e.Alt,precipitationprobability:e.PrecipitationProbability,temperature:e.Temperature})})),c.a.createElement("section",{className:"dailyforecast"},r.map(function(e){return c.a.createElement(T,{date:e.Date,key:e.Date,icon:e.Icon,alt:e.IconPhrase,precipitationprobabilityday:e.PrecipitationProbability,sunnyhours:e.HoursOfSun,temperaturemin:e.Minimum,temperaturemax:e.Maximum})})),c.a.createElement("section",{className:"current-weather"},c.a.createElement(I,n)),c.a.createElement("button",{className:"refreshbtn",onClick:t})),!i&&c.a.createElement("section",{className:"disablelocation"},c.a.createElement("h1",null,"Please enable your geoposition or try to search location you need!"))),c.a.createElement("div",{className:"location tab"},c.a.createElement(k,{weatherByCityKey:a})))))},U=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"logo",role:"banner"},c.a.createElement("a",{href:"/"},c.a.createElement("h3",null,"Weatherility"))),c.a.createElement("div",{className:"wrapper"},c.a.createElement("p",null,c.a.createElement("span",null,"\xa9 2019\u20132021 "),c.a.createElement("a",{className:"link",href:"https://github.com/uastyle",target:"_blank",rel:"noopener noreferrer me","aria-label":"This is an external link (opens in a new tab)"},"UA Style"))))},L=(t(31),Object(p.createStore)(N,Object(E.composeWithDevTools)())),M=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,{store:L},c.a.createElement(g,null),c.a.createElement(V,null),c.a.createElement(U,null))}}]),a}(n.Component);t(32);r.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.beccd33f.chunk.js.map