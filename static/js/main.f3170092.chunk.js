(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=a(5),o=a(6),i=a(8),u=a(7),m=a(9),p=a(11),d=a(3),E=a(1),h={status:!1,headline:{},weather:{},hourlyforecast:[],forecast:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return"SET_HEADLINE"===t.type?(console.log("SET_HEADLINE",t),Object(E.a)({},e,{status:t.payload.status,headline:t.payload.headline})):"SET_CURRENT_CONDITIONS"===t.type?(console.log(t),Object(E.a)({},e,{status:t.payload.status,weather:t.payload.weather})):"SET_HOURLY_FORECAST"===t.type?(console.log("SET_HOURLY_FORECAST",t),Object(E.a)({},e,{hourlyforecast:t.payload.hourlyforecast.map(function(e){return{Date:e.DateTime,Icon:e.WeatherIcon,Alt:e.IconPhrase,PrecipitationProbability:e.PrecipitationProbability,Temperature:e.Temperature}})})):"SET_DAILY_FORECAST"===t.type?(console.log(t),Object(E.a)({},e,{forecast:t.payload.forecast.map(function(e){return{Date:e.Date,Icon:e.Day.Icon,HoursOfSun:e.HoursOfSun,Minimum:e.Temperature.Minimum,Maximum:e.Temperature.Maximum,IconPhrase:e.Day.IconPhrase}})})):e},y=Object(d.combineReducers)({currentConditions:f}),N=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"logo",role:"banner"},r.a.createElement("a",{href:"/"},r.a.createElement("h3",null,"Weatherility"),r.a.createElement("p",null,"weather forecast without devilry"))))},v=function(e){var t=e.Text,a=Object(n.useRef)(null),c=document.body.offsetWidth,l=a.current?a.current.offsetWidth:0;return r.a.createElement("aside",{className:"headline"},r.a.createElement("div",{className:"headline-inner"},r.a.createElement("div",{className:"".concat(l>c?"active":""," markee"),ref:a},r.a.createElement("p",null,t))))},g=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",function(e){var t;return function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];t&&cancelAnimationFrame(t),t=requestAnimationFrame(function(){e.apply(void 0,n)})}}(g),{passive:!0}),g();var b=["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"],w=function(e){var t=JSON.parse(localStorage.getItem("hoursOfSun"))||[];console.log("localStorageHoursOfSun",t),console.log("forecast",e),e.forEach(function(e){var a=t.findIndex(function(t){return t.Date===e.Date});a>1?t[a]={Date:e.Date,HoursOfSun:e.HoursOfSun}:t.push({Date:e.Date,HoursOfSun:e.HoursOfSun})}),console.log("localStorageHoursOfSun",t),localStorage.setItem("hoursOfSun",JSON.stringify(t))},O=function(e){var t,a=e.time,n=e.city,c=e.temperature,l=e.realfeel,s=e.realfeelshade,o=e.weathertext,i=e.pressure,u=e.precipitation,m=e.winddirection,p=e.windspeed,d=e.humidity,E=e.dewpoint,h=e.visibility,f=e.cloudcover,y=e.ceiling,N=e.uvindex,v=e.uvindextext;return c&&l&&m?r.a.createElement("article",{className:"current-conditions",role:"article"},r.a.createElement("div",{className:"head-info"},r.a.createElement("p",{className:"city"},n),r.a.createElement("p",{className:"weather-type"},"\u041f\u043e\u0442\u043e\u0447\u043d\u0456 \u0443\u043c\u043e\u0432\u0438"),!!c&&r.a.createElement("p",{className:"temperature"},Math.round(c.Value),"\xb0",c.Unit),r.a.createElement("p",{className:"description"},o),!!c&&r.a.createElement("p",{className:"realfeel"},"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a ",Math.round(l.Value),"\xb0",r.a.createElement("span",null,c.Unit),", \u0443 \u0437\u0430\u0442\u0456\u043d\u043a\u0443 \u043d\u0435\u043c\u043e\u0432 ",Math.round(s.Value),"\xb0",r.a.createElement("span",null,c.Unit))),r.a.createElement("div",{className:"extra-info"},r.a.createElement("p",null,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0423\u0424:"),r.a.createElement("ul",{className:"chartlist"},r.a.createElement("li",null,r.a.createElement("a",{href:""},N),r.a.createElement("span",{className:"count"},v),r.a.createElement("span",{className:"index percentage-".concat(N)})))),r.a.createElement("div",null,r.a.createElement("div",{className:"progress-circle p".concat(f)},r.a.createElement("span",null,f,"%"),r.a.createElement("div",{className:"left-half-clipper"},r.a.createElement("div",{className:"first50-bar"}),r.a.createElement("div",{className:"value-bar"}))),r.a.createElement("div",null,r.a.createElement("p",null,"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432"))),r.a.createElement("div",null,r.a.createElement("div",{className:"progress-circle p".concat(d)},r.a.createElement("span",null,d,"%"),r.a.createElement("div",{className:"left-half-clipper"},r.a.createElement("div",{className:"first50-bar"}),r.a.createElement("div",{className:"value-bar"}))),r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c"))),!!m&&r.a.createElement("div",null,r.a.createElement("div",{className:"progress-circle p".concat(m.Degrees)},r.a.createElement("span",null,m.English),r.a.createElement("div",{className:"left-half-clipper"},r.a.createElement("div",{className:"first50-bar"}),r.a.createElement("div",{className:"value-bar"}))),r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u0456\u0442\u0435\u0440 ",r.a.createElement("br",null)," ",m.Localized,", ",Number(p.Value)?(t=p.Value,Number(t)?Math.round(1e3*t/3600):"--"):"--"," \u043c/\u0441"))),r.a.createElement("div",null,r.a.createElement("div",{className:"progress-circle p".concat(Number(u.Value)?u.Value:"0")},r.a.createElement("span",null,Number(u.Value)?u.Value:"0"," \u043c\u043c"),r.a.createElement("div",{className:"left-half-clipper"},r.a.createElement("div",{className:"first50-bar"}),r.a.createElement("div",{className:"value-bar"}))),r.a.createElement("div",null,r.a.createElement("p",null,"\u041e\u043f\u0430\u0434\u0438"))),r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u0438\u0441\u043e\u0442\u0430 \u043d\u0438\u0436\u043d\u044c\u043e\u0457 \u043c\u0435\u0436\u0456 \u0445\u043c\u0430\u0440: ",y.Value," \u043c")),r.a.createElement("div",null,r.a.createElement("p",null,"\u0422\u043e\u0447\u043a\u0430 \u0440\u043e\u0441\u0438: ",E.Value,"\xb0",r.a.createElement("span",null,c.Unit))),r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u0438\u0434\u0438\u043c\u0456\u0441\u0442\u044c: ",h.Value.toFixed()," \u043a\u043c")),r.a.createElement("div",null,r.a.createElement("p",null,"\u0422\u0438\u0441\u043a: ",Number(i.Value)?function(e){return Math.round(.750061683*e)}(i.Value):"--"," \u043c\u043c. \u0440\u0442. \u0441\u0442.")),r.a.createElement("div",{className:"localobservation-date-time"},r.a.createElement("time",{className:"date"},!!a&&function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("uk-UA",{weekday:"long"}),", ").concat(t.getDate()," ").concat(b[t.getMonth()])}(a)),r.a.createElement("time",{className:"time"},!!a&&function(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes();return"".concat(a," : ").concat(n)}(a))),r.a.createElement("div",{className:"precipitation"},r.a.createElement("dl",null,r.a.createElement("dt",null,"\u0414\u0435\u0442\u0430\u043b\u0456"),r.a.createElement("dd",{className:"percentage percentage-".concat(d)},r.a.createElement("span",{className:"text"},"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c: ",d,"%")),r.a.createElement("dd",{className:"percentage percentage-".concat(f)},r.a.createElement("span",{className:"text"},"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432: ",f,"%")),r.a.createElement("dd",{className:"percentage percentage-".concat(N)},r.a.createElement("span",{className:"text"},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0423\u0424: ",N," (",v,")")),r.a.createElement("dd",{className:"percentage percentage-".concat(Number(u.Value)?u.Value:"0")},r.a.createElement("span",{className:"text"},"\u041e\u043f\u0430\u0434\u0438: ",Number(u.Value)?u.Value:"0"," \u043c\u043c"))))):null},S=function(e){var t=e.date,a=e.icon,n=e.alt,c=e.precipitationprobability,l=e.temperature;return r.a.createElement("article",{className:"hourlyforecast"},r.a.createElement("div",{className:""},r.a.createElement("time",{className:"hour"},!!t&&function(e){var t=new Date(e);return"".concat(t.getHours())}(t)),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"weather-icons/".concat(a,"-s.png"),alt:"".concat(n)})),r.a.createElement("div",{className:"precipitationprobability"},c),!!l&&r.a.createElement("div",{className:"temperature"},Math.round(l.Value))))},x=function(e){var t=e.date,a=e.icon,n=e.alt,c=e.sunnyhours,l=e.temperaturemin,s=e.temperaturemax;return r.a.createElement("article",{className:"dailyforecast"},r.a.createElement("div",{className:""},r.a.createElement("time",{className:"day"},!!t&&function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("uk-UA",{weekday:"short"}))}(t)),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"weather-icons/".concat(a,"-s.png"),alt:"".concat(n)})),r.a.createElement("div",{className:"sunnyhours"},c),r.a.createElement("div",{className:"temperaturemin"},l.Value),r.a.createElement("div",{className:"temperaturemax"},s.Value)))},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={formattedLocation:[],open:!1},a.debounce=function(e,t){var a=null;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout(function(){return e.apply(void 0,r)},t)}},a.checkApi=a.debounce(function(e){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&q=".concat(e,"&language=uk-UA")).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.map(function(e){return{Key:e.Key,LocalizedName:e.LocalizedName,Country:e.Country.LocalizedName}});a.setState({formattedLocation:t})})},300,!0),a.handleUserInput=function(e){var t=e.target.value;a.setState({userInput:t}),t.length>3&&a.checkApi(t)},a.handleUserClick=function(e,t){a.props.weatherByCityKey(e,t);var n=a.state.open;a.setState({userInput:t,open:!n})},a.handleUserInputClick=function(){var e=a.state.open;a.setState({open:!e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"findlocation",role:"search"},r.a.createElement("input",{type:"text",onChange:this.handleUserInput,onClick:this.handleUserInputClick,value:this.state.userInput,placeholder:"\u0448\u0443\u043a\u0430\u0442\u0438",autoFocus:!0}),r.a.createElement("div",{className:"chooselocation ".concat(this.state.open?"":"close")},this.state.formattedLocation.map(function(t){return r.a.createElement("p",{key:t.Key,onClick:e.handleUserClick.bind(e,t.Key,t.LocalizedName)},t.LocalizedName,", ",t.Country)}))))}}]),t}(n.Component),D=a(18),k=function(e){return Object(D.a)(e),r.a.createElement("section",{className:"dataset"},r.a.createElement("figure",null,r.a.createElement("ul",{className:"sparklist"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},":)"),r.a.createElement("span",{className:"sparkline"},r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"27%"}},"(60,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"98%"}},"220,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"56%"}},"140,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"17%"}},"80,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"67%"}},"110,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"100%"}},"90,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"7%"}},"180,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"27%"}},"140,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"40%"}},"120,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"89%"}},"160,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"66%"}},"175,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"21%"}},"225,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"2%"}},"175,")," "),r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"count",style:{height:"87%"}},"125)")," ")))),r.a.createElement("figcaption",null,"Hours Of Sun per a Day")))},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={initialState:{},geoposition:null,geopositionStatus:null,locationKey:null,status:!1},a.getGeoPosition=function(){navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,n=e.coords.longitude;a.getKeyLocation(t,n),a.setState(function(e){return Object(E.a)({},e,{geopositionStatus:"success"})})},function(){a.setState(function(e){return Object(E.a)({},e,{geopositionStatus:"error"})})})},a.getKeyLocation=function(e,t){fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&q=".concat(e,"%2C").concat(t,"&language=uk-Ua&details=true&toplevel=true")).then(function(e){return e.json()}).then(function(e){a.setState(function(t){return Object(E.a)({},t,{locationKey:e.Key})}),a.getCurrentConditions(e.Key,e.LocalizedName),a.getHourlyForecast(e.Key),a.getDailyForecast(e.Key)})},a.weatherByCityKey=function(e,t){e&&(a.setState(function(t){return Object(E.a)({},t,{locationKey:e})}),a.getCurrentConditions(e,t),a.getHourlyForecast(e),a.getDailyForecast(e))},a.getCurrentConditions=function(e,t){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&language=uk-ua&details=true")).then(function(e){return e.json()}).then(function(e){var n=e[0],r=n.LocalObservationDateTime,c=n.Temperature.Metric,l=n.RealFeelTemperature.Metric,s=n.RealFeelTemperatureShade.Metric,o=n.WeatherText,i=n.WeatherIcon,u=n.PrecipitationSummary.Precipitation.Metric,m=n.Pressure.Metric,p=n.DewPoint.Metric,d=n.RelativeHumidity,E=n.Visibility.Metric,h=n.Wind.Direction,f=n.Wind.Speed.Metric,y=n.CloudCover,N=n.Ceiling.Metric,v=n.UVIndex,g=n.UVIndexText;a.props.setCurrentConditions({status:!0,weather:{city:t,time:r,temperature:c,realfeel:l,realfeelshade:s,weathertext:o,icon:i,precipitation:u,pressure:m,dewpoint:p,humidity:d,visibility:E,winddirection:h,windspeed:f,cloudcover:y,ceiling:N,uvindex:v,uvindextext:g}})}).catch(function(e){console.log(e)})},a.getHourlyForecast=function(e){fetch("https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(e,"?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&language=uk-ua&details=true&metric=true")).then(function(e){return e.json()}).then(function(e){console.log("12 hours forecast",e),a.props.setHourlyForecast({status:!0,hourlyforecast:e})}).catch(function(e){console.log(e)})},a.getDailyForecast=function(e){fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&language=uk-ua&details=true&metric=true")).then(function(e){return e.json()}).then(function(e){console.log("headline",e.Headline),console.log("forecast",e.DailyForecasts);var t=e.Headline,n=e.DailyForecasts;w(n),a.props.setHeadline({status:!0,headline:t}),a.props.setDailyForecast({status:!0,forecast:n})}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getGeoPosition()}},{key:"render",value:function(){var e=this.state,t=e.statusGeoposition,a=e.locationKey,n=this.props.currentConditions,c=n.weather,l=(c.temperature,c.time,c.icon,c.city),s=n.status,o=n.headline,i=n.weather,u=n.hourlyforecast,m=n.forecast;return console.log("hourlyforecast",u),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"main",role:"main"},r.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-1"}),r.a.createElement("label",{htmlFor:"tab-nav-1"},"\u0406\u0441\u0442\u043e\u0440\u0456\u044f"),r.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-2",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"tab-nav-2"},"\u041f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement("input",{type:"radio",name:"tab",id:"tab-nav-3"}),r.a.createElement("label",{htmlFor:"tab-nav-3"},"\u041b\u043e\u043a\u0430\u0446\u0456\u0457"),r.a.createElement("button",{className:"refreshbtn",onClick:this.weatherByCityKey.bind(this,a,l)}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tab"},r.a.createElement(k,null)),s&&r.a.createElement("div",{className:"tab"},r.a.createElement("section",{className:"current-weather"},r.a.createElement(v,o),r.a.createElement(O,i)),r.a.createElement("section",{className:"weatherforecast"},u.map(function(e){return r.a.createElement(S,{date:e.Date,key:e.Date,icon:e.Icon,alt:e.Alt,precipitationprobability:e.PrecipitationProbability,temperature:e.Temperature})})),r.a.createElement("section",{className:"dailyforecasts"},m.map(function(e){return r.a.createElement(x,{date:e.Date,key:e.Date,icon:e.Icon,alt:e.IconPhrase,sunnyhours:e.HoursOfSun,temperaturemin:e.Minimum,temperaturemax:e.Maximum})}))),"error"===t&&r.a.createElement("section",{className:"disablelocation"},r.a.createElement("h1",null,"Please Enable your Location!")),r.a.createElement("div",{className:"location tab"},r.a.createElement(C,{weatherByCityKey:this.weatherByCityKey})))))}}]),t}(n.Component),F=Object(p.b)(function(e){return{currentConditions:e.currentConditions}},function(e){return{setCurrentConditions:function(t){return e(function(e){return{type:"SET_CURRENT_CONDITIONS",payload:e}}(t))},setHourlyForecast:function(t){return e(function(e){return{type:"SET_HOURLY_FORECAST",payload:e}}(t))},setHeadline:function(t){return e(function(e){return{type:"SET_HEADLINE",payload:e}}(t))},setDailyForecast:function(t){return e(function(e){return{type:"SET_DAILY_FORECAST",payload:e}}(t))}}})(V),T=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"logo",role:"banner"},r.a.createElement("a",{href:"/"},r.a.createElement("h3",null,"Weatherility"))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,r.a.createElement("span",null,"\xa9 2019\u20132021 "),r.a.createElement("a",{className:"link",href:"https://github.com/uastyle",target:"_blank",rel:"noopener noreferrer me","aria-label":"This is an external link (opens in a new tab)"},"UA Style"))))},j=(a(31),a(19)),A=Object(d.createStore)(y,Object(j.composeWithDevTools)()),H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:A},r.a.createElement(N,null),r.a.createElement(F,null),r.a.createElement(T,null))}}]),t}(n.Component);a(32);l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f3170092.chunk.js.map