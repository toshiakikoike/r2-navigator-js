// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

export const ROOT_CLASS_REDUCE_MOTION = "r2-reduce-motion";
export const ROOT_CLASS_NO_FOOTNOTES = "r2-no-popup-foonotes";
export const ROOT_CLASS_MATHJAX = "r2-mathjax";
export const POPUP_DIALOG_CLASS = "r2-popup-dialog";
export const FOOTNOTES_CONTAINER_CLASS = "r2-footnote-container";
export const FOOTNOTES_CLOSE_BUTTON_CLASS = "r2-footnote-close";
export const FOOTNOTE_FORCE_SHOW = "r2-footnote-force-show";

// 'a' element: noteref biblioref glossref annoref
//
// @namespace epub "http://www.idpf.org/2007/ops";
// [epub|type~="footnote"]
// VS.
// *[epub\\:type~="footnote"]
//
// :root:not(.${ROOT_CLASS_NO_FOOTNOTES}) aside[epub|type~="biblioentry"],
// :root:not(.${ROOT_CLASS_NO_FOOTNOTES}) aside[epub|type~="annotation"]
export const footnotesCssStyles = `
@namespace epub "http://www.idpf.org/2007/ops";

:root:not(.${ROOT_CLASS_NO_FOOTNOTES}) aside[epub|type~="footnote"]:not(.${FOOTNOTE_FORCE_SHOW}),
:root:not(.${ROOT_CLASS_NO_FOOTNOTES}) aside[epub|type~="note"]:not(.${FOOTNOTE_FORCE_SHOW}),
:root:not(.${ROOT_CLASS_NO_FOOTNOTES}) aside[epub|type~="endnote"]:not(.${FOOTNOTE_FORCE_SHOW}),
:root:not(.${ROOT_CLASS_NO_FOOTNOTES}) aside[epub|type~="rearnote"]:not(.${FOOTNOTE_FORCE_SHOW}) {
    display: none;
}

/*
:root.${POPUP_DIALOG_CLASS} {
    overflow: hidden !important;
}
*/

:root[style] dialog#${POPUP_DIALOG_CLASS}::backdrop,
:root dialog#${POPUP_DIALOG_CLASS}::backdrop {
    background: rgba(0, 0, 0, 0.3) !important;
}
:root[style*="readium-night-on"] dialog#${POPUP_DIALOG_CLASS}::backdrop {
    background: rgba(0, 0, 0, 0.65) !important;
}

:root[style] dialog#${POPUP_DIALOG_CLASS},
:root dialog#${POPUP_DIALOG_CLASS} {
    z-index: 3;

    position: fixed;

    width: 90%;
    max-width: 40em;

    bottom: 1em;
    height: 7em;

    margin: 0 auto;
    padding: 0;

    border-radius: 0.3em;
    border-width: 1px;

    background: white !important;
    border-color: black !important;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    grid-template-columns: 1.5em auto 1.5em;
    grid-template-rows: auto 1.5em;
}
:root[style*="readium-night-on"] dialog#${POPUP_DIALOG_CLASS} {
    background: #333333 !important;
    border-color: white !important;
}
:root[style*="readium-sepia-on"] dialog#${POPUP_DIALOG_CLASS} {
    background: var(--RS__backgroundColor) !important;
}
:root[style*="--USER__backgroundColor"] dialog#${POPUP_DIALOG_CLASS} {
    background: var(--USER__backgroundColor) !important;
}
:root[style] .${FOOTNOTES_CONTAINER_CLASS},
:root .${FOOTNOTES_CONTAINER_CLASS} {
    overflow: auto;

    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;

    padding: 0.3em;
    margin: 0.2em;
}

:root[style] .${FOOTNOTES_CONTAINER_CLASS} > div > *,
:root .${FOOTNOTES_CONTAINER_CLASS} > div > * {
    margin: 0 !important;
    padding: 0 !important;
}

/*
:root[style] .${FOOTNOTES_CLOSE_BUTTON_CLASS},
:root .${FOOTNOTES_CLOSE_BUTTON_CLASS} {
    border: 1px solid black;
    background: white !important;
    color: black !important;

    border-radius: 0.8em;
    position: absolute;
    top: -0.9em;
    left: -0.9em;
    width: 1.8em;
    height: 1.8em;
    font-size: 1em !important;
    font-family: Arial !important;
    cursor: pointer;
}
:root[style*="readium-night-on"] .${FOOTNOTES_CLOSE_BUTTON_CLASS} {
    border: 1px solid white !important;
    background: black !important;
    color: white !important;
}
*/
`;

