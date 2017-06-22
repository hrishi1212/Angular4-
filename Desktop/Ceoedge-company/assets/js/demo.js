type = ['','info','success','warning','danger'];


demo = {
	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "pe-7s-gift",
        	message: "Welcome to <b>Ceo's Edge Dashboard</b> - a beautiful Task Management service ."

        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
	}
}
