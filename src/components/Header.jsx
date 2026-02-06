// Header component for the PWA. Displays a title and an optional subtitle.
// Props:
//   - title (string): The main title displayed in the header.
//   - subtitle (string): A secondary line of text displayed below the title.
export default function Header({ title, subtitle }) {
  return (
    <header className="appHeader">
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </header>
  );
}