export const TTS_ID_PREVIOUS = "r2-tts-previous";
export const TTS_ID_NEXT = "r2-tts-next";
export const TTS_ID_SLIDER = "r2-tts-slider";
export const TTS_ID_ACTIVE_WORD = "r2-tts-active-word";
export const TTS_ID_ACTIVE_UTTERANCE = "r2-tts-active-utterance";
export const TTS_CLASS_UTTERANCE = "r2-tts-utterance";
export const TTS_ID_CONTAINER = "r2-tts-txt";
export const TTS_ID_INFO = "r2-tts-info";
export const TTS_NAV_BUTTON_CLASS = "r2-tts-button";
export const TTS_ID_SPEAKING_DOC_ELEMENT = "r2-tts-speaking-el";
export const TTS_CLASS_INJECTED_SPAN = "r2-tts-speaking-txt";
export const TTS_CLASS_INJECTED_SUBSPAN = "r2-tts-speaking-word";
export const TTS_ID_INJECTED_PARENT = "r2-tts-speaking-txt-parent";
export const TTS_POPUP_DIALOG_CLASS = "r2-tts-popup-dialog";

export const ttsCssStyles = `

:root[style] dialog#${POPUP_DIALOG_CLASS}.${TTS_POPUP_DIALOG_CLASS},
:root dialog#${POPUP_DIALOG_CLASS}.${TTS_POPUP_DIALOG_CLASS} {
    width: auto;
    max-width: 100%;

    height: auto;
    max-height: 100%;

    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    margin: 0;
    padding: 0;

    box-shadow: none;

    border-radius: 0;
    border-style: solid;
    border-width: 2px;
    border-color: black !important;
}

:root[style] div#${TTS_ID_CONTAINER},
:root div#${TTS_ID_CONTAINER} {
    overflow: auto;
    overflow-x: hidden;

    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;

    padding: 1em;
    margin: 0;
    margin-left: 0.2em;
    margin-top: 0.2em;
    margin-right: 0.2em;

    hyphens: none !important;
    word-break: keep-all !important;
    word-wrap: break-word !important;

    font-size: 120% !important;

    line-height: initial !important;

    color: #999999 !important;
}
:root[style*="--USER__lineHeight"] div#${TTS_ID_CONTAINER} {
    line-height: calc(var(--USER__lineHeight) * 1.2) !important;
}
:root[style*="readium-night-on"] div#${TTS_ID_CONTAINER} {
    color: #bbbbbb !important;
}
:root[style*="readium-sepia-on"] div#${TTS_ID_CONTAINER}{
    background: var(--RS__backgroundColor) !important;
    color: var(--RS__textColor) !important;
}
:root[style*="--USER__backgroundColor"] div#${TTS_ID_CONTAINER} {
    background: var(--USER__backgroundColor) !important;
}
:root[style*="--USER__textColor"] div#${TTS_ID_CONTAINER} {
    color: var(--USER__textColor) !important;
}
:root[style] #${TTS_ID_INFO},
:root #${TTS_ID_INFO} {
    display: none;

    padding: 0;
    margin: 0;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    font-family: Arial !important;
    font-size: 90% !important;
}

:root[style] #${TTS_ID_SLIDER},
:root #${TTS_ID_SLIDER} {
    padding: 0;
    margin: 0;
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 6px;
    margin-bottom: 6px;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    cursor: pointer;
    -webkit-appearance: none;

    background: transparent !important;
}
:root #${TTS_ID_SLIDER}::-webkit-slider-runnable-track {
    cursor: pointer;

    width: 100%;
    height: 0.5em;

    background: #999999;

    padding: 0;
    margin: 0;
}
:root[style*="readium-night-on"] #${TTS_ID_SLIDER}::-webkit-slider-runnable-track {
    background: #545454;
}
:root #${TTS_ID_SLIDER}::-webkit-slider-thumb {
    -webkit-appearance: none;

    cursor: pointer;

    width: 0.8em;
    height: 1.5em;

    padding: 0;
    margin: 0;
    margin-top: -0.5em;

    border: none;
    border-radius: 0.2em;

    background: #333333;
}
:root[style*="readium-night-on"] #${TTS_ID_SLIDER}::-webkit-slider-thumb {
    background: white;
}
:root[style] button.${TTS_NAV_BUTTON_CLASS} > span,
:root button.${TTS_NAV_BUTTON_CLASS} > span {
    vertical-align: baseline;
}
:root[style] button.${TTS_NAV_BUTTON_CLASS},
:root button.${TTS_NAV_BUTTON_CLASS} {
    border: none;

    font-size: 100% !important;
    font-family: Arial !important;
    cursor: pointer;

    padding: 0;
    margin-top: 0.2em;
    margin-bottom: 0.2em;

    background: transparent !important;
    color: black !important;
}
:root[style*="readium-night-on"] button.${TTS_NAV_BUTTON_CLASS} {
    color: white !important;
}
/*
:root[style*="readium-sepia-on"] button.${TTS_NAV_BUTTON_CLASS} {
    background: var(--RS__backgroundColor) !important;
}
:root[style*="--USER__backgroundColor"] button.${TTS_NAV_BUTTON_CLASS} {
    background: var(--USER__backgroundColor) !important;
}
*/
:root[style] #${TTS_ID_PREVIOUS},
:root #${TTS_ID_PREVIOUS} {
    margin-left: 0.2em;

    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
}
:root[style] #${TTS_ID_NEXT},
:root #${TTS_ID_NEXT} {
    margin-right: 0.2em;

    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
}

:root[style] .${TTS_ID_SPEAKING_DOC_ELEMENT},
:root .${TTS_ID_SPEAKING_DOC_ELEMENT} {
    /*
    outline-color: silver;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 1px;
    */
}
:root[style] .${TTS_CLASS_INJECTED_SPAN},
:root .${TTS_CLASS_INJECTED_SPAN} {
    color: black !important;
    background: #FFFFCC !important;

    /* text-decoration: underline; */

    padding: 0;
    margin: 0;
}
/*
:root[style*="readium-night-on"] .${TTS_CLASS_INJECTED_SPAN} {
    color: white !important;
    background: #333300 !important;
}
:root[style] .${TTS_CLASS_INJECTED_SUBSPAN},
:root .${TTS_CLASS_INJECTED_SUBSPAN} {
    text-decoration: underline;
    padding: 0;
    margin: 0;
}
*/
:root[style] .${TTS_ID_INJECTED_PARENT},
:root .${TTS_ID_INJECTED_PARENT} {
    /*
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 1px;
    */
}
:root[style*="readium-night-on"] .${TTS_ID_INJECTED_PARENT} {
    /*
    outline-color: white !important;
    */
}

.${TTS_CLASS_UTTERANCE} {
    margin-bottom: 1em;
    padding: 0;
    display: block;
}

:root[style] div#${TTS_ID_ACTIVE_UTTERANCE},
:root div#${TTS_ID_ACTIVE_UTTERANCE} {
    /* background-color: yellow !important; */

    color: black !important;
}
:root[style*="readium-night-on"] div#${TTS_ID_ACTIVE_UTTERANCE} {
    color: white !important;
}
:root[style*="readium-sepia-on"] div#${TTS_ID_ACTIVE_UTTERANCE} {
    color: black !important;
}
:root[style*="--USER__textColor"] div#${TTS_ID_ACTIVE_UTTERANCE} {
    color: var(--USER__textColor) !important;
}

:root[style] span#${TTS_ID_ACTIVE_WORD},
:root span#${TTS_ID_ACTIVE_WORD} {
    color: black !important;

    /*
    text-decoration: underline;
    text-underline-position: under;
    */
    outline-color: black;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 1px;

    padding: 0;
    margin: 0;
}
:root[style*="readium-night-on"] span#${TTS_ID_ACTIVE_WORD} {
    color: white !important;
    outline-color: white;
}
:root[style*="readium-sepia-on"] span#${TTS_ID_ACTIVE_WORD} {
    color: black !important;
    outline-color: black;
}
:root[style*="--USER__textColor"] span#${TTS_ID_ACTIVE_WORD} {
    color: var(--USER__textColor) !important;
    outline-color: var(--USER__textColor);
}
`;

