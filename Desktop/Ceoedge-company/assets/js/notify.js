if ('undefined' !== typeof module) {
    inNotify = true;
    type = ['','info','success','warning','danger'];
    module.exports = function initNotify(from, align){
        color = Math.floor((Math.random() * 4) + 1);
        if(inNotify){
            $.notify({
                icon: "pe-7s-gift",
                message: "Welcome to <b>Ceo's Edge Dashboard</b> - a beautiful Task Management service ."
            },{
                type: type[color],
                timer: 1000,
                placement: {
                    from: from,
                    align: align
                }
            });
            inNotify = false;
        }
    }
}
