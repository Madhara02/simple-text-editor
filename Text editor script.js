function format(command) {
    document.execCommand(command, false, null);
}

function ChangeColor(color) {
    document.execCommand('foreColor', false, color);
}

function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}