export const ROOT_CLASS_INVISIBLE_MASK = "r2-visibility-mask";
export const visibilityMaskCssStyles = `
:root[style] *.${ROOT_CLASS_INVISIBLE_MASK},
:root *.${ROOT_CLASS_INVISIBLE_MASK} {
    visibility: hidden !important;
}
`;

export const ROOT_CLASS_KEYBOARD_INTERACT = "r2-keyboard-interact";
export const CSS_CLASS_NO_FOCUS_OUTLINE = "r2-no-focus-outline";
export const focusCssStyles = `
@keyframes readium2ElectronAnimation_FOCUS {
    0% {
    }
    100% {
        outline: inherit;
    }
}
:root[style] *:focus,
:root *:focus {
    outline: none;
}
:root[style].${ROOT_CLASS_KEYBOARD_INTERACT} *.${CSS_CLASS_NO_FOCUS_OUTLINE}:focus,
:root.${ROOT_CLASS_KEYBOARD_INTERACT} *.${CSS_CLASS_NO_FOCUS_OUTLINE}:focus {
    outline: none !important;
}
:root[style].${ROOT_CLASS_KEYBOARD_INTERACT} *:focus,
:root.${ROOT_CLASS_KEYBOARD_INTERACT} *:focus {
    outline-color: blue !important;
    outline-style: solid !important;
    outline-width: 2px !important;
    outline-offset: 2px !important;
}
/*
:root[style]:not(.${ROOT_CLASS_KEYBOARD_INTERACT}) *:focus,
:root:not(.${ROOT_CLASS_KEYBOARD_INTERACT}) *:focus {
    animation-name: readium2ElectronAnimation_FOCUS;
    animation-duration: 3s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}
*/
`;

