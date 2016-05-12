(function () {
    var that = me.define("menu4", {
        ctrl: function () {
            that.changeShip(0);
        },

        changeShip: function(shipIndex){
            that.$scope.shipIndex = shipIndex;

            switch(shipIndex){
                case 0:
                    me.show("activity_ship", {
                        showType: 0
                    });
                    break;
                case 1:
                    me.show("re_activity_ship", {
                        showType: 0
                    });
                    break;
            }
        }
    });
})();