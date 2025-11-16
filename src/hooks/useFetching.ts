import { useState } from 'react';

export const useFetching = <TArgs extends unknown[], TResult = void>(
  callback: (...args: TArgs) => Promise<TResult>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args: TArgs): Promise<TResult | void> => {
    try {
      setIsLoading(true);
      setError('');
      return await callback(...args);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