export const targetCssStyles = `
@keyframes readium2ElectronAnimation_TARGET {
    0% {
    }
    100% {
        outline: inherit;
    }
}
:root[style] *:target,
:root *:target {
    outline-color: green !important;
    outline-style: solid !important;
    outline-width: 2px !important;
    outline-offset: 2px !important;

    animation-name: readium2ElectronAnimation_TARGET;
    animation-duration: 3s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}
:root[style] *.r2-no-target-outline:target,
:root *.r2-no-target-outline:target {
    outline: inherit !important;
}
`;

export const selectionCssStyles = `
:root[style] ::selection,
:root ::selection {
background: rgb(155, 179, 240) !important;
color: black !important;
}

:root[style*="readium-night-on"] ::selection {
background: rgb(100, 122, 177) !important;
color: white !important;
}
`;

export const scrollBarCssStyles = `
::-webkit-scrollbar-button {
height: 0px !important;
width: 0px !important;
}

::-webkit-scrollbar-corner {
background: transparent !important;
}

/*::-webkit-scrollbar-track-piece {
background: red;
} */

::-webkit-scrollbar {
width:  14px;
height: 14px;
}

::-webkit-scrollbar-thumb {
background: #727272;
background-clip: padding-box !important;
border: 3px solid transparent !important;
border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
background: #4d4d4d;
}

::-webkit-scrollbar-track {
box-shadow: inset 0 0 3px rgba(40, 40, 40, 0.2);
background: #dddddd;
box-sizing: content-box;
}

::-webkit-scrollbar-track:horizontal {
border-top: 1px solid silver;
}
::-webkit-scrollbar-track:vertical {
border-left: 1px solid silver;
}

:root[style*="readium-night-on"] ::-webkit-scrollbar-thumb {
background: #a4a4a4;
border: 3px solid #545454;
}

:root[style*="readium-night-on"] ::-webkit-scrollbar-thumb:hover {
background: #dedede;
}

:root[style*="readium-night-on"] ::-webkit-scrollbar-track {
background: #545454;
}

:root[style*="readium-night-on"] ::-webkit-scrollbar-track:horizontal {
border-top: 1px solid black;
}
:root[style*="readium-night-on"] ::-webkit-scrollbar-track:vertical {
border-left: 1px solid black;
}`;

