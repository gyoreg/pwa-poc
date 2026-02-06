// Footer navigation component. Renders a list of buttons representing
// navigational tabs. When clicked, each button invokes the onChange
// callback with the associated tab id.
export default function FooterNav({ tabs, activeTab, onChange }) {
  return (
    <nav className="appFooter" aria-label="Bottom navigation">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`footerBtn ${activeTab === t.id ? "active" : ""}`}
          onClick={() => onChange(t.id)}
          aria-current={activeTab === t.id ? "page" : undefined}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}