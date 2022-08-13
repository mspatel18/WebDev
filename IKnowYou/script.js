//API PROVIDER
const ipdata = {
    key: 'key',
    baseurl: 'https://api.ipdata.co',
    currency: function(){
        return `${this.baseurl}/currency?api-key=${this.key}`;
    },
    location: function(){
        return `${this.baseurl}?api-key=${this.key}&fields=ip,is_eu,city,region,region_code,region_type,country_name,country_code,continent_name,continent_code,latitude,longitude,postal,calling_code,flag,emoji_flag,emoji_unicode`;
    },
    timezone: function(){
        return`${this.baseurl}/time_zone?api-key=${this.key}`;
    },
    reputationScores: function(){
        return `${this.baseurl}/threat?api-key=${this.key}`;
    },
    company: function () {
        return `${this.baseurl}/company?api-key=${this.key}`;
    },
    basicasn: function(){
        return `${this.baseurl}/asn?api-key=${this.key}`;
    },
    advasn: function(){
        return `${this.baseurl}/AS2/?api-key=${this.key}`;
    },
    threat: function(){
        return `${this.baseurl}/threat?api-key=${this.key}`;
    }
};
//GET USER DATA
// const currencyMap = new Map([
//     ["name",0],
//     ["code",1],
//     ["symbol",2],
//     ['native',3],
//     ["plural",4]
// ]);
async function getUserCurrency(){
    const res = await fetch(ipdata.currency());
    const userCurrency = await res.json();
    //console.log(userCurrency);
    // let text="";
    // currencyMap.forEach(function(value,key){
    //     document.getElementById(key).innerHTML=userCurrency.value;
    // })
    document.getElementById("name").innerHTML=userCurrency.name;
    document.getElementById("code").innerHTML=userCurrency.code;
    document.getElementById("symbol").innerHTML=userCurrency.symbol;
    document.getElementById("native").innerHTML=userCurrency.natve;
    document.getElementById("plural").innerHTML=userCurrency.plural;

   // return userCurrency;
}
async function getUserLocation(){
    const res = await fetch(ipdata.location());
    const userLocation = await res.json();
    document.getElementById("IP").innerHTML=userLocation.ip;
    document.getElementById("city").innerHTML=userLocation.city;
    document.getElementById("region").innerHTML=userLocation.region;
    document.getElementById("region_code").innerHTML=userLocation.region_code;
    document.getElementById("region_type").innerHTML=userLocation.region_type;
    document.getElementById("country_name").innerHTML=userLocation.country_name;
    document.getElementById("country_code").innerHTML=userLocation.country_code;
    document.getElementById("continent_name").innerHTML=userLocation.continent_name;
    document.getElementById("continent_code").innerHTML=userLocation.continent_code;
    document.getElementById("latitude").innerHTML=userLocation.latitude;
    document.getElementById("longitude").innerHTML=userLocation.longitude;
    document.getElementById("postal").innerHTML=userLocation.postal;
    document.getElementById("calling_code").innerHTML=userLocation.calling_code;
    document.getElementById("flag").innerHTML=userLocation.flag;
    document.getElementById("emoji_flag").innerHTML=userLocation.emoji_flag;
    document.getElementById("emoji_unicode").innerHTML=userLocation.emoji_unicode;

}
async function getUserTimezone(){
    const res = await fetch(ipdata.timezone());
    const userTimezone = await res.json();
    document.getElementById("nameT").innerHTML=userTimezone.name;
    document.getElementById("abbr").innerHTML=userTimezone.abbr;
    document.getElementById("is_dst").innerHTML=userTimezone.is_dst;
    document.getElementById("current_time").innerHTML=userTimezone.current_time;
    // console.log(userTimezone.name);
}
async function getUserASN(){
    const res = await fetch(ipdata.basicasn());
    const userASN = await res.json();
    document.getElementById("asn").innerHTML=userASN.asn;
    document.getElementById("nameA").innerHTML=userASN.name;
    document.getElementById("domain").innerHTML=userASN.domain;
    document.getElementById("route").innerHTML=userASN.route;
    document.getElementById("type").innerHTML=userASN.type;
}

//typing
