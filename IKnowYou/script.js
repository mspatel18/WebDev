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
async function getUserCurrency(){
    const res = await fetch(ipdata.currency());
    const userCurrency = await res.json();
    //console.log(userCurrency);
    // let text="";
    let currencyMap = ["name","code","symbol","native","plural"];

    currencyMap.forEach(function(value){
        document.getElementById(value).innerText=userCurrency[value];
    })

}
async function getUserLocation(){
    const res = await fetch(ipdata.location());
    const userLocation = await res.json();
    const locationMap=["ip",
    "city",
    "region",
    "region_code",
    "region_type",
    "country_name",
    "country_code",
    "continent_name",
    "continent_code",
    "latitude",
    "longitude",
    "postal",
    "calling_code",
    "flag",
    "emoji_flag",
    "emoji_unicode"]
    locationMap.forEach(function(value){
        document.getElementById(value).innerHTML=userLocation[value];
    })


}
async function getUserTimezone(){
    const res = await fetch(ipdata.timezone());
    const userTimezone = await res.json();
    let timezoneMap = ["nameT","abbr","is_dst","current_time"];

    timezoneMap.forEach(function(value){
        document.getElementById(value).innerHTML=userTimezone[value];
    })
}
async function getUserASN(){
    const res = await fetch(ipdata.basicasn());
    const userASN = await res.json();
    let asnMap = ["asn","nameA","domain","route","type"];

    asnMap.forEach(function(value){
        document.getElementById(value).innerHTML=userASN[value];
    })
}

//typing
