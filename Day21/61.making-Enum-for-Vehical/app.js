var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Cars"] = "Cars";
    VehicleCategory["Trucks"] = "Trucks";
    VehicleCategory["Motercycles"] = "Motercycles";
})(VehicleCategory || (VehicleCategory = {}));
var CarName;
(function (CarName) {
    CarName["Honda"] = "Honda";
    CarName["Toyota"] = "Toyota";
    CarName["Ford"] = "Ford";
    CarName["Tesla"] = "Tesla";
    CarName["Mehran"] = "Mehran";
    CarName["Corolla"] = "Corolla";
    CarName["Mercedes"] = "Mercedes";
})(CarName || (CarName = {}));
var TruckName;
(function (TruckName) {
    TruckName["Nissan_titan"] = "titan";
    TruckName["Ford_F150"] = "F-150";
    TruckName["Toyota_Tundra"] = "Toyota Tundra";
    TruckName["GMC_Sierra"] = "Sierra";
    TruckName["Dodge_Ram"] = "Ram";
    TruckName["Chevrolet_Silverado"] = "Silverado";
})(TruckName || (TruckName = {}));
var Motercycles;
(function (Motercycles) {
    Motercycles[Motercycles["Honda_CBR"] = 0] = "Honda_CBR";
    Motercycles[Motercycles["Yamah_R1"] = 1] = "Yamah_R1";
    Motercycles[Motercycles["Suzuki_GSX"] = 2] = "Suzuki_GSX";
    Motercycles[Motercycles["Kawasaki_Ninja"] = 3] = "Kawasaki_Ninja";
    Motercycles[Motercycles["Ducati_Panigale"] = 4] = "Ducati_Panigale";
})(Motercycles || (Motercycles = {}));
var Vehicles = VehicleCategory.Trucks;
var Vehicles_model = TruckName.Toyota_Tundra;
console.log("Categories: " + Vehicles);
console.log("Vehicle_Model: " + Vehicles_model);
