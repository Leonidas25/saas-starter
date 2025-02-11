interface CommonComponentProps {
    message: string;
}
  
export default function CommonComponent({ message }: CommonComponentProps) {
    return (
        <div className="p-4 bg-gray-100 border border-gray-200 rounded">
        <p>{message}</p>
        </div>
    );
}