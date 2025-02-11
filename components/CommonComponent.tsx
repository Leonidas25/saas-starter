interface CommonComponentProps {
    message: string;
  }
  
  export default function CommonComponent({ message }: CommonComponentProps) {
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <p className="text-gray-700">{message}</p>
      </div>
    );
  }