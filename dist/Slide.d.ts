import Timeout from "./Timeout.js";
export default class Slide {
    container: Element;
    slides: Array<Element>;
    controls: Element;
    time: number;
    index: number;
    slide: Element;
    timeout: Timeout | null;
    pausedTimeout: Timeout | null;
    paused: boolean;
    thumbItems: Array<HTMLElement> | null;
    thumb: HTMLElement | null;
    constructor(container: Element, slides: Array<Element>, controls: Element, time?: number);
    hide(elemento: Element): void;
    show(index: number): void;
    autoVideo(video: HTMLVideoElement): void;
    auto(time: number): void;
    prev(): void;
    next(): void;
    pause(): void;
    continue(): void;
    private addControls;
    private addThumbItems;
    private init;
}
