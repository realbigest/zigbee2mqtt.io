"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38741],{258725:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-925e9846","path":"/devices/EFEKTA_THP.html","title":"Custom devices (DiY) EFEKTA_THP control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) EFEKTA_THP control via MQTT","description":"Integrate your Custom devices (DiY) EFEKTA_THP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-16T00:31:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Build guide","slug":"build-guide","link":"#build-guide","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pressure (numeric)","slug":"pressure-numeric","link":"#pressure-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1676488424000},"filePathRelative":"devices/EFEKTA_THP.md"}')},315238:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var r=i(166252);const o=(0,r._)("h1",{id:"custom-devices-diy-efekta-thp",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#custom-devices-diy-efekta-thp","aria-hidden":"true"},"#"),(0,r.Uk)(" Custom devices (DiY) EFEKTA_THP")],-1),a=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"EFEKTA_THP")],-1),u=(0,r._)("td",null,"Vendor",-1),d=(0,r._)("td",null,"Description",-1),l={href:"http://efektalab.com/eON_THP",target:"_blank",rel:"noopener noreferrer"},s=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"battery, temperature, humidity, pressure, linkquality")],-1),c=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_THP.jpg",alt:"Custom devices (DiY) EFEKTA_THP"})])],-1),h=(0,r._)("h2",{id:"notes",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,r.Uk)(" Notes")],-1),m=(0,r._)("h3",{id:"build-guide",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#build-guide","aria-hidden":"true"},"#"),(0,r.Uk)(" Build guide")],-1),p={href:"https://github.com/smartboxchannel/Outdoor-long-range-sensor-for-temperature-humidity-and-atmospheric-pressure-Zigbee",target:"_blank",rel:"noopener noreferrer"},f=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),b=(0,r.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric" aria-hidden="true">#</a> Pressure (numeric)</h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>hPa</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),v={},g=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,r.up)("RouterLink"),v=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),o,(0,r._)("table",null,[a,(0,r._)("tbody",null,[n,(0,r._)("tr",null,[u,(0,r._)("td",null,[(0,r.Wm)(i,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,r.w5)((()=>[(0,r.Uk)("Custom devices (DiY)")])),_:1})])]),(0,r._)("tr",null,[d,(0,r._)("td",null,[(0,r._)("a",l,[(0,r.Uk)("DIY temperature, humidity and atmospheric pressure sensor, long battery life"),(0,r.Wm)(v)])])]),s,c])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,m,(0,r._)("p",null,[(0,r.Uk)("Instructions on how to build this device can be found "),(0,r._)("a",p,[(0,r.Uk)("here"),(0,r.Wm)(v)])]),(0,r.kq)(" Notes END: Do not edit below this line "),f,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[(0,r.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);