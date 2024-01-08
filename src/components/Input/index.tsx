interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, type, id, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
    />
  </div>
)

export default Input
