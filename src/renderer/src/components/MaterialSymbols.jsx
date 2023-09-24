
export default function MaterialSymbol(props) {
    const className = `material-symbols-outlined text-ctp-subtext0 select-none !text-${props.size} scale-[1.75] ${props.style ? props.style : ''}`;
    return <span className={className}>{props.symbol}</span>;
}
