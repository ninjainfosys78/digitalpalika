import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

// The last item is the current page and is rendered without a link.
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-gray-500">
                {items.map(({ label, href }, index) => (
                    <li key={label} className="flex items-center gap-2">
                        {index > 0 && <span aria-hidden>/</span>}
                        {href ? (
                            <Link href={href} className="text-[#003893] hover:underline">
                                {label}
                            </Link>
                        ) : (
                            <span aria-current="page" className="font-medium text-gray-800">
                                {label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
