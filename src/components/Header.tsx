type Props = {
  back?: boolean;
  onBack?: () => void;
};

export default function Header({ back, onBack }: Props) {
  return (
    <header className="flex items-center gap-3 px-4 py-3 bg-white shadow-sm">
      {back && (
        <button
          onClick={onBack}
          className="text-sm font-medium text-purple-600 hover:text-purple-700"
        >
          ← Back
        </button>
      )}

      <h1 className="text-lg font-semibold text-gray-800">
        Studio
      </h1>
    </header>
  );
}
