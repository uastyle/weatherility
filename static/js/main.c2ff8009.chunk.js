(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),s=a(5),o=a(6),i=a(8),u=a(7),m=a(9),p=a(11),d=a(3),E=a(1),h="JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN",f={status:!1,headline:{},weather:{},hourlyforecast:[],forecast:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return"SET_HEADLINE"===t.type?(console.log("SET_HEADLINE",t),Object(E.a)({},e,{status:t.payload.status,headline:t.payload.headline})):"SET_CURRENT_CONDITIONS"===t.type?(console.log(t),Object(E.a)({},e,{status:t.payload.status,weather:t.payload.weather})):"SET_HOURLY_FORECAST"===t.type?(console.log("SET_HOURLY_FORECAST",t),Object(E.a)({},e,{hourlyforecast:t.payload.hourlyforecast.map(function(e){return{Date:e.DateTime,Icon:e.WeatherIcon,Alt:e.IconPhrase,PrecipitationProbability:e.PrecipitationProbability,Temperature:e.Temperature}})})):"SET_DAILY_FORECAST"===t.type?(console.log(t),Object(E.a)({},e,{forecast:t.payload.forecast.map(function(e){return{Date:e.Date,Icon:e.Day.Icon,HoursOfSun:e.HoursOfSun,Minimum:e.Temperature.Minimum,Maximum:e.Temperature.Maximum,IconPhrase:e.Day.IconPhrase}})})):e},N=Object(d.combineReducers)({currentConditions:y}),v=function(e){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"logo",role:"banner"},c.a.createElement("a",{href:"/"},c.a.createElement("h3",null,"Weatherility"),c.a.createElement("p",null,"weather forecast without devilry"))))},g=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",function(e){var t;return function(){for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];t&&cancelAnimationFrame(t),t=requestAnimationFrame(function(){e.apply(void 0,n)})}}(g),{passive:!0}),g();var b=["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"],w=function(e){var t=JSON.parse(localStorage.getItem("hoursOfSun"))||[];console.log("localStorageHoursOfSun",t),console.log("forecast",e),e.forEach(function(e){var a=t.findIndex(function(t){return t.Date===e.Date});a>1?t[a]={Date:e.Date,HoursOfSun:e.HoursOfSun}:t.push({Date:e.Date,HoursOfSun:e.HoursOfSun})}),console.log("localStorageHoursOfSun",t),localStorage.setItem("hoursOfSun",JSON.stringify(t))},O=function(e){var t,a=e.time,n=e.city,r=e.temperature,l=e.realfeel,s=e.realfeelshade,o=e.weathertext,i=e.icon,u=e.pressure,m=e.precipitation,p=e.winddirection,d=e.windspeed,E=e.humidity,h=e.dewpoint,f=e.visibility,y=e.cloudcover,N=e.ceiling,v=e.uvindex,g=e.uvindextext;return r&&l&&p?c.a.createElement("article",{className:"current-conditions",role:"article"},c.a.createElement("div",{className:"head-info"},c.a.createElement("p",{className:"city"},n),c.a.createElement("p",{className:"weather-type"},"\u041f\u043e\u0442\u043e\u0447\u043d\u0456 \u0443\u043c\u043e\u0432\u0438"),c.a.createElement("p",{className:"temperature"},Math.round(r.Value),"\xb0",r.Unit),c.a.createElement("div",{className:"weather-icon"},c.a.createElement("img",{src:"weather-icons/".concat(i,"-s.png"),alt:"icon"})),c.a.createElement("p",{className:"description"},o),c.a.createElement("p",{className:"realfeel"},"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a ",Math.round(l.Value),"\xb0",c.a.createElement("span",null,r.Unit),", \u0443 \u0437\u0430\u0442\u0456\u043d\u043a\u0443 \u043d\u0435\u043c\u043e\u0432 ",Math.round(s.Value),"\xb0",c.a.createElement("span",null,r.Unit))),c.a.createElement("div",{className:"extra-info"},c.a.createElement("p",null,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0423\u0424:"),c.a.createElement("ul",{className:"chartlist"},c.a.createElement("li",null,c.a.createElement("a",{href:"/"},v),c.a.createElement("span",{className:"count"},g),c.a.createElement("span",{className:"index percentage-".concat(v)})))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(y)},c.a.createElement("span",null,y,"%"),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432"))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(E)},c.a.createElement("span",null,E,"%"),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c"))),!!p&&c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(p.Degrees)},c.a.createElement("span",null,p.English),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u0456\u0442\u0435\u0440 ",c.a.createElement("br",null)," ",p.Localized,", ",Number(d.Value)?(t=d.Value,Number(t)?Math.round(1e3*t/3600):"--"):"--"," \u043c/\u0441"))),c.a.createElement("div",null,c.a.createElement("div",{className:"progress-circle p".concat(Number(m.Value)?m.Value:"0")},c.a.createElement("span",null,Number(m.Value)?m.Value:"0"," \u043c\u043c"),c.a.createElement("div",{className:"left-half-clipper"},c.a.createElement("div",{className:"first50-bar"}),c.a.createElement("div",{className:"value-bar"}))),c.a.createElement("div",null,c.a.createElement("p",null,"\u041e\u043f\u0430\u0434\u0438"))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u0438\u0441\u043e\u0442\u0430 \u043d\u0438\u0436\u043d\u044c\u043e\u0457 \u043c\u0435\u0436\u0456 \u0445\u043c\u0430\u0440: ",N.Value," \u043c")),c.a.createElement("div",null,c.a.createElement("p",null,"\u0422\u043e\u0447\u043a\u0430 \u0440\u043e\u0441\u0438: ",h.Value,"\xb0",c.a.createElement("span",null,r.Unit))),c.a.createElement("div",null,c.a.createElement("p",null,"\u0412\u0438\u0434\u0438\u043c\u0456\u0441\u0442\u044c: ",f.Value.toFixed()," \u043a\u043c")),c.a.createElement("div",null,c.a.createElement("p",null,"\u0422\u0438\u0441\u043a: ",Number(u.Value)?function(e){return Math.round(.750061683*e)}(u.Value):"--"," \u043c\u043c. \u0440\u0442. \u0441\u0442.")),c.a.createElement("div",{className:"localobservation-date-time"},c.a.createElement("time",{className:"date"},!!a&&function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("uk-UA",{weekday:"long"}),", ").concat(t.getDate()," ").concat(b[t.getMonth()])}(a)),c.a.createElement("time",{className:"time"},!!a&&function(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes();return"".concat(a," : ").concat(n)}(a))),c.a.createElement("div",{className:"precipitation"},c.a.createElement("dl",null,c.a.createElement("dt",null,"\u0414\u0435\u0442\u0430\u043b\u0456"),c.a.createElement("dd",{className:"percentage percentage-".concat(E)},c.a.createElement("span",{className:"text"},"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c: ",E,"%")),c.a.createElement("dd",{className:"percentage percentage-".concat(y)},c.a.createElement("span",{className:"text"},"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432: ",y,"%")),c.a.createElement("dd",{className:"percentage percentage-".concat(v)},c.a.createElement("span",{className:"text"},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0423\u0424: ",v," (",g,")")),c.a.createElement("dd",{className:"percentage percentage-".concat(Number(m.Value)?m.Value:"0")},c.a.createElement("span",{className:"text"},"\u041e\u043f\u0430\u0434\u0438: ",Number(m.Value)?m.Value:"0"," \u043c\u043c"))))):null},S=function(e){var t=e.Text,a=Object(n.useRef)(null),r=document.body.offsetWidth,l=a.current?a.current.offsetWidth:0;return c.a.createElement("aside",{className:"headline"},c.a.createElement("div",{className:"headline-inner"},c.a.createElement("div",{className:"".concat(l>r?"active":""," markee"),ref:a},c.a.createElement("p",null,t))))},C=function(e){var t=e.date,a=e.icon,n=e.alt,r=e.precipitationprobability,l=e.temperature;return c.a.createElement("article",{className:"hourlyforecast"},c.a.createElement("div",{className:""},c.a.createElement("time",{className:"hour"},!!t&&function(e){var t=new Date(e);return"".concat(t.getHours())}(t)),c.a.createElement("div",{className:"weather-icon"},c.a.createElement("img",{src:"weather-icons/".concat(a,"-s.png"),alt:"".concat(n)})),c.a.createElement("div",{className:"precipitationprobability"},r),!!l&&c.a.createElement("div",{className:"temperature"},Math.round(l.Value))))},x=function(e){var t=e.date,a=e.icon,n=e.alt,r=e.sunnyhours,l=e.temperaturemin,s=e.temperaturemax;return c.a.createElement("article",{className:"dailyforecast"},c.a.createElement("div",{className:""},c.a.createElement("time",{className:"day"},!!t&&function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("uk-UA",{weekday:"short"}))}(t)),c.a.createElement("div",{className:"weather-icon"},c.a.createElement("img",{src:"weather-icons/".concat(a,"-s.png"),alt:"".concat(n)})),c.a.createElement("div",{className:"sunnyhours"},r),c.a.createElement("div",{className:"temperaturemin"},l.Value),c.a.createElement("div",{className:"temperaturemax"},s.Value)))},D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={formattedLocation:[],open:!1},a.debounce=function(e,t){var a=null;return function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];clearTimeout(a),a=setTimeout(function(){return e.apply(void 0,c)},t)}},a.checkApi=a.debounce(function(e){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&q=".concat(e,"&language=uk-UA")).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.map(function(e){return{Key:e.Key,LocalizedName:e.LocalizedName,Country:e.Country.LocalizedName}});a.setState({formattedLocation:t})})},300,!0),a.handleUserInput=function(e){var t=e.target.value;a.setState({userInput:t}),t.length>3&&a.checkApi(t)},a.handleUserClick=function(e,t){a.props.weatherByCityKey(e,t);var n=a.state.open;a.setState({userInput:t,open:!n})},a.handleUserInputClick=function(){var e=a.state.open;a.setState({open:!e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"findlocation",role:"search"},c.a.createElement("input",{type:"text",onChange:this.handleUserInput,onClick:this.handleUserInputClick,value:this.state.userInput,placeholder:"\u0448\u0443\u043a\u0430\u0442\u0438",autoFocus:!0}),c.a.createElement("div",{className:"chooselocation ".concat(this.state.open?"":"close")},this.state.formattedLocation.map(function(t){return c.a.createElement("p",{key:t.Key,onClick:e.handleUserClick.bind(e,t.Key,t.LocalizedName)},t.LocalizedName,", ",t.Country)}))))}}]),t}(n.Component),k=a(18),T=function(e){return Object(k.a)(e),c.a.createElement("section",{className:"dataset"},c.a.createElement("figure",null,c.a.createElement("ul",{className:"sparklist"},c.a.createElement("li",null,c.a.createElement("a",{href:"#"},":)"),c.a.createElement("span",{className:"sparkline"},c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"27%"}},"(60,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"98%"}},"220,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"56%"}},"140,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"17%"}},"80,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"67%"}},"110,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"100%"}},"90,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"7%"}},"180,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"27%"}},"140,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"40%"}},"120,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"89%"}},"160,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"66%"}},"175,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"21%"}},"225,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"2%"}},"175,")," "),c.a.createElement("span",{className:"index"},c.a.createElement("span",{className:"count",style:{height:"87%"}},"125)")," ")))),c.a.createElement("figcaption",null,"Hours Of Sun per a Day")))},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={initialState:{},geoposition:null,geopositionStatus:null,locationKey:null,status:!1},a.getGeoPosition=function(){navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,n=e.coords.longitude;a.getKeyLocation(t,n),a.setState(function(e){return Object(E.a)({},e,{geopositionStatus:"success"})})},function(){a.setState(function(e){return Object(E.a)({},e,{geopositionStatus:"error"})})})},a.getKeyLocation=function(e,t){fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(h,"&q=").concat(e,"%2C").concat(t,"&language=uk-Ua&details=true&toplevel=true")).then(function(e){return e.json()}).then(function(e){a.setState(function(t){return Object(E.a)({},t,{locationKey:e.Key})}),a.getCurrentConditions(e.Key,e.LocalizedName),a.getHourlyForecast(e.Key),a.getDailyForecast(e.Key)})},a.weatherByCityKey=function(e,t){e&&(a.setState(function(t){return Object(E.a)({},t,{locationKey:e})}),a.getCurrentConditions(e,t),a.getHourlyForecast(e),a.getDailyForecast(e))},a.getCurrentConditions=function(e,t){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(h,"&language=uk-ua&details=true")).then(function(e){return e.json()}).then(function(e){var n=e[0],c=n.LocalObservationDateTime,r=n.Temperature.Metric,l=n.RealFeelTemperature.Metric,s=n.RealFeelTemperatureShade.Metric,o=n.WeatherText,i=n.WeatherIcon,u=n.PrecipitationSummary.Precipitation.Metric,m=n.Pressure.Metric,p=n.DewPoint.Metric,d=n.RelativeHumidity,E=n.Visibility.Metric,h=n.Wind.Direction,f=n.Wind.Speed.Metric,y=n.CloudCover,N=n.Ceiling.Metric,v=n.UVIndex,g=n.UVIndexText;a.props.setCurrentConditions({status:!0,weather:{city:t,time:c,temperature:r,realfeel:l,realfeelshade:s,weathertext:o,icon:i,precipitation:u,pressure:m,dewpoint:p,humidity:d,visibility:E,winddirection:h,windspeed:f,cloudcover:y,ceiling:N,uvindex:v,uvindextext:g}})}).catch(function(e){console.log(e)})},a.getHourlyForecast=function(e){fetch("https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(e,"?apikey=").concat(h,"&language=uk-ua&details=true&metric=true")).then(function(e){return e.json()}).then(function(e){console.log("12 hours forecast",e),a.props.setHourlyForecast({status:!0,hourlyforecast:e})}).catch(function(e){console.log(e)})},a.getDailyForecast=function(e){fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(h,"&language=uk-ua&details=true&metric=true")).then(function(e){return e.json()}).then(function(e){console.log("headline",e.Headline),console.log("forecast",e.DailyForecasts);var t=e.Headline,n=e.DailyForecasts;w(n),a.props.setHeadline({status:!0,headline:t}),a.props.setDailyForecast({status:!0,forecast:n})}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getGeoPosition()}},{key:"render",value:function(){var e=this.state,t=e.statusGeoposition,a=e.locationKey,n=this.props.currentConditions,r=n.weather.city,l=n.status,s=n.headline,o=n.weather,i=n.hourlyforecast,u=n.forecast;return console.log("hourlyforecast",i),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-1"}),c.a.createElement("label",{htmlFor:"tab-nav-1"},"\u0406\u0441\u0442\u043e\u0440\u0456\u044f"),c.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-2",defaultChecked:!0}),c.a.createElement("label",{htmlFor:"tab-nav-2"},"\u041f\u043e\u0433\u043e\u0434\u0430"),c.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-3"}),c.a.createElement("label",{htmlFor:"tab-nav-3"},"\u041b\u043e\u043a\u0430\u0446\u0456\u0457"),c.a.createElement("button",{className:"refreshbtn",onClick:this.weatherByCityKey.bind(this,a,r)}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"tab"},c.a.createElement(T,null)),c.a.createElement("div",{className:"tab"},l&&c.a.createElement("main",{className:"",role:"main"},c.a.createElement("section",{className:"current-weather"},c.a.createElement(S,s),c.a.createElement(O,o)),c.a.createElement("section",{className:"weatherforecast"},i.map(function(e){return c.a.createElement(C,{date:e.Date,key:e.Date,icon:e.Icon,alt:e.Alt,precipitationprobability:e.PrecipitationProbability,temperature:e.Temperature})})),c.a.createElement("section",{className:"dailyforecasts"},u.map(function(e){return c.a.createElement(x,{date:e.Date,key:e.Date,icon:e.Icon,alt:e.IconPhrase,sunnyhours:e.HoursOfSun,temperaturemin:e.Minimum,temperaturemax:e.Maximum})})))),"error"===t&&c.a.createElement("section",{className:"disablelocation"},c.a.createElement("h1",null,"Please Enable your Location!")),c.a.createElement("div",{className:"location tab"},c.a.createElement(D,{weatherByCityKey:this.weatherByCityKey})))))}}]),t}(n.Component),I=Object(p.b)(function(e){return{currentConditions:e.currentConditions}},function(e){return{setCurrentConditions:function(t){return e(function(e){return{type:"SET_CURRENT_CONDITIONS",payload:e}}(t))},setHourlyForecast:function(t){return e(function(e){return{type:"SET_HOURLY_FORECAST",payload:e}}(t))},setHeadline:function(t){return e(function(e){return{type:"SET_HEADLINE",payload:e}}(t))},setDailyForecast:function(t){return e(function(e){return{type:"SET_DAILY_FORECAST",payload:e}}(t))}}})(j),F=function(e){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"logo",role:"banner"},c.a.createElement("a",{href:"/"},c.a.createElement("h3",null,"Weatherility"))),c.a.createElement("div",{className:"wrapper"},c.a.createElement("p",null,c.a.createElement("span",null,"\xa9 2019\u20132021 "),c.a.createElement("a",{className:"link",href:"https://github.com/uastyle",target:"_blank",rel:"noopener noreferrer me","aria-label":"This is an external link (opens in a new tab)"},"UA Style"))))},H=(a(31),a(19)),V=Object(d.createStore)(N,Object(H.composeWithDevTools)()),A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{store:V},c.a.createElement(v,null),c.a.createElement(I,null),c.a.createElement(F,null))}}]),t}(n.Component);a(32);l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c2ff8009.chunk.js.map