export const readPosCssStylesAttr1 = "data-readium2-read-pos1";
export const readPosCssStylesAttr2 = "data-readium2-read-pos2";
export const readPosCssStylesAttr3 = "data-readium2-read-pos3";
export const readPosCssStylesAttr4 = "data-readium2-read-pos4";
export const readPosCssStyles = `
:root[style*="readium-sepia-on"] *[${readPosCssStylesAttr1}],
:root[style*="readium-night-on"] *[${readPosCssStylesAttr1}],
:root[style] *[${readPosCssStylesAttr1}],
:root *[${readPosCssStylesAttr1}] {
    color: black !important;
    background: magenta !important;

    outline-color: magenta !important;
    outline-style: solid !important;
    outline-width: 6px !important;
    outline-offset: 0px !important;
}
:root[style*="readium-sepia-on"] *[${readPosCssStylesAttr2}],
:root[style*="readium-night-on"] *[${readPosCssStylesAttr2}],
:root[style] *[${readPosCssStylesAttr2}],
:root *[${readPosCssStylesAttr2}] {
    color: black !important;
    background: yellow !important;

    outline-color: yellow !important;
    outline-style: solid !important;
    outline-width: 4px !important;
    outline-offset: 0px !important;
}
:root[style*="readium-sepia-on"] *[${readPosCssStylesAttr3}],
:root[style*="readium-night-on"] *[${readPosCssStylesAttr3}],
:root[style] *[${readPosCssStylesAttr3}],
:root *[${readPosCssStylesAttr3}] {
    color: black !important;
    background: green !important;

    outline-color: green !important;
    outline-style: solid !important;
    outline-width: 2px !important;
    outline-offset: 0px !important;
}
:root[style*="readium-sepia-on"] *[${readPosCssStylesAttr4}],
:root[style*="readium-night-on"] *[${readPosCssStylesAttr4}],
:root[style] *[${readPosCssStylesAttr4}],
:root *[${readPosCssStylesAttr4}] {
    color: black !important;
    background: silver !important;

    outline-color: silver !important;
    outline-style: solid !important;
    outline-width: 1px !important;
    outline-offset: 0px !important;
}`;

export const AUDIO_PROGRESS_CLASS = "r2-audio-progress";
export const AUDIO_ID = "r2-audio";
export const AUDIO_BODY_ID = "r2-audio-body";
export const AUDIO_SECTION_ID = "r2-audio-section";
export const AUDIO_CONTROLS_ID = "r2-audio-controls";
export const AUDIO_COVER_ID = "r2-audio-cover";
export const AUDIO_TITLE_ID = "r2-audio-title";
export const AUDIO_SLIDER_ID = "r2-audio-slider";
export const AUDIO_TIME_ID = "r2-audio-time";
export const AUDIO_PERCENT_ID = "r2-audio-percent";
export const AUDIO_PLAYPAUSE_ID = "r2-audio-playPause";
export const AUDIO_PREVIOUS_ID = "r2-audio-previous";
export const AUDIO_NEXT_ID = "r2-audio-next";
export const AUDIO_REWIND_ID = "r2-audio-rewind";
export const AUDIO_FORWARD_ID = "r2-audio-forward";

