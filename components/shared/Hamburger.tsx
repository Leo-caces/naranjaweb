'use client'

export interface HamburgerProps {
    /** Callback function, which should be executed on click */
    onClick: () => void;

    /** Initial state of our button */
    isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props;
    const isOpen = isInitiallyOpen ?? false;

    const handleClick = () => {
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            className="z-50 flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5"
        >
            <div
                className={`block h-0.5 w-7 rounded-full bg-current transition-all duration-300 ${
                    isOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'
                }`}
            />
            <div
                className={`block h-0.5 w-7 rounded-full bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <div
                className={`block h-0.5 w-7 rounded-full bg-current transition-all duration-300 ${
                    isOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0 rotate-0'
                }`}
            />
        </button>
    );
}
