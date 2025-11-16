import { useState, useCallback } from 'react';
import type { AsyncCallback, UseFetchingReturn } from 'types/types';

export const useFetching = <T extends AsyncCallback>(
  callback: T,
): UseFetchingReturn<T> => {
  type Result = Awaited<ReturnType<T>>;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = useCallback(
    async (...args: Parameters<T>): Promise<Result | undefined> => {
      try {
        setIsLoading(true);
        setError('');
        return (await callback(...args)) as Result;
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err ?? 'Unknown error'));
        return undefined;
      } finally {
        setIsLoading(false);
      }
    },
    [callback],
  );

  return [fetching, isLoading, error] as const;
};
