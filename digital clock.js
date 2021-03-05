function updateClock(){
    var now=new Date();
    var dyna=now.getDay(),
        mo=now.getMonth(),
        dynu=now.getDate(),
        yr=now.getFullYear(),
        ho=now.getHours(),
        mi=now.getMinutes(),
        sec=now.getSeconds(),
        pe="AM";

        if(ho == 0){
            ho=12
        }
        if(ho > 12){
            ho = ho-12;
            pe = "PM";
        }

        Number.prototype.pad = function (digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n );

                return n
        }

    var month=["January","February ","March","April","May","June","July","August","September","October","November","December"]
    var week=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var ids=["day","month","monthnum","year","hour","min","second","priod"]
    var values=[week[dyna],month[mo],dynu.pad(2),yr,ho.pad(2),mi.pad(2),sec.pad(2),pe];

    for( i=0; i < ids.length; i++)
        
        document.getElementById(ids[i]).firstChild.nodeValue=values[i];
    
}

function initClock(){
    updateClock()
    window.setInterval("updateClock()",1 )
}