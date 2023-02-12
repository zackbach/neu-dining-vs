export function ItemBadges({ filters }) {
  const labels = filters.filter((f) => f.type === "label");

  return (
    <ul>
      {labels.map((label) => (
        <li key={label.id}>{label.name}</li>
      ))}
    </ul>
  );
}
