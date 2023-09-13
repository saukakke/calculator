function clear() {
    var screen = document.getElementById("screen");
    screen.setText("");
}

function delet() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text.substring(0, -2));
}

function unary() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    if (text[0] == -)
    				screen.setText(text.substring(1));
    else
    				screen.setText(text.append(0,"-"));
}

function one() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "1");
}

function two() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "2");
}

function three() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "3");
}

function four() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "4");
}

function five() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "5");
}

function six() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "6");
}

function seven() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "7");
}

function eight() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "8");
}

function nine() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "9");
}

function zero() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "0");
}

function plus() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "+");
}

function sub() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "-");
}

function mul() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "*");
}

function div() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "/");
}

function dot() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + ".");
}

function mod() {
    var screen = document.getElementById("screen");
    var text = screen.getText();
    screen.setText(text + "%");
}