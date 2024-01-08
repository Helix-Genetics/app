interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void
  classList: string
  type?: 'submit' | 'reset' | 'button' | undefined
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, classList, onClick, ...rest }) => (
  <button className={classList} onClick={onClick} {...rest}>
    {children}
  </button>
)

export default ActionButton
