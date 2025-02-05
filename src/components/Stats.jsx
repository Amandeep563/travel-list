export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageItems = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageItems === 100
          ? "You got Everything! Read to go ✈️"
          : `💼 You have ${numItems} items on your List, and you already packed
          ${numPacked} (${percentageItems}%)`}
      </em>
    </footer>
  );
}
