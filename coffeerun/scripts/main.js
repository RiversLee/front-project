(function (window) {
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var MyTruck = new Truck('ncc-1701',new DataStore());
    window.MyTruck = MyTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSumitHandler(MyTruck.createOrder.bind(MyTruck));
    console.log(formHandler);
})(window);