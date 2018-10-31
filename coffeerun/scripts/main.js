(function (window) {
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var MyTruck = new Truck('ncc-1701',new DataStore());
    window.MyTruck = MyTruck;
})(window);