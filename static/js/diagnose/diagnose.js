var recordingCount;
var btnMicrophone;
var btnMicrophoneBorder;

var msgBeforeCoughing;
var msgFirstCoughing;
var msgFirstCoughDone;
var msgSecondCoughing;
var msgSecondCoughDone;
var msgThirdCoughing;
var msgThirdCoughDone;

var divRecording;
var divShowResult;
var btnBack;

// get microphone device
navigator.mediaDevices.getUserMedia({audio:true}).then (stream => {handlerFunction(stream)})

// temp to jump QAQ
function redirect() {
    location.href = '../diagnose-result';
} 

function redirect_dashboard() {
    location.href = '../dashboard';
}

function handlerFunction(stream) {
    const rec = new MediaRecorder(stream); 
    const audioChunks = []; 
    //once the recording is started
    rec.ondataavailable = e => {
        audioChunks.push(e.data); 
    }
    //once the recording is stopped
    rec.onstop = e => { 
        const audioBlob = new Blob(audioChunks, {type:'audio/wav'}); //new blob defined as wav
        const audioBlobURL = URL.createObjectURL(audioBlob); //show the audio file

        // const audioObj = new Audio(audioBlobURL); // create htmlaudioelement i.e. the audio file
        // const audioURL = URL.createObjectURL(audioObj); // create url to the audio file

        // script to download from url
        // however, i think this script only downloads to client device
        // we needed to upload the audio file to the database instead
        // var link = document.createElement("a");
        // link.setAttribute('download', '');
        // link.href = audioURL;
        // document.body.appendChild(link);
        // link.click();
        // link.remove();

        // recordedAudio.controls=true; //allow user to control (e.g. play or download audio)
    }
}

function OnButtonDown (btnMicrophoneBorder) {
    btnMicrophoneBorder.style.visibility = "visible";
    recordingCount += 1;
    Visibility ();
    rec.start();
}

function OnButtonUp (btnMicrophoneBorder) {
    btnMicrophoneBorder.style.visibility = "hidden";
    recordingCount += 1;
    Visibility ();
    rec.stop();
}

function Visibility () {
    switch (recordingCount) {
        case 1:
            msgBeforeCoughing.style.display = "none";
            msgFirstCoughing.style.display = "flex";
            break;
        case 2:
            msgFirstCoughing.style.display = "none";
            msgFirstCoughDone.style.display = "flex";
            break;
        case 3:
            msgFirstCoughDone.style.display = "none";
            msgSecondCoughing.style.display = "flex";
            break;
        case 4:
            msgSecondCoughing.style.display = "none";
            msgSecondCoughDone.style.display = "flex";
            break;
        case 5:
            msgSecondCoughDone.style.display = "none";
            msgThirdCoughing.style.display = "flex";
            break;
        case 6:
            msgThirdCoughing.style.display = "none";
            msgThirdCoughDone.style.display = "flex";
            divRecording.style.display = "none";
            divShowResult.style.display = "flex";
            btnBack.style.display = "none";
            break;
    }
}

function Init () {
    recordingCount = 0;
    btnMicrophone = document.getElementById ("btn_microphone");
    btnMicrophoneBorder = document.getElementById ("btn_onclick_border");

    msgBeforeCoughing = document.getElementById ("msg_before_coughing");
    msgFirstCoughing = document.getElementById ("msg_first_coughing");
    msgFirstCoughDone = document.getElementById ("msg_first_cough_done");
    msgSecondCoughing = document.getElementById ("msg_second_coughing");
    msgSecondCoughDone = document.getElementById ("msg_second_cough_done");
    msgThirdCoughing = document.getElementById ("msg_third_coughing");
    msgThirdCoughDone = document.getElementById ("msg_third_cough_done");

    divRecording = document.getElementById ("div_recording");
    divShowResult = document.getElementById ("div_view_result");
    btnBack = document.getElementById ('btn_back');

    if (btnMicrophone.addEventListener) {  // all browsers except IE before version 9
        btnMicrophone.addEventListener ("mousedown", function () {OnButtonDown (btnMicrophoneBorder)}, false);
        btnMicrophone.addEventListener ("mouseup", function () {OnButtonUp (btnMicrophoneBorder)}, false);
    }
}