// Enum defining categories of vehicles
enum VehicleCategory{
    Cars ="Cars",
    Trucks ="Trucks",
    Motercycles = "Motercycles"
}
// Enum defining names of car models
enum CarName{
    Honda ="Honda",
    Toyota = "Toyota",
    Ford = "Ford",
    Tesla = "Tesla",
    Mehran = "Mehran",
    Corolla = "Corolla",
    Mercedes = "Mercedes"
}
// Enum defining names of truck models
enum TruckName{
    Nissan_titan ="titan",
    Ford_F150 ="F-150",
    Toyota_Tundra = "Toyota Tundra",
    GMC_Sierra ="Sierra",
    Dodge_Ram ="Ram",
    Chevrolet_Silverado ="Silverado",
}
// Enum defining names of motorcycle models
enum Motercycles{
    Honda_CBR,
    Yamah_R1,
    Suzuki_GSX,
    Kawasaki_Ninja,
    Ducati_Panigale
}
// Declare a constant representing the category of vehicles.
const Vehicles :VehicleCategory = VehicleCategory.Trucks;

// Declare a constant representing a specific truck model
const Vehicles_model : TruckName = TruckName.Toyota_Tundra;

// Output the category of vehicles and a specific truck model
console.log("Categories: " + Vehicles);
console.log("Vehicle_Model: " + Vehicles_model)