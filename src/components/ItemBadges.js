export function ItemBadges({ className, filters }) {
  const labels = filters.filter((f) => f.type === "label");

  return (
    <ul className={className + " flex flex-row"}>
      {labels.map((label) => (
        <li className={"pr-1"} key={label.id}>{label.name.substring(0,2)}</li>
      ))}
    </ul>
  );
}
