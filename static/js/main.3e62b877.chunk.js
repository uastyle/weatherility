(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=a(1),o=a(2),u=a(4),s=a(3),m=a(5),p=function(e){return r.a.createElement("header",{className:"header",role:"banner"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h3",null,"Weatherility"),r.a.createElement("p",null,"\u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u0438 \u0431\u0435\u0437 \u043f\u0456\u0434\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456")))},h=["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"],d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={userInput:"\u041a\u0438\u0457\u0432",formattedLocation:[],open:!1},a.debounce=function(e,t){var a=null;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout(function(){return e.apply(void 0,r)},t)}},a.checkApi=a.debounce(function(e){fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&q=".concat(e,"&language=uk-UA")).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.map(function(e){return{Key:e.Key,LocalizedName:e.LocalizedName,Country:e.Country.LocalizedName}});a.setState({formattedLocation:t})})},300,!0),a.handleUserInput=function(e){var t=e.target.value;a.setState({userInput:t}),t.length>3&&a.checkApi(t)},a.handleUserClick=function(e,t){a.props.weatherByCityKey(e);var n=a.state.open;a.setState({userInput:t,open:!n})},a.handleUserInputClick=function(){var e=a.state.open;a.setState({open:!e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"findlocation",role:"search"},r.a.createElement("input",{type:"text",onChange:this.handleUserInput,onClick:this.handleUserInputClick,value:this.state.userInput}),r.a.createElement("div",{className:"chooselocation ".concat(this.state.open?"":"close")},this.state.formattedLocation.map(function(t){return r.a.createElement("p",{key:t.Key,onClick:e.handleUserClick.bind(e,t.Key,t.LocalizedName)},t.LocalizedName,", ",t.Country)}))))}}]),t}(n.Component),E=function(e){var t=e.weatherByCityKey,a=e.time,n=e.temperature,c=e.icon;return r.a.createElement("section",{className:"current-information"},r.a.createElement("div",{className:"left-side"},r.a.createElement(d,{weatherByCityKey:t}),r.a.createElement("time",{className:"date"},!!a&&function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("uk-UA",{weekday:"long"}),", ").concat(t.getDate()," ").concat(h[t.getMonth()])}(a))),r.a.createElement("div",{className:"right-side"},r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"weather-icons/".concat(c,"-s.png"),alt:"icon"})),r.a.createElement("div",null,r.a.createElement("p",{className:"temperature"},n&&!!n.Value&&Math.round(n.Value),"\xb0"),r.a.createElement("time",{className:"time"},!!a&&function(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes();return"".concat(a," : ").concat(n)}(a)))))},f=function(e){var t,a=e.temperature,n=e.realfeel,c=e.weathertext,l=e.icon,i=e.pressure,o=e.precipitation,u=e.winddirection,s=e.windspeed,m=e.humidity,p=e.dewpoint,h=e.visibility,d=e.cloudcover,E=e.uvindex,f=e.uvindextext;return r.a.createElement("section",{className:"detailed-weather"},r.a.createElement("p",{className:"weather-type"},"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u043f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement("div",{className:"head-info"},r.a.createElement("div",null,r.a.createElement("h1",{className:"temperature"},Math.round(a.Value),"\xb0",a.Unit),r.a.createElement("p",{className:"realfeel"},"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a: ",r.a.createElement("span",null,Math.round(n.Value),"\xb0",a.Unit)),r.a.createElement("p",{className:"description"},c)),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"weather-icons/".concat(l,"-s.png"),alt:"icon"}))),r.a.createElement("div",{className:"extra-info"},r.a.createElement("p",null,"\u0422\u0438\u0441\u043a: ",r.a.createElement("span",null,Number(i.Value)?(t=i.Value,Math.round(.750061683*t)):"---"," \u043c\u043c. \u0440\u0442. \u0441\u0442.")),r.a.createElement("p",null,"\u041e\u043f\u0430\u0434\u0438: ",r.a.createElement("span",null,Number(o.Value)?o.Value:"---"," \u043c\u043c")),r.a.createElement("p",null,"\u0412\u0456\u0442\u0435\u0440 ",r.a.createElement("span",null,u.Localized,", ",Number(s.Value)?function(e){return Number(e)?Math.round(1e3*e/3600):"---"}(s.Value):"---"," \u043c/\u0441")),r.a.createElement("p",null,"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c: ",r.a.createElement("span",null,m,"%")),r.a.createElement("p",null,"\u0422\u043e\u0447\u043a\u0430 \u0440\u043e\u0441\u0438: ",r.a.createElement("span",null,p.Value,"\xb0",a.Unit)),r.a.createElement("p",null,"\u0412\u0438\u0434\u0438\u043c\u0456\u0441\u0442\u044c: ",r.a.createElement("span",null,h.Value.toFixed()," \u043a\u043c")),r.a.createElement("p",null,"\u0425\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u043e\u043a\u0440\u0438\u0432: ",r.a.createElement("span",null,d,"%")),r.a.createElement("p",null,"\u0406\u043d\u0434\u0435\u043a\u0441 \u0423\u0424: ",r.a.createElement("span",null,E," (",f,")"))))},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={initialState:{},status:!1},a.getWeather=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:324505;fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&language=uk-ua&details=true")).then(function(e){return e.json()}).then(function(e){console.log("res",e[0]);var t=e[0],n=t.LocalObservationDateTime,r=t.Temperature.Metric,c=t.RealFeelTemperature.Metric,l=t.WeatherText,i=t.WeatherIcon,o=t.PrecipitationSummary.Precipitation.Metric,u=t.Pressure.Metric,s=t.DewPoint.Metric,m=t.RelativeHumidity,p=t.Visibility.Metric,h=t.Wind.Direction,d=t.Wind.Speed.Metric,E=t.CloudCover,f=t.UVIndex,v=t.UVIndexText;a.setState({status:!0,initialState:{time:n,temperature:r,realfeel:c,weathertext:l,icon:i,precipitation:o,pressure:u,dewpoint:s,humidity:m,visibility:p,winddirection:h,windspeed:d,cloudcover:E,uvindex:f,uvindextext:v}})}).catch(function(e){console.log(e)})},a.weatherByCityKey=function(e){a.getWeather(e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"render",value:function(){var e=this.state,t=e.initialState,a=t.temperature,n=t.time,c=t.icon,l=e.status;return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("main",{className:"main",role:"main"},r.a.createElement(E,{weatherByCityKey:this.weatherByCityKey,time:n,temperature:a,icon:c}),r.a.createElement(f,this.state.initialState)))}}]),t}(n.Component),y=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,r.a.createElement("span",null,"\xa9 2019 "),r.a.createElement("a",{className:"link",href:"https://github.com/uastyle",target:"_blank",rel:"noopener noreferrer me","aria-label":"This is an external link (opens in a new tab)"},"UA Style")))},w=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(y,null))}}]),t}(n.Component));a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.3e62b877.chunk.js.map