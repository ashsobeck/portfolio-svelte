export const typewriter = function typewriter(node: Element, { speed = 1 }) {
    const valid: boolean = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
    
    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text: string = node.textContent ?? '';
    const duration: number = text.length / (speed * 0.01);

    return {
        duration,
        tick: (t: number) => {
            const i: number = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
        }
    };

}
