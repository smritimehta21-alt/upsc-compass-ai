import React from 'react';

interface SuccessProps {
  message: string;
  onDismiss?: () => void;
}

export function SuccessMessage({ message, onDismiss }: SuccessProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center">
      <p className="text-green-800">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-green-600 hover:text-green-800 font-bold"
        >
          ×
        </button>
      )}
    </div>
  );
}
