import React from 'react';

interface ErrorProps {
  message: string;
  onDismiss?: () => void;
}

export function ErrorMessage({ message, onDismiss }: ErrorProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex justify-between items-center">
      <p className="text-red-800">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-600 hover:text-red-800 font-bold"
        >
          ×
        </button>
      )}
    </div>
  );
}
