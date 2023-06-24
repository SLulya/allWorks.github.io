function change_color() {
    let color = document.getElementById("color").value;
    document.getElementById("test").setAttribute(`style`, `background: ${color}`)
}
