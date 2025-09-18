export default function Work({ work }: { work: { id: string; description: string }[] }) {
    return (
        <div className="work-experience">
            <ul className="work-item">
                {work.map((item, index) => (
                    <li key={item.id} style={{ animationDelay: `${index * 2}s` }}>
                        {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}