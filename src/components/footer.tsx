export function Footer() {
    return (
        <footer className="w-full h-[47px] border-t mt-12">
            <div className="max-w-[640px] mx-auto h-[47px]  px-6 sm:px-0 flex items-center justify-between text-sm opacity-75">
                <p>Virtu Vince Fortuna</p>
                <div className="flex items-center gap-2.5">
                    <a
                        href="https://github.com/joqd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-100 opacity-75 transition-opacity"
                    >
                        <img
                            src="/icons/github.svg"
                            alt="GitHub"
                            className="w-4 h-4 dark:invert dark:brightness-200"
                        />
                    </a>
                    <a
                        href="https://t.me/joqd_net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-100 opacity-75 transition-opacity"
                    >
                        <img
                            src="/icons/telegram.svg"
                            alt="Telegram"
                            className="w-4 h-4 dark:invert dark:brightness-200"
                        />
                    </a>
                    <a
                        href="https://x.com/0xjoqd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-100 opacity-75 transition-opacity"
                    >
                        <img
                            src="/icons/x.svg"
                            alt="X"
                            className="w-4 h-4 dark:invert dark:brightness-200"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}