export const audioCssStyles = `

#${AUDIO_BODY_ID} {
    padding: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    height: 100vh !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    user-select: none;
}

#${AUDIO_SECTION_ID} {
    margin: 0;
    padding: 0;
    min-width: 500px;
}

#${AUDIO_TITLE_ID} {
    margin-top: 1em;
    margin-bottom: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    width: 80%;
    text-align: center;
}

#${AUDIO_COVER_ID} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px !important;
    max-height: 250px !important;
    margin-top: 0.4em;
    margin-bottom: 0.6em;
    cursor: pointer;
}

:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_COVER_ID} {
    cursor: wait;
}

#${AUDIO_ID} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    height: 2.5em;
    width: 80%;
}

#${AUDIO_CONTROLS_ID} {
    display: block;
    padding: 0;
    margin: 0;
    margin-left: auto;
    margin-right: auto;

    max-width: 500px;
    min-width: 500px;
    width: 500px;
    height: auto;

    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    grid-template-columns: auto 3em 7em 3em auto;
    grid-template-rows: auto 1.5em auto;
}

#${AUDIO_CONTROLS_ID} button {
    border: 0;
    background-color: transparent;
    text-align: center;
    padding: 0;
    margin: 0;
    display: block;
    cursor: pointer;
    position: relative;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;

    box-sizing: border-box;

    justify-self: center;
}

:root:not(.${AUDIO_PROGRESS_CLASS}) #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID},
:root[style]:not(.${AUDIO_PROGRESS_CLASS}) #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID} {

    width: 0;
    height: 40px;

    border-color: transparent transparent transparent #202020 !important;

    transition: 100ms all ease;
    will-change: border-width;

    border-style: solid;
    border-width: 20px 0 20px 40px;
}

:root:not(.${AUDIO_PROGRESS_CLASS}) #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID}.pause {
    border-style: double;
    border-width: 0px 0 0px 40px;
}

:root:not(.${AUDIO_PROGRESS_CLASS}) #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID}:hover,
:root[style]:not(.${AUDIO_PROGRESS_CLASS}) #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID}:hover {

    border-color: transparent transparent transparent #404040 !important;
}

:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID} {
    cursor: wait;
    width: 40px;
    height: 40px;
}
:root[style].${AUDIO_PROGRESS_CLASS} #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID}:after {
    content: "";
    border-radius: 50%;

    position: absolute;
    width: 40px;
    height: 40px;
    left: 0px;
    top: 0px;

    transform: translateZ(0);
    animation: readium2ElectronAnimation_audioLoad-spin 1.1s infinite linear;

    border-top: 3px solid #999999;
    border-right: 3px solid #999999;
    border-bottom: 3px solid #999999;
    border-left: 3px solid #333333;
}
:root[style*="readium-night-on"].${AUDIO_PROGRESS_CLASS} #${AUDIO_CONTROLS_ID} #${AUDIO_PLAYPAUSE_ID}:after {

    border-top: 3px solid #202020;
    border-right: 3px solid #202020;
    border-bottom: 3px solid #202020;
    border-left: 3px solid white;
}
@keyframes readium2ElectronAnimation_audioLoad-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

#${AUDIO_CONTROLS_ID} #${AUDIO_NEXT_ID},
#${AUDIO_CONTROLS_ID} #${AUDIO_PREVIOUS_ID},
#${AUDIO_CONTROLS_ID} #${AUDIO_REWIND_ID},
#${AUDIO_CONTROLS_ID} #${AUDIO_FORWARD_ID} {
    width: 30px;
    height: 30px;
    position: relative;
    align-self: center;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_NEXT_ID}:before, #${AUDIO_CONTROLS_ID} #${AUDIO_NEXT_ID}:after,
#${AUDIO_CONTROLS_ID} #${AUDIO_PREVIOUS_ID}:before, #${AUDIO_CONTROLS_ID} #${AUDIO_PREVIOUS_ID}:after,
#${AUDIO_CONTROLS_ID} #${AUDIO_REWIND_ID}:before, #${AUDIO_CONTROLS_ID} #${AUDIO_REWIND_ID}:after,
#${AUDIO_CONTROLS_ID} #${AUDIO_FORWARD_ID}:before, #${AUDIO_CONTROLS_ID} #${AUDIO_FORWARD_ID}:after {
    content: '';
    border-color: transparent;
    border-style: solid;
    position: absolute;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_PREVIOUS_ID} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    justify-self: left;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_PREVIOUS_ID}:before {
    border: none;
    background-color: #555;
    height: 30%;
    width: 30%;
    top: 35%;
    left: 50%;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_PREVIOUS_ID}:after {
    left: -50%;
    top: 0;
    border-width: 15px 15px;
    border-right-color: #555;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_NEXT_ID} {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;

    justify-self: right;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_NEXT_ID}:before {
    border: none;
    background-color: #555;
    height: 30%;
    width: 30%;
    top: 35%;
    left: 20%;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_NEXT_ID}:after {
    left: 50%;
    top: 0;
    border-width: 15px 15px;
    border-left-color: #555;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_REWIND_ID} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    justify-self: right;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_REWIND_ID}:before {
    left: -20%;
    top: 0;
    border-width: 15px 15px;
    border-right-color: #555;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_REWIND_ID}:after {
    left: -50%;
    top: 0;
    border-width: 15px 15px;
    border-right-color: #555;
}

#${AUDIO_CONTROLS_ID} #${AUDIO_FORWARD_ID} {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;

    justify-self: left;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_FORWARD_ID}:before {
    left: 20%;
    top: 0;
    border-width: 15px 15px;
    border-left-color: #555;
}
#${AUDIO_CONTROLS_ID} #${AUDIO_FORWARD_ID}:after {
    left: 50%;
    top: 0;
    border-width: 15px 15px;
    border-left-color: #555;
}


:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_FORWARD_ID},
:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_REWIND_ID} {
    display: none;
}

#${AUDIO_PERCENT_ID}, #${AUDIO_TIME_ID} {
    font-size: 0.9em !important;
    font-family: sans-serif !important;
    margin-top: -0.5em;
}
#${AUDIO_TIME_ID} {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    text-align: left;
}
#${AUDIO_PERCENT_ID} {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;

    text-align: right;
}

:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_PERCENT_ID},
:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_TIME_ID} {
    visibility: hidden;
}

:root[style] #${AUDIO_SLIDER_ID},
:root #${AUDIO_SLIDER_ID} {
padding: 0;
margin: 0;

display: block;

grid-column-start: 1;
grid-column-end: 6;
grid-row-start: 2;
grid-row-end: 3;

cursor: pointer;
-webkit-appearance: none;

background: transparent !important;

background-clip: padding-box;
border-radius: 2px;
overflow: hidden;

position: relative;
}

:root[style].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID},
:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID} {

cursor: wait;
}

:root[style].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}:before,
:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}:before {
    content: '';
    position: absolute;
    background-color: #999999;
    left: 0;
    top: 1em;
    height: 0.4em;
    transform: translateZ(0);
    will-change: left, right;
    animation: readium2ElectronAnimation_audioLoad 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

:root[style].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}:after,
:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}:after {
    content: '';
    position: absolute;
    background-color: #999999;
    left: 0;
    top: 1em;
    height: 0.4em;
    transform: translateZ(0);
    will-change: left, right;
    animation: readium2ElectronAnimation_audioLoad-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

:root[style*="readium-night-on"].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}:after {
    background: #545454;
}

@keyframes readium2ElectronAnimation_audioLoad {
0% {
left: -35%;
right: 100%; }
60% {
left: 100%;
right: -90%; }
100% {
left: 100%;
right: -90%; } }

@keyframes readium2ElectronAnimation_audioLoad-short {
0% {
left: -200%;
right: 100%; }
60% {
left: 107%;
right: -8%; }
100% {
left: 107%;
right: -8%; } }

:root #${AUDIO_SLIDER_ID}::-webkit-slider-runnable-track,
:root[style] #${AUDIO_SLIDER_ID}::-webkit-slider-runnable-track {
    cursor: pointer;

    width: 100%;
    height: 0.5em;

    background: #999999;

    padding: 0;
    margin: 0;

    border: none;
    border-radius: 0.2em;
}
:root[style*="readium-night-on"] #${AUDIO_SLIDER_ID}::-webkit-slider-runnable-track {
    background: #545454;
}

:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}::-webkit-slider-runnable-track,
:root[style].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}::-webkit-slider-runnable-track {
    background: transparent !important;
    cursor: wait;
}
:root[style*="readium-night-on"].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}::-webkit-slider-runnable-track {
    background: transparent !important;
}

:root #${AUDIO_SLIDER_ID}::-webkit-slider-thumb,
:root[style] #${AUDIO_SLIDER_ID}::-webkit-slider-thumb {
    -webkit-appearance: none;

    cursor: pointer;

    width: 0.5em;
    height: 1em;

    padding: 0;
    margin: 0;
    margin-top: -0.2em;

    border: none;
    border-radius: 0.2em;

    background: #333333;
}
:root[style*="readium-night-on"] #${AUDIO_SLIDER_ID}::-webkit-slider-thumb {
    background: white;
}

:root.${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}::-webkit-slider-thumb,
:root[style].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}::-webkit-slider-thumb {
    background: transparent !important;
    cursor: wait;
}
:root[style*="readium-night-on"].${AUDIO_PROGRESS_CLASS} #${AUDIO_SLIDER_ID}::-webkit-slider-thumb {
    background: transparent !important;
}
`;
