function my_Dictionary() {
    var Device = {
        Type:"Phone",
        Manufacturer:"Apple",
        Model:"11 Pro Max",
        Color:"Forest Green",
        Software_Version: 13.3,
    };

    delete Device.Type
    document.getElementById("Dictionary").innerHTML = Device.Type;
}