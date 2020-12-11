import React, { useState, useLayoutEffect, useCallback, useRef } from "react";
import Swipe from "react-easy-swipe";

function getDimensionObject(node, useDomDimensions) {
    const rect = node.getBoundingClientRect();

    return {
        width: useDomDimensions ? node.offsetWidth : rect.width,
        height: useDomDimensions ? node.offsetHeight : rect.height,
        top: "x" in rect ? rect.x : rect.top,
        left: "y" in rect ? rect.y : rect.left,
        x: "x" in rect ? rect.x : rect.left,
        y: "y" in rect ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom
    };
}

function useDimensions({ liveMeasure = true, useDomDimensions = false } = {}) {
    const [dimensions, setDimensions] = useState({});
    const [node, setNode] = useState(null);

    const ref = useCallback((node) => {
        setNode(node);
    }, []);

    useLayoutEffect(() => {
        if (node) {
            const measure = () =>
                window.requestAnimationFrame(() =>
                    setDimensions(getDimensionObject(node, useDomDimensions))
                );
            measure();

            if (liveMeasure) {
                window.addEventListener("resize", measure);
                window.addEventListener("scroll", measure);

                return () => {
                    window.removeEventListener("resize", measure);
                    window.removeEventListener("scroll", measure);
                };
            }
        }
    }, [node]);

    return [ref, dimensions, node];
}

const Slide = ({ children }) => {
    return (
        <div
            style={{
                height: "256px",
                padding: 16,
                background: "red"
            }}
        >
            Slide {children}
        </div>
    );
};

const Slider = ({ slidesMatrix }) => {
    const slidesContainerRef = useRef();

    const [containerRef, { width, height }] = useDimensions();
    const [yPosition, setYPosition] = useState(0);
    const [xPosition, setXPosition] = useState(0);
    const offsetY = yPosition * height;
    const offsetX = xPosition * width;

    const onSwipeEnd = () => {
        slidesContainerRef.current.style.setProperty(
            "transform",
            `translateY(${offsetY}px) translateX(${offsetX}px)`
        );
    };

    const onSwipeMove = ({ x, y }) => {
        slidesContainerRef.current.style.setProperty(
            "transform",
            `translateY(${y + offsetY}px) translateX(${x + offsetX}px)`
        );
        return true;
        console.log("Slider onSwipeMove", { x, y });
    };

    const onSwipeRight = () => {
        setXPosition((p) => {
            if (p < 0) {
                return p + 1;
            }

            return p;
        });
    };

    const onSwipeLeft = () => {
        const currentXRow = slidesMatrix[Math.abs(yPosition)];

        if (!currentXRow) {
            debugger;
        }

        setXPosition((p) => {
            if (Math.abs(p - 1) < currentXRow.length) {
                return p - 1;
            }

            return p;
        });
    };

    const onSwipeUp = () => {
        setYPosition((p) => {
            if (Math.abs(p - 1) < slidesMatrix.length) {
                return p - 1;
            }

            return p;
        });
    };

    const onSwipeDown = () => {
        setYPosition((p) => {
            if (p < 0) {
                return p + 1;
            }

            return p;
        });
    };

    return (
        <div style={{ height: "100%" }} ref={containerRef}>
            <Swipe
                allowMouseEvents
                onSwipeEnd={onSwipeEnd}
                onSwipeMove={onSwipeMove}
                onSwipeRight={onSwipeRight}
                onSwipeLeft={onSwipeLeft}
                onSwipeUp={onSwipeUp}
                onSwipeDown={onSwipeDown}
                tolerance={100}
            >
                <div
                    ref={slidesContainerRef}
                    style={{
                        transition: "transform 0.2s ease",
                        transform: `translateY(${offsetY}px) translateX(${offsetX}px)`
                    }}
                >
                    {slidesMatrix.map((slideRows) => (
                        <div
                            style={{
                                display: "flex",
                                transition: "transform 0.2s ease"
                            }}
                        >
                            {slideRows.map((slide) => (
                                <div
                                    style={{
                                        width: `calc(${width}px - 16px)`,
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        padding: "8px"
                                    }}
                                >
                                    {slide}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Swipe>
        </div>
    );
};

const GridSlider2 = () => {
    return (
        <div style={{ height: "200px", overflow: "hidden" }}>
            <Slider
                slidesMatrix={[
                    [<Slide>0 - 0</Slide>, <Slide>0 - 1</Slide>],
                    [<Slide>1 - 0</Slide>, <Slide>1 - 1</Slide>],
                    [<Slide>2 - 0</Slide>, <Slide>2 - 1</Slide>]
                ]}
            />
        </div>
    );
};

export default GridSlider2;
