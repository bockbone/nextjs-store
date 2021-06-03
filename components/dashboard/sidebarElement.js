import Link from "next/link";

function SidebarElement({ href, className, text, Icon }) {
  return (
    <Link href={`/${href}`}>
      <div className={className}>
        <Icon className="h-6 w-6 mx-2" />
        {text}
      </div>
    </Link>
  );
}

export default SidebarElement;
