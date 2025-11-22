// app/services/page.tsx

interface PriceRow {
    category: string;
    price: string;
    description?: string;
  }
  
  interface PriceTableProps {
    title?: string;
    rows: PriceRow[];
  }
  
  export default function PriceTable({ title, rows }: PriceTableProps) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        {title && (
          <div className="bg-[#1e3a8a] text-white px-6 py-4">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Kategorie
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Preis
                </th>
                {rows.some((row) => row.description) && (
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Beschreibung
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-800">{row.category}</td>
                  <td className="px-6 py-4">
                    <span className="text-[#3b82f6] font-bold text-lg">
                      {row.price}
                    </span>
                  </td>
                  {row.description && (
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row.